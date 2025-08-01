import React from "react";
import * as i18n from "@/i18n/app/pages/dashboard.i18n";
import ContentContainer from "@/components/app/content-container/content-container.component";

async function DashboardPage({ params }) {
  const { locale } = await params;
  const t = i18n[locale];
  
  return (
    <ContentContainer className="py-4 px-8" locale={locale}>
      <h2>{t.title}</h2>
      <p className="text-muted-foreground">{t.description}</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">System Status</h3>
          <p className="text-sm text-muted-foreground">
            All systems operational
          </p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Quick Stats</h3>
          <p className="text-sm text-muted-foreground">
            Key performance indicators at a glance
          </p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Recent Activity</h3>
          <p className="text-sm text-muted-foreground">
            Latest updates and changes
          </p>
        </div>
      </div>
    </ContentContainer>
  );
}

export default DashboardPage;