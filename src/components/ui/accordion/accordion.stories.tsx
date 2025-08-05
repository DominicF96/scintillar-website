import type { Meta, StoryObj } from '@storybook/react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './accordion';

const meta: Meta<typeof Accordion> = {
  title: 'UI/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'single',
    collapsible: true,
  },
  render: (args) => (
    <div className="w-96">
      <Accordion {...args}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern and uses semantic HTML.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that match the other components' aesthetics.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const Multiple: Story = {
  args: {
    type: 'multiple',
  },
  render: (args) => (
    <div className="w-96">
      <Accordion {...args}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Getting Started</AccordionTrigger>
          <AccordionContent>
            Learn the basics of using our component library with this comprehensive guide.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Advanced Usage</AccordionTrigger>
          <AccordionContent>
            Discover advanced patterns and customization options for power users.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>API Reference</AccordionTrigger>
          <AccordionContent>
            Complete API documentation with examples and TypeScript definitions.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const Single: Story = {
  args: {
    type: 'single',
    collapsible: true,
    defaultValue: 'item-2',
  },
  render: (args) => (
    <div className="w-96">
      <Accordion {...args}>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is Scintillar?</AccordionTrigger>
          <AccordionContent>
            Scintillar is a framework for interactive hacking games, providing tools for visualization and manipulation.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do I get started?</AccordionTrigger>
          <AccordionContent>
            Start by exploring our documentation and trying out the interactive examples in our playground.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};