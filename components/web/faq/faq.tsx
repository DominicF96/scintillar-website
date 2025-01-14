import React from "react";
import { Locale } from "@/i18n.config";
import * as i18n from "@/i18n/web/components/faq.i18n";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import "./faq.scss";

type Props = {
  locale: Locale;
};

function FAQ({ locale }: Props) {
  const t = i18n[locale];

  return (
    <section className="faq-section mx-auto max-w-[1000px] lg:max-w-[1200px] px-8 py-20 pb-32 text-left">
      <span className="faq-flavor font-medium">{t.faq.flavor}</span>
      <h2 className="max-w-[400px]">{t.faq.title}</h2>
      <Accordion
        type="single"
        collapsible
        className="mt-8 rounded-md rounded-b-none overflow-hidden"
      >
        {t.faq.items.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent className="font-thin">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export default FAQ;
