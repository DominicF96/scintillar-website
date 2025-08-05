import { SafeRedirectPage } from "@/lib/utils/safe-redirect";

async function DataPage({ params }) {
  const { locale } = await params;
  
  return (
    <SafeRedirectPage 
      sectionId="data" 
      locale={locale}
      fallbackRoute="/app/data/contacts"
    />
  );
}

export default DataPage;