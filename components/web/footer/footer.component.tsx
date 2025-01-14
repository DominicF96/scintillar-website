"use client";
import React, { useState } from "react";
import { CircleX, PartyPopperIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/i18n.config";
import * as i18n from "@/i18n/web/components/footer.i18n";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Logo from "@/components/shared/logo.component";
import { validateEmail } from "@/utils/form_validation/email";
import "./footer.component.scss";
import Socials from "@/components/shared/socials/socials.component";

type Props = {
  locale: Locale;
};

function Footer({ locale }: Props) {
  const t = i18n[locale];
  const { resolvedTheme } = useTheme();

  const [email, setEmail] = useState<string>("");
  const [isEmailDirty, setIsEmailDirty] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [emailResponse, setEmailResponse] = useState<boolean | undefined>(
    undefined
  );

  const handleEmailChange = (email: string) => {
    setEmail(email);
    setIsEmailDirty(true);
    setEmailResponse(undefined);
    setIsEmailValid(validateEmail(email));
  };

  const subscribe = async (email: string) => {
    setEmailResponse(undefined);
    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });
      if (res.status === 200) {
        setEmailResponse(true);
        const audio = new Audio("/sounds/success.mp3");
        audio.volume = 0.2;
        audio.play().catch((error) => {
          console.error("Error playing sound:", error);
        });
      } else {
        throw new Error("Unable to subscribe to newsletter");
      }
    } catch (err) {
      console.error(err);
      const audio = new Audio("/sounds/error.mp3");
      audio.volume = 0.2;
      audio.play().catch((error) => {
        console.error("Error playing sound:", error);
      });
      setEmailResponse(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-primary text-background pt-24 pb-16 overflow-x-hidden">
      {resolvedTheme && (
        <>
          <Image
            src={`/vectors/footer-arc-${resolvedTheme}.svg`}
            alt=""
            className="absolute -left-[1px] -scale-x-100 mt-[-191px] select-none"
            width={96}
            height={96}
          />
          <Image
            src={`/vectors/footer-arc-${resolvedTheme}.svg`}
            alt=""
            className="absolute -right-[1px] mt-[-191px] select-none"
            width={96}
            height={96}
          />
        </>
      )}
      <div className="mx-auto max-w-[1200px] px-8">
        <div className="flex flex-col items-start w-full mb-6 md:flex-row md:justify-between">
          <div className="flex flex-col max-w-[530px] mb-2">
            <h2 className="mb-4">{t.newsletter.title}</h2>
            <p className="mb-8">{t.newsletter.description}</p>
            <div className="newsletter-actions-container">
              <Input
                placeholder={t.newsletter.placeholder}
                className="mr-2 newsletter-input"
                onChange={(e) => handleEmailChange(e.target.value)}
              />
              <Button
                className="newsletter-button"
                onClick={() => subscribe(email)}
                disabled={!isEmailValid || isLoading}
              >
                {t.newsletter.submit}
              </Button>
            </div>
            <div className="mt-2 h-[20px]">
              {isEmailDirty && !isEmailValid && (
                <p className="flex items-center text-sm">
                  <CircleX className="inline mr-1" height={18} />
                  {t.newsletter.invalid_email}
                </p>
              )}
              {emailResponse === false && (
                <p className="flex items-center text-sm">
                  <CircleX className="inline mr-1" height={18} />
                  {t.newsletter.error_subscribing}
                </p>
              )}
              {emailResponse === true && (
                <p className="flex items-center text-sm">
                  <PartyPopperIcon className="inline mr-1" height={18} />
                  {t.newsletter.success_subscribing}
                </p>
              )}
            </div>
          </div>
          <Socials locale={locale} invertedTheme={true} />
        </div>
        <div className="flex flex-col md:flex-row justify-start w-full max-w-6xl gap-4 md:gap-32 mt-12 mb-16">
          <div className="flex flex-col mb-6 md:mb-0">
            <h3>{t.categories.company.title}</h3>
            <ul>
              <li>
                <Link href="/about">{t.categories.company.links.about}</Link>
              </li>
              <li>
                <Link href="/blog">{t.categories.company.links.blog}</Link>
              </li>
              <li>
                <Link href="/contact">
                  {t.categories.company.links.contact}
                </Link>
              </li>
              <li>
                <Link href="/events">{t.categories.company.links.events}</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col mb-6 md:mb-0">
            <h3 className="font-bold">{t.categories.explore.title}</h3>
            <ul>
              <li>
                <Link href="/features">
                  {t.categories.explore.links.features}
                </Link>
              </li>
              {/* <li>
                <Link href="/success-stories">
                  {t.categories.explore.links.success_stories}
                </Link>
              </li>
              <li>
                <Link href="/marketplace">
                  {t.categories.explore.links.modules_marketplace}
                </Link>
              </li> */}
              <li>
                <Link href="/pricing">
                  {t.categories.explore.links.pricing}
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col mb-6 md:mb-0">
            <h3 className="font-bold">{t.categories.legal.title}</h3>
            <ul>
              <li>
                <Link href="/legal/cookies">
                  {t.categories.legal.links.cookies}
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy">
                  {t.categories.legal.links.privacy}
                </Link>
              </li>
              <li>
                <Link href="/legal/terms">
                  {t.categories.legal.links.terms}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-end flex flex-col items-start md:flex-row md:justify-between">
          <Link href="/">
            <Logo
              color="inverted-flat"
              variant="horizontal"
              className="mb-4 md:mb-0 select-none"
            />
          </Link>
          <div className="text-muted">
            &copy; {new Date().getFullYear()} Scintillar,&nbsp;
            {t.all_rights_reserved}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
