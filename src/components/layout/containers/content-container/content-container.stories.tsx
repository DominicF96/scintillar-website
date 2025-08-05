import { type Meta, type StoryObj } from "@storybook/react";
import ContentContainer from "./content-container";
import { Button } from "@/components/ui/button";
import { Settings, Download, Share } from "lucide-react";

// Note: Component should work without mocking the settings panel

const meta: Meta<typeof ContentContainer> = {
  title: "Layout/ContentContainer",
  component: ContentContainer,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "A flexible container component that wraps page content with support for actions, settings panel, and responsive layout. It handles sidebar width changes and provides scrollable content area.",
      },
    },
  },
  args: {
    locale: "en",
  },
  argTypes: {
    locale: {
      control: "select",
      options: ["en", "fr"],
      description: "The locale for internationalization",
    },
    fullHeight: {
      control: "boolean",
      description: "Whether the container should take full height",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply",
    },
    children: {
      control: false,
      description: "The main content to render",
    },
    actions: {
      control: false,
      description: "Action buttons to display in the top-right corner",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic usage
export const Default: Story = {
  name: "Default",
  args: {
    children: (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Page Title</h1>
        <p className="text-muted-foreground mb-4">
          This is the main content area. The ContentContainer provides a flexible layout
          with scrollable content and reserved space for actions.
        </p>
        <div className="space-y-4">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="p-4 border rounded-lg">
              <h3 className="font-semibold">Content Block {i + 1}</h3>
              <p className="text-sm text-muted-foreground">
                Sample content to demonstrate scrolling behavior when content exceeds container height.
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Basic usage of ContentContainer with scrollable content.",
      },
    },
  },
};

// With actions
export const WithActions: Story = {
  name: "With Actions",
  args: {
    children: (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p className="text-muted-foreground mb-6">
          This container includes action buttons in the top-right corner.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Card {i + 1}</h3>
              <p className="text-sm text-muted-foreground">
                Sample card content with some description text.
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
    actions: (
      <>
        <Button variant="outline" size="sm">
          <Share className="h-4 w-4 mr-2" />
          Share
        </Button>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
        <Button size="sm">
          <Settings className="h-4 w-4 mr-2" />
          Settings
        </Button>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "ContentContainer with action buttons displayed in the top-right corner.",
      },
    },
  },
};

// Full height
export const FullHeight: Story = {
  name: "Full Height",
  args: {
    fullHeight: true,
    children: (
      <div className="h-full p-8 flex flex-col">
        <h1 className="text-2xl font-bold mb-4">Full Height Layout</h1>
        <p className="text-muted-foreground mb-6">
          This container uses the full height of its parent container.
        </p>
        <div className="flex-1 border-2 border-dashed border-muted rounded-lg p-8 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Content Area</h3>
            <p className="text-muted-foreground">
              This area expands to fill the available height
            </p>
          </div>
        </div>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "ContentContainer configured to use full height of its parent.",
      },
    },
  },
};

// Scrollable content
export const ScrollableContent: Story = {
  name: "Scrollable Content",
  args: {
    children: (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Long Content Page</h1>
        <p className="text-muted-foreground mb-6">
          This demonstrates the scrollable behavior when content exceeds the container height.
        </p>
        <div className="space-y-6">
          {Array.from({ length: 50 }, (_, i) => (
            <div key={i} className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Section {i + 1}</h3>
              <p className="text-muted-foreground mb-2">
                This is a longer section with more content to demonstrate scrolling behavior.
                The ContentContainer will automatically handle overflow and provide scrolling.
              </p>
              <p className="text-sm text-muted-foreground">
                Additional paragraph content to make sections taller and show scrolling effect.
                The container maintains its layout while allowing vertical scrolling.
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
    actions: (
      <Button variant="outline" size="sm">
        <Settings className="h-4 w-4 mr-2" />
        Options
      </Button>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "ContentContainer with extensive content that demonstrates scrolling behavior.",
      },
    },
  },
};

// French locale
export const FrenchLocale: Story = {
  name: "French Locale",
  args: {
    locale: "fr",
    children: (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Titre de la Page</h1>
        <p className="text-muted-foreground mb-6">
          Ceci est le contenu principal en français. Le ContentContainer gère
          l'internationalisation via la prop locale.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Carte {i + 1}</h3>
              <p className="text-sm text-muted-foreground">
                Contenu de carte d'exemple avec du texte descriptif.
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
    actions: (
      <Button size="sm">
        <Settings className="h-4 w-4 mr-2" />
        Paramètres
      </Button>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "ContentContainer with French locale support.",
      },
    },
  },
};

// Custom styling
export const CustomStyling: Story = {
  name: "Custom Styling",
  args: {
    className: "bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900",
    children: (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Custom Styled Container</h1>
        <p className="text-muted-foreground mb-6">
          This container has custom background styling applied via the className prop.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Array.from({ length: 9 }, (_, i) => (
            <div key={i} className="p-4 bg-background/80 backdrop-blur-sm border rounded-lg">
              <h3 className="font-semibold mb-1">Item {i + 1}</h3>
              <p className="text-xs text-muted-foreground">
                Custom styled content
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
    actions: (
      <Button variant="secondary" size="sm">
        <Download className="h-4 w-4 mr-2" />
        Download
      </Button>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "ContentContainer with custom background styling applied.",
      },
    },
  },
};

// Empty content
export const EmptyContent: Story = {
  name: "Empty Content",
  args: {
    children: (
      <div className="p-8 h-full flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">No Content Available</h2>
          <p className="text-muted-foreground">
            This demonstrates how the container handles empty or minimal content.
          </p>
        </div>
      </div>
    ),
    actions: (
      <Button size="sm">
        Add Content
      </Button>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "ContentContainer with minimal content, showing how it handles empty states.",
      },
    },
  },
};