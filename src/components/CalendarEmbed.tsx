"use client";

import Script from "next/script";
import { client } from "@/config/client";

export function CalendarEmbed() {
  const calId = client.ghl.calendarId;

  if (!calId) {
    return (
      <section id="calendrier" className="calendar-section">
        <div className="wrap">
          <div className="calendar-card">
            <div className="calendar-header">
              <h3>Réservez votre consultation gratuite</h3>
              <p>Seulement 5 places par semaine.</p>
            </div>
            <div className="calendar-slot" style={{ display: "grid", placeItems: "center", minHeight: 300 }}>
              <p style={{ color: "var(--muted)", fontSize: 14 }}>
                CALENDRIER À CONFIGURER
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="calendrier" className="calendar-section">
      <div className="wrap">
        <div className="calendar-card">
          <div className="calendar-header">
            <h3>Réservez votre consultation gratuite</h3>
            <p>Seulement 5 places par semaine. Choisissez votre créneau.</p>
            <div className="calendar-trust">
              <span>
                <span className="calendar-dot" /> 30 min
              </span>
              <span>
                <span className="calendar-dot" /> Gratuit
              </span>
              <span>
                <span className="calendar-dot" /> 5 places / semaine
              </span>
            </div>
          </div>
          <div className="calendar-slot">
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
        </div>
      </div>
    </section>
  );
}
