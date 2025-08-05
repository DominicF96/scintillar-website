import type { Meta, StoryObj } from '@storybook/react';

// Mock the SimpleDataTableExample since it has external dependencies
const MockSimpleDataTableExample = () => (
  <div className="w-full">
    <h2 className="text-2xl font-bold mb-4">Simple Product Table</h2>
    <div className="border rounded-lg">
      <table className="w-full caption-bottom text-sm">
        <thead className="[&_tr]:border-b">
          <tr className="border-b transition-colors hover:bg-muted/50">
            <th className="h-12 px-4 text-left align-middle font-medium">Name</th>
            <th className="h-12 px-4 text-left align-middle font-medium">Price</th>
            <th className="h-12 px-4 text-left align-middle font-medium">Category</th>
            <th className="h-12 px-4 text-left align-middle font-medium">In Stock</th>
          </tr>
        </thead>
        <tbody className="[&_tr:last-child]:border-0">
          <tr className="border-b transition-colors hover:bg-muted/50">
            <td className="p-4 align-middle">Laptop</td>
            <td className="p-4 align-middle font-medium">$999.00</td>
            <td className="p-4 align-middle">Electronics</td>
            <td className="p-4 align-middle text-primary">Yes</td>
          </tr>
          <tr className="border-b transition-colors hover:bg-muted/50">
            <td className="p-4 align-middle">Phone</td>
            <td className="p-4 align-middle font-medium">$699.00</td>
            <td className="p-4 align-middle">Electronics</td>
            <td className="p-4 align-middle text-destructive">No</td>
          </tr>
          <tr className="border-b transition-colors hover:bg-muted/50">
            <td className="p-4 align-middle">Desk</td>
            <td className="p-4 align-middle font-medium">$299.00</td>
            <td className="p-4 align-middle">Furniture</td>
            <td className="p-4 align-middle text-primary">Yes</td>
          </tr>
          <tr className="border-b transition-colors hover:bg-muted/50">
            <td className="p-4 align-middle">Chair</td>
            <td className="p-4 align-middle font-medium">$199.00</td>
            <td className="p-4 align-middle">Furniture</td>
            <td className="p-4 align-middle text-primary">Yes</td>
          </tr>
          <tr>
            <td className="p-4 align-middle">Monitor</td>
            <td className="p-4 align-middle font-medium">$399.00</td>
            <td className="p-4 align-middle">Electronics</td>
            <td className="p-4 align-middle text-destructive">No</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const meta: Meta<typeof MockSimpleDataTableExample> = {
  title: 'Data Display/SimpleDataTable',
  component: MockSimpleDataTableExample,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const EmptyState: Story = {
  render: () => (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4">Simple Product Table</h2>
      <div className="border rounded-lg p-8 text-center">
        <p className="text-muted-foreground">No products found</p>
      </div>
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4">Simple Product Table</h2>
      <div className="border rounded-lg">
        <table className="w-full caption-bottom text-sm">
          <thead className="[&_tr]:border-b">
            <tr className="border-b transition-colors">
              <th className="h-12 px-4 text-left align-middle font-medium">Name</th>
              <th className="h-12 px-4 text-left align-middle font-medium">Price</th>
              <th className="h-12 px-4 text-left align-middle font-medium">Category</th>
              <th className="h-12 px-4 text-left align-middle font-medium">In Stock</th>
            </tr>
          </thead>
          <tbody className="[&_tr:last-child]:border-0">
            {[...Array(3)].map((_, i) => (
              <tr key={i} className="border-b transition-colors">
                <td className="p-4 align-middle">
                  <div className="h-4 bg-muted rounded animate-pulse"></div>
                </td>
                <td className="p-4 align-middle">
                  <div className="h-4 bg-muted rounded animate-pulse"></div>
                </td>
                <td className="p-4 align-middle">
                  <div className="h-4 bg-muted rounded animate-pulse"></div>
                </td>
                <td className="p-4 align-middle">
                  <div className="h-4 bg-muted rounded animate-pulse"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ),
};