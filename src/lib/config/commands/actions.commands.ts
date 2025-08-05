import { Command, commandRegistry } from "@/lib/services/command-registry";
import { Copy, ExternalLink, RefreshCw, Download } from "lucide-react";

export function registerActionCommands() {
  const commands: Command[] = [
    {
      id: "action-copy-url",
      label: "Copy Current URL",
      description: "Copy the current page URL to clipboard",
      keywords: ["link", "share", "clipboard", "copy", "url"],
      icon: Copy,
      action: async () => {
        try {
          await navigator.clipboard.writeText(window.location.href);
          // TODO: Show toast notification
        } catch (err) {
          console.error('Failed to copy URL:', err);
        }
      },
      group: "Actions",
      priority: 90,
      shortcut: ["⌘", "L"],
    },
    {
      id: "action-new-tab",
      label: "Open in New Tab",
      description: "Open current page in a new tab",
      keywords: ["tab", "window", "open", "new"],
      icon: ExternalLink,
      action: () => window.open(window.location.href, "_blank"),
      group: "Actions",
      priority: 80,
    },
    {
      id: "action-reload",
      label: "Reload Page",
      description: "Refresh the current page",
      keywords: ["refresh", "reload", "update"],
      icon: RefreshCw,
      action: () => window.location.reload(),
      group: "Actions",
      priority: 70,
      shortcut: ["⌘", "R"],
    },
    {
      id: "action-print",
      label: "Print Page",
      description: "Print the current page",
      keywords: ["print", "pdf"],
      icon: Download,
      action: () => window.print(),
      group: "Actions",
      priority: 60,
      shortcut: ["⌘", "P"],
    },
  ];

  // Register group
  commandRegistry.registerGroup({
    id: "Actions",
    label: "Actions",
    priority: 70,
  });

  // Register commands
  return commandRegistry.registerMany(commands);
}