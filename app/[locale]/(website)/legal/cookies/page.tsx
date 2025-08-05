import React from "react";
import ScrollTop from "@/components/navigation/scroll-utils/scroll-top";
import * as i18n from "@/i18n/shared/pages/legal/cookie-policy.i18n";
import * as indexI18n from "@/i18n/shared/pages/legal/index.i18n";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { CaretLeftIcon } from "@radix-ui/react-icons";

async function Page({ params }) {
  const { locale } = await params;
  const content = i18n[locale];
  const indexContent = indexI18n[locale];

  return (
    <div className="max-w-[1200px] mx-auto px-8 py-20">
      <ScrollTop />
      <div className="mb-8">
        <Link href={`/${locale}/legal`}>
          <CaretLeftIcon className="inline mr-2" />
          {indexContent.back_to_policies}
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>
            <h1>{content.title}</h1>
          </CardTitle>
          <CardDescription>
            {new Date(2024, 11, 30, 18, 32).toLocaleDateString(locale, {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            })}
            .
          </CardDescription>
        </CardHeader>
        <CardContent className="legal-policy-content">
          <p>{content.introduction}</p>
          <section>
            <h2>{content.what_are_cookies.title}</h2>
            <p>{content.what_are_cookies.description}</p>
          </section>
          <section>
            <h2>{content.how_we_use_cookies.title}</h2>
            <p>{content.how_we_use_cookies.description}</p>
          </section>
          <section>
            <h2>{content.types_of_cookies.title}</h2>
            <h3>{content.types_of_cookies.essential.title}</h3>
            <p>{content.types_of_cookies.essential.description}</p>
            <h3>{content.types_of_cookies.performance.title}</h3>
            <p>{content.types_of_cookies.performance.description}</p>
            <h3>{content.types_of_cookies.functionality.title}</h3>
            <p>{content.types_of_cookies.functionality.description}</p>
            <h3>{content.types_of_cookies.targeting.title}</h3>
            <p>{content.types_of_cookies.targeting.description}</p>
          </section>
          <section>
            <h2>{content.managing_cookies.title}</h2>
            <p>{content.managing_cookies.description}</p>
          </section>
          <section>
            <h2>{content.changes_to_policy.title}</h2>
            <p>{content.changes_to_policy.description}</p>
          </section>
          <section>
            <h2>{content.contact_us.title}</h2>
            <p>{content.contact_us.description}</p>
          </section>
        </CardContent>
      </Card>
      <div className="mt-8">
        <Link href={`/${locale}/legal`}>
          <CaretLeftIcon className="inline mr-2" />
          {indexContent.back_to_policies}
        </Link>
      </div>
    </div>
  );
}

export default Page;
