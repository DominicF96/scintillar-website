export interface I18n {
  title: string;
  description: string;
  sections: {
    designer: {
      title: string;
      description: string;
    };
    templates: {
      title: string;
      description: string;
    };
    visualization: {
      title: string;
      description: string;
    };
  };
}

export const en: I18n = {
  title: "Interior Layouts",
  description: "Design and manage interior floor plans and layouts for your spaces.",
  sections: {
    designer: {
      title: "Floor Plan Designer",
      description: "Create and modify floor plans with drag-and-drop tools.",
    },
    templates: {
      title: "Room Templates",
      description: "Choose from pre-designed room layouts and configurations.",
    },
    visualization: {
      title: "3D Visualization",
      description: "Preview your interior designs in 3D before implementation.",
    },
  },
};

export const fr: I18n = {
  title: "Aménagements Intérieurs",
  description: "Concevez et gérez les plans d'étage et les aménagements intérieurs de vos espaces.",
  sections: {
    designer: {
      title: "Concepteur de Plans d'Étage",
      description: "Créez et modifiez des plans d'étage avec des outils glisser-déposer.",
    },
    templates: {
      title: "Modèles de Pièces",
      description: "Choisissez parmi des aménagements de pièces et configurations pré-conçus.",
    },
    visualization: {
      title: "Visualisation 3D",
      description: "Prévisualisez vos conceptions intérieures en 3D avant la mise en œuvre.",
    },
  },
};