import React from "react";
import ContentContainer from "@/components/layout/containers/content-container";
import { Bell, Smartphone, Mail, AlertTriangle, Settings } from "lucide-react";

async function NotificationsSimulationPage({ params }) {
  const { locale } = await params;
  
  return (
    <ContentContainer className="py-4 px-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Bell className="h-6 w-6" />
          Notifications System Simulation
        </h2>
        <p className="text-muted-foreground">
          Test and explore different notification delivery methods and strategies.
        </p>
      </div>
      
      {/* Notification Types */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Notification Channels</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Smartphone className="h-4 w-4 text-blue-500" />
              Push Notifications
            </h4>
            <p className="text-sm text-muted-foreground">
              Real-time browser and mobile push notifications with rich content.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Mail className="h-4 w-4 text-green-500" />
              Email Notifications
            </h4>
            <p className="text-sm text-muted-foreground">
              HTML email templates with personalization and tracking capabilities.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Bell className="h-4 w-4 text-purple-500" />
              In-App Notifications
            </h4>
            <p className="text-sm text-muted-foreground">
              Toast messages, banners, and notification centers within the app.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              Critical Alerts
            </h4>
            <p className="text-sm text-muted-foreground">
              High-priority notifications for urgent system events and errors.
            </p>
          </div>
        </div>
      </div>

      {/* Notification Scenarios */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Test Scenarios</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold mb-2">User Onboarding</h4>
            <p className="text-sm text-muted-foreground">
              Welcome series and feature introduction notifications.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold mb-2">System Updates</h4>
            <p className="text-sm text-muted-foreground">
              Scheduled maintenance and feature release announcements.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold mb-2">Security Events</h4>
            <p className="text-sm text-muted-foreground">
              Login alerts and suspicious activity notifications.
            </p>
          </div>
        </div>
      </div>

      {/* Advanced Features */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Advanced Features</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-3 border rounded-lg bg-blue-50 dark:bg-blue-950/20">
            <h4 className="font-medium text-sm mb-1">Smart Timing</h4>
            <p className="text-xs text-muted-foreground">
              Send notifications at optimal times for each user
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-green-50 dark:bg-green-950/20">
            <h4 className="font-medium text-sm mb-1">A/B Testing</h4>
            <p className="text-xs text-muted-foreground">
              Test different notification strategies
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-purple-50 dark:bg-purple-950/20">
            <h4 className="font-medium text-sm mb-1">Personalization</h4>
            <p className="text-xs text-muted-foreground">
              Dynamic content based on user preferences
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-orange-50 dark:bg-orange-950/20">
            <h4 className="font-medium text-sm mb-1">Rate Limiting</h4>
            <p className="text-xs text-muted-foreground">
              Prevent notification fatigue with smart throttling
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-pink-50 dark:bg-pink-950/20">
            <h4 className="font-medium text-sm mb-1">Analytics</h4>
            <p className="text-xs text-muted-foreground">
              Track delivery rates and engagement metrics
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-indigo-50 dark:bg-indigo-950/20">
            <h4 className="font-medium text-sm mb-1">Multi-channel</h4>
            <p className="text-xs text-muted-foreground">
              Coordinate across email, push, and in-app
            </p>
          </div>
        </div>
      </div>

      {/* Settings Preview */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Settings className="h-5 w-5" />
          Notification Preferences
        </h3>
        <div className="p-4 border rounded-lg bg-muted/10">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Email notifications</span>
              <div className="text-xs text-green-600">Enabled</div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Push notifications</span>
              <div className="text-xs text-green-600">Enabled</div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Marketing communications</span>
              <div className="text-xs text-muted-foreground">Disabled</div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Security alerts</span>
              <div className="text-xs text-green-600">Always enabled</div>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon */}
      <div className="p-4 border rounded-lg bg-primary/5">
        <h3 className="text-lg font-semibold mb-3">Interactive Notification Testing</h3>
        <p className="text-sm text-muted-foreground mb-3">
          Live notification preview, template editor, and delivery simulation with real devices.
        </p>
        <div className="text-xs text-muted-foreground">
          Coming Soon
        </div>
      </div>
    </ContentContainer>
  );
}

export default NotificationsSimulationPage;