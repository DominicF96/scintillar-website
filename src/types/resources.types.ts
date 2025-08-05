export type FileType = 
  | 'document' 
  | 'spreadsheet' 
  | 'presentation' 
  | 'pdf' 
  | 'image' 
  | 'video' 
  | 'audio' 
  | 'archive' 
  | 'code' 
  | 'text' 
  | 'unknown';

export interface FileItem {
  id: string;
  name: string;
  type: 'file';
  fileType: FileType;
  size: number;
  modifiedAt: Date;
  createdAt: Date;
  owner: string;
  path: string;
  extension?: string;
  thumbnailUrl?: string;
  downloadUrl?: string;
  isShared?: boolean;
  isStarred?: boolean;
}

export interface FolderItem {
  id: string;
  name: string;
  type: 'folder';
  modifiedAt: Date;
  createdAt: Date;
  owner: string;
  path: string;
  itemCount?: number;
  isShared?: boolean;
  isStarred?: boolean;
}

export type ResourceItem = FileItem | FolderItem;

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface FileExplorerState {
  currentPath: string;
  items: ResourceItem[];
  selectedItems: string[];
  viewMode: 'grid' | 'list';
  sortBy: 'name' | 'modified' | 'size' | 'type';
  sortOrder: 'asc' | 'desc';
  isLoading: boolean;
}

export const FILE_TYPE_EXTENSIONS: Record<string, FileType> = {
  // Documents
  'doc': 'document',
  'docx': 'document',
  'odt': 'document',
  'rtf': 'document',
  
  // Spreadsheets
  'xls': 'spreadsheet',
  'xlsx': 'spreadsheet',
  'ods': 'spreadsheet',
  'csv': 'spreadsheet',
  
  // Presentations
  'ppt': 'presentation',
  'pptx': 'presentation',
  'odp': 'presentation',
  
  // PDF
  'pdf': 'pdf',
  
  // Images
  'jpg': 'image',
  'jpeg': 'image',
  'png': 'image',
  'gif': 'image',
  'bmp': 'image',
  'svg': 'image',
  'webp': 'image',
  
  // Videos
  'mp4': 'video',
  'avi': 'video',
  'mov': 'video',
  'wmv': 'video',
  'flv': 'video',
  'webm': 'video',
  'mkv': 'video',
  
  // Audio
  'mp3': 'audio',
  'wav': 'audio',
  'flac': 'audio',
  'aac': 'audio',
  'ogg': 'audio',
  'wma': 'audio',
  
  // Archives
  'zip': 'archive',
  'rar': 'archive',
  '7z': 'archive',
  'tar': 'archive',
  'gz': 'archive',
  
  // Code
  'js': 'code',
  'ts': 'code',
  'jsx': 'code',
  'tsx': 'code',
  'html': 'code',
  'css': 'code',
  'scss': 'code',
  'json': 'code',
  'xml': 'code',
  'py': 'code',
  'java': 'code',
  'cpp': 'code',
  'c': 'code',
  'php': 'code',
  'rb': 'code',
  'go': 'code',
  'rs': 'code',
  
  // Text
  'txt': 'text',
  'md': 'text',
  'readme': 'text',
};

export function getFileTypeFromExtension(filename: string): FileType {
  const extension = filename.split('.').pop()?.toLowerCase();
  if (!extension) return 'unknown';
  return FILE_TYPE_EXTENSIONS[extension] || 'unknown';
}

export function getFileExtension(filename: string): string | undefined {
  const parts = filename.split('.');
  return parts.length > 1 ? parts.pop()?.toLowerCase() : undefined;
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

export function formatDate(date: Date): string {
  const now = new Date();
  const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
  
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minutes ago`;
  } else if (diffInMinutes < 1440) {
    const hours = Math.floor(diffInMinutes / 60);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (diffInMinutes < 10080) {
    const days = Math.floor(diffInMinutes / 1440);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else {
    return date.toLocaleDateString();
  }
}