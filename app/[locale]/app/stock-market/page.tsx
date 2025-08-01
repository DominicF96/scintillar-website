import React from "react";
import * as i18n from "@/i18n/app/pages/stock-market.i18n";
import ContentContainer from "@/components/app/content-container/content-container.component";

async function StockMarketPage({ params }) {
  const { locale } = await params;
  const t = i18n[locale];
  
  return (
    <ContentContainer className="py-4 px-8" locale={locale}>
      <h2>{t.title}</h2>
      <p className="text-muted-foreground">{t.description}</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">{t.features.procedural_stocks}</h3>
          <p className="text-sm text-muted-foreground">
            {t.features.procedural_stocks_desc}
          </p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">{t.features.real_time_data}</h3>
          <p className="text-sm text-muted-foreground">
            {t.features.real_time_data_desc}
          </p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">{t.features.trading_simulation}</h3>
          <p className="text-sm text-muted-foreground">
            {t.features.trading_simulation_desc}
          </p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">{t.features.market_analysis}</h3>
          <p className="text-sm text-muted-foreground">
            {t.features.market_analysis_desc}
          </p>
        </div>
      </div>
    </ContentContainer>
  );
}

export default StockMarketPage;