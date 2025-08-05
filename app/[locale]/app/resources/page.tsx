import { SafeRedirectPage } from "@/lib/utils/safe-redirect";

async function ResourcesPage({ params }) {
  const { locale } = await params;
  
  return (
    <SafeRedirectPage 
      sectionId="resources" 
      locale={locale}
      fallbackRoute="/app/resources/home"
    />
  );
}

export default ResourcesPage;