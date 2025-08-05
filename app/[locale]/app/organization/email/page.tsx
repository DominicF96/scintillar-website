import React from "react";
import ContentContainer from "@/components/layout/containers/content-container";
import { Mail, Send, Archive, Star, Filter } from "lucide-react";

async function EmailPage({ params }) {
  const { locale } = await params;
  
  return (
    <ContentContainer className="py-4 px-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Mail className="h-6 w-6" />
          Email Management
        </h2>
        <p className="text-muted-foreground">
          Integrated email system for seamless communication and organization.
        </p>
      </div>
      
      {/* Email Features */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Email Features</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Send className="h-4 w-4 text-blue-500" />
              Compose & Send
            </h4>
            <p className="text-sm text-muted-foreground">
              Rich text editor with templates, scheduling, and attachment support.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Archive className="h-4 w-4 text-green-500" />
              Organization
            </h4>
            <p className="text-sm text-muted-foreground">
              Smart folders, labels, and automated sorting for better email management.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-500" />
              Priority Management
            </h4>
            <p className="text-sm text-muted-foreground">
              Mark important emails and set up priority filters for critical messages.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Filter className="h-4 w-4 text-purple-500" />
              Advanced Filtering
            </h4>
            <p className="text-sm text-muted-foreground">
              Create custom rules and filters to automatically organize incoming emails.
            </p>
          </div>
        </div>
      </div>

      {/* Email Statistics */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Email Overview</h3>
        <div className="grid gap-4 md:grid-cols-4">
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2 text-2xl">0</h4>
            <p className="text-xs text-muted-foreground">Unread Messages</p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2 text-2xl">0</h4>
            <p className="text-xs text-muted-foreground">Starred Messages</p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2 text-2xl">0</h4>
            <p className="text-xs text-muted-foreground">Sent Today</p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <h4 className="font-semibold mb-2 text-2xl">0</h4>
            <p className="text-xs text-muted-foreground">Archived</p>
          </div>
        </div>
      </div>

      {/* Coming Soon */}
      <div className="p-4 border rounded-lg bg-primary/5">
        <h3 className="text-lg font-semibold mb-3">Advanced Email Features</h3>
        <p className="text-sm text-muted-foreground mb-3">
          AI-powered email sorting, smart replies, and integrated team collaboration tools.
        </p>
        <div className="text-xs text-muted-foreground">
          Coming Soon
        </div>
      </div>
    </ContentContainer>
  );
}

export default EmailPage;