import type { Meta, StoryObj } from '@storybook/react';
import SettingsToggle from './settings-toggle';
import { SettingsPanelProvider } from '@/providers/settings-panel.context';
import { useState } from 'react';

const meta: Meta<typeof SettingsToggle> = {
  title: 'Features/SettingsToggle',
  component: SettingsToggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A circular button with a settings icon that toggles the settings panel. Designed to be placed in toolbars or navigation areas.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Mock context provider for stories
const MockProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const mockContext = {
    isOpen,
    openPanel: () => setIsOpen(true),
    closePanel: () => setIsOpen(false),
    togglePanel: () => setIsOpen(!isOpen),
  };

  return (
    <SettingsPanelProvider value={mockContext}>
      {children}
    </SettingsPanelProvider>
  );
};

export const Default: Story = {
  render: () => (
    <MockProvider>
      <SettingsToggle />
    </MockProvider>
  ),
};

export const InToolbar: Story = {
  render: () => (
    <MockProvider>
      <div className="flex items-center gap-2 p-3 bg-card border rounded-lg">
        <span className="font-medium">Tools:</span>
        <button className="p-2 hover:bg-accent rounded-md">
          <span className="text-sm">Edit</span>
        </button>
        <button className="p-2 hover:bg-accent rounded-md">
          <span className="text-sm">View</span>
        </button>
        <div className="ml-auto">
          <SettingsToggle />
        </div>
      </div>
    </MockProvider>
  ),
};

export const WithNavigation: Story = {
  render: () => (
    <MockProvider>
      <div className="flex items-center justify-between p-4 bg-card border rounded-lg w-96">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">S</span>
          </div>
          <span className="font-semibold">Scintillar</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-accent rounded-md">
            <span className="text-sm">Help</span>
          </button>
          <SettingsToggle />
        </div>
      </div>
    </MockProvider>
  ),
};

export const Interactive: Story = {
  render: () => {
    const InteractiveWrapper = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [clickCount, setClickCount] = useState(0);
      
      const mockContext = {
        isOpen,
        openPanel: () => setIsOpen(true),
        closePanel: () => setIsOpen(false),
        togglePanel: () => {
          setIsOpen(!isOpen);
          setClickCount(prev => prev + 1);
        },
      };

      return (
        <SettingsPanelProvider value={mockContext}>
          <div className="text-center space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">
                Panel Status: <span className="font-medium">{isOpen ? 'Open' : 'Closed'}</span>
              </p>
              <p className="text-sm text-muted-foreground">
                Clicked: <span className="font-medium">{clickCount} times</span>
              </p>
            </div>
            <SettingsToggle />
          </div>
        </SettingsPanelProvider>
      );
    };

    return <InteractiveWrapper />;
  },
};

export const MultipleButtons: Story = {
  render: () => (
    <MockProvider>
      <div className="flex flex-col gap-4">
        <div className="text-center text-sm text-muted-foreground mb-2">
          Multiple settings toggles in different contexts
        </div>
        
        {/* In a card header */}
        <div className="bg-card border rounded-lg">
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="font-semibold">Project Settings</h3>
            <SettingsToggle />
          </div>
          <div className="p-4">
            <p className="text-sm text-muted-foreground">
              Content of the project settings card...
            </p>
          </div>
        </div>

        {/* In a floating toolbar */}
        <div className="flex items-center gap-2 p-2 bg-background border rounded-full shadow-sm w-fit mx-auto">
          <button className="p-2 hover:bg-accent rounded-full">
            <span className="text-xs">Edit</span>
          </button>
          <button className="p-2 hover:bg-accent rounded-full">
            <span className="text-xs">Copy</span>
          </button>
          <div className="w-px h-6 bg-border"></div>
          <SettingsToggle />
        </div>

        {/* In a sidebar */}
        <div className="bg-card border rounded-lg p-3 w-48">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium">Quick Actions</span>
            <SettingsToggle />
          </div>
          <div className="space-y-2">
            <div className="text-xs text-muted-foreground p-2 bg-muted rounded">
              Action 1
            </div>
            <div className="text-xs text-muted-foreground p-2 bg-muted rounded">
              Action 2
            </div>
          </div>
        </div>
      </div>
    </MockProvider>
  ),
};