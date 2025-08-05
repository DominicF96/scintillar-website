import { SafeRedirectPage } from "@/lib/utils/safe-redirect";
import { Locale } from "@/lib/config/i18n-config";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function SystemPage({ params }: PageProps) {
  const { locale } = await params;
  return <SafeRedirectPage sectionId="system" />;
}