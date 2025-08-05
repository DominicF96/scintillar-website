"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AlertTriangle, Home } from "lucide-react";
import { useTranslationWithLocale } from "@/lib/hooks/useTranslation";
import * as i18n from "@/i18n/shared/pages/not-found.i18n";

export default function GlobalNotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);
  
  // Simple locale detection from browser or default to 'en'
  const [locale] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedLocale = localStorage.getItem('locale');
      if (storedLocale && ['en', 'fr'].includes(storedLocale)) {
        return storedLocale;
      }
      const browserLocale = navigator.language.split('-')[0];
      return ['en', 'fr'].includes(browserLocale) ? browserLocale : 'en';
    }
    return 'en';
  });
  
  const t = useTranslationWithLocale(i18n, locale);
  const targetUrl = "/app";
  const delay = 10000;

  useEffect(() => {
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
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md px-4">
        <AlertTriangle className="h-24 w-24 text-orange-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
        <p className="text-muted-foreground mb-4">
          {t.description}
        </p>
        
        {countdown > 0 && (
          <p className="text-sm text-muted-foreground mb-8">
            {t.t('redirecting', { 
              interpolation: { 
                countdown: countdown.toString(),
                plural: countdown !== 1 ? 's' : ''
              }
            })}
          </p>
        )}
        
        <Link 
          href="/app"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Home className="h-4 w-4" />
          {t.returnToApp}
        </Link>
        
        <div className="mt-8 text-sm text-muted-foreground">
          <p>{t.youCanAlsoTry}</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>{t.suggestions.checkUrl}</li>
            <li>{t.suggestions.goBack}</li>
            <li>{t.suggestions.useNavigation}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}