import React from "react";
import NotFoundContent from "@/components/feedback/not-found-content";

async function MapsPage({ params }) {
  const { locale } = await params;
  
  return (
    <NotFoundContent 
      locale={locale}
      title="Maps Section Moved"
      description="The maps section has been reorganized. You can find map-related features in the main navigation sections."
      homeHref="/app"
    />
  );
}

export default MapsPage;