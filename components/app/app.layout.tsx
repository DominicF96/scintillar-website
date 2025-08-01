"use client";
import React from "react";
import { Locale } from "@/i18n.config";
import Navbar from "./navbar/navbar.component";
import Footer from "./footer/footer.component";
import Sidebar from "./sidebar/sidebar.component";
import SettingsPanel from "./settings-panel/settings-panel.component";

type Props = {
  locale: Locale;
  children: React.ReactNode;
};

function AppLayout({ locale, children }: Props) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="flex-shrink-0">
        <Navbar locale={locale} />
      </div>
      <div className="flex flex-1">
        <Sidebar locale={locale} />
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
      <div className="flex-shrink-0">
        <Footer locale={locale} />
      </div>
    </div>
  );
}

export default AppLayout;
