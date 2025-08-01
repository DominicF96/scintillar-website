import React from "react";
import * as i18n from "@/i18n/app/pages/settings.i18n";
import ContentContainer from "@/components/app/content-container/content-container.component";

async function SettingsPage({ params }) {
  const { locale } = await params;
  const t = i18n[locale];
  
  return (
    <ContentContainer className="py-4 px-8" locale={locale}>
      <h2>{t.title}</h2>
      <p className="text-muted-foreground">{t.description}</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">{t.sections.general.title}</h3>
          <p className="text-sm text-muted-foreground">
            {t.sections.general.description}
          </p>
        </div>
       
      </div>
    </ContentContainer>
  );
}

export default SettingsPage;