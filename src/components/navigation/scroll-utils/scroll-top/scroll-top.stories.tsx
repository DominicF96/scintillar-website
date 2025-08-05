import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import ScrollTop from './scroll-top';

const meta: Meta<typeof ScrollTop> = {
  title: 'Navigation/ScrollTop',
  component: ScrollTop,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A utility component that automatically scrolls to the top of the page when mounted. Useful for navigation between pages to ensure users start at the top.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div>
      <ScrollTop />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Scroll Top Component Demo</h2>
        <p className="text-muted-foreground">
          This component automatically scrolls to the top when mounted. 
          It renders nothing visually but performs the scroll action on mount.
        </p>
      </div>
    </div>
  ),
};

export const WithLongContent: Story = {
  render: () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    
    useEffect(() => {
      // Simulate scrolling down first
      window.scrollTo(0, 1000);
      
      const timer = setTimeout(() => {
        setShowScrollTop(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }, []);
    
    return (
      <div>
        {showScrollTop && <ScrollTop />}
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Long Content Demo</h2>
          <p className="text-muted-foreground mb-4">
            This page starts scrolled down, then ScrollTop is mounted after 1 second.
          </p>
          
          {/* Generate long content */}
          {Array.from({ length: 50 }, (_, i) => (
            <div key={i} className="mb-4 p-4 border rounded">
              <h3 className="font-semibold">Section {i + 1}</h3>
              <p className="text-muted-foreground">
                This is content section {i + 1}. Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const UsageExample: Story = {
  render: () => (
    <div className="p-4">
      <ScrollTop />
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Usage Example</h2>
        <div className="bg-muted p-4 rounded-lg">
          <h3 className="font-semibold mb-2">In a Next.js Page Component:</h3>
          <pre className="text-sm overflow-x-auto">
            <code>{`import ScrollTop from '@/components/navigation/scroll-utils/scroll-top';

export default function MyPage() {
  return (
    <div>
      <ScrollTop />
      {/* Your page content */}
    </div>
  );
}`}</code>
          </pre>
        </div>
        <div className="bg-muted p-4 rounded-lg">
          <h3 className="font-semibold mb-2">In a Layout Component:</h3>
          <pre className="text-sm overflow-x-auto">
            <code>{`import ScrollTop from '@/components/navigation/scroll-utils/scroll-top';

export default function Layout({ children }) {
  return (
    <div>
      <ScrollTop />
      <header>...</header>
      <main>{children}</main>
      <footer>...</footer>
    </div>
  );
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  ),
};