import "./global.css";
import { Analytics } from "@vercel/analytics/react";
import { baseUrl } from "./sitemap";
import { Navbar } from "./components/nav";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Renildo Pereira | DX at Yumma CSS",
    template: "%s | Renildo Pereira | DX at Yumma CSS",
  },
  description: "Creator of Yumma CSS. Freelancer maintaining and developing Yumma CSS projects.",
  icons: {
    icon: "https://rrenildopereiraa.vercel.app/favicon.ico",
    apple: "https://rrenildopereiraa.vercel.app/apple-icon.png",
  },
  openGraph: {
    title: "Renildo Pereira | DX at Yumma CSS",
    description: "Creator of Yumma CSS. Freelancer maintaining and developing Yumma CSS projects.",
    url: baseUrl,
    siteName: "Renildo Pereira | DX at Yumma CSS",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://rrenildopereiraa.vercel.app/og.png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cx("tc-black bg-white")}>
      <body className="max-w-144 mx-4 mt-8 lg:mx-auto">
        <main className="f-auto min-w-0 mt-6 d-f fd-c px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
