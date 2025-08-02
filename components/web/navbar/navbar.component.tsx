import React from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/shared/theme-toggle/theme-toggle.component";
import Logo from "@/components/shared/logo.component";
import { Button } from "@/components/ui/button";
import * as i18n from "@/i18n/web/components/navbar.i18n";
import { Locale } from "@/i18n.config";
import "./navbar.component.scss";

type Props = {
  locale: Locale;
};

function Navbar({ locale }: Props) {
  const t = i18n[locale];

  return (
    <nav className="web-navbar">
      <div className="nav-content px-8 flex justify-between items-center">
        <Link href="/">
          <Logo variant="horizontal" className="select-none" />
        </Link>
        <div className="flex gap-2">
          <Link href="/app">
            <Button className="hidden md:block">{t.navbar.login}</Button>
          </Link>
          <ThemeToggle locale={locale} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
