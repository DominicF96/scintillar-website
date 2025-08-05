"use client"

import React from "react"
import { ColumnDef } from "@tanstack/react-table"
import { Eye, Edit, Trash2, Copy } from "lucide-react"
import { DataTable, DataTableColumnHeader, DataTableRowActions } from "@/components/ui/data-table"
import { Badge } from "@/components/ui/badge"

// Example data type
export type User = {
  id: string
  name: string
  email: string
  status: "active" | "inactive" | "pending"
  role: "admin" | "user" | "moderator"
  createdAt: string
  lastLogin?: string
}

// Sample data
const sampleData: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    status: "active",
    role: "admin",
    createdAt: "2024-01-15",
    lastLogin: "2024-01-20",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    status: "inactive",
    role: "user",
    createdAt: "2024-01-10",
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob@example.com",
    status: "pending",
    role: "moderator",
    createdAt: "2024-01-20",
    lastLogin: "2024-01-19",
  },
  {
    id: "4",
    name: "Alice Wilson",
    email: "alice@example.com",
    status: "active",
    role: "user",
    createdAt: "2024-01-05",
    lastLogin: "2024-01-21",
  },
  {
    id: "5",
    name: "Charlie Brown",
    email: "charlie@example.com",
    status: "active",
    role: "user",
    createdAt: "2024-01-12",
    lastLogin: "2024-01-18",
  },
]

export function DataTableExample() {
  // Define columns with sorting, formatting, and actions
  const columns: ColumnDef<User>[] = [
    {
      accessorKey: "name",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Name" />
      ),
      cell: ({ row }) => (
        <div className="font-medium">{row.getValue("name")}</div>
      ),
    },
    {
      accessorKey: "email",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Email" />
      ),
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("email")}</div>
      ),
    },
    {
      accessorKey: "status",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Status" />
      ),
      cell: ({ row }) => {
        const status = row.getValue("status") as string
        return (
          <Badge
            variant={
              status === "active"
                ? "default"
                : status === "inactive"
                ? "secondary"
                : "outline"
            }
          >
            {status}
          </Badge>
        )
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id))
      },
    },
    {
      accessorKey: "role",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Role" />
      ),
      cell: ({ row }) => {
        const role = row.getValue("role") as string
        return (
          <Badge variant="outline" className="capitalize">
            {role}
          </Badge>
        )
      },
    },
    {
      accessorKey: "createdAt",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Created" />
      ),
      cell: ({ row }) => {
        const date = new Date(row.getValue("createdAt"))
        return <div>{date.toLocaleDateString()}</div>
      },
    },
    {
      accessorKey: "lastLogin",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Last Login" />
      ),
      cell: ({ row }) => {
        const lastLogin = row.getValue("lastLogin") as string | undefined
        return (
          <div>
            {lastLogin ? new Date(lastLogin).toLocaleDateString() : "Never"}
          </div>
        )
      },
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const user = row.original

        const actions = [
          {
            label: "View details",
            onClick: (data: User) => {
              console.log("View user:", data)
              alert(`Viewing user: ${data.name}`)
            },
            icon: Eye,
          },
          {
            label: "Edit user",
            onClick: (data: User) => {
              console.log("Edit user:", data)
              alert(`Editing user: ${data.name}`)
            },
            icon: Edit,
          },
          {
            label: "Copy ID",
            onClick: (data: User) => {
              navigator.clipboard.writeText(data.id)
              alert(`Copied ID: ${data.id}`)
            },
            icon: Copy,
          },
          {
            label: "Delete user",
            onClick: (data: User) => {
              console.log("Delete user:", data)
              if (confirm(`Are you sure you want to delete ${data.name}?`)) {
                alert(`User ${data.name} would be deleted`)
              }
            },
            icon: Trash2,
          },
        ]

        return <DataTableRowActions row={row} actions={actions} />
      },
    },
  ]

  const handleRowSelectionChange = (selectedRows: User[]) => {
    console.log("Selected rows:", selectedRows)
  }

  return (
    <div className="container mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Data Table Example</h1>
        <p className="text-muted-foreground mt-2">
          A comprehensive data table with search, sorting, row selection, column toggle, and row actions.
        </p>
      </div>

      <DataTable
        columns={columns}
        data={sampleData}
        searchKey="name"
        searchPlaceholder="Search users..."
        onRowSelectionChange={handleRowSelectionChange}
        enableRowSelection={true}
        enableSorting={true}
        enableColumnToggle={true}
        enablePagination={true}
        pageSize={5}
      />

      <div className="mt-8 p-4 bg-muted rounded-lg">
        <h3 className="font-medium mb-2">Features demonstrated:</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Search functionality (try searching by name)</li>
          <li>• Column sorting (click on column headers)</li>
          <li>• Row selection with checkboxes</li>
          <li>• Column visibility toggle (Columns dropdown)</li>
          <li>• Row actions dropdown (three dots menu)</li>
          <li>• Pagination controls</li>
          <li>• Custom cell formatting (badges, dates)</li>
          <li>• Responsive design</li>
        </ul>
      </div>
    </div>
  )
}