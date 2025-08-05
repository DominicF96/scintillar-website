"use client";

import React from "react";
import { 
  FileText, 
  FileSpreadsheet, 
  Presentation, 
  FileImage, 
  FileVideo, 
  FileAudio, 
  FileArchive, 
  FileCode, 
  File, 
  Download,
  Share2,
  Star,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  Copy
} from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { FileItem, formatFileSize, formatDate } from "@/types/resources.types";
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

interface FileItemProps {
  file: FileItem;
  viewMode: 'grid' | 'list';
  isSelected: boolean;
  onSelect: (fileId: string) => void;
  onOpen: (file: FileItem) => void;
  onDownload?: (file: FileItem) => void;
  onShare?: (file: FileItem) => void;
  onRename?: (file: FileItem) => void;
  onDelete?: (file: FileItem) => void;
  className?: string;
}

const FILE_ICONS = {
  document: FileText,
  spreadsheet: FileSpreadsheet,
  presentation: Presentation,
  pdf: FileText,
  image: FileImage,
  video: FileVideo,
  audio: FileAudio,
  archive: FileArchive,
  code: FileCode,
  text: FileText,
  unknown: File,
};

const FILE_COLORS = {
  document: "text-blue-600",
  spreadsheet: "text-green-600",
  presentation: "text-orange-600",
  pdf: "text-red-600",
  image: "text-purple-600",
  video: "text-pink-600",
  audio: "text-indigo-600",
  archive: "text-yellow-600",
  code: "text-gray-600",
  text: "text-gray-600",
  unknown: "text-gray-400",
};

export default function FileItemComponent({ 
  file, 
  viewMode, 
  isSelected, 
  onSelect, 
  onOpen, 
  onDownload,
  onShare,
  onRename,
  onDelete,
  className 
}: FileItemProps) {
  const IconComponent = FILE_ICONS[file.fileType];
  const iconColor = FILE_COLORS[file.fileType];

  const handleClick = (e: React.MouseEvent) => {
    if (e.detail === 2) {
      // Double click - open file
      onOpen(file);
    } else {
      // Single click - select file
      onSelect(file.id);
    }
  };

  const actions = [
    {
      label: "Open",
      icon: Eye,
      onClick: () => onOpen(file),
    },
    {
      label: "Download",
      icon: Download,
      onClick: () => onDownload?.(file),
    },
    ...(onShare ? [{
      label: "Share",
      icon: Share2,
      onClick: () => onShare(file),
    }] : []),
    {
      label: "Rename",
      icon: Edit,
      onClick: () => onRename?.(file),
    },
    {
      label: "Copy",
      icon: Copy,
      onClick: () => navigator.clipboard.writeText(file.name),
    },
    ...(onDelete ? [{
      label: "Delete",
      icon: Trash2,
      onClick: () => onDelete(file),
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
      >
        {/* Selection checkbox */}
        <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Checkbox 
            checked={isSelected}
            onCheckedChange={() => onSelect(file.id)}
            onClick={(e) => e.stopPropagation()}
          />
        </div>

        {/* Star button */}
        {file.isStarred && (
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
                  {index === 2 && <DropdownMenuSeparator />}
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

        {/* File content */}
        <div className="flex flex-col items-center space-y-2 pt-4">
          {/* Thumbnail or icon */}
          <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-muted">
            {file.thumbnailUrl ? (
              <img 
                src={file.thumbnailUrl} 
                alt={file.name}
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <IconComponent className={cn("h-8 w-8", iconColor)} />
            )}
          </div>

          {/* File info */}
          <div className="text-center space-y-1 min-h-[3rem]">
            <p className="text-sm font-medium line-clamp-2 leading-tight">{file.name}</p>
            <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground">
              <span>{formatFileSize(file.size)}</span>
              {file.isShared && (
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
    >
      {/* Selection checkbox */}
      <Checkbox 
        checked={isSelected}
        onCheckedChange={() => onSelect(file.id)}
        onClick={(e) => e.stopPropagation()}
      />

      {/* File icon */}
      <div className="flex-shrink-0">
        {file.thumbnailUrl ? (
          <img 
            src={file.thumbnailUrl} 
            alt={file.name}
            className="w-8 h-8 object-cover rounded"
          />
        ) : (
          <IconComponent className={cn("h-5 w-5", iconColor)} />
        )}
      </div>

      {/* File info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium truncate">{file.name}</p>
          {file.isStarred && (
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 flex-shrink-0" />
          )}
          {file.isShared && (
            <Badge variant="outline" className="text-xs">
              Shared
            </Badge>
          )}
        </div>
      </div>

      {/* File metadata */}
      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
        <span className="hidden sm:block">{file.owner}</span>
        <span className="hidden md:block">{formatDate(file.modifiedAt)}</span>
        <span className="w-16 text-right">{formatFileSize(file.size)}</span>
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
                {index === 2 && <DropdownMenuSeparator />}
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
