import type { Metadata, Viewport } from "next"
import "./globals.css"
import { Analytics } from "@/components/analytics"
import { PublicContactBar } from "@/components/public-contact-bar"
import { SiteSearchNavigation } from "@/components/site-search-navigation"
import { SITE_URL } from "@/lib/site"

const siteUrl = `${SITE_URL}/`
const socialImage = siteUrl + "images/gcc-market-entry-social.jpg?v=20260923-static"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GCC Market Entry | Free GCC Guide for Malaysian Businesses",
    template: "%s | GCC Market Entry",
  },
  description:
    "A free, independent and multilingual GCC market-entry resource for Malaysian businesses exploring Saudi Arabia, the UAE and the wider Gulf through official sources, practical guides and planning tools.",
  keywords: [
    "GCC market entry Malaysia",
    "Saudi Arabia market entry Malaysia",
    "UAE market entry Malaysia",
    "Malaysia GCC export",
    "GCC compliance guide",
    "Arabic localisation ecommerce",
    "GCC marketplace guide",
    "Malaysian exporters GCC",
  ],
  creator: "GCC Market Entry",
  publisher: "GCC Market Entry",
  category: "Business education and market-entry research",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-MY": siteUrl,
      "ms-MY": siteUrl + "bm/",
      ar: siteUrl + "ar/",
      "x-default": siteUrl,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "GCC Market Entry — Free Independent Guide for Malaysian Businesses",
    description:
      "Official-source-first guidance, country guides, readiness tools, verified Middle East career links and practical GCC market-entry resources. Free to use in English, Bahasa Melayu and Arabic.",
    siteName: "GCC Market Entry",
    locale: "en_MY",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "GCC Market Entry — Malaysia to Saudi Arabia, UAE and the wider GCC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GCC Market Entry | Malaysia to Saudi Arabia, UAE & GCC",
    description:
      "A free independent GCC market-entry knowledge hub for Malaysian businesses, with official sources, free tools and verified Middle East career links.",
    images: [socialImage],
  },
  icons: {
    icon: siteUrl + "gcc-market-entry-favicon-approved-green-gold-20260923.png?v=20260923-approved",
    apple: siteUrl + "gcc-market-entry-favicon-approved-green-gold-20260923.png?v=20260923-approved",
  },
}

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#123b2c",
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "GCC Market Entry",
  alternateName: "GCC Market Entry Malaysia",
  url: siteUrl,
  description:
    "Free independent guidance for Malaysian businesses exploring Saudi Arabia, the UAE and wider GCC markets.",
  inLanguage: ["en-MY", "ms-MY", "ar"],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c") }}
        />
        {children}
        <PublicContactBar />
        <SiteSearchNavigation />
        <Analytics />
      </body>
    </html>
  )
}
