import React from "react";
import * as i18n from "@/i18n/app/pages/internet.i18n";

async function InternetPage({ params }) {
  const { locale } = await params;
  const t = i18n[locale];
  
  return (
    <div className="py-4 px-8">
      <h2>{t.title}</h2>
      <p className="text-muted-foreground">{t.description}</p>
      <div className="mt-6 grid gap-4">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">{t.sections.network.title}</h3>
          <p className="text-sm text-muted-foreground">
            {t.sections.network.description}
          </p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">{t.sections.providers.title}</h3>
          <p className="text-sm text-muted-foreground">
            {t.sections.providers.description}
          </p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">{t.sections.services.title}</h3>
          <p className="text-sm text-muted-foreground">
            {t.sections.services.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default InternetPage;