import React from "react";
import ScrollTop from "@/components/utils/scroll-top.component";
import * as i18n from "@/i18n/legal/privacy-policy.i18n";
import * as indexI18n from "@/i18n/legal/index.i18n";
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
            })}
            .
          </CardDescription>
        </CardHeader>
        <CardContent className="legal-policy-content">
          <p>{content.introduction}</p>
          <section>
            <h2>{content.information_collection.title}</h2>
            <p>{content.information_collection.description}</p>
          </section>
          <section>
            <h2>{content.use_of_information.title}</h2>
            <p>{content.use_of_information.description}</p>
          </section>
          <section>
            <h2>{content.information_sharing.title}</h2>
            <p>{content.information_sharing.description}</p>
          </section>
          <section>
            <h2>{content.data_security.title}</h2>
            <p>{content.data_security.description}</p>
          </section>
          <section>
            <h2>{content.your_rights.title}</h2>
            <p>{content.your_rights.description}</p>
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
