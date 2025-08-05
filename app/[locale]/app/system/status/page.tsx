import React from "react";
import ContentContainer from "@/components/layout/containers/content-container";
import { Activity, Server, Database, Wifi, CheckCircle, AlertCircle } from "lucide-react";

async function SystemStatusPage({ params }) {
  const { locale } = await params;
  
  return (
    <ContentContainer className="py-4 px-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Activity className="h-6 w-6" />
          System Status
        </h2>
        <p className="text-muted-foreground">
          Monitor system health, performance metrics, and service availability.
        </p>
      </div>
      
      {/* System Health */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">System Health</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Application Server
            </h4>
            <p className="text-sm text-muted-foreground mb-2">
              Status: Operational
            </p>
            <div className="text-xs text-green-600">All services running normally</div>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Database
            </h4>
            <p className="text-sm text-muted-foreground mb-2">
              Status: Operational
            </p>
            <div className="text-xs text-green-600">Connection pool healthy</div>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibolder mb-2 flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              API Services
            </h4>
            <p className="text-sm text-muted-foreground mb-2">
              Status: Operational
            </p>
            <div className="text-xs text-green-600">Response time: 120ms</div>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Network
            </h4>
            <p className="text-sm text-muted-foreground mb-2">
              Status: Operational
            </p>
            <div className="text-xs text-green-600">Latency: 15ms</div>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
        <div className="grid gap-4 md:grid-cols-4">
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <Server className="h-8 w-8 mx-auto mb-2 text-blue-500" />
            <h4 className="font-semibold mb-2">CPU Usage</h4>
            <p className="text-2xl font-bold text-blue-600">12%</p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <Database className="h-8 w-8 mx-auto mb-2 text-green-500" />
            <h4 className="font-semibold mb-2">Memory</h4>
            <p className="text-2xl font-bold text-green-600">34%</p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <Wifi className="h-8 w-8 mx-auto mb-2 text-purple-500" />
            <h4 className="font-semibold mb-2">Network</h4>
            <p className="text-2xl font-bold text-purple-600">8MB/s</p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <Activity className="h-8 w-8 mx-auto mb-2 text-orange-500" />
            <h4 className="font-semibold mb-2">Uptime</h4>
            <p className="text-2xl font-bold text-orange-600">99.9%</p>
          </div>
        </div>
      </div>

      {/* Recent Events */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Recent System Events</h3>
        <div className="space-y-3">
          <div className="p-3 border rounded-lg bg-green-50 dark:bg-green-950/20">
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="font-medium text-sm">System Update Completed</span>
              <span className="text-xs text-muted-foreground ml-auto">2 hours ago</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Security patches and performance improvements have been applied successfully.
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-blue-50 dark:bg-blue-950/20">
            <div className="flex items-center gap-2 mb-1">
              <Activity className="h-4 w-4 text-blue-500" />
              <span className="font-medium text-sm">Database Optimization</span>
              <span className="text-xs text-muted-foreground ml-auto">6 hours ago</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Automated database maintenance completed, query performance improved by 15%.
            </p>
          </div>
        </div>
      </div>

      {/* Coming Soon */}
      <div className="p-4 border rounded-lg bg-primary/5">
        <h3 className="text-lg font-semibold mb-3">Advanced Monitoring</h3>
        <p className="text-sm text-muted-foreground mb-3">
          Real-time alerts, historical analytics, and predictive maintenance features.
        </p>
        <div className="text-xs text-muted-foreground">
          Coming Soon
        </div>
      </div>
    </ContentContainer>
  );
}

export default SystemStatusPage;