"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@auth0/nextjs-auth0/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import * as i18n from "@/i18n/app/components/user-menu.i18n";
import { Locale } from "@/i18n.config";
import { useTheme } from "next-themes";
import Cookies from "js-cookie";
import { MonitorIcon, MoonIcon, SunIcon, UserCogIcon } from "lucide-react";

type Props = {
  locale: Locale;
};

function UserMenu({ locale }: Props) {
  const t = i18n[locale];
  const { user } = useUser();
  const { setTheme } = useTheme();

  const changeLanguage = (lang: Locale) => {
    Cookies.set("NEXT_LOCALE", lang);
    window.location.reload();
  };

  function getInitials(name: string) {
    const [firstName, lastName] = name.split(" ");

    if (firstName && lastName) {
      return `${firstName[0]}${lastName[0]}`;
    } else if (firstName) {
      return `${firstName[0]}${firstName[1]}`;
    } else {
      return ``;
    }
  }

  if (!user) {
    return null;
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          {user?.picture && <AvatarImage src={user.picture} />}
          <AvatarFallback>{getInitials(user.name || "")}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {user ? user.name : t.guest}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {user ? user.email : t.not_logged_in}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <UserCogIcon />
          <Link href="/app/preferences">{t.preferences}</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              {t.theme_toggle.toggle}
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  <SunIcon /> {t.theme_toggle.light}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  <MoonIcon />
                  {t.theme_toggle.dark}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  <MonitorIcon />
                  {t.theme_toggle.system}
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              {t.language_toggle.toggle}
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem onClick={() => changeLanguage("en")}>
                  <code>EN</code>
                  {t.language_toggle.english}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage("fr")}>
                  <code>FR</code>
                  {t.language_toggle.french}
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/api/auth/logout">{t.logout}</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserMenu;
