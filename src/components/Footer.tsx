"use client";

import { usePathname } from "next/navigation";
import { client } from "@/config/client";

export function Footer() {
  const path = usePathname();
  const mathPlus =
    path === "/faq" ||
    path.startsWith("/faq/") ||
    path === "/rendez-vous" ||
    path.startsWith("/rendez-vous/");
  const name = mathPlus ? "MathPlus" : client.name;
  const detail = mathPlus
    ? `Enrichissement STEM · ${client.location}`
    : `${client.tagline} · ${client.location}`;

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-name">{name}</div>
        <p className="footer-detail">{detail}</p>
        {(client.phone || client.email) && (
          <p className="footer-detail">
            {[client.phone, client.email].filter(Boolean).join(" · ")}
          </p>
        )}
      </div>
    </footer>
  );
}
