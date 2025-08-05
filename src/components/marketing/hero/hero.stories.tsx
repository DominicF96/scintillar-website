import { type Meta, type StoryObj } from "@storybook/react";
import Hero from "./hero";

// Note: This story works without mocking Next.js components since they should handle missing context gracefully

const meta: Meta<typeof Hero> = {
  title: "Marketing/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "A hero section component for landing pages featuring a main title, description, and call-to-action buttons. Supports internationalization and responsive design with centered layout on larger screens.",
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

// Default English hero
export const Default: Story = {
  name: "Default (English)",
  parameters: {
    docs: {
      description: {
        story: "Default hero section with English content featuring the main title, description, and primary/secondary action buttons.",
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
        story: "Hero section with French translations of the title, description, and action buttons.",
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
        story: "Hero section optimized for mobile devices with left-aligned text and stacked button layout.",
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
        story: "Hero section on tablet-sized screens showing the transition to centered layout.",
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
        story: "Hero section on desktop with full centered layout and horizontal button arrangement.",
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
        story: "Hero section with dark theme styling showing how text and buttons adapt to dark backgrounds.",
      },
    },
  },
};

// In complete landing page context
export const LandingPageContext: Story = {
  name: "Landing Page Context",
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-background/80 backdrop-blur-sm border-b flex items-center justify-between px-8">
          <div className="text-xl font-bold">Scintillar</div>
          <div className="flex gap-4">
            <button className="px-4 py-2 rounded hover:bg-muted">Features</button>
            <button className="px-4 py-2 rounded hover:bg-muted">Docs</button>
            <button className="px-4 py-2 rounded hover:bg-muted">About</button>
            <button className="px-4 py-2 rounded bg-primary text-primary-foreground">
              Sign In
            </button>
          </div>
        </nav>
        
        {/* Hero section */}
        <Story />
        
        {/* Additional content to show scroll context */}
        <div className="py-20 bg-muted/20 text-center">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the tools that make Scintillar the perfect framework for interactive hacking games.
          </p>
        </div>
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Hero section as it would appear in a complete landing page with navigation and following content sections.",
      },
    },
  },
};

// With custom background
export const CustomBackground: Story = {
  name: "Custom Background",
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-900">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Hero section on a custom gradient background demonstrating visual flexibility and text readability.",
      },
    },
  },
};

// With animated background
export const AnimatedBackground: Story = {
  name: "Animated Background",
  decorators: [
    (Story) => (
      <div className="relative min-h-screen bg-background overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-accent/20 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-primary/30 rounded-full animate-pulse"></div>
        </div>
        <div className="relative z-10">
          <Story />
        </div>
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Hero section with animated background elements to demonstrate content hierarchy and readability over dynamic backgrounds.",
      },
    },
  },
};

// Compact version
export const Compact: Story = {
  name: "Compact Version",
  decorators: [
    (Story) => (
      <div className="py-20">
        <div className="scale-75 origin-top">
          <Story />
        </div>
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Hero section in a more compact layout suitable for constrained spaces or secondary pages.",
      },
    },
  },
};

// High contrast
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
        story: "Hero section with enhanced contrast and saturation for accessibility testing and visibility in various lighting conditions.",
      },
    },
  },
};

// Button focus showcase
export const ButtonFocusShowcase: Story = {
  name: "Button Focus States",
  decorators: [
    (Story) => (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">Interactive Elements</h2>
          <p className="text-muted-foreground">
            Demonstrates button hover and focus states in the hero section
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Hero section with emphasis on button interactions, hover states, and keyboard navigation accessibility.",
      },
    },
  },
};

// Text length variations
export const LongContent: Story = {
  name: "Long Content Variation",
  decorators: [
    (Story) => (
      <div className="space-y-8">
        <div className="mx-auto max-w-[1000px] px-8 pt-40 pb-20 text-left md:text-center">
          <h1>Extended Framework for Interactive Hacking Games and Cybersecurity Education</h1>
          <p className="mx-auto max-w-[750px] text-xl text-muted-foreground mt-8 font-thin">
            Develop and experiment with comprehensive interactive visualization and manipulation tools 
            for immersive and dynamic hacking games. Our framework provides extensive capabilities 
            for creating realistic cybersecurity scenarios, procedural network generation, and 
            complex system vulnerabilities that adapt to player behavior and skill level.
          </p>
          <div className="flex flex-col mt-8 gap-4 justify-center md:flex-row">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded">Get Started Now</button>
            <button className="px-6 py-3 border rounded hover:bg-muted">Learn More About Our Features</button>
          </div>
        </div>
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Hero section with longer content to test layout behavior with extended text and button labels.",
      },
    },
  },
};