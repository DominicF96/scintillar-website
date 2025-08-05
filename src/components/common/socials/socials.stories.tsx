import { type Meta, type StoryObj } from "@storybook/react";
import Socials from "./socials.component";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LocaleProvider } from "@/providers/locale.context";

const meta: Meta<typeof Socials> = {
  title: "Common/Socials",
  component: Socials,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A social media links component that displays platform icons with tooltips. Supports theme-aware icons and internationalization.",
      },
    },
  },
  args: {
    height: 48,
    width: 48,
    invertedTheme: false,
  },
  argTypes: {
    height: {
      control: { type: "range", min: 16, max: 128, step: 8 },
      description: "Height of the social icons in pixels",
    },
    width: {
      control: { type: "range", min: 16, max: 128, step: 8 },
      description: "Width of the social icons in pixels",
    },
    invertedTheme: {
      control: "boolean",
      description: "Whether to invert the theme colors for the icons",
    },
  },
  decorators: [
    (Story) => (
      <LocaleProvider locale="en">
        <TooltipProvider>
          <div className="p-8">
            <Story />
          </div>
        </TooltipProvider>
      </LocaleProvider>
    ),
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  name: "Default",
  parameters: {
    docs: {
      description: {
        story: "Default social media links with standard sizing and English locale.",
      },
    },
  },
};

// Small size
export const Small: Story = {
  name: "Small Size",
  args: {
    height: 24,
    width: 24,
  },
  parameters: {
    docs: {
      description: {
        story: "Smaller social media icons for compact layouts.",
      },
    },
  },
};

// Large size
export const Large: Story = {
  name: "Large Size",
  args: {
    height: 64,
    width: 64,
  },
  parameters: {
    docs: {
      description: {
        story: "Larger social media icons for prominent display.",
      },
    },
  },
};

// Extra large
export const ExtraLarge: Story = {
  name: "Extra Large",
  args: {
    height: 96,
    width: 96,
  },
  parameters: {
    docs: {
      description: {
        story: "Extra large social media icons for hero sections or landing pages.",
      },
    },
  },
};

// French locale
export const French: Story = {
  name: "French Locale",
  decorators: [
    (Story) => (
      <LocaleProvider locale="fr">
        <TooltipProvider>
          <div className="p-8">
            <Story />
          </div>
        </TooltipProvider>
      </LocaleProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Social media links with French tooltips (though labels are the same as platform names are universal).",
      },
    },
  },
};

// Inverted theme
export const InvertedTheme: Story = {
  name: "Inverted Theme",
  args: {
    invertedTheme: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Social media icons with inverted theme colors. Useful when displaying on colored backgrounds.",
      },
    },
  },
};

// In a footer context
export const FooterContext: Story = {
  name: "Footer Context",
  args: {
    height: 32,
    width: 32,
  },
  decorators: [
    (Story) => (
      <LocaleProvider locale="en">
        <TooltipProvider>
          <div className="bg-muted p-8 rounded-lg">
            <div className="text-center space-y-4">
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <div className="flex justify-center">
                <Story />
              </div>
              <p className="text-sm text-muted-foreground">
                Stay connected with our community
              </p>
            </div>
          </div>
        </TooltipProvider>
      </LocaleProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Social media links as they might appear in a footer section.",
      },
    },
  },
};

// In a card context
export const CardContext: Story = {
  name: "Card Context",
  args: {
    height: 40,
    width: 40,
  },
  decorators: [
    (Story) => (
      <LocaleProvider locale="en">
        <TooltipProvider>
          <div className="max-w-sm border rounded-lg p-6 space-y-4">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                <span className="text-2xl">👋</span>
              </div>
              <h3 className="text-lg font-semibold">Get In Touch</h3>
              <p className="text-sm text-muted-foreground">
                Connect with us on social media
              </p>
            </div>
            <div className="flex justify-center">
              <Story />
            </div>
          </div>
        </TooltipProvider>
      </LocaleProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Social media links within a card component for contact or about sections.",
      },
    },
  },
};

// Inline with text
export const InlineWithText: Story = {
  name: "Inline with Text",
  args: {
    height: 20,
    width: 20,
  },
  decorators: [
    (Story) => (
      <LocaleProvider locale="en">
        <TooltipProvider>
          <div className="p-8 space-y-4">
            <p className="text-lg">
              Join our community and follow us on social media:
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Find us on:</span>
              <Story />
            </div>
          </div>
        </TooltipProvider>
      </LocaleProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Small social media icons for inline display with text content.",
      },
    },
  },
};

// Responsive showcase
export const ResponsiveShowcase: Story = {
  name: "Responsive Showcase",
  decorators: [
    (Story) => (
      <LocaleProvider locale="en">
        <TooltipProvider>
          <div className="space-y-8 p-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Desktop (Large)</h3>
              <Socials height={64} width={64} />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Tablet (Medium)</h3>
              <Socials height={48} width={48} />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Mobile (Small)</h3>
              <Socials height={32} width={32} />
            </div>
          </div>
        </TooltipProvider>
      </LocaleProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Demonstrates different sizes for responsive design contexts.",
      },
    },
  },
};