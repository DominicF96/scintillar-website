import React from "react";
import Link from "next/link";
import * as i18n from "@/i18n/legal/index.i18n";

async function LegalIndexPage({ params }) {
  const { locale } = await params;
  const content = i18n[locale];

  return (
    <div className="max-w-[1200px] mx-auto px-8 py-20">
      <h1>{content.title}</h1>
      <ul className="mt-8 list-disc pl-4">
        <li>
          <Link href={`/${locale}/legal/privacy`} className="hover:underline">
            {content.privacy_policy}
          </Link>
        </li>
        <li className="mt-4">
          <Link href={`/${locale}/legal/cookies`} className="hover:underline">
            {content.cookie_policy}
          </Link>
        </li>
        <li className="mt-4">
          <Link href={`/${locale}/legal/terms`} className="hover:underline">
            {content.terms_of_service}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default LegalIndexPage;
