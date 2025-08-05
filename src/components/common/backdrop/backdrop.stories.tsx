import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Backdrop from './backdrop';

const meta: Meta<typeof Backdrop> = {
  title: 'Common/Backdrop',
  component: Backdrop,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    isVisible: {
      control: 'boolean',
    },
    opacity: {
      control: 'select',
      options: ['light', 'medium', 'dark'],
    },
    zIndex: {
      control: { type: 'range', min: 1, max: 50, step: 1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isVisible: true,
    opacity: 'medium',
  },
  render: (args) => (
    <div className="relative h-96">
      <div className="p-6 bg-gradient-to-r from-primary to-accent text-primary-foreground h-full flex items-center justify-center">
        <h2 className="text-2xl font-bold">Content behind backdrop</h2>
      </div>
      <Backdrop {...args} />
    </div>
  ),
};

export const Light: Story = {
  args: {
    isVisible: true,
    opacity: 'light',
  },
  render: (args) => (
    <div className="relative h-96">
      <div className="p-6 bg-gradient-to-r from-primary to-secondary text-primary-foreground h-full flex items-center justify-center">
        <h2 className="text-2xl font-bold">Light backdrop overlay</h2>
      </div>
      <Backdrop {...args} />
    </div>
  ),
};

export const Dark: Story = {
  args: {
    isVisible: true,
    opacity: 'dark',
  },
  render: (args) => (
    <div className="relative h-96">
      <div className="p-6 bg-gradient-to-r from-destructive to-accent text-destructive-foreground h-full flex items-center justify-center">
        <h2 className="text-2xl font-bold">Dark backdrop overlay</h2>
      </div>
      <Backdrop {...args} />
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [isVisible, setIsVisible] = useState(false);
    
    return (
      <div className="relative h-96">
        <div className="p-6 bg-gradient-to-r from-primary to-accent text-primary-foreground h-full flex flex-col items-center justify-center space-y-4">
          <h2 className="text-2xl font-bold">Click to show backdrop</h2>
          <Button 
            onClick={() => setIsVisible(true)}
            disabled={isVisible}
            className="bg-background text-primary hover:bg-accent"
          >
            Show Backdrop
          </Button>
        </div>
        <Backdrop 
          isVisible={isVisible}
          onClick={() => setIsVisible(false)}
          opacity="medium"
        />
        {isVisible && (
          <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
            <div className="bg-background p-6 rounded-lg shadow-lg pointer-events-auto border">
              <h3 className="text-lg font-semibold mb-2">Modal Content</h3>
              <p className="text-muted-foreground mb-4">Click backdrop to close</p>
              <Button onClick={() => setIsVisible(false)}>
                Close
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  },
};