"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ContentContainer from "@/components/layout/containers/content-container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLocale } from "@/providers/locale.context";

interface AutoRedirectProps {
  targetUrl: string;
  sectionTitle: string;
  sectionIcon?: React.ComponentType<{ className?: string }>;
  delay?: number;
}

export default function AutoRedirect({ 
  targetUrl, 
  sectionTitle, 
  sectionIcon: Icon,
  delay = 10000 
}: AutoRedirectProps) {
  const locale = useLocale();
  const router = useRouter();
  const [countdown, setCountdown] = useState(Math.ceil(delay / 1000));

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
  }, [router, targetUrl, delay]);

  return (
    <ContentContainer className="py-8 px-8 flex flex-col items-center justify-center min-h-[60vh]">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Redirecting to {sectionTitle}</h1>
          <p className="text-muted-foreground mb-4">
            Taking you to the first available page in this section...
          </p>
          {countdown > 0 && (
            <p className="text-sm text-muted-foreground mb-6">
              Redirecting in {countdown} second{countdown !== 1 ? 's' : ''}
            </p>
          )}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild>
            <Link href={targetUrl}>
              Continue to {sectionTitle}
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={`/${locale}/app`}>
              Go to Home Instead
            </Link>
          </Button>
        </div>
        
        <p className="text-xs text-muted-foreground mt-6">
          Or use the navigation sidebar to explore other sections.
        </p>
      </div>
    </ContentContainer>
  );
}