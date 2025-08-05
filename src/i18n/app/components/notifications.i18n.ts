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
  plural: {
    notification: {
      one: string;
      other: string;
    };
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
  plural: {
    notification: {
      one: "{count} unread notification",
      other: "{count} unread notifications",
    },
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
  plural: {
    notification: {
      one: "{count} notification non lue",
      other: "{count} notifications non lues",
    },
  },
};