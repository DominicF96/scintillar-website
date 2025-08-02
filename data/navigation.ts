import { 
  Map, 
  LayoutPanelTop, 
  Zap, 
  ShoppingCart, 
  Play, 
  FolderOpen, 
  Database, 
  Wrench, 
  Network, 
  Layers, 
  Users, 
  DollarSign,
  LucideIcon 
} from "lucide-react";

export interface NavigationItem {
  key: string;
  href?: string;
  icon: LucideIcon;
  hasPage: boolean;
  children?: NavigationItem[];
}

export interface NavigationCategory {
  key: string;
  icon: LucideIcon;
  items: NavigationItem[];
}

export const navigationStructure: Record<string, NavigationCategory> = {
  simulations: {
    key: "simulations",
    icon: Play,
    items: [
      // Placeholder - will be populated with user simulations
    ],
  },
  proceduralmaps: {
    key: "proceduralmaps", 
    icon: Map,
    items: [
      {
        key: "maps",
        icon: Map,
        hasPage: false, // Category route with no page
        children: [
          {
            key: "city",
            href: "/app/maps/city",
            icon: Map,
            hasPage: true,
          },
          {
            key: "interior", 
            href: "/app/maps/interior",
            icon: LayoutPanelTop,
            hasPage: true,
          },
        ],
      },
    ],
  },
  layers: {
    key: "layers",
    icon: Layers,
    items: [
      {
        key: "layers",
        icon: Layers,
        hasPage: false, // Category route with no page
        children: [
          {
            key: "digitallayer",
            href: "/app/layers/digital",
            icon: Network,
            hasPage: true,
          },
          {
            key: "electricallayer",
            href: "/app/layers/electric", 
            icon: Zap,
            hasPage: true,
          },
          {
            key: "sociallayer",
            href: "/app/layers/social",
            icon: Users,
            hasPage: true,
          },
          {
            key: "financelayer",
            href: "/app/layers/finance",
            icon: DollarSign,
            hasPage: true,
          },
        ],
      },
    ],
  },
  tools: {
    key: "tools",
    icon: Wrench,
    items: [
      {
        key: "market",
        href: "/app/tools/market",
        icon: ShoppingCart,
        hasPage: true,
      },
    ],
  },
  assets: {
    key: "assets",
    icon: FolderOpen,
    items: [
      // Placeholder - will be populated with asset management tools
    ],
  },
  data: {
    key: "data",
    icon: Database,
    items: [
      // Placeholder - will be populated with CRUD tables
    ],
  },
};

// Utility function to flatten navigation structure for breadcrumb lookup
export function flattenNavigation(): Record<string, NavigationItem> {
  const flattened: Record<string, NavigationItem> = {};
  
  function traverse(items: NavigationItem[], parentPath: string = "") {
    items.forEach(item => {
      const currentPath = parentPath ? `${parentPath}/${item.key}` : item.key;
      flattened[item.key] = item;
      
      if (item.children) {
        flattened[item.key] = { ...item, href: undefined }; // Categories don't have direct hrefs
        traverse(item.children, currentPath);
      }
    });
  }
  
  Object.values(navigationStructure).forEach(category => {
    traverse(category.items);
  });
  
  return flattened;
}

// Route name mappings for display
export const routeDisplayNames: Record<string, string> = {
  "maps": "Maps",
  "city": "City",
  "interior": "Interior",
  "layers": "Layers", 
  "digital": "Digital",
  "electric": "Electric",
  "social": "Social",
  "finance": "Finance",
  "tools": "Tools",
  "market": "Market",
  "settings": "Settings",
  "preferences": "Preferences",
  "digitallayer": "Digital",
  "electricallayer": "Electric",
  "sociallayer": "Social",
  "financelayer": "Finance",
};