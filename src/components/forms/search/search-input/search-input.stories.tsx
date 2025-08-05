import type { Meta, StoryObj } from '@storybook/react';
import { SearchInput } from './search-input';

const meta: Meta<typeof SearchInput> = {
  title: 'Forms/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    containerClassName: {
      control: 'text',
    },
    iconClassName: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Search...',
  },
};

export const Placeholder: Story = {
  args: {
    placeholder: 'Search simulations...',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled search',
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    placeholder: 'Search...',
    defaultValue: 'cybersecurity',
  },
};

export const Large: Story = {
  args: {
    placeholder: 'Search the platform...',
    containerClassName: 'py-3 px-4 text-base',
    iconClassName: 'h-5 w-5',
  },
};

export const Small: Story = {
  args: {
    placeholder: 'Search...',
    containerClassName: 'py-1 px-2 text-xs',
    iconClassName: 'h-3 w-3',
  },
};

export const InForm: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <div>
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2 block">
          Find Resources
        </label>
        <SearchInput placeholder="Search documentation, tutorials..." />
      </div>
      <div>
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2 block">
          Search Users
        </label>
        <SearchInput placeholder="Enter username or email..." />
      </div>
    </div>
  ),
};

export const Variations: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <SearchInput placeholder="Default search" />
      <SearchInput 
        placeholder="Large search" 
        containerClassName="py-3 px-4"
        iconClassName="h-5 w-5"
      />
      <SearchInput 
        placeholder="Small search" 
        containerClassName="py-1 px-2 text-xs"
        iconClassName="h-3 w-3"
      />
      <SearchInput 
        placeholder="Disabled search" 
        disabled 
      />
    </div>
  ),
};