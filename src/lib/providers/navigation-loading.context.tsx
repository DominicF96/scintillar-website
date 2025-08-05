"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

interface NavigationLoadingContextType {
  isNavigating: boolean;
  targetUrl: string | null;
  targetLabel: string | null;
  startNavigation: (url: string, label?: string) => void;
  finishNavigation: () => void;
}

const NavigationLoadingContext = createContext<NavigationLoadingContextType | undefined>(undefined);

export function NavigationLoadingProvider({ children }: { children: React.ReactNode }) {
  const [isNavigating, setIsNavigating] = useState(false);
  const [targetUrl, setTargetUrl] = useState<string | null>(null);
  const [targetLabel, setTargetLabel] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const startNavigation = (url: string, label?: string) => {
    setIsNavigating(true);
    setTargetUrl(url);
    setTargetLabel(label || null);
  };

  const finishNavigation = () => {
    setIsNavigating(false);
    setTargetUrl(null);
    setTargetLabel(null);
  };

  // Auto-detect when navigation completes by watching pathname changes
  useEffect(() => {
    if (isNavigating && targetUrl) {
      // Check if current pathname matches target URL
      if (pathname === targetUrl || pathname.endsWith(targetUrl.replace(/^\/[a-z]{2}/, ''))) {
        finishNavigation();
      }
    }
  }, [pathname, isNavigating, targetUrl]);

  // Auto-reset navigation state after timeout as fallback
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    if (isNavigating) {
      // Auto-reset navigation state after a reasonable timeout
      // This handles cases where pathname detection doesn't work
      timeoutId = setTimeout(() => {
        finishNavigation();
      }, 2000); // 2 second timeout
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isNavigating]);

  return (
    <NavigationLoadingContext.Provider value={{
      isNavigating,
      targetUrl,
      targetLabel,
      startNavigation,
      finishNavigation
    }}>
      {children}
    </NavigationLoadingContext.Provider>
  );
}

export function useNavigationLoading() {
  const context = useContext(NavigationLoadingContext);
  if (!context) {
    throw new Error("useNavigationLoading must be used within NavigationLoadingProvider");
  }
  return context;
}