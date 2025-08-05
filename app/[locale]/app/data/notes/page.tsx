import React from "react";
import ContentContainer from "@/components/layout/containers/content-container";
import { FileText, Plus, Search, Tag, Share, Archive } from "lucide-react";

async function NotesPage({ params }) {
  const { locale } = await params;
  
  return (
    <ContentContainer className="py-4 px-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <FileText className="h-6 w-6" />
          Notes Management
        </h2>
        <p className="text-muted-foreground">
          Capture ideas, organize thoughts, and build your knowledge base.
        </p>
      </div>
      
      {/* Notes Features */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Notes Features</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Plus className="h-4 w-4 text-green-500" />
              Rich Text Editor
            </h4>
            <p className="text-sm text-muted-foreground">
              Create notes with rich formatting, images, links, and code blocks.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Search className="h-4 w-4 text-blue-500" />
              Full-Text Search
            </h4>
            <p className="text-sm text-muted-foreground">
              Find any note instantly with powerful search across all content.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Tag className="h-4 w-4 text-purple-500" />
              Tags & Categories
            </h4>
            <p className="text-sm text-muted-foreground">
              Organize notes with tags, categories, and custom taxonomies.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Share className="h-4 w-4 text-orange-500" />
              Collaboration
            </h4>
            <p className="text-sm text-muted-foreground">
              Share notes with team members and collaborate in real-time.
            </p>
          </div>
        </div>
      </div>

      {/* Notes Statistics */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Notes Overview</h3>
        <div className="grid gap-4 md:grid-cols-4">
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2 text-2xl text-blue-600">0</h4>
            <p className="text-xs text-muted-foreground">Total Notes</p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2 text-2xl text-green-600">0</h4>
            <p className="text-xs text-muted-foreground">Folders</p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2 text-2xl text-purple-600">0</h4>
            <p className="text-xs text-muted-foreground">Tags Used</p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2 text-2xl text-orange-600">0</h4>
            <p className="text-xs text-muted-foreground">Shared Notes</p>
          </div>
        </div>
      </div>

      {/* Note Types */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Note Categories</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold mb-2">Meeting Notes</h4>
            <p className="text-sm text-muted-foreground">
              Capture meeting discussions, decisions, and action items.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold mb-2">Project Documentation</h4>
            <p className="text-sm text-muted-foreground">
              Technical documentation, specifications, and project details.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold mb-2">Personal Notes</h4>
            <p className="text-sm text-muted-foreground">
              Ideas, thoughts, research, and personal knowledge base.
            </p>
          </div>
        </div>
      </div>

      {/* Advanced Features */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Advanced Features</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-3 border rounded-lg bg-blue-50 dark:bg-blue-950/20">
            <h4 className="font-medium text-sm mb-1">Markdown Support</h4>
            <p className="text-xs text-muted-foreground">
              Write in Markdown with live preview
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-green-50 dark:bg-green-950/20">
            <h4 className="font-medium text-sm mb-1">Version History</h4>
            <p className="text-xs text-muted-foreground">
              Track changes and restore previous versions
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-purple-50 dark:bg-purple-950/20">
            <h4 className="font-medium text-sm mb-1">Templates</h4>
            <p className="text-xs text-muted-foreground">
              Pre-built templates for common note types
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-orange-50 dark:bg-orange-950/20">
            <h4 className="font-medium text-sm mb-1">File Attachments</h4>
            <p className="text-xs text-muted-foreground">
              Attach images, PDFs, and other documents
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-pink-50 dark:bg-pink-950/20">
            <h4 className="font-medium text-sm mb-1">Linking & References</h4>
            <p className="text-xs text-muted-foreground">
              Link notes together and create references
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-indigo-50 dark:bg-indigo-950/20">
            <h4 className="font-medium text-sm mb-1">Export Options</h4>
            <p className="text-xs text-muted-foreground">
              Export to PDF, HTML, or Markdown formats
            </p>
          </div>
        </div>
      </div>

      {/* Note Organization */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Organization Methods</h3>
        <div className="grid gap-4 md:grid-cols-4">
          <div className="p-3 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2">Folders</h4>
            <p className="text-xs text-muted-foreground">
              Hierarchical folder structure
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2">Tags</h4>
            <p className="text-xs text-muted-foreground">
              Flexible tagging system
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2">Favorites</h4>
            <p className="text-xs text-muted-foreground">
              Quick access to important notes
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2">Recent</h4>
            <p className="text-xs text-muted-foreground">
              Recently viewed and edited
            </p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="space-y-2">
          <div className="p-3 border rounded-lg bg-muted/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Plus className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Create new note</span>
            </div>
            <kbd className="px-2 py-1 bg-muted rounded text-xs">⌘N</kbd>
          </div>
          <div className="p-3 border rounded-lg bg-muted/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Search className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Search notes</span>
            </div>
            <kbd className="px-2 py-1 bg-muted rounded text-xs">⌘F</kbd>
          </div>
          <div className="p-3 border rounded-lg bg-muted/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Archive className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Archive selected</span>
            </div>
            <kbd className="px-2 py-1 bg-muted rounded text-xs">⌘E</kbd>
          </div>
        </div>
      </div>

      {/* Coming Soon */}
      <div className="p-4 border rounded-lg bg-primary/5">
        <h3 className="text-lg font-semibold mb-3">AI-Enhanced Note Taking</h3>
        <p className="text-sm text-muted-foreground mb-3">
          AI-powered note suggestions, automatic tagging, content summarization, and intelligent linking between related notes.
        </p>
        <div className="text-xs text-muted-foreground">
          Coming Soon
        </div>
      </div>
    </ContentContainer>
  );
}

export default NotesPage;