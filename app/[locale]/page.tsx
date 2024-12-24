import FAQ from "@/components/faq/faq";
import Features from "@/components/features/features";
import Hero from "@/components/hero/hero.component";
import Integration from "@/components/integration/integration";

export default async function Home({ params }) {
  const locale = await params.locale;

  return (
    <>
      <Hero locale={locale} />
      <Features locale={locale} />
      <Integration locale={locale} />
      <FAQ locale={locale} />
    </>
  );
}
