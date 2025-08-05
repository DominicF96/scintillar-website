"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import "./loader.styles.scss";

function Loader({ isLoaded = false }: { isLoaded?: boolean }) {
  const { resolvedTheme } = useTheme();

  return (
    <div
      className={`spinner-container ${isLoaded ? "fade-out" : ""}`}
      suppressHydrationWarning
    >
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
