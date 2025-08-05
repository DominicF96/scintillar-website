export interface I18n {
  title: string;
  introduction: string;
  what_are_cookies: {
    title: string;
    description: string;
  };
  how_we_use_cookies: {
    title: string;
    description: string;
  };
  types_of_cookies: {
    title: string;
    essential: {
      title: string;
      description: string;
    };
    performance: {
      title: string;
      description: string;
    };
    functionality: {
      title: string;
      description: string;
    };
    targeting: {
      title: string;
      description: string;
    };
  };
  managing_cookies: {
    title: string;
    description: string;
  };
  changes_to_policy: {
    title: string;
    description: string;
  };
  contact_us: {
    title: string;
    description: string;
  };
}

export const en: I18n = {
  title: "Cookie Policy",
  introduction:
    "This Cookie Policy explains how our website uses cookies and similar technologies to provide, improve, protect, and promote our services.",
  what_are_cookies: {
    title: "What are cookies?",
    description:
      "Cookies are small text files that are stored on your device when you visit a website. They help the website to remember your preferences and improve your user experience.",
  },
  how_we_use_cookies: {
    title: "How we use cookies",
    description:
      "We use cookies to understand how you interact with our website, to personalize your experience, and to improve our services. We may also use cookies for analytics and advertising purposes.",
  },
  types_of_cookies: {
    title: "Types of cookies we use",
    essential: {
      title: "Essential cookies",
      description:
        "These cookies are necessary for the website to function properly and cannot be switched off in our systems.",
    },
    performance: {
      title: "Performance cookies",
      description:
        "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
    },
    functionality: {
      title: "Functionality cookies",
      description:
        "These cookies allow the website to remember choices you make and provide enhanced, more personal features.",
    },
    targeting: {
      title: "Targeting cookies",
      description:
        "These cookies are used to deliver advertisements that are more relevant to you and your interests.",
    },
  },
  managing_cookies: {
    title: "Managing cookies",
    description:
      "You can control and manage cookies through your browser settings. Please note that disabling cookies may affect the functionality of our website.",
  },
  changes_to_policy: {
    title: "Changes to this policy",
    description:
      "We may update this Cookie Policy from time to time. We encourage you to review this policy periodically to stay informed about how we use cookies.",
  },
  contact_us: {
    title: "Contact us",
    description:
      "If you have any questions about our use of cookies, please contact us at legal@scintillar.com.",
  },
};

export const fr: I18n = {
  title: "Politique de Cookies",
  introduction:
    "Cette politique de cookies explique comment notre site web utilise des cookies et des technologies similaires pour fournir, améliorer, protéger et promouvoir nos services.",
  what_are_cookies: {
    title: "Que sont les cookies?",
    description:
      "Les cookies sont de petits fichiers texte qui sont stockés sur votre appareil lorsque vous visitez un site web. Ils aident le site web à se souvenir de vos préférences et à améliorer votre expérience utilisateur.",
  },
  how_we_use_cookies: {
    title: "Comment nous utilisons les cookies",
    description:
      "Nous utilisons des cookies pour comprendre comment vous interagissez avec notre site web, personnaliser votre expérience et améliorer nos services. Nous pouvons également utiliser des cookies à des fins d'analyse et de publicité.",
  },
  types_of_cookies: {
    title: "Types de cookies que nous utilisons",
    essential: {
      title: "Cookies essentiels",
      description:
        "Ces cookies sont nécessaires au bon fonctionnement du site web et ne peuvent pas être désactivés dans nos systèmes.",
    },
    performance: {
      title: "Cookies de performance",
      description:
        "Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site web en collectant et en rapportant des informations de manière anonyme.",
    },
    functionality: {
      title: "Cookies de fonctionnalité",
      description:
        "Ces cookies permettent au site web de se souvenir des choix que vous faites et de fournir des fonctionnalités améliorées et plus personnelles.",
    },
    targeting: {
      title: "Cookies de ciblage",
      description:
        "Ces cookies sont utilisés pour diffuser des publicités qui sont plus pertinentes pour vous et vos intérêts.",
    },
  },
  managing_cookies: {
    title: "Gestion des cookies",
    description:
      "Vous pouvez contrôler et gérer les cookies via les paramètres de votre navigateur. Veuillez noter que la désactivation des cookies peut affecter le fonctionnement de notre site web.",
  },
  changes_to_policy: {
    title: "Modifications de cette politique",
    description:
      "Nous pouvons mettre à jour cette politique de cookies de temps à autre. Nous vous encourageons à consulter cette politique périodiquement pour rester informé de la manière dont nous utilisons les cookies.",
  },
  contact_us: {
    title: "Contactez-nous",
    description:
      "Si vous avez des questions sur notre utilisation des cookies, veuillez nous contacter à legal@scintillar.com.",
  },
};
