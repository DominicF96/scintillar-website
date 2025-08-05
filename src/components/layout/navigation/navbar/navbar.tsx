"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Logo from "@/components/common/logo";
// import * as i18n from "@/i18n/components/web/navbar.i18n";
import UserMenu from "@/components/features/auth/user-menu";
import { useSidebar } from "@/lib/providers/sidebar.context";
import Notifications from "@/components/features/notifications";
import BreadcrumbComponent from "@/components/layout/navigation/breadcrumb";
import "./navbar.scss";

function Navbar() {
  const { toggleSidebar } = useSidebar();

  return (
    <nav className="bg-card border-b">
      <div className="nav-content py-2 md:py-4 pl-2 md:pl-[0.5rem] pr-4 md:pr-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Button
            onClick={toggleSidebar}
            size="icon"
            variant="ghost"
            className="w-12 h-12"
            aria-label="Toggle sidebar"
          >
            <Menu className="h-5 w-5" />
          </Button>
         <div className="flex items-center gap-2">
           <Link href="/app">
            <Logo variant="standalone" className="select-none" />
          </Link>
          <span className="text-muted-foreground">/</span>
          <BreadcrumbComponent />
         </div>
        </div>
        <div className="flex items-center gap-2">
          <Notifications />
          <UserMenu />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
