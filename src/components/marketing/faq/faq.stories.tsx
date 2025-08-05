import { type Meta, type StoryObj } from "@storybook/react";
import FAQ from "./faq";

const meta: Meta<typeof FAQ> = {
  title: "Marketing/FAQ",
  component: FAQ,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "A Frequently Asked Questions component that displays collapsible question and answer pairs using an accordion interface. Supports internationalization and custom styling.",
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

// Default English FAQ
export const Default: Story = {
  name: "Default (English)",
  parameters: {
    docs: {
      description: {
        story: "Default FAQ component with English content showing Scintillar-related questions and answers.",
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
        story: "FAQ component with French translations of all questions and answers.",
      },
    },
  },
};

// Mobile view
export const Mobile: Story = {
  name: "Mobile View",
  parameters: {
    docs: {
      description: {
        story: "FAQ component optimized for mobile devices with responsive spacing and typography.",
      },
    },
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

// Tablet view
export const Tablet: Story = {
  name: "Tablet View",
  parameters: {
    docs: {
      description: {
        story: "FAQ component displayed on tablet-sized screens.",
      },
    },
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

// Dark theme showcase
export const DarkTheme: Story = {
  name: "Dark Theme",
  parameters: {
    docs: {
      description: {
        story: "FAQ component with dark theme styling showing how it adapts to different color schemes.",
      },
    },
  },
};

// In a landing page context
export const LandingPageContext: Story = {
  name: "Landing Page Context",
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-background">
        {/* Header placeholder */}
        <div className="h-16 bg-muted flex items-center justify-between px-8">
          <div className="text-lg font-semibold">Scintillar</div>
          <div className="flex gap-4">
            <button className="px-4 py-2 rounded bg-primary text-primary-foreground">
              Get Started
            </button>
          </div>
        </div>
        
        {/* Hero section placeholder */}
        <div className="py-20 text-center bg-gradient-to-b from-background to-muted/20">
          <h1 className="text-4xl font-bold mb-4">Build Interactive Worlds</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Scintillar helps developers create procedurally generated worlds with complex systems.
          </p>
        </div>
        
        {/* FAQ Section */}
        <Story />
        
        {/* Footer placeholder */}
        <div className="h-32 bg-muted flex items-center justify-center">
          <p className="text-muted-foreground">© 2024 Scintillar. All rights reserved.</p>
        </div>
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "FAQ component as it would appear in a complete landing page context.",
      },
    },
  },
};

// Minimal styling variant
export const MinimalStyling: Story = {
  name: "Minimal Styling",
  decorators: [
    (Story) => (
      <div className="max-w-4xl mx-auto p-8">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "FAQ component with additional container styling for different layout contexts.",
      },
    },
  },
};

// With custom background
export const CustomBackground: Story = {
  name: "Custom Background",
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-background dark:to-purple-950">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "FAQ component displayed on a custom gradient background to show visual flexibility.",
      },
    },
  },
};

// Compact version
export const Compact: Story = {
  name: "Compact Version",
  decorators: [
    (Story) => (
      <div className="max-w-2xl mx-auto">
        <div className="scale-90 origin-top">
          <Story />
        </div>
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "FAQ component in a more compact layout suitable for sidebar or modal contexts.",
      },
    },
  },
};

// Accessibility focused
export const AccessibilityShowcase: Story = {
  name: "Accessibility Features",
  parameters: {
    docs: {
      description: {
        story: "FAQ component demonstrating accessibility features like keyboard navigation and screen reader support through the accordion interface.",
      },
    },
    a11y: {
      element: '.faq-section',
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
          {
            id: 'keyboard-navigation',
            enabled: true,
          },
        ],
      },
    },
  },
};