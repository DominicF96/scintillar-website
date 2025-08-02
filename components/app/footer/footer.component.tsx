"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Locale } from "@/i18n.config";
import * as i18n from "@/i18n/app/components/footer.i18n";
import Logo from "@/components/shared/logo.component";
import { APP_VERSION } from "@/lib/version";
import "./footer.component.scss";

type Props = {
  locale: Locale;
};

type SystemStatus = "operational" | "degraded" | "outage";

function Footer({ locale }: Props) {
  const t = i18n[locale];
  const [systemStatus, setSystemStatus] = useState<SystemStatus>("operational");

  // Simulate system status (in real implementation, this would fetch from an API)
  useEffect(() => {
    // For demo purposes, randomly set status
    const statuses: SystemStatus[] = [
      "operational",
      "operational",
      "operational",
      "degraded",
    ];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    setSystemStatus(randomStatus);
  }, []);

  const getStatusColor = (status: SystemStatus) => {
    switch (status) {
      case "operational":
        return "bg-green-500";
      case "degraded":
        return "bg-yellow-500";
      case "outage":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <footer className="app-footer overflow-x-hidden bg-card border-t hidden lg:block">
      <div className="footer-end py-3 px-6 pl-2 flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
        {/* Left side - Logo, Copyright, Links */}
        <div className="flex flex-col gap-0 lg:flex-row lg:items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo variant="standalone" className="h-6" />
          </div>

          {/* Copyright */}
          <div className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} <a href="https://dominicfournier.com" target="_blank">Dominic Fournier</a>
          </div>
        </div>
        {/* Navigation links */}
        <div className="flex gap-4 text-sm">
          <Link
            href="/guides"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.links.guides}
          </Link>
          <Link
            href="/help"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.links.help}
          </Link>
          <Link
            href="/contact"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.links.contact}
          </Link>
        </div>

        {/* Right side - System status and version */}
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4">
          {/* System status badge */}
          <div className="flex items-center gap-2 text-sm">
            <div
              className={`w-2 h-2 rounded-full ${getStatusColor(systemStatus)}`}
            ></div>
            <span className="text-muted-foreground">
              {t.status[systemStatus]}
            </span>
          </div>

          {/* App version */}
          <div className="text-muted-foreground text-sm">
            {t.version} {APP_VERSION}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
