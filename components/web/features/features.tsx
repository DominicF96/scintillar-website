import React from "react";
import Link from "next/link";
import {
  ChartCandlestick,
  Cpu,
  MapPinned,
  Network,
  Newspaper,
  ShieldAlert,
} from "lucide-react";
import { Locale } from "@/i18n.config";
import * as i18n from "@/i18n/web/components/features.i18n";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FeatureAvatar from "./feature-avatar/feature-avatar";
import "./features.scss";

type Props = {
  locale: Locale;
};

function Features({ locale }: Props) {
  const t = i18n[locale];

  const featureIcons = {
    proceduralCities: MapPinned,
    networks: Network,
    systemVulnerabilities: ShieldAlert,
    companiesNewsfeed: Newspaper,
    stockExchange: ChartCandlestick,
    coreHacking: Cpu,
  };

  return (
    <section
      id="features-section"
      className="feature-section mx-auto max-w-[1000px] lg:max-w-[1200px] px-8 py-32 text-left md:text-center overflow-x-hidden"
    >
      <span className="feature-flavor font-medium">{t.features.flavor}</span>
      <h2 className="max-w-[400px]">{t.features.title}</h2>
      <div className="feature-cards-container grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {Object.keys(t.features.items).map((f, index) => (
          <Card key={`feature-${index}`} className="feature-card">
            <CardHeader>
              <FeatureAvatar icon={featureIcons[f]} />
              <CardDescription className="feature-card-flavor font-medium">
                {t.features.items[f].flavorText}
              </CardDescription>
              <CardTitle className="feature-card-title">
                {t.features.items[f].title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="feature-card-content font-thin">
                {t.features.items[f].description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Link href="/features">
        <Button className="mt-8">{t.features.actions.primary}</Button>
      </Link>
    </section>
  );
}

export default Features;
