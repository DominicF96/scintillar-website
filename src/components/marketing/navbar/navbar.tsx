import React from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/common/theme-toggle";
import Logo from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import * as i18n from "@/i18n/web/components/navbar.i18n";
import { useTranslation } from "@/lib/hooks/useTranslation";
import "./navbar.scss";

function Navbar() {
  const { t, navbar } = useTranslation(i18n);

  return (
    <nav className="web-navbar">
      <div className="nav-content px-8 flex justify-between items-center">
        <Link href="/">
          <Logo variant="horizontal" className="select-none" />
        </Link>
        <div className="flex gap-2">
          <Link href="/app">
            <Button className="hidden md:block">{navbar.login}</Button>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
