import type { Meta, StoryObj } from '@storybook/react';
import UserMenu from './user-menu';
import { ThemeProvider } from 'next-themes';
import { UserProvider } from '@auth0/nextjs-auth0/client';

const meta: Meta<typeof UserMenu> = {
  title: 'Features/UserMenu',
  component: UserMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A user menu dropdown that shows user information, preferences, theme toggle, language selection, and logout option. Integrates with Auth0 for user authentication.',
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <div className="p-8">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Mock user data
const mockUser = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  picture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  sub: 'auth0|123456789',
};

const mockUserWithoutPicture = {
  name: 'Jane Smith',
  email: 'jane.smith@example.com',
  sub: 'auth0|987654321',
};

// Mock locale context
const MockLocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const mockLocaleContext = {
    setLocale: (locale: string) => console.log('Setting locale to:', locale),
    isLoading: false,
    availableLocales: ['en', 'fr'],
  };

  // Mock the useLocaleActions hook
  (global as any).mockUseLocaleActions = () => mockLocaleContext;

  return <>{children}</>;
};

export const LoggedInUser: Story = {
  render: () => (
    <UserProvider user={mockUser}>
      <MockLocaleProvider>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">User Menu:</span>
          <UserMenu />
        </div>
      </MockLocaleProvider>
    </UserProvider>
  ),
};

export const UserWithoutPicture: Story = {
  render: () => (
    <UserProvider user={mockUserWithoutPicture}>
      <MockLocaleProvider>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">User without profile picture:</span>
          <UserMenu />
        </div>
      </MockLocaleProvider>
    </UserProvider>
  ),
};

export const LoadingState: Story = {
  render: () => (
    <UserProvider user={undefined} isLoading={true}>
      <MockLocaleProvider>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">Loading state:</span>
          <UserMenu />
        </div>
      </MockLocaleProvider>
    </UserProvider>
  ),
};

export const NotLoggedIn: Story = {
  render: () => (
    <UserProvider user={undefined}>
      <MockLocaleProvider>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">Not logged in:</span>
          <UserMenu />
        </div>
      </MockLocaleProvider>
    </UserProvider>
  ),
};

export const ErrorState: Story = {
  render: () => (
    <UserProvider user={undefined} error={new Error('Authentication failed')}>
      <MockLocaleProvider>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">Error state:</span>
          <UserMenu />
        </div>
      </MockLocaleProvider>
    </UserProvider>
  ),
};

export const InNavbar: Story = {
  render: () => (
    <UserProvider user={mockUser}>
      <MockLocaleProvider>
        <div className="bg-card border rounded-lg p-4 w-96">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">S</span>
              </div>
              <span className="font-semibold">Scintillar</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-sm hover:text-primary">Help</button>
              <UserMenu />
            </div>
          </div>
        </div>
      </MockLocaleProvider>
    </UserProvider>
  ),
};

export const DifferentUserTypes: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="text-center text-sm text-muted-foreground mb-4">
        Different user states and scenarios
      </div>
      
      <div className="grid gap-4">
        {/* Admin user */}
        <div className="flex items-center justify-between p-4 bg-card border rounded-lg">
          <div>
            <p className="text-sm font-medium">Admin User</p>
            <p className="text-xs text-muted-foreground">Full access with profile picture</p>
          </div>
          <UserProvider user={{
            ...mockUser,
            name: 'Admin User',
            email: 'admin@scintillar.com',
          }}>
            <MockLocaleProvider>
              <UserMenu />
            </MockLocaleProvider>
          </UserProvider>
        </div>

        {/* Regular user */}
        <div className="flex items-center justify-between p-4 bg-card border rounded-lg">
          <div>
            <p className="text-sm font-medium">Regular User</p>
            <p className="text-xs text-muted-foreground">Standard access without picture</p>
          </div>
          <UserProvider user={{
            ...mockUserWithoutPicture,
            name: 'Regular User',
            email: 'user@example.com',
          }}>
            <MockLocaleProvider>
              <UserMenu />
            </MockLocaleProvider>
          </UserProvider>
        </div>

        {/* User with long name */}
        <div className="flex items-center justify-between p-4 bg-card border rounded-lg">
          <div>
            <p className="text-sm font-medium">Long Name User</p>
            <p className="text-xs text-muted-foreground">Testing name truncation</p>
          </div>
          <UserProvider user={{
            ...mockUser,
            name: 'Alexander Montgomery Williams III',
            email: 'alexander.montgomery.williams.iii@verylongdomainname.com',
          }}>
            <MockLocaleProvider>
              <UserMenu />
            </MockLocaleProvider>
          </UserProvider>
        </div>

        {/* Guest user */}
        <div className="flex items-center justify-between p-4 bg-card border rounded-lg">
          <div>
            <p className="text-sm font-medium">Guest User</p>
            <p className="text-xs text-muted-foreground">Not authenticated</p>
          </div>
          <UserProvider user={undefined}>
            <MockLocaleProvider>
              <UserMenu />
            </MockLocaleProvider>
          </UserProvider>
        </div>
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => (
    <UserProvider user={mockUser}>
      <MockLocaleProvider>
        <div className="text-center space-y-4 p-6 bg-muted/30 rounded-lg">
          <h3 className="font-semibold">Interactive User Menu</h3>
          <p className="text-sm text-muted-foreground">
            Click the avatar to open the menu. Try the theme toggle and language switcher.
          </p>
          <div className="flex justify-center">
            <UserMenu />
          </div>
          <div className="text-xs text-muted-foreground mt-4 space-y-1">
            <p>Features to test:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Theme switching (Light/Dark/System)</li>
              <li>Language toggle (EN/FR)</li>
              <li>Preferences link</li>
              <li>Logout functionality</li>
            </ul>
          </div>
        </div>
      </MockLocaleProvider>
    </UserProvider>
  ),
};