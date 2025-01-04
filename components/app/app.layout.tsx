"use client";
import React from "react";
import { Locale } from "@/i18n.config";
import Navbar from "./navbar/navbar.component";
import Footer from "./footer/footer.component";

type Props = {
  locale: Locale;
  children: React.ReactNode;
};

function AppLayout({ locale, children }: Props) {
  return (
    <>
      <Navbar locale={locale} />
      <main className="app-main">{children}</main>
      <Footer locale={locale} />
    </>
  );
}

export default AppLayout;
