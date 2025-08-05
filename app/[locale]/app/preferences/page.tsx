import React from "react";
import * as i18n from "@/i18n/app/pages/preferences.i18n";
import ContentContainer from "@/components/layout/containers/content-container";

async function PreferencesPage({ params }) {
  const { locale } = await params;
  const t = i18n[locale];
  
  return (
    <ContentContainer className="py-4 px-8">
      <h2>{t.title}</h2>
      <p className="text-muted-foreground">{t.description}</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">{t.sections.appearance.title}</h3>
          <p className="text-sm text-muted-foreground">
            {t.sections.appearance.description}
          </p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">{t.sections.notifications.title}</h3>
          <p className="text-sm text-muted-foreground">
            {t.sections.notifications.description}
          </p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">{t.sections.privacy.title}</h3>
          <p className="text-sm text-muted-foreground">
            {t.sections.privacy.description}
          </p>
        </div>
      </div>
    </ContentContainer>
  );
}

export default PreferencesPage;