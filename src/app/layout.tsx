import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { client } from "@/config/client";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Young Engineers | Ingénierie et robotique pour enfants au Québec",
  description:
    "En 90 jours, votre enfant peut avoir une vraie conversation d'ingénierie avec vous. Cours hebdomadaires en petit groupe. Réservez votre consultation gratuite.",
  openGraph: {
    title:
      "Young Engineers | Ingénierie et robotique pour enfants",
    description:
      "Réservez votre consultation gratuite. Cours d'ingénierie et de robotique en petit groupe pour enfants du primaire.",
    locale: "fr_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${lora.variable}`}>
      <body>
        {client.metaPixelId && (
          <>
            <Script id="meta-pixel" strategy="afterInteractive">
              {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${client.metaPixelId}');
                fbq('track', 'PageView');
              `}
            </Script>
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${client.metaPixelId}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}
        <div className="top-bar">
          <a href="#calendrier">
            Réservez votre consultation gratuite &rarr;
          </a>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
