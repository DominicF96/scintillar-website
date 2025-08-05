import React from "react";
import * as i18n from "@/i18n/app/pages/market.i18n";
import ContentContainer from "@/components/layout/containers/content-container";

async function MarketPage({ params }) {
  const { locale } = await params;
  const t = i18n[locale];
  
  return (
    <ContentContainer className="py-4 px-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{t.title}</h2>
        <p className="text-muted-foreground">{t.description}</p>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">{t.sections.featured.title}</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">{t.sections.featured.items.smartHome}</span>
              <span className="text-sm font-medium">$299</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">{t.sections.featured.items.energyOptimizer}</span>
              <span className="text-sm font-medium">$149</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">{t.sections.featured.items.securitySystem}</span>
              <span className="text-sm font-medium">$199</span>
            </div>
          </div>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">{t.sections.services.title}</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">{t.sections.services.items.installation}</span>
              <span className="text-sm font-medium">$99/hr</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">{t.sections.services.items.maintenance}</span>
              <span className="text-sm font-medium">$29/mo</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">{t.sections.services.items.support}</span>
              <span className="text-sm font-medium">$19/mo</span>
            </div>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
}

export default MarketPage;