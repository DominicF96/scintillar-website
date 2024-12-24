"use client";

import { ThemeProvider } from "@/components/theme.provider";
import LoadingProvider from "./loading.context";
import { TooltipProvider } from "@/components/ui/tooltip";

export function Providers({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        <LoadingProvider>{children}</LoadingProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
}
