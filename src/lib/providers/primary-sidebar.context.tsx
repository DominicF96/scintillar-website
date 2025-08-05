"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { findNavigationItemByPath, navigationStructure } from "@/constants/navigation";
import { getSectionNavigationItems } from "@/lib/services/navigation-loader";
import { useLocale } from "@/providers/locale.context";

interface PrimarySidebarContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isCollapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const PrimarySidebarContext = createContext<PrimarySidebarContextType | undefined>(undefined);

export function PrimarySidebarProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isCollapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();

  // Enhanced function to find navigation item including dynamic content
  const findNavigationItemByPathEnhanced = (path: string) => {
    // First try the static navigation
    const staticResult = findNavigationItemByPath(path);
    if (staticResult) {
      return staticResult;
    }

    // Then check dynamic sections
    for (const section of navigationStructure) {
      const dynamicItems = getSectionNavigationItems(section.id, locale);
      if (dynamicItems.length > 0) {
        const findInDynamicItems = (items: any[]): any => {
          for (const item of items) {
            if (item.href === path) {
              return item;
            }
            if (item.children) {
              const found = findInDynamicItems(item.children);
              if (found) return found;
            }
          }
          return undefined;
        };

        const dynamicItem = findInDynamicItems(dynamicItems);
        if (dynamicItem) {
          return { section, item: dynamicItem };
        }
      }
    }

    return undefined;
  };

  // Auto-detect active section based on current path
  useEffect(() => {
    // Remove locale prefix from pathname for matching
    const cleanPath = pathname.replace(/^\/[a-z]{2}/, "");
    
    const result = findNavigationItemByPathEnhanced(cleanPath);
    if (result) {
      setActiveSection(result.section.id);
    } else {
      // Fallback logic for paths not in navigation structure
      if (cleanPath === "/app" || cleanPath.endsWith("/app") || cleanPath === "") {
        setActiveSection("home");
      }
    }
  }, [pathname, locale]);

  return (
    <PrimarySidebarContext.Provider value={{ 
      activeSection, 
      setActiveSection, 
      isCollapsed, 
      setCollapsed 
    }}>
      {children}
    </PrimarySidebarContext.Provider>
  );
}

export function usePrimarySidebar() {
  const context = useContext(PrimarySidebarContext);
  if (!context) {
    throw new Error("usePrimarySidebar must be used within PrimarySidebarProvider");
  }
  return context;
}