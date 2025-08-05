# I18n Usage Guide

## Overview

The application now uses a unified translation system with enhanced features including interpolation, pluralization, and programmatic locale switching.

## Translation Hooks

### 1. `useTranslation()` - For App Components

Use this hook in components within the LocaleProvider context (app layout):

```typescript
import { useTranslation } from "@/hooks/useTranslation";
import * as i18n from "@/i18n/app/components/sidebar.i18n";

function MyComponent() {
  // Destructure all the translation properties you need
  const { t, navigation, timeAgo, actions } = useTranslation(i18n);
  
  // Direct object access (recommended for simple cases)
  return (
    <div>
      <span>{navigation.dashboard}</span>
      <small>{timeAgo.now}</small>
      <button>{actions.save}</button>
    </div>
  );
  
  // Or using dot notation with enhanced features
  return <span>{t('navigation.dashboard')}</span>;
}
```

**Important**: Always destructure the specific translation objects you need. Don't try to access nested properties on the `t` function.

### 2. `useTranslationWithLocale()` - For Web Components

Use this hook in components that receive locale as a prop (website layout):

```typescript
import { useTranslationWithLocale } from "@/hooks/useTranslation";
import * as i18n from "@/i18n/web/components/hero.i18n";

function MyComponent({ locale }: { locale: string }) {
  // Destructure the specific translation properties you need
  const { t, title, description, actions } = useTranslationWithLocale(i18n, locale);
  
  // Direct access (recommended for simple cases)
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <button>{actions.primary}</button>
    </div>
  );
  
  // Or using dot notation with enhanced features
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <button>{t('actions.primary')}</button>
    </div>
  );
}
```

**Important**: The hook returns both the `t` function AND all the translation properties. Use destructuring to get the specific properties you need.

## Enhanced Features

### 1. Interpolation

Replace placeholders in translations with dynamic values:

```typescript
// Translation file
export const en = {
  welcome: "Welcome back, {{name}}!",
  itemCount: "You have {{count}} items in your cart"
};

// Component usage
const { t } = useTranslation(i18n);

return (
  <div>
    <p>{t('welcome', { interpolation: { name: user.name } })}</p>
    <p>{t('itemCount', { interpolation: { count: cartItems.length } })}</p>
  </div>
);
```

### 2. Pluralization

Handle singular/plural forms automatically:

```typescript
// Translation file
export const en = {
  plural: {
    notification: {
      zero: "No notifications",
      one: "1 notification", 
      other: "{{count}} notifications"
    }
  }
};

// Component usage
import { pluralize, interpolate } from "@/lib/i18n-utils";

const { t, plural } = useTranslation(i18n);

return (
  <p>
    {interpolate(
      pluralize(notificationCount, plural.notification),
      { count: notificationCount }
    )}
  </p>
);
```

**Alternative simple approach:**
```typescript
const { plural } = useTranslation(i18n);

// Direct usage without utils
const getNotificationText = (count: number) => {
  if (count === 0) return plural.notification.zero;
  if (count === 1) return plural.notification.one;
  return plural.notification.other.replace('{{count}}', count.toString());
};

return <p>{getNotificationText(notificationCount)}</p>;
```

### 3. Locale Switching

Programmatically change the application locale:

```typescript
import { useLocaleActions } from "@/contexts/locale.context";

function LanguageSwitcher() {
  const { setLocale, isLoading, availableLocales } = useLocaleActions();
  
  return (
    <select 
      onChange={(e) => setLocale(e.target.value as Locale)}
      disabled={isLoading}
    >
      {availableLocales.map(locale => (
        <option key={locale} value={locale}>
          {locale.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
```

## Translation File Structure

### Basic Structure

```typescript
export interface I18n {
  title: string;
  description: string;
  // Nested objects
  navigation: {
    home: string;
    about: string;
  };
}

export const en: I18n = {
  title: "Welcome",
  description: "A great application",
  navigation: {
    home: "Home",
    about: "About"
  }
};

export const fr: I18n = {
  title: "Bienvenue", 
  description: "Une excellente application",
  navigation: {
    home: "Accueil",
    about: "À propos"
  }
};
```

### Enhanced Structure with Interpolation/Pluralization

```typescript
export interface I18n {
  // Regular strings
  title: string;
  
  // Interpolation strings (use {{variable}} syntax)
  welcomeMessage: string; // "Welcome, {{name}}!"
  
  // Pluralization objects
  plural: {
    item: {
      zero: string;
      one: string;
      other: string;
    };
  };
}

export const en: I18n = {
  title: "Dashboard",
  welcomeMessage: "Welcome, {{name}}!",
  plural: {
    item: {
      zero: "No items",
      one: "1 item",
      other: "{{count}} items"
    }
  }
};
```

## Migration Guide

### From Old Pattern to New Pattern

**Before:**
```typescript
import * as i18n from "@/i18n/app/components/sidebar.i18n";
import { useLocale } from "@/contexts/locale.context";

function Component() {
  const locale = useLocale();
  const t = i18n[locale];
  return <span>{t.navigation.home}</span>;
}
```

**After:**
```typescript
import * as i18n from "@/i18n/app/components/sidebar.i18n";
import { useTranslation } from "@/hooks/useTranslation";

function Component() {
  const { t, navigation } = useTranslation(i18n);
  return <span>{navigation.home}</span>; // Direct access (backward compatible)
  // OR
  return <span>{t('navigation.home')}</span>; // Dot notation (new features)
}
```

### Web Components Migration

**Before:**
```typescript
import * as i18n from "@/i18n/web/components/navbar.i18n";

function Component({ locale }) {
  const t = i18n[locale];
  return <button>{t.navbar.login}</button>;
}
```

**After:**
```typescript
import * as i18n from "@/i18n/web/components/navbar.i18n";
import { useTranslationWithLocale } from "@/hooks/useTranslation";

function Component({ locale }) {
  const { t, navbar } = useTranslationWithLocale(i18n, locale);
  return <button>{navbar.login}</button>; // Direct access
  // OR
  return <button>{t('navbar.login')}</button>; // Dot notation
}
```

## Common Errors and Solutions

### Error 1: Accessing properties on the `t` function
```typescript
// ❌ Wrong - t is a function, not the translation object
const { t } = useTranslationWithLocale(i18n, locale);
return <button>{t.navbar.login}</button>; // TypeError!

// ✅ Correct - destructure the properties you need
const { t, navbar } = useTranslationWithLocale(i18n, locale);
return <button>{navbar.login}</button>;
```

### Error 2: Missing destructured properties
```typescript
// ❌ Wrong - timeAgo not destructured
const { t } = useTranslation(i18n);
return <span>{t.timeAgo.now}</span>; // TypeError!

// ✅ Correct - destructure timeAgo
const { t, timeAgo } = useTranslation(i18n);
return <span>{timeAgo.now}</span>;
```

### Error 3: Using wrong hook for context
```typescript
// ❌ Wrong - useLocale outside LocaleProvider
const locale = useLocale(); // Error: must be used within LocaleProvider

// ✅ Correct - use useTranslationWithLocale for web components
const { t } = useTranslationWithLocale(i18n, locale);
```

## Best Practices

### 1. Systematic Destructuring

Always destructure ALL the translation properties you'll use in your component:

```typescript
// ✅ Good - destructure everything upfront
const { 
  t,                    // Function for complex cases
  search,               // Search-related translations
  navigation,           // Navigation labels
  timeAgo,             // Time formatting
  actions,             // Button labels
  comingSoon,          // Status messages
  newSimulation        // Direct properties
} = useTranslation(i18n);

// Now use them directly
return (
  <div>
    <input placeholder={search.placeholder} />
    <span>{navigation.dashboard}</span>
    <time>{timeAgo.now}</time>
    <button>{actions.save}</button>
    <span>{comingSoon}</span>
  </div>
);
```

**Benefits:**
- Prevents `undefined` property errors
- Makes dependencies explicit
- Better TypeScript support
- Easier to refactor

### 2. Naming Conventions

- Use camelCase for translation keys
- Group related translations in nested objects
- Use descriptive names that indicate purpose

```typescript
// Good
export const en = {
  forms: {
    validation: {
      emailRequired: "Email is required",
      passwordTooShort: "Password must be at least 8 characters"
    }
  }
};

// Avoid
export const en = {
  err1: "Email required",
  err2: "Password short"
};
```

### 2. Interpolation

- Always provide fallback values
- Use descriptive placeholder names
- Keep interpolation logic in components, not translations

```typescript
// Good
welcomeMessage: "Welcome back, {{userName}}! You have {{unreadCount}} new messages."

// Usage with fallback
t('welcomeMessage', { 
  interpolation: { 
    userName: user?.name || 'Guest',
    unreadCount: messages?.length || 0
  }
})
```

### 3. Pluralization

- Always provide zero, one, and other forms
- Include interpolation in plural forms when needed
- Consider language-specific plural rules

```typescript
// Good - comprehensive pluralization
items: {
  zero: "No items in your cart",
  one: "1 item in your cart", 
  other: "{{count}} items in your cart"
}
```

## Validation

Run translation validation to catch missing keys:

```bash
npm run i18n:validate
```

This will report:
- Missing translation keys between locales
- Extra keys in some locales
- Malformed translation files

## Available Scripts

```bash
# Validate all translations
npm run i18n:validate

# Extract translation keys (future feature)
npm run i18n:extract

# Show only missing keys
npm run i18n:missing
```