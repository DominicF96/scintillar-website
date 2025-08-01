import React from "react";
import * as i18n from "@/i18n/app/pages/news.i18n";

async function NewsPage({ params }) {
  const { locale } = await params;
  const t = i18n[locale];
  
  return (
    <div className="py-4 px-8">
      <h2>{t.title}</h2>
      <p className="text-muted-foreground">{t.description}</p>
      <div className="mt-6 space-y-4">
        <div className="p-4 border rounded-lg">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold">{t.articles.systemUpdate.title}</h3>
            <span className="text-xs text-muted-foreground">{t.articles.systemUpdate.timeAgo}</span>
          </div>
          <p className="text-sm text-muted-foreground">
            {t.articles.systemUpdate.description}
          </p>
        </div>
        <div className="p-4 border rounded-lg">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold">{t.articles.maintenance.title}</h3>
            <span className="text-xs text-muted-foreground">{t.articles.maintenance.timeAgo}</span>
          </div>
          <p className="text-sm text-muted-foreground">
            {t.articles.maintenance.description}
          </p>
        </div>
        <div className="p-4 border rounded-lg">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold">{t.articles.featureRelease.title}</h3>
            <span className="text-xs text-muted-foreground">{t.articles.featureRelease.timeAgo}</span>
          </div>
          <p className="text-sm text-muted-foreground">
            {t.articles.featureRelease.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;