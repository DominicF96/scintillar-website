#!/usr/bin/env ts-node

import fs from 'fs';
import path from 'path';

interface ComponentInfo {
  name: string;
  path: string;
  hasFolder: boolean;
  hasStory: boolean;
}

const srcDir = path.join(process.cwd(), 'src');

// Get all components
function getAllComponents(): ComponentInfo[] {
  const components: ComponentInfo[] = [];
  
  function walkDir(dir: string, category: string = '') {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        walkDir(itemPath, category);
      } else if (item.endsWith('.tsx') && !item.endsWith('.stories.tsx')) {
        const relativePath = path.relative(srcDir, itemPath);
        const componentName = path.basename(item, '.tsx');
        const hasFolder = fs.existsSync(path.join(path.dirname(itemPath), componentName));
        const hasStory = fs.existsSync(path.join(path.dirname(itemPath), `${componentName}.stories.tsx`));
        
        components.push({
          name: componentName,
          path: relativePath,
          hasFolder,
          hasStory
        });
      }
    }
  }
  
  walkDir(path.join(srcDir, 'components'));
  return components;
}

// Create basic story template
function createStoryTemplate(componentName: string, importPath: string, category: string): string {
  const capitalizedName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
  
  return `import type { Meta, StoryObj } from '@storybook/react';
import { ${capitalizedName} } from './${componentName}';

const meta: Meta<typeof ${capitalizedName}> = {
  title: '${category}/${capitalizedName}',
  component: ${capitalizedName},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Example: Story = {
  args: {},
  render: (args) => (
    <div className="p-4">
      <${capitalizedName} {...args}>
        Example content
      </${capitalizedName}>
    </div>
  ),
};
`;
}

// Get category from path
function getCategory(componentPath: string): string {
  const parts = componentPath.split('/');
  if (parts.includes('ui')) return 'UI';
  if (parts.includes('layout')) return 'Layout';
  if (parts.includes('features')) return 'Features';
  if (parts.includes('marketing')) return 'Marketing';
  if (parts.includes('forms')) return 'Forms';
  if (parts.includes('navigation')) return 'Navigation';
  if (parts.includes('feedback')) return 'Feedback';
  if (parts.includes('common')) return 'Common';
  return 'Components';
}

async function main() {
  const components = getAllComponents();
  
  console.log(`Found ${components.length} components`);
  console.log(`Components without folders: ${components.filter(c => !c.hasFolder).length}`);
  console.log(`Components without stories: ${components.filter(c => !c.hasStory).length}`);
  
  // List components that need work
  const needsWork = components.filter(c => !c.hasFolder || !c.hasStory);
  
  for (const component of needsWork) {
    console.log(`\\n${component.name}:`);
    console.log(`  Path: ${component.path}`);
    console.log(`  Has folder: ${component.hasFolder}`);
    console.log(`  Has story: ${component.hasStory}`);
    
    if (!component.hasFolder) {
      console.log(`  📁 Needs folder`);
    }
    if (!component.hasStory) {
      console.log(`  📖 Needs story`);
    }
  }
}

if (require.main === module) {
  main().catch(console.error);
}

export { getAllComponents, createStoryTemplate, getCategory };