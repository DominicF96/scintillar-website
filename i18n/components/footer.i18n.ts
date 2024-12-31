export interface I18n {
  newsletter: {
    title: string;
    description: string;
    placeholder: string;
    submit: string;
  };
  socials: {
    bluesky: string;
    discord: string;
    github: string;
    youtube: string;
  };
  categories: {
    company: {
      title: string;
      links: {
        about: string;
        blog: string;
        contact: string;
        events: string;
      };
    };
    explore: {
      title: string;
      links: {
        features: string;
        success_stories: string;
        modules_marketplace: string;
        pricing: string;
      };
    };
    legal: {
      title: string;
      links: {
        cookies: string;
        privacy: string;
        terms: string;
      };
    };
  };
  all_rights_reserved: string;
}

export const en: I18n = {
  newsletter: {
    title: "Newsletter",
    description:
      "Stay up-to-date with the latest development of Scintillar, subscribe to our newsletter!",
    placeholder: "john@acme.inc",
    submit: "Subscribe",
  },
  socials: {
    bluesky: "Bluesky",
    discord: "Discord",
    github: "GitHub",
    youtube: "YouTube",
  },
  categories: {
    company: {
      title: "Company",
      links: {
        about: "About",
        blog: "Blog",
        contact: "Contact us",
        events: "Events",
      },
    },
    explore: {
      title: "Explore",
      links: {
        features: "Features",
        success_stories: "Success Stories",
        modules_marketplace: "Modules Marketplace",
        pricing: "Pricing",
      },
    },
    legal: {
      title: "Legal",
      links: {
        cookies: "Cookies",
        privacy: "Privacy",
        terms: "Terms",
      },
    },
  },
  all_rights_reserved: "All rights reserved",
};

export const fr: I18n = {
  newsletter: {
    title: "Bulletin d'information",
    description:
      "Restez informé des derniers développements de Scintillar, abonnez-vous à notre newsletter !",
    placeholder: "john@acme.inc",
    submit: "S'abonner",
  },
  socials: {
    bluesky: "Bluesky",
    discord: "Discord",
    github: "GitHub",
    youtube: "YouTube",
  },
  categories: {
    company: {
      title: "Entreprise",
      links: {
        about: "À propos",
        blog: "Blog",
        contact: "Contactez-nous",
        events: "Événements",
      },
    },
    explore: {
      title: "Explorer",
      links: {
        features: "Fonctionnalités",
        success_stories: "Études de cas",
        modules_marketplace: "Marché des modules",
        pricing: "Tarification",
      },
    },
    legal: {
      title: "Légal",
      links: {
        cookies: "Cookies",
        privacy: "Confidentialité",
        terms: "Conditions",
      },
    },
  },
  all_rights_reserved: "Tous droits réservés",
};
