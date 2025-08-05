"use client";

import React, { createContext, useContext, ReactNode, useState, useCallback } from "react";
import { Locale, locales } from "@/lib/config/i18n-config";
import Cookies from "js-cookie";

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  isLoading: boolean;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

interface LocaleProviderProps {
  locale: Locale;
  children: ReactNode;
}

export function LocaleProvider({ locale: initialLocale, children }: LocaleProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [isLoading, setIsLoading] = useState(false);

  const setLocale = useCallback(async (newLocale: Locale) => {
    if (!locales.includes(newLocale)) {
      console.warn(`Unsupported locale: ${newLocale}`);
      return;
    }

    setIsLoading(true);
    
    try {
      // Update cookie
      Cookies.set("NEXT_LOCALE", newLocale, { expires: 365 });
      
      // Update state
      setLocaleState(newLocale);
      
      // Navigate to new locale (preserving current path)
      const currentPath = window.location.pathname;
      const pathWithoutLocale = currentPath.replace(/^\/[a-z]{2}/, '');
      window.location.href = `/${newLocale}${pathWithoutLocale}`;
    } catch (error) {
      console.error('Failed to change locale:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, isLoading }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): Locale {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error(
      "useLocale must be used within a LocaleProvider. " +
      "Make sure the component is wrapped with LocaleProvider or use useTranslationWithLocale for web components."
    );
  }
  return context.locale;
}

export function useLocaleActions() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error("useLocaleActions must be used within a LocaleProvider");
  }
  return {
    setLocale: context.setLocale,
    isLoading: context.isLoading,
    currentLocale: context.locale,
    availableLocales: locales
  };
}