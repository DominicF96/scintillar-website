"use client";

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';

// Configure NProgress
NProgress.configure({
  showSpinner: false,
  speed: 500,
  minimum: 0.3,
  trickleSpeed: 200,
});

export default function ProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const prevPathnameRef = useRef<string | null>(null);
  const prevSearchParamsRef = useRef<string | null>(null);

  useEffect(() => {
    const currentPathname = pathname;
    const currentSearchParams = searchParams?.toString() || '';
    
    // Check if this is actually a route change
    const isRouteChange = 
      prevPathnameRef.current !== null && 
      (prevPathnameRef.current !== currentPathname || 
       prevSearchParamsRef.current !== currentSearchParams);

    if (isRouteChange) {
      // Start progress when route starts changing
      NProgress.start();
      
      // Complete progress when route change is done
      const timer = setTimeout(() => {
        NProgress.done();
      }, 150);

      // Store the current values for next comparison
      prevPathnameRef.current = currentPathname;
      prevSearchParamsRef.current = currentSearchParams;

      return () => {
        clearTimeout(timer);
        NProgress.done();
      };
    } else {
      // Initial load - store values but don't show progress
      prevPathnameRef.current = currentPathname;
      prevSearchParamsRef.current = currentSearchParams;
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    // Ensure progress bar is done on mount
    NProgress.done();
    
    // Clean up on unmount
    return () => {
      NProgress.done();
    };
  }, []);

  // This component doesn't render anything visible
  // The progress bar is styled via CSS
  return null;
}