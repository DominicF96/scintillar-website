export interface I18n {
    title: string;
    introduction: string;
    information_collection: {
        title: string;
        description: string;
    };
    use_of_information: {
        title: string;
        description: string;
    };
    information_sharing: {
        title: string;
        description: string;
    };
    data_security: {
        title: string;
        description: string;
    };
    your_rights: {
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
    title: "Privacy Policy",
    introduction: "This Privacy Policy explains how we collect, use, and share your personal information when you use our website.",
    information_collection: {
        title: "Information Collection",
        description: "We collect information that you provide to us directly, such as when you create an account, and information that we collect automatically, such as your IP address and browsing behavior."
    },
    use_of_information: {
        title: "Use of Information",
        description: "We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to protect our users."
    },
    information_sharing: {
        title: "Information Sharing",
        description: "We do not share your personal information with third parties except as described in this policy, such as with service providers who help us operate our website."
    },
    data_security: {
        title: "Data Security",
        description: "We implement security measures to protect your information from unauthorized access, alteration, disclosure, or destruction."
    },
    your_rights: {
        title: "Your Rights",
        description: "You have the right to access, update, and delete your personal information. You can also object to the processing of your information in certain circumstances."
    },
    changes_to_policy: {
        title: "Changes to this Policy",
        description: "We may update this Privacy Policy from time to time. We encourage you to review this policy periodically to stay informed about how we use your information."
    },
    contact_us: {
        title: "Contact Us",
        description: "If you have any questions about this Privacy Policy, please contact us at legal@scintillar.com."
    }
};

export const fr: I18n = {
    title: "Politique de Confidentialité",
    introduction: "Cette politique de confidentialité explique comment nous collectons, utilisons et partageons vos informations personnelles lorsque vous utilisez notre site web.",
    information_collection: {
        title: "Collecte d'Informations",
        description: "Nous collectons les informations que vous nous fournissez directement, comme lorsque vous créez un compte, et les informations que nous collectons automatiquement, comme votre adresse IP et votre comportement de navigation."
    },
    use_of_information: {
        title: "Utilisation des Informations",
        description: "Nous utilisons les informations que nous collectons pour fournir, maintenir et améliorer nos services, pour communiquer avec vous et pour protéger nos utilisateurs."
    },
    information_sharing: {
        title: "Partage des Informations",
        description: "Nous ne partageons pas vos informations personnelles avec des tiers sauf comme décrit dans cette politique, par exemple avec des prestataires de services qui nous aident à exploiter notre site web."
    },
    data_security: {
        title: "Sécurité des Données",
        description: "Nous mettons en œuvre des mesures de sécurité pour protéger vos informations contre tout accès, altération, divulgation ou destruction non autorisés."
    },
    your_rights: {
        title: "Vos Droits",
        description: "Vous avez le droit d'accéder, de mettre à jour et de supprimer vos informations personnelles. Vous pouvez également vous opposer au traitement de vos informations dans certaines circonstances."
    },
    changes_to_policy: {
        title: "Modifications de cette Politique",
        description: "Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous vous encourageons à consulter cette politique périodiquement pour rester informé de la manière dont nous utilisons vos informations."
    },
    contact_us: {
        title: "Contactez-nous",
        description: "Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à legal@scintillar.com."
    }
};