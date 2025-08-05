export interface I18n {
  title: string;
  description: string;
  buttons: {
    refresh: string;
    upload: string;
    newFolder: string;
    upFolder: string;
  };
  navigation: {
    home: string;
  };
  toolbar: {
    search: string;
    filters: string;
    sort: string;
    actions: string;
  };
  sorting: {
    name: string;
    modified: string;
    size: string;
    type: string;
    ascending: string;
    descending: string;
  };
  filters: {
    showSharedOnly: string;
    showStarredOnly: string;
    documents: string;
    images: string;
    videos: string;
  };
  actions: {
    download: string;
    share: string;
    delete: string;
  };
  status: {
    selected: string;
    noItems: string;
    noItemsSearch: string;
    noItemsEmpty: string;
  };
  grid: {
    nameColumn: string;
    ownerColumn: string;
    modifiedColumn: string;
    sizeColumn: string;
  };
}

export const en: I18n = {
  title: "Resources",
  description: "Manage your files and folders",
  buttons: {
    refresh: "Refresh",
    upload: "Upload",
    newFolder: "New Folder",
    upFolder: "Up a folder",
  },
  navigation: {
    home: "Home",
  },
  toolbar: {
    search: "Search files and folders...",
    filters: "Filters",
    sort: "Sort",
    actions: "Actions",
  },
  sorting: {
    name: "Name",
    modified: "Modified",
    size: "Size",
    type: "Type",
    ascending: "Ascending",
    descending: "Descending",
  },
  filters: {
    showSharedOnly: "Show shared only",
    showStarredOnly: "Show starred only",
    documents: "Documents",
    images: "Images",
    videos: "Videos",
  },
  actions: {
    download: "Download",
    share: "Share",
    delete: "Delete",
  },
  status: {
    selected: "selected",
    noItems: "No items found",
    noItemsSearch: "Try adjusting your search terms",
    noItemsEmpty: "Upload files or create folders to get started",
  },
  grid: {
    nameColumn: "Name",
    ownerColumn: "Owner",
    modifiedColumn: "Modified",
    sizeColumn: "Size",
  },
};

export const fr: I18n = {
  title: "Ressources",
  description: "Gérez vos fichiers et dossiers",
  buttons: {
    refresh: "Actualiser",
    upload: "Télécharger",
    newFolder: "Nouveau dossier",
    upFolder: "Dossier parent",
  },
  navigation: {
    home: "Accueil",
  },
  toolbar: {
    search: "Rechercher des fichiers et dossiers...",
    filters: "Filtres",
    sort: "Trier",
    actions: "Actions",
  },
  sorting: {
    name: "Nom",
    modified: "Modifié",
    size: "Taille",
    type: "Type",
    ascending: "Croissant",
    descending: "Décroissant",
  },
  filters: {
    showSharedOnly: "Afficher seulement les partagés",
    showStarredOnly: "Afficher seulement les favoris",
    documents: "Documents",
    images: "Images",
    videos: "Vidéos",
  },
  actions: {
    download: "Télécharger",
    share: "Partager",
    delete: "Supprimer",
  },
  status: {
    selected: "sélectionné(s)",
    noItems: "Aucun élément trouvé",
    noItemsSearch: "Essayez d'ajuster vos termes de recherche",
    noItemsEmpty: "Téléchargez des fichiers ou créez des dossiers pour commencer",
  },
  grid: {
    nameColumn: "Nom",
    ownerColumn: "Propriétaire",
    modifiedColumn: "Modifié",
    sizeColumn: "Taille",
  },
};