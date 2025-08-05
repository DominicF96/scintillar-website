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
import { Locale } from "@/lib/config/i18n-config";
import { useTheme } from "next-themes";
import { MonitorIcon, MoonIcon, SunIcon, UserCogIcon } from "lucide-react";
import { useTranslation } from "@/lib/hooks/useTranslation";
import { useLocaleActions } from "@/providers/locale.context";

function UserMenu() {
  const { t, theme_toggle, language_toggle, preferences, logout, guest, not_logged_in } = useTranslation(i18n);
  const { setLocale, isLoading: localeLoading, availableLocales } = useLocaleActions();
  const { user, error, isLoading } = useUser();
  const { setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Ensure component is mounted before rendering user data
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const changeLanguage = (lang: Locale) => {
    setLocale(lang);
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

  // Don't render until mounted (prevents hydration mismatch)
  if (!mounted || isLoading) {
    return (
      <Avatar className="cursor-pointer">
        <AvatarFallback>...</AvatarFallback>
      </Avatar>
    );
  }

  // Show error or no user state
  if (error || !user) {
    return (
      <Avatar className="cursor-pointer">
        <AvatarFallback>?</AvatarFallback>
      </Avatar>
    );
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
              {user ? user.name : guest}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {user ? user.email : not_logged_in}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <UserCogIcon />
          <Link href="/app/preferences">{preferences}</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              {theme_toggle.toggle}
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  <SunIcon /> {theme_toggle.light}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  <MoonIcon />
                  {theme_toggle.dark}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  <MonitorIcon />
                  {theme_toggle.system}
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              {language_toggle.toggle}
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem onClick={() => changeLanguage("en")}>
                  <code>EN</code>
                  {language_toggle.english}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage("fr")}>
                  <code>FR</code>
                  {language_toggle.french}
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/api/auth/logout">{logout}</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserMenu;
