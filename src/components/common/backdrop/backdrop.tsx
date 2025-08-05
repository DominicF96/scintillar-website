"use client";
import React from "react";
import { cn } from "@/lib/utils/cn";

interface BackdropProps {
  isVisible?: boolean;
  onClick?: () => void;
  className?: string;
  zIndex?: number;
  opacity?: "light" | "medium" | "dark";
}

export default function Backdrop({
  isVisible = true,
  onClick,
  className,
  zIndex = 40,
  opacity = "medium"
}: BackdropProps) {
  if (!isVisible) return null;

  const opacityClasses = {
    light: "bg-black/20",
    medium: "bg-black/50", 
    dark: "bg-black/80"
  };

  return (
    <div
      className={cn(
        "fixed inset-0 transition-opacity duration-200",
        opacityClasses[opacity],
        className
      )}
      style={{ zIndex }}
      onClick={onClick}
      aria-hidden="true"
    />
  );
}