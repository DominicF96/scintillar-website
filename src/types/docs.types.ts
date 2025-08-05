// Valid documentation categories - must match i18n keys
export type DocsCategory = 
  | "basics"
  | "configuration" 
  | "features"
  | "guides"
  | "tutorials"
  | "advanced"
  | "integrations"
  | "troubleshooting"
  | "api"
  | "general";

export interface DocsMetadata {
  id: string;
  title: string;
  author?: string;
  date: string;
  description: string;
  category?: DocsCategory;
}

// Utility function to get localized category name
export function getLocalizedCategory(
  category: string | undefined, 
  categoryTranslations: Record<string, string>
): string {
  if (!category) return categoryTranslations.general || "General";
  
  // Return localized category or fallback to original category (capitalized)
  return categoryTranslations[category] || 
         categoryTranslations.general || 
         category.charAt(0).toUpperCase() + category.slice(1);
}