import { Locale, locales } from "@/lib/config/i18n-config";

interface TranslationNode {
  [key: string]: string | TranslationNode;
}

interface TranslationStore {
  [locale: string]: TranslationNode;
}

class TranslationManager {
  private translations: TranslationStore = {};
  private loadedNamespaces = new Set<string>();

  // Lazy load translation namespace
  async loadNamespace(namespace: string): Promise<void> {
    if (this.loadedNamespaces.has(namespace)) return;

    try {
      for (const locale of locales) {
        const module = await import(`@/i18n/${namespace}.i18n`);
        if (!this.translations[locale]) {
          this.translations[locale] = {};
        }
        this.translations[locale][namespace] = module[locale];
      }
      this.loadedNamespaces.add(namespace);
    } catch (error) {
      console.warn(`Failed to load translation namespace: ${namespace}`, error);
    }
  }

  // Get translation by key path
  get(locale: Locale, keyPath: string, namespace?: string): string {
    const keys = keyPath.split('.');
    let current: any = namespace 
      ? this.translations[locale]?.[namespace]
      : this.translations[locale];

    for (const key of keys) {
      if (current?.[key] === undefined) {
        console.warn(`Translation missing: ${locale}.${keyPath}`);
        return keyPath; // Return key as fallback
      }
      current = current[key];
    }

    return typeof current === 'string' ? current : keyPath;
  }

  // Validate all translations have same structure
  validateTranslations(): { missingKeys: string[]; extraKeys: string[] } {
    const issues = { missingKeys: [] as string[], extraKeys: [] as string[] };
    
    // Implementation would compare translation structures across locales
    // and report missing or extra keys
    
    return issues;
  }

  // Get all available locales
  getAvailableLocales(): Locale[] {
    return Object.keys(this.translations) as Locale[];
  }
}

export const translationManager = new TranslationManager();