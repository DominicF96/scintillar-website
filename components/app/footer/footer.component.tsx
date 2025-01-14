"use client";
import React from "react";
import { Locale } from "@/i18n.config";
import * as i18n from "@/i18n/app/components/footer.i18n";
import "./footer.component.scss";
import Socials from "@/components/shared/socials/socials.component";

type Props = {
  locale: Locale;
};

function Footer({ locale }: Props) {
  const t = i18n[locale];

  return (
    <footer className="app-footer py-8 overflow-x-hidden">
      <div className="mx-auto max-w-[1200px]">
        <div className="footer-end px-8 flex flex-col items-start md:flex-row md:justify-between">
          <Socials height={24} width={24} locale={locale} />
          <div className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Scintillar,&nbsp;
            {t.all_rights_reserved}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
