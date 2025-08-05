"use client";

import React from "react";
import { findNavigationSection, flattenNavigation, NavigationItem } from "@/constants/navigation";
import ContentContainer from "@/components/layout/containers/content-container";
import AutoRedirect from "@/components/navigation/auto-redirect/auto-redirect";
import { AlertTriangle, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import * as primarySidebarI18n from "@/i18n/app/components/sidebar.i18n";
import * as secondaryNavI18n from "@/i18n/app/components/sidebar.i18n";
import { useLocale } from "@/providers/locale.context";
import { Locale } from "@/lib/config/i18n-config";

// Known existing routes - we'll expand this as we create more pages
const EXISTING_ROUTES = new Set([
  "/app/activity/notifications",
  "/app/organization/calendar", 
  "/app/organization/email",
  "/app/organization/todos",
  "/app/system/status",
  "/app/simulations/crud",
  "/app/simulations/chat", 
  "/app/simulations/notifications",
  "/app/simulations/webhooks",
  "/app/simulations/command-palette",
  "/app/simulations/ai-agent",
  "/app/data/contacts",
  "/app/data/companies",
  "/app/data/deals", 
  "/app/data/tasks",
  "/app/data/notes",
  "/app/resources/home",
  "/app/docs/getting-started",
  "/app/preferences",
  "/app/settings",
  "/app/market",
  "/app/tools",
  "/app/docs"
]);

interface SafeRedirectProps {
  sectionId: string;
  fallbackRoute?: string;
}

export function SafeRedirectPage({ sectionId, fallbackRoute }: SafeRedirectProps) {
  const locale = useLocale();
  // First try to find as a top-level section
  let section = findNavigationSection(sectionId);
  let item: any = null;
  
  // If not found as section, search in flattened navigation
  if (!section) {
    const flattened = flattenNavigation();
    const found = flattened[sectionId];
    if (found && 'section' in found) {
      item = found;
      section = found.section;
    }
  }
  
  const primaryT = primarySidebarI18n[locale];
  const navT = secondaryNavI18n[locale];
  
  if (!section && !item) {
    console.warn(`Section or item '${sectionId}' not found in navigation structure`);
    
    return (
      <ContentContainer className="py-8 px-8 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="text-center max-w-md">
          <AlertTriangle className="h-16 w-16 text-orange-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Section Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The section "{sectionId}" could not be found in the navigation structure.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild>
              <Link href={`/${locale}/app`}>Return to Home</Link>
            </Button>
            {fallbackRoute && EXISTING_ROUTES.has(fallbackRoute) && (
              <Button asChild variant="outline">
                <Link href={`/${locale}${fallbackRoute}`}>Go to Fallback Page</Link>
              </Button>
            )}
          </div>
        </div>
      </ContentContainer>
    );
  }
  
  // Determine what to look for first navigable item in
  let navigationTarget = section;
  let targetTitle = primaryT[section.id] || section.label;
  
  if (item && item.children && item.children.length > 0) {
    // This is a nested item with children, use it instead
    navigationTarget = { ...item, children: item.children };
    targetTitle = navT[item.label] || item.label;
  }
  
  const firstNavigableItem = navigationTarget.children && navigationTarget.children.length > 0
    ? findFirstNavigableHref(navigationTarget.children)
    : null;
  
  if (firstNavigableItem && EXISTING_ROUTES.has(firstNavigableItem)) {
    // Route exists, show auto-redirect component within the content area
    return (
      <AutoRedirect
        targetUrl={`/${locale}${firstNavigableItem}`}
        sectionTitle={targetTitle}
        delay={10000}
      />
    );
  }
  
  // Helper function to find first navigable href in children
  function findFirstNavigableHref(items: NavigationItem[]): string | undefined {
    for (const child of items) {
      if (child.href) {
        return child.href;
      }
      if (child.children) {
        const found = findFirstNavigableHref(child.children);
        if (found) return found;
      }
    }
    return undefined;
  }
  
  // No navigable items or route doesn't exist, show section overview
  
  return (
    <ContentContainer className="py-8 px-8">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          {section.icon && <section.icon className="h-8 w-8 text-primary" />}
          <h1 className="text-3xl font-bold">{sectionTitle}</h1>
        </div>
        <p className="text-muted-foreground">
          Welcome to the {sectionTitle} section. This area is currently being developed.
        </p>
      </div>

      {section.children.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Available Features</h2>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {section.children.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isAvailable = item.href && EXISTING_ROUTES.has(item.href);
              
              if (hasChildren) {
                return (
                  <div key={item.id} className="p-4 border rounded-lg bg-muted/30">
                    <div className="flex items-center gap-2 mb-2">
                      {item.icon && <item.icon className="h-5 w-5" />}
                      <h3 className="font-semibold">{navT[item.label] || item.label}</h3>
                    </div>
                    <div className="space-y-1">
                      {item.children?.map((child) => (
                        <div key={child.id} className="flex items-center gap-2 text-sm">
                          {child.icon && <child.icon className="h-4 w-4" />}
                          {child.href && EXISTING_ROUTES.has(child.href) ? (
                            <Link 
                              href={`/${locale}${child.href}`}
                              className="text-primary hover:underline flex items-center gap-1"
                            >
                              {navT[child.label] || child.label}
                              <ExternalLink className="h-3 w-3" />
                            </Link>
                          ) : (
                            <span className="text-muted-foreground">{navT[child.label] || child.label} (Coming Soon)</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }
              
              return (
                <div key={item.id} className="p-4 border rounded-lg bg-card">
                  <div className="flex items-center gap-2 mb-2">
                    {item.icon && <item.icon className="h-5 w-5" />}
                    <h3 className="font-semibold">{navT[item.label] || item.label}</h3>
                  </div>
                  {isAvailable ? (
                    <Button asChild size="sm">
                      <Link href={`/${locale}${item.href}`}>
                        Open {navT[item.label] || item.label}
                      </Link>
                    </Button>
                  ) : (
                    <p className="text-sm text-muted-foreground">Coming Soon</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="p-4 border rounded-lg bg-primary/5">
        <h3 className="font-semibold mb-2">Development Status</h3>
        <p className="text-sm text-muted-foreground">
          This section is under active development. More features will be added soon.
        </p>
      </div>
    </ContentContainer>
  );
}

export function checkRouteExists(route: string): boolean {
  return EXISTING_ROUTES.has(route);
}

export function addExistingRoute(route: string): void {
  EXISTING_ROUTES.add(route);
}

export function getExistingRoutes(): string[] {
  return Array.from(EXISTING_ROUTES);
}