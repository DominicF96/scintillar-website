import React from "react";
import ScrollTop from "@/components/utils/scroll-top.component";
import * as indexI18n from "@/i18n/legal/index.i18n";
import * as i18n from "@/i18n/legal/terms-and-conditions.i18n";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { CaretLeftIcon } from "@radix-ui/react-icons";

function Page({ params }) {
  const { locale } = params;
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
            })}.
          </CardDescription>
        </CardHeader>
        <CardContent className="legal-policy-content">
          <p>{content.introduction}</p>
          <section>
            <h2>{content.terms.title}</h2>
            <p>{content.terms.description}</p>
          </section>
          <section>
            <h2>{content.user_responsibilities.title}</h2>
            <p>{content.user_responsibilities.description}</p>
          </section>
          <section>
            <h2>{content.limitations_of_liability.title}</h2>
            <p>{content.limitations_of_liability.description}</p>
          </section>
          <section>
            <h2>{content.governing_law.title}</h2>
            <p>{content.governing_law.description}</p>
          </section>
          <section>
            <h2>{content.changes_to_terms.title}</h2>
            <p>{content.changes_to_terms.description}</p>
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
