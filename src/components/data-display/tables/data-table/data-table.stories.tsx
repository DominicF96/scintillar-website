import type { Meta, StoryObj } from '@storybook/react';

// Stub component for DataTable that has missing dependencies
const DataTableStub = () => (
  <div className="border rounded-lg p-8 text-center">
    <h3 className="text-lg font-semibold mb-2">Data Table Component</h3>
    <p className="text-muted-foreground mb-4">
      This component requires additional dependencies that are not yet available.
    </p>
    <div className="text-sm text-muted-foreground">
      <p>Missing dependencies:</p>
      <ul className="list-disc list-inside mt-2">
        <li>@tanstack/react-table</li>
        <li>DataTable UI component</li>
        <li>DataTableColumnHeader UI component</li>
        <li>DataTableRowActions UI component</li>
      </ul>
    </div>
  </div>
);

const meta: Meta<typeof DataTableStub> = {
  title: 'Data Display/DataTable',
  component: DataTableStub,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A complex data table component that requires additional setup and dependencies.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Placeholder: Story = {};

export const Documentation: Story = {
  render: () => (
    <div className="max-w-2xl space-y-4">
      <DataTableStub />
      <div className="bg-muted p-4 rounded-lg">
        <h4 className="font-semibold mb-2">To implement this component:</h4>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Install @tanstack/react-table</li>
          <li>Create base DataTable UI components</li>
          <li>Implement column header and row action components</li>
          <li>Add sorting, filtering, and pagination functionality</li>
        </ol>
      </div>
    </div>
  ),
};