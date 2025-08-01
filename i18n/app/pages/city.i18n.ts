export interface I18n {
  title: string;
  description: string;
  sections: {
    overview: {
      title: string;
      description: string;
    };
    zoning: {
      title: string;
      description: string;
    };
    infrastructure: {
      title: string;
      description: string;
    };
  };
}

export const en: I18n = {
  title: "City Management",
  description: "Manage your city infrastructure, zoning, and development plans.",
  sections: {
    overview: {
      title: "City Overview",
      description: "View comprehensive statistics and status of your city.",
    },
    zoning: {
      title: "Zoning Management",
      description: "Plan and manage residential, commercial, and industrial zones.",
    },
    infrastructure: {
      title: "Infrastructure",
      description: "Monitor and upgrade roads, utilities, and public services.",
    },
  },
};

export const fr: I18n = {
  title: "Gestion de la Ville",
  description: "Gérez votre infrastructure urbaine, le zonage et les plans de développement.",
  sections: {
    overview: {
      title: "Aperçu de la Ville",
      description: "Consultez les statistiques complètes et l'état de votre ville.",
    },
    zoning: {
      title: "Gestion du Zonage",
      description: "Planifiez et gérez les zones résidentielles, commerciales et industrielles.",
    },
    infrastructure: {
      title: "Infrastructure",
      description: "Surveillez et améliorez les routes, les services publics et les services publics.",
    },
  },
};