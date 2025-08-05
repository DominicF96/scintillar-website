"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ContentContainer from "@/components/layout/containers/content-container";
import { AlertTriangle, Home, ArrowLeft, RefreshCw } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/providers/locale.context";
import { useTranslation } from "@/lib/hooks/useTranslation";
import * as i18n from "@/i18n/shared/components/not-found-content.i18n";

interface NotFoundContentProps {
  title?: string;
  description?: string;
  showBackButton?: boolean;
  homeHref?: string;
  autoRedirect?: boolean;
  delay?: number;
}

export default function NotFoundContent({ 
  title,
  description,
  showBackButton = true,
  homeHref = "/app",
  autoRedirect = true,
  delay = 10000
}: NotFoundContentProps) {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslation(i18n);
  const [countdown, setCountdown] = useState(Math.ceil(delay / 1000));
  const targetUrl = `/${locale}${homeHref}`;
  
  // Use prop values or fall back to translations
  const displayTitle = title || t.defaultTitle;
  const displayDescription = description || t.defaultDescription;

  useEffect(() => {
    if (!autoRedirect) return;

    const timer = setTimeout(() => {
      router.push(targetUrl);
    }, delay);

    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdownInterval);
    };
  }, [router, targetUrl, delay, autoRedirect]);
  return (
    <ContentContainer className="py-8 px-8 flex flex-col items-center justify-center min-h-[60vh]">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <AlertTriangle className="h-16 w-16 text-orange-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">{displayTitle}</h1>
          <p className="text-muted-foreground mb-4">
            {displayDescription}
          </p>
          {autoRedirect && countdown > 0 && (
            <p className="text-sm text-muted-foreground mb-6">
              {t.t('redirecting', { 
                interpolation: { 
                  countdown: countdown.toString(),
                  plural: countdown !== 1 ? 's' : ''
                }
              })}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild variant="default">
            <Link href={targetUrl}>
              <Home className="h-4 w-4 mr-2" />
              {autoRedirect ? t.goHomeNow : t.goHome}
            </Link>
          </Button>
          {showBackButton && (
            <Button 
              variant="outline" 
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.history.back();
                }
              }}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t.goBack}
            </Button>
          )}
          <Button 
            variant="outline" 
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.location.reload();
              }
            }}
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            {t.refresh}
          </Button>
        </div>

        <div className="mt-8 text-sm text-muted-foreground">
          <p>{t.errorCheckMessage}</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>{t.checks.urlCorrect}</li>
            <li>{t.checks.pageExists}</li>
            <li>{t.checks.hasPermission}</li>
          </ul>
        </div>
      </div>
    </ContentContainer>
  );
}