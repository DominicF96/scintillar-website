import { type Meta, type StoryObj } from "@storybook/react";
import Integration from "./integration";
import { TooltipProvider } from "@/components/ui/tooltip";

// Note: This story works without mocking since the components should handle missing context gracefully

const meta: Meta<typeof Integration> = {
  title: "Marketing/Integration",
  component: Integration,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "An integration showcase component that displays information about game engine compatibility and features. Includes engine logos with tooltips and a checklist of benefits. Supports theme-aware icons and internationalization.",
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
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default English integration
export const Default: Story = {
  name: "Default (English)",
  parameters: {
    docs: {
      description: {
        story: "Default integration section with English content showing engine compatibility and feature checklist.",
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
        story: "Integration section with French translations of all content including descriptions and checklist items.",
      },
    },
  },
};

// Dark theme
export const DarkTheme: Story = {
  name: "Dark Theme",
  parameters: {
    docs: {
      description: {
        story: "Integration section with dark theme styling showing how engine logos and content adapt to dark backgrounds.",
      },
    },
  },
  beforeEach: () => {
    // Mock dark theme
    require("next-themes").useTheme.mockReturnValue({
      resolvedTheme: "dark",
      theme: "dark",
      setTheme: () => {},
    });
  },
};

// Mobile responsive
export const Mobile: Story = {
  name: "Mobile View",
  parameters: {
    docs: {
      description: {
        story: "Integration section optimized for mobile devices with single-column layout and adjusted spacing.",
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
        story: "Integration section on tablet-sized screens showing the two-column grid layout.",
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
        story: "Integration section on desktop with full two-column layout and proper spacing between content and engine showcase.",
      },
    },
    viewport: {
      defaultViewport: "desktop",
    },
  },
};

// In landing page context
export const LandingPageContext: Story = {
  name: "Landing Page Context",
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div className="min-h-screen bg-background">
          {/* Previous sections placeholder */}
          <div className="py-20 text-center bg-gradient-to-b from-background to-muted/20">
            <h1 className="text-4xl font-bold mb-6">Build Interactive Worlds</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Scintillar provides powerful tools for creating procedurally generated worlds.
            </p>
          </div>
          
          {/* Features section placeholder */}
          <div className="py-20 bg-muted/10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
              <p className="text-muted-foreground">Discover what makes Scintillar unique</p>
            </div>
          </div>
          
          {/* Integration section */}
          <Story />
          
          {/* Footer placeholder */}
          <div className="py-16 bg-muted text-center">
            <p className="text-muted-foreground">© 2024 Scintillar. All rights reserved.</p>
          </div>
        </div>
      </TooltipProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Integration section as it would appear in a complete landing page context with other sections.",
      },
    },
  },
};

// With custom background
export const CustomBackground: Story = {
  name: "Custom Background",
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-100 dark:from-green-950 dark:via-blue-950 dark:to-purple-900">
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Integration section on a custom gradient background showing visual flexibility.",
      },
    },
  },
};

// Compact layout
export const Compact: Story = {
  name: "Compact Layout",
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div className="max-w-4xl mx-auto">
          <div className="scale-90 origin-top">
            <Story />
          </div>
        </div>
      </TooltipProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Integration section in a more compact layout suitable for constrained spaces.",
      },
    },
  },
};

// Engine focus showcase
export const EngineFocusShowcase: Story = {
  name: "Engine Focus",
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div className="bg-background p-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Engine Compatibility</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hover over engine logos to see availability status and integration details.
            </p>
          </div>
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Integration section with emphasis on engine compatibility and tooltip interactions.",
      },
    },
  },
};

// Checklist focus
export const ChecklistFocus: Story = {
  name: "Checklist Features",
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div className="bg-background p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Integration Benefits</h2>
            <p className="text-muted-foreground">
              Key features and benefits of Scintillar integration
            </p>
          </div>
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Integration section with focus on the feature checklist and benefits.",
      },
    },
  },
};

// High contrast version
export const HighContrast: Story = {
  name: "High Contrast",
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div className="contrast-125 saturate-110">
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Integration section with enhanced contrast and saturation for accessibility testing.",
      },
    },
  },
};

// Interactive tooltip showcase
export const TooltipShowcase: Story = {
  name: "Tooltip Interactions",
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-xl font-bold mb-2">Interactive Elements</h2>
            <p className="text-muted-foreground">
              Hover over engine logos to see tooltip information
            </p>
          </div>
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Integration section demonstrating tooltip functionality and interactive elements.",
      },
    },
  },
};