import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './skeleton'

const meta = {
  title: 'UI/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="space-y-2">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  ),
}

export const Card: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ),
}

export const Avatar: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[120px]" />
        <Skeleton className="h-3 w-[80px]" />
      </div>
    </div>
  ),
}

export const ListItems: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center space-x-3">
        <Skeleton className="h-8 w-8 rounded" />
        <div className="space-y-2">
          <Skeleton className="h-3 w-[200px]" />
          <Skeleton className="h-3 w-[150px]" />
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <Skeleton className="h-8 w-8 rounded" />
        <div className="space-y-2">
          <Skeleton className="h-3 w-[180px]" />
          <Skeleton className="h-3 w-[120px]" />
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <Skeleton className="h-8 w-8 rounded" />
        <div className="space-y-2">
          <Skeleton className="h-3 w-[220px]" />
          <Skeleton className="h-3 w-[100px]" />
        </div>
      </div>
    </div>
  ),
}

export const Table: Story = {
  render: () => (
    <div className="w-[600px] space-y-3">
      {/* Table Header */}
      <div className="flex space-x-4">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-4 w-[80px]" />
      </div>
      {/* Table Rows */}
      <div className="flex space-x-4">
        <Skeleton className="h-3 w-[100px]" />
        <Skeleton className="h-3 w-[150px]" />
        <Skeleton className="h-3 w-[100px]" />
        <Skeleton className="h-3 w-[80px]" />
      </div>
      <div className="flex space-x-4">
        <Skeleton className="h-3 w-[100px]" />
        <Skeleton className="h-3 w-[150px]" />
        <Skeleton className="h-3 w-[100px]" />
        <Skeleton className="h-3 w-[80px]" />
      </div>
      <div className="flex space-x-4">
        <Skeleton className="h-3 w-[100px]" />
        <Skeleton className="h-3 w-[150px]" />
        <Skeleton className="h-3 w-[100px]" />
        <Skeleton className="h-3 w-[80px]" />
      </div>
    </div>
  ),
}

export const Article: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <Skeleton className="h-[200px] w-full rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-6 w-[300px]" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[250px]" />
      </div>
      <div className="flex items-center space-x-3">
        <Skeleton className="h-8 w-8 rounded-full" />
        <div className="space-y-1">
          <Skeleton className="h-3 w-[100px]" />
          <Skeleton className="h-3 w-[80px]" />
        </div>
      </div>
    </div>
  ),
}

export const Dashboard: Story = {
  render: () => (
    <div className="w-[800px] space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-[200px]" />
        <Skeleton className="h-10 w-[120px] rounded-md" />
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-3 rounded-lg border p-4">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-8 w-[60px]" />
          <Skeleton className="h-3 w-[80px]" />
        </div>
        <div className="space-y-3 rounded-lg border p-4">
          <Skeleton className="h-4 w-[120px]" />
          <Skeleton className="h-8 w-[80px]" />
          <Skeleton className="h-3 w-[90px]" />
        </div>
        <div className="space-y-3 rounded-lg border p-4">
          <Skeleton className="h-4 w-[90px]" />
          <Skeleton className="h-8 w-[70px]" />
          <Skeleton className="h-3 w-[100px]" />
        </div>
      </div>
      
      {/* Chart */}
      <div className="rounded-lg border p-4">
        <Skeleton className="mb-4 h-6 w-[150px]" />
        <Skeleton className="h-[300px] w-full" />
      </div>
    </div>
  ),
}

export const Form: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <div className="space-y-2">
        <Skeleton className="h-4 w-[80px]" />
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-[60px]" />
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-20 w-full rounded-md" />
      </div>
      <div className="flex space-x-2">
        <Skeleton className="h-10 w-[100px] rounded-md" />
        <Skeleton className="h-10 w-[100px] rounded-md" />
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="mb-2 text-sm font-medium">Extra Small</p>
        <Skeleton className="h-2 w-[100px]" />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Small</p>
        <Skeleton className="h-3 w-[150px]" />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Medium</p>
        <Skeleton className="h-4 w-[200px]" />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Large</p>
        <Skeleton className="h-6 w-[250px]" />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Extra Large</p>
        <Skeleton className="h-8 w-[300px]" />
      </div>
    </div>
  ),
}

export const Shapes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="mb-2 text-sm font-medium">Rectangle</p>
        <Skeleton className="h-20 w-40" />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Square</p>
        <Skeleton className="h-20 w-20" />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Circle</p>
        <Skeleton className="h-20 w-20 rounded-full" />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Rounded Rectangle</p>
        <Skeleton className="h-20 w-40 rounded-lg" />
      </div>
    </div>
  ),
}