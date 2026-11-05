"use client";

import Script from "next/script";
import { client } from "@/config/client";

export function RendezVousCalendar() {
  const calId = client.ghl.calendarId;

  return (
    <div className="calendar-slot rdv-calendar">
      <iframe
        src={`https://api.leadconnectorhq.com/widget/booking/${calId}`}
        style={{ width: "100%", border: "none", overflow: "hidden" }}
        scrolling="no"
        id={`cal_${calId}`}
        title="Réserver une consultation"
      />
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
