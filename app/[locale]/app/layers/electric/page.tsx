import React from "react";
import * as i18n from "@/i18n/app/pages/electric.i18n";
import ContentContainer from "@/components/app/content-container/content-container.component";

async function ElectricLayerPage({ params }) {
  const { locale } = await params;
  const t = i18n[locale];
  
  return (
    <ContentContainer className="py-4 px-8" locale={locale}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{t.title}</h2>
        <p className="text-muted-foreground">{t.description}</p>
      </div>
      
      {/* Core Features */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">{t.sections.coreFeatures.title}</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2">{t.sections.gridMonitoring.title}</h4>
            <p className="text-sm text-muted-foreground">
              {t.sections.gridMonitoring.description}
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2">{t.sections.consumptionTracking.title}</h4>
            <p className="text-sm text-muted-foreground">
              {t.sections.consumptionTracking.description}
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2">{t.sections.renewableIntegration.title}</h4>
            <p className="text-sm text-muted-foreground">
              {t.sections.renewableIntegration.description}
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2">{t.sections.loadBalancing.title}</h4>
            <p className="text-sm text-muted-foreground">
              {t.sections.loadBalancing.description}
            </p>
          </div>
        </div>
      </div>

      {/* Advanced Features */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">{t.sections.advancedFeatures.title}</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold mb-2">{t.sections.smartGrid.title}</h4>
            <p className="text-sm text-muted-foreground">
              {t.sections.smartGrid.description}
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold mb-2">{t.sections.predictiveAnalytics.title}</h4>
            <p className="text-sm text-muted-foreground">
              {t.sections.predictiveAnalytics.description}
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold mb-2">{t.sections.carbonFootprint.title}</h4>
            <p className="text-sm text-muted-foreground">
              {t.sections.carbonFootprint.description}
            </p>
          </div>
        </div>
      </div>

      {/* Real-time Status */}
      <div className="p-4 border rounded-lg bg-primary/5">
        <h3 className="text-lg font-semibold mb-3">{t.sections.realTimeStatus.title}</h3>
        <p className="text-sm text-muted-foreground mb-3">
          {t.sections.realTimeStatus.description}
        </p>
        <div className="text-xs text-muted-foreground">
          {t.comingSoon}
        </div>
      </div>
    </ContentContainer>
  );
}

export default ElectricLayerPage;