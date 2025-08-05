"use client";
import React from "react";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";
import Image from "next/image";
import { useTheme } from "next-themes";

type Props = {
  children: React.ReactNode;
};

function WebLayout({ children }: Props) {
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
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default WebLayout;
