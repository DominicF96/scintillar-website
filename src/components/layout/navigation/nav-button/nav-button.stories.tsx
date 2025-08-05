import type { Meta, StoryObj } from '@storybook/react';
import { Home, Settings2, Users, FileText } from 'lucide-react';
import { TooltipProvider } from '@/components/ui/tooltip';
import NavButton from './nav-button';

const meta: Meta<typeof NavButton> = {
  title: 'Layout/Navigation/NavButton',
  component: NavButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: false,
    },
    isActive: {
      control: 'boolean',
    },
    isCollapsed: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    href: {
      control: 'text',
    },
  },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div className="w-64 p-4">
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: Home,
    label: 'Dashboard',
    isActive: false,
    isCollapsed: false,
    href: '/dashboard',
  },
};

export const Active: Story = {
  args: {
    icon: Home,
    label: 'Dashboard',
    isActive: true,
    isCollapsed: false,
    href: '/dashboard',
  },
};

export const Collapsed: Story = {
  args: {
    icon: Settings2,
    label: 'Settings',
    isActive: false,
    isCollapsed: true,
    href: '/settings',
  },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div className="w-16 p-4">
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
};

export const CollapsedActive: Story = {
  args: {
    icon: Users,
    label: 'Team',
    isActive: true,
    isCollapsed: true,
    href: '/team',
  },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div className="w-16 p-4">
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
};

export const WithoutHref: Story = {
  args: {
    icon: FileText,
    label: 'Documentation',
    isActive: false,
    isCollapsed: false,
    onClick: () => alert('Button clicked!'),
  },
};

export const NavigationList: Story = {
  render: () => (
    <TooltipProvider>
      <div className="w-64 space-y-2 p-4 bg-background border rounded-lg">
        <h3 className="text-sm font-medium text-muted-foreground px-4 py-2">Navigation</h3>
        <NavButton
          icon={Home}
          label="Dashboard"
          isActive={true}
          isCollapsed={false}
          href="/dashboard"
        />
        <NavButton
          icon={Users}
          label="Team"
          isActive={false}
          isCollapsed={false}
          href="/team"
        />
        <NavButton
          icon={FileText}
          label="Documentation"
          isActive={false}
          isCollapsed={false}
          href="/docs"
        />
        <NavButton
          icon={Settings2}
          label="Settings"
          isActive={false}
          isCollapsed={false}
          href="/settings"
        />
      </div>
    </TooltipProvider>
  ),
};

export const CollapsedNavigation: Story = {
  render: () => (
    <TooltipProvider>
      <div className="w-16 space-y-2 p-2 bg-background border rounded-lg">
        <NavButton
          icon={Home}
          label="Dashboard"
          isActive={true}
          isCollapsed={true}
          href="/dashboard"
        />
        <NavButton
          icon={Users}
          label="Team"
          isActive={false}
          isCollapsed={true}
          href="/team"
        />
        <NavButton
          icon={FileText}
          label="Documentation"
          isActive={false}
          isCollapsed={true}
          href="/docs"
        />
        <NavButton
          icon={Settings2}
          label="Settings"
          isActive={false}
          isCollapsed={true}
          href="/settings"
        />
      </div>
    </TooltipProvider>
  ),
};