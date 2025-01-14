"use client";
import React from "react";
import * as i18n from "@/i18n/web/components/integration.i18n";
import { Locale } from "@/i18n.config";
import { Check } from "lucide-react";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useTheme } from "next-themes";
import "./integration.scss";

type Props = {
  locale: Locale;
};

function Integration({ locale }: Props) {
  const t = i18n[locale];
  const { resolvedTheme } = useTheme();

  return (
    <section className="integration-section mx-auto max-w-[1000px] lg:max-w-[1200px] px-8 py-20 text-left grid gric-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
      <div>
        <span className="integration-flavor font-medium">
          {t.integration.flavor}
        </span>
        <h2 className="max-w-[400px]">{t.integration.title}</h2>
        <p className="text-muted-foreground mt-8 font-thin">
          {t.integration.description.part_1}
        </p>
        <p className="text-muted-foreground mt-8 font-thin">
          {t.integration.description.part_2}
        </p>
      </div>
      <div className="mt-4">
        <div className="flex justify-start md:justify-center gap-8 mb-8">
          <Tooltip>
            <TooltipTrigger asChild>
              {resolvedTheme && (
                <Image
                  src={`/vectors/engines/godot-${resolvedTheme}.svg`}
                  alt="Godot logo"
                  className="opacity-40"
                  width={64}
                  height={64}
                />
              )}
            </TooltipTrigger>
            <TooltipContent>
              Godot Engine ({t.integration.engine_soon})
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              {resolvedTheme && (
                <Image
                  src={`/vectors/engines/unity-${resolvedTheme}.svg`}
                  alt="Unity logo"
                  className="opacity-40"
                  width={64}
                  height={64}
                />
              )}
            </TooltipTrigger>
            <TooltipContent>
              Unity Engine ({t.integration.engine_soon})
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              {resolvedTheme && (
                <Image
                  src={`/vectors/engines/unreal-${resolvedTheme}.svg`}
                  alt="Unreal logo"
                  className="opacity-40"
                  width={64}
                  height={64}
                />
              )}
            </TooltipTrigger>
            <TooltipContent>
              Unreal Engine ({t.integration.engine_soon})
            </TooltipContent>
          </Tooltip>
        </div>

        <ul>
          {t.integration.checklist.map((item, index) => (
            <li
              key={`checlist_item_${index}`}
              className="flex items-start gap-4 mb-4"
            >
              <div className="w-[24px]">
                <Check className="inline text-primary" />
              </div>
              <p className="ml-2 font-thin">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Integration;
