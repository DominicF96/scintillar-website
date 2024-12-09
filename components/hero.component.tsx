import React from "react";
import { Locale } from "@/i18n.config";
import * as i18n from "@/i18n/components/hero.i18n";
import { Button } from "./ui/button";

type Props = {
  locale: Locale;
};

function Hero({ locale }: Props) {
  const t = i18n[locale];

  return (
    <header className="mx-auto max-w-[650px] px-8 py-44 text-left md:text-center overflow-x-hidden">
      <h1>{t.title}</h1>
      <p className="text-xl text-muted-foreground mt-8">{t.description}</p>
      <div className="flex flex-col mt-8 gap-4 justify-center md:flex-row">
        <Button>{t.actions.primary}</Button>
        <Button variant="ghost">{t.actions.secondary}</Button>
      </div>
    </header>
  );
}

export default Hero;
