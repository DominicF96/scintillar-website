import type { Meta, StoryObj } from '@storybook/react';
import PlaceholderPage from './placeholder-page';
import { Construction, Rocket, Users, BarChart, Settings, MapPin, Calendar, MessageSquare } from 'lucide-react';
import { withAppContext } from '../../../../.storybook/decorators';

const meta: Meta<typeof PlaceholderPage> = {
  title: 'Feedback/PlaceholderPage',
  component: PlaceholderPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A flexible placeholder page component for features under development. Includes planned features, coming soon items, and related links to guide users.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [withAppContext],
  argTypes: {
    title: {
      control: 'text',
      description: 'The main title of the page',
    },
    description: {
      control: 'text',
      description: 'Description text for the feature',
    },
    icon: {
      control: false,
      description: 'Icon component to display',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Analytics Dashboard',
  },
};

export const WithDescription: Story = {
  args: {
    title: 'Team Management',
    description: 'Comprehensive team management tools are being developed to help you organize your team, assign roles, and track productivity.',
    icon: Users,
  },
};

export const WithPlannedFeatures: Story = {
  args: {
    title: 'Advanced Reporting',
    description: 'Generate detailed reports and analytics for your projects and team performance.',
    icon: BarChart,
    features: [
      {
        title: 'Custom Report Builder',
        description: 'Create custom reports with drag-and-drop interface and various visualization options.',
        icon: BarChart,
      },
      {
        title: 'Automated Insights',
        description: 'AI-powered insights and recommendations based on your data patterns.',
        icon: Rocket,
      },
      {
        title: 'Export Options',
        description: 'Export reports in multiple formats including PDF, Excel, and PowerPoint.',
        icon: Settings,
      },
      {
        title: 'Scheduled Reports',
        description: 'Set up automated report generation and delivery to stakeholders.',
        icon: Calendar,
      },
    ],
  },
};

export const WithComingSoonFeatures: Story = {
  args: {
    title: 'Project Collaboration',
    description: 'Enhanced collaboration tools for seamless team coordination and project management.',
    icon: Users,
    comingSoonFeatures: [
      'Real-time document collaboration',
      'Video conferencing integration',
      'Task assignment and tracking',
      'Timeline and milestone management',
      'Resource allocation planning',
      'Performance analytics',
    ],
  },
};

export const WithRelatedLinks: Story = {
  args: {
    title: 'Advanced Settings',
    description: 'Configure advanced system settings and integrations.',
    icon: Settings,
    relatedLinks: [
      {
        href: '/app/settings/basic',
        label: 'Basic Settings',
        description: 'Configure basic system preferences',
      },
      {
        href: '/app/integrations',
        label: 'Integrations',
        description: 'Connect with third-party services',
      },
      {
        href: '/app/security',
        label: 'Security Settings',
        description: 'Manage security and permissions',
      },
      {
        href: '/app/notifications',
        label: 'Notifications',
        description: 'Configure notification preferences',
      },
    ],
  },
};

export const FullFeatured: Story = {
  args: {
    title: 'Enterprise Dashboard',
    description: 'A comprehensive enterprise dashboard with advanced analytics, team management, and custom reporting capabilities.',
    icon: BarChart,
    features: [
      {
        title: 'Real-time Analytics',
        description: 'Monitor key metrics and performance indicators in real-time with interactive charts.',
        icon: BarChart,
      },
      {
        title: 'Team Performance',
        description: 'Track team productivity and identify areas for improvement.',
        icon: Users,
      },
      {
        title: 'Custom Widgets',
        description: 'Create and customize dashboard widgets to display the most relevant information.',
        icon: Settings,
      },
    ],
    comingSoonFeatures: [
      'AI-powered predictive analytics',
      'Mobile app companion',
      'Advanced data visualization',
      'Integration with CRM systems',
      'Automated report scheduling',
    ],
    relatedLinks: [
      {
        href: '/app/analytics/basic',
        label: 'Basic Analytics',
        description: 'View basic performance metrics',
      },
      {
        href: '/app/team',
        label: 'Team Overview',
        description: 'Manage your team members',
      },
      {
        href: '/app/reports',
        label: 'Reports',
        description: 'Generate and view reports',
      },
    ],
  },
};

export const DifferentScenarios: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center mb-8 p-6">
        <h2 className="text-2xl font-bold mb-2">Placeholder Page Scenarios</h2>
        <p className="text-muted-foreground">
          Different configurations for various use cases
        </p>
      </div>
      
      <div className="grid gap-8">
        {/* Simple coming soon */}
        <div className="border rounded-lg overflow-hidden">
          <div className="p-4 bg-muted border-b">
            <h3 className="font-semibold">Simple Coming Soon</h3>
            <p className="text-sm text-muted-foreground">Basic placeholder with minimal content</p>
          </div>
          <PlaceholderPage 
            title="Chat Integration"
            description="Real-time chat functionality is coming soon to enhance team communication."
            icon={MessageSquare}
          />
        </div>

        {/* Feature-rich placeholder */}
        <div className="border rounded-lg overflow-hidden">
          <div className="p-4 bg-muted border-b">
            <h3 className="font-semibold">Feature-Rich Placeholder</h3>
            <p className="text-sm text-muted-foreground">Detailed placeholder with planned features</p>
          </div>
          <PlaceholderPage 
            title="Location Services"
            description="Advanced location-based features for better project management and team coordination."
            icon={MapPin}
            features={[
              {
                title: 'GPS Tracking',
                description: 'Track team member locations for field work coordination',
                icon: MapPin,
              },
              {
                title: 'Geofencing',
                description: 'Set up location-based triggers and notifications',
                icon: Settings,
              },
            ]}
            comingSoonFeatures={[
              'Interactive maps',
              'Location history',
              'Route optimization',
            ]}
            relatedLinks={[
              {
                href: '/app/team',
                label: 'Team Management',
                description: 'Manage your team members',
              },
            ]}
          />
        </div>
      </div>
    </div>
  ),
};

export const MinimalContent: Story = {
  args: {
    title: 'Quick Actions',
    icon: Rocket,
  },
};

export const FrenchLocale: Story = {
  args: {
    title: 'Tableau de Bord Avancé',
    description: 'Un tableau de bord complet avec des fonctionnalités avancées en cours de développement.',
    icon: BarChart,
    features: [
      {
        title: 'Analyses en Temps Réel',
        description: 'Surveillez les métriques clés en temps réel avec des graphiques interactifs.',
        icon: BarChart,
      },
    ],
    comingSoonFeatures: [
      'Intelligence artificielle prédictive',
      'Application mobile',
      'Visualisation avancée des données',
    ],
  },
};

export const Interactive: Story = {
  render: () => {
    const InteractiveDemo = () => {
      return (
        <div className="grid lg:grid-cols-2 gap-6 min-h-screen">
          {/* Controls */}
          <div className="p-6 border-r bg-muted/30 space-y-4">
            <h3 className="font-semibold">Interactive Demo</h3>
            <p className="text-sm text-muted-foreground">
              This demonstrates how the PlaceholderPage component adapts to different content configurations.
            </p>
            
            <div className="space-y-3">
              <div className="p-3 bg-card rounded border">
                <h4 className="font-medium text-sm mb-1">Content Sections</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Development status banner</li>
                  <li>• Planned features grid</li>
                  <li>• Coming soon checklist</li>
                  <li>• Related links navigation</li>
                </ul>
              </div>
              
              <div className="p-3 bg-card rounded border">
                <h4 className="font-medium text-sm mb-1">Customization Options</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Custom title and description</li>
                  <li>• Icon selection</li>
                  <li>• Feature definitions</li>
                  <li>• Related page links</li>
                </ul>
              </div>
              
              <div className="p-3 bg-card rounded border">
                <h4 className="font-medium text-sm mb-1">Use Cases</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Features under development</li>
                  <li>• Coming soon announcements</li>
                  <li>• Beta feature previews</li>
                  <li>• Maintenance pages</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Live Preview */}
          <div className="relative">
            <PlaceholderPage 
              title="Interactive Demo Feature"
              description="This is a live demonstration of the PlaceholderPage component with various features enabled."
              icon={Rocket}
              features={[
                {
                  title: 'Live Preview',
                  description: 'See changes reflected immediately in the component',
                  icon: Rocket,
                },
                {
                  title: 'Flexible Configuration',
                  description: 'Easily customize content and appearance',
                  icon: Settings,
                },
              ]}
              comingSoonFeatures={[
                'Theme customization',
                'Advanced animations',
                'Custom layouts',
              ]}
              relatedLinks={[
                {
                  href: '/app/components',
                  label: 'Component Library',
                  description: 'Browse all available components',
                },
                {
                  href: '/app/documentation',
                  label: 'Documentation',
                  description: 'Learn how to use components',
                },
              ]}
            />
          </div>
        </div>
      );
    };

    return <InteractiveDemo />;
  },
};