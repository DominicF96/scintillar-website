import React from "react";
import ContentContainer from "@/components/layout/containers/content-container";
import { Database, Plus, Edit, Trash2, Search } from "lucide-react";

async function CrudSimulationPage({ params }) {
  const { locale } = await params;
  
  return (
    <ContentContainer className="py-4 px-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Database className="h-6 w-6" />
          CRUD Operations Simulation
        </h2>
        <p className="text-muted-foreground">
          Practice Create, Read, Update, and Delete operations in a safe environment.
        </p>
      </div>
      
      {/* CRUD Operations */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Available Operations</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Plus className="h-4 w-4 text-green-500" />
              Create Records
            </h4>
            <p className="text-sm text-muted-foreground">
              Add new data entries with form validation and error handling.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Search className="h-4 w-4 text-blue-500" />
              Read & Search
            </h4>
            <p className="text-sm text-muted-foreground">
              Query data with filters, sorting, and pagination capabilities.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Edit className="h-4 w-4 text-yellow-500" />
              Update Records
            </h4>
            <p className="text-sm text-muted-foreground">
              Modify existing data with optimistic updates and conflict resolution.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Trash2 className="h-4 w-4 text-red-500" />
              Delete Records
            </h4>
            <p className="text-sm text-muted-foreground">
              Remove data with confirmation dialogs and soft delete options.
            </p>
          </div>
        </div>
      </div>

      {/* Data Models */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Available Data Models</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold mb-2">Users</h4>
            <p className="text-sm text-muted-foreground">
              User management with roles, permissions, and profile data.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold mb-2">Products</h4>
            <p className="text-sm text-muted-foreground">
              Product catalog with categories, pricing, and inventory.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold mb-2">Orders</h4>
            <p className="text-sm text-muted-foreground">
              Order processing with status tracking and payment handling.
            </p>
          </div>
        </div>
      </div>

      {/* Simulation Features */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Simulation Features</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-3 border rounded-lg bg-green-50 dark:bg-green-950/20">
            <h4 className="font-medium text-sm mb-1">Real-time Updates</h4>
            <p className="text-xs text-muted-foreground">
              See changes instantly across multiple clients
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-blue-50 dark:bg-blue-950/20">
            <h4 className="font-medium text-sm mb-1">Error Simulation</h4>
            <p className="text-xs text-muted-foreground">
              Practice handling network errors and timeouts
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-purple-50 dark:bg-purple-950/20">
            <h4 className="font-medium text-sm mb-1">Data Validation</h4>
            <p className="text-xs text-muted-foreground">
              Test form validation and data integrity
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-orange-50 dark:bg-orange-950/20">
            <h4 className="font-medium text-sm mb-1">Performance Testing</h4>
            <p className="text-xs text-muted-foreground">
              Measure operation speed and optimization
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-pink-50 dark:bg-pink-950/20">
            <h4 className="font-medium text-sm mb-1">Bulk Operations</h4>
            <p className="text-xs text-muted-foreground">
              Test mass import/export and batch processing
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-indigo-50 dark:bg-indigo-950/20">
            <h4 className="font-medium text-sm mb-1">Access Control</h4>
            <p className="text-xs text-muted-foreground">
              Practice role-based permissions and security
            </p>
          </div>
        </div>
      </div>

      {/* Coming Soon */}
      <div className="p-4 border rounded-lg bg-primary/5">
        <h3 className="text-lg font-semibold mb-3">Interactive CRUD Simulator</h3>
        <p className="text-sm text-muted-foreground mb-3">
          Full interactive environment with sample data, API endpoints, and real-time collaboration.
        </p>
        <div className="text-xs text-muted-foreground">
          Coming Soon
        </div>
      </div>
    </ContentContainer>
  );
}

export default CrudSimulationPage;