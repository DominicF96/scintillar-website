export interface I18n {
  integration: {
    flavor: string;
    title: string;
    description: {
      part_1: string;
      part_2: string;
    };
    engine_soon: string;
    checklist: string[];
  };
}

export const en: I18n = {
  integration: {
    flavor: "Seamless Integration",
    title: "You're in Control.",
    description: {
      part_1:
        "Take your game development to the next level by doing the necessary configurations in a powerfull web interface.",
      part_2:
        "Then integrate Scintillar's powerful SDKs with your preferred game engine!",
    },
    engine_soon: "Coming Soon",
    checklist: [
      "Web-Based Configuration & Engine Integration",
      "Enhance your game development experience with our intuitive tools",
      "Continuous improvements of the hacking engine",
    ],
  },
};

export const fr: I18n = {
  integration: {
    flavor: "Intégration Transparente",
    title: "Vous êtes aux commandes.",
    description: {
      part_1:
        "Faites évoluer votre développement de jeux au niveau supérieur en effectuant les configurations nécessaires dans une interface web puissante.",
      part_2:
        "Intégrez ensuite les puissants SDK de Scintillar avec votre moteur de jeu préféré !",
    },
    engine_soon: "Bientôt disponible",
    checklist: [
      "Configuration basée sur le web & Intégration avec le moteur",
      "Améliorez votre expérience de développement de jeux avec nos outils intuitifs",
      "Améliorations continues du moteur de piratage",
    ],
  },
};
