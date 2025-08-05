export interface I18n {
  defaultTitle: string;
  defaultDescription: string;
  redirecting: string;
  goHome: string;
  goHomeNow: string;
  goBack: string;
  refresh: string;
  errorCheckMessage: string;
  checks: {
    urlCorrect: string;
    pageExists: string;
    hasPermission: string;
  };
}

export const en: I18n = {
  defaultTitle: "Page Not Found",
  defaultDescription: "The page you're looking for doesn't exist or has been moved. This might be a placeholder page that hasn't been implemented yet.",
  redirecting: "Redirecting to home in {countdown} second{plural}...",
  goHome: "Go Home",
  goHomeNow: "Go Home Now",
  goBack: "Go Back",
  refresh: "Refresh",
  errorCheckMessage: "If you believe this is an error, please check:",
  checks: {
    urlCorrect: "The URL is correct",
    pageExists: "The page exists in the navigation",
    hasPermission: "You have permission to access this page",
  },
};

export const fr: I18n = {
  defaultTitle: "Page non trouvée",
  defaultDescription: "La page que vous recherchez n'existe pas ou a été déplacée. Il s'agit peut-être d'une page temporaire qui n'a pas encore été implémentée.",
  redirecting: "Redirection vers l'accueil dans {countdown} seconde{plural}...",
  goHome: "Aller à l'accueil",
  goHomeNow: "Aller à l'accueil maintenant",
  goBack: "Retour",
  refresh: "Actualiser",
  errorCheckMessage: "Si vous pensez qu'il s'agit d'une erreur, veuillez vérifier :",
  checks: {
    urlCorrect: "L'URL est correcte",
    pageExists: "La page existe dans la navigation",
    hasPermission: "Vous avez la permission d'accéder à cette page",
  },
};