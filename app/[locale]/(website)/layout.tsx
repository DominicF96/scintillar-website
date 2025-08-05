import React from "react";
import { defaultLocale, Locale } from "@/lib/config/i18n-config";
import StandardLayout from "@/components/layout/web-layout/web.layout";
import { LocaleProvider } from "@/lib/providers/locale.context";
import { cookies } from "next/headers";

type Props = {
  children: React.ReactNode;
};

async function Layout({ children }: Props) {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("NEXT_LOCALE")?.value ||
    defaultLocale) as Locale;
  return (
    <LocaleProvider locale={locale}>
      <StandardLayout>{children}</StandardLayout>
    </LocaleProvider>
  );
}

export default Layout;
