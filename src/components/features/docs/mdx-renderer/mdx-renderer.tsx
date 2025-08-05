import React from "react";
import { getMdxData } from "@/lib/config/mdx";
import MdxContent from "@/components/features/docs/mdx-content";

interface MdxRendererProps {
  contentPath: string;
  backHref?: string;
  backLabel?: string;
}

export default async function MdxRenderer({ contentPath, backHref, backLabel }: MdxRendererProps) {
  const mdxData = getMdxData(contentPath);

  if (!mdxData) {
    return (
      <MdxContent backHref={backHref} backLabel={backLabel}>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">Content Not Found</h1>
          <p className="text-muted-foreground">
            The requested documentation page could not be found.
          </p>
        </div>
      </MdxContent>
    );
  }

  const { frontMatter, content } = mdxData;

  // Simple markdown-to-HTML conversion for basic content
  // In a real implementation, you'd use a proper MDX compiler
  const htmlContent = content
    .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mb-6">$1</h1>')
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-semibold mb-4 mt-8">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-medium mb-3 mt-6">$1</h3>')
    .replace(/^\*\*(.+)\*\*$/gm, '<p class="mb-4"><strong>$1</strong></p>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^- (.+)$/gm, '<li class="mb-2">$1</li>')
    .replace(/(<li.*<\/li>)/s, '<ul class="list-disc pl-6 mb-4">$1</ul>')
    .replace(/^\> (.+)$/gm, '<blockquote class="border-l-4 border-primary pl-4 italic mb-4">$1</blockquote>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>')
    .replace(/^(?!<[^>]+>)(.+)$/gm, '<p class="mb-4">$1</p>')
    .replace(/<p class="mb-4"><\/p>/g, '');

  return (
    <MdxContent backHref={backHref} backLabel={backLabel}>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{frontMatter.title}</h1>
        {frontMatter.description && (
          <p className="text-lg text-muted-foreground mb-6">{frontMatter.description}</p>
        )}
        {(frontMatter.author || frontMatter.date) && (
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            {frontMatter.author && <span>By {frontMatter.author}</span>}
            {frontMatter.author && frontMatter.date && <span>•</span>}
            {frontMatter.date && (
              <span>{new Date(frontMatter.date).toLocaleDateString()}</span>
            )}
          </div>
        )}
      </div>
      
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </MdxContent>
  );
}