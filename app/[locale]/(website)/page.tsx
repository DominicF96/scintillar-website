import FAQ from "@/components/web/faq/faq";
import Features from "@/components/web/features/features";
import Hero from "@/components/web/hero/hero.component";
import Integration from "@/components/web/integration/integration";

export default async function Home({ params }) {
  const { locale } = await params;

  return (
    <>
      <Hero locale={locale} />
      <Features locale={locale} />
      <Integration locale={locale} />
      <FAQ locale={locale} />
    </>
  );
}
