import { Metadata } from "next";
import { Locale } from "@/lib/config/i18n-config";
import { OGTypesEnum } from "@/types/og.types";
import * as i18n from "@/i18n/web/pages/home/home.page.meta.i18n";

export default function defaultMetadata({
  params,
}: {
  params: { locale: Locale };
}): Metadata {
  const locale = params.locale;
  const t = i18n[locale];

  return {
    title: t.metadata.title,
    description: t.metadata.description,
    keywords: t.metadata.keywords,
    openGraph: {
      siteName: "Scintillar",
      type: "website",
      locale,
      title: t.metadata.title,
      description: t.metadata.description,
      images: [
        {
          // Facebook/LinkedIn OG
          url: `/api/og/general?lang=${locale}&type=${OGTypesEnum.FACEBOOK}`,
          width: 1200,
          height: 630,
          alt: t.metadata.title,
          type: "image/png",
        },
        // {
        //   // Instagram OG
        //   url: `/api/og/general?lang=${locale}&type=${OGTypesEnum.INSTAGRAM}`,
        //   width: 800,
        //   height: 1000,
        //   alt: t('metadata.title'),
        //   type: "image/png",
        // },
      ],
    },
    twitter: {
      images: [
        {
          url: `/api/og/general?lang=${locale}&type=${OGTypesEnum.TWITTER}`,
          width: 800,
          height: 418,
          alt: t.metadata.title,
          type: "image/png",
        },
      ],
    },
    metadataBase: new URL(
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://scintillar.com"
    ),
    icons: {
      icon: "/assets/icons/favicon/favicon_192.png",
      shortcut: "/assets/icons/shortcut/shortcut_192.png",
      apple: "/assets/icons/apple/apple_192.png",
    },
  };
}
