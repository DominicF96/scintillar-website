import React from "react";
import { LucideIcon } from "lucide-react";

export interface Command {
  id: string;
  label: string;
  description?: string;
  keywords?: string[];
  icon?: LucideIcon;
  action: () => void | Promise<void>;
  group: string;
  shortcut?: string[];
  priority?: number; // Higher priority = shown first
  condition?: () => boolean; // When to show this command
}

export interface CommandGroup {
  id: string;
  label: string;
  priority?: number;
}

class CommandRegistry {
  private commands: Map<string, Command> = new Map();
  private groups: Map<string, CommandGroup> = new Map();
  private listeners: Set<() => void> = new Set();

  // Register a single command
  register(command: Command): () => void {
    this.commands.set(command.id, command);
    this.notifyListeners();
    
    // Return unregister function
    return () => {
      this.commands.delete(command.id);
      this.notifyListeners();
    };
  }

  // Register multiple commands at once
  registerMany(commands: Command[]): () => void {
    const unregisterFns = commands.map(cmd => this.register(cmd));
    
    return () => {
      unregisterFns.forEach(fn => fn());
    };
  }

  // Register a command group
  registerGroup(group: CommandGroup): () => void {
    this.groups.set(group.id, group);
    this.notifyListeners();
    
    return () => {
      this.groups.delete(group.id);
      this.notifyListeners();
    };
  }

  // Get all commands (filtered by condition)
  getCommands(): Command[] {
    return Array.from(this.commands.values())
      .filter(cmd => !cmd.condition || cmd.condition())
      .sort((a, b) => (b.priority || 0) - (a.priority || 0));
  }

  // Get commands by group
  getCommandsByGroup(): Record<string, Command[]> {
    const commands = this.getCommands();
    const grouped: Record<string, Command[]> = {};
    
    commands.forEach(cmd => {
      if (!grouped[cmd.group]) {
        grouped[cmd.group] = [];
      }
      grouped[cmd.group].push(cmd);
    });
    
    // Sort groups by priority
    const sortedGroups: Record<string, Command[]> = {};
    const groupEntries = Object.entries(grouped).sort(([a], [b]) => {
      const groupA = this.groups.get(a);
      const groupB = this.groups.get(b);
      return (groupB?.priority || 0) - (groupA?.priority || 0);
    });
    
    groupEntries.forEach(([group, commands]) => {
      sortedGroups[group] = commands;
    });
    
    return sortedGroups;
  }

  // Search commands
  search(query: string): Command[] {
    if (!query.trim()) return this.getCommands();
    
    const searchLower = query.toLowerCase();
    
    return this.getCommands().filter(command => {
      const matchesLabel = command.label.toLowerCase().includes(searchLower);
      const matchesDescription = command.description?.toLowerCase().includes(searchLower);
      const matchesKeywords = command.keywords?.some(keyword => 
        keyword.toLowerCase().includes(searchLower)
      );
      
      return matchesLabel || matchesDescription || matchesKeywords;
    });
  }

  // Get command by ID
  getCommand(id: string): Command | undefined {
    return this.commands.get(id);
  }

  // Execute command by ID
  async executeCommand(id: string): Promise<boolean> {
    const command = this.commands.get(id);
    if (!command) return false;
    
    try {
      await command.action();
      return true;
    } catch (error) {
      console.error(`Failed to execute command ${id}:`, error);
      return false;
    }
  }

  // Subscribe to registry changes
  subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notifyListeners(): void {
    this.listeners.forEach(listener => listener());
  }

  // Clear all commands (useful for testing)
  clear(): void {
    this.commands.clear();
    this.groups.clear();
    this.notifyListeners();
  }
}

// Global registry instance
export const commandRegistry = new CommandRegistry();

// Hook for React components
export function useCommandRegistry() {
  const [, forceUpdate] = React.useReducer(x => x + 1, 0);
  
  React.useEffect(() => {
    return commandRegistry.subscribe(() => {
      forceUpdate();
    });
  }, []);
  
  return {
    commands: commandRegistry.getCommands(),
    commandsByGroup: commandRegistry.getCommandsByGroup(),
    search: (query: string) => commandRegistry.search(query),
    executeCommand: (id: string) => commandRegistry.executeCommand(id),
  };
}