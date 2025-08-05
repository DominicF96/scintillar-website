import { Command, commandRegistry } from "@/lib/services/command-registry";
import { navigationStructure } from "@/constants/navigation";

export function registerNavigationCommands(locale: string, router: any) {
  const commands: Command[] = [];

  // Generate commands for main sections
  navigationStructure.forEach((section, index) => {
    commands.push({
      id: `nav-${section.id}`,
      label: `Go to ${section.label}`,
      description: `Navigate to the ${section.label.toLowerCase()} section`,
      keywords: [section.label.toLowerCase(), section.id],
      icon: section.icon,
      action: () => router.push(`/${locale}${section.href || "/app"}`),
      group: "Navigation",
      priority: 100 - (index * 10),
    });

    // Generate commands for subsections with href
    const addItemCommands = (items: any[], parentLabel = "") => {
      items.forEach((item) => {
        if (item.href) {
          const fullLabel = parentLabel ? `${parentLabel} - ${item.label}` : item.label;
          commands.push({
            id: `nav-${section.id}-${item.id}`,
            label: `Go to ${fullLabel}`,
            description: `Navigate to ${fullLabel.toLowerCase()}`,
            keywords: [item.label.toLowerCase(), item.id, section.label.toLowerCase()],
            icon: item.icon,
            action: () => router.push(`/${locale}${item.href}`),
            group: "Navigation",
            priority: 50 - (index * 5),
          });
        }
        
        // Recursively add child commands
        if (item.children) {
          addItemCommands(item.children, item.label);
        }
      });
    };

    addItemCommands(section.children);
  });

  // Register group
  commandRegistry.registerGroup({
    id: "Navigation",
    label: "Navigation",
    priority: 100,
  });

  // Register commands
  return commandRegistry.registerMany(commands);
}