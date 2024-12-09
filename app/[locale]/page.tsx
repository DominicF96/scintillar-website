import Hero from "@/components/hero.component";
import StandardLayout from "@/components/standard.layout";

export default async function Home({ params }) {
  const locale = await params.locale;

  return (
    <StandardLayout locale={locale}>
      <Hero locale={locale} />
    </StandardLayout>
  );
}
