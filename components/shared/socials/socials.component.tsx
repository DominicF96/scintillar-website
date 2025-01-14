import { Button } from "@/components/ui/button";
import SOCIALS from "@/data/socials";
import { Social } from "@/types/socials.types";
import Image from "next/image";
import React from "react";
import * as i18n from "@/i18n/shared/components/socials.i18n";
import { Locale } from "@/i18n.config";

type Props = {
  locale: Locale;
  height?: number;
  width?: number;
};

function Socials({ height = 48, width = 48, locale }: Props) {
  const t = i18n[locale].socials;
  return (
    <div className="flex flex-row flex-wrap gap-4">
      {SOCIALS.map((social: Social) => {
        return (
          <Button
            variant="ghost"
            title={t[social.key]}
            key={social.key}
            aria-label={t[social.key]}
            className="p-0 hover:bg-transparent"
          >
            <a href={social.url} rel="noreferrer" className="!text-foreground">
              <Image
                src={`/vectors/socials/${social.key}-light.svg`}
                alt={t[social.key]}
                title={t[social.key]}
                height={height}
                width={width}
                className="dark:hidden"
              />
              <Image
                src={`/vectors/socials/${social.key}-dark.svg`}
                alt={t[social.key]}
                title={t[social.key]}
                height={height}
                width={width}
                className="hidden dark:block"
              />
            </a>
          </Button>
        );
      })}
    </div>
  );
}

export default Socials;
