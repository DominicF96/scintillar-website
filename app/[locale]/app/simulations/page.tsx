import { SafeRedirectPage } from "@/lib/utils/safe-redirect";

async function SimulationsPage({ params }) {
  const { locale } = await params;
  
  return (
    <SafeRedirectPage 
      sectionId="simulations" 
      locale={locale}
      fallbackRoute="/app/simulations/crud"
    />
  );
}

export default SimulationsPage;