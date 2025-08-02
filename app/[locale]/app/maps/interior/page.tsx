import React from "react";
import * as i18n from "@/i18n/app/pages/interior.i18n";

async function InteriorPage({ params }) {
  const { locale } = await params;
  const t = i18n[locale];
  
  return (
    <div className="py-4 px-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{t.title}</h2>
        <p className="text-muted-foreground">{t.description}</p>
      </div>
      <div className="mt-6 grid gap-4">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">{t.sections.designer.title}</h3>
          <p className="text-sm text-muted-foreground">
            {t.sections.designer.description}
          </p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">{t.sections.templates.title}</h3>
          <p className="text-sm text-muted-foreground">
            {t.sections.templates.description}
          </p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">{t.sections.visualization.title}</h3>
          <p className="text-sm text-muted-foreground">
            {t.sections.visualization.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default InteriorPage;