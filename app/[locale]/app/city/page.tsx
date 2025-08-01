import React from "react";
import * as i18n from "@/i18n/app/pages/city.i18n";
import ContentContainer from "@/components/app/content-container/content-container.component";
import SettingsToggle from "@/components/app/settings-toggle/settings-toggle.component";

async function CityPage({ params }) {
  const { locale } = await params;
  const t = i18n[locale];

  return (
    <ContentContainer
      fullHeight
      actions={<SettingsToggle />}
      className="py-4 px-8"
      locale={locale}
    >
      <h2>{t.title}</h2>
      <p className="text-muted-foreground">{t.description}</p>
      <div className="mt-6 grid gap-4">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">{t.sections.overview.title}</h3>
          <p className="text-sm text-muted-foreground">
            {t.sections.overview.description}
          </p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">{t.sections.zoning.title}</h3>
          <p className="text-sm text-muted-foreground">
            {t.sections.zoning.description}
          </p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">
            {t.sections.infrastructure.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {t.sections.infrastructure.description}
          </p>
        </div>
      </div>
    </ContentContainer>
  );
}

export default CityPage;
