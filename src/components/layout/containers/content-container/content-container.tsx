"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { cn } from "@/lib/utils/cn";
import SettingsPanel from "@/components/features/settings/settings-panel";

interface ContentContainerProps {
  children: ReactNode;
  actions?: ReactNode;
  className?: string;
  fullHeight?: boolean;
}

export default function ContentContainer({ 
  children, 
  actions, 
  className,
  fullHeight = false,
}: ContentContainerProps) {
  const [sidebarWidth, setSidebarWidth] = useState(300);

  useEffect(() => {
    // Listen for sidebar width changes
    const handleSidebarWidthChange = (event: CustomEvent) => {
      setSidebarWidth(event.detail.width);
    };

    // Get initial width from CSS custom property
    const initialWidth = getComputedStyle(document.documentElement)
      .getPropertyValue('--sidebar-width')
      .replace('px', '');
    if (initialWidth) {
      setSidebarWidth(parseInt(initialWidth, 10));
    }

    window.addEventListener('sidebar-width-change', handleSidebarWidthChange as EventListener);
    
    return () => {
      window.removeEventListener('sidebar-width-change', handleSidebarWidthChange as EventListener);
    };
  }, []);

  return (
    <div 
      className={cn(
        "relative h-full flex flex-col transition-all duration-200 ease-out",
        className
      )}
      style={{
        // Add subtle transition for responsiveness during resize
        willChange: 'transform'
      }}
    >
      {/* Actions positioned at top-right - always reserve space */}
      <div className="absolute top-4 right-8 z-20 flex items-center gap-2 min-h-[36px]">
        {actions}
      </div>
      
      {/* Main content - scrollable */}
      <div className={cn(
        "flex-1 overflow-y-auto",
        fullHeight ? "h-full" : "",
        "relative transition-all duration-200 ease-out"
      )}>
        {children}
      </div>

      {/* Settings Panel - embedded but positioned over content */}
      <SettingsPanel />
    </div>
  );
}