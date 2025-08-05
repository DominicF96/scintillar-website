"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { 
  Grid3X3, 
  List, 
  Upload, 
  FolderPlus, 
  Search, 
  SortAsc, 
  SortDesc, 
  Filter,
  MoreHorizontal,
  Download,
  Share2,
  Trash2,
  Home,
  ChevronRight,
  RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils/cn";
import FileItemComponent from "@/components/features/resources/file-item";
import FolderItemComponent from "@/components/features/resources/folder-item";
import { useTranslation } from "@/lib/hooks/useTranslation";
import * as i18n from "@/i18n/app/pages/resources.i18n";
import { 
  ResourceItem, 
  FileItem, 
  FolderItem, 
  BreadcrumbItem,
  getFileTypeFromExtension,
  getFileExtension 
} from "@/types/resources.types";

// Sample data for demonstration
const sampleData: ResourceItem[] = [
  {
    id: "folder-1",
    name: "Documents",
    type: "folder",
    modifiedAt: new Date("2024-01-15"),
    createdAt: new Date("2024-01-10"),
    owner: "John Doe",
    path: "/Documents",
    itemCount: 12,
    isShared: false,
    isStarred: true,
  },
  {
    id: "folder-2",
    name: "Projects",
    type: "folder",
    modifiedAt: new Date("2024-01-20"),
    createdAt: new Date("2024-01-05"),
    owner: "John Doe",
    path: "/Projects",
    itemCount: 8,
    isShared: true,
    isStarred: false,
  },
  {
    id: "file-1",
    name: "presentation.pptx",
    type: "file",
    fileType: "presentation",
    size: 2548000,
    modifiedAt: new Date("2024-01-22"),
    createdAt: new Date("2024-01-20"),
    owner: "John Doe",
    path: "/presentation.pptx",
    extension: "pptx",
    isShared: true,
    isStarred: false,
  },
  {
    id: "file-2",
    name: "budget.xlsx",
    type: "file",
    fileType: "spreadsheet",
    size: 125000,
    modifiedAt: new Date("2024-01-21"),
    createdAt: new Date("2024-01-18"),
    owner: "Jane Smith",
    path: "/budget.xlsx",
    extension: "xlsx",
    isShared: false,
    isStarred: true,
  },
  {
    id: "file-3",
    name: "report.pdf",
    type: "file",
    fileType: "pdf",
    size: 896000,
    modifiedAt: new Date("2024-01-19"),
    createdAt: new Date("2024-01-15"),
    owner: "Bob Johnson",
    path: "/report.pdf",
    extension: "pdf",
    isShared: false,
    isStarred: false,
  },
  {
    id: "file-4",
    name: "team-photo.jpg",
    type: "file",
    fileType: "image",
    size: 1256000,
    modifiedAt: new Date("2024-01-18"),
    createdAt: new Date("2024-01-18"),
    owner: "Alice Wilson",
    path: "/team-photo.jpg",
    extension: "jpg",
    thumbnailUrl: "https://picsum.photos/200/200?random=1",
    isShared: true,
    isStarred: false,
  },
  {
    id: "file-5",
    name: "app.js",
    type: "file",
    fileType: "code",
    size: 45000,
    modifiedAt: new Date("2024-01-23"),
    createdAt: new Date("2024-01-20"),
    owner: "John Doe",
    path: "/app.js",
    extension: "js",
    isShared: false,
    isStarred: false,
  },
  {
    id: "folder-3",
    name: "Images",
    type: "folder",
    modifiedAt: new Date("2024-01-17"),
    createdAt: new Date("2024-01-12"),
    owner: "Alice Wilson",
    path: "/Images",
    itemCount: 25,
    isShared: false,
    isStarred: false,
  },
];

export default function ResourcesHomePage() {
  const router = useRouter();
  const t = useTranslation(i18n);
  
  const [items] = useState<ResourceItem[]>(sampleData);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'modified' | 'size' | 'type'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort items
  const filteredAndSortedItems = useMemo(() => {
    let filtered = items;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort items
    filtered.sort((a, b) => {
      let compareValue = 0;

      switch (sortBy) {
        case 'name':
          compareValue = a.name.localeCompare(b.name);
          break;
        case 'modified':
          compareValue = a.modifiedAt.getTime() - b.modifiedAt.getTime();
          break;
        case 'size':
          if (a.type === 'file' && b.type === 'file') {
            compareValue = (a as FileItem).size - (b as FileItem).size;
          } else if (a.type === 'folder' && b.type === 'folder') {
            const aCount = (a as FolderItem).itemCount || 0;
            const bCount = (b as FolderItem).itemCount || 0;
            compareValue = aCount - bCount;
          } else {
            compareValue = a.type === 'folder' ? -1 : 1;
          }
          break;
        case 'type':
          if (a.type === b.type) {
            if (a.type === 'file' && b.type === 'file') {
              compareValue = (a as FileItem).fileType.localeCompare((b as FileItem).fileType);
            }
          } else {
            compareValue = a.type === 'folder' ? -1 : 1;
          }
          break;
      }

      return sortOrder === 'asc' ? compareValue : -compareValue;
    });

    return filtered;
  }, [items, searchQuery, sortBy, sortOrder]);

  const handleSelectItem = (itemId: string) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleSelectAll = () => {
    if (selectedItems.length === filteredAndSortedItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(filteredAndSortedItems.map(item => item.id));
    }
  };

  const handleOpenItem = (item: ResourceItem) => {
    if (item.type === 'folder') {
      const folderPath = encodeURIComponent(item.name);
      router.push(`/app/resources/${folderPath}`);
    } else {
      console.log('Opening file:', item.name);
      // TODO: Open file preview/download
    }
  };

  // Generate breadcrumbs for home
  const breadcrumbs: BreadcrumbItem[] = [
    { name: t.navigation.home, path: "/app/resources/home" },
  ];

  const handleBulkAction = (action: string) => {
    console.log(`Bulk action ${action} on items:`, selectedItems);
    setSelectedItems([]);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex-shrink-0 p-6 border-b">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">{t.title}</h1>
            <p className="text-muted-foreground">{t.description}</p>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              {t.buttons.refresh}
            </Button>
            <Button variant="outline" size="sm">
              <Upload className="h-4 w-4 mr-2" />
              {t.buttons.upload}
            </Button>
            <Button size="sm">
              <FolderPlus className="h-4 w-4 mr-2" />
              {t.buttons.newFolder}
            </Button>
          </div>
        </div>

        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={crumb.path}>
              {index > 0 && <ChevronRight className="h-4 w-4" />}
              <button 
                className="hover:text-foreground transition-colors flex items-center"
                onClick={() => router.push(crumb.path)}
              >
                {index === 0 ? <Home className="h-4 w-4" /> : crumb.name}
              </button>
            </React.Fragment>
          ))}
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={t.toolbar.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 w-64"
              />
            </div>

            {/* Filters */}
            <DropdownMenu open={showFilters} onOpenChange={setShowFilters}>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  {t.toolbar.filters}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuCheckboxItem>
                  {t.filters.showSharedOnly}
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  {t.filters.showStarredOnly}
                </DropdownMenuCheckboxItem>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem>
                  {t.filters.documents}
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  {t.filters.images}
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  {t.filters.videos}
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Sort */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  {sortOrder === 'asc' ? <SortAsc className="h-4 w-4 mr-2" /> : <SortDesc className="h-4 w-4 mr-2" />}
                  {t.toolbar.sort}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSortBy('name')}>
                  {t.sorting.name} {sortBy === 'name' && '✓'}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy('modified')}>
                  {t.sorting.modified} {sortBy === 'modified' && '✓'}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy('size')}>
                  {t.sorting.size} {sortBy === 'size' && '✓'}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy('type')}>
                  {t.sorting.type} {sortBy === 'type' && '✓'}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
                  {sortOrder === 'asc' ? t.sorting.descending : t.sorting.ascending}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex items-center space-x-2">
            {/* Selection info and bulk actions */}
            {selectedItems.length > 0 && (
              <>
                <Badge variant="secondary">
                  {selectedItems.length} {t.status.selected}
                </Badge>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      <MoreHorizontal className="h-4 w-4 mr-2" />
                      {t.toolbar.actions}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => handleBulkAction('download')}>
                      <Download className="h-4 w-4 mr-2" />
                      {t.actions.download}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleBulkAction('share')}>
                      <Share2 className="h-4 w-4 mr-2" />
                      {t.actions.share}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem 
                      onClick={() => handleBulkAction('delete')}
                      className="text-destructive"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      {t.actions.delete}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Separator orientation="vertical" className="h-6" />
              </>
            )}

            {/* View mode toggle */}
            <div className="flex border rounded-md">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-r-none"
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6">
        {filteredAndSortedItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <div className="text-6xl mb-4">📁</div>
            <h3 className="text-lg font-medium mb-2">{t.status.noItems}</h3>
            <p className="text-muted-foreground">
              {searchQuery ? t.status.noItemsSearch : t.status.noItemsEmpty}
            </p>
          </div>
        ) : (
          <>
            {/* Select all checkbox (only in list view) */}
            {viewMode === 'list' && (
              <div className="flex items-center space-x-3 px-3 py-2 mb-2 text-sm font-medium text-muted-foreground border-b">
                <input
                  type="checkbox"
                  checked={selectedItems.length === filteredAndSortedItems.length}
                  onChange={handleSelectAll}
                  className="h-4 w-4"
                />
                <div className="flex-1 min-w-0">{t.grid.nameColumn}</div>
                <div className="w-24 hidden sm:block">{t.grid.ownerColumn}</div>
                <div className="w-24 hidden md:block">{t.grid.modifiedColumn}</div>
                <div className="w-16 text-right">{t.grid.sizeColumn}</div>
                <div className="w-10"></div>
              </div>
            )}

            {/* Items grid/list */}
            <div className={cn(
              viewMode === 'grid' 
                ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
                : "space-y-1"
            )}>
              {filteredAndSortedItems.map((item) => {
                if (item.type === 'folder') {
                  return (
                    <FolderItemComponent
                      key={item.id}
                      folder={item as FolderItem}
                      viewMode={viewMode}
                      isSelected={selectedItems.includes(item.id)}
                      onSelect={handleSelectItem}
                      onOpen={handleOpenItem}
                    />
                  );
                } else {
                  return (
                    <FileItemComponent
                      key={item.id}
                      file={item as FileItem}
                      viewMode={viewMode}
                      isSelected={selectedItems.includes(item.id)}
                      onSelect={handleSelectItem}
                      onOpen={handleOpenItem}
                    />
                  );
                }
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}