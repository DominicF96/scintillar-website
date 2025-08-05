import { NavigationItem, PrimaryNavigationSection } from "@/constants/navigation";
import { BookOpen, FileText, Folder, Home, ArrowUp } from "lucide-react";
import { Locale } from "@/lib/config/i18n-config";

// Map category to icon
const categoryIcons: Record<string, any> = {
  basics: BookOpen,
  features: FileText,
  configuration: FileText,
  default: FileText,
};

// Dynamic import function for locale-specific docs
async function getDocsIndex(locale: Locale) {
  try {
    const docsModule = await import(`@/content/${locale}/docs/index`);
    return docsModule.default;
  } catch (error) {
    // Fallback to English if locale not found
    const docsModule = await import(`@/content/en/docs/index`);
    return docsModule.default;
  }
}

// Load docs navigation items dynamically from the index
export function loadDocsNavigation(locale: Locale = 'en'): NavigationItem[] {
  // For now, we'll use a synchronous approach with require
  // In a real implementation, you might want to preload these at build time
  let docsIndex;
  try {
    docsIndex = require(`@/content/${locale}/docs/index`).default;
  } catch (error) {
    docsIndex = require(`@/content/en/docs/index`).default;
  }

  // Group docs by category
  const groupedDocs: Record<string, typeof docsIndex> = {};
  
  docsIndex.forEach((doc: any) => {
    const category = doc.category || "General";
    if (!groupedDocs[category]) {
      groupedDocs[category] = [];
    }
    groupedDocs[category].push(doc);
  });

  // Convert to navigation items
  const items: NavigationItem[] = [];
  
  Object.entries(groupedDocs).forEach(([category, docs]) => {
    // Add category as a parent item if there are multiple categories
    if (Object.keys(groupedDocs).length > 1) {
      items.push({
        id: category.toLowerCase(),
        label: category,
        icon: categoryIcons[category.toLowerCase()] || categoryIcons.default,
        children: docs.map((doc: any) => ({
          id: doc.id,
          label: doc.title,
          href: `/app/docs/${doc.id}`,
          icon: FileText,
        }))
      });
    } else {
      // If only one category, add docs directly
      docs.forEach((doc: any) => {
        items.push({
          id: doc.id,
          label: doc.title,
          href: `/app/docs/${doc.id}`,
          icon: categoryIcons[doc.category || "default"] || categoryIcons.default,
        });
      });
    }
  });

  return items;
}

// Mock function to get subfolders of a folder (in real app, this would fetch from API)
function getSubfolders(currentPath: string): Array<{id: string, name: string, path: string}> {
  // This is mock data - in a real app, this would fetch from your file system API
  const mockFolders: Record<string, Array<{id: string, name: string, path: string}>> = {
    '': [
      { id: 'documents', name: 'Documents', path: '/app/resources/documents' },
      { id: 'projects', name: 'Projects', path: '/app/resources/projects' },
      { id: 'images', name: 'Images', path: '/app/resources/images' },
    ],
    'documents': [
      { id: 'reports', name: 'Reports', path: '/app/resources/documents/reports' },
      { id: 'contracts', name: 'Contracts', path: '/app/resources/documents/contracts' },
    ],
    'projects': [
      { id: 'web-app', name: 'Web App', path: '/app/resources/projects/web-app' },
      { id: 'mobile-app', name: 'Mobile App', path: '/app/resources/projects/mobile-app' },
    ],
    'images': [
      { id: 'screenshots', name: 'Screenshots', path: '/app/resources/images/screenshots' },
      { id: 'logos', name: 'Logos', path: '/app/resources/images/logos' },
    ],
  };

  return mockFolders[currentPath] || [];
}

// Load resources navigation items dynamically based on current path
export function loadResourcesNavigation(currentPath: string = ''): NavigationItem[] {
  const items: NavigationItem[] = [];
  
  // Always show Home link
  items.push({
    id: 'home',
    label: 'home',
    href: '/app/resources/home',
    icon: Home,
    separator: true,
  });

  // If not at root, show "Up a folder" option
  if (currentPath && currentPath !== 'home') {
    const pathSegments = currentPath.split('/').filter(Boolean);
    const parentPath = pathSegments.length > 1 ? 
      `/app/resources/${pathSegments.slice(0, -1).join('/')}` : 
      '/app/resources/home';
    
    items.push({
      id: 'up-folder',
      label: 'upFolder',
      href: parentPath,
      icon: ArrowUp,
      separator: true,
    });
  }

  // Get and add subfolders of current location
  const folderPath = currentPath === 'home' ? '' : currentPath;
  const subfolders = getSubfolders(folderPath);
  
  if (subfolders.length > 0) {
    subfolders.forEach(folder => {
      items.push({
        id: folder.id,
        label: folder.name,
        href: folder.path,
        icon: Folder,
      });
    });
  }

  return items;
}

// Enhanced navigation loader that merges static and dynamic items
export function getEnhancedNavigationStructure(navigationStructure: PrimaryNavigationSection[], currentPath?: string): PrimaryNavigationSection[] {
  return navigationStructure.map(section => {
    if (section.id === "docs") {
      // Replace docs children with dynamically loaded items
      return {
        ...section,
        children: loadDocsNavigation(),
      };
    }
    if (section.id === "resources" && currentPath) {
      // Replace resources children with dynamically loaded items based on current path
      return {
        ...section,
        children: loadResourcesNavigation(currentPath),
      };
    }
    return section;
  });
}

// Get navigation items for a specific section (for search)
export function getSectionNavigationItems(sectionId: string, locale: Locale = 'en', currentPath?: string): NavigationItem[] {
  switch (sectionId) {
    case "docs":
      return loadDocsNavigation(locale);
    case "resources":
      return loadResourcesNavigation(currentPath || '');
    // Add other dynamic sections here as needed
    default:
      return [];
  }
}