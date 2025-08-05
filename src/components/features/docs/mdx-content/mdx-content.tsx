import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface MdxContentProps {
  children: React.ReactNode;
  backHref?: string;
  backLabel?: string;
}

export default function MdxContent({ children, backHref, backLabel }: MdxContentProps) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {backHref && (
        <div className="mb-8">
          <Button variant="outline" asChild>
            <Link href={backHref} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              {backLabel || "Back"}
            </Link>
          </Button>
        </div>
      )}
      
      <article className="prose prose-gray dark:prose-invert max-w-none">
        {children}
      </article>
    </div>
  );
}