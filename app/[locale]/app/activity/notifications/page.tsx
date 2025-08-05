import React from "react";
import ContentContainer from "@/components/layout/containers/content-container";
import { Bell, Check, Clock, AlertTriangle } from "lucide-react";

async function NotificationsCenterPage({ params }) {
  const { locale } = await params;
  
  return (
    <ContentContainer className="py-4 px-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Bell className="h-6 w-6" />
          Notifications Center
        </h2>
        <p className="text-muted-foreground">
          Manage and view all your notifications in one centralized location.
        </p>
      </div>
      
      {/* Notification Types */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Notification Types</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              System Updates
            </h4>
            <p className="text-sm text-muted-foreground">
              Stay informed about system maintenance, updates, and improvements.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-yellow-500" />
              Alerts & Warnings
            </h4>
            <p className="text-sm text-muted-foreground">
              Receive important alerts about security issues or system problems.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-500" />
              Task Reminders
            </h4>
            <p className="text-sm text-muted-foreground">
              Get reminded about pending tasks and upcoming deadlines.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Bell className="h-4 w-4 text-purple-500" />
              Activity Feed
            </h4>
            <p className="text-sm text-muted-foreground">
              Track user activities and system events in real-time.
            </p>
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Notification Settings</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold mb-2">Email Notifications</h4>
            <p className="text-sm text-muted-foreground">
              Configure which notifications you want to receive via email.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold mb-2">Push Notifications</h4>
            <p className="text-sm text-muted-foreground">
              Manage browser and mobile push notification preferences.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold mb-2">Frequency Control</h4>
            <p className="text-sm text-muted-foreground">
              Set how often you want to receive different types of notifications.
            </p>
          </div>
        </div>
      </div>

      {/* Coming Soon */}
      <div className="p-4 border rounded-lg bg-primary/5">
        <h3 className="text-lg font-semibold mb-3">Real-time Notifications</h3>
        <p className="text-sm text-muted-foreground mb-3">
          Advanced notification management with filtering, prioritization, and custom rules.
        </p>
        <div className="text-xs text-muted-foreground">
          Coming Soon
        </div>
      </div>
    </ContentContainer>
  );
}

export default NotificationsCenterPage;