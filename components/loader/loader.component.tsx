"use client";
import React from "react";
import Image from "next/image";
import "./loader.styles.scss";
import { useTheme } from "next-themes";

function Loader({ isLoaded }: { isLoaded: boolean }) {
  const { resolvedTheme } = useTheme();

  return (
    <div className={`spinner-container ${isLoaded ? "fade-out" : ""}`} suppressHydrationWarning>
      {resolvedTheme && (
        <Image
          src={`/vectors/loader-${resolvedTheme}.svg`}
          alt="Loading..."
          className={`spinner`}
          height={48}
          width={48}
        />
      )}
    </div>
  );
}

export default Loader;
