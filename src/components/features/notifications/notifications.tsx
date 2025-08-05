"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Bell, Check } from "lucide-react";
import * as i18n from "@/i18n/app/components/notifications.i18n";
import { useTranslation } from "@/lib/hooks/useTranslation";
import { pluralize, interpolate } from "@/lib/utils/i18n-utils";

interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  type: "info" | "warning" | "success" | "error";
}


// Mock notifications data
const mockNotifications: Notification[] = [
  {
    id: "1",
    title: "System Update",
    message: "Version 2.1.0 has been installed successfully",
    timestamp: new Date(Date.now() - 5 * 60 * 1000), // 5 minutes ago
    read: false,
    type: "success",
  },
  {
    id: "2",
    title: "City Expansion Complete",
    message: "Your city has expanded to accommodate 1,000 new residents",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    read: false,
    type: "info",
  },
  {
    id: "3",
    title: "Energy Grid Alert",
    message: "Power consumption is approaching maximum capacity",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    read: true,
    type: "warning",
  },
];

export default function Notifications() {
  const [notifications, setNotifications] =
    useState<Notification[]>(mockNotifications);
  const { t, plural, timeAgo } = useTranslation(i18n);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const formatTimeAgo = (timestamp: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - timestamp.getTime();
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMinutes < 1) return timeAgo.now;
    if (diffMinutes < 60) return `${diffMinutes}${timeAgo.minutes}`;
    if (diffHours < 24) return `${diffHours}${timeAgo.hours}`;
    return `${diffDays}${timeAgo.days}`;
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const loadMore = () => {
    // Placeholder function for loading more notifications
    console.log("Load more notifications");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative h-10 w-10 rounded-full">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-primary text-primary-foreground hover:bg-primary/90">
              {unreadCount > 9 ? "9+" : unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-[350px]">
        <div className="flex items-center justify-between px-3 py-2">
          <DropdownMenuLabel className="p-0">
            {t.title}
            {/* Example using pluralization */}
            <div className="text-xs text-muted-foreground mt-1">
              {interpolate(
                pluralize(unreadCount, plural.notification),
                { count: unreadCount }
              )}
            </div>
          </DropdownMenuLabel>
          {unreadCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={markAllAsRead}
              className="h-auto p-1 text-xs"
            >
              <Check className="h-3 w-3 mr-1" />
              {t.markAllRead}
            </Button>
          )}
        </div>

        <DropdownMenuSeparator />

        {notifications.length === 0 ? (
          <div className="px-3 py-4 text-center text-sm text-muted-foreground">
            {t.empty}
          </div>
        ) : (
          <>
            <div className="max-h-64 overflow-y-auto">
              {notifications.map((notification) => (
                <DropdownMenuItem
                  key={notification.id}
                  className="px-3 py-3 cursor-pointer focus:bg-accent"
                  onClick={() =>
                    !notification.read && markAsRead(notification.id)
                  }
                >
                  <div className="flex items-start gap-3 w-full">
                    <div
                      className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        notification.read ? "bg-muted" : "bg-primary"
                      }`}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-medium truncate">
                          {notification.title}
                        </p>
                        <span className="text-xs text-muted-foreground flex-shrink-0">
                          {formatTimeAgo(notification.timestamp)}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {notification.message}
                      </p>
                    </div>
                  </div>
                </DropdownMenuItem>
              ))}
            </div>
            
            {/* Load More Button */}
            <DropdownMenuSeparator />
            <div className="p-2">
              <Button
                variant="ghost"
                onClick={loadMore}
                className="w-full"
              >
                {t.loadMore}
              </Button>
            </div>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
