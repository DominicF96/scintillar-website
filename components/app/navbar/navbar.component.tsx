"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Logo from "@/components/shared/logo.component";
// import * as i18n from "@/i18n/components/web/navbar.i18n";
import { Locale } from "@/i18n.config";
import UserMenu from "@/components/app/user-menu/user-menu.component";
import { useSidebar } from "@/contexts/sidebar.context";
import Notifications from "../notifications/notifications.component";
import "./navbar.component.scss";

type Props = {
  locale: Locale;
};

function Navbar({ locale }: Props) {
  // const t = i18n[locale];
  const { toggleSidebar } = useSidebar();

  return (
    <nav className="bg-card border-b">
      <div className="nav-content py-4 pl-[0.9rem] pr-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Button
            onClick={toggleSidebar}
            size="icon"
            variant="ghost"
            className="h-9 w-9"
            aria-label="Toggle sidebar"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <Link href="/app">
            <Logo variant="horizontal" className="select-none" />
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Notifications locale={locale} />
          <UserMenu locale={locale} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
