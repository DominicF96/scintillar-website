"use client";

import React from "react";
import { 
  Folder, 
  FolderOpen,
  MoreHorizontal,
  Edit,
  Trash2,
  Copy,
  Share2,
  Star,
  FolderPlus
} from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { FolderItem, formatDate } from "@/types/resources.types";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

interface FolderItemProps {
  folder: FolderItem;
  viewMode: 'grid' | 'list';
  isSelected: boolean;
  onSelect: (folderId: string) => void;
  onOpen: (folder: FolderItem) => void;
  onShare?: (folder: FolderItem) => void;
  onStar?: (folder: FolderItem) => void;
  onRename?: (folder: FolderItem) => void;
  onDelete?: (folder: FolderItem) => void;
  className?: string;
}

export default function FolderItemComponent({ 
  folder, 
  viewMode, 
  isSelected, 
  onSelect, 
  onOpen, 
  onShare,
  onStar,
  onRename,
  onDelete,
  className 
}: FolderItemProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (e.detail === 2) {
      // Double click - open folder
      onOpen(folder);
    } else {
      // Single click - select folder
      onSelect(folder.id);
    }
  };

  const actions = [
    {
      label: "Open",
      icon: FolderOpen,
      onClick: () => onOpen(folder),
    },
    ...(onShare ? [{
      label: "Share",
      icon: Share2,
      onClick: () => onShare(folder),
    }] : []),
    {
      label: "Rename",
      icon: Edit,
      onClick: () => onRename?.(folder),
    },
    {
      label: "Copy",
      icon: Copy,
      onClick: () => navigator.clipboard.writeText(folder.name),
    },
    ...(onDelete ? [{
      label: "Delete",
      icon: Trash2,
      onClick: () => onDelete(folder),
      destructive: true,
    }] : []),
  ];

  if (viewMode === 'grid') {
    return (
      <div
        className={cn(
          "group relative p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors cursor-pointer",
          isSelected && "ring-2 ring-primary bg-accent",
          className
        )}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Selection checkbox */}
        <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Checkbox 
            checked={isSelected}
            onCheckedChange={() => onSelect(folder.id)}
            onClick={(e) => e.stopPropagation()}
          />
        </div>

        {/* Star button */}
        {folder.isStarred && (
          <div className="absolute top-2 right-8">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
          </div>
        )}

        {/* Actions menu */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-6 w-6 p-0"
                onClick={(e) => e.stopPropagation()}
              >
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {actions.map((action, index) => (
                <React.Fragment key={action.label}>
                  {index === 1 && <DropdownMenuSeparator />}
                  {index === actions.length - 1 && action.destructive && <DropdownMenuSeparator />}
                  <DropdownMenuItem 
                    onClick={(e) => {
                      e.stopPropagation();
                      action.onClick();
                    }}
                    className={action.destructive ? "text-destructive" : ""}
                  >
                    <action.icon className="h-4 w-4 mr-2" />
                    {action.label}
                  </DropdownMenuItem>
                </React.Fragment>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Folder content */}
        <div className="flex flex-col items-center space-y-2 pt-4">
          {/* Folder icon */}
          <div className="flex items-center justify-center w-16 h-16 rounded-lg">
            {isHovered ? (
              <FolderOpen className="h-12 w-12 text-blue-600" />
            ) : (
              <Folder className="h-12 w-12 text-blue-600" />
            )}
          </div>

          {/* Folder info */}
          <div className="text-center space-y-1 min-h-[3rem]">
            <p className="text-sm font-medium line-clamp-2 leading-tight">{folder.name}</p>
            <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground">
              {folder.itemCount !== undefined && (
                <span>{folder.itemCount} item{folder.itemCount !== 1 ? 's' : ''}</span>
              )}
              {folder.isShared && (
                <Badge variant="outline" className="text-xs px-1 py-0">
                  Shared
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // List view
  return (
    <div
      className={cn(
        "group flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer",
        isSelected && "bg-accent",
        className
      )}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Selection checkbox */}
      <Checkbox 
        checked={isSelected}
        onCheckedChange={() => onSelect(folder.id)}
        onClick={(e) => e.stopPropagation()}
      />

      {/* Folder icon */}
      <div className="flex-shrink-0">
        {isHovered ? (
          <FolderOpen className="h-5 w-5 text-blue-600" />
        ) : (
          <Folder className="h-5 w-5 text-blue-600" />
        )}
      </div>

      {/* Folder info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium truncate">{folder.name}</p>
          {folder.isStarred && (
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 flex-shrink-0" />
          )}
          {folder.isShared && (
            <Badge variant="outline" className="text-xs">
              Shared
            </Badge>
          )}
        </div>
      </div>

      {/* Folder metadata */}
      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
        <span className="hidden sm:block">{folder.owner}</span>
        <span className="hidden md:block">{formatDate(folder.modifiedAt)}</span>
        <span className="w-16 text-right">
          {folder.itemCount !== undefined ? `${folder.itemCount} items` : '—'}
        </span>
      </div>

      {/* Actions menu */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 w-8 p-0"
              onClick={(e) => e.stopPropagation()}
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {actions.map((action, index) => (
              <React.Fragment key={action.label}>
                {index === 1 && <DropdownMenuSeparator />}
                {index === actions.length - 1 && action.destructive && <DropdownMenuSeparator />}
                <DropdownMenuItem 
                  onClick={(e) => {
                    e.stopPropagation();
                    action.onClick();
                  }}
                  className={action.destructive ? "text-destructive" : ""}
                >
                  <action.icon className="h-4 w-4 mr-2" />
                  {action.label}
                </DropdownMenuItem>
              </React.Fragment>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}