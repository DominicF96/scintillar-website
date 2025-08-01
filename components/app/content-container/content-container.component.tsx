"use client";
import React, { ReactNode } from "react";
import { cn } from "@/utils/shadcn";
import { Locale } from "@/i18n.config";
import SettingsPanel from "@/components/app/settings-panel/settings-panel.component";

interface ContentContainerProps {
  children: ReactNode;
  actions?: ReactNode;
  className?: string;
  fullHeight?: boolean;
  locale: Locale;
}

export default function ContentContainer({ 
  children, 
  actions, 
  className,
  fullHeight = false,
  locale
}: ContentContainerProps) {
  return (
    <div className={cn(
      "relative overflow-hidden",
      fullHeight ? "h-full" : "",
      className
    )}>
      {/* Actions positioned at top-right - always reserve space */}
      <div className="absolute top-4 right-8 z-20 flex items-center gap-2 min-h-[36px]">
        {actions}
      </div>
      
      {/* Main content */}
      <div className={cn(
        fullHeight ? "h-full" : "",
        "relative"
      )}>
        {children}
      </div>

      {/* Settings Panel - embedded but positioned over content */}
      <SettingsPanel locale={locale} />
    </div>
  );
}