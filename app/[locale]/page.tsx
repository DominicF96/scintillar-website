import { ThemeToggle } from "@/components/theme-toggle.component";
import * as i18n from "@/i18n/common.i18n";
import Image from "next/image";

export default function Home({ params }) {
  const locale = params.locale;
  const t = i18n[locale];

  return (
    <main className="max-w-[500px] mx-auto mt-64 text-center">
      <div className="mb-8">
        <Image
          src="/vectors/brand/scintillar-logo-standalone.svg"
          alt="Scintillar Logo"
          className="mx-auto mb-8"
          width={128}
          height={128}
        />
        <h1 className="text-6xl font-bold">{t.title}</h1>
        <p className="text-lg text-muted-foreground mt-8">{t.description}</p>
        <small className="text-muted-foreground">{t.coming_soon}</small>
      </div>
      <ThemeToggle />
    </main>
  );
}
