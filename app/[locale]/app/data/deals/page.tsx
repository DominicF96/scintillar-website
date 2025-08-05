import React from "react";
import ContentContainer from "@/components/layout/containers/content-container";
import { HandCoins, Plus, TrendingUp, Calendar, DollarSign, Target } from "lucide-react";

async function DealsPage({ params }) {
  const { locale } = await params;
  
  return (
    <ContentContainer className="py-4 px-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <HandCoins className="h-6 w-6" />
          Deals Management
        </h2>
        <p className="text-muted-foreground">
          Track sales opportunities, manage pipelines, and close more deals.
        </p>
      </div>
      
      {/* Deal Management Features */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Deal Features</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Plus className="h-4 w-4 text-green-500" />
              Deal Creation
            </h4>
            <p className="text-sm text-muted-foreground">
              Create new deals with custom fields, stages, and probability tracking.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-blue-500" />
              Pipeline Management
            </h4>
            <p className="text-sm text-muted-foreground">
              Visual pipeline with drag-and-drop stages and automated workflows.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Calendar className="h-4 w-4 text-purple-500" />
              Follow-up Tracking
            </h4>
            <p className="text-sm text-muted-foreground">
              Schedule and track follow-ups, meetings, and important milestones.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-orange-500" />
              Revenue Forecasting
            </h4>
            <p className="text-sm text-muted-foreground">
              Predict revenue based on deal probability and historical data.
            </p>
          </div>
        </div>
      </div>

      {/* Deal Statistics */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Deal Overview</h3>
        <div className="grid gap-4 md:grid-cols-4">
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2 text-2xl text-blue-600">$0</h4>
            <p className="text-xs text-muted-foreground">Total Pipeline Value</p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2 text-2xl text-green-600">0</h4>
            <p className="text-xs text-muted-foreground">Active Deals</p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2 text-2xl text-purple-600">0%</h4>
            <p className="text-xs text-muted-foreground">Win Rate</p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2 text-2xl text-orange-600">0</h4>
            <p className="text-xs text-muted-foreground">Days Avg. Cycle</p>
          </div>
        </div>
      </div>

      {/* Deal Stages */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Pipeline Stages</h3>
        <div className="grid gap-4 md:grid-cols-5">
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2">Prospecting</h4>
            <p className="text-2xl font-bold text-gray-600 mb-1">0</p>
            <p className="text-xs text-muted-foreground">$0</p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2">Qualified</h4>
            <p className="text-2xl font-bold text-blue-600 mb-1">0</p>
            <p className="text-xs text-muted-foreground">$0</p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2">Proposal</h4>
            <p className="text-2xl font-bold text-yellow-600 mb-1">0</p>
            <p className="text-xs text-muted-foreground">$0</p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2">Negotiation</h4>
            <p className="text-2xl font-bold text-orange-600 mb-1">0</p>
            <p className="text-xs text-muted-foreground">$0</p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2">Closed Won</h4>
            <p className="text-2xl font-bold text-green-600 mb-1">0</p>
            <p className="text-xs text-muted-foreground">$0</p>
          </div>
        </div>
      </div>

      {/* Advanced Features */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Advanced Features</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-3 border rounded-lg bg-blue-50 dark:bg-blue-950/20">
            <h4 className="font-medium text-sm mb-1">Deal Scoring</h4>
            <p className="text-xs text-muted-foreground">
              AI-powered lead scoring and win probability
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-green-50 dark:bg-green-950/20">
            <h4 className="font-medium text-sm mb-1">Email Integration</h4>
            <p className="text-xs text-muted-foreground">
              Sync emails and track communication history
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-purple-50 dark:bg-purple-950/20">
            <h4 className="font-medium text-sm mb-1">Activity Tracking</h4>
            <p className="text-xs text-muted-foreground">
              Log calls, meetings, and sales activities
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-orange-50 dark:bg-orange-950/20">
            <h4 className="font-medium text-sm mb-1">Document Management</h4>
            <p className="text-xs text-muted-foreground">
              Store proposals, contracts, and attachments
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-pink-50 dark:bg-pink-950/20">
            <h4 className="font-medium text-sm mb-1">Team Collaboration</h4>
            <p className="text-xs text-muted-foreground">
              Share deals and collaborate with team members
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-indigo-50 dark:bg-indigo-950/20">
            <h4 className="font-medium text-sm mb-1">Reporting & Analytics</h4>
            <p className="text-xs text-muted-foreground">
              Sales reports and performance analytics
            </p>
          </div>
        </div>
      </div>

      {/* Deal Types */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Deal Categories</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold mb-2">New Business</h4>
            <p className="text-sm text-muted-foreground">
              First-time customers and new market opportunities.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold mb-2">Expansion</h4>
            <p className="text-sm text-muted-foreground">
              Upsells, cross-sells, and account growth opportunities.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold mb-2">Renewal</h4>
            <p className="text-sm text-muted-foreground">
              Contract renewals and subscription extensions.
            </p>
          </div>
        </div>
      </div>

      {/* Coming Soon */}
      <div className="p-4 border rounded-lg bg-primary/5">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <Target className="h-5 w-5" />
          AI-Powered Deal Intelligence
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          Predictive analytics, automated deal scoring, and intelligent recommendations to maximize sales performance.
        </p>
        <div className="text-xs text-muted-foreground">
          Coming Soon
        </div>
      </div>
    </ContentContainer>
  );
}

export default DealsPage;