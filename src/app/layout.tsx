import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import { me } from "@/lib/site";
import "./globals.css";

// One font family for everything. "latin-ext" = Czech letters (ř, ě, ů…)
const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const description =
  "Junior frontend vývojář. Stavím rychlé a přístupné weby v Next.js pro české firmy a agentury.";

export const metadata: Metadata = {
  metadataBase: new URL(me.url),
  title: "Michal Segeč, frontend vývojář",
  description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "cs_CZ", title: "Michal Segeč, frontend vývojář", description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs" className={hanken.variable}>
      <body>{children}</body>
    </html>
  );
}
