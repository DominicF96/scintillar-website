import React from "react";
import { cookies } from "next/headers";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import ProtectedRoute from "@/components/app/protected-route.component";
import { defaultLocale, Locale } from "@/i18n.config";
import AppLayout from "@/components/app/app.layout";
import { SidebarProvider } from "@/contexts/sidebar.context";
import { SettingsPanelProvider } from "@/contexts/settings-panel.context";

type Props = {
  children: React.ReactNode;
};

async function Layout({ children }: Props) {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("NEXT_LOCALE")?.value ||
    defaultLocale) as Locale;
  return (
    <UserProvider>
      <ProtectedRoute>
        <SidebarProvider>
          <SettingsPanelProvider>
            <AppLayout locale={locale}>{children}</AppLayout>
          </SettingsPanelProvider>
        </SidebarProvider>
      </ProtectedRoute>
    </UserProvider>
  );
}

export default Layout;
