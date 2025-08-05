"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { useSettingsPanel } from "@/providers/settings-panel.context";

export default function SettingsToggle() {
  const { togglePanel } = useSettingsPanel();

  return (
    <Button
      onClick={togglePanel}
      size="icon"
      variant="outline"
      className="h-9 w-9 rounded-full shadow-sm bg-background border hover:bg-accent"
    >
      <Settings className="h-4 w-4" />
    </Button>
  );
}