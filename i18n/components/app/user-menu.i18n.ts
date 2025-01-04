import * as ThemeToggleI18n from "@/i18n/components/shared/theme-toggle.i18n";

export interface I18n extends ThemeToggleI18n.I18n {
  guest: string;
  not_logged_in: string;
  logout: string;
}

export const en: I18n = {
  ...ThemeToggleI18n.en,
  guest: "Guest",
  not_logged_in: "Not logged in",
  logout: "Logout",
};

export const fr: I18n = {
  ...ThemeToggleI18n.fr,
  guest: "Invité",
  not_logged_in: "Non connecté",
  logout: "Déconnexion",
};
