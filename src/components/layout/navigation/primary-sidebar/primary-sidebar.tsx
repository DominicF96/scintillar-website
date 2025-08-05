"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Settings } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils/cn";
import { usePrimarySidebar } from "@/lib/providers/primary-sidebar.context";
import { useTranslation } from "@/lib/hooks/useTranslation";
import { useLocale } from "@/lib/providers/locale.context";
import { navigationStructure, getPrimaryNavigationHref, getFirstNavigableItemEnhanced } from "@/lib/constants/navigation";
import { useNavigationLoading } from "@/lib/providers/navigation-loading.context";
import * as i18n from "@/i18n/app/components/sidebar.i18n";

export default function PrimarySidebar() {
  const locale = useLocale();
  const { activeSection, setActiveSection } = usePrimarySidebar();
  const { startNavigation } = useNavigationLoading();
  const translations = useTranslation(i18n);
  
  // Optimistic active section state - only for user interactions
  const [optimisticActiveSection, setOptimisticActiveSection] = useState<string | null>(null);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  
  // Reset optimistic state when context active section changes (navigation completed)
  useEffect(() => {
    setOptimisticActiveSection(null);
  }, [activeSection]);

  const getItemPath = (href: string) => `/${locale}${href}`;
  
  const getSectionLabel = (sectionId: string) => {
    // Use the direct translation keys for primary sections
    return translations[sectionId] || sectionId;
  };

  // Get the enhanced navigation href that finds first available page
  // This automatically redirects to the first navigable page in a section
  // when clicking on the primary sidebar, even for dynamic content like docs
  const getEnhancedNavigationPath = (section: any) => {
    const firstAvailablePage = getFirstNavigableItemEnhanced(section, locale);
    return `/${locale}${firstAvailablePage}`;
  };

  const handleItemClick = (sectionId: string, targetUrl: string) => {
    // Mark that user has interacted
    setHasUserInteracted(true);
    // Optimistic update - immediately set the visual state
    setOptimisticActiveSection(sectionId);
    // Also update the context (which will be overridden by URL-based detection)
    setActiveSection(sectionId);
    // Start navigation loading state
    const sectionLabel = getSectionLabel(sectionId);
    startNavigation(targetUrl, sectionLabel);
  };
  
  // Determine which section should appear active (optimistic or actual)
  const getEffectiveActiveSection = (sectionId: string) => {
    // Only use optimistic state if user has interacted and we have an optimistic state
    if (hasUserInteracted && optimisticActiveSection !== null) {
      return optimisticActiveSection === sectionId;
    }
    // Otherwise use the actual active section from URL-based detection
    return activeSection === sectionId;
  };

  return (
    <TooltipProvider>
      <div className="w-16 bg-card border-r border-border flex flex-col justify-between py-4">
        {/* Main navigation items */}
        <div className="flex flex-col items-center space-y-2">
          {navigationStructure.map((section) => {
            const Icon = section.icon;
            const active = getEffectiveActiveSection(section.id);
            const targetUrl = getEnhancedNavigationPath(section);
            
            return (
              <Tooltip key={section.id} delayDuration={300}>
                <TooltipTrigger asChild>
                  <Link
                    href={targetUrl}
                    onClick={() => handleItemClick(section.id, targetUrl)}
                    className={cn(
                      "flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-200",
                      "hover:bg-accent hover:scale-105",
                      active 
                        ? "bg-accent shadow-sm scale-105" 
                        : "hover:bg-accent"
                    )}
                  >
                    <Icon 
                      className={cn(
                        "h-6 w-6 transition-colors",
                        active 
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      )}
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" className="font-medium">
                  {getSectionLabel(section.id)}
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>

        {/* Settings at bottom */}
        <div className="flex flex-col items-center">
          <Tooltip delayDuration={300}>
            <TooltipTrigger asChild>
              <Link
                href={getItemPath("/app/settings")}
                className={cn(
                  "flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-200",
                  "hover:bg-accent hover:scale-105"
                )}
              >
                <Settings 
                  className="h-6 w-6 transition-colors text-muted-foreground hover:text-primary"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" className="font-medium">
              {translations.settings}
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
}