import type { Meta, StoryObj } from '@storybook/react';
import NotFoundContent from './not-found-content';
import { useState, useEffect } from 'react';

// Mock SettingsPanelProvider
const MockSettingsPanelProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div data-mock-settings-panel-provider>
      {children}
    </div>
  );
};

const meta: Meta<typeof NotFoundContent> = {
  title: 'Feedback/NotFoundContent',
  component: NotFoundContent,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A comprehensive 404 page component with customizable content, auto-redirect functionality, and various action buttons. Includes countdown timer and helpful guidance.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MockSettingsPanelProvider>
        <div data-mock-locale="en">
          <Story />
        </div>
      </MockSettingsPanelProvider>
    ),
  ],
  argTypes: {
    locale: {
      control: 'select',
      options: ['en', 'fr'],
      description: 'The locale for the component',
    },
    title: {
      control: 'text',
      description: 'Custom title for the not found page',
    },
    description: {
      control: 'text',
      description: 'Custom description text',
    },
    showBackButton: {
      control: 'boolean',
      description: 'Whether to show the back button',
    },
    homeHref: {
      control: 'text',
      description: 'The href for the home button',
    },
    autoRedirect: {
      control: 'boolean',
      description: 'Whether to auto-redirect to home',
    },
    delay: {
      control: 'number',
      description: 'Delay in milliseconds before auto-redirect',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    locale: 'en',
  },
};

export const CustomContent: Story = {
  args: {
    locale: 'en',
    title: 'Oops! This Feature is Coming Soon',
    description: 'The feature you\'re looking for is currently under development. Our team is working hard to bring you this functionality. Please check back soon!',
    homeHref: '/app/dashboard',
  },
};

export const NoAutoRedirect: Story = {
  args: {
    locale: 'en',
    title: 'Access Denied',
    description: 'You don\'t have permission to access this page. Please contact your administrator if you believe this is an error.',
    autoRedirect: false,
    showBackButton: true,
  },
};

export const QuickRedirect: Story = {
  args: {
    locale: 'en',
    title: 'Page Moved',
    description: 'This page has been moved to a new location. You will be redirected automatically.',
    delay: 3000,
    showBackButton: false,
  },
};

export const NoBackButton: Story = {
  args: {
    locale: 'en',
    showBackButton: false,
    title: 'Temporary Maintenance',
    description: 'This section is temporarily unavailable for maintenance. We apologize for the inconvenience.',
  },
};

export const DifferentHomeHref: Story = {
  args: {
    locale: 'en',
    homeHref: '/app/projects',
    title: 'Project Not Found',
    description: 'The project you\'re looking for doesn\'t exist or has been deleted.',
  },
};

export const French: Story = {
  args: {
    locale: 'fr',
    title: 'Page Non Trouvée',
    description: 'La page que vous recherchez n\'existe pas ou a été déplacée. Il s\'agit peut-être d\'une page de remplacement qui n\'a pas encore été implémentée.',
  },
};

export const LongDescription: Story = {
  args: {
    locale: 'en',
    title: 'Content Under Construction',
    description: 'This section of the application is currently being developed by our engineering team. We are implementing new features and improvements to enhance your experience. The development process includes thorough testing and quality assurance to ensure the best possible user experience. Please be patient as we work to deliver this functionality. In the meantime, you can explore other sections of the application or contact our support team if you need assistance.',
  },
};

export const DifferentScenarios: Story = {
  render: () => (
    <div className="space-y-8 p-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Different Not Found Scenarios</h2>
        <p className="text-muted-foreground">
          Various configurations for different use cases
        </p>
      </div>
      
      <div className="grid gap-6">
        {/* Regular 404 */}
        <div className="border rounded-lg overflow-hidden">
          <div className="p-4 bg-muted border-b">
            <h3 className="font-semibold">Standard 404 Page</h3>
            <p className="text-sm text-muted-foreground">Default configuration with auto-redirect</p>
          </div>
          <div className="h-96">
            <NotFoundContent 
              locale="en"
              autoRedirect={false}
            />
          </div>
        </div>

        {/* Feature in development */}
        <div className="border rounded-lg overflow-hidden">
          <div className="p-4 bg-muted border-b">
            <h3 className="font-semibold">Feature Under Development</h3>
            <p className="text-sm text-muted-foreground">Coming soon page for unfinished features</p>
          </div>
          <div className="h-96">
            <NotFoundContent 
              locale="en"
              title="Feature Coming Soon"
              description="This exciting new feature is currently in development. Our team is working hard to bring you enhanced functionality."
              autoRedirect={false}
              homeHref="/app/features"
            />
          </div>
        </div>

        {/* Access denied */}
        <div className="border rounded-lg overflow-hidden">
          <div className="p-4 bg-muted border-b">
            <h3 className="font-semibold">Access Restricted</h3>
            <p className="text-sm text-muted-foreground">Permission-based error page</p>
          </div>
          <div className="h-96">
            <NotFoundContent 
              locale="en"
              title="Access Restricted"
              description="You don't have the necessary permissions to view this content. Please contact your administrator."
              autoRedirect={false}
              showBackButton={false}
              homeHref="/app/dashboard"
            />
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const InteractiveDemo = () => {
      const [config, setConfig] = useState({
        title: 'Page Not Found',
        description: 'The page you\'re looking for doesn\'t exist or has been moved.',
        autoRedirect: true,
        showBackButton: true,
        delay: 10000,
        homeHref: '/app',
      });

      return (
        <div className="grid lg:grid-cols-2 gap-6 h-screen">
          {/* Controls */}
          <div className="p-6 border-r bg-muted/30 overflow-auto">
            <h3 className="font-semibold mb-4">Configuration</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  value={config.title}
                  onChange={(e) => setConfig({...config, title: e.target.value})}
                  className="w-full p-2 border rounded text-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  value={config.description}
                  onChange={(e) => setConfig({...config, description: e.target.value})}
                  className="w-full p-2 border rounded text-sm h-20"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Home Href</label>
                <input
                  type="text"
                  value={config.homeHref}
                  onChange={(e) => setConfig({...config, homeHref: e.target.value})}
                  className="w-full p-2 border rounded text-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Redirect Delay (ms)</label>
                <input
                  type="number"
                  value={config.delay}
                  onChange={(e) => setConfig({...config, delay: parseInt(e.target.value) || 10000})}
                  className="w-full p-2 border rounded text-sm"
                  step="1000"
                />
              </div>
              
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={config.autoRedirect}
                    onChange={(e) => setConfig({...config, autoRedirect: e.target.checked})}
                  />
                  <span className="text-sm">Auto Redirect</span>
                </label>
                
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={config.showBackButton}
                    onChange={(e) => setConfig({...config, showBackButton: e.target.checked})}
                  />
                  <span className="text-sm">Show Back Button</span>
                </label>
              </div>
            </div>
          </div>
          
          {/* Preview */}
          <div className="relative">
            <NotFoundContent 
              locale="en"
              title={config.title}
              description={config.description}
              autoRedirect={config.autoRedirect}
              showBackButton={config.showBackButton}
              delay={config.delay}
              homeHref={config.homeHref}
            />
          </div>
        </div>
      );
    };

    return <InteractiveDemo />;
  },
};

export const CountdownDemo: Story = {
  args: {
    locale: 'en',
    delay: 5000,
  },
  render: (args) => (
    <div className="space-y-4">
      <div className="text-center p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold mb-2">Countdown Timer Demo</h3>
        <p className="text-sm text-muted-foreground">
          Watch the countdown timer in action (5 seconds)
        </p>
      </div>
      <NotFoundContent {...args} />
    </div>
  ),
};

export const MobileResponsive: Story = {
  args: {
    locale: 'en',
    autoRedirect: false,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  render: (args) => (
    <div className="min-h-screen">
      <NotFoundContent {...args} />
    </div>
  ),
};