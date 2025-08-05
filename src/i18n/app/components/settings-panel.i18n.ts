export interface I18n {
  title: string;
  sections: {
    general: {
      title: string;
      autoSave: {
        title: string;
        description: string;
      };
      notifications: {
        title: string;
        description: string;
      };
    };
    display: {
      title: string;
      gridSize: {
        title: string;
        description: string;
      };
      zoomLevel: {
        title: string;
        description: string;
      };
    };
    tools: {
      title: string;
      brushSize: {
        title: string;
        description: string;
      };
      snapToGrid: {
        title: string;
        description: string;
      };
    };
  };
  actions: {
    reset: string;
    apply: string;
  };
}

export const en: I18n = {
  title: "Settings",
  sections: {
    general: {
      title: "General",
      autoSave: {
        title: "Auto-save",
        description: "Automatically save changes",
      },
      notifications: {
        title: "Notifications",
        description: "Enable system notifications",
      },
    },
    display: {
      title: "Display",
      gridSize: {
        title: "Grid Size",
        description: "Adjust canvas grid size",
      },
      zoomLevel: {
        title: "Zoom Level",
        description: "Default zoom level",
      },
    },
    tools: {
      title: "Tools",
      brushSize: {
        title: "Brush Size",
        description: "Default brush size",
      },
      snapToGrid: {
        title: "Snap to Grid",
        description: "Enable grid snapping",
      },
    },
  },
  actions: {
    reset: "Reset",
    apply: "Apply",
  },
};

export const fr: I18n = {
  title: "Paramètres",
  sections: {
    general: {
      title: "Général",
      autoSave: {
        title: "Sauvegarde automatique",
        description: "Sauvegarder automatiquement les modifications",
      },
      notifications: {
        title: "Notifications",
        description: "Activer les notifications système",
      },
    },
    display: {
      title: "Affichage",
      gridSize: {
        title: "Taille de la grille",
        description: "Ajuster la taille de la grille du canevas",
      },
      zoomLevel: {
        title: "Niveau de zoom",
        description: "Niveau de zoom par défaut",
      },
    },
    tools: {
      title: "Outils",
      brushSize: {
        title: "Taille du pinceau",
        description: "Taille de pinceau par défaut",
      },
      snapToGrid: {
        title: "Aligner sur la grille",
        description: "Activer l'alignement sur la grille",
      },
    },
  },
  actions: {
    reset: "Réinitialiser",
    apply: "Appliquer",
  },
};