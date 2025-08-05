export type Locale = "en" | "fr";

export const locales = ["en", "fr"] as const;
export const defaultLocale: Locale = "en";

export interface I18nConfig {
  defaultLocale: Locale;
  supportedLocales: readonly Locale[];
  fallbackLocale: Locale;
  namespaces: string[];
  features: {
    pluralization: boolean;
    interpolation: boolean;
    lazyLoading: boolean;
    rtl: boolean;
  };
  dateFormats: Record<Locale, Intl.DateTimeFormatOptions>;
  numberFormats: Record<Locale, Intl.NumberFormatOptions>;
}

export const i18nConfig: I18nConfig = {
  defaultLocale: "en",
  supportedLocales: ["en", "fr"] as const,
  fallbackLocale: "en",
  namespaces: [
    "common",
    "app/components/sidebar",
    "app/components/navbar", 
    "app/components/footer",
    "app/pages/dashboard",
    "web/components/hero",
    "web/components/features",
    // Add more namespaces as needed
  ],
  features: {
    pluralization: true,
    interpolation: true, 
    lazyLoading: true,
    rtl: false
  },
  dateFormats: {
    en: {
      year: "numeric",
      month: "long", 
      day: "numeric"
    },
    fr: {
      year: "numeric",
      month: "long",
      day: "numeric"
    }
  },
  numberFormats: {
    en: {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    },
    fr: {
      style: "decimal", 
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }
  }
};

// Locale metadata for enhanced features
export const localeMetadata: Record<Locale, {
  name: string;
  nativeName: string;
  flag: string;
  rtl: boolean;
  dateLocale: string;
}> = {
  en: {
    name: "English",
    nativeName: "English", 
    flag: "🇺🇸",
    rtl: false,
    dateLocale: "en-US"
  },
  fr: {
    name: "French",
    nativeName: "Français",
    flag: "🇫🇷", 
    rtl: false,
    dateLocale: "fr-FR"
  }
};