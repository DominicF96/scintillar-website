import React from "react";
import ContentContainer from "@/components/layout/containers/content-container";
import { CheckSquare, Plus, Clock, Flag, Users, Calendar } from "lucide-react";

async function TasksPage({ params }) {
  const { locale } = await params;
  
  return (
    <ContentContainer className="py-4 px-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <CheckSquare className="h-6 w-6" />
          Task Management
        </h2>
        <p className="text-muted-foreground">
          Organize tasks, track progress, and collaborate with your team efficiently.
        </p>
      </div>
      
      {/* Task Management Features */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Task Features</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Plus className="h-4 w-4 text-green-500" />
              Task Creation
            </h4>
            <p className="text-sm text-muted-foreground">
              Create tasks with descriptions, due dates, priorities, and assignments.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Flag className="h-4 w-4 text-red-500" />
              Priority Management
            </h4>
            <p className="text-sm text-muted-foreground">
              Set task priorities and organize work by importance and urgency.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Users className="h-4 w-4 text-blue-500" />
              Team Collaboration
            </h4>
            <p className="text-sm text-muted-foreground">
              Assign tasks to team members and track collaborative projects.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Clock className="h-4 w-4 text-purple-500" />
              Time Tracking
            </h4>
            <p className="text-sm text-muted-foreground">
              Track time spent on tasks and analyze productivity metrics.
            </p>
          </div>
        </div>
      </div>

      {/* Task Statistics */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Task Overview</h3>
        <div className="grid gap-4 md:grid-cols-4">
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2 text-2xl text-blue-600">0</h4>
            <p className="text-xs text-muted-foreground">Total Tasks</p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2 text-2xl text-green-600">0</h4>
            <p className="text-xs text-muted-foreground">Completed</p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2 text-2xl text-orange-600">0</h4>
            <p className="text-xs text-muted-foreground">In Progress</p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2 text-2xl text-red-600">0</h4>
            <p className="text-xs text-muted-foreground">Overdue</p>
          </div>
        </div>
      </div>

      {/* Task Categories */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Task Categories</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold mb-2">Personal Tasks</h4>
            <p className="text-sm text-muted-foreground">
              Individual tasks and personal to-do items.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold mb-2">Team Projects</h4>
            <p className="text-sm text-muted-foreground">
              Collaborative tasks and project milestones.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold mb-2">Recurring Tasks</h4>
            <p className="text-sm text-muted-foreground">
              Scheduled tasks that repeat on a regular basis.
            </p>
          </div>
        </div>
      </div>

      {/* Priority Levels */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Priority Levels</h3>
        <div className="grid gap-4 md:grid-cols-4">
          <div className="p-3 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-1 flex items-center justify-center gap-1">
              <Flag className="h-4 w-4 text-red-500" />
              Critical
            </h4>
            <p className="text-2xl font-bold text-red-600 mb-1">0</p>
            <p className="text-xs text-muted-foreground">Urgent tasks</p>
          </div>
          <div className="p-3 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-1 flex items-center justify-center gap-1">
              <Flag className="h-4 w-4 text-orange-500" />
              High
            </h4>
            <p className="text-2xl font-bold text-orange-600 mb-1">0</p>
            <p className="text-xs text-muted-foreground">Important tasks</p>
          </div>
          <div className="p-3 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-1 flex items-center justify-center gap-1">
              <Flag className="h-4 w-4 text-blue-500" />
              Medium
            </h4>
            <p className="text-2xl font-bold text-blue-600 mb-1">0</p>
            <p className="text-xs text-muted-foreground">Standard tasks</p>
          </div>
          <div className="p-3 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-1 flex items-center justify-center gap-1">
              <Flag className="h-4 w-4 text-gray-500" />
              Low
            </h4>
            <p className="text-2xl font-bold text-gray-600 mb-1">0</p>
            <p className="text-xs text-muted-foreground">Nice to have</p>
          </div>
        </div>
      </div>

      {/* Advanced Features */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Advanced Features</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-3 border rounded-lg bg-blue-50 dark:bg-blue-950/20">
            <h4 className="font-medium text-sm mb-1">Task Dependencies</h4>
            <p className="text-xs text-muted-foreground">
              Link tasks and manage project workflows
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-green-50 dark:bg-green-950/20">
            <h4 className="font-medium text-sm mb-1">Subtasks</h4>
            <p className="text-xs text-muted-foreground">
              Break down complex tasks into manageable steps
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-purple-50 dark:bg-purple-950/20">
            <h4 className="font-medium text-sm mb-1">Custom Fields</h4>
            <p className="text-xs text-muted-foreground">
              Add custom data fields for specific workflows
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-orange-50 dark:bg-orange-950/20">
            <h4 className="font-medium text-sm mb-1">File Attachments</h4>
            <p className="text-xs text-muted-foreground">
              Attach files and documents to tasks
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-pink-50 dark:bg-pink-950/20">
            <h4 className="font-medium text-sm mb-1">Comments & Notes</h4>
            <p className="text-xs text-muted-foreground">
              Add comments and track task discussions
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-indigo-50 dark:bg-indigo-950/20">
            <h4 className="font-medium text-sm mb-1">Templates</h4>
            <p className="text-xs text-muted-foreground">
              Create task templates for recurring workflows
            </p>
          </div>
        </div>
      </div>

      {/* Task Views */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Task Views</h3>
        <div className="grid gap-4 md:grid-cols-4">
          <div className="p-3 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2">List View</h4>
            <p className="text-xs text-muted-foreground">
              Traditional task list with filters
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2">Kanban Board</h4>
            <p className="text-xs text-muted-foreground">
              Visual cards with drag-and-drop
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2">Calendar View</h4>
            <p className="text-xs text-muted-foreground">
              Tasks organized by due dates
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2">Timeline</h4>
            <p className="text-xs text-muted-foreground">
              Gantt chart for project planning
            </p>
          </div>
        </div>
      </div>

      {/* Coming Soon */}
      <div className="p-4 border rounded-lg bg-primary/5">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Smart Task Management
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          AI-powered task prioritization, automated scheduling, and intelligent workload balancing for maximum productivity.
        </p>
        <div className="text-xs text-muted-foreground">
          Coming Soon
        </div>
      </div>
    </ContentContainer>
  );
}

export default TasksPage;