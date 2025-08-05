import { type Meta, type StoryObj } from "@storybook/react";
import DocsList from "./docs-list";

// Note: Component should work with the actual SearchInput component

// Note: Component should work without mocking Next.js Link and locale context

// Mock docs types
interface DocsMetadata {
  id: string;
  title: string;
  author?: string;
  date?: string;
  description: string;
  category?: string;
}

// Mock docs index
const mockDocsData: DocsMetadata[] = [
  {
    id: "getting-started",
    title: "Getting Started with Scintillar",
    author: "Scintillar Team",
    date: "2024-08-02",
    description: "Learn how to get started with the Scintillar platform and explore its features.",
    category: "basics"
  },
  {
    id: "settings-guide",
    title: "Platform Settings Guide",
    author: "Scintillar Team",
    date: "2024-08-02",
    description: "Comprehensive guide to configuring and customizing your Scintillar experience.",
    category: "configuration"
  },
  {
    id: "digital-layers",
    title: "Understanding Digital Layers",
    author: "Scintillar Team",
    date: "2024-08-02",
    description: "Comprehensive guide to working with digital layers in Scintillar.",
    category: "features"
  },
  {
    id: "maps-guide",
    title: "Working with Maps",
    author: "Scintillar Team",
    date: "2024-08-02",
    description: "Complete guide to using Scintillar's mapping and visualization tools.",
    category: "features"
  },
  {
    id: "api-reference",
    title: "API Reference",
    author: "Dev Team",
    date: "2024-07-15",
    description: "Complete API documentation for integrating with Scintillar services.",
    category: "api"
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting Guide",
    author: "Support Team",
    date: "2024-07-20",
    description: "Common issues and solutions for Scintillar platform users.",
    category: "support"
  },
  {
    id: "advanced-features",
    title: "Advanced Features",
    author: "Scintillar Team",
    date: "2024-06-30",
    description: "Deep dive into advanced functionality for power users.",
    category: "advanced"
  },
  {
    id: "integration-guide",
    title: "Integration Guide",
    author: "Dev Team",
    date: "2024-07-10",
    description: "How to integrate Scintillar with external systems and services.",
    category: "configuration"
  }
];

// Note: Using mock data directly instead of mocking the import

const meta: Meta<typeof DocsList> = {
  title: "Features/DocsList",
  component: DocsList,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "A documentation list component that displays searchable and categorized documentation. Features search functionality, category grouping, and responsive card layout with document metadata.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default docs list
export const Default: Story = {
  name: "Default Docs List",
  parameters: {
    docs: {
      description: {
        story: "Default documentation list showing all available documents grouped by category with search functionality.",
      },
    },
  },
};

// Mobile responsive
export const Mobile: Story = {
  name: "Mobile View",
  parameters: {
    docs: {
      description: {
        story: "Documentation list optimized for mobile devices with single-column card layout.",
      },
    },
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

// Tablet responsive
export const Tablet: Story = {
  name: "Tablet View",
  parameters: {
    docs: {
      description: {
        story: "Documentation list on tablet-sized screens with two-column card layout.",
      },
    },
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

// Desktop view
export const Desktop: Story = {
  name: "Desktop View",
  parameters: {
    docs: {
      description: {
        story: "Documentation list on desktop with three-column card layout for optimal content density.",
      },
    },
    viewport: {
      defaultViewport: "desktop",
    },
  },
};

// Dark theme
export const DarkTheme: Story = {
  name: "Dark Theme",
  parameters: {
    docs: {
      description: {
        story: "Documentation list with dark theme styling showing how cards and content adapt to dark backgrounds.",
      },
    },
  },
};

// Search focused
export const SearchFocused: Story = {
  name: "Search Functionality",
  decorators: [
    (Story) => (
      <div className="space-y-4">
        <div className="p-4 bg-muted rounded-lg">
          <h3 className="font-medium mb-2">Search Features</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Search by title, description, or category</li>
            <li>• Real-time filtering as you type</li>
            <li>• Case-insensitive search</li>
            <li>• Try searching: "getting started", "api", "layers"</li>
          </ul>
        </div>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Documentation list with emphasis on search functionality and filtering capabilities.",
      },
    },
  },
};

// Category showcase
export const CategoryShowcase: Story = {
  name: "Category Organization",
  decorators: [
    (Story) => (
      <div className="space-y-4">
        <div className="p-4 bg-muted rounded-lg">
          <h3 className="font-medium mb-2">Document Categories</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">Basics</span>
            <span className="px-2 py-1 bg-secondary/20 text-secondary-foreground rounded text-sm">Configuration</span>
            <span className="px-2 py-1 bg-accent/20 text-accent-foreground rounded text-sm">Features</span>
            <span className="px-2 py-1 bg-muted/60 text-muted-foreground rounded text-sm">API</span>
            <span className="px-2 py-1 bg-primary/20 text-primary rounded text-sm">Support</span>
            <span className="px-2 py-1 bg-destructive/10 text-destructive rounded text-sm">Advanced</span>
          </div>
        </div>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Documentation list showing how documents are organized by categories with visual indicators.",
      },
    },
  },
};

// Empty state simulation
export const EmptyState: Story = {
  name: "Empty Search Results",
  decorators: [
    (Story) => {
      // Override the mock to return empty results for search
      const originalMock = require("@/content/en/docs/index");
      // Note: In a real implementation, this would be handled by the component
      
      return (
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-medium mb-2">Empty State</h3>
            <p className="text-sm text-muted-foreground">
              This demonstrates how the component handles empty search results or no available documentation.
            </p>
          </div>
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    docs: {
      description: {
        story: "Documentation list showing the empty state when no documents match the search criteria.",
      },
    },
  },
};

// Compact layout
export const Compact: Story = {
  name: "Compact Layout",
  decorators: [
    (Story) => (
      <div className="max-w-4xl mx-auto scale-90 origin-top">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Documentation list in a more compact layout suitable for constrained spaces or sidebar placement.",
      },
    },
  },
};

// Single category focus
export const SingleCategoryFocus: Story = {
  name: "Single Category Focus",
  decorators: [
    (Story) => {
      // Mock a single category of docs
      const featuresOnlyDocs = mockDocsData.filter(doc => doc.category === "features");
      // Note: In a real implementation, this would filter the docs
      
      return (
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-medium mb-2">Features Documentation</h3>
            <p className="text-sm text-muted-foreground">
              Showing only documents in the "features" category to demonstrate single-category layouts.
            </p>
          </div>
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    docs: {
      description: {
        story: "Documentation list showing only documents from a single category.",
      },
    },
  },
};

// Interactive demo
export const InteractiveDemo: Story = {
  name: "Interactive Demo",
  decorators: [
    (Story) => (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Documentation Browser</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Search through documentation, explore different categories, and click on cards to see how 
            the navigation would work in the real application.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Interactive demonstration of the documentation list with full functionality and context.",
      },
    },
  },
};

// With additional context
export const WithNavigation: Story = {
  name: "With Navigation Context",
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-background">
        {/* Mock navigation */}
        <div className="border-b p-4 mb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>App</span>
            <span>›</span>
            <span>Documentation</span>
          </div>
          <h1 className="text-2xl font-bold mt-2">Documentation</h1>
        </div>
        
        <div className="px-4">
          <Story />
        </div>
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Documentation list within a typical application navigation context.",
      },
    },
  },
};