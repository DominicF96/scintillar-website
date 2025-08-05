import { type Meta, type StoryObj } from "@storybook/react";
import CommandPalette from "./command-palette";
import { useState } from "react";

// Note: Component should work without mocking these dependencies

// Mock command registry
const mockCommands = [
  {
    id: "nav-dashboard",
    label: "Go to Dashboard",
    description: "Navigate to the main dashboard",
    group: "Navigation",
    icon: { className: "h-4 w-4" }, // Mock icon
    action: () => console.log("Navigate to dashboard"),
    shortcut: ["g", "d"],
  },
  {
    id: "nav-settings",
    label: "Open Settings",
    description: "Access application settings",
    group: "Navigation",
    icon: { className: "h-4 w-4" },
    action: () => console.log("Navigate to settings"),
    shortcut: ["g", "s"],
  },
  {
    id: "nav-docs",
    label: "View Documentation",
    description: "Browse help documentation",
    group: "Navigation",
    icon: { className: "h-4 w-4" },
    action: () => console.log("Navigate to docs"),
    shortcut: ["g", "h"],
  },
  {
    id: "theme-light",
    label: "Light Theme",
    description: "Switch to light theme",
    group: "Appearance",
    icon: { className: "h-4 w-4" },
    action: () => console.log("Set light theme"),
  },
  {
    id: "theme-dark",
    label: "Dark Theme",
    description: "Switch to dark theme",
    group: "Appearance",
    icon: { className: "h-4 w-4" },
    action: () => console.log("Set dark theme"),
  },
  {
    id: "theme-system",
    label: "System Theme",
    description: "Use system theme preference",
    group: "Appearance",
    icon: { className: "h-4 w-4" },
    action: () => console.log("Set system theme"),
  },
  {
    id: "action-copy",
    label: "Copy Current URL",
    description: "Copy the current page URL to clipboard",
    group: "Actions",
    icon: { className: "h-4 w-4" },
    action: () => console.log("Copy URL"),
    shortcut: ["⌘", "u"],
  },
  {
    id: "action-refresh",
    label: "Refresh Page",
    description: "Reload the current page",
    group: "Actions",
    icon: { className: "h-4 w-4" },
    action: () => console.log("Refresh page"),
    shortcut: ["⌘", "r"],
  },
];

// Note: Using mock data directly instead of mocking the command registry

const meta: Meta<typeof CommandPalette> = {
  title: "Navigation/CommandPalette",
  component: CommandPalette,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "A command palette component that provides quick access to application actions via keyboard shortcuts. Features search, command grouping, and keyboard navigation. Activated with Cmd/Ctrl+K.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive demo with instructions
export const Default: Story = {
  name: "Command Palette Demo",
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Command Palette Demo</h1>
            <p className="text-muted-foreground">
              The command palette provides quick access to application actions and navigation.
            </p>
          </div>
          
          <div className="p-6 border rounded-lg space-y-4">
            <h2 className="text-xl font-semibold">How to Use</h2>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3">
                <kbd className="px-2 py-1 bg-muted rounded text-xs">⌘K</kbd>
                <span>Open command palette (Cmd+K on Mac, Ctrl+K on Windows/Linux)</span>
              </div>
              <div className="flex items-center gap-3">
                <kbd className="px-2 py-1 bg-muted rounded text-xs">↑↓</kbd>
                <span>Navigate between commands</span>
              </div>
              <div className="flex items-center gap-3">
                <kbd className="px-2 py-1 bg-muted rounded text-xs">Enter</kbd>
                <span>Execute selected command</span>
              </div>
              <div className="flex items-center gap-3">
                <kbd className="px-2 py-1 bg-muted rounded text-xs">Esc</kbd>
                <span>Close command palette</span>
              </div>
            </div>
          </div>
          
          <div className="p-6 border rounded-lg space-y-4">
            <h2 className="text-xl font-semibold">Available Commands</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-medium mb-2 text-primary">Navigation</h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Go to Dashboard (g+d)</li>
                  <li>• Open Settings (g+s)</li>
                  <li>• View Documentation (g+h)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2 text-secondary-foreground">Appearance</h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Light Theme</li>
                  <li>• Dark Theme</li>
                  <li>• System Theme</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2 text-accent-foreground">Actions</h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Copy Current URL (⌘+u)</li>
                  <li>• Refresh Page (⌘+r)</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
              onClick={() => {
                // Simulate keyboard shortcut
                const event = new KeyboardEvent('keydown', {
                  key: 'k',
                  metaKey: true,
                  ctrlKey: true,
                });
                document.dispatchEvent(event);
              }}
            >
              Open Command Palette (⌘K)
            </button>
          </div>
        </div>
        
        {/* Command Palette Component */}
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Interactive demonstration of the command palette with instructions and sample commands. Click the button or use Cmd/Ctrl+K to open.",
      },
    },
  },
};

// Dark theme showcase
export const DarkTheme: Story = {
  name: "Dark Theme",
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-background p-8">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Command Palette - Dark Theme</h2>
          <p className="text-muted-foreground">
            Command palette appearance in dark mode with theme-aware styling.
          </p>
          <button 
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
            onClick={() => {
              const event = new KeyboardEvent('keydown', {
                key: 'k',
                metaKey: true,
              });
              document.dispatchEvent(event);
            }}
          >
            Open Command Palette
          </button>
        </div>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Command palette with dark theme styling showing how the dialog and commands adapt to dark backgrounds.",
      },
    },
  },
};

// Search functionality showcase
export const SearchShowcase: Story = {
  name: "Search Functionality",
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Command Search Demo</h2>
            <p className="text-muted-foreground">
              Demonstrates the powerful search functionality within the command palette.
            </p>
          </div>
          
          <div className="p-6 border rounded-lg space-y-4">
            <h3 className="text-lg font-semibold">Try Searching For:</h3>
            <div className="grid gap-2 md:grid-cols-2">
              <div className="p-3 bg-muted/50 rounded">
                <code className="text-sm">"dashboard"</code>
                <p className="text-xs text-muted-foreground mt-1">Find navigation commands</p>
              </div>
              <div className="p-3 bg-muted/50 rounded">
                <code className="text-sm">"theme"</code>
                <p className="text-xs text-muted-foreground mt-1">Find appearance settings</p>
              </div>
              <div className="p-3 bg-muted/50 rounded">
                <code className="text-sm">"copy"</code>
                <p className="text-xs text-muted-foreground mt-1">Find copy actions</p>
              </div>
              <div className="p-3 bg-muted/50 rounded">
                <code className="text-sm">"settings"</code>
                <p className="text-xs text-muted-foreground mt-1">Find configuration options</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
              onClick={() => {
                const event = new KeyboardEvent('keydown', {
                  key: 'k',
                  metaKey: true,
                });
                document.dispatchEvent(event);
              }}
            >
              Open Command Palette to Test Search
            </button>
          </div>
        </div>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Command palette demonstrating search functionality with suggestions for different search terms.",
      },
    },
  },
};

// Keyboard shortcuts showcase 
export const KeyboardShortcuts: Story = {
  name: "Keyboard Shortcuts",
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Keyboard Shortcuts</h2>
            <p className="text-muted-foreground">
              Many commands have dedicated keyboard shortcuts for quick access.
            </p>
          </div>
          
          <div className="p-6 border rounded-lg space-y-4">
            <h3 className="text-lg font-semibold">Available Shortcuts</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Open Command Palette</span>
                <div className="flex gap-1">
                  <kbd className="px-2 py-1 bg-muted rounded text-xs">⌘</kbd>
                  <kbd className="px-2 py-1 bg-muted rounded text-xs">K</kbd>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Go to Dashboard</span>
                <div className="flex gap-1">
                  <kbd className="px-2 py-1 bg-muted rounded text-xs">G</kbd>
                  <kbd className="px-2 py-1 bg-muted rounded text-xs">D</kbd>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Open Settings</span>
                <div className="flex gap-1">
                  <kbd className="px-2 py-1 bg-muted rounded text-xs">G</kbd>
                  <kbd className="px-2 py-1 bg-muted rounded text-xs">S</kbd>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Copy Current URL</span>
                <div className="flex gap-1">
                  <kbd className="px-2 py-1 bg-muted rounded text-xs">⌘</kbd>
                  <kbd className="px-2 py-1 bg-muted rounded text-xs">U</kbd>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
              onClick={() => {
                const event = new KeyboardEvent('keydown', {
                  key: 'k',
                  metaKey: true,
                });
                document.dispatchEvent(event);
              }}
            >
              Try Command Palette
            </button>
          </div>
        </div>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Command palette showcasing keyboard shortcuts and their visual representation within commands.",
      },
    },
  },
};

// Mobile responsive note
export const MobileNote: Story = {
  name: "Mobile Considerations",
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-md mx-auto space-y-6">
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">Mobile Usage</h2>
            <p className="text-muted-foreground text-sm">
              The command palette is primarily designed for desktop use with keyboard shortcuts.
            </p>
          </div>
          
          <div className="p-4 border rounded-lg space-y-3">
            <h3 className="font-semibold">Mobile Adaptations</h3>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>• Touch-friendly command selection</li>
              <li>• On-screen keyboard support</li>
              <li>• Responsive dialog sizing</li>
              <li>• Alternative access methods</li>
            </ul>
          </div>
          
          <div className="text-center">
            <button 
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm"
              onClick={() => {
                const event = new KeyboardEvent('keydown', {
                  key: 'k',
                  metaKey: true,
                });
                document.dispatchEvent(event);
              }}
            >
              Open Command Palette
            </button>
          </div>
        </div>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Command palette on mobile devices showing responsive behavior and touch adaptations.",
      },
    },
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

// Accessibility showcase
export const AccessibilityShowcase: Story = {
  name: "Accessibility Features",
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Accessibility Features</h2>
            <p className="text-muted-foreground">
              The command palette is built with accessibility in mind.
            </p>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Keyboard Navigation</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Arrow keys for navigation</li>
                <li>• Enter to execute commands</li>
                <li>• Escape to close</li>
                <li>• Tab for focus management</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Screen Reader Support</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Proper ARIA labels</li>
                <li>• Command announcements</li>
                <li>• Group descriptions</li>
                <li>• Status updates</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
              onClick={() => {
                const event = new KeyboardEvent('keydown', {
                  key: 'k',
                  metaKey: true,
                });
                document.dispatchEvent(event);
              }}
            >
              Test Accessibility Features
            </button>
          </div>
        </div>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Command palette demonstrating accessibility features including keyboard navigation and screen reader support.",
      },
    },
  },
};