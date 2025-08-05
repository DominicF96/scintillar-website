import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Switch } from './switch'
import { Label } from '../label/label'

const meta = {
  title: 'UI/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    checked: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Checked: Story = {
  args: {
    checked: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
  },
}

// Wrapper component to handle state in stories
const SwitchWrapper = ({ 
  initialChecked = false, 
  disabled = false,
  label
}: { 
  initialChecked?: boolean, 
  disabled?: boolean,
  label?: string
}) => {
  const [checked, setChecked] = useState(initialChecked)
  
  return (
    <div className="flex items-center space-x-2">
      <Switch 
        id="switch" 
        checked={checked} 
        onCheckedChange={setChecked} 
        disabled={disabled}
      />
      {label && <Label htmlFor="switch">{label}</Label>}
    </div>
  )
}

export const WithLabel: Story = {
  render: () => (
    <SwitchWrapper label="Enable notifications" />
  ),
}

export const Interactive: Story = {
  render: () => (
    <div className="space-y-4">
      <SwitchWrapper label="Enable notifications" />
      <SwitchWrapper label="Auto-save" initialChecked />
      <SwitchWrapper label="Dark mode" />
    </div>
  ),
}

export const SettingsPanel: Story = {
  render: () => (
    <div className="w-[350px] space-y-6 rounded-lg border p-6">
      <div>
        <h3 className="text-lg font-semibold">Settings</h3>
        <p className="text-sm text-muted-foreground">
          Manage your account preferences.
        </p>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label className="text-base">Email notifications</Label>
            <p className="text-sm text-muted-foreground">
              Receive emails about your account activity.
            </p>
          </div>
          <Switch />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label className="text-base">Marketing emails</Label>
            <p className="text-sm text-muted-foreground">
              Receive emails about new products and features.
            </p>
          </div>
          <Switch />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label className="text-base">Social media</Label>
            <p className="text-sm text-muted-foreground">
              Allow us to contact you via social media.
            </p>
          </div>
          <Switch disabled />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label className="text-base">Security emails</Label>
            <p className="text-sm text-muted-foreground">
              Receive emails about your account security.
            </p>
          </div>
          <Switch checked disabled />
        </div>
      </div>
    </div>
  ),
}

export const FormExample: Story = {
  render: () => (
    <form className="w-[400px] space-y-6 rounded-lg border p-6">
      <div>
        <h3 className="text-lg font-semibold">Privacy Settings</h3>
        <p className="text-sm text-muted-foreground">
          Control how your information is shared.
        </p>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="public-profile" className="text-base">
              Public profile
            </Label>
            <p className="text-sm text-muted-foreground">
              Make your profile visible to everyone.
            </p>
          </div>
          <Switch id="public-profile" />
        </div>
        
        <div className="flex items-start justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="search-indexing" className="text-base">
              Search engine indexing
            </Label>
            <p className="text-sm text-muted-foreground">
              Allow search engines to index your profile.
            </p>
          </div>
          <Switch id="search-indexing" />
        </div>
        
        <div className="flex items-start justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="analytics" className="text-base">
              Analytics
            </Label>
            <p className="text-sm text-muted-foreground">
              Help us improve by sharing usage data.
            </p>
          </div>
          <Switch id="analytics" defaultChecked />
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
          Save changes
        </button>
      </div>
    </form>
  ),
}

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <Switch />
        <span className="text-sm">Unchecked</span>
      </div>
      
      <div className="flex items-center space-x-4">
        <Switch checked />
        <span className="text-sm">Checked</span>
      </div>
      
      <div className="flex items-center space-x-4">
        <Switch disabled />
        <span className="text-sm text-muted-foreground">Disabled (unchecked)</span>
      </div>
      
      <div className="flex items-center space-x-4">
        <Switch checked disabled />
        <span className="text-sm text-muted-foreground">Disabled (checked)</span>
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <Switch className="h-4 w-7" />
        <span className="text-sm">Small</span>
      </div>
      
      <div className="flex items-center space-x-4">
        <Switch />
        <span className="text-sm">Default</span>
      </div>
      
      <div className="flex items-center space-x-4">
        <Switch className="h-6 w-11" />
        <span className="text-sm">Large</span>
      </div>
    </div>
  ),
}