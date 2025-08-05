import { type Meta, type StoryObj } from "@storybook/react";
import Features from "./features";

// Note: This story works without mocking Next.js Link since the component should handle missing context gracefully

const meta: Meta<typeof Features> = {
  title: "Marketing/Features",
  component: Features,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "A features showcase component that displays a grid of feature cards with icons, descriptions, and call-to-action. Each feature includes an avatar icon, flavor text, title, and detailed description.",
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
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default English features
export const Default: Story = {
  name: "Default (English)",
  parameters: {
    docs: {
      description: {
        story: "Default features showcase with English content displaying all six feature cards in a responsive grid layout.",
      },
    },
  },
};

// French version
export const French: Story = {
  name: "French Version",
  args: {
    locale: "fr",
  },
  parameters: {
    docs: {
      description: {
        story: "Features showcase with French translations of all content including titles, descriptions, and call-to-action.",
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
        story: "Features showcase optimized for mobile devices with single-column layout and adjusted spacing.",
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
        story: "Features showcase on tablet-sized screens with two-column grid layout.",
      },
    },
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

// Desktop large
export const Desktop: Story = {
  name: "Desktop View",
  parameters: {
    docs: {
      description: {
        story: "Features showcase on desktop with full three-column grid layout showing all features at once.",
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
        story: "Features showcase with dark theme styling showing how feature cards adapt to different color schemes.",
      },
    },
  },
};

// In landing page context
export const LandingPageContext: Story = {
  name: "Landing Page Context",
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <nav className="h-16 bg-background/80 backdrop-blur-sm border-b flex items-center justify-between px-8">
          <div className="text-xl font-bold">Scintillar</div>
          <div className="flex gap-4">
            <button className="px-4 py-2 rounded hover:bg-muted">About</button>
            <button className="px-4 py-2 rounded bg-primary text-primary-foreground">
              Get Started
            </button>
          </div>
        </nav>
        
        {/* Hero section placeholder */}
        <div className="py-20 text-center bg-gradient-to-b from-background to-muted/20">
          <h1 className="text-5xl font-bold mb-6">Build Interactive Worlds</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Scintillar provides powerful tools for creating procedurally generated worlds 
            with complex hacking mechanics and dynamic systems.
          </p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg text-lg font-medium">
            Start Building
          </button>
        </div>
        
        {/* Features section */}
        <Story />
        
        {/* Additional sections placeholder */}
        <div className="py-20 bg-muted/20 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of developers building the next generation of interactive experiences.
          </p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg">
            Download Now
          </button>
        </div>
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Features showcase as it would appear in a complete landing page with navigation and other sections.",
      },
    },
  },
};

// With custom background
export const CustomBackground: Story = {
  name: "Custom Background",
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-purple-950 dark:via-blue-950 dark:to-indigo-900">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Features showcase on a custom gradient background demonstrating visual flexibility.",
      },
    },
  },
};

// Compact version
export const Compact: Story = {
  name: "Compact Layout",
  decorators: [
    (Story) => (
      <div className="max-w-4xl mx-auto">
        <div className="scale-75 origin-top">
          <Story />
        </div>
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Features showcase in a more compact layout suitable for constrained spaces.",
      },
    },
  },
};

// Individual feature focus
export const FeatureCardShowcase: Story = {
  name: "Feature Card Showcase",
  decorators: [
    (Story) => (
      <div className="bg-background p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Feature Card Examples</h2>
          <p className="text-muted-foreground">
            Individual feature cards showing icons, titles, and descriptions
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Focused view of the feature cards to demonstrate individual card design and layout.",
      },
    },
  },
};

// High contrast theme
export const HighContrast: Story = {
  name: "High Contrast",
  decorators: [
    (Story) => (
      <div className="contrast-125 saturate-110">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Features showcase with enhanced contrast and saturation for accessibility testing.",
      },
    },
  },
};

// Interactive preview
export const InteractivePreview: Story = {
  name: "Interactive Preview",
  decorators: [
    (Story) => (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Interactive Features Demo</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hover over feature cards to see interactions and click the button to see navigation behavior.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Features showcase with emphasis on interactive elements like hover effects and button clicks.",
      },
    },
  },
};