"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import { X, Settings } from "lucide-react";
import * as i18n from "@/i18n/app/components/settings-panel.i18n";
import { useSettingsPanel } from "@/providers/settings-panel.context";
import { useLocale } from "@/providers/locale.context";

export default function SettingsPanel() {
  const locale = useLocale();
  const { isOpen, closePanel } = useSettingsPanel();
  
  // Safely get translations with fallback
  const getTranslations = () => {
    if (locale && i18n[locale as keyof typeof i18n]) {
      return i18n[locale as keyof typeof i18n];
    }
    return i18n.en;
  };
  
  const t = getTranslations();

  return (
    <>
      {/* Backdrop - only covers ContentContainer */}
      {isOpen && (
        <div 
          className="absolute inset-0 bg-black/20 z-40"
          onClick={closePanel}
        />
      )}
      
      {/* Panel - constrained to ContentContainer height */}
      <div className={cn(
        "absolute top-0 right-0 bottom-0 w-80 bg-card border-l shadow-lg z-50 transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between py-4 px-2 border-b">
            <div className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              <h3 className="font-semibold">{t.title}</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={closePanel}
              className="h-8 w-8 rounded-full"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-auto p-2">
            <div className="space-y-6">
              {/* General Settings */}
              <div>
                <h4 className="font-medium mb-3">{t.sections.general.title}</h4>
                <div className="space-y-2">
                  <div className="p-3 border rounded-lg">
                    <div className="text-sm font-medium">{t.sections.general.autoSave.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {t.sections.general.autoSave.description}
                    </div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="text-sm font-medium">{t.sections.general.notifications.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {t.sections.general.notifications.description}
                    </div>
                  </div>
                </div>
              </div>

              {/* Display Settings */}
              <div>
                <h4 className="font-medium mb-3">{t.sections.display.title}</h4>
                <div className="space-y-2">
                  <div className="p-3 border rounded-lg">
                    <div className="text-sm font-medium">{t.sections.display.gridSize.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {t.sections.display.gridSize.description}
                    </div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="text-sm font-medium">{t.sections.display.zoomLevel.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {t.sections.display.zoomLevel.description}
                    </div>
                  </div>
                </div>
              </div>

              {/* Tools */}
              <div>
                <h4 className="font-medium mb-3">{t.sections.tools.title}</h4>
                <div className="space-y-2">
                  <div className="p-3 border rounded-lg">
                    <div className="text-sm font-medium">{t.sections.tools.brushSize.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {t.sections.tools.brushSize.description}
                    </div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="text-sm font-medium">{t.sections.tools.snapToGrid.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {t.sections.tools.snapToGrid.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-2 border-t">
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1">
                {t.actions.reset}
              </Button>
              <Button size="sm" className="flex-1">
                {t.actions.apply}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}