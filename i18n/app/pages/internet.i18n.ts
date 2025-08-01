export interface I18n {
  title: string;
  description: string;
  sections: {
    network: {
      title: string;
      description: string;
    };
    providers: {
      title: string;
      description: string;
    };
    services: {
      title: string;
      description: string;
    };
  };
}

export const en: I18n = {
  title: "Internet Services",
  description: "Manage internet connectivity, network settings, and digital services.",
  sections: {
    network: {
      title: "Network Status",
      description: "Monitor connection speed, uptime, and network health.",
    },
    providers: {
      title: "Service Providers",
      description: "Compare and manage internet service provider options.",
    },
    services: {
      title: "Digital Services",
      description: "Access and configure online services and applications.",
    },
  },
};

export const fr: I18n = {
  title: "Services Internet",
  description: "Gérez la connectivité internet, les paramètres réseau et les services numériques.",
  sections: {
    network: {
      title: "État du Réseau",
      description: "Surveillez la vitesse de connexion, la disponibilité et la santé du réseau.",
    },
    providers: {
      title: "Fournisseurs de Services",
      description: "Comparez et gérez les options de fournisseurs de services internet.",
    },
    services: {
      title: "Services Numériques",
      description: "Accédez et configurez les services et applications en ligne.",
    },
  },
};