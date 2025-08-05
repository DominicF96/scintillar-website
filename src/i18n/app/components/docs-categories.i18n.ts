export interface I18n {
  // Standard doc categories - these should match the category values in MDX frontmatter
  basics: string;
  configuration: string;
  features: string;
  guides: string;
  tutorials: string;
  advanced: string;
  integrations: string;
  troubleshooting: string;
  api: string;
  // Fallback for unknown categories
  general: string;
  // Meta information
  searchPlaceholder: string;
  noResults: string;
}

export const en: I18n = {
  basics: "Getting Started",
  configuration: "Configuration", 
  features: "Features",
  guides: "Guides",
  tutorials: "Tutorials",
  advanced: "Advanced",
  integrations: "Integrations",
  troubleshooting: "Troubleshooting",
  api: "API Reference",
  general: "General",
  searchPlaceholder: "Search documentation...",
  noResults: "No documentation found matching your search."
};

export const fr: I18n = {
  basics: "Guide de Démarrage",
  configuration: "Configuration",
  features: "Fonctionnalités", 
  guides: "Guides",
  tutorials: "Tutoriels",
  advanced: "Avancé",
  integrations: "Intégrations",
  troubleshooting: "Dépannage",
  api: "Référence API",
  general: "Général",
  searchPlaceholder: "Rechercher dans la documentation...",
  noResults: "Aucune documentation trouvée correspondant à votre recherche."
};