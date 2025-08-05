// Interpolation utility for dynamic values in translations
export function interpolate(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    return values[key]?.toString() || match;
  });
}

// Pluralization utility
export function pluralize(
  count: number,
  translations: { zero?: string; one: string; other: string }
): string {
  if (count === 0 && translations.zero) return translations.zero;
  if (count === 1) return translations.one;
  return translations.other;
}

// Enhanced translation hook with interpolation and pluralization
export function t(key: string, options?: {
  interpolation?: Record<string, string | number>;
  count?: number;
  plural?: { zero?: string; one: string; other: string };
}): string {
  // This would be implemented to work with your translation structure
  // For now, returning the key as placeholder
  if (options?.interpolation) {
    return interpolate(key, options.interpolation);
  }
  if (options?.count && options?.plural) {
    return pluralize(options.count, options.plural);
  }
  return key;
}

// Type-safe translation key validator
export type TranslationKey<T> = T extends object 
  ? {
      [K in keyof T]: K extends string 
        ? T[K] extends object
          ? `${K}.${TranslationKey<T[K]>}`
          : K
        : never;
    }[keyof T]
  : never;