export interface I18n {
  title: string;
  description: string;
  redirecting: string;
  returnToApp: string;
  youCanAlsoTry: string;
  suggestions: {
    checkUrl: string;
    goBack: string;
    useNavigation: string;
  };
}

export const en: I18n = {
  title: "404 - Page Not Found",
  description: "The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.",
  redirecting: "Redirecting to app in {countdown} second{plural}...",
  returnToApp: "Return to App Now",
  youCanAlsoTry: "You can also try:",
  suggestions: {
    checkUrl: "Checking the URL for typos",
    goBack: "Going back to the previous page",
    useNavigation: "Using the navigation menu",
  },
};

export const fr: I18n = {
  title: "404 - Page non trouvée",
  description: "La page que vous recherchez n'existe pas. Elle pourrait avoir été déplacée, supprimée, ou vous avez saisi une mauvaise URL.",
  redirecting: "Redirection vers l'app dans {countdown} seconde{plural}...",
  returnToApp: "Retourner à l'App maintenant",
  youCanAlsoTry: "Vous pouvez également essayer :",
  suggestions: {
    checkUrl: "Vérifier l'URL pour des erreurs de frappe",
    goBack: "Revenir à la page précédente",
    useNavigation: "Utiliser le menu de navigation",
  },
};