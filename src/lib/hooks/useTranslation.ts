import { useLocale } from "@/providers/locale.context";
import { interpolate, pluralize } from "@/lib/utils/i18n-utils";

// Generic translation hook that works with any translation object
export function useTranslation<T extends Record<string, any>>(translations: T): T[keyof T] & {
  t: (key: string, options?: {
    interpolation?: Record<string, string | number>;
    count?: number;
    plural?: { zero?: string; one: string; other: string };
  }) => string;
} {
  const locale = useLocale();
  const localeTranslations = translations[locale as keyof T];
  
  // In development, log errors for missing translations but don't throw
  if (process.env.NODE_ENV === 'development' && !localeTranslations) {
    console.error(
      `🌐 Translation Error: Missing translations for locale "${locale}". ` +
      `Available locales: ${Object.keys(translations).join(', ')}`
    );
  }
  
  // In production, fallback gracefully but log warnings
  const finalTranslations = localeTranslations || translations['en' as keyof T] || {};
  
  if (!localeTranslations && process.env.NODE_ENV === 'production') {
    console.warn(`🌐 Missing translations for locale "${locale}", falling back to English`);
  }
  
  // Enhanced translation function with interpolation and pluralization
  const t = (key: string, options?: {
    interpolation?: Record<string, string | number>;
    count?: number;
    plural?: { zero?: string; one: string; other: string };
  }): string => {
    // Navigate through nested object using dot notation
    const keys = key.split('.');
    let value: any = finalTranslations;
    
    for (const k of keys) {
      if (value?.[k] === undefined) {
        if (process.env.NODE_ENV === 'development') {
          console.error(`🌐 Translation Key Missing: "${locale}.${key}" - Add this key to your i18n files`);
        }
        console.warn(`🌐 Translation missing: ${locale}.${key}`);
        return `[${key}]`; // Clear indicator of missing translation
      }
      value = value[k];
    }
    
    if (typeof value !== 'string') {
      if (process.env.NODE_ENV === 'development') {
        console.error(`🌐 Translation Type Error: "${locale}.${key}" is not a string (got ${typeof value})`);
      }
      console.warn(`🌐 Translation value is not a string: ${locale}.${key}`);
      return `[${key}]`;
    }
    
    // Handle pluralization
    if (options?.count !== undefined && options?.plural) {
      return pluralize(options.count, options.plural);
    }
    
    // Handle interpolation
    if (options?.interpolation) {
      return interpolate(value, options.interpolation);
    }
    
    return value;
  };
  
  return {
    ...(finalTranslations || {}),
    t
  } as T[keyof T] & { t: typeof t };
}

// Simplified hook for direct object access (backward compatibility)
export function useTranslationDirect<T extends Record<string, any>>(translations: T): T[keyof T] {
  const locale = useLocale();
  return translations[locale as keyof T];
}

// Hook for web components that receive locale as prop
export function useTranslationWithLocale<T extends Record<string, any>>(
  translations: T, 
  locale: string
): T[keyof T] & {
  t: (key: string, options?: {
    interpolation?: Record<string, string | number>;
    count?: number;
    plural?: { zero?: string; one: string; other: string };
  }) => string;
} {
  const localeTranslations = translations[locale as keyof T];
  const finalTranslations = localeTranslations || translations['en' as keyof T] || {};
  
  // Enhanced translation function with interpolation and pluralization
  const t = (key: string, options?: {
    interpolation?: Record<string, string | number>;
    count?: number;
    plural?: { zero?: string; one: string; other: string };
  }): string => {
    // Navigate through nested object using dot notation
    const keys = key.split('.');
    let value: any = finalTranslations;
    
    for (const k of keys) {
      if (value?.[k] === undefined) {
        if (process.env.NODE_ENV === 'development') {
          console.error(`🌐 Translation Key Missing: "${locale}.${key}" - Add this key to your i18n files`);
        }
        console.warn(`🌐 Translation missing: ${locale}.${key}`);
        return `[${key}]`; // Clear indicator of missing translation
      }
      value = value[k];
    }
    
    if (typeof value !== 'string') {
      if (process.env.NODE_ENV === 'development') {
        console.error(`🌐 Translation Type Error: "${locale}.${key}" is not a string (got ${typeof value})`);
      }
      console.warn(`🌐 Translation value is not a string: ${locale}.${key}`);
      return `[${key}]`;
    }
    
    // Handle pluralization
    if (options?.count !== undefined && options?.plural) {
      return pluralize(options.count, options.plural);
    }
    
    // Handle interpolation
    if (options?.interpolation) {
      return interpolate(value, options.interpolation);
    }
    
    return value;
  };
  
  return {
    ...finalTranslations,
    t
  } as T[keyof T] & { t: typeof t };
}

// Example usage:
// const { t, navigation } = useTranslation(sidebarI18n);
// return <span>{navigation.dashboard}</span>; // Direct access
// return <span>{t('navigation.dashboard')}</span>; // Dot notation
// return <span>{t('welcome', { interpolation: { name: 'John' } })}</span>; // With interpolation

// For web components:
// const { t, hero } = useTranslationWithLocale(heroI18n, locale);
// return <span>{hero.title}</span>; // Direct access