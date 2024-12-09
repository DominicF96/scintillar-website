import React from "react";
import Logo from "../logo.component";
import { Locale } from "@/i18n.config";
import { ThemeToggle } from "../theme-toggle.component";
import "./navbar.component.scss";

type Props = {
  locale: Locale;
};

function Navbar({}: Props) {
  return (
    <nav>
      <div className="nav-content">
        <Logo />
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
