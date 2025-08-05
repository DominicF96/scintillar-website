export interface I18n {
  title: string;
  description: string;
  sections: {
    appearance: {
      title: string;
      description: string;
    };
    notifications: {
      title: string;
      description: string;
    };
    privacy: {
      title: string;
      description: string;
    };
  };
}

export const en: I18n = {
  title: "User Preferences",
  description: "Control your experience on the platform.",
  sections: {
    appearance: {
      title: "Appearance",
      description: "Customize the look and feel of your interface",
    },
    notifications: {
      title: "Notifications",
      description: "Control how and when you receive notifications",
    },
    privacy: {
      title: "Privacy & Security",
      description: "Manage your privacy settings and data security",
    },
  },
};

export const fr: I18n = {
  title: "Préférences de l'utilisateur",
  description: "Contrôlez votre expérience sur la plateforme.",
  sections: {
    appearance: {
      title: "Apparence",
      description: "Personnalisez l'apparence de votre interface",
    },
    notifications: {
      title: "Notifications",
      description: "Contrôlez comment et quand vous recevez des notifications",
    },
    privacy: {
      title: "Confidentialité et Sécurité",
      description: "Gérez vos paramètres de confidentialité et la sécurité des données",
    },
  },
};