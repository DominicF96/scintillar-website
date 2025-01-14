export interface I18n {
  title: string;
  description: string;
  actions: {
    primary: string;
    secondary: string;
  };
}

export const en: I18n = {
  title: "Framework for Interactive Hacking Games",
  description:
    "Develop and experiment with interactive visualization and manipulation tools for immersive and dynamic hacking games.",
  actions: {
    primary: "Get Started Now",
    secondary: "Learn More",
  },
};

export const fr: I18n = {
  title: "Framework pour Jeux de Hacking Interactifs",
  description:
    "Développez et expérimentez avec des outils interactifs de visualisation et de manipulation pour des jeux de hacking immersifs et dynamiques.",
  actions: {
    primary: "Commencer",
    secondary: "En savoir plus",
  },
};
