export interface I18n {
  title: string;
  description: string;
  sections: {
    general: {
      title: string;
      description: string;
    };
  };
}

export const en: I18n = {
  title: "Settings",
  description: "Manage your application preferences and configuration.",
  sections: {
    general: {
      title: "General",
      description: "Basic application settings and preferences",
    },
  },
};

export const fr: I18n = {
  title: "Paramètres",
  description: "Gérez vos préférences et la configuration de l'application.",
  sections: {
    general: {
      title: "Général",
      description: "Paramètres de base et préférences de l'application",
    },
  },
};