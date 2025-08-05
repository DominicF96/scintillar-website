# 🌐 Localization System Documentation

## 📋 Overview

The Scintillar app implements a **custom, TypeScript-first internationalization system** built on Next.js 15 with:
- **2 supported locales**: English (en) and French (fr)  
- **Route-based locale detection** with middleware
- **Context-driven locale management** (no prop drilling)
- **Advanced features**: pluralization, interpolation, and validation tools

---

## 🏗️ Architecture & Configuration

### Core Configuration

File: `src/lib/config/i18n-config.ts`

```typescript
export const i18nConfig: I18nConfig = {
  defaultLocale: "en",
  supportedLocales: ["en", "fr"] as const,
  fallbackLocale: "en",
  features: {
    pluralization: true,    // ✅ Supported
    interpolation: true,    // ✅ Supported  
    lazyLoading: true,      // ✅ Supported
    rtl: false             // ❌ Not implemented
  },
  dateFormats: { /* locale-specific formats */ },
  numberFormats: { /* locale-specific formats */ }
}
```

### Locale Metadata

Enhanced locale information with flags, native names, and date locales for UI components:

```typescript
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
```

---

## 🛣️ Routing & Middleware

### Automatic Locale Detection

File: `middleware.ts`

The middleware handles:
- **Cookie-based locale persistence** (`NEXT_LOCALE` cookie)
- **Browser language detection** using `accept-language` header
- **Automatic redirects** when locale is missing or differs from cookie
- **URL rewriting** to include locale prefix (`/en/...`, `/fr/...`)

```typescript
export default function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const locale = getLocale(req);
  const pathnameLocale = getPathnameLocale(pathname);
  const cookieLocale = req.cookies.get("NEXT_LOCALE")?.value;

  // Redirect if no locale in pathname or cookie locale differs
  if (!pathnameLocale || (cookieLocale && cookieLocale !== pathnameLocale)) {
    const newLocale = cookieLocale || locale;
    const newPathname = pathnameLocale 
      ? pathname.replace(`/${pathnameLocale}`, `/${newLocale}`) 
      : `/${newLocale}${pathname}`;
    
    const response = NextResponse.redirect(new URL(newPathname, req.url));
    response.cookies.set("NEXT_LOCALE", newLocale);
    return response;
  }
  
  // Set locale in cookies and continue
  const response = NextResponse.next();
  response.cookies.set("NEXT_LOCALE", pathnameLocale);
  return response;
}
```

### Route Matching

File: `src/lib/middlewares/get-locale.ts`

Uses `@formatjs/intl-localematcher` for intelligent locale matching from browser preferences:

```typescript
export function getLocale(request: NextRequest) {
  const current = request.cookies.get("NEXT_LOCALE");
  if (current?.value) return current.value;
  
  const locale = request.headers
    .get("accept-language")
    ?.split(",")
    .map((l) => l.split(";")[0]);
    
  return match(locale ?? [], locales as any, defaultLocale);
}
```

---

## 📁 Translation File Organization

### Hierarchical Structure

```
src/i18n/
├── common.i18n.ts              # Shared translations
├── app/                        # App-specific translations
│   ├── components/             # Component translations
│   │   ├── sidebar.i18n.ts
│   │   ├── notifications.i18n.ts
│   │   └── ...
│   └── pages/                  # Page-specific translations
│       ├── dashboard.i18n.ts
│       └── ...
├── web/                        # Marketing site translations
│   ├── components/
│   └── pages/
└── shared/                     # Cross-context translations
    ├── components/
    └── pages/
```

### Translation File Pattern

Each translation file follows this TypeScript pattern:

```typescript
// Define interface for type safety
export interface I18n {
  title: string;
  description: string;
  nested: {
    key: string;
  };
}

// English translations
export const en: I18n = {
  title: "English Title",
  description: "English description",
  nested: {
    key: "Nested value"
  }
};

// French translations  
export const fr: I18n = {
  title: "Titre Français",
  description: "Description française",
  nested: {
    key: "Valeur imbriquée"
  }
};
```

---

## 🔧 Translation Hooks & Context

### Context Provider

File: `src/lib/providers/locale.context.tsx`

- **Eliminates prop drilling** - components access locale via context
- **Cookie synchronization** with automatic page navigation
- **Loading states** during locale changes
- **Validation** of supported locales

```typescript
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
```

### Primary Translation Hook

File: `src/lib/hooks/useTranslation.ts`

The main hook provides multiple access patterns:

```typescript
const { t, navigation, categories } = useTranslation(sidebarI18n);

// Direct object access
<span>{navigation.dashboard}</span>

// Dot notation with t() function  
<span>{t('navigation.dashboard')}</span>

// With interpolation
<span>{t('welcome', { interpolation: { name: 'John' } })}</span>

// With pluralization
<span>{t('items', { 
  count: 5, 
  plural: { 
    one: '1 item', 
    other: '{{count}} items' 
  } 
})}</span>
```

### Hook Variants

1. **`useTranslation()`** - Main hook with full features (interpolation, pluralization, dot notation)
2. **`useTranslationDirect()`** - Simple object access for backward compatibility  
3. **`useTranslationWithLocale()`** - For web components that receive locale as prop

---

## ✨ Advanced Features

### 1. Pluralization

File: `src/lib/utils/i18n-utils.ts`

```typescript
// Pluralization utility
export function pluralize(
  count: number,
  translations: { zero?: string; one: string; other: string }
): string {
  if (count === 0 && translations.zero) return translations.zero;
  if (count === 1) return translations.one;
  return translations.other;
}
```

**Usage Example:**

```typescript
// Translation definition
plural: {
  notification: {
    one: "{count} unread notification",
    other: "{count} unread notifications"
  }
}

// Usage in component
const unreadCount = 5;
{pluralize(unreadCount, plural.notification)}
// Result: "5 unread notifications"
```

### 2. String Interpolation

```typescript
// Interpolation utility for dynamic values
export function interpolate(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    return values[key]?.toString() || match;
  });
}
```

**Usage Example:**

```typescript
// Template: "Welcome {{name}} to {{app}}"
interpolate(template, { name: 'John', app: 'Scintillar' })
// Result: "Welcome John to Scintillar"
```

### 3. Nested Object Navigation

The translation hook supports dot notation for accessing nested translations:

```typescript
// Access nested translations with dot notation
t('search.placeholder')        // Accesses search.placeholder from translation object
t('categories.simulations')    // Accesses categories.simulations
t('navigation.dashboard')      // Accesses navigation.dashboard
```

### 4. Type Safety

TypeScript utility type for generating type-safe key paths:

```typescript
// Generates type-safe key paths for IntelliSense
type TranslationKey<T> = T extends object 
  ? {
      [K in keyof T]: K extends string 
        ? T[K] extends object
          ? `${K}.${TranslationKey<T[K]>}`
          : K
        : never;
    }[keyof T]
  : never;
```

---

## 🛠️ Development Tools

### Translation Validation Script

File: `scripts/validate-translations.ts`

Automated validation tool that checks for:
- **Missing translation keys** across locales
- **Extra keys** that exist in one locale but not others  
- **Malformed files** with syntax errors
- **Structural consistency** between locale objects

```typescript
class TranslationValidator {
  async validateTranslations(): Promise<ValidationResult> {
    const result: ValidationResult = {
      missingKeys: [],
      extraKeys: [],
      malformedFiles: []
    };

    // Find all .i18n.ts files
    const translationFiles = await glob('**/*.i18n.ts', { cwd: this.i18nDir });
    
    for (const file of translationFiles) {
      await this.validateFile(path.join(this.i18nDir, file), result);
    }

    return result;
  }
}
```

### NPM Scripts

Available validation commands:

```json
{
  "scripts": {
    "i18n:validate": "ts-node scripts/validate-translations.ts",
    "i18n:missing": "npm run i18n:validate | grep 'Missing Keys' -A 50"
  }
}
```

---

## 📋 Best Practices & Patterns

### ✅ Recommended Patterns

#### 1. Use Context, Not Props

```typescript
// ✅ Good - Self-contained component
function MyComponent() {
  const { t } = useTranslation(i18n);
  return <span>{t.title}</span>;
}

// ❌ Avoid - Prop drilling
function MyComponent({ locale }: { locale: string }) {
  const t = i18n[locale];
  return <span>{t.title}</span>;
}
```

#### 2. Organize by Domain, Not Locale

```
✅ i18n/app/components/sidebar.i18n.ts  
❌ i18n/en/sidebar.ts, i18n/fr/sidebar.ts
```

#### 3. Type-Safe Translation Interfaces

```typescript
// ✅ Define interfaces for auto-completion and validation
export interface I18n {
  title: string;
  nested: {
    key: string;
  };
}

export const en: I18n = { /* ... */ };
export const fr: I18n = { /* ... */ };
```

#### 4. Graceful Fallbacks with Clear Indicators

```typescript
// Development: Throw errors for missing translations
// Production: Fallback to English with warnings
// Missing keys show as [key.name] for easy identification
```

### 🔧 Error Handling Strategy

- **Development Mode**: Detailed console errors with missing translation context
- **Production Mode**: Graceful fallbacks to English with warnings
- **Visual Indicators**: Missing translations display as `[key.name]` brackets

### 🎯 Performance Features

- **Lazy Loading**: Translations loaded on-demand per component
- **Cookie Persistence**: Locale preferences persist across sessions  
- **Middleware Optimization**: Efficient route-based locale detection
- **Type-Safe Keys**: Compile-time validation prevents runtime errors

---

## 🔍 Usage Examples

### Component with Pluralization

File: `src/components/features/notifications/notifications.tsx`

```typescript
import { useTranslation } from "@/lib/hooks/useTranslation";
import { pluralize, interpolate } from "@/lib/utils/i18n-utils";
import * as i18n from "@/i18n/app/components/notifications.i18n";

function NotificationsComponent() {
  const { t, plural } = useTranslation(i18n);
  const notifications = getNotifications();
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div>
      <h2>{t.title}</h2>
      <div className="text-xs text-muted-foreground">
        {interpolate(
          pluralize(unreadCount, plural.notification),
          { count: unreadCount }
        )}
      </div>
      {/* Rest of component */}
    </div>
  );
}
```

### Locale Switching

```typescript
import { useLocaleActions } from "@/lib/providers/locale.context";

function LocaleSwitcher() {
  const { setLocale, isLoading, currentLocale, availableLocales } = useLocaleActions();

  const handleLocaleChange = async (newLocale: Locale) => {
    await setLocale(newLocale);
  };

  return (
    <select 
      value={currentLocale} 
      onChange={(e) => handleLocaleChange(e.target.value as Locale)}
      disabled={isLoading}
    >
      {availableLocales.map(locale => (
        <option key={locale} value={locale}>
          {localeMetadata[locale].nativeName}
        </option>
      ))}
    </select>
  );
}
```

### Complex Translation with All Features

```typescript
function ComplexComponent() {
  const { t } = useTranslation(i18n);

  return (
    <div>
      {/* Simple key access */}
      <h1>{t('title')}</h1>
      
      {/* Nested key access */}
      <p>{t('section.description')}</p>
      
      {/* With interpolation */}
      <span>{t('welcome', { 
        interpolation: { name: user.name, app: 'Scintillar' } 
      })}</span>
      
      {/* With pluralization */}
      <div>{t('itemCount', {
        count: items.length,
        plural: {
          zero: 'No items',
          one: '1 item found',
          other: '{{count}} items found'
        }
      })}</div>
      
      {/* Combined interpolation and pluralization */}
      <p>{t('userStatus', {
        count: activeUsers,
        interpolation: { app: 'Scintillar' },
        plural: {
          one: '1 user is active in {{app}}',
          other: '{{count}} users are active in {{app}}'
        }
      })}</p>
    </div>
  );
}
```

---

## 🚀 Getting Started

### 1. Create a Translation File

```typescript
// src/i18n/app/components/my-component.i18n.ts
export interface I18n {
  title: string;
  description: string;
}

export const en: I18n = {
  title: "My Component",
  description: "This is my component description"
};

export const fr: I18n = {
  title: "Mon Composant", 
  description: "Ceci est la description de mon composant"
};
```

### 2. Use in Component

```typescript
// src/components/my-component/my-component.tsx
import { useTranslation } from "@/lib/hooks/useTranslation";
import * as i18n from "@/i18n/app/components/my-component.i18n";

export function MyComponent() {
  const { title, description } = useTranslation(i18n);
  
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
```

### 3. Validate Translations

```bash
npm run i18n:validate
```

---

## 🔄 Migration Guide

### From Prop Drilling to Context

**Before (❌):**
```typescript
function ParentComponent({ locale }: { locale: string }) {
  return <ChildComponent locale={locale} />;
}

function ChildComponent({ locale }: { locale: string }) {
  const t = translations[locale];
  return <span>{t.title}</span>;
}
```

**After (✅):**
```typescript
function ParentComponent() {
  return <ChildComponent />;
}

function ChildComponent() {
  const { title } = useTranslation(translations);
  return <span>{title}</span>;
}
```

### Adding New Locales

1. Update `src/lib/config/i18n-config.ts`:
```typescript
export const locales = ["en", "fr", "es"] as const;
```

2. Add locale metadata:
```typescript
export const localeMetadata = {
  // ... existing locales
  es: {
    name: "Spanish",
    nativeName: "Español",
    flag: "🇪🇸",
    rtl: false,
    dateLocale: "es-ES"
  }
};
```

3. Add translations to all `.i18n.ts` files:
```typescript
export const es: I18n = {
  // ... Spanish translations
};
```

---

## 📚 Content-Driven Localization (Docs System)

For content that's driven by folder structure and metadata (like the docs system), we use a **category dictionary approach**:

### 1. Category Dictionary Pattern

Create dedicated translation files for content categories:

```typescript
// src/i18n/app/components/docs-categories.i18n.ts
export interface I18n {
  // Standard doc categories - must match MDX frontmatter values
  basics: string;
  configuration: string;
  features: string;
  guides: string;
  // ... other categories
  general: string; // fallback
}

export const en: I18n = {
  basics: "Getting Started",
  configuration: "Configuration", 
  features: "Features",
  // ...
  general: "General"
};
```

### 2. Type-Safe Category Validation

Define valid categories as TypeScript types:

```typescript
// src/types/docs.types.ts
export type DocsCategory = 
  | "basics"
  | "configuration" 
  | "features"
  | "general";

export function getLocalizedCategory(
  category: string | undefined, 
  categoryTranslations: Record<string, string>
): string {
  if (!category) return categoryTranslations.general || "General";
  
  return categoryTranslations[category] || 
         categoryTranslations.general || 
         category.charAt(0).toUpperCase() + category.slice(1);
}
```

### 3. Component Integration

Use the category dictionary in components:

```typescript
// In DocsList component
import { useTranslation } from "@/hooks/useTranslation";
import * as categoryI18n from "@/i18n/app/components/docs-categories.i18n";
import { getLocalizedCategory } from "@/types/docs.types";

function DocsList() {
  const categoryTranslations = useTranslation(categoryI18n);
  
  // Group docs by localized category
  const groupedDocs = useMemo(() => {
    const groups: Record<string, DocsMetadata[]> = {};
    
    filteredDocs.forEach((doc) => {
      const localizedCategory = getLocalizedCategory(doc.category, categoryTranslations);
      if (!groups[localizedCategory]) {
        groups[localizedCategory] = [];
      }
      groups[localizedCategory].push(doc);
    });
    
    return groups;
  }, [filteredDocs, categoryTranslations]);
}
```

### 4. Content Validation

The docs generation script validates categories and provides helpful warnings:

```typescript
// scripts/docs/docs-index.script.ts
const VALID_CATEGORIES: DocsCategory[] = [
  "basics", "configuration", "features", // ...
];

// Validate category in MDX frontmatter
if (data.category && !VALID_CATEGORIES.includes(data.category)) {
  console.warn(`Invalid category "${data.category}" in ${filePath}`);
  console.warn(`Valid categories: ${VALID_CATEGORIES.join(", ")}`);
  data.category = "general"; // fallback
}
```

### 5. MDX Frontmatter

Content authors use predefined categories in MDX files:

```yaml
---
id: getting-started
title: Getting Started with Scintillar
category: basics  # Must match category dictionary keys
description: Learn how to get started...
---
```

### 6. Benefits of This Approach

✅ **Type Safety**: Categories are validated at build time  
✅ **Consistency**: All categories have translations  
✅ **Maintainability**: Centralized category management  
✅ **Flexibility**: Easy to add new categories  
✅ **Developer Experience**: Clear warnings for invalid categories  
✅ **Fallback Handling**: Graceful degradation for missing categories  

### 7. Content Localization Best Practices

1. **Keep categories language-agnostic** in frontmatter (use keys like "basics", not "Getting Started")
2. **Always provide translations** for all used categories
3. **Use the validation script** to catch category mismatches early
4. **Implement graceful fallbacks** for unknown categories
5. **Document valid categories** for content authors

This pattern ensures that content-driven features remain fully localized while maintaining the flexibility of dynamic content organization.

---

This localization system provides a robust, type-safe, and developer-friendly approach to internationalization with advanced features like pluralization, interpolation, comprehensive validation tools, and content-driven localization patterns, all while maintaining excellent performance and developer experience.