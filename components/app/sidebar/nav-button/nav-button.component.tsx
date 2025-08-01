"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/utils/shadcn";
import { LucideIcon } from "lucide-react";

interface NavButtonProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  isCollapsed: boolean;
}

export default function NavButton({ 
  href, 
  icon: Icon, 
  label, 
  isActive, 
  isCollapsed 
}: NavButtonProps) {
  const linkContent = (
    <Button
      variant={isActive ? "default" : "ghost"}
      className={cn(
        "h-12 w-full transition-all duration-300",
        isCollapsed 
          ? "w-12 justify-center px-0" 
          : "justify-start gap-3 px-3",
          isActive ? "-mx-2 w-[calc(100%+16px)] px-[20px]" : ""
      )}
      asChild
    >
      <Link href={href}>
        <Icon className="h-5 w-5 flex-shrink-0" />
        {!isCollapsed && (
          <span className="truncate">{label}</span>
        )}
      </Link>
    </Button>
  );

  if (isCollapsed) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          {linkContent}
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    );
  }

  return linkContent;
}