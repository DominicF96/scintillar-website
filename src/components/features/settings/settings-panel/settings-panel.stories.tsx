import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import SettingsPanel from './settings-panel';
import { SettingsPanelProvider, useSettingsPanel } from '@/providers/settings-panel.context';
import { LocaleProvider } from '@/providers/locale.context';
import { Button } from '@/components/ui/button';

const meta: Meta<typeof SettingsPanel> = {
  title: 'Features/SettingsPanel',
  component: SettingsPanel,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A comprehensive settings panel that slides in from the right side. Includes sections for general settings, display options, and tools configuration.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Component wrapper to provide context and demo setup
const SettingsPanelDemo = ({ locale = 'en', initialOpen = true }: { locale?: string; initialOpen?: boolean }) => {
  return (
    <LocaleProvider locale={locale}>
      <SettingsPanelProvider>
        <SettingsPanelDemoContent initialOpen={initialOpen} />
      </SettingsPanelProvider>
    </LocaleProvider>
  );
};

const SettingsPanelDemoContent = ({ initialOpen }: { initialOpen: boolean }) => {
  const { openPanel } = useSettingsPanel();
  
  // Open panel on mount if initialOpen is true
  React.useEffect(() => {
    if (initialOpen) {
      openPanel();
    }
  }, [initialOpen, openPanel]);
  
  return (
    <div className="relative h-screen w-full bg-background">
      {/* Main content area */}
      <div className="absolute inset-0 p-4">
        <div className="bg-muted rounded-lg p-4 text-center">
          <h2 className="text-xl font-bold mb-2">Main Content Area</h2>
          <p className="text-muted-foreground mb-4">
            The settings panel will overlay this content when open.
          </p>
        </div>
      </div>
      
      {/* Settings Panel */}
      <SettingsPanel />
    </div>
  );
};

// Interactive wrapper with controls
const InteractiveDemo = ({ locale = 'en' }: { locale?: string }) => {
  const [key, setKey] = useState(0); // Force re-render to reset state
  
  return (
    <LocaleProvider locale={locale}>
      <SettingsPanelProvider key={key}>
        <SettingsPanelContent onReset={() => setKey(k => k + 1)} />
      </SettingsPanelProvider>
    </LocaleProvider>
  );
};

const SettingsPanelContent = ({ onReset }: { onReset: () => void }) => {
  const { isOpen, openPanel, closePanel, togglePanel } = useSettingsPanel();
  
  return (
    <div className="relative h-screen w-full bg-background">
      <div className="absolute inset-0 p-4">
        <div className="bg-muted rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Interactive Settings Panel Demo</h2>
          <p className="text-muted-foreground mb-4">
            Use the controls below to interact with the settings panel.
          </p>
          <div className="flex gap-2 flex-wrap">
            <Button onClick={openPanel} disabled={isOpen}>
              Open Panel
            </Button>
            <Button onClick={closePanel} disabled={!isOpen}>
              Close Panel
            </Button>
            <Button onClick={togglePanel}>
              Toggle Panel
            </Button>
            <Button onClick={onReset} variant="outline">
              Reset
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Panel is currently: <strong>{isOpen ? 'Open' : 'Closed'}</strong>
          </p>
        </div>
      </div>
      <SettingsPanel />
    </div>
  );
};

export const Default: Story = {
  render: () => <SettingsPanelDemo />,
};

export const French: Story = {
  render: () => <SettingsPanelDemo locale="fr" />,
};

export const Interactive: Story = {
  render: () => <InteractiveDemo />,
};