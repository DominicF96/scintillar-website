import FAQ from "@/components/marketing/faq/faq";
import Features from "@/components/marketing/features/features";
import Hero from "@/components/marketing/hero/hero";
import Integration from "@/components/marketing/integration/integration";

export default async function Home({ params }) {
  const { locale } = await params;

  return (
    <>
      <Hero />
      <Features />
      <Integration />
      <FAQ />
    </>
  );
}
