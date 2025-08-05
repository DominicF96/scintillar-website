import { Activity, Bell, BookOpen, Bot, Building, Building2, Calendar, CheckSquare, ClipboardList, Command, Database, FileTerminal, FileText, FolderOpen, Handshake, House, Icon, Mail, MessageSquare, Play, Settings, Users, Webhook, Wrench } from "lucide-react";

export interface NavigationItem {
  id: string;
  label: string; // This will be the i18n key
  href?: string;
  icon?: typeof Icon;
  hasPage?: boolean; // Whether this route has a page (defaults to true if href exists)
  children?: NavigationItem[];
  separator?: boolean; // Add separator after this item
}

export interface PrimaryNavigationSection {
  id: string;
  label: string;
  icon: typeof Icon;
  href?: string;
  hasPage?: boolean; // Whether this route has a page (defaults to true if href exists)
  children: NavigationItem[];
}

export const navigationStructure: PrimaryNavigationSection[] = [
  {
    id: "home",
    label: "Home",
    icon: House,
    children: [
      {
        id: "activity",
        label: "activity",
        icon: Activity,
        hasPage: false,
        children: [
          {
            id: "notifications",
            label: "notificationsCenter",
            href: "/app/activity/notifications",
            icon: Bell,
          },
        ],
      },
      {
        id: "organization",
        label: "organization",
        icon: Building2,
        hasPage: false,
        children: [
          {
            id: "calendar",
            label: "calendar",
            href: "/app/organization/calendar",
            icon: Calendar,
          },
          {
            id: "email",
            label: "email",
            href: "/app/organization/email",
            icon: Mail,
          },
          {
            id: "todos",
            label: "todos",
            href: "/app/organization/todos",
            icon: CheckSquare,
          },
        ],
      },
      {
        id: "system",
        label: "system",
        icon: Settings,
        hasPage: false,
        children: [
          {
            id: "status",
            label: "status",
            href: "/app/system/status",
            icon: Activity,
          },
        ],
      },
    ],
  },
  {
    id: "simulations",
    label: "Simulations",
    icon: Play,
    children: [
      {
        id: "crud",
        label: "crud",
        href: "/app/simulations/crud",
        icon: Database,
      },
      {
        id: "chat",
        label: "chat",
        href: "/app/simulations/chat",
        icon: MessageSquare,
      },
      {
        id: "notifications",
        label: "notifications",
        href: "/app/simulations/notifications",
        icon: Bell,
      },
      {
        id: "webhooks",
        label: "webhooks",
        href: "/app/simulations/webhooks",
        icon: Webhook,
      },
      {
        id: "command-palette",
        label: "commandPalette",
        href: "/app/simulations/command-palette",
        icon: Command,
      },
      {
        id: "ai-agent",
        label: "aiAgent",
        href: "/app/simulations/ai-agent",
        icon: Bot,
      },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    icon: Wrench,
    href: "/app/tools",
    children: [
      // Tools section is empty in the nav.mdx file
      // Can be populated with tool-specific navigation items
    ],
  },
  {
    id: "resources",
    label: "Resources",
    icon: FolderOpen,
    children: [
      {
        id: "home",
        label: "home",
        href: "/app/resources/home",
        icon: House,
        separator: true, // Add separator after Home
      },
      {
        id: "projects",
        label: "projects",
        icon: FolderOpen,
        hasPage: false,
        children: [
          {
            id: "web-development",
            label: "webDevelopment",
            href: "/app/resources/projects/web-development",
            icon: FileTerminal,
          },
          {
            id: "mobile-apps",
            label: "mobileApps",
            href: "/app/resources/projects/mobile-apps",
            icon: FileTerminal,
          },
          {
            id: "data-science",
            label: "dataScience",
            href: "/app/resources/projects/data-science",
            icon: FileTerminal,
          },
        ],
      },
      {
        id: "documents",
        label: "documents",
        icon: FileText,
        hasPage: false,
        children: [
          {
            id: "presentations",
            label: "presentations",
            href: "/app/resources/documents/presentations",
            icon: FileText,
          },
          {
            id: "reports",
            label: "reports",
            href: "/app/resources/documents/reports",
            icon: FileText,
          },
          {
            id: "contracts",
            label: "contracts",
            href: "/app/resources/documents/contracts",
            icon: FileText,
          },
        ],
      },
      {
        id: "media",
        label: "media",
        icon: FolderOpen,
        hasPage: false,
        children: [
          {
            id: "images",
            label: "images",
            href: "/app/resources/media/images",
            icon: FileText,
          },
          {
            id: "videos",
            label: "videos",
            href: "/app/resources/media/videos",
            icon: FileText,
          },
          {
            id: "audio",
            label: "audio",
            href: "/app/resources/media/audio",
            icon: FileText,
          },
        ],
      },
    ],
  },
  {
    id: "data",
    label: "Data",
    icon: Database,
    children: [
      {
        id: "contacts",
        label: "contacts",
        href: "/app/data/contacts",
        icon: Users,
      },
      {
        id: "companies",
        label: "companies",
        href: "/app/data/companies",
        icon: Building,
      },
      {
        id: "deals",
        label: "deals",
        href: "/app/data/deals",
        icon: Handshake,
      },
      {
        id: "tasks",
        label: "tasks",
        href: "/app/data/tasks",
        icon: ClipboardList,
      },
      {
        id: "notes",
        label: "notes",
        href: "/app/data/notes",
        icon: FileText,
      },
    ],
  },
  {
    id: "docs",
    label: "Docs",
    icon: BookOpen,
    href: "/app/docs",
    children: [
      {
        id: "getting-started",
        label: "gettingStarted",
        href: "/app/docs/getting-started",
        icon: BookOpen,
      },
      // Additional docs will be dynamically loaded from the docs system
    ],
  },
];

// Helper function to find a section by ID
export function findNavigationSection(id: string): PrimaryNavigationSection | undefined {
  return navigationStructure.find(section => section.id === id);
}

// Helper function to find a navigation item by path
export function findNavigationItemByPath(path: string): {
  section: PrimaryNavigationSection;
  item?: NavigationItem;
} | undefined {
  for (const section of navigationStructure) {
    if (section.href === path) {
      return { section };
    }
    
    const findInChildren = (items: NavigationItem[]): NavigationItem | undefined => {
      for (const item of items) {
        if (item.href === path) {
          return item;
        }
        if (item.children) {
          const found = findInChildren(item.children);
          if (found) return found;
        }
      }
      return undefined;
    };
    
    const item = findInChildren(section.children);
    if (item) {
      return { section, item };
    }
  }
  
  return undefined;
}

// Helper function to find the first navigable item in a section
export function getFirstNavigableItem(section: PrimaryNavigationSection): string | undefined {
  const findFirstHref = (items: NavigationItem[]): string | undefined => {
    for (const item of items) {
      if (item.href) {
        return item.href;
      }
      if (item.children) {
        const found = findFirstHref(item.children);
        if (found) return found;
      }
    }
    return undefined;
  };
  
  return findFirstHref(section.children);
}

// Helper function to get the primary navigation href (first sub-item or fallback to section href)
export function getPrimaryNavigationHref(section: PrimaryNavigationSection): string {
  const firstSubItem = getFirstNavigableItem(section);
  return firstSubItem || section.href || "/app";
}

/**
 * Enhanced function to get first navigable item including dynamic content
 * This function considers both static navigation items and dynamically loaded content
 * (like docs pages or resource folders) to find the first available page in a section.
 * 
 * @param section - The primary navigation section
 * @param locale - The current locale for dynamic content loading
 * @returns The href of the first navigable page, or fallback to section href or "/app"
 */
export function getFirstNavigableItemEnhanced(
  section: PrimaryNavigationSection, 
  locale: string = 'en'
): string | undefined {
  // Import the getSectionNavigationItems function to avoid circular dependency
  let getSectionNavigationItems: any;
  try {
    const navigationLoader = require("../services/navigation-loader");
    getSectionNavigationItems = navigationLoader.getSectionNavigationItems;
  } catch (error) {
    // Fallback to static navigation only
    return getFirstNavigableItem(section);
  }

  // First try static navigation
  const staticFirst = getFirstNavigableItem(section);
  
  // If we have static items and they have pages, use them
  if (staticFirst) {
    return staticFirst;
  }
  
  // Check if this section has dynamic navigation
  const dynamicItems = getSectionNavigationItems ? getSectionNavigationItems(section.id, locale) : [];
  
  if (dynamicItems.length > 0) {
    // Find first navigable item in dynamic content
    const findFirstHrefInDynamic = (items: any[]): string | undefined => {
      for (const item of items) {
        if (item.href) {
          return item.href;
        }
        if (item.children) {
          const found = findFirstHrefInDynamic(item.children);
          if (found) return found;
        }
      }
      return undefined;
    };
    
    const dynamicFirst = findFirstHrefInDynamic(dynamicItems);
    if (dynamicFirst) {
      return dynamicFirst;
    }
  }
  
  // Fallback to section href or default
  return section.href || "/app";
}

// Helper function to get breadcrumbs for a path
export function getBreadcrumbs(path: string): Array<{ label: string; href?: string }> {
  const result = findNavigationItemByPath(path);
  if (!result) return [];
  
  const breadcrumbs: Array<{ label: string; href?: string }> = [
    { label: result.section.label, href: result.section.href },
  ];
  
  if (result.item) {
    // Find the path to the item within the section
    const findPath = (items: NavigationItem[], target: NavigationItem, currentPath: NavigationItem[] = []): NavigationItem[] | null => {
      for (const item of items) {
        const newPath = [...currentPath, item];
        if (item === target) {
          return newPath;
        }
        if (item.children) {
          const found = findPath(item.children, target, newPath);
          if (found) return found;
        }
      }
      return null;
    };
    
    const itemPath = findPath(result.section.children, result.item);
    if (itemPath) {
      itemPath.forEach(item => {
        breadcrumbs.push({ label: item.label, href: item.href });
      });
    }
  }
  
  return breadcrumbs;
}

// Utility function to flatten navigation structure for breadcrumb lookup
export function flattenNavigation(): Record<string, NavigationItem & { section?: PrimaryNavigationSection }> {
  const flattened: Record<string, NavigationItem & { section?: PrimaryNavigationSection }> = {};
  
  function traverse(items: NavigationItem[], section: PrimaryNavigationSection, parentPath: string = "") {
    items.forEach(item => {
      const currentPath = parentPath ? `${parentPath}/${item.id}` : item.id;
      flattened[item.id] = { ...item, section };
      
      if (item.children) {
        traverse(item.children, section, currentPath);
      }
    });
  }
  
  navigationStructure.forEach(section => {
    flattened[section.id] = section;
    traverse(section.children, section);
  });
  
  return flattened;
}

// Route name mappings for display
export const routeDisplayNames: Record<string, string> = {
  "home": "Home",
  "activity": "Activity",
  "notifications": "Notifications",
  "notificationsCenter": "Notifications Center",
  "organization": "Organization",
  "calendar": "Calendar",
  "email": "Email",
  "todos": "Todos",
  "system": "System",
  "status": "Status",
  "simulations": "Simulations",
  "crud": "CRUD",
  "chat": "Chat",
  "webhooks": "Webhooks",
  "commandPalette": "Command Palette",
  "aiAgent": "AI Agent",
  "tools": "Tools",
  "resources": "Resources",
  "data": "Data",
  "contacts": "Contacts",
  "companies": "Companies",
  "deals": "Deals",
  "tasks": "Tasks",
  "notes": "Notes",
  "docs": "Documentation",
  "gettingStarted": "Getting Started",
  "maps": "Maps",
  "city": "City",
  "interior": "Interior",
  "layers": "Layers",
  "digital": "Digital",
  "electric": "Electric",
  "social": "Social",
  "finance": "Finance",
  "market": "Market",
  "settings": "Settings",
  "preferences": "Preferences",
  "digitallayer": "Digital",
  "electricallayer": "Electric",
  "sociallayer": "Social",
  "financelayer": "Finance"
}