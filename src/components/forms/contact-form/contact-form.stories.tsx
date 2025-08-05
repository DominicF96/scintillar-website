import type { Meta, StoryObj } from '@storybook/react';
import ContactForm from './contact-form';
import { useState } from 'react';

const meta: Meta<typeof ContactForm> = {
  title: 'Forms/ContactForm',
  component: ContactForm,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive contact form with validation, newsletter subscription, and different contact reasons. Includes form validation, loading states, and success/error handling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    locale: {
      control: 'select',
      options: ['en', 'fr'],
      description: 'The locale for form translations',
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-2xl mx-auto p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    locale: 'en',
  },
};

export const French: Story = {
  args: {
    locale: 'fr',
  },
};

export const WithPrefilledData: Story = {
  args: {
    locale: 'en',
  },
  render: (args) => {
    const PrefilledForm = () => {
      // Note: In a real implementation, you'd pass default values to the form
      // This is just for story demonstration
      return (
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg text-center">
            <p className="text-sm text-muted-foreground">
              This story shows the form in its default state. In a real scenario, 
              you could prefill values by modifying the form's defaultValues.
            </p>
          </div>
          <ContactForm {...args} />
        </div>
      );
    };
    return <PrefilledForm />;
  },
};

export const InModalContext: Story = {
  args: {
    locale: 'en',
  },
  render: (args) => (
    <div className="bg-background border rounded-lg shadow-lg max-w-2xl mx-auto">
      <div className="p-6 border-b">
        <h2 className="text-xl font-semibold">Contact Us</h2>
        <p className="text-muted-foreground text-sm mt-1">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>
      <div className="p-6">
        <ContactForm {...args} />
      </div>
    </div>
  ),
};

export const CompactLayout: Story = {
  args: {
    locale: 'en',
  },
  render: (args) => (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-6">
        <h3 className="font-semibold mb-2">Quick Contact</h3>
        <p className="text-sm text-muted-foreground">
          Compact form layout for smaller spaces
        </p>
      </div>
      <ContactForm {...args} />
    </div>
  ),
};

export const WithContextualInfo: Story = {
  args: {
    locale: 'en',
  },
  render: (args) => (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div>
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <div className="space-y-4 text-sm">
          <div>
            <h3 className="font-semibold mb-2">Contact Information</h3>
            <div className="space-y-1 text-muted-foreground">
              <p>📧 hello@scintillar.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 123 Tech Street, Innovation City</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Business Hours</h3>
            <div className="space-y-1 text-muted-foreground">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Response Time</h3>
            <p className="text-muted-foreground">
              We typically respond to inquiries within 24 hours during business days.
            </p>
          </div>
        </div>
      </div>
      <div>
        <ContactForm {...args} />
      </div>
    </div>
  ),
};

export const DifferentReasons: Story = {
  args: {
    locale: 'en',
  },
  render: (args) => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="font-semibold mb-2">Contact Form with Different Purposes</h3>
        <p className="text-sm text-muted-foreground">
          The form adapts based on the selected contact reason
        </p>
      </div>
      
      <div className="grid gap-4">
        <div className="p-4 bg-muted/30 rounded-lg">
          <h4 className="font-medium mb-2">Available Contact Reasons:</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="p-2 bg-card rounded border">
              <span className="font-medium">General</span> - General inquiries
            </div>
            <div className="p-2 bg-card rounded border">
              <span className="font-medium">Support</span> - Technical support
            </div>
            <div className="p-2 bg-card rounded border">
              <span className="font-medium">Sales</span> - Sales inquiries
            </div>
            <div className="p-2 bg-card rounded border">
              <span className="font-medium">Partnership</span> - Business partnerships
            </div>
          </div>
        </div>
      </div>
      
      <ContactForm {...args} />
    </div>
  ),
};

export const ValidationShowcase: Story = {
  args: {
    locale: 'en',
  },
  render: (args) => (
    <div className="space-y-6">
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold mb-2">Form Validation Features</h3>
        <div className="text-sm space-y-2">
          <p><strong>Name fields:</strong> Only letters, 2-50 characters</p>
          <p><strong>Email:</strong> Valid email format, minimum 5 characters</p>
          <p><strong>Company:</strong> Optional, maximum 50 characters</p>
          <p><strong>Message:</strong> Maximum 500 characters</p>
          <p><strong>Newsletter:</strong> Optional subscription with switch</p>
        </div>
      </div>
      <ContactForm {...args} />
      <div className="text-xs text-muted-foreground p-3 bg-muted/20 rounded">
        <p><strong>Try these validations:</strong></p>
        <ul className="list-disc list-inside mt-1 space-y-1">
          <li>Enter numbers in name fields (should show error)</li>
          <li>Enter invalid email format</li>
          <li>Leave required fields empty</li>
          <li>Exceed character limits</li>
        </ul>
      </div>
    </div>
  ),
};

export const MockSubmissionStates: Story = {
  args: {
    locale: 'en',
  },
  render: (args) => {
    const MockStatesDemo = () => {
      const [currentState, setCurrentState] = useState<'normal' | 'loading' | 'success' | 'error'>('normal');
      
      // Mock the form submission process
      const simulateSubmission = (state: 'success' | 'error') => {
        setCurrentState('loading');
        setTimeout(() => {
          setCurrentState(state);
          setTimeout(() => setCurrentState('normal'), 3000);
        }, 2000);
      };

      return (
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="font-semibold mb-4">Form Submission States Demo</h3>
            <div className="flex justify-center gap-2">
              <button
                onClick={() => simulateSubmission('success')}
                className="px-3 py-1 text-sm bg-primary/10 text-primary rounded hover:bg-primary/20"
                disabled={currentState === 'loading'}
              >
                Simulate Success
              </button>
              <button
                onClick={() => simulateSubmission('error')}
                className="px-3 py-1 text-sm bg-destructive/10 text-destructive rounded hover:bg-destructive/20"
                disabled={currentState === 'loading'}
              >
                Simulate Error
              </button>
              <button
                onClick={() => setCurrentState('normal')}
                className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded hover:bg-muted/80"
              >
                Reset
              </button>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Current state: <span className="font-medium capitalize">{currentState}</span>
            </p>
          </div>
          
          <ContactForm {...args} />
        </div>
      );
    };
    
    return <MockStatesDemo />;
  },
};

export const AccessibilityShowcase: Story = {
  args: {
    locale: 'en',
  },
  render: (args) => (
    <div className="space-y-6">
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold mb-2">Accessibility Features</h3>
        <div className="text-sm space-y-2">
          <p>✅ <strong>Keyboard Navigation:</strong> Tab through all form controls</p>
          <p>✅ <strong>Screen Reader Support:</strong> Proper labels and ARIA attributes</p>
          <p>✅ <strong>Form Validation:</strong> Clear error messages</p>
          <p>✅ <strong>Focus Management:</strong> Visible focus indicators</p>
          <p>✅ <strong>Color Contrast:</strong> WCAG compliant colors</p>
          <p>✅ <strong>Required Fields:</strong> Marked with asterisk (*)</p>
        </div>
      </div>
      <ContactForm {...args} />
    </div>
  ),
};