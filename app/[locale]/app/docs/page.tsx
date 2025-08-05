import React from "react";
import DocsList from "@/components/features/docs/docs-list/docs-list";
import ContentContainer from "@/components/layout/containers/content-container";
import { Locale } from "@/lib/config/i18n-config";
import { Metadata } from "next";

type DocsPageProps = {
  params: Promise<{ locale: Locale }>
};

export async function generateMetadata({ params }: DocsPageProps): Promise<Metadata> {
  return {
    title: "Documentation • Scintillar",
    description: "Learn how to use Scintillar's features and get the most out of our platform.",
  };
}

export default async function DocsPage({ params }: DocsPageProps) {
  const { locale } = await params;
  
  return (
    <ContentContainer className="py-4 px-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Documentation</h2>
        <p className="text-muted-foreground">
          Learn how to use Scintillar's features and get the most out of our platform.
        </p>
      </div>
      <DocsList />
    </ContentContainer>
  );
}