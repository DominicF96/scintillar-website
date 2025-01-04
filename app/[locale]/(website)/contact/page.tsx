import React from "react";
import ScrollTop from "@/components/shared/utils/scroll-top.component";
import * as i18n from "@/i18n/common.i18n";

async function Page({ params }) {
  const { locale } = await params;
  const t = i18n[locale];
  return (
    <div className="max-w-[1200px] mx-auto px-8 py-20">
      <ScrollTop />
      <h1>{t.coming_soon}</h1>
      <p className="text-muted-foreground mt-8 font-thin">
        {t.page_under_construction}
      </p>
    </div>
  );
}

export default Page;
