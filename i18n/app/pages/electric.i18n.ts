export interface I18n {
  title: string;
  description: string;
  sections: {
    grid: {
      title: string;
      description: string;
    };
    consumption: {
      title: string;
      description: string;
    };
    renewable: {
      title: string;
      description: string;
    };
  };
}

export const en: I18n = {
  title: "Electric Systems",
  description: "Monitor and manage electrical infrastructure, power consumption, and energy efficiency.",
  sections: {
    grid: {
      title: "Power Grid Status",
      description: "Real-time monitoring of electrical grid and distribution.",
    },
    consumption: {
      title: "Energy Consumption",
      description: "Track usage patterns and optimize energy efficiency.",
    },
    renewable: {
      title: "Renewable Sources",
      description: "Manage solar, wind, and other sustainable energy sources.",
    },
  },
};

export const fr: I18n = {
  title: "Systèmes Électriques",
  description: "Surveillez et gérez l'infrastructure électrique, la consommation d'énergie et l'efficacité énergétique.",
  sections: {
    grid: {
      title: "État du Réseau Électrique",
      description: "Surveillance en temps réel du réseau électrique et de la distribution.",
    },
    consumption: {
      title: "Consommation d'Énergie",
      description: "Suivez les modèles d'utilisation et optimisez l'efficacité énergétique.",
    },
    renewable: {
      title: "Sources Renouvelables",
      description: "Gérez les sources d'énergie solaire, éolienne et autres sources durables.",
    },
  },
};