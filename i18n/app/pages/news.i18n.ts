export interface I18n {
  title: string;
  description: string;
  articles: {
    systemUpdate: {
      title: string;
      description: string;
      timeAgo: string;
    };
    maintenance: {
      title: string;
      description: string;
      timeAgo: string;
    };
    featureRelease: {
      title: string;
      description: string;
      timeAgo: string;
    };
  };
}

export const en: I18n = {
  title: "News & Updates",
  description: "Stay informed with the latest news, updates, and announcements.",
  articles: {
    systemUpdate: {
      title: "System Update Available",
      description: "New features and improvements are ready to be installed.",
      timeAgo: "2 hours ago",
    },
    maintenance: {
      title: "Maintenance Scheduled",
      description: "Routine maintenance will be performed this weekend.",
      timeAgo: "1 day ago",
    },
    featureRelease: {
      title: "Feature Release",
      description: "New dashboard widgets and customization options are now available.",
      timeAgo: "3 days ago",
    },
  },
};

export const fr: I18n = {
  title: "Actualités et Mises à Jour",
  description: "Restez informé des dernières actualités, mises à jour et annonces.",
  articles: {
    systemUpdate: {
      title: "Mise à Jour Système Disponible",
      description: "De nouvelles fonctionnalités et améliorations sont prêtes à être installées.",
      timeAgo: "il y a 2 heures",
    },
    maintenance: {
      title: "Maintenance Programmée",
      description: "Une maintenance de routine sera effectuée ce week-end.",
      timeAgo: "il y a 1 jour",
    },
    featureRelease: {
      title: "Sortie de Fonctionnalité",
      description: "De nouveaux widgets de tableau de bord et options de personnalisation sont maintenant disponibles.",
      timeAgo: "il y a 3 jours",
    },
  },
};