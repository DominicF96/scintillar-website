export interface I18n {
  title: string;
  empty: string;
  markAllRead: string;
  loadMore: string;
  timeAgo: {
    now: string;
    minutes: string;
    hours: string;
    days: string;
  };
}

export const en: I18n = {
  title: "Notifications",
  empty: "No new notifications",
  markAllRead: "Mark all as read",
  loadMore: "Load more",
  timeAgo: {
    now: "Just now",
    minutes: "m ago",
    hours: "h ago", 
    days: "d ago",
  },
};

export const fr: I18n = {
  title: "Notifications",
  empty: "Aucune nouvelle notification",
  markAllRead: "Tout marquer comme lu",
  loadMore: "Charger plus",
  timeAgo: {
    now: "À l'instant",
    minutes: "min",
    hours: "h",
    days: "j",
  },
};