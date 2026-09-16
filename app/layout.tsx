import type { Metadata, Viewport } from "next"
import "./globals.css"
import { Analytics } from "@/components/analytics"
import {
  COMPANY_EMAIL,
  COMPANY_LOCATION,
  COMPANY_NAME,
  COMPANY_PHONE_E164,
  COMPANY_REGISTRATION,
  SITE_URL,
} from "@/lib/site"

const siteUrl = `${SITE_URL}/`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TGPU Gulf Advisory | Malaysia–Saudi & GCC Trade",
    template: "%s | TGPU Gulf Advisory",
  },
  description:
    "TGPU Gulf Advisory supports Malaysia–Saudi Arabia and GCC market entry, trade facilitation, supplier and buyer sourcing, documentation readiness and cross-border commercial coordination.",
  keywords: [
    "Malaysia Saudi business",
    "Saudi market entry Malaysia",
    "GCC market entry consultant Malaysia",
    "Malaysia Saudi trade advisory",
    "Saudi importer distributor Malaysia",
    "GCC trade facilitation",
    "Malaysia supplier sourcing Saudi Arabia",
    "Malaysia supplier sourcing GCC",
    "Saudi business consultant Malaysia",
    "Malaysia GCC sourcing",
    "تجارة ماليزيا السعودية",
    "دخول السوق السعودي ماليزيا",
    "موردين من ماليزيا",
    "استيراد من ماليزيا للسعودية",
  ],
  authors: [{ name: "Muhammad Mamduh Bin Saffin" }],
  creator: "Muhammad Mamduh Bin Saffin",
  publisher: COMPANY_NAME,
  category: "Business consulting and trade facilitation",
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
      "ar-SA": siteUrl + "ar/",
      "x-default": siteUrl,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "TGPU Gulf Advisory — Malaysia ↔ Saudi Arabia & GCC",
    description:
      "Market entry, trade facilitation, sourcing and commercial coordination between Malaysia, Saudi Arabia and GCC markets.",
    siteName: COMPANY_NAME,
    locale: "en_MY",
    alternateLocale: ["ms_MY", "ar_SA"],
  },
  twitter: {
    card: "summary",
    title: "TGPU Gulf Advisory — Malaysia ↔ Saudi Arabia & GCC",
    description: "Cross-border market-entry, sourcing and trade advisory between Malaysia and GCC markets.",
  },
  icons: {
    icon: "/icon.svg?v=20260917",
  },
}

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#0a5b45",
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: COMPANY_NAME,
  legalName: "TGPU GULF ADVISORY",
  url: siteUrl,
  identifier: COMPANY_REGISTRATION,
  description:
    "Malaysia-based market-entry, trade facilitation, supplier and buyer sourcing, documentation coordination and commercial advisory for Malaysia, Saudi Arabia and GCC markets.",
  founder: {
    "@type": "Person",
    name: "Muhammad Mamduh Bin Saffin",
    jobTitle: "Founder | GCC Market Entry Consultant",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kuala Lumpur",
    addressCountry: "MY",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Business Enquiries",
    email: COMPANY_EMAIL,
    telephone: COMPANY_PHONE_E164,
    availableLanguage: ["English", "Malay", "Arabic"],
    areaServed: ["MY", "SA", "AE", "QA", "KW", "BH", "OM"],
  },
  areaServed: [
    { "@type": "Country", name: "Malaysia" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Qatar" },
    { "@type": "Country", name: "Kuwait" },
    { "@type": "Country", name: "Bahrain" },
    { "@type": "Country", name: "Oman" },
  ],
  knowsAbout: [
    "GCC market entry",
    "Saudi Arabia market entry",
    "Malaysia supplier sourcing",
    "Trade facilitation",
    "Commercial introductions",
    "Regulatory documentation coordination",
  ],
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: COMPANY_NAME,
  url: siteUrl,
  description: metadata.description,
  inLanguage: ["en-MY", "ms-MY", "ar-SA"],
  publisher: { "@id": `${SITE_URL}/#organization` },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c") }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c") }} />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
