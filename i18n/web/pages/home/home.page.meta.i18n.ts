export interface I18n {
  metadata: {
    title: string;
    description: string;
    keywords: string;
  };
}

export const en: I18n = {
  metadata: {
    title: "Scintillar | Framework for Interactive Hacking Games",
    description:
      "Develop and experiment with interactive visualization and manipulation tools for immersive and dynamic hacking games.",
    keywords:
      "Hacking, games, interactive, visualization, manipulation, immersive, dynamic",
  },
};

export const fr: I18n = {
  metadata: {
    title: "Scintillar | Framework pour Jeux de Hacking Interactifs",
    description:
      "Développez et expérimentez avec des outils interactifs de visualisation et de manipulation pour des jeux de hacking immersifs et dynamiques.",
    keywords:
      "Hacking, jeux, interactif, visualisation, manipulation, immersif, dynamique",
  },
};
