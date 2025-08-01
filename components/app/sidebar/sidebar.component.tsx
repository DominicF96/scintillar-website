"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { TooltipProvider } from "@/components/ui/tooltip";
import NavButton from "./nav-button/nav-button.component";
import { cn } from "@/utils/shadcn";
import { Map, LayoutPanelTop, Globe, Zap, Newspaper, ShoppingCart, Grid2x2, TrendingUp, Settings, Search } from "lucide-react";
import * as i18n from "@/i18n/app/components/sidebar.i18n";
import { Locale } from "@/i18n.config";
import { useSidebar } from "@/contexts/sidebar.context";
import "./sidebar.component.scss";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const navigationItems = [
  {
    key: "dashboard" as const,
    href: "/app/dashboard",
    icon: Grid2x2,
  },
  {
    key: "city" as const,
    href: "/app/city",
    icon: Map,
  },
  {
    key: "interior" as const,
    href: "/app/interior",
    icon: LayoutPanelTop,
  },
  {
    key: "internet" as const,
    href: "/app/internet",
    icon: Globe,
  },
  {
    key: "electric" as const,
    href: "/app/electric",
    icon: Zap,
  },
  {
    key: "news" as const,
    href: "/app/news",
    icon: Newspaper,
  },
  {
    key: "stockmarket" as const,
    href: "/app/stock-market",
    icon: TrendingUp,
  },
  {
    key: "market" as const,
    href: "/app/market",
    icon: ShoppingCart,
  },
];

type Props = {
  locale: Locale;
};

export default function Sidebar({ locale }: Props) {
  const pathname = usePathname();
  const t = i18n[locale];
  const { isCollapsed } = useSidebar();

  return (
    <TooltipProvider>
      <div className={cn(
        "bg-card border-r flex flex-col transition-all duration-300 ease-in-out",
        isCollapsed ? "w-16" : "w-[300px]"
      )}>
        <aside className={cn(
          "flex flex-col h-full",
          isCollapsed && "items-center"
        )}>

          {/* Search */}
          <div className="p-2 pb-0 w-full">
            <Button
              variant="outline"
              className={cn(
                "h-12 w-full text-sm items-center justify-start text-left overflow-hidden",
                isCollapsed ? "hidden" : "flex"
              )}
            >
              <Search/>&nbsp;Search
            </Button>
            <Button
              variant="outline"
              className={cn(
                "h-12 w-12 text-sm items-center justify-center text-center",
                isCollapsed ? "flex" : "hidden"
              )}
            >
              <Search/>
            </Button>
          </div>

          {/* Main navigation items */}
          <div className="flex flex-col gap-2 flex-1 p-2">
            {navigationItems.map((item) => {
              const isActive = pathname === `/${locale}${item.href}`;
              return (
                <NavButton
                  key={item.key}
                  href={item.href}
                  icon={item.icon}
                  label={t.navigation[item.key]}
                  isActive={isActive}
                  isCollapsed={isCollapsed}
                />
              );
            })}
          </div>
          
          {/* Fixed Settings at bottom */}
          <div className="mt-auto p-2 border-t w-full">
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
    </TooltipProvider>
  );
}
