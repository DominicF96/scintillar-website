import React from "react";
import ContentContainer from "@/components/layout/containers/content-container";
import { Building, Plus, Search, MapPin, TrendingUp, Users } from "lucide-react";

async function CompaniesPage({ params }) {
  const { locale } = await params;
  
  return (
    <ContentContainer className="py-4 px-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Building className="h-6 w-6" />
          Companies Management
        </h2>
        <p className="text-muted-foreground">
          Manage company profiles, relationships, and business intelligence.
        </p>
      </div>
      
      {/* Company Management Features */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Company Features</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Plus className="h-4 w-4 text-green-500" />
              Company Profiles
            </h4>
            <p className="text-sm text-muted-foreground">
              Create detailed company profiles with industry, size, and key metrics.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-blue-500" />
              Financial Data
            </h4>
            <p className="text-sm text-muted-foreground">
              Track revenue, funding, valuation, and other financial indicators.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Users className="h-4 w-4 text-purple-500" />
              Team & Contacts
            </h4>
            <p className="text-sm text-muted-foreground">
              Link company contacts and track organizational structure.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-orange-500" />
              Location Intelligence
            </h4>
            <p className="text-sm text-muted-foreground">
              Track headquarters, offices, and regional presence.
            </p>
          </div>
        </div>
      </div>

      {/* Company Statistics */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Company Overview</h3>
        <div className="grid gap-4 md:grid-cols-4">
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2 text-2xl text-blue-600">0</h4>
            <p className="text-xs text-muted-foreground">Total Companies</p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2 text-2xl text-green-600">0</h4>
            <p className="text-xs text-muted-foreground">Active Prospects</p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2 text-2xl text-purple-600">0</h4>
            <p className="text-xs text-muted-foreground">Current Clients</p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2 text-2xl text-orange-600">0</h4>
            <p className="text-xs text-muted-foreground">Partners</p>
          </div>
        </div>
      </div>

      {/* Industry Categories */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Industry Categories</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold mb-2">Technology</h4>
            <p className="text-sm text-muted-foreground">
              Software companies, startups, and tech service providers.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold mb-2">Finance</h4>
            <p className="text-sm text-muted-foreground">
              Banks, fintech, investment firms, and financial services.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold mb-2">Healthcare</h4>
            <p className="text-sm text-muted-foreground">
              Medical organizations, pharma companies, and health tech.
            </p>
          </div>
        </div>
      </div>

      {/* Company Insights */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Business Intelligence</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-3 border rounded-lg bg-blue-50 dark:bg-blue-950/20">
            <h4 className="font-medium text-sm mb-1">Market Research</h4>
            <p className="text-xs text-muted-foreground">
              Industry trends and competitive analysis
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-green-50 dark:bg-green-950/20">
            <h4 className="font-medium text-sm mb-1">Growth Tracking</h4>
            <p className="text-xs text-muted-foreground">
              Monitor company growth and expansion
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-purple-50 dark:bg-purple-950/20">
            <h4 className="font-medium text-sm mb-1">News Monitoring</h4>
            <p className="text-xs text-muted-foreground">
              Automated news alerts and updates
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-orange-50 dark:bg-orange-950/20">
            <h4 className="font-medium text-sm mb-1">Social Presence</h4>
            <p className="text-xs text-muted-foreground">
              Track social media and online presence
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-pink-50 dark:bg-pink-950/20">
            <h4 className="font-medium text-sm mb-1">Technology Stack</h4>
            <p className="text-xs text-muted-foreground">
              Identify tools and technologies used
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-indigo-50 dark:bg-indigo-950/20">
            <h4 className="font-medium text-sm mb-1">Relationship Mapping</h4>
            <p className="text-xs text-muted-foreground">
              Visualize business relationships and networks
            </p>
          </div>
        </div>
      </div>

      {/* Company Size Categories */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Company Size Distribution</h3>
        <div className="grid gap-4 md:grid-cols-4">
          <div className="p-3 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-1">Startup</h4>
            <p className="text-2xl font-bold text-green-600 mb-1">0</p>
            <p className="text-xs text-muted-foreground">1-10 employees</p>
          </div>
          <div className="p-3 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-1">Small</h4>
            <p className="text-2xl font-bold text-blue-600 mb-1">0</p>
            <p className="text-xs text-muted-foreground">11-50 employees</p>
          </div>
          <div className="p-3 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-1">Medium</h4>
            <p className="text-2xl font-bold text-purple-600 mb-1">0</p>
            <p className="text-xs text-muted-foreground">51-200 employees</p>
          </div>
          <div className="p-3 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-1">Enterprise</h4>
            <p className="text-2xl font-bold text-orange-600 mb-1">0</p>
            <p className="text-xs text-muted-foreground">200+ employees</p>
          </div>
        </div>
      </div>

      {/* Coming Soon */}
      <div className="p-4 border rounded-lg bg-primary/5">
        <h3 className="text-lg font-semibold mb-3">AI-Powered Company Intelligence</h3>
        <p className="text-sm text-muted-foreground mb-3">
          Automated data enrichment, predictive analytics, and intelligent company scoring based on multiple data sources.
        </p>
        <div className="text-xs text-muted-foreground">
          Coming Soon
        </div>
      </div>
    </ContentContainer>
  );
}

export default CompaniesPage;