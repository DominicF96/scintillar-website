import React from "react";
import NotFoundContent from "@/components/feedback/not-found-content";

async function LayersPage({ params }) {
  const { locale } = await params;
  
  return (
    <NotFoundContent 
      locale={locale}
      title="Layers Section Moved"
      description="The layers section has been reorganized. You can find layer-related features in the main navigation sections."
      homeHref="/app"
    />
  );
}

export default LayersPage;