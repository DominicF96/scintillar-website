import React from "react";
import ContentContainer from "@/components/layout/containers/content-container";
import { MessageSquare, Users, Send, Smile, Paperclip } from "lucide-react";

async function ChatSimulationPage({ params }) {
  const { locale } = await params;
  
  return (
    <ContentContainer className="py-4 px-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <MessageSquare className="h-6 w-6" />
          Chat System Simulation
        </h2>
        <p className="text-muted-foreground">
          Explore real-time messaging features and communication patterns.
        </p>
      </div>
      
      {/* Chat Features */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Chat Features</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Send className="h-4 w-4 text-blue-500" />
              Real-time Messaging
            </h4>
            <p className="text-sm text-muted-foreground">
              Instant message delivery with typing indicators and read receipts.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Users className="h-4 w-4 text-green-500" />
              Group Conversations
            </h4>
            <p className="text-sm text-muted-foreground">
              Multi-user chat rooms with member management and permissions.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Paperclip className="h-4 w-4 text-purple-500" />
              File Sharing
            </h4>
            <p className="text-sm text-muted-foreground">
              Share documents, images, and media with drag-and-drop support.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Smile className="h-4 w-4 text-yellow-500" />
              Rich Content
            </h4>
            <p className="text-sm text-muted-foreground">
              Emojis, reactions, formatted text, and inline media previews.
            </p>
          </div>
        </div>
      </div>

      {/* Chat Types */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Chat Types</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold mb-2">Direct Messages</h4>
            <p className="text-sm text-muted-foreground">
              One-on-one private conversations with end-to-end encryption.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold mb-2">Group Chats</h4>
            <p className="text-sm text-muted-foreground">
              Team discussions with up to 500 members and moderation tools.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold mb-2">Channels</h4>
            <p className="text-sm text-muted-foreground">
              Public broadcast channels for announcements and updates.
            </p>
          </div>
        </div>
      </div>

      {/* Advanced Features */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Advanced Features</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-3 border rounded-lg bg-blue-50 dark:bg-blue-950/20">
            <h4 className="font-medium text-sm mb-1">Message Threading</h4>
            <p className="text-xs text-muted-foreground">
              Organized discussions with reply threads
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-green-50 dark:bg-green-950/20">
            <h4 className="font-medium text-sm mb-1">Voice Messages</h4>
            <p className="text-xs text-muted-foreground">
              Audio recordings with playback controls
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-purple-50 dark:bg-purple-950/20">
            <h4 className="font-medium text-sm mb-1">Message Search</h4>
            <p className="text-xs text-muted-foreground">
              Full-text search across chat history
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-orange-50 dark:bg-orange-950/20">
            <h4 className="font-medium text-sm mb-1">Bot Integration</h4>
            <p className="text-xs text-muted-foreground">
              Automated responses and commands
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-pink-50 dark:bg-pink-950/20">
            <h4 className="font-medium text-sm mb-1">Message Scheduling</h4>
            <p className="text-xs text-muted-foreground">
              Send messages at specific times
            </p>
          </div>
          <div className="p-3 border rounded-lg bg-indigo-50 dark:bg-indigo-950/20">
            <h4 className="font-medium text-sm mb-1">Analytics</h4>
            <p className="text-xs text-muted-foreground">
              Usage stats and engagement metrics
            </p>
          </div>
        </div>
      </div>

      {/* Coming Soon */}
      <div className="p-4 border rounded-lg bg-primary/5">
        <h3 className="text-lg font-semibold mb-3">Interactive Chat Simulator</h3>
        <p className="text-sm text-muted-foreground mb-3">
          Full chat interface with AI participants, real-time updates, and customizable scenarios.
        </p>
        <div className="text-xs text-muted-foreground">
          Coming Soon
        </div>
      </div>
    </ContentContainer>
  );
}

export default ChatSimulationPage;