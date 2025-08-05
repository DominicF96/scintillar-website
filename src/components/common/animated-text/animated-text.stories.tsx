import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import AnimatedText from './animated-text';

const meta: Meta<typeof AnimatedText> = {
  title: 'Common/AnimatedText',
  component: AnimatedText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
    },
    isVisible: {
      control: 'boolean',
    },
    animationDuration: {
      control: { type: 'range', min: 100, max: 2000, step: 100 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Welcome to Scintillar',
    isVisible: true,
    animationDuration: 300,
  },
};

export const Hidden: Story = {
  args: {
    text: 'This text is hidden',
    isVisible: false,
    animationDuration: 300,
  },
};

export const LongText: Story = {
  args: {
    text: 'Interactive cybersecurity simulation platform for advanced training',
    isVisible: true,
    animationDuration: 500,
  },
};

export const FastAnimation: Story = {
  args: {
    text: 'Fast animation',
    isVisible: true,
    animationDuration: 100,
  },
};

export const SlowAnimation: Story = {
  args: {
    text: 'Slow animation',
    isVisible: true,
    animationDuration: 1000,
  },
};

export const Interactive: Story = {
  render: () => {
    const [isVisible, setIsVisible] = useState(true);
    
    return (
      <div className="space-y-4">
        <div className="relative">
          <AnimatedText 
            text="Toggle me with the button below!"
            isVisible={isVisible}
            animationDuration={400}
          />
        </div>
        <Button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? 'Hide' : 'Show'} Text
        </Button>
      </div>
    );
  },
};