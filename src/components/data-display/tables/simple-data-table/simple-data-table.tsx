"use client"

import React from "react"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable, DataTableColumnHeader } from "@/components/ui/data-table"

// Simple data type
type Product = {
  id: string
  name: string
  price: number
  category: string
  inStock: boolean
}

// Sample data
const products: Product[] = [
  { id: "1", name: "Laptop", price: 999, category: "Electronics", inStock: true },
  { id: "2", name: "Phone", price: 699, category: "Electronics", inStock: false },
  { id: "3", name: "Desk", price: 299, category: "Furniture", inStock: true },
  { id: "4", name: "Chair", price: 199, category: "Furniture", inStock: true },
  { id: "5", name: "Monitor", price: 399, category: "Electronics", inStock: false },
]

export function SimpleDataTableExample() {
  // Simple column definitions
  const columns: ColumnDef<Product>[] = [
    {
      accessorKey: "name",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Name" />
      ),
    },
    {
      accessorKey: "price",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Price" />
      ),
      cell: ({ row }) => {
        const price = parseFloat(row.getValue("price"))
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(price)
        return <div className="font-medium">{formatted}</div>
      },
    },
    {
      accessorKey: "category",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Category" />
      ),
    },
    {
      accessorKey: "inStock",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="In Stock" />
      ),
      cell: ({ row }) => {
        const inStock = row.getValue("inStock") as boolean
        return (
          <div className={inStock ? "text-green-600" : "text-red-600"}>
            {inStock ? "Yes" : "No"}
          </div>
        )
      },
    },
  ]

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4">Simple Product Table</h2>
      <DataTable
        columns={columns}
        data={products}
        searchKey="name"
        searchPlaceholder="Search products..."
        enableRowSelection={false}
        enablePagination={false}
      />
    </div>
  )
}