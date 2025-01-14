"use client";
import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as i18n from "@/i18n/web/pages/contact/contact.page.i18n";
import { Locale } from "@/i18n.config";
import { Textarea } from "@/components/ui/textarea";
import { LoaderIcon, PartyPopperIcon, XCircleIcon } from "lucide-react";
import { Switch } from "@/components/ui/switch";

type Props = {
  locale: Locale;
};

function ContactForm({ locale }: Props) {
  const t = i18n[locale];

  const [isLoading, setLoading] = useState<boolean>(false);
  const [sentMessage, setSentMessage] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [isLoadingSubscribe, setLoadingSubscribe] = useState<boolean>(false);
  const [subscribeRes, setSubscribeRes] = useState<boolean | undefined>(
    undefined
  );

  const formSchema = z.object({
    firstname: z
      .string()
      .regex(/^[a-zA-Z\s]*$/, t.errors.only_letters)
      .min(2, t.errors.min_2_chars)
      .max(50, t.errors.max_50_chars),
    lastname: z
      .string()
      .regex(/^[a-zA-Z\s]*$/, t.errors.only_letters)
      .min(2, t.errors.min_2_chars)
      .max(50, t.errors.max_50_chars),
    email: z.string().email(t.errors.email_valid).min(5, t.errors.min_5_chars),
    company: z.string().max(50, t.errors.max_50_chars),
    reason: z.string().max(50, t.errors.max_50_chars),
    message: z.string().max(500, t.errors.max_500_chars),
    newsletter: z.boolean(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      company: "",
      reason: "general",
      message: "",
      newsletter: true,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setSentMessage(false);
    if (values.newsletter) {
      subscribe(values);
    }

    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...values,
        locale,
        requested_at: new Date().toISOString(),
      }),
    })
      .then((res) => {
        if (res.ok) {
          setSentMessage(true);
          setError(null);
          form.reset();
          const audio = new Audio("/sounds/success.mp3");
          audio.volume = 0.2;
          audio.play().catch((error) => {
            console.error("Error playing sound:", error);
          });
        } else {
          throw new Error("Unable to submit contact request.");
        }
      })
      .catch((err) => {
        console.error(err);
        setError(`Unable to submit contact request. Please try again., ${err}`);
        const audio = new Audio("/sounds/error.mp3");
        audio.volume = 0.2;
        audio.play().catch((error) => {
          console.error("Error playing sound:", error);
        });
        setSentMessage(false);
      })
      .finally(() => setLoading(false));
    setLoading(false);
  }

  const subscribe = async (values: z.infer<typeof formSchema>) => {
    setSubscribeRes(undefined);
    setLoadingSubscribe(true);
    console.log("Subscribing to newsletter", values);
    await fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({
        email: values.email,
        firstName: values.firstname,
        lastName: values.lastname,
        tags: ["src:contact-form"],
        note: `[CONTACT FORM] User provided the following message: '${values.message}'.`,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.status === 200) {
          setSubscribeRes(true);
        } else {
          throw new Error("Unable to subscribe to newsletter");
        }
      })
      .catch((err) => {
        console.error(`Unable to subscribe to newsletter, ${err}`);
        setSubscribeRes(false);
      })
      .finally(() => setLoadingSubscribe(false));
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {t.firstname.label}
                  <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder={t.firstname.placeholder} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {t.lastname.label}
                  <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder={t.lastname.placeholder} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {t.email.label}
                  <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder={t.email.placeholder} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.company.label}</FormLabel>
                <FormControl>
                  <Input placeholder={t.company.placeholder} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="reason"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.reason_select.label}</FormLabel>
              <FormControl>
                <Select
                  {...field}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t.reason_select.placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(t.reason_select.options).map((key) => (
                      <SelectItem key={`reason_${key}`} value={key}>
                        {t.reason_select.options[key]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.message.label}</FormLabel>
              <FormControl>
                <Textarea placeholder={t.message.placeholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="newsletter"
          render={({ field }) => (
            <FormItem className="flex items-center gap-2">
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="!mt-0 w-fit cursor-pointer">
                {t.newsletter.label}
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-2">
          <small className="text-muted-foreground font-normal">
            <span dangerouslySetInnerHTML={{ __html: t.notice }}></span>
          </small>
        </div>
        {error ? (
          <div>
            <small className="text-destructive font-bold flex items-center">
              <XCircleIcon height={18} width={18} />
              &nbsp;{t.errors.submit}
            </small>
          </div>
        ) : null}
        {sentMessage ? (
          <div>
            <small className="text-primary font-bold flex items-center">
              <PartyPopperIcon height={18} width={18} />
              &nbsp;{t.submit_successful}
            </small>
          </div>
        ) : null}
        {subscribeRes === true ? (
          <div>
            <small className="text-primary font-bold flex items-center">
              <PartyPopperIcon height={18} width={18} />
              &nbsp;{t.newsletter.tips.success}
            </small>
          </div>
        ) : null}
        {subscribeRes === false ? (
          <div>
            <small className="text-destructive font-bold flex items-center">
              <XCircleIcon height={18} width={18} />
              &nbsp;{t.newsletter.tips.error}
            </small>
          </div>
        ) : null}
        <Button disabled={isLoading || isLoadingSubscribe} type="submit">
          {t.submit}&nbsp;
          {isLoading || isLoadingSubscribe ? (
            <LoaderIcon height={18} width={18} className="animate-spin" />
          ) : null}
        </Button>
      </form>
    </Form>
  );
}

export default ContactForm;
