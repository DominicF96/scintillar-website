import { Button } from "@/components/ui/button";
import SOCIALS from "@/data/socials";
import { Social } from "@/types/socials.types";
import Image from "next/image";
import React from "react";

type Props = {
  height?: number;
  width?: number;
};

function Socials({ height = 48, width = 48 }: Props) {
  return (
    <div className="flex flex-row flex-wrap gap-4">
      {SOCIALS.map((social: Social) => {
        return (
          <Button
            variant="ghost"
            title={social.key}
            key={social.key}
            aria-label={social.key}
            className="p-0 hover:bg-transparent"
          >
            <a href={social.url} rel="noreferrer" className="!text-foreground">
              <Image
                src={`/vectors/socials/${social.key}-light.svg`}
                alt={social.key}
                title={social.key}
                height={height}
                width={width}
                className="dark:hidden"
              />
              <Image
                src={`/vectors/socials/${social.key}-dark.svg`}
                alt={social.key}
                title={social.key}
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
