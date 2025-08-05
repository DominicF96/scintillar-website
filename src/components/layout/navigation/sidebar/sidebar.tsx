"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { TooltipProvider } from "@/components/ui/tooltip";
import NavButton from "@/components/layout/navigation/nav-button";
import { cn } from "@/lib/utils/cn";
import {
  Search,
  Plus,
  X,
} from "lucide-react";
import * as i18n from "@/i18n/app/components/sidebar.i18n";
import { useSidebar } from "@/lib/providers/sidebar.context";
import { usePrimarySidebar } from "@/lib/providers/primary-sidebar.context";
import { useTranslation } from "@/lib/hooks/useTranslation";
import { useLocale } from "@/lib/providers/locale.context";
import { findNavigationSection } from "@/lib/constants/navigation";
import { getSectionNavigationItems } from "@/lib/services/navigation-loader";
import { useNavigationLoading } from "@/lib/providers/navigation-loading.context";
import { Button } from "@/components/ui/button";
import Logo from "@/components/common/logo";
import SearchInput from "@/components/forms/search/search-input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import "./sidebar.scss";

// Extend Window interface for resize data
declare global {
  interface Window {
    __sidebarResizeData?: {
      initialMouseX: number;
      initialWidth: number;
    };
  }
}

export default function Sidebar() {
  const locale = useLocale();
  const pathname = usePathname();
  const { search, comingSoon, newSimulation, ...navT } = useTranslation(i18n);
  const { isCollapsed, setSidebarCollapsed } = useSidebar();
  const { activeSection } = usePrimarySidebar();
  const { startNavigation } = useNavigationLoading();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [accordionValue, setAccordionValue] = useState<string[]>([]);
  
  // Optimistic active item state for immediate UI feedback - only for user interactions
  const [optimisticActiveHref, setOptimisticActiveHref] = useState<string | null>(null);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  
  // Reset optimistic state when pathname changes (navigation completed)
  useEffect(() => {
    setOptimisticActiveHref(null);
  }, [pathname]);
  
  // Sidebar width state
  const [sidebarWidth, setSidebarWidth] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('sidebar-width');
      return stored ? parseInt(stored, 10) : 300;
    }
    return 300;
  });
  const [isResizing, setIsResizing] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const resizeHandleRef = useRef<HTMLDivElement>(null);

  // Get the current active section's navigation items
  const currentSection = findNavigationSection(activeSection);
  const staticNavigationItems = currentSection?.children || [];
  
  // Get dynamic navigation items
  const dynamicNavigationItems = getSectionNavigationItems(activeSection, locale);
  
  // Merge static and dynamic items (dynamic items override static ones)
  const navigationItems = dynamicNavigationItems.length > 0 ? dynamicNavigationItems : staticNavigationItems;

  // Filter navigation items based on search query (including nested items)
  const filteredNavigationItems = React.useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    const results: any[] = [];
    
    const searchInItems = (items: any[], parentLabel?: string) => {
      items.forEach(item => {
        const label = (navT[item.label] || item.label).toLowerCase();
        const searchText = `${parentLabel ? parentLabel + " " : ""}${label}`;
        
        if (searchText.includes(query)) {
          results.push({
            ...item,
            displayLabel: parentLabel ? `${parentLabel} › ${navT[item.label] || item.label}` : (navT[item.label] || item.label)
          });
        }
        
        // Search in children
        if (item.children) {
          searchInItems(item.children, navT[item.label] || item.label);
        }
      });
    };
    
    searchInItems(navigationItems);
    return results;
  }, [searchQuery, navigationItems, navT]);

  // Function to check if any child item is active
  const hasActiveChild = (item: any): boolean => {
    if (!item.children) return false;
    return item.children.some((child: any) => {
      // Remove locale prefix from pathname for comparison
      const cleanPath = pathname.replace(/^\/[a-z]{2}/, "");
      const isChildActive = cleanPath === child.href;
      return isChildActive || (child.children && hasActiveChild(child));
    });
  };

  // Function to check if an item is active (with optimistic updates)
  const isItemActive = (item: any): boolean => {
    // Only use optimistic state if user has interacted and we have an optimistic href
    if (hasUserInteracted && optimisticActiveHref !== null) {
      return optimisticActiveHref === item.href;
    }
    // Otherwise use the actual pathname for proper initial state
    const cleanPath = pathname.replace(/^\/[a-z]{2}/, "");
    return cleanPath === item.href;
  };
  
  // Handle optimistic navigation click
  const handleNavClick = (href: string, label?: string) => {
    // Mark that user has interacted
    setHasUserInteracted(true);
    setOptimisticActiveHref(href);
    // Start navigation loading state
    const fullUrl = `/${locale}${href}`;
    startNavigation(fullUrl, label);
  };

  // Get default open accordion values based on active items
  const defaultOpenValues = React.useMemo((): string[] => {
    const openValues: string[] = [];
    navigationItems.forEach((item) => {
      if (hasActiveChild(item)) {
        openValues.push(item.id);
      }
    });
    return openValues;
  }, [navigationItems, pathname, locale]);

  // Update accordion value when defaultOpenValues change
  useEffect(() => {
    setAccordionValue(prev => {
      // Merge user-opened items with auto-opened active items
      const newValues = [...new Set([...prev, ...defaultOpenValues])];
      return newValues;
    });
  }, [defaultOpenValues]);

  // Save width to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('sidebar-width', sidebarWidth.toString());
    // Set CSS custom property for global usage
    document.documentElement.style.setProperty('--sidebar-width', `${sidebarWidth}px`);
    // Dispatch custom event to notify other components about sidebar width change
    window.dispatchEvent(new CustomEvent('sidebar-width-change', { detail: { width: sidebarWidth } }));
  }, [sidebarWidth]);

  // Set initial CSS custom property
  useEffect(() => {
    document.documentElement.style.setProperty('--sidebar-width', `${sidebarWidth}px`);
  }, []);

  // Resize handlers
  const handleResizeStart = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
    
    // Store the initial mouse position and sidebar width for proper calculation
    const rect = sidebarRef.current?.getBoundingClientRect();
    if (rect) {
      const initialMouseX = e.clientX;
      const initialWidth = sidebarWidth;
      
      // Store these values for use in handleResizeMove
      window.__sidebarResizeData = {
        initialMouseX,
        initialWidth
      };
    }
  }, [sidebarWidth]);

  const handleResizeMove = useCallback((e: MouseEvent) => {
    if (!isResizing || !window.__sidebarResizeData) return;
    
    const { initialMouseX, initialWidth } = window.__sidebarResizeData;
    const mouseDelta = e.clientX - initialMouseX;
    const newWidth = initialWidth + mouseDelta;
    
    const minWidth = 250;
    const maxWidth = 450;
    
    if (newWidth >= minWidth && newWidth <= maxWidth) {
      setSidebarWidth(newWidth);
    }
  }, [isResizing]);

  const handleResizeEnd = useCallback(() => {
    setIsResizing(false);
    // Clean up resize data
    delete window.__sidebarResizeData;
  }, []);

  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleResizeMove);
      document.addEventListener('mouseup', handleResizeEnd);
      document.body.classList.add('sidebar-resizing');
      
      return () => {
        document.removeEventListener('mousemove', handleResizeMove);
        document.removeEventListener('mouseup', handleResizeEnd);
        document.body.classList.remove('sidebar-resizing');
      };
    }
  }, [isResizing, handleResizeMove, handleResizeEnd]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        setIsSearchOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <TooltipProvider>
      {/* Mobile backdrop */}
      {!isCollapsed && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarCollapsed(true)}
        />
      )}
      
      <div
        ref={sidebarRef}
        className={cn(
          "border-r py-4 flex flex-col relative",
          "md:relative md:z-auto",
          "fixed inset-y-0 left-0 z-50 md:translate-x-0",
          isCollapsed 
            ? "w-16 md:w-16 -translate-x-full md:translate-x-0 transition-all duration-300 ease-in-out px-2" 
            : "translate-x-0 px-4"
        )}
        style={{
          width: isCollapsed ? undefined : `${sidebarWidth}px`,
          transition: isResizing ? 'none' : isCollapsed ? 'all 0.3s ease-in-out' : 'none'
        }}
      >
        <aside
          className={cn("flex flex-col h-full", isCollapsed && "items-center")}
        >
          {/* Mobile header with logo and close button */}
          <div className={cn(
            "flex items-center justify-between p-4 h-[65px] border-b md:hidden",
            isCollapsed && "hidden"
          )}>
            <Logo variant="horizontal" />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarCollapsed(true)}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Search */}
          <div className={cn(
            "pt-0 w-full flex flex-col items-center",
            isCollapsed ? "p-1" : "p-0"
          )}>
            <Button
              variant="outline"
              className={cn(
                "h-12 w-full text-sm items-center justify-between text-left overflow-hidden",
                isCollapsed ? "hidden" : "flex"
              )}
              onClick={() => setIsSearchOpen(true)}
            >
              <div className="flex items-center">
                <Search />
                &nbsp;{search.placeholder}
              </div>
              <Badge variant="secondary" className="text-xs">
                ⌘K
              </Badge>
            </Button>
            <Button
              variant="outline"
              className={cn(
                "h-12 w-12 text-sm items-center justify-center text-center",
                isCollapsed ? "flex" : "hidden"
              )}
              onClick={() => setIsSearchOpen(true)}
            >
              <Search />
            </Button>
          </div>

          {/* Context-aware navigation */}
          <div className={cn(
            "flex-1 overflow-y-auto",
            isCollapsed ? "p-1" : "pt-4"
          )}>
            {!isCollapsed ? (
              <div className="w-full">
                {/* Section title */}
                {currentSection && (
                  <div className="py-2 mb-4">
                    <h2 className="font-semibold text-sm">{navT[currentSection.id] || currentSection.label}</h2>
                  </div>
                )}
                
                {/* Navigation items */}
                <div className="space-y-1">
                  {navigationItems.length === 0 ? (
                    <div className="text-xs text-muted-foreground py-2">
                      {comingSoon}
                    </div>
                  ) : (
                    <>
                      {/* Accordion for items with children */}
                      <Accordion 
                        type="multiple" 
                        className="w-full"
                        value={accordionValue}
                        onValueChange={setAccordionValue}
                      >
                        {navigationItems
                          .filter((item) => item.children && item.children.length > 0)
                          .map((item) => (
                            <AccordionItem key={item.id} value={item.id} className="border-none">
                              <AccordionTrigger className="hover:no-underline py-2">
                                <div className="flex items-center gap-2">
                                  {item.icon && <item.icon className="h-4 w-4" />}
                                  <span className="text-sm">{navT[item.label] || item.label}</span>
                                </div>
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="flex flex-col gap-1 ml-4">
                                  {item.children?.map((child) => {
                                    const isActive = isItemActive(child);
                                    return child.icon ? (
                                      <NavButton
                                        key={child.id}
                                        href={`/${locale}${child.href}`}
                                        icon={child.icon}
                                        label={navT[child.label] || child.label}
                                        isActive={isActive}
                                        isCollapsed={false}
                                        onClick={() => handleNavClick(child.href, navT[child.label] || child.label)}
                                      />
                                    ) : null;
                                  })}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                      </Accordion>
                      
                      {/* Direct nav buttons for items without children */}
                      {navigationItems
                        .filter((item) => !item.children || item.children.length === 0)
                        .map((item) => {
                          const isActive = isItemActive(item);
                          return item.icon ? (
                            <React.Fragment key={item.id}>
                              <NavButton
                                href={item.href ? `/${locale}${item.href}` : undefined}
                                icon={item.icon}
                                label={navT[item.label] || item.label}
                                isActive={isActive}
                                isCollapsed={false}
                                onClick={() => item.href && handleNavClick(item.href, navT[item.label] || item.label)}
                              />
                              {item.separator && (
                                <div className="mx-2 my-2 border-t border-border" />
                              )}
                            </React.Fragment>
                          ) : null;
                        })}
                    </>
                  )}
                </div>
              </div>
            ) : (
              // Collapsed view - show items with tooltips
              <div className="flex flex-col gap-1">
                {navigationItems.map((item) => {
                  const elements: React.ReactElement[] = [];
                  
                  if (item.children && item.children.length > 0) {
                    // Show children in collapsed view
                    item.children.forEach((child) => {
                      if (child.icon) {
                        const isActive = isItemActive(child);
                        elements.push(
                          <NavButton
                            key={child.id}
                            href={`/${locale}${child.href}`}
                            icon={child.icon}
                            label={`${navT[item.label] || item.label} / ${navT[child.label] || child.label}`}
                            isActive={isActive}
                            isCollapsed={true}
                            onClick={() => handleNavClick(child.href, navT[child.label] || child.label)}
                          />
                        );
                      }
                    });
                  } else if (item.icon) {
                    const isActive = isItemActive(item);
                    elements.push(
                      <NavButton
                        key={item.id}
                        href={item.href ? `/${locale}${item.href}` : undefined}
                        icon={item.icon}
                        label={navT[item.label] || item.label}
                        isActive={isActive}
                        isCollapsed={true}
                        onClick={() => item.href && handleNavClick(item.href, navT[item.label] || item.label)}
                      />
                    );
                  }
                  
                  // Add separator if specified (in collapsed view, use a smaller separator)
                  if (item.separator) {
                    elements.push(
                      <div key={`${item.id}-separator-collapsed`} className="mx-2 my-1 border-t border-border" />
                    );
                  }
                  
                  return elements;
                }).flat()}
              </div>
            )}
          </div>
        </aside>
        
        {/* Resize handle */}
        {!isCollapsed && (
          <div
            ref={resizeHandleRef}
            className={cn(
              "sidebar-resize-handle",
              isResizing && "resizing"
            )}
            onMouseDown={handleResizeStart}
          />
        )}
      </div>

      {/* Search Dialog */}
      <Dialog open={isSearchOpen} onOpenChange={(open) => {
        setIsSearchOpen(open);
        if (!open) setSearchQuery(""); // Clear search when closing
      }}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              Search in {currentSection ? (navT[currentSection.id] || currentSection.label) : "Navigation"}
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <SearchInput
              placeholder={`Search ${currentSection ? (navT[currentSection.id] || currentSection.label).toLowerCase() : "navigation"}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              containerClassName="w-full"
              autoFocus
            />
          </div>
          <div className="max-h-[400px] overflow-y-auto">
            {searchQuery.trim() && (
              <>
                {filteredNavigationItems.length > 0 ? (
                  <div className="space-y-1">
                    {filteredNavigationItems.map((item) => (
                      <Button
                        key={item.id}
                        variant="ghost"
                        className="w-full justify-start"
                        onClick={() => {
                          if (item.href) {
                            const label = item.displayLabel || navT[item.label] || item.label;
                            handleNavClick(item.href, label);
                            window.location.href = `/${locale}${item.href}`;
                          }
                          setIsSearchOpen(false);
                          setSearchQuery("");
                        }}
                      >
                        {item.icon && <item.icon className="h-4 w-4 mr-2" />}
                        <span>{item.displayLabel || navT[item.label] || item.label}</span>
                      </Button>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground text-center py-8">
                    No results found for "{searchQuery}"
                  </p>
                )}
              </>
            )}
            {!searchQuery.trim() && (
              <p className="text-sm text-muted-foreground text-center py-8">
                Type to search in current section
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </TooltipProvider>
  );
}
