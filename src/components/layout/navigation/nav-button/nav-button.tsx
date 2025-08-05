"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils/cn";
import { LucideIcon } from "lucide-react";

interface NavButtonProps {
  href?: string;
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  isCollapsed: boolean;
  onClick?: () => void;
}

export default function NavButton({
  href,
  icon: Icon,
  label,
  isActive = false,
  isCollapsed,
  onClick,
}: NavButtonProps) {
  // If we have both href and onClick, we need to handle the click manually
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
    }
  };

  const buttonContent = href ? (
    <Link 
      href={href} 
      onClick={handleClick}
      className={cn(
        "h-8 w-full transition-all duration-300 overflow-hidden flex items-center rounded-md",
        "hover:bg-accent hover:text-accent-foreground",
        isCollapsed
          ? "w-12 h-12 justify-center px-0"
          : "justify-start gap-3 pr-2 pl-4",
        isActive 
          ? "bg-primary text-primary-foreground hover:bg-primary/90" 
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      <Icon className="h-5 w-5 flex-shrink-0" />
      {!isCollapsed && <span className="truncate">{label}</span>}
    </Link>
  ) : (
    <Button
      variant={isActive ? "default" : "ghost"}
      className={cn(
        "h-8 w-full transition-all duration-300 overflow-hidden",
        isCollapsed
          ? "w-12 h-12 justify-center px-0"
          : "justify-start gap-3 pr-2 pl-4",
      )}
      onClick={handleClick}
    >
      <Icon className="h-5 w-5 flex-shrink-0" />
      {!isCollapsed && <span className="truncate">{label}</span>}
    </Button>
  );

  if (isCollapsed) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>{buttonContent}</TooltipTrigger>
        <TooltipContent side="right">
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    );
  }

  return buttonContent;
}
