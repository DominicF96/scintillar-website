export interface I18n {
  title: string;
  introduction: string;
  terms: {
    title: string;
    description: string;
  };
  user_responsibilities: {
    title: string;
    description: string;
  };
  limitations_of_liability: {
    title: string;
    description: string;
  };
  governing_law: {
    title: string;
    description: string;
  };
  changes_to_terms: {
    title: string;
    description: string;
  };
  contact_us: {
    title: string;
    description: string;
  };
}

export const en: I18n = {
  title: "Terms and Conditions",
  introduction: "These Terms and Conditions govern your use of our website.",
  terms: {
    title: "Terms",
    description:
      "By accessing our website, you agree to be bound by these terms and conditions.",
  },
  user_responsibilities: {
    title: "User Responsibilities",
    description:
      "You agree to use our website in compliance with all applicable laws and regulations.",
  },
  limitations_of_liability: {
    title: "Limitations of Liability",
    description:
      "We are not liable for any damages that may arise from your use of our website.",
  },
  governing_law: {
    title: "Governing Law",
    description:
      "These terms and conditions are governed by the laws of the jurisdiction in which we operate.",
  },
  changes_to_terms: {
    title: "Changes to Terms",
    description:
      "We may update these terms and conditions from time to time. Please review them periodically.",
  },
  contact_us: {
    title: "Contact Us",
    description:
      "If you have any questions about these terms and conditions, please contact us at legal@scintillar.com.",
  },
};

export const fr: I18n = {
  title: "Conditions Générales",
  introduction:
    "Ces conditions générales régissent votre utilisation de notre site web.",
  terms: {
    title: "Conditions",
    description:
      "En accédant à notre site web, vous acceptez d'être lié par ces conditions générales.",
  },
  user_responsibilities: {
    title: "Responsabilités de l'Utilisateur",
    description:
      "Vous acceptez d'utiliser notre site web conformément à toutes les lois et réglementations applicables.",
  },
  limitations_of_liability: {
    title: "Limitations de Responsabilité",
    description:
      "Nous ne sommes pas responsables des dommages pouvant résulter de votre utilisation de notre site web.",
  },
  governing_law: {
    title: "Droit Applicable",
    description:
      "Ces conditions générales sont régies par les lois de la juridiction dans laquelle nous opérons.",
  },
  changes_to_terms: {
    title: "Modifications des Conditions",
    description:
      "Nous pouvons mettre à jour ces conditions générales de temps à autre. Veuillez les consulter périodiquement.",
  },
  contact_us: {
    title: "Contactez-nous",
    description:
      "Si vous avez des questions concernant ces conditions générales, veuillez nous contacter à legal@scintillar.com.",
  },
};
