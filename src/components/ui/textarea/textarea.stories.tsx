import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from './textarea'
import { Label } from '../label/label'

const meta = {
  title: 'UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    rows: {
      control: { type: 'number', min: 1, max: 20 },
    },
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Type your message here.',
  },
}

export const WithValue: Story = {
  args: {
    defaultValue: 'This is a textarea with some initial content. You can edit this text.',
    placeholder: 'Type your message here.',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'This textarea is disabled and cannot be edited.',
  },
}

export const WithRows: Story = {
  args: {
    rows: 8,
    placeholder: 'This textarea has 8 rows...',
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="w-[400px] space-y-2">
      <Label htmlFor="message">Your message</Label>
      <Textarea 
        id="message"
        placeholder="Type your message here." 
      />
    </div>
  ),
}

export const FormExample: Story = {
  render: () => (
    <div className="w-[500px] space-y-6 rounded-lg border p-6">
      <div>
        <h3 className="text-lg font-semibold">Contact Form</h3>
        <p className="text-sm text-muted-foreground">
          Send us a message and we'll get back to you.
        </p>
      </div>
      
      <div className="space-y-4">
        <div className="grid w-full gap-1.5">
          <Label htmlFor="name">Name</Label>
          <input 
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="name"
            placeholder="Your name"
          />
        </div>
        
        <div className="grid w-full gap-1.5">
          <Label htmlFor="email">Email</Label>
          <input 
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="email"
            type="email"
            placeholder="your.email@example.com"
          />
        </div>
        
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message">Message</Label>
          <Textarea 
            id="message"
            placeholder="Type your message here."
            rows={5}
          />
          <p className="text-sm text-muted-foreground">
            Your message will be sent to our support team.
          </p>
        </div>
      </div>
      
      <button 
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
      >
        Send Message
      </button>
    </div>
  ),
}

export const DifferentSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="w-[300px]">
        <Label className="text-sm font-medium">Small (3 rows)</Label>
        <Textarea 
          rows={3}
          placeholder="Small textarea with 3 rows..."
          className="mt-2"
        />
      </div>
      
      <div className="w-[400px]">
        <Label className="text-sm font-medium">Medium (5 rows)</Label>
        <Textarea 
          rows={5}
          placeholder="Medium textarea with 5 rows..."
          className="mt-2"
        />
      </div>
      
      <div className="w-[500px]">
        <Label className="text-sm font-medium">Large (8 rows)</Label>
        <Textarea 
          rows={8}
          placeholder="Large textarea with 8 rows..."
          className="mt-2"
        />
      </div>
    </div>
  ),
}

export const WithError: Story = {
  render: () => (
    <div className="w-[400px] space-y-2">
      <Label htmlFor="error-textarea">Description</Label>
      <Textarea 
        id="error-textarea"
        placeholder="Enter a description..."
        className="border-destructive focus-visible:ring-destructive"
      />
      <p className="text-sm font-medium text-destructive">
        This field is required.
      </p>
    </div>
  ),
}

export const ReadOnly: Story = {
  render: () => (
    <div className="w-[400px] space-y-2">
      <Label htmlFor="readonly-textarea">Terms of Service</Label>
      <Textarea 
        id="readonly-textarea"
        readOnly
        rows={6}
        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        className="resize-none bg-muted"
      />
    </div>
  ),
}

export const CommentExample: Story = {
  render: () => (
    <div className="w-[600px] space-y-4 rounded-lg border p-4">
      <div className="flex items-start space-x-3">
        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-sm font-medium">JD</span>
        </div>
        <div className="flex-1 space-y-2">
          <div>
            <span className="text-sm font-medium">John Doe</span>
            <span className="text-sm text-muted-foreground ml-2">2 hours ago</span>
          </div>
          <p className="text-sm">
            This is a great feature! I've been waiting for something like this for a long time.
          </p>
        </div>
      </div>
      
      <div className="ml-11 space-y-2">
        <Label htmlFor="reply">Reply</Label>
        <Textarea 
          id="reply"
          placeholder="Write a reply..."
          rows={3}
        />
        <div className="flex justify-end space-x-2">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3">
            Cancel
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3">
            Reply
          </button>
        </div>
      </div>
    </div>
  ),
}

export const ResizeVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="w-[400px]">
        <Label className="text-sm font-medium">Default (resize both)</Label>
        <Textarea 
          placeholder="You can resize this textarea in both directions..."
          className="mt-2"
        />
      </div>
      
      <div className="w-[400px]">
        <Label className="text-sm font-medium">Resize vertical only</Label>
        <Textarea 
          placeholder="You can only resize this textarea vertically..."
          className="mt-2 resize-y"
        />
      </div>
      
      <div className="w-[400px]">
        <Label className="text-sm font-medium">No resize</Label>
        <Textarea 
          placeholder="This textarea cannot be resized..."
          className="mt-2 resize-none"
        />
      </div>
    </div>
  ),
}

export const WithCharacterCount: Story = {
  render: () => (
    <div className="w-[400px] space-y-2">
      <Label htmlFor="char-count-textarea">Bio</Label>
      <Textarea 
        id="char-count-textarea"
        placeholder="Tell us about yourself..."
        maxLength={500}
        rows={4}
      />
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>Maximum 500 characters</span>
        <span>0/500</span>
      </div>
    </div>
  ),
}