import type { Meta, StoryObj } from '@storybook/react';
import { Shield, Zap, Globe, Users, Lock, Target } from 'lucide-react';
import FeatureAvatar from './feature-avatar';

const meta: Meta<typeof FeatureAvatar> = {
  title: 'Marketing/FeatureAvatar',
  component: FeatureAvatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Security: Story = {
  args: {
    icon: Shield,
  },
};

export const Performance: Story = {
  args: {
    icon: Zap,
  },
};

export const Global: Story = {
  args: {
    icon: Globe,
  },
};

export const Collaboration: Story = {
  args: {
    icon: Users,
  },
};

export const Privacy: Story = {
  args: {
    icon: Lock,
  },
};

export const Precision: Story = {
  args: {
    icon: Target,
  },
};

export const FeatureGrid: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-8 p-8">
      <div className="text-center">
        <FeatureAvatar icon={Shield} />
        <h3 className="mt-4 text-lg font-semibold">Security First</h3>
        <p className="text-sm text-muted-foreground">Enterprise-grade security</p>
      </div>
      <div className="text-center">
        <FeatureAvatar icon={Zap} />
        <h3 className="mt-4 text-lg font-semibold">Lightning Fast</h3>
        <p className="text-sm text-muted-foreground">Optimized performance</p>
      </div>
      <div className="text-center">
        <FeatureAvatar icon={Globe} />
        <h3 className="mt-4 text-lg font-semibold">Global Scale</h3>
        <p className="text-sm text-muted-foreground">Worldwide accessibility</p>
      </div>
      <div className="text-center">
        <FeatureAvatar icon={Users} />
        <h3 className="mt-4 text-lg font-semibold">Team Collaboration</h3>
        <p className="text-sm text-muted-foreground">Work together seamlessly</p>
      </div>
      <div className="text-center">
        <FeatureAvatar icon={Lock} />
        <h3 className="mt-4 text-lg font-semibold">Privacy Protected</h3>
        <p className="text-sm text-muted-foreground">Your data stays secure</p>
      </div>
      <div className="text-center">
        <FeatureAvatar icon={Target} />
        <h3 className="mt-4 text-lg font-semibold">Precise Targeting</h3>
        <p className="text-sm text-muted-foreground">Hit your goals exactly</p>
      </div>
    </div>
  ),
};