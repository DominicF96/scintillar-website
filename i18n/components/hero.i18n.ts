export interface I18n {
  title: string;
  description: string;
  actions: {
    primary: string;
    secondary: string;
  };
  coming_soon: string;
}

export const en: I18n = {
  title: "Sparkling SaaS Launches, Faster",
  description:
    "Powered by Next.js, TypeScript, and Tailwind CSS. Get your platform live and scale like never before.",
  actions: {
    primary: "Get Started Now",
    secondary: "Learn More",
  },
  coming_soon: "Coming soon",
};

export const fr: I18n = {
  title: "Lancements SaaS Étincelants, Rapidement",
  description:
    "Propulsé par Next.js, TypeScript et Tailwind CSS. Mettez votre plateforme en ligne et évoluez comme jamais auparavant.",
  actions: {
    primary: "Commencer",
    secondary: "En savoir plus",
  },
  coming_soon: "Bientôt disponible",
};
