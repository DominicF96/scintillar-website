import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button/button';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the card content area where you can place any content.</p>
      </CardContent>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Scintillar Platform</CardTitle>
        <CardDescription>Interactive hacking simulation environment</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Experience realistic cybersecurity scenarios in a safe, controlled environment designed for learning and training.</p>
      </CardContent>
      <CardFooter>
        <Button>Get Started</Button>
      </CardFooter>
    </Card>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card className="w-96">
      <CardContent className="pt-6">
        <p>A simple card with just content.</p>
      </CardContent>
    </Card>
  ),
};

export const NotificationCard: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium">New Simulation Available</CardTitle>
      </CardHeader>
      <CardContent className="pb-3">
        <p className="text-sm text-muted-foreground">
          A new network penetration testing scenario has been added to the platform.
        </p>
      </CardContent>
      <CardFooter className="pt-0">
        <Button size="sm" className="w-full">
          Start Simulation
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const StatsCard: Story = {
  render: () => (
    <Card className="w-64">
      <CardHeader className="pb-2">
        <CardDescription>Active Simulations</CardDescription>
        <CardTitle className="text-4xl">1,234</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-muted-foreground">
          +20.1% from last month
        </p>
      </CardContent>
    </Card>
  ),
};