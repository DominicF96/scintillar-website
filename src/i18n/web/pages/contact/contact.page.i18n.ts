export interface I18n {
  title: string;
  subtitle: string;
  firstname: {
    label: string;
    placeholder: string;
  };
  lastname: {
    label: string;
    placeholder: string;
  };
  email: {
    label: string;
    placeholder: string;
  };
  company: {
    label: string;
    placeholder: string;
  };
  reason_select: {
    label: string;
    options: {
      general: string;
      support: string;
      partnership: string;
      other: string;
    };
    placeholder: string;
  };
  message: {
    label: string;
    placeholder: string;
  };
  newsletter: {
    label: string;
    tips: {
      success: string;
      error: string;
    };
  };
  errors: {
    min_2_chars: string;
    min_5_chars: string;
    max_50_chars: string;
    max_500_chars: string;
    email_valid: string;
    only_letters: string;
    submit: string;
  };
  notice: string;
  submit: string;
  submit_successful: string;
}

export const en: I18n = {
  title: "Contact Us",
  subtitle: "We're all ears! Let us know how we can help.",
  firstname: {
    label: "First Name",
    placeholder: "John",
  },
  lastname: {
    label: "Last Name",
    placeholder: "Smith",
  },
  email: {
    label: "Email Address",
    placeholder: "john.smith@acme.inc",
  },
  company: {
    label: "Company",
    placeholder: "ACME.inc",
  },
  reason_select: {
    label: "What can we help you with?",
    options: {
      general: "General Inquiry",
      support: "Support Inquiry",
      partnership: "Partnership Inquiry",
      other: "Other",
    },
    placeholder: "Select...",
  },
  message: {
    label: "Anything else?",
    placeholder: "Hey, I love your style!",
  },
  newsletter: {
    label: "Subscribe to our newsletter",
    tips: {
      success: "You are now subscribed to our newsletter!",
      error:
        "An error occurred while subscribing to the newsletter. Please try again later.",
    },
  },
  errors: {
    min_2_chars: "Must be at least 2 characters",
    min_5_chars: "Must be at least 5 characters",
    max_50_chars: "Must be at most 50 characters",
    max_500_chars: "Must be at most 500 characters",
    email_valid: "Must be a valid email",
    only_letters: "Must contain only letters",
    submit:
      "An error occurred while submitting the form. Please try again later.",
  },
  notice:
    "By submitting this form, I agree to Scintillar's <a href='/legal/privacy' target='_blank'>Privacy Policy</a> and to be contacted using the information provided.",
  submit: "Submit",
  submit_successful:
    "Thank you for reaching out! We will get back to you shortly.",
};

export const fr: I18n = {
  title: "Contactez-nous",
  subtitle:
    "Nous sommes tout ouïe! Dites-nous comment nous pouvons vous aider.",
  firstname: {
    label: "Prénom",
    placeholder: "Jean",
  },
  lastname: {
    label: "Nom de famille",
    placeholder: "Smith",
  },
  email: {
    label: "Adresse courriel",
    placeholder: "jean.smith@acme.inc",
  },
  company: {
    label: "Compagnie",
    placeholder: "ACME.inc",
  },
  reason_select: {
    label: "Comment pouvons-nous vous aider?",
    options: {
      general: "Demande générale",
      support: "Demande de support",
      partnership: "Demande de partenariat",
      other: "Autre",
    },
    placeholder: "Sélectionnez...",
  },
  message: {
    label: "Autre chose à ajouter?",
    placeholder: "Bonjour, j'adore votre style!",
  },
  newsletter: {
    label: "Inscrivez-vous à notre infolettre",
    tips: {
      success: "Vous êtes maintenant inscrit à notre infolettre!",
      error:
        "Une erreur s'est produite lors de l'inscription à l'infolettre. Veuillez réessayer plus tard.",
    },
  },
  errors: {
    min_2_chars: "Doit contenir au moins 2 caractères",
    min_5_chars: "Doit contenir au moins 5 caractères",
    max_50_chars: "Doit contenir au plus 50 caractères",
    max_500_chars: "Doit contenir au plus 500 caractères",
    email_valid: "Doit être une adresse courriel valide",
    only_letters: "Doit contenir uniquement des lettres",
    submit:
      "Une erreur s'est produite lors de la soumission du formulaire. Veuillez réessayer plus tard.",
  },
  notice:
    "En soumettant ce formulaire, j'accepte la <a href='/legal/privacy' target='_blank'>Politique de confidentialité</a> de Scintillar et d'être contacté en utilisant les informations fournies.",
  submit: "Soumettre",
  submit_successful:
    "Merci de nous avoir contacté! Nous vous répondrons sous peu.",
};
