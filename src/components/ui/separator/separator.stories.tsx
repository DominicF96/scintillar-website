import type { Meta, StoryObj } from '@storybook/react'
import { Separator } from './separator'

const meta = {
  title: 'UI/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    decorative: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <div>
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex h-5 items-center space-x-4 text-sm">
      <div>Blog</div>
      <Separator orientation="vertical" />
      <div>Docs</div>
      <Separator orientation="vertical" />
      <div>Source</div>
    </div>
  ),
}

export const InList: Story = {
  render: () => (
    <div className="w-[300px]">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Navigation</h4>
      </div>
      <Separator className="my-4" />
      <div className="flex flex-col space-y-2">
        <div className="text-sm">Home</div>
        <div className="text-sm">About</div>
        <div className="text-sm">Services</div>
        <div className="text-sm">Contact</div>
      </div>
    </div>
  ),
}

export const InCard: Story = {
  render: () => (
    <div className="w-[350px] rounded-lg border p-6">
      <div className="flex flex-col space-y-1.5">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          Create Project
        </h3>
        <p className="text-sm text-muted-foreground">
          Deploy your new project in one-click.
        </p>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Project Name
          </label>
          <input 
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Enter project name"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Description
          </label>
          <textarea 
            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Enter project description"
          />
        </div>
      </div>
      <Separator className="my-6" />
      <div className="flex justify-between">
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
          Cancel
        </button>
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
          Create Project
        </button>
      </div>
    </div>
  ),
}

export const InNavigation: Story = {
  render: () => (
    <div className="flex items-center space-x-4 text-sm">
      <div>Products</div>
      <Separator orientation="vertical" className="h-4" />
      <div>Services</div>
      <Separator orientation="vertical" className="h-4" />
      <div>About</div>
      <Separator orientation="vertical" className="h-4" />
      <div>Contact</div>
    </div>
  ),
}

export const MultipleSections: Story = {
  render: () => (
    <div className="w-[400px] space-y-6">
      <div>
        <h3 className="text-lg font-semibold">Section 1</h3>
        <p className="text-sm text-muted-foreground">
          This is the first section with some content.
        </p>
      </div>
      
      <Separator />
      
      <div>
        <h3 className="text-lg font-semibold">Section 2</h3>
        <p className="text-sm text-muted-foreground">
          This is the second section with different content.
        </p>
      </div>
      
      <Separator />
      
      <div>
        <h3 className="text-lg font-semibold">Section 3</h3>
        <p className="text-sm text-muted-foreground">
          This is the third and final section.
        </p>
      </div>
    </div>
  ),
}

export const CustomStyling: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <div>
        <h4 className="text-sm font-medium">Default Separator</h4>
        <p className="text-xs text-muted-foreground">Standard appearance</p>
      </div>
      <Separator />
      
      <div>
        <h4 className="text-sm font-medium">Thick Separator</h4>
        <p className="text-xs text-muted-foreground">Custom thickness</p>
      </div>
      <Separator className="h-[2px]" />
      
      <div>
        <h4 className="text-sm font-medium">Dashed Separator</h4>
        <p className="text-xs text-muted-foreground">Custom style</p>
      </div>
      <Separator className="border-dashed border-t border-border bg-transparent h-0" />
      
      <div>
        <h4 className="text-sm font-medium">Colored Separator</h4>
        <p className="text-xs text-muted-foreground">Custom color</p>
      </div>
      <Separator className="bg-primary/20" />
    </div>
  ),
}