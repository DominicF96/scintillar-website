import { Command, commandRegistry } from "@/lib/services/command-registry";
import { Moon, Sun, Palette } from "lucide-react";

export function registerThemeCommands(setTheme: (theme: string) => void) {
  const commands: Command[] = [
    {
      id: "theme-light",
      label: "Switch to Light Theme",
      description: "Change to light mode",
      keywords: ["bright", "day", "white", "light", "theme"],
      icon: Sun,
      action: () => setTheme("light"),
      group: "Appearance",
      priority: 90,
    },
    {
      id: "theme-dark",
      label: "Switch to Dark Theme", 
      description: "Change to dark mode",
      keywords: ["night", "black", "dark", "theme"],
      icon: Moon,
      action: () => setTheme("dark"),
      group: "Appearance",
      priority: 100,
    },
    {
      id: "theme-system",
      label: "Use System Theme",
      description: "Follow system preference",
      keywords: ["auto", "automatic", "os", "system", "theme"],
      icon: Palette,
      action: () => setTheme("system"),
      group: "Appearance",
      priority: 80,
    },
  ];

  // Register group
  commandRegistry.registerGroup({
    id: "Appearance",
    label: "Appearance",
    priority: 80,
  });

  // Register commands
  return commandRegistry.registerMany(commands);
}