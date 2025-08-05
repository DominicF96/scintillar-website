import type { Meta, StoryObj } from '@storybook/react'
import { Label } from './label'
import { Input } from '../input/input'
import { Textarea } from '../textarea/textarea'
import { Checkbox } from '../checkbox/checkbox'
import { Switch } from '../switch/switch'

const meta = {
  title: 'UI/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    htmlFor: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Your label',
  },
}

export const WithInput: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  ),
}

export const WithTextarea: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  ),
}

export const WithCheckbox: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </Label>
    </div>
  ),
}

export const WithSwitch: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
}

export const Required: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="username">
        Username <span className="text-destructive">*</span>
      </Label>
      <Input id="username" placeholder="Username" />
    </div>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" />
      <p className="text-sm text-muted-foreground">
        Your password must be at least 8 characters.
      </p>
    </div>
  ),
}

export const ErrorState: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="username-error" className="text-destructive">
        Username
      </Label>
      <Input 
        id="username-error" 
        placeholder="Username" 
        className="border-destructive focus-visible:ring-destructive"
      />
      <p className="text-sm font-medium text-destructive">
        This username is already taken.
      </p>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="disabled-input" className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Disabled Field
      </Label>
      <Input id="disabled-input" placeholder="Disabled input" disabled />
    </div>
  ),
}

export const FormExample: Story = {
  render: () => (
    <form className="w-[400px] space-y-6 rounded-lg border p-6">
      <div>
        <h3 className="text-lg font-semibold">User Information</h3>
        <p className="text-sm text-muted-foreground">
          Please fill out your personal details.
        </p>
      </div>
      
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="first-name">
              First name <span className="text-destructive">*</span>
            </Label>
            <Input id="first-name" placeholder="John" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">
              Last name <span className="text-destructive">*</span>
            </Label>
            <Input id="last-name" placeholder="Doe" />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="form-email">
            Email address <span className="text-destructive">*</span>
          </Label>
          <Input id="form-email" type="email" placeholder="john.doe@example.com" />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Phone number</Label>
          <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
          <p className="text-sm text-muted-foreground">
            Optional. We'll only use this for important account notifications.
          </p>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea id="bio" placeholder="Tell us about yourself..." rows={3} />
        </div>
        
        <div className="space-y-3">
          <Label>Preferences</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="newsletter" />
              <Label htmlFor="newsletter" className="text-sm font-normal">
                Subscribe to newsletter
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="marketing" />
              <Label htmlFor="marketing" className="text-sm font-normal">
                Receive marketing emails
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="updates" defaultChecked />
              <Label htmlFor="updates" className="text-sm font-normal">
                Product updates (recommended)
              </Label>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end space-x-2">
        <button 
          type="button"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
        >
          Cancel
        </button>
        <button 
          type="submit"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Save Changes
        </button>
      </div>
    </form>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label className="text-xs">Extra Small Label</Label>
        <Input placeholder="Input with xs label" />
      </div>
      
      <div className="space-y-2">
        <Label className="text-sm">Small Label (Default)</Label>
        <Input placeholder="Input with sm label" />
      </div>
      
      <div className="space-y-2">
        <Label className="text-base">Base Label</Label>
        <Input placeholder="Input with base label" />
      </div>
      
      <div className="space-y-2">
        <Label className="text-lg">Large Label</Label>
        <Input placeholder="Input with lg label" />
      </div>
    </div>
  ),
}

export const Variations: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label className="font-normal">Normal Weight</Label>
        <Input placeholder="Normal weight label" />
      </div>
      
      <div className="space-y-2">
        <Label className="font-medium">Medium Weight (Default)</Label>
        <Input placeholder="Medium weight label" />
      </div>
      
      <div className="space-y-2">
        <Label className="font-semibold">Semibold Weight</Label>
        <Input placeholder="Semibold weight label" />
      </div>
      
      <div className="space-y-2">
        <Label className="font-bold">Bold Weight</Label>
        <Input placeholder="Bold weight label" />
      </div>
      
      <div className="space-y-2">
        <Label className="text-muted-foreground">Muted Color</Label>
        <Input placeholder="Muted color label" />
      </div>
      
      <div className="space-y-2">
        <Label className="text-primary">Primary Color</Label>
        <Input placeholder="Primary color label" />
      </div>
    </div>
  ),
}