import React from "react";
import Link from "next/link";
import Logo from "@/components/shared/logo.component";
import * as i18n from "@/i18n/components/web/navbar.i18n";
import { Locale } from "@/i18n.config";
import UserMenu from "@/components/app/user-menu/user-menu.component";
import "./navbar.component.scss";

type Props = {
  locale: Locale;
};

function Navbar({ locale }: Props) {
  const t = i18n[locale];

  return (
    <nav>
      <div className="nav-content px-8 flex justify-between items-center">
        <Link href="/">
          <Logo variant="horizontal" className="select-none" />
        </Link>
        <div className="flex gap-2">
          <UserMenu locale={locale} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
