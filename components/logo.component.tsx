"use client";
import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

type Props = {
  color?: "colored" | "flat" | "inverted" | "inverted-flat";
  forceHorizontal?: boolean;
  className?: string;
};

function Logo({ color = "colored", forceHorizontal, className }: Props) {
  const { resolvedTheme } = useTheme();

  const getColorVariant = () => {
    if (color === "colored") {
      return resolvedTheme;
    } else if (color === "inverted") {
      if (resolvedTheme === "dark") {
        return "light";
      } else {
        return "dark";
      }
    } else if (color === "inverted-flat") {
      if (resolvedTheme === "dark") {
        return "black";
      } else {
        return "white";
      }
    } else {
      if (resolvedTheme === "dark") {
        return "white";
      } else {
        return "black";
      }
    }
  };

  if (resolvedTheme) {
    return (
      <div className={`flex items-center justify-center ${className || ""}`}>
        <Image
          src={`/vectors/brand/scintillar-logo-horizontal-${getColorVariant()}.svg`}
          alt="Scintillar Logo"
          className={forceHorizontal ? "block" : "hidden md:block"}
          width={150}
          height={48}
        />
        <Image
          src={`/vectors/brand/scintillar-logo-standalone-${getColorVariant()}.svg`}
          alt="Scintillar Logo"
          className={forceHorizontal ? "hidden" : "block md:hidden"}
          width={48}
          height={48}
        />
      </div>
    );
  } else {
    return <div className="h-[48px]"></div>;
  }
}

export default Logo;
