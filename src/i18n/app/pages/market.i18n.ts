export interface I18n {
  title: string;
  description: string;
  sections: {
    featured: {
      title: string;
      items: {
        smartHome: string;
        energyOptimizer: string;
        securitySystem: string;
      };
    };
    services: {
      title: string;
      items: {
        installation: string;
        maintenance: string;
        support: string;
      };
    };
  };
}

export const en: I18n = {
  title: "Market",
  description: "Browse and purchase items, services, and upgrades for your systems.",
  sections: {
    featured: {
      title: "Featured Items",
      items: {
        smartHome: "Smart Home Package",
        energyOptimizer: "Energy Optimizer",
        securitySystem: "Security System",
      },
    },
    services: {
      title: "Services",
      items: {
        installation: "Professional Installation",
        maintenance: "Maintenance Plan",
        support: "24/7 Support",
      },
    },
  },
};

export const fr: I18n = {
  title: "Marché",
  description: "Parcourez et achetez des articles, services et améliorations pour vos systèmes.",
  sections: {
    featured: {
      title: "Articles en Vedette",
      items: {
        smartHome: "Pack Maison Intelligente",
        energyOptimizer: "Optimiseur d'Énergie",
        securitySystem: "Système de Sécurité",
      },
    },
    services: {
      title: "Services",
      items: {
        installation: "Installation Professionnelle",
        maintenance: "Plan de Maintenance",
        support: "Support 24/7",
      },
    },
  },
};