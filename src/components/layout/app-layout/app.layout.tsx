"use client";
import React from "react";
import Navbar from "@/components/layout/navigation/navbar";
import Footer from "@/components/layout/footer";
import Sidebar from "@/components/layout/navigation/sidebar";
import PrimarySidebar from "@/components/layout/navigation/primary-sidebar";
import CommandPalette from "@/components/navigation/command-palette";
import { NavigationLoadingProvider } from "@/lib/providers/navigation-loading.context";
import NavigationLoadingOverlay from "@/components/layout/navigation/navigation-loading-overlay";

type Props = {
  children: React.ReactNode;
};

function AppLayout({ children }: Props) {
  return (
    <NavigationLoadingProvider>
      <div className="h-screen flex flex-col relative has-navbar">
        <div className="flex-shrink-0">
          <Navbar />
        </div>
        <div className="flex flex-1 min-h-0 relative">
          <PrimarySidebar />
          <Sidebar />
          <main className="flex-1 overflow-hidden relative">
            {children}
            <NavigationLoadingOverlay />
          </main>
        </div>
        <div className="flex-shrink-0">
          <Footer />
        </div>
        
        {/* Global Command Palette */}
        <CommandPalette />
      </div>
    </NavigationLoadingProvider>
  );
}

export default AppLayout;
