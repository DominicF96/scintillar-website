"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface SettingsPanelContextType {
  isOpen: boolean;
  togglePanel: () => void;
  openPanel: () => void;
  closePanel: () => void;
}

const SettingsPanelContext = createContext<SettingsPanelContextType | undefined>(undefined);

export function useSettingsPanel() {
  const context = useContext(SettingsPanelContext);
  if (context === undefined) {
    throw new Error("useSettingsPanel must be used within a SettingsPanelProvider");
  }
  return context;
}

interface SettingsPanelProviderProps {
  children: ReactNode;
}

export function SettingsPanelProvider({ children }: SettingsPanelProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => setIsOpen(!isOpen);
  const openPanel = () => setIsOpen(true);
  const closePanel = () => setIsOpen(false);

  return (
    <SettingsPanelContext.Provider value={{ isOpen, togglePanel, openPanel, closePanel }}>
      {children}
    </SettingsPanelContext.Provider>
  );
}