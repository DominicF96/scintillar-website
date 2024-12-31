"use client";
import React from "react";
import Navbar from "./navbar/navbar.component";
import Footer from "./footer/footer.component";
import { Locale } from "@/i18n.config";
import Image from "next/image";
import { useTheme } from "next-themes";

type Props = {
  locale: Locale;
  children: React.ReactNode;
};

function StandardLayout({ locale, children }: Props) {
  const { resolvedTheme } = useTheme();
  return (
    <>
      {resolvedTheme && (
        <>
          <Image
            src={`/vectors/footer-arc-${resolvedTheme}.svg`}
            alt=""
            className="absolute top-0 left-0 z-50 -scale-100 pointer-events-none select-none"
            width={96}
            height={96}
          />
          <Image
            src={`/vectors/footer-arc-${resolvedTheme}.svg`}
            alt=""
            className="absolute top-0 right-0 z-50 -scale-y-100 pointer-events-none select-none"
            width={96}
            height={96}
          />
        </>
      )}
      <Navbar locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
    </>
  );
}

export default StandardLayout;
