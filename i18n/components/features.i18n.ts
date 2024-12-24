export interface I18n {
  features: {
    flavor: string;
    title: string;
    items: {
      proceduralCities: {
        title: string;
        description: string;
        flavorText: string;
      };
      networks: {
        title: string;
        description: string;
        flavorText: string;
      };
      systemVulnerabilities: {
        title: string;
        description: string;
        flavorText: string;
      };
      companiesNewsfeed: {
        title: string;
        description: string;
        flavorText: string;
      };
      stockExchange: {
        title: string;
        description: string;
        flavorText: string;
      };
      coreHacking: {
        title: string;
        description: string;
        flavorText: string;
      };
    };
    actions: {
      primary: string;
    };
  };
}

export const en: I18n = {
  features: {
    flavor: "Features",
    title: "System Breakdown.",
    items: {
      proceduralCities: {
        title: "Procedural Abstract Cities Generation",
        description:
          "Generate unique, evolving cities with each playthrough, creating dynamic environments for your hacking missions.",
        flavorText: "Endless Possibilities",
      },
      networks: {
        title: "Procedural Internet & Electric Networks",
        description:
          "Create interconnected systems for internet and electric grids, each with their own vulnerabilities and access points.",
        flavorText: "Connected Chaos",
      },
      systemVulnerabilities: {
        title: "Procedural Computer System Vulnerabilities",
        description:
          "Every computer system features procedurally generated weaknesses, providing new challenges for each mission.",
        flavorText: "Exploitable Weaknesses",
      },
      companiesNewsfeed: {
        title: "Procedural Companies & Newsfeed",
        description:
          "Dynamic companies and a constantly evolving newsfeed shape the economy, public opinion, and events in the world.",
        flavorText: "Dynamic Influence",
      },
      stockExchange: {
        title: "Procedural Stock Exchange",
        description:
          "A living, breathing stock market where your actions can alter prices and disrupt economies.",
        flavorText: "Market Manipulation",
      },
      coreHacking: {
        title: "Core Hacking Game Features",
        description:
          "Unlock abilities, earn wealth, and build your reputation as you level up and manipulate systems in the digital world.",
        flavorText: "Power and Prestige",
      },
    },
    actions: {
      primary: "Learn More",
    },
  },
};

export const fr: I18n = {
  features: {
    flavor: "Fonctionnalités",
    title: "Spécifications du système.",
    items: {
      proceduralCities: {
        title: "Génération Procédurale de Villes Abstraites",
        description:
          "Générez des villes uniques et évolutives à chaque partie, créant des environnements dynamiques pour vos missions de hacking.",
        flavorText: "Possibilités Illimitées",
      },
      networks: {
        title: "Réseaux Internet & Électriques Procéduraux",
        description:
          "Créez des systèmes interconnectés pour les réseaux internet et électriques, chacun avec ses propres vulnérabilités et points d'accès.",
        flavorText: "Chaos Connecté",
      },
      systemVulnerabilities: {
        title: "Vulnérabilités des Systèmes Informatiques Procéduraux",
        description:
          "Chaque système informatique possède des faiblesses générées de manière procédurale, offrant de nouveaux défis à chaque mission.",
        flavorText: "Faiblesses Exploitables",
      },
      companiesNewsfeed: {
        title: "Entreprises & Fil d'Actualités Procéduraux",
        description:
          "Les entreprises dynamiques et un fil d'actualités en constante évolution façonnent l'économie, l'opinion publique et les événements du monde.",
        flavorText: "Influence Dynamique",
      },
      stockExchange: {
        title: "Bourse Procédurale",
        description:
          "Un marché boursier vivant où vos actions peuvent modifier les prix et perturber les économies.",
        flavorText: "Manipulation du Marché",
      },
      coreHacking: {
        title: "Fonctionnalités de Jeu de Hacking",
        description:
          "Débloquez des compétences, gagnez de la richesse et construisez votre réputation en manipulant des systèmes dans le monde numérique.",
        flavorText: "Pouvoir et Prestige",
      },
    },
    actions: {
      primary: "En savoir plus",
    },
  },
};
