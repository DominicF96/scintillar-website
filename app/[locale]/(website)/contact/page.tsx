import React from "react";
import * as i18n from "@/i18n/web/pages/contact/contact.page.i18n";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/web/forms/contact.form";
import ScrollTop from "@/components/shared/utils/scroll-top.component";

async function ContactPage({ params }) {
  const { locale } = await params;
  const t = i18n[locale];

  return (
    <div className="max-w-[1200px] mx-auto px-8 py-20">
      <ScrollTop />
      <h1 className="max-w-[700px]">{t.title}</h1>
      <p className="mt-4 max-w-[500px] text-primary">{t.subtitle}</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-16 gap-8">
        <Card>
          <CardContent className="py-8">
            <ContactForm locale={locale} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default ContactPage;
