import type { Meta, StoryObj } from '@storybook/react';
import Notifications from './notifications';

const meta: Meta<typeof Notifications> = {
  title: 'Features/Notifications',
  component: Notifications,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InHeader: Story = {
  render: () => (
    <div className="flex items-center justify-between p-4 border-b bg-background">
      <div className="flex items-center space-x-2">
        <h1 className="text-xl font-semibold">Scintillar Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm text-muted-foreground">John Doe</span>
        <Notifications />
      </div>
    </div>
  ),
};

export const InNavigation: Story = {
  render: () => (
    <nav className="flex items-center justify-between p-4 bg-background border-b">
      <div className="flex items-center space-x-6">
        <div className="font-semibold">Scintillar</div>
        <div className="flex space-x-4 text-sm">
          <a href="#" className="text-muted-foreground hover:text-foreground">Dashboard</a>
          <a href="#" className="text-muted-foreground hover:text-foreground">Projects</a>
          <a href="#" className="text-muted-foreground hover:text-foreground">Team</a>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Notifications />
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
          JD
        </div>
      </div>
    </nav>
  ),
};