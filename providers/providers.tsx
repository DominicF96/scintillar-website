"use client";

import { ThemeProvider } from "@/components/shared/theme.provider";
import LoadingProvider from "./loading.context";
import { TooltipProvider } from "@/components/ui/tooltip";
import { GoogleAnalytics } from "@next/third-parties/google";

export function Providers({ children }) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const NODE_ENV = process.env.NODE_ENV;

  if (!GA_MEASUREMENT_ID) {
    throw new Error(
      "NEXT_PUBLIC_GA_MEASUREMENT_ID not configured in environment variables"
    );
  }

  const useGA = NODE_ENV === "production";
  if (!useGA) {
    console.log(
      "Google Analytics will not be loaded because NODE_ENV is not production."
    );
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        {useGA && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
        <LoadingProvider>{children}</LoadingProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
}
