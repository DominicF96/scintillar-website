"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { TooltipProvider } from "@/components/ui/tooltip";
import NavButton from "./nav-button/nav-button.component";
import { cn } from "@/utils/shadcn";
import {
  Settings,
  Search,
  Plus,
  BookOpen,
  X,
} from "lucide-react";
import * as i18n from "@/i18n/app/components/sidebar.i18n";
import { Locale } from "@/i18n.config";
import { useSidebar } from "@/contexts/sidebar.context";
import { navigationStructure } from "@/data/navigation";
import "./sidebar.component.scss";
import { Button } from "@/components/ui/button";
import Logo from "@/components/shared/logo.component";
import { APP_VERSION } from "@/lib/version";
import { Input } from "@/components/ui/input";
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

// Use shared navigation structure
const navigationCategories = navigationStructure;

type Props = {
  locale: Locale;
};

export default function Sidebar({ locale }: Props) {
  const pathname = usePathname();
  const t = i18n[locale];
  const { isCollapsed, setSidebarCollapsed } = useSidebar();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
        className={cn(
          "bg-card border-r flex flex-col transition-all duration-300 ease-in-out",
          "md:relative md:z-auto",
          "fixed inset-y-0 left-0 z-50 md:translate-x-0",
          isCollapsed 
            ? "w-16 md:w-16 -translate-x-full md:translate-x-0" 
            : "w-[300px] md:w-[300px] translate-x-0"
        )}
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
          <div className="p-1 w-full flex flex-col items-center">
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
                &nbsp;{t.search.placeholder}
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

          {/* Categorized navigation */}
          <div className="flex-1 p-1 overflow-y-auto">
            {!isCollapsed ? (
              <Accordion
                type="multiple"
                defaultValue={["tools"]}
                className="w-full sidebar-accordion"
              >
                {Object.entries(navigationCategories).map(
                  ([categoryKey, category]) => {
                    return (
                      <AccordionItem
                        key={categoryKey}
                        value={categoryKey}
                        className="border-none mb-2"
                      >
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex items-center gap-1">
                            <category.icon className="h-4 w-4" />
                            {
                              t.categories[
                                categoryKey as keyof typeof t.categories
                              ]
                            }
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col gap-1">
                            {categoryKey === "simulations" ? (
                              // Special handling for simulations
                              <>
                                {category.items.length === 0 ? (
                                  <div className="text-xs text-muted-foreground py-1 px-3">
                                    {t.noSimulations}
                                  </div>
                                ) : (
                                  category.items.map((item) => {
                                    const isActive =
                                      pathname === `/${locale}${item.href}`;
                                    return (
                                      <NavButton
                                        key={item.key}
                                        href={item.href}
                                        icon={item.icon}
                                        label={t.navigation[item.key]}
                                        isActive={isActive}
                                        isCollapsed={false}
                                      />
                                    );
                                  })
                                )}
                                <NavButton
                                  icon={Plus}
                                  label={t.newSimulation}
                                  isCollapsed={false}
                                  onClick={() => {
                                    // TODO: Handle new simulation creation
                                    console.log('Creating new simulation...');
                                  }}
                                />
                              </>
                            ) : category.items.length === 0 ? (
                              <div className="text-xs text-muted-foreground py-2 px-3">
                                {t.comingSoon}
                              </div>
                            ) : (
                              category.items.flatMap((item) => {
                                // If item has children, render the children
                                if (item.children) {
                                  return item.children.map((child) => {
                                    const isActive = pathname === `/${locale}${child.href}`;
                                    return (
                                      <NavButton
                                        key={child.key}
                                        href={child.href}
                                        icon={child.icon}
                                        label={t.navigation[child.key]}
                                        isActive={isActive}
                                        isCollapsed={false}
                                      />
                                    );
                                  });
                                } else {
                                  // Render item directly
                                  const isActive = pathname === `/${locale}${item.href}`;
                                  return [
                                    <NavButton
                                      key={item.key}
                                      href={item.href}
                                      icon={item.icon}
                                      label={t.navigation[item.key]}
                                      isActive={isActive}
                                      isCollapsed={false}
                                    />
                                  ];
                                }
                              })
                            )}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  }
                )}
              </Accordion>
            ) : (
              // Collapsed view - show category icons with tooltips
              <div className="flex flex-col gap-1">
                {Object.entries(navigationCategories)
                  .filter(([, category]) => category.items.length > 0)
                  .map(([categoryKey, category], index) => {
                    return (
                      <div key={categoryKey}>
                        {index > 0 && (
                          <div className="mx-2 my-2 border-t border-border" />
                        )}
                        <div className="flex flex-col gap-1">
                          {category.items.flatMap((item) => {
                            const categoryLabel = t.categories[categoryKey as keyof typeof t.categories];
                            
                            // If item has children, render the children
                            if (item.children) {
                              return item.children.map((child) => {
                                const isActive = pathname === `/${locale}${child.href}`;
                                const tooltipLabel = `${categoryLabel} / ${t.navigation[child.key]}`;
                                return (
                                  <NavButton
                                    key={child.key}
                                    href={child.href}
                                    icon={child.icon}
                                    label={tooltipLabel}
                                    isActive={isActive}
                                    isCollapsed={true}
                                  />
                                );
                              });
                            } else {
                              // Render item directly
                              const isActive = pathname === `/${locale}${item.href}`;
                              const tooltipLabel = `${categoryLabel} / ${t.navigation[item.key]}`;
                              return [
                                <NavButton
                                  key={item.key}
                                  href={item.href}
                                  icon={item.icon}
                                  label={tooltipLabel}
                                  isActive={isActive}
                                  isCollapsed={true}
                                />
                              ];
                            }
                          })}
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>

          {/* Fixed Docs and Settings at bottom */}
          <div className="mt-auto p-1 border-t w-full space-y-1 flex flex-col items-center">
            <NavButton
              href="/docs"
              icon={BookOpen}
              label={t.navigation.docs}
              isActive={pathname === `/docs`}
              isCollapsed={isCollapsed}
            />
            <NavButton
              href="/app/settings"
              icon={Settings}
              label={t.navigation.settings}
              isActive={pathname === `/${locale}/app/settings`}
              isCollapsed={isCollapsed}
            />
          </div>
        </aside>
      </div>

      {/* Search Dialog */}
      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{t.search.title}</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <Input
              placeholder={t.search.placeholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
              autoFocus
            />
          </div>
          <div className="py-4">
            <p className="text-sm text-muted-foreground text-center">
              {t.search.noResults}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </TooltipProvider>
  );
}
