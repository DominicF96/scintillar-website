import type { Meta, StoryObj } from '@storybook/react'
import Logo from './logo'
import { ThemeProvider } from 'next-themes'

const meta = {
  title: 'Shared/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="light">
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['colored', 'flat', 'inverted', 'inverted-flat'],
    },
    variant: {
      control: { type: 'select' },
      options: ['horizontal', 'standalone', 'responsive'],
    },
    className: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Horizontal: Story = {
  args: {
    variant: 'horizontal',
  },
}

export const Standalone: Story = {
  args: {
    variant: 'standalone',
  },
}

export const Responsive: Story = {
  args: {
    variant: 'responsive',
  },
}

export const Flat: Story = {
  args: {
    color: 'flat',
  },
}

export const Inverted: Story = {
  args: {
    color: 'inverted',
  },
}

export const InvertedFlat: Story = {
  args: {
    color: 'inverted-flat',
  },
}

export const WithCustomClass: Story = {
  args: {
    className: 'p-4 border rounded-lg',
  },
}