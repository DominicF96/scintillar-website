import React from "react";
import { Locale } from "@/i18n.config";
import StandardLayout from "@/components/standard.layout";

type Props = {
  children: React.ReactNode;
  locale: Locale;
};

function Layout({ children, locale }: Props) {
  return <StandardLayout locale={locale}>{children}</StandardLayout>;
}

export default Layout;
