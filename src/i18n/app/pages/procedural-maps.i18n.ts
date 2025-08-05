export interface I18n {
  title: string;
  description: string;
  comingSoon: string;
  city: {
    title: string;
    description: string;
    features: {
      roads: string;
      districts: string;
      landmarks: string;
    };
  };
  interior: {
    title: string;
    description: string;
    features: {
      floorplans: string;
      furniture: string;
      lighting: string;
    };
  };
  tools: {
    title: string;
    description: string;
    vectorExport: string;
    gameEngines: string;
    customization: string;
  };
}

export const en: I18n = {
  title: "Procedural Maps",
  description: "Generate vector-based maps and layouts using advanced procedural algorithms for cities and interior spaces.",
  comingSoon: "Advanced generation tools coming soon...",
  city: {
    title: "City Generation",
    description: "Create realistic urban environments with roads, districts, and landmarks using procedural algorithms.",
    features: {
      roads: "Road Networks",
      districts: "District Zoning",
      landmarks: "Landmarks & POIs",
    },
  },
  interior: {
    title: "Interior Layouts",
    description: "Design optimized interior spaces with furniture placement and lighting systems.",
    features: {
      floorplans: "Floor Plans",
      furniture: "Furniture Placement",
      lighting: "Lighting Systems",
    },
  },
  tools: {
    title: "Export & Integration",
    description: "Export your procedurally generated maps in various formats for different use cases.",
    vectorExport: "Vector Export",
    gameEngines: "Game Engine Support",
    customization: "Parameter Controls",
  },
};

export const fr: I18n = {
  title: "Cartes Procédurales",
  description: "Générez des cartes et des layouts vectoriels en utilisant des algorithmes procéduraux avancés pour les villes et les espaces intérieurs.",
  comingSoon: "Outils de génération avancés bientôt disponibles...",
  city: {
    title: "Génération de Ville",
    description: "Créez des environnements urbains réalistes avec routes, quartiers et points d'intérêt en utilisant des algorithmes procéduraux.",
    features: {
      roads: "Réseaux Routiers",
      districts: "Zonage de Quartiers",
      landmarks: "Points d'Intérêt",
    },
  },
  interior: {
    title: "Aménagements Intérieurs",
    description: "Concevez des espaces intérieurs optimisés avec placement de mobilier et systèmes d'éclairage.",
    features: {
      floorplans: "Plans d'Étage",
      furniture: "Placement de Mobilier",
      lighting: "Systèmes d'Éclairage",
    },
  },
  tools: {
    title: "Export & Intégration",
    description: "Exportez vos cartes générées procéduralement dans différents formats pour diverses utilisations.",
    vectorExport: "Export Vectoriel",
    gameEngines: "Support Moteurs de Jeu",
    customization: "Contrôles Paramétriques",
  },
};