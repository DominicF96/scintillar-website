import React from "react";
import { cookies } from "next/headers";
import ProtectedRoute from "@/components/features/auth/protected-route";
import { defaultLocale, Locale } from "@/lib/config/i18n-config";
import AppLayout from "@/components/layout/app-layout/app.layout";
import { SidebarProvider } from "@/lib/providers/sidebar.context";
import { SettingsPanelProvider } from "@/lib/providers/settings-panel.context";
import { PrimarySidebarProvider } from "@/lib/providers/primary-sidebar.context";
import { LocaleProvider } from "@/lib/providers/locale.context";

type Props = {
  children: React.ReactNode;
};

async function Layout({ children }: Props) {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("NEXT_LOCALE")?.value ||
    defaultLocale) as Locale;
  return (
    <ProtectedRoute>
      <LocaleProvider locale={locale}>
        <PrimarySidebarProvider>
          <SidebarProvider>
            <SettingsPanelProvider>
              <AppLayout>{children}</AppLayout>
            </SettingsPanelProvider>
          </SidebarProvider>
        </PrimarySidebarProvider>
      </LocaleProvider>
    </ProtectedRoute>
  );
}

export default Layout;
