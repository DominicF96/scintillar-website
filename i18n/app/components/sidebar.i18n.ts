export interface I18n {
  search: {
    placeholder: string;
    title: string;
    noResults: string;
  };
  categories: {
    simulations: string;
    assets: string;
    data: string;
    proceduralmaps: string;
    layers: string;
    tools: string;
  };
  navigation: {
    dashboard: string;
    city: string;
    interior: string;
    digitallayer: string;
    electricallayer: string;
    sociallayer: string;
    financelayer: string;
    market: string;
    docs: string;
    settings: string;
  };
  comingSoon: string;
  newSimulation: string;
  noSimulations: string;
}

export const en: I18n = {
  search: {
    placeholder: "Search",
    title: "Search",
    noResults: "No results found",
  },
  categories: {
    simulations: "Simulations",
    assets: "Assets",
    data: "Data",
    proceduralmaps: "Maps",
    layers: "Layers",
    tools: "Tools",
  },
  navigation: {
    dashboard: "Dashboard",
    city: "City",
    interior: "Interior",
    digitallayer: "Digital",
    electricallayer: "Electric",
    sociallayer: "Social",
    financelayer: "Finance",
    market: "Market",
    docs: "Documentation",
    settings: "Settings",
  },
  comingSoon: "Coming soon...",
  newSimulation: "New Simulation",
  noSimulations: "No simulations",
};

export const fr: I18n = {
  search: {
    placeholder: "Rechercher",
    title: "Recherche",
    noResults: "Aucun résultat trouvé",
  },
  categories: {
    simulations: "Simulations",
    assets: "Ressources",
    data: "Données",
    proceduralmaps: "Cartes",
    layers: "Couches",
    tools: "Outils",
  },
  navigation: {
    dashboard: "Tableau de bord",
    city: "Ville",
    interior: "Intérieur",
    digitallayer: "Numérique",
    electricallayer: "Électrique",
    sociallayer: "Sociale",
    financelayer: "Financière",
    market: "Marché",
    docs: "Documentation",
    settings: "Paramètres",
  },
  comingSoon: "Bientôt disponible...",
  newSimulation: "Nouvelle Simulation",
  noSimulations: "Aucune simulation",
};
