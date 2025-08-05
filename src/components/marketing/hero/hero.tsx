import React from "react";
import * as i18n from "@/i18n/web/components/hero.i18n";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/hooks/useTranslation";
import { useLocale } from "@/providers/locale.context";
import Link from "next/link";

function Hero() {
  const locale = useLocale();
  const { t, title, description, actions } = useTranslation(i18n);

  return (
    <header className="mx-auto max-w-[1000px] px-8 pt-40 pb-20 text-left md:text-center overflow-x-hidden">
      <h1>{title}</h1>
      <p className="mx-auto max-w-[750px] text-xl text-muted-foreground mt-8 font-thin">
        {description}
      </p>
      <div className="flex flex-col mt-8 gap-4 justify-center md:flex-row">
        <Link href="/app">
          <Button>{actions.primary}</Button>
        </Link>
        <Link href="#features-section">
          <Button variant="ghost">{actions.secondary}</Button>
        </Link>
      </div>
    </header>
  );
}

export default Hero;
