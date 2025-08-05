import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Home, FileText, Settings, Users } from 'lucide-react';
import AutoRedirect from './auto-redirect';

// Storybook action to log navigation events
const mockRouterPush = action('router.push');

const meta: Meta<typeof AutoRedirect> = {
  title: 'Navigation/AutoRedirect',
  component: AutoRedirect,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A component that automatically redirects users to a target URL with a countdown timer. Used when a user navigates to a section that doesn\'t have a default page.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    locale: {
      control: 'select',
      options: ['en', 'fr'],
    },
    targetUrl: {
      control: 'text',
    },
    sectionTitle: {
      control: 'text',
    },
    delay: {
      control: { type: 'range', min: 1000, max: 30000, step: 1000 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    locale: 'en',
    targetUrl: '/en/app/docs/getting-started',
    sectionTitle: 'Documentation',
    delay: 10000,
  },
};

export const WithIcon: Story = {
  args: {
    locale: 'en',
    targetUrl: '/en/app/settings/profile',
    sectionTitle: 'Settings',
    sectionIcon: Settings,
    delay: 8000,
  },
};

export const ShortDelay: Story = {
  args: {
    locale: 'en',
    targetUrl: '/en/app/team',
    sectionTitle: 'Team Management',
    sectionIcon: Users,
    delay: 3000,
  },
};

export const LongDelay: Story = {
  args: {
    locale: 'en',
    targetUrl: '/en/app/resources',
    sectionTitle: 'Resources',
    sectionIcon: FileText,
    delay: 15000,
  },
};

export const French: Story = {
  args: {
    locale: 'fr',
    targetUrl: '/fr/app/docs/guide-demarrage',
    sectionTitle: 'Documentation',
    sectionIcon: FileText,
    delay: 10000,
  },
};

export const DashboardRedirect: Story = {
  args: {
    locale: 'en',
    targetUrl: '/en/app/dashboard',
    sectionTitle: 'Dashboard',
    sectionIcon: Home,
    delay: 5000,
  },
};

export const InteractiveDemo: Story = {
  args: {
    locale: 'en',
    targetUrl: '/en/app/simulations',
    sectionTitle: 'Simulations',
    delay: 10000,
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the countdown timer in action. In a real application, the user would be automatically redirected after the countdown completes.',
      },
    },
  },
};