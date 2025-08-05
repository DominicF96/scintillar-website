import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'next-themes';
import { ThemeToggle } from './theme-toggle';

const meta: Meta<typeof ThemeToggle> = {
  title: 'Common/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    locale: {
      control: 'select',
      options: ['en', 'fr'],
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  args: {
    locale: 'en',
  },
};

export const French: Story = {
  args: {
    locale: 'fr',
  },
};

export const InContext: Story = {
  args: {
    locale: 'en',
  },
  render: (args) => (
    <div className="flex items-center justify-between p-4 border rounded-lg">
      <div>
        <h3 className="text-lg font-semibold">Appearance</h3>
        <p className="text-sm text-muted-foreground">
          Switch between light and dark themes
        </p>
      </div>
      <ThemeToggle {...args} />
    </div>
  ),
};