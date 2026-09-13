import type { Metadata } from "next"
import { GccMarketEntryGuide } from "@/components/gcc-market-entry-guide"
import { ViewingExperienceNotice } from "@/components/viewing-experience-notice"
import { WeeklySellerBriefing } from "@/components/weekly-seller-briefing"
import { SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "GCC Market Entry Malaysia | Sell to Saudi Arabia & UAE | eRomman",
  description:
    "GCC market entry for Malaysian brands with eRomman. Explore Saudi Arabia, UAE and the Middle East through Arabic localisation, marketplace readiness, market validation, digital marketing and seller support.",
  alternates: {
    canonical: `${SITE_URL}/`,
    languages: {
      "en-MY": `${SITE_URL}/`,
      "ms-MY": `${SITE_URL}/bm/`,
      ar: `${SITE_URL}/ar/`,
      "x-default": `${SITE_URL}/`,
    },
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GCC Market Entry Support for Malaysian Brands",
  serviceType: "GCC market entry, marketplace readiness, localisation and seller support",
  url: `${SITE_URL}/`,
  provider: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "eRomman Technologies Sdn Bhd",
  },
  areaServed: [
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Kuwait" },
    { "@type": "Country", name: "Qatar" },
    { "@type": "Country", name: "Bahrain" },
    { "@type": "Country", name: "Oman" },
  ],
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Malaysian brands and sellers exploring GCC e-commerce expansion",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need to move stock to the Middle East?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Sellers can keep stock in Malaysia while testing the market, subject to the agreed fulfilment arrangement.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to list every product?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Starting with a smaller group of suitable SKUs is usually more practical for market validation.",
      },
    },
    {
      "@type": "Question",
      name: "Can eRomman guarantee Amazon or Noon approval?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Third-party marketplace listing depends on product eligibility, documentation, category rules and platform approval.",
      },
    },
    {
      "@type": "Question",
      name: "What about supplements, health or beauty products?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "These categories can have strong potential, but market-specific regulatory and marketplace documentation must be checked before submission.",
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
      <GccMarketEntryGuide lang="en" />
      <ViewingExperienceNotice lang="en" />
      <WeeklySellerBriefing lang="en" />
    </>
  )
}
