import type { Meta, StoryObj } from '@storybook/react'
import Loader from './loader'
import { ThemeProvider } from 'next-themes'

const meta = {
  title: 'Shared/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="light">
        <div className="p-8">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  argTypes: {
    isLoaded: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isLoaded: false,
  },
}

export const Loading: Story = {
  args: {
    isLoaded: false,
  },
}

export const Loaded: Story = {
  args: {
    isLoaded: true,
  },
}