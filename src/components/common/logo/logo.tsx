"use client";
import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

type Props = {
  color?: "colored" | "flat" | "inverted" | "inverted-flat";
  variant?: "horizontal" | "standalone" | "responsive";
  className?: string;
};

function Logo({ color = "colored", variant = "responsive", className }: Props) {
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
        {variant !== "standalone" && (
          <Image
            src={`/vectors/brand/scintillar-logo-horizontal-${getColorVariant()}.svg`}
            alt="Scintillar Logo"
            className={variant === "horizontal" ? "block" : "hidden md:block"}
            width={150}
            height={48}
          />
        )}
        {variant !== "horizontal" && (
          <Image
            src={`/vectors/brand/scintillar-logo-standalone-${getColorVariant()}.svg`}
            alt="Scintillar Logo"
            className={variant === "standalone" ? "block" : "block md:hidden"}
            width={48}
            height={48}
          />
        )}
      </div>
    );
  } else {
    return <div className="h-[48px]"></div>;
  }
}

export default Logo;
