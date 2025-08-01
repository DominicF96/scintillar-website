export interface I18n {
  socials: {
    bluesky: string;
    discord: string;
    github: string;
    youtube: string;
  };
  links: {
    guides: string;
    help: string;
    contact: string;
  };
  status: {
    operational: string;
    degraded: string;
    outage: string;
  };
  version: string;
  all_rights_reserved: string;
}

export const en: I18n = {
  socials: {
    bluesky: "Bluesky",
    discord: "Discord",
    github: "GitHub",
    youtube: "YouTube",
  },
  links: {
    guides: "Guides",
    help: "Help",
    contact: "Contact",
  },
  status: {
    operational: "All systems operational",
    degraded: "Degraded performance",
    outage: "Service outage",
  },
  version: "Version",
  all_rights_reserved: "All rights reserved",
};

export const fr: I18n = {
  socials: {
    bluesky: "Bluesky",
    discord: "Discord",
    github: "GitHub",
    youtube: "YouTube",
  },
  links: {
    guides: "Guides",
    help: "Aide",
    contact: "Contact",
  },
  status: {
    operational: "Tous les systèmes opérationnels",
    degraded: "Performance dégradée",
    outage: "Panne de service",
  },
  version: "Version",
  all_rights_reserved: "Tous droits réservés",
};
