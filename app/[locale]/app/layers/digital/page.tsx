import React from "react";
import * as i18n from "@/i18n/app/pages/digital-layer.i18n";
import ContentContainer from "@/components/layout/containers/content-container";

async function DigitalLayerPage({ params }) {
  const { locale } = await params;
  const t = i18n[locale];
  
  return (
    <ContentContainer className="py-4 px-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{t.title}</h2>
        <p className="text-muted-foreground">{t.description}</p>
      </div>
      
      {/* Core Features */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">{t.sections.coreFeatures.title}</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2">{t.sections.networkMapping.title}</h4>
            <p className="text-sm text-muted-foreground">
              {t.sections.networkMapping.description}
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2">{t.sections.deviceDiscovery.title}</h4>
            <p className="text-sm text-muted-foreground">
              {t.sections.deviceDiscovery.description}
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2">{t.sections.trafficAnalysis.title}</h4>
            <p className="text-sm text-muted-foreground">
              {t.sections.trafficAnalysis.description}
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h4 className="font-semibold mb-2">{t.sections.securityMonitoring.title}</h4>
            <p className="text-sm text-muted-foreground">
              {t.sections.securityMonitoring.description}
            </p>
          </div>
        </div>
      </div>

      {/* Advanced Features */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">{t.sections.advancedFeatures.title}</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold mb-2">{t.sections.cloudInfrastructure.title}</h4>
            <p className="text-sm text-muted-foreground">
              {t.sections.cloudInfrastructure.description}
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold mb-2">{t.sections.apiMonitoring.title}</h4>
            <p className="text-sm text-muted-foreground">
              {t.sections.apiMonitoring.description}
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold mb-2">{t.sections.performanceMetrics.title}</h4>
            <p className="text-sm text-muted-foreground">
              {t.sections.performanceMetrics.description}
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

export default DigitalLayerPage;