import { type Meta, type StoryObj } from "@storybook/react";
import BreadcrumbComponent from "./breadcrumb";

// Simple mock component for Storybook demonstration
const MockBreadcrumb = () => {
  return (
    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
      <span className="font-medium">Dashboard</span>
      <span>/</span>
      <span>Data</span>
      <span>/</span>
      <span className="text-foreground">Contacts</span>
    </div>
  );
};

const meta: Meta<typeof MockBreadcrumb> = {
  title: "Layout/Breadcrumb",
  component: MockBreadcrumb,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "A breadcrumb navigation component that shows the current page location within the application hierarchy. Note: This is a simplified version for Storybook demonstration since the actual component requires Next.js navigation context.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-4xl">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Dashboard root
export const Dashboard: Story = {
  name: "Dashboard Root",
  render: () => (
    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
      <span className="font-medium text-foreground">Dashboard</span>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Shows just the dashboard title when at the root of the application.",
      },
    },
  },
};

// Single level navigation
export const SingleLevel: Story = {
  name: "Single Level Navigation",
  render: () => (
    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
      <span className="font-medium">Dashboard</span>
      <span>/</span>
      <span className="text-foreground">Data</span>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Shows breadcrumb for a single level deep navigation like '/data'.",
      },
    },
  },
};

// Multi-level navigation
export const MultiLevel: Story = {
  render: () => (
    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
      <span className="font-medium">Dashboard</span>
      <span>/</span>
      <span>Data</span>
      <span>/</span>
      <span className="text-foreground">Contacts</span>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Shows breadcrumb for multi-level navigation like '/data/contacts'.",
      },
    },
  },
};

// Deep navigation
export const DeepNavigation: Story = {
  name: "Deep Navigation",
  render: () => (
    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
      <span className="font-medium">Dashboard</span>
      <span>/</span>
      <span>Simulations</span>
      <span>/</span>
      <span className="text-foreground">Command Palette</span>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Shows breadcrumb for deep navigation paths like '/simulations/command-palette'.",
      },
    },
  },
};

// Mobile responsive preview
export const MobileView: Story = {
  name: "Mobile View",
  render: () => (
    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
      <span className="text-foreground">Contacts</span>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Shows how the breadcrumb appears on mobile devices (last segment only).",
      },
    },
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};