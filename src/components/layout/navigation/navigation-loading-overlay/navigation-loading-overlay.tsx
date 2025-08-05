"use client";
import React, { useState, useEffect } from "react";
import { useNavigationLoading } from "@/lib/providers/navigation-loading.context";
import { cn } from "@/lib/utils/cn";
import { Loader2, ArrowRight, CheckCircle } from "lucide-react";

/**
 * Navigation Loading Overlay with Progressive Opacity
 *
 * Behavior:
 * - Overlay starts with very low opacity (10%) and gradually increases over time
 * - Uses requestAnimationFrame for smooth 60fps opacity progression with ease-out timing
 * - Opacity progresses smoothly from 10% to 70% maximum over 800ms
 * - For quick navigations (<100ms), overlay barely appears - no flash
 * - For longer navigations, opacity increases proportionally to provide feedback
 * - No backdrop blur to avoid jarring immediate visual effects
 * - Content ("Navigating to...") only appears after 400ms delay to avoid noise
 * - On completion, overlay fades out quickly (200ms) regardless of current opacity
 * - Spinner opacity scales with background opacity for smooth visual consistency
 */
export default function NavigationLoadingOverlay() {
  const { isNavigating, targetLabel } = useNavigationLoading();
  const [isVisible, setIsVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showComplete, setShowComplete] = useState(false);
  const [progressiveOpacity, setProgressiveOpacity] = useState(0);

  useEffect(() => {
    let contentTimer: NodeJS.Timeout;
    let hideTimer: NodeJS.Timeout;
    let opacityAnimation: number;

    if (isNavigating) {
      // Immediately show overlay but start with very low opacity
      setIsVisible(true);
      setShowComplete(false);
      setProgressiveOpacity(0.1); // Start very subtle

      // Progressive opacity increase - smooth transition using requestAnimationFrame
      const startTime = Date.now();
      const maxOpacity = 0.7;
      const progressDuration = 800; // 800ms to reach max opacity
      
      const updateOpacity = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / progressDuration, 1);
        
        // Ease-out function for smoother progression
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const newOpacity = 0.1 + (maxOpacity - 0.1) * easeOut;
        
        setProgressiveOpacity(newOpacity);
        
        if (progress < 1 && isNavigating) {
          opacityAnimation = requestAnimationFrame(updateOpacity);
        }
      };
      
      opacityAnimation = requestAnimationFrame(updateOpacity);

      // Delay content appearance to avoid noise on fast navigations
      contentTimer = setTimeout(() => {
        setShowContent(true);
      }, 400); // 400ms delay before showing "Navigating to..." content
    } else if (isVisible) {
      // Navigation completed - hide content immediately and fade out quickly
      setShowContent(false);
      setShowComplete(true);
      if (opacityAnimation) cancelAnimationFrame(opacityAnimation); // Stop opacity progression

      // Quick fade-out
      hideTimer = setTimeout(() => {
        setIsVisible(false);
        setShowComplete(false);
        setShowContent(false); // Reset content state
        setProgressiveOpacity(0); // Reset opacity
      }, 150); // Quick 150ms fade-out
    }

    return () => {
      if (contentTimer) clearTimeout(contentTimer);
      if (hideTimer) clearTimeout(hideTimer);
      if (opacityAnimation) cancelAnimationFrame(opacityAnimation);
    };
  }, [isNavigating, isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={cn(
        "absolute inset-0 z-10 transition-opacity ease-out",
        isNavigating
          ? "duration-0" // No transition during navigation - we handle opacity manually
          : "duration-200" // Quick fade-out when done
      )}
      style={{
        backgroundColor: `hsl(var(--background) / ${isNavigating ? progressiveOpacity : 0})`,
        opacity: isNavigating ? 1 : 0
      }}
    >
      <div className="h-full flex flex-col items-center justify-center">
        {/* Minimal overlay when content is hidden - just a subtle backdrop */}
        {!showContent && isNavigating && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin"
              style={{ opacity: Math.min(progressiveOpacity * 2, 1) }} // Spinner opacity scales with background
            />
          </div>
        )}
      </div>
    </div>
  );
}
