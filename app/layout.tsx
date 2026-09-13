import type { Metadata, Viewport } from "next"
import "./globals.css"
import { Analytics } from "@/components/analytics"
import { ApprovedDriveVisuals } from "@/components/approved-drive-visuals"
import { OfficialErommanIdentity } from "@/components/official-eromman-identity"
import { EROMMAN_LINKS, SELLER_SUPPORT } from "@/lib/links"
import { SITE_URL } from "@/lib/site"

const siteUrl = `${SITE_URL}/`
const socialImage = siteUrl + "images/gcc-market-entry-social.jpg?v=20260912-1"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GCC Market Entry Malaysia | Saudi Arabia & UAE | eRomman",
    template: "%s | GCC Market Entry Malaysia",
  },
  description:
    "GCC market entry support for Malaysian brands exploring Saudi Arabia, UAE and the Middle East with eRomman, including product fit, Arabic localisation, marketplace readiness, digital marketing and seller support.",
  keywords: [
    "GCC market entry Malaysia",
    "GCC market entry",
    "sell to Saudi Arabia from Malaysia",
    "sell to UAE from Malaysia",
    "Malaysia Middle East ecommerce",
    "Saudi Arabia marketplace Malaysia",
    "UAE marketplace Malaysia",
    "Arabic ecommerce localisation",
    "cross-border ecommerce Malaysia",
    "Malaysian brands GCC",
    "eRomman GCC",
  ],
  authors: [{ name: SELLER_SUPPORT.name }],
  creator: SELLER_SUPPORT.name,
  publisher: "eRomman Technologies Sdn Bhd",
  category: "E-commerce market entry",
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
    title: "GCC Market Entry Malaysia — Saudi Arabia, UAE & Middle East | eRomman",
    description:
      "A practical GCC market-entry pathway for Malaysian sellers: product fit, Arabic localisation, marketplace readiness, market validation and seller support with eRomman.",
    siteName: "GCC Market Entry by eRomman",
    locale: "en_MY",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "GCC Market Entry Malaysia — eRomman seller support for Saudi Arabia and UAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GCC Market Entry Malaysia | Saudi Arabia & UAE | eRomman",
    description: "Practical GCC market-entry support for Malaysian brands exploring Saudi Arabia, UAE and the Middle East.",
    images: [socialImage],
  },
  icons: {
    icon: siteUrl + "icon.svg?v=20260912",
    apple: siteUrl + "apple-icon.png",
  },
}

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#b3131b",
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "eRomman Technologies Sdn Bhd",
  alternateName: "eRomman",
  url: EROMMAN_LINKS.home,
  description: "E-commerce and GCC market-entry support for sellers and brands expanding into Middle East markets.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Seller Support",
    email: SELLER_SUPPORT.email,
    telephone: SELLER_SUPPORT.phone,
    availableLanguage: ["English", "Malay", "Arabic"],
  },
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "GCC Market Entry by eRomman",
  alternateName: "GCC Market Entry Malaysia",
  url: siteUrl,
  description: metadata.description,
  inLanguage: ["en-MY", "ms-MY", "ar"],
  publisher: { "@id": `${SITE_URL}/#organization` },
  author: {
    "@type": "Person",
    name: SELLER_SUPPORT.name,
    jobTitle: SELLER_SUPPORT.role,
    url: EROMMAN_LINKS.sellerSupportLinkedIn,
  },
}

const authorSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#seller-support`,
  name: SELLER_SUPPORT.name,
  jobTitle: SELLER_SUPPORT.role,
  url: EROMMAN_LINKS.sellerSupportLinkedIn,
  email: SELLER_SUPPORT.email,
  telephone: SELLER_SUPPORT.phone,
  worksFor: { "@id": `${SITE_URL}/#organization` },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c") }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c") }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema).replace(/</g, "\\u003c") }} />
        {children}
        <OfficialErommanIdentity />
        <ApprovedDriveVisuals />
        <Analytics />
      </body>
    </html>
  )
}
