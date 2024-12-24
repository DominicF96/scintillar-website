import React from "react";
import Logo from "../logo.component";
import { Locale } from "@/i18n.config";
import { ThemeToggle } from "../theme-toggle/theme-toggle.component";
import { Button } from "../ui/button";
import * as i18n from "@/i18n/components/navbar.i18n";
import "./navbar.component.scss";

type Props = {
  locale: Locale;
};

function Navbar({ locale }: Props) {
  const t = i18n[locale];

  return (
    <nav>
      <div className="nav-content px-8 flex justify-between items-center">
        <Logo variant="horizontal" />
        <div className="flex gap-2">
          <Button className="hidden md:block">{t.navbar.login}</Button>
          <ThemeToggle locale={locale} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
