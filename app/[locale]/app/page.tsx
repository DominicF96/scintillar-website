import React from "react";
import { Locale } from "@/i18n.config";
import { getUser } from "@/app/api/auth/auth";
import * as i18n from "@/i18n/app/dashboard.i18n";

type Props = {
  params: {
    locale: Locale;
  };
};

async function Page({ params }: Props) {
  const { locale } = await params;
  const t = i18n[locale];
  const user = await getUser();
  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <h2>{t.title}</h2>
      <p>{t.description}</p>
      <pre className="my-2 text-foreground p-8 overflow-x-scroll bg-card rounded-lg">
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre>
    </div>
  );
}

export default Page;
