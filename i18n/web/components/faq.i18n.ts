export interface I18n {
  faq: {
    flavor: string;
    title: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
}

export const en: I18n = {
  faq: {
    flavor: "Frequently Asked",
    title: "Questions",
    items: [
      {
        question: "What is Scintillar?",
        answer:
          "Scintillar is a powerful framework designed to help developers create interactive, procedurally generated worlds with complex systems like hacking mechanics, urban simulations, and network manipulations. It's tailored to enhance game development workflows and provide flexible, web-based configuration.",
      },
      {
        question: "Which game engine does Scintillar support?",
        answer:
          "Scintillar is fully integrated with Godot, offering a seamless experience for developers working within this engine. API access and ready-to-use tools make integration fast and efficient.",
      },
      {
        question: "Can I customize the procedural generation systems?",
        answer:
          "Yes! Scintillar allows full customization of its procedural systems, from city generation to vulnerabilities and networks. You can tweak the parameters to fit the specific needs of your game or project.",
      },
      {
        question:
          "Is Scintillar suitable for single-player or multiplayer games?",
        answer:
          "While primarily designed for single-player experiences, Scintillar's systems are flexible and can be adapted for multiplayer games with the right architecture and setup.",
      },
      {
        question:
          "Do I need prior experience with procedural generation to use Scintillar?",
        answer:
          "Not at all! Scintillar is designed to be developer-friendly, with plenty of documentation and examples to help you get started, whether you're new to procedural generation or an experienced developer.",
      },
      {
        question: "Can I use Scintillar for non-game projects?",
        answer:
          "Absolutely! While it's geared toward game development, Scintillar's procedural systems and web-based configuration can be applied to any project that benefits from complex simulations, including digital tools, apps, and interactive experiences.",
      },
      {
        question: "How do I get started with Scintillar?",
        answer:
          "Getting started is simple! Download the framework, check out the documentation, and begin experimenting with the built-in examples. Whether you're building a small project or a large-scale game, Scintillar is designed to scale with your needs.",
      },
    ],
  },
};

export const fr: I18n = {
  faq: {
    flavor: "Foire Aux",
    title: "Questions",
    items: [
      {
        question: "Qu'est-ce que Scintillar ?",
        answer:
          "Scintillar est un framework puissant conçu pour aider les développeurs à créer des mondes interactifs générés de manière procédurale avec des systèmes complexes tels que des mécaniques de piratage, des simulations urbaines et des manipulations de réseaux. Il est conçu pour améliorer les flux de travail de développement de jeux et fournir une configuration flexible basée sur le web.",
      },
      {
        question: "Quel moteur de jeu Scintillar prend-il en charge ?",
        answer:
          "Scintillar est entièrement intégré à Godot, offrant une expérience transparente aux développeurs travaillant dans ce moteur. L'accès à l'API et les outils prêts à l'emploi permettent une intégration rapide et efficace.",
      },
      {
        question:
          "Puis-je personnaliser les systèmes de génération procédurale ?",
        answer:
          "Oui ! Scintillar permet une personnalisation complète de ses systèmes procéduraux, de la génération de villes aux vulnérabilités et aux réseaux. Vous pouvez ajuster les paramètres pour répondre aux besoins spécifiques de votre jeu ou projet.",
      },
      {
        question: "Scintillar convient-il aux jeux solo ou multijoueurs ?",
        answer:
          "Bien qu'il soit principalement conçu pour des expériences solo, les systèmes de Scintillar sont flexibles et peuvent être adaptés aux jeux multijoueurs avec l'architecture et la configuration appropriées.",
      },
      {
        question:
          "Ai-je besoin d'une expérience préalable en génération procédurale pour utiliser Scintillar ?",
        answer:
          "Pas du tout ! Scintillar est conçu pour être convivial pour les développeurs, avec de nombreuses documentations et exemples pour vous aider à démarrer, que vous soyez novice en génération procédurale ou un développeur expérimenté.",
      },
      {
        question:
          "Puis-je utiliser Scintillar pour des projets non liés aux jeux ?",
        answer:
          "Absolument ! Bien qu'il soit orienté vers le développement de jeux, les systèmes procéduraux de Scintillar et sa configuration basée sur le web peuvent être appliqués à tout projet bénéficiant de simulations complexes, y compris des outils numériques, des applications et des expériences interactives.",
      },
      {
        question: "Comment puis-je commencer avec Scintillar ?",
        answer:
          "Commencer est simple ! Téléchargez le framework, consultez la documentation et commencez à expérimenter avec les exemples intégrés. Que vous construisiez un petit projet ou un jeu à grande échelle, Scintillar est conçu pour s'adapter à vos besoins.",
      },
    ],
  },
};
