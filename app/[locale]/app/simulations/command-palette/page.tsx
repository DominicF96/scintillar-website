import React from "react";
import ContentContainer from "@/components/layout/containers/content-container";
import { Command, Search, Zap, Keyboard, Settings, Star } from "lucide-react";

async function CommandPaletteSimulationPage({ params }) {
  const { locale } = await params;
  
  return (
    <ContentContainer className="py-4 px-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Command className="h-6 w-6" />
          Command Palette Simulation
        </h2>
        <p className="text-muted-foreground">
          Explore command palette patterns and keyboard-driven interfaces.
        </p>
      </div>
      
      {/* Command Palette Features */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Core Features</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Search className="h-4 w-4 text-blue-500" />
              Fuzzy Search
            </h4>
            <p className="text-sm text-muted-foreground">
              Intelligent search that finds commands even with typos and partial matches.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Keyboard className="h-4 w-4 text-green-500" />
              Keyboard Navigation
            </h4>
            <p className="text-sm text-muted-foreground">
              Full keyboard control with arrow keys, enter, and escape shortcuts.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Zap className="h-4 w-4 text-yellow-500" />
              Quick Actions
            </h4>
            <p className="text-sm text-muted-foreground">
              Execute commands instantly without navigating through multiple menus.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Settings className="h-4 w-4 text-purple-500" />
              Contextual Commands
            </h4>
            <p className="text-sm text-muted-foreground">
              Show relevant commands based on current page and user permissions.
            </p>
          </div>
        </div>
      </div>

      {/* Command Categories */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Command Categories</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold mb-2">Navigation</h4>
            <p className="text-sm text-muted-foreground">
              Jump to any page or section instantly with "Go to..." commands.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold mb-2">Actions</h4>
            <p className="text-sm text-muted-foreground">
              Create, edit, delete, and manage content without clicking.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold mb-2">Settings</h4>
            <p className="text-sm text-muted-foreground">
              Change themes, preferences, and configuration options quickly.
            </p>
          </div>
        </div>
      </div>

      {/* UI Patterns */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Design Patterns</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-3 border rounded-lg bg-blue-50 dark:bg-blue-950/20">
            <h4 className="font-medium text-sm mb-1">Modal Overlay</h4>
            <p className="text-xs text-muted-foreground">
              Full-screen overlay with backdrop blur
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-green-50 dark:bg-green-950/20">
            <h4 className="font-medium text-sm mb-1">Grouped Results</h4>
            <p className="text-xs text-muted-foreground">
              Commands organized by category
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-purple-50 dark:bg-purple-950/20">
            <h4 className="font-medium text-sm mb-1">Keyboard Hints</h4>
            <p className="text-xs text-muted-foreground">
              Visual shortcuts and keyboard combinations
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-orange-50 dark:bg-orange-950/20">
            <h4 className="font-medium text-sm mb-1">Recent Commands</h4>
            <p className="text-xs text-muted-foreground">
              Quick access to frequently used actions
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-pink-50 dark:bg-pink-950/20">
            <h4 className="font-medium text-sm mb-1">Icons & Styling</h4>
            <p className="text-xs text-muted-foreground">
              Visual hierarchy with icons and typography
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-indigo-50 dark:bg-indigo-950/20">
            <h4 className="font-medium text-sm mb-1">Empty States</h4>
            <p className="text-xs text-muted-foreground">
              Helpful messages when no results found
            </p>
          </div>
        </div>
      </div>

      {/* Example Commands */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Example Commands</h3>
        <div className="space-y-2">
          <div className="p-3 border rounded-lg bg-muted/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Search className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Search documentation...</span>
            </div>
            <kbd className="px-2 py-1 bg-muted rounded text-xs">⌘K</kbd>
          </div>
          <div className="p-3 border rounded-lg bg-muted/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Star className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Toggle dark mode</span>
            </div>
            <kbd className="px-2 py-1 bg-muted rounded text-xs">⌘D</kbd>
          </div>
          <div className="p-3 border rounded-lg bg-muted/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Command className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Open settings</span>
            </div>
            <kbd className="px-2 py-1 bg-muted rounded text-xs">⌘,</kbd>
          </div>
        </div>
      </div>

      {/* Try It Now */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Try It Now</h3>
        <div className="p-4 border rounded-lg bg-primary/5">
          <p className="text-sm text-muted-foreground mb-3">
            Press <kbd className="px-2 py-1 bg-muted rounded text-xs">⌘K</kbd> (or <kbd className="px-2 py-1 bg-muted rounded text-xs">Ctrl+K</kbd>) to open the command palette and try it yourself!
          </p>
          <div className="text-xs text-muted-foreground">
            The command palette is already integrated into this application.
          </div>
        </div>
      </div>

      {/* Coming Soon */}
      <div className="p-4 border rounded-lg bg-primary/5">
        <h3 className="text-lg font-semibold mb-3">Advanced Command Palette Features</h3>
        <p className="text-sm text-muted-foreground mb-3">
          Custom command registration, AI-powered suggestions, and advanced keyboard shortcuts configuration.
        </p>
        <div className="text-xs text-muted-foreground">
          Coming Soon
        </div>
      </div>
    </ContentContainer>
  );
}

export default CommandPaletteSimulationPage;