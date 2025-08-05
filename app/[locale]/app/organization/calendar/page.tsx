import React from "react";
import ContentContainer from "@/components/layout/containers/content-container";
import { Calendar, Clock, Users, Plus } from "lucide-react";

async function CalendarPage({ params }) {
  const { locale } = await params;
  
  return (
    <ContentContainer className="py-4 px-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Calendar className="h-6 w-6" />
          Calendar
        </h2>
        <p className="text-muted-foreground">
          Manage your schedule, events, and team meetings.
        </p>
      </div>
      
      {/* Calendar Features */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Calendar Features</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-500" />
              Event Scheduling
            </h4>
            <p className="text-sm text-muted-foreground">
              Create, edit, and manage events with customizable reminders and notifications.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Users className="h-4 w-4 text-green-500" />
              Team Coordination
            </h4>
            <p className="text-sm text-muted-foreground">
              Share calendars with team members and coordinate meetings effortlessly.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Plus className="h-4 w-4 text-purple-500" />
              Integration
            </h4>
            <p className="text-sm text-muted-foreground">
              Connect with external calendar services and synchronize your schedule.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Calendar className="h-4 w-4 text-orange-500" />
              Multiple Views
            </h4>
            <p className="text-sm text-muted-foreground">
              Switch between daily, weekly, monthly, and agenda views for better planning.
            </p>
          </div>
        </div>
      </div>

      {/* Calendar Views */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Available Views</h3>
        <div className="grid gap-4 md:grid-cols-4">
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2">Day View</h4>
            <p className="text-xs text-muted-foreground">
              Detailed hourly schedule
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2">Week View</h4>
            <p className="text-xs text-muted-foreground">
              7-day overview
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2">Month View</h4>
            <p className="text-xs text-muted-foreground">
              Full month display
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2">Agenda View</h4>
            <p className="text-xs text-muted-foreground">
              List of upcoming events
            </p>
          </div>
        </div>
      </div>

      {/* Coming Soon */}
      <div className="p-4 border rounded-lg bg-primary/5">
        <h3 className="text-lg font-semibold mb-3">Advanced Calendar Features</h3>
        <p className="text-sm text-muted-foreground mb-3">
          Smart scheduling, AI-powered suggestions, and advanced team collaboration tools.
        </p>
        <div className="text-xs text-muted-foreground">
          Coming Soon
        </div>
      </div>
    </ContentContainer>
  );
}

export default CalendarPage;