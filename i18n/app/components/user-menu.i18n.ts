import * as ThemeToggleI18n from "@/i18n/shared/components/theme-toggle.i18n";

export interface I18n extends ThemeToggleI18n.I18n {
  guest: string;
  not_logged_in: string;
  logout: string;
  preferences: string;
  language_toggle: {
    toggle: string;
    english: string;
    french: string;
  };
}

export const en: I18n = {
  ...ThemeToggleI18n.en,
  guest: "Guest",
  not_logged_in: "Not logged in",
  preferences: "Preferences",
  logout: "Logout",
  language_toggle: {
    toggle: "Language",
    english: "English",
    french: "French",
  },
};

export const fr: I18n = {
  ...ThemeToggleI18n.fr,
  guest: "Invité",
  not_logged_in: "Non connecté",
  preferences: "Préférences",
  logout: "Déconnexion",
  language_toggle: {
    toggle: "Langue",
    english: "Anglais",
    french: "Français",
  },
};
