"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SearchInput } from "@/components/forms/search/search-input";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";
import { DocsMetadata, getLocalizedCategory } from "@/types/docs.types";
import { useLocale } from "@/providers/locale.context";
import { useTranslation } from "@/lib/hooks/useTranslation";
import * as categoryI18n from "@/i18n/app/components/docs-categories.i18n";

export default function DocsList() {
  const locale = useLocale();
  const [searchQuery, setSearchQuery] = useState("");
  const categoryTranslations = useTranslation(categoryI18n);

  // Load locale-specific docs index
  const docsIndex = useMemo(() => {
    try {
      return require(`@/content/${locale}/docs/index`).default;
    } catch (error) {
      return require(`@/content/en/docs/index`).default;
    }
  }, [locale]);

  const filteredDocs = useMemo(() => {
    if (!searchQuery.trim()) return docsIndex;
    
    const query = searchQuery.toLowerCase();
    return docsIndex.filter(
      (doc) =>
        doc.title.toLowerCase().includes(query) ||
        doc.description.toLowerCase().includes(query) ||
        doc.category?.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const groupedDocs = useMemo(() => {
    const groups: Record<string, DocsMetadata[]> = {};
    
    filteredDocs.forEach((doc) => {
      const localizedCategory = getLocalizedCategory(doc.category, categoryTranslations);
      if (!groups[localizedCategory]) {
        groups[localizedCategory] = [];
      }
      groups[localizedCategory].push(doc);
    });
    
    return groups;
  }, [filteredDocs, categoryTranslations]);

  return (
    <div className="flex flex-col gap-6">
      {/* Search */}
      <div className="max-w-md w-full">
        <SearchInput
          placeholder={categoryTranslations.searchPlaceholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Results */}
      {filteredDocs.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">{categoryTranslations.noResults}</p>
        </div>
      ) : (
        <div className="space-y-8">
          {Object.entries(groupedDocs).map(([category, docs]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-xl font-semibold capitalize">{category}</h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {docs.map((doc) => (
                  <Link key={doc.id} href={`/${locale}/app/docs/${doc.id}`}>
                    <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-2">
                          <CardTitle className="text-lg line-clamp-2">
                            {doc.title}
                          </CardTitle>
                          {doc.category && (
                            <Badge variant="secondary" className="shrink-0">
                              {getLocalizedCategory(doc.category, categoryTranslations)}
                            </Badge>
                          )}
                        </div>
                        <CardDescription className="line-clamp-3">
                          {doc.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          {doc.author && <span>By {doc.author}</span>}
                          {doc.author && doc.date && <span>•</span>}
                          {doc.date && (
                            <span>
                              {new Date(doc.date).toLocaleDateString()}
                            </span>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}