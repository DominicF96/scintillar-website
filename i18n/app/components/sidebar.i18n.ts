export interface I18n {
  search: {
    placeholder: string;
  };
  navigation: {
    dashboard: string;
    city: string;
    interior: string;
    internet: string;
    electric: string;
    news: string;
    stockmarket: string;
    market: string;
    settings: string;
  };
}

export const en: I18n = {
  search: {
    placeholder: "Search...",
  },
  navigation: {
    dashboard: "Dashboard",
    city: "City",
    interior: "Interior Layouts",
    internet: "Internet",
    electric: "Electric",
    news: "News",
    stockmarket: "Stock Market",
    market: "Market",
    settings: "Settings",
  },
};

export const fr: I18n = {
  search: {
    placeholder: "Search...",
  },
  navigation: {
    dashboard: "Tableau de bord",
    city: "Ville",
    interior: "Aménagements Intérieurs",
    internet: "Internet",
    electric: "Électricité",
    news: "Actualités",
    stockmarket: "Bourse",
    market: "Marché",
    settings: "Paramètres",
  },
};
