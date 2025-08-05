import type { Meta, StoryObj } from '@storybook/react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from './table';

const meta: Meta<typeof Table> = {
  title: 'UI/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>A list of your recent simulations.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Simulation</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Score</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">SIM001</TableCell>
          <TableCell>Network Penetration</TableCell>
          <TableCell>Completed</TableCell>
          <TableCell className="text-right">95%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">SIM002</TableCell>
          <TableCell>Social Engineering</TableCell>
          <TableCell>In Progress</TableCell>
          <TableCell className="text-right">-</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">SIM003</TableCell>
          <TableCell>Web Application Security</TableCell>
          <TableCell>Completed</TableCell>
          <TableCell className="text-right">87%</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>User</TableHead>
          <TableHead>Simulations</TableHead>
          <TableHead>Score</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Alice Johnson</TableCell>
          <TableCell>12</TableCell>
          <TableCell>892</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob Smith</TableCell>
          <TableCell>8</TableCell>
          <TableCell>745</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Charlie Brown</TableCell>
          <TableCell>15</TableCell>
          <TableCell>1023</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell>2660</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

export const SimpleData: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Layer</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Digital Layer</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Social Layer</TableCell>
          <TableCell>Inactive</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Finance Layer</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};