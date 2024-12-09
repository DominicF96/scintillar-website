"use client";

import { ThemeProvider } from "@/components/theme.provider";
import LoadingProvider from "./loading.context";

export function Providers({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LoadingProvider>{children}</LoadingProvider>
    </ThemeProvider>
  );
}
