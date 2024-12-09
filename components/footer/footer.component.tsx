import React from "react";
import Link from "next/link";
import { Locale } from "@/i18n.config";
import * as i18n from "@/i18n/components/footer.i18n";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Logo from "../logo.component";
import "./footer.component.scss";

type Props = {
  locale: Locale;
};

function Footer({ locale }: Props) {
  const t = i18n[locale];

  return (
    <footer className="bg-primary text-background py-16 overflow-x-hidden">
      <div className="mx-auto max-w-[1000px] px-4">
        <div className="flex flex-col items-start w-full mb-6 md:flex-row md:justify-between">
          <div className="flex flex-col max-w-[530px] mb-6">
            <h2>{t.newsletter.title}</h2>
            <p className="mb-4">{t.newsletter.description}</p>
            <div className="newsletter-actions-container">
              <Input
                placeholder={t.newsletter.placeholder}
                className="mr-2 newsletter-input"
              />
              <Button className="newsletter-button">
                {t.newsletter.submit}
              </Button>
            </div>
          </div>
          <ul className="flex flex-row gap-2 mb-6">
            <li>
              <Link
                href="https://example.com/bluesky"
                title={t.socials.bluesky}
                target="_blank"
                rel="noopener"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.4045 13.4462C23.9075 17.5776 29.8267 25.9543 32 30.4497C34.1734 25.9546 40.0922 17.5775 45.5955 13.4462C49.5662 10.4652 55.9998 8.15862 55.9998 15.4982C55.9998 16.964 55.1594 27.8118 54.6665 29.5729C52.9532 35.6956 46.7098 37.2573 41.1562 36.3121C50.8638 37.9643 53.3333 43.4369 48.0001 48.9095C37.8713 59.3031 33.4421 46.3018 32.3067 42.9703C32.0986 42.3596 32.0012 42.0739 31.9998 42.3168C31.9984 42.0739 31.901 42.3596 31.693 42.9703C30.558 46.3018 26.1289 59.3035 15.9995 48.9095C10.6663 43.4369 13.1357 37.964 22.8434 36.3121C17.2897 37.2573 11.0462 35.6956 9.33313 29.5729C8.84021 27.8116 7.99982 16.9638 7.99982 15.4982C7.99982 8.15862 14.4336 10.4652 18.4042 13.4462H18.4045Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="https://example.com/discord"
                title={t.socials.discord}
                target="_blank"
                rel="noopener"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_99_466)">
                    <path
                      d="M48.2307 17.037C45.077 15.5932 41.7477 14.5689 38.3279 13.9903C37.8599 14.8269 37.4365 15.6876 37.0594 16.5689C33.4166 16.0199 29.7121 16.0199 26.0693 16.5689C25.6919 15.6877 25.2685 14.827 24.8007 13.9903C21.3787 14.5738 18.0472 15.6005 14.8904 17.0446C8.6233 26.3169 6.92438 35.3589 7.77384 44.2725C11.444 46.9842 15.552 49.0465 19.9192 50.3697C20.9026 49.0471 21.7727 47.644 22.5204 46.1753C21.1003 45.6449 19.7295 44.9905 18.4241 44.2196C18.7677 43.9705 19.1037 43.7137 19.4284 43.4646C23.2268 45.2509 27.3725 46.177 31.57 46.177C35.7674 46.177 39.9132 45.2509 43.7115 43.4646C44.04 43.7326 44.376 43.9894 44.7158 44.2196C43.4079 44.9917 42.0347 45.6474 40.612 46.1791C41.3588 47.6471 42.229 49.049 43.2132 50.3697C47.5841 49.0518 51.6953 46.9905 55.3661 44.2763C56.3628 33.9393 53.6634 24.9804 48.2307 17.037ZM23.5964 38.7907C21.2292 38.7907 19.2736 36.6425 19.2736 33.9997C19.2736 31.357 21.1613 29.1899 23.5888 29.1899C26.0164 29.1899 27.9569 31.357 27.9154 33.9997C27.8739 36.6425 26.0089 38.7907 23.5964 38.7907ZM39.5435 38.7907C37.1726 38.7907 35.2245 36.6425 35.2245 33.9997C35.2245 31.357 37.1122 29.1899 39.5435 29.1899C41.9749 29.1899 43.9003 31.357 43.8588 33.9997C43.8173 36.6425 41.956 38.7907 39.5435 38.7907Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_99_466">
                      <rect
                        width="48"
                        height="36.3794"
                        fill="white"
                        transform="translate(7.57001 13.9903)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="https://example.com/github"
                title={t.socials.github}
                target="_blank"
                rel="noopener"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M32 8.5921C18.74 8.5921 8 19.3321 8 32.5921C8 43.2121 14.87 52.1821 24.41 55.3621C25.61 55.5721 26.06 54.8521 26.06 54.2221C26.06 53.6521 26.03 51.7621 26.03 49.7521C20 50.8621 18.44 48.2821 17.96 46.9321C17.69 46.2421 16.52 44.1121 15.5 43.5421C14.66 43.0921 13.46 41.9821 15.47 41.9521C17.36 41.9221 18.71 43.6921 19.16 44.4121C21.32 48.0421 24.77 47.0221 26.15 46.3921C26.36 44.8321 26.99 43.7821 27.68 43.1821C22.34 42.5821 16.76 40.5121 16.76 31.3321C16.76 28.7221 17.69 26.5621 19.22 24.8821C18.98 24.2821 18.14 21.8221 19.46 18.5221C19.46 18.5221 21.47 17.8921 26.06 20.9821C27.98 20.4421 30.02 20.1721 32.06 20.1721C34.1 20.1721 36.14 20.4421 38.06 20.9821C42.65 17.8621 44.66 18.5221 44.66 18.5221C45.98 21.8221 45.14 24.2821 44.9 24.8821C46.43 26.5621 47.36 28.6921 47.36 31.3321C47.36 40.5421 41.75 42.5821 36.41 43.1821C37.28 43.9321 38.03 45.3721 38.03 47.6221C38.03 50.8321 38 53.4121 38 54.2221C38 54.8521 38.45 55.6021 39.65 55.3621C49.13 52.1821 56 43.1821 56 32.5921C56 19.3321 45.26 8.5921 32 8.5921Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="https://example.com/youtube"
                title={t.socials.youtube}
                target="_blank"
                rel="noopener"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_99_478)">
                    <g clipPath="url(#clip1_99_478)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M51.0378 16.2028C53.1043 16.756 54.7284 18.3799 55.2815 20.4465C56.2811 24.1883 56.2852 32 56.2852 32C56.2852 32 56.2852 39.8117 55.2815 43.5536C54.7284 45.6201 53.1043 47.2441 51.0378 47.7972C47.2961 48.8008 32.285 48.8008 32.285 48.8008C32.285 48.8008 17.2742 48.8008 13.5323 47.7972C11.4658 47.2441 9.84181 45.6201 9.28863 43.5536C8.285 39.8117 8.285 32 8.285 32C8.285 32 8.285 24.1883 9.28863 20.4465C9.84181 18.3799 11.4658 16.756 13.5323 16.2028C17.2742 15.1992 32.285 15.1992 32.285 15.1992C32.285 15.1992 47.2961 15.1992 51.0378 16.2028ZM39.9507 32.0007L27.4804 39.1998V24.8014L39.9507 32.0007Z"
                        fill="currentColor"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_99_478">
                      <rect
                        width="48"
                        height="33.6017"
                        fill="white"
                        transform="translate(8.285 15.1992)"
                      />
                    </clipPath>
                    <clipPath id="clip1_99_478">
                      <rect
                        width="48"
                        height="33.6017"
                        fill="white"
                        transform="translate(8.285 15.1992)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </li>
          </ul>
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
              <li>
                <Link href="/success-stories">
                  {t.categories.explore.links.success_stories}
                </Link>
              </li>
              <li>
                <Link href="/marketplace">
                  {t.categories.explore.links.modules_marketplace}
                </Link>
              </li>
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
                <Link href="/cookies">{t.categories.legal.links.cookies}</Link>
              </li>
              <li>
                <Link href="/privacy">{t.categories.legal.links.privacy}</Link>
              </li>
              <li>
                <Link href="/terms">{t.categories.legal.links.terms}</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-end flex flex-col items-start md:flex-row md:justify-between">
          <Logo
            color="inverted-flat"
            forceHorizontal={true}
            className="mb-4 md:mb-0"
          />
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
