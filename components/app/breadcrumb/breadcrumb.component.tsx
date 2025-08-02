"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Locale } from "@/i18n.config";
import { flattenNavigation, routeDisplayNames } from "@/data/navigation";
import * as i18n from "@/i18n/app/components/sidebar.i18n";
import * as dashboardI18n from "@/i18n/app/pages/dashboard.i18n";

type Props = {
  locale: Locale;
};

export default function BreadcrumbComponent({ locale }: Props) {
  const pathname = usePathname();
  const t = i18n[locale];
  const dashboardT = dashboardI18n[locale];
  
  // Remove locale and app from path for processing
  const pathWithoutLocale = pathname.replace(`/${locale}/app`, "");
  const segments = pathWithoutLocale.split("/").filter(Boolean);
  
  if (segments.length === 0) {
    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>{dashboardT.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
  }

  const navigation = flattenNavigation();
  
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* Desktop: show all segments, Mobile: show only last segment */}
        <div className="hidden md:contents">
          {segments.map((segment, index) => {
          const isLast = index === segments.length - 1;
          const href = `/${locale}/app/${segments.slice(0, index + 1).join("/")}`;
          
          // Find navigation item to check if it has a page
          const findNavItem = (segmentKey: string) => {
            return Object.values(navigation).find(item => {
              // Direct key match
              if (item.key === segmentKey) return true;
              
              // Layer suffix match (digitallayer -> digital)
              if (item.key === `${segmentKey}layer`) return true;
              
              // Href match
              if (item.href?.includes(segmentKey)) return true;
              
              // Check children if they exist
              if (item.children) {
                return item.children.some(child => 
                  child.key === segmentKey || 
                  child.key === `${segmentKey}layer` ||
                  child.href?.includes(segmentKey)
                );
              }
              
              return false;
            });
          };
          
          // Get localized name from sidebar i18n or fallback to route display names
          const getLocalizedName = (segmentKey: string) => {
            const navItem = findNavItem(segmentKey);
            
            if (navItem && t.navigation[navItem.key as keyof typeof t.navigation]) {
              return t.navigation[navItem.key as keyof typeof t.navigation];
            }
            
            // Try category names
            if (t.categories[segmentKey as keyof typeof t.categories]) {
              return t.categories[segmentKey as keyof typeof t.categories];
            }
            
            // Fallback to route display names
            return routeDisplayNames[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
          };
          
          const navItem = findNavItem(segment);
          const hasPage = navItem?.hasPage ?? true; // Default to true if not found
          const displayName = getLocalizedName(segment);
          
          // Determine if this segment should be clickable
          const isClickable = !isLast && hasPage;
          
          return (
            <React.Fragment key={segment}>
              <BreadcrumbItem>
                {isClickable ? (
                  <BreadcrumbLink asChild>
                    <Link href={href}>{displayName}</Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{displayName}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
        </div>
        
        {/* Mobile: show only last segment */}
        <div className="md:hidden">
          {(() => {
            const lastSegment = segments[segments.length - 1];
            const findNavItem = (segmentKey: string) => {
              return Object.values(navigation).find(item => {
                if (item.key === segmentKey) return true;
                if (item.key === `${segmentKey}layer`) return true;
                if (item.href?.includes(segmentKey)) return true;
                if (item.children) {
                  return item.children.some(child => 
                    child.key === segmentKey || 
                    child.key === `${segmentKey}layer` ||
                    child.href?.includes(segmentKey)
                  );
                }
                return false;
              });
            };
            
            const getLocalizedName = (segmentKey: string) => {
              const navItem = findNavItem(segmentKey);
              
              if (navItem && t.navigation[navItem.key as keyof typeof t.navigation]) {
                return t.navigation[navItem.key as keyof typeof t.navigation];
              }
              
              if (t.categories[segmentKey as keyof typeof t.categories]) {
                return t.categories[segmentKey as keyof typeof t.categories];
              }
              
              return routeDisplayNames[segmentKey] || segmentKey.charAt(0).toUpperCase() + segmentKey.slice(1);
            };
            
            const displayName = getLocalizedName(lastSegment);
            
            return (
              <BreadcrumbItem>
                <BreadcrumbPage>{displayName}</BreadcrumbPage>
              </BreadcrumbItem>
            );
          })()}
        </div>
      </BreadcrumbList>
    </Breadcrumb>
  );
}