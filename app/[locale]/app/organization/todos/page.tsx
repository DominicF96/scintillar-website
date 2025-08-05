import React from "react";
import ContentContainer from "@/components/layout/containers/content-container";
import { CheckSquare, Plus, Clock, Flag, Filter } from "lucide-react";

async function TodosPage({ params }) {
  const { locale } = await params;
  
  return (
    <ContentContainer className="py-4 px-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <CheckSquare className="h-6 w-6" />
          Todo Management
        </h2>
        <p className="text-muted-foreground">
          Organize your tasks, set priorities, and track progress efficiently.
        </p>
      </div>
      
      {/* Todo Features */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Task Management Features</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Plus className="h-4 w-4 text-green-500" />
              Quick Task Creation
            </h4>
            <p className="text-sm text-muted-foreground">
              Add tasks quickly with due dates, priorities, and detailed descriptions.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Flag className="h-4 w-4 text-red-500" />
              Priority System
            </h4>
            <p className="text-sm text-muted-foreground">
              Set task priorities (High, Medium, Low) to focus on what matters most.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-500" />
              Due Date Tracking
            </h4>
            <p className="text-sm text-muted-foreground">
              Set deadlines and receive reminders to stay on track with your goals.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Filter className="h-4 w-4 text-purple-500" />
              Smart Filtering
            </h4>
            <p className="text-sm text-muted-foreground">
              Filter tasks by status, priority, category, or due date for better organization.
            </p>
          </div>
        </div>
      </div>

      {/* Task Statistics */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Task Overview</h3>
        <div className="grid gap-4 md:grid-cols-4">
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2 text-2xl text-yellow-600">0</h4>
            <p className="text-xs text-muted-foreground">Pending Tasks</p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2 text-2xl text-blue-600">0</h4>
            <p className="text-xs text-muted-foreground">In Progress</p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2 text-2xl text-green-600">0</h4>
            <p className="text-xs text-muted-foreground">Completed</p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2 text-2xl text-red-600">0</h4>
            <p className="text-xs text-muted-foreground">Overdue</p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Task Categories</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold mb-2">Work</h4>
            <p className="text-sm text-muted-foreground">
              Professional tasks and project-related activities.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold mb-2">Personal</h4>
            <p className="text-sm text-muted-foreground">
              Personal goals and everyday life tasks.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold mb-2">Team</h4>
            <p className="text-sm text-muted-foreground">
              Collaborative tasks and team assignments.
            </p>
          </div>
        </div>
      </div>

      {/* Coming Soon */}
      <div className="p-4 border rounded-lg bg-primary/5">
        <h3 className="text-lg font-semibold mb-3">Advanced Task Management</h3>
        <p className="text-sm text-muted-foreground mb-3">
          Recurring tasks, team collaboration, time tracking, and productivity analytics.
        </p>
        <div className="text-xs text-muted-foreground">
          Coming Soon
        </div>
      </div>
    </ContentContainer>
  );
}

export default TodosPage;