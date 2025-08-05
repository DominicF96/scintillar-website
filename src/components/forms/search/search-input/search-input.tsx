"use client"

import * as React from "react"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils/cn"

export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string
  iconClassName?: string
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, containerClassName, iconClassName, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 ",
          containerClassName
        )}
      >
        <Search className={cn("h-4 w-4 text-muted-foreground mr-2", iconClassName)} />
        <input
          className={cn(
            "flex-1 bg-transparent placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
SearchInput.displayName = "SearchInput"

export { SearchInput }