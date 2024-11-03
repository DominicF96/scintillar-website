"use client";

import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

function Logo() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="flex items-center justify-center">
      {resolvedTheme === "dark" ? (
        <Image
          src="/vectors/brand/scintillar-logo-horizontal.dark.svg"
          alt="Scintillar Logo"
          className="hidden md:block"
          width={300}
          height={96}
        />
      ) : (
        <Image
          src="/vectors/brand/scintillar-logo-horizontal.light.svg"
          alt="Scintillar Logo"
          className="hidden md:block"
          width={300}
          height={96}
        />
      )}
      <Image
        src="/vectors/brand/scintillar-logo-standalone.svg"
        alt="Scintillar Logo"
        className="md:hidden"
        width={96}
        height={96}
      />
    </div>
  );
}

export default Logo;
