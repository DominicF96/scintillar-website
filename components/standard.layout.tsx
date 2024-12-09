import React from "react";
import Navbar from "./navbar/navbar.component";
import Footer from "./footer/footer.component";
import { Locale } from "@/i18n.config";

type Props = {
  locale: Locale;
  children: React.ReactNode;
};

function StandardLayout({ locale, children }: Props) {
  return (
    <>
      <Navbar locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
    </>
  );
}

export default StandardLayout;
