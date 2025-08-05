import path from "path";
import type { Metadata } from "next";
import MdxRenderer from "@/components/features/docs/mdx-renderer";
import ContentContainer from "@/components/layout/containers/content-container";
import { generateMdxMetadata } from "@/lib/config/mdx";

interface DocsPageProps {
  params: Promise<{
    locale: string;
    id: string;
  }>;
}

export async function generateMetadata({ params }: DocsPageProps): Promise<Metadata> {
  const { locale, id } = await params;
  const contentPath = path.join(
    process.cwd(),
    "src/content",
    locale,
    "docs",
    id,
    "page.mdx"
  );
  return generateMdxMetadata({
    contentPath,
    id,
    ogImagePrefix: "/images/docs/",
  });
}

export default async function DocsPage({ params }: DocsPageProps) {
  const { locale, id } = await params;
  const contentPath = path.join(
    process.cwd(),
    "src/content",
    locale,
    "docs",
    id,
    "page.mdx"
  );

  return (
    <ContentContainer className="py-4 px-8">
      <MdxRenderer
        contentPath={contentPath}
        backHref={`/${locale}/app/docs`}
        backLabel="Back to Documentation"
      />
    </ContentContainer>
  );
}