import { Button } from "@/components/ui/button";
import SOCIALS from "@/constants/socials";
import { Social } from "@/types/socials.types";
import Image from "next/image";
import React from "react";
import * as i18n from "@/i18n/shared/components/socials.i18n";
import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { useTranslationDirect } from "@/lib/hooks/useTranslation";

type Props = {
  height?: number;
  width?: number;
  invertedTheme?: boolean;
};

function Socials({
  height = 48,
  width = 48,
  invertedTheme = false,
}: Props) {
  const t = useTranslationDirect(i18n).socials;
  return (
    <div className="flex flex-row flex-wrap gap-4">
      {SOCIALS.map((social: Social) => {
        return (
          <Tooltip key={social.key}>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                key={social.key}
                aria-label={t[social.key]}
                className="p-0 hover:bg-transparent"
              >
                <a
                  href={social.url}
                  rel="noreferrer"
                  className="!text-foreground"
                >
                  <Image
                    src={`/vectors/socials/${social.key}-light.svg`}
                    alt={t[social.key]}
                    height={height}
                    width={width}
                    className={
                      invertedTheme ? "block dark:hidden" : "hidden dark:block"
                    }
                  />
                  <Image
                    src={`/vectors/socials/${social.key}-dark.svg`}
                    alt={t[social.key]}
                    height={height}
                    width={width}
                    className={
                      invertedTheme ? "hidden dark:block" : "block dark:hidden"
                    }
                  />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent sideOffset={8}>{t[social.key]}</TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
}

export default Socials;
