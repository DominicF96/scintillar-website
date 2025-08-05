import React from "react";
import ContentContainer from "@/components/layout/containers/content-container";
import { Construction, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { useLocale } from "@/lib/providers/locale.context";

interface PlaceholderPageProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  features?: Array<{
    title: string;
    description: string;
    icon?: LucideIcon;
  }>;
  comingSoonFeatures?: string[];
  relatedLinks?: Array<{
    href: string;
    label: string;
    description?: string;
  }>;
}

export default function PlaceholderPage({ 
  title,
  description = "This feature is currently under development and will be available soon.",
  icon: Icon = Construction,
  features = [],
  comingSoonFeatures = [],
  relatedLinks = []
}: PlaceholderPageProps) {
  const locale = useLocale();
  
  return (
    <ContentContainer className="py-4 px-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Icon className="h-6 w-6" />
          {title}
        </h2>
        <p className="text-muted-foreground">
          {description}
        </p>
      </div>

      {/* Development Status */}
      <div className="mb-8 p-4 border rounded-lg bg-primary/5">
        <div className="flex items-center gap-2 mb-2">
          <Clock className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-primary">Development Status</h3>
        </div>
        <p className="text-sm text-muted-foreground">
          This page is currently being developed. Check back soon for updates!
        </p>
      </div>

      {/* Planned Features */}
      {features.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Planned Features</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon || Construction;
              return (
                <div key={index} className="p-4 border rounded-lg bg-card">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <FeatureIcon className="h-4 w-4 text-green-500" />
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Coming Soon List */}
      {comingSoonFeatures.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Coming Soon</h3>
          <div className="grid gap-2 md:grid-cols-2">
            {comingSoonFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-muted/30">
                <Clock className="h-4 w-4 text-orange-500" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Related Links */}
      {relatedLinks.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Related Pages</h3>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {relatedLinks.map((link, index) => (
              <div key={index} className="p-3 border rounded-lg bg-card hover:bg-accent transition-colors">
                <Link href={`/${locale}${link.href}`} className="block">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-sm">{link.label}</h4>
                    <ArrowRight className="h-3 w-3 text-muted-foreground" />
                  </div>
                  {link.description && (
                    <p className="text-xs text-muted-foreground">{link.description}</p>
                  )}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Navigation Back */}
      <div className="pt-4 border-t">
        <Button asChild variant="outline">
          <Link href={`/${locale}/app`}>
            Back to Dashboard
          </Link>
        </Button>
      </div>
    </ContentContainer>
  );
}