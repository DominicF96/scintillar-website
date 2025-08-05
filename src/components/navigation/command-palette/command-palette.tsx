"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Search } from "lucide-react";
import { useTheme } from "next-themes";
import { Badge } from "@/components/ui/badge";
import { useCommandRegistry } from "@/lib/services/command-registry";
import { registerNavigationCommands } from "@/lib/config/commands/navigation.commands";
import { registerThemeCommands } from "@/lib/config/commands/theme.commands";
import { registerActionCommands } from "@/lib/config/commands/actions.commands";
import { useLocale } from "@/providers/locale.context";

export default function CommandPalette() {
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const { setTheme } = useTheme();
  const { search: searchCommands, commandsByGroup } = useCommandRegistry();

  // Register commands on mount
  useEffect(() => {
    const unregisterNavigation = registerNavigationCommands(locale, router);
    const unregisterTheme = registerThemeCommands(setTheme);
    const unregisterActions = registerActionCommands();

    return () => {
      unregisterNavigation();
      unregisterTheme();
      unregisterActions();
    };
  }, [locale, router, setTheme]);

  // Global keyboard shortcut
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Get filtered commands
  const filteredCommands = searchCommands(search);
  
  // Group filtered commands
  const groupedCommands = React.useMemo(() => {
    const groups: Record<string, typeof filteredCommands> = {};
    
    filteredCommands.forEach((command) => {
      if (!groups[command.group]) {
        groups[command.group] = [];
      }
      groups[command.group].push(command);
    });
    
    return groups;
  }, [filteredCommands]);

  const handleSelect = async (command: any) => {
    setOpen(false);
    await command.action();
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput 
        placeholder="Type a command or search..." 
        value={search}
        onValueChange={setSearch}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        
        {Object.entries(groupedCommands).map(([group, commands], index) => (
          <React.Fragment key={group}>
            {index > 0 && <CommandSeparator />}
            <CommandGroup heading={group}>
              {commands.map((command) => (
                <CommandItem
                  key={command.id}
                  onSelect={() => handleSelect(command)}
                  className="flex items-center gap-2 px-2 py-1.5"
                >
                  {command.icon && (
                    <command.icon className="h-4 w-4 text-muted-foreground" />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="font-medium">{command.label}</div>
                    {command.description && (
                      <div className="text-xs text-muted-foreground truncate">
                        {command.description}
                      </div>
                    )}
                  </div>
                  {command.shortcut && (
                    <div className="flex gap-1">
                      {command.shortcut.map((key) => (
                        <Badge key={key} variant="outline" className="text-xs px-1 py-0">
                          {key}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          </React.Fragment>
        ))}
        
        {filteredCommands.length === 0 && search && (
          <CommandGroup>
            <CommandItem disabled>
              <Search className="h-4 w-4 mr-2 text-muted-foreground" />
              <span className="text-muted-foreground">
                No commands found for "{search}"
              </span>
            </CommandItem>
          </CommandGroup>
        )}
      </CommandList>
    </CommandDialog>
  );
}