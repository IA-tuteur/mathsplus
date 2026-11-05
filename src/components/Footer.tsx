"use client";

import { usePathname } from "next/navigation";
import { client } from "@/config/client";

export function Footer() {
  const path = usePathname();
  const onFaq = path === "/faq" || path.startsWith("/faq/");
  const name = onFaq ? "MathPlus" : client.name;
  const detail = onFaq
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
