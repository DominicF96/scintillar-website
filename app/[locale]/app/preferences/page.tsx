import React from "react";
import * as i18n from "@/i18n/app/pages/preferences.i18n";

async function PreferencesPage({ params }) {
  const { locale } = await params;
  const t = i18n[locale];
  return (
    <div className="max-w-[1200px] mx-auto py-4 px-8">
      <h2>{t.title}</h2>
      <p className="text-muted-foreground">{t.description}</p>
      {/* <pre className="my-2 text-foreground p-8 overflow-x-scroll bg-card rounded-lg">
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre> */}
    </div>
  );
}

export default PreferencesPage;
