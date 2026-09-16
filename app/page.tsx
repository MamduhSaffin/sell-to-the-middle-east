import type { Metadata } from "next"
import { TgpuGulfHome } from "@/components/tgpu-gulf-home"
import { SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "TGPU Gulf Advisory | Malaysia–Saudi & GCC Market Entry",
  description:
    "TGPU Gulf Advisory supports Malaysia–Saudi Arabia and GCC market entry, trade facilitation, supplier and buyer sourcing, documentation readiness and cross-border commercial coordination.",
  alternates: {
    canonical: `${SITE_URL}/`,
    languages: {
      "en-MY": `${SITE_URL}/`,
      "ms-MY": `${SITE_URL}/bm/`,
      "ar-SA": `${SITE_URL}/ar/`,
      "x-default": `${SITE_URL}/`,
    },
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Malaysia–Saudi Arabia & GCC Market Entry and Trade Advisory",
  serviceType: "Market entry advisory, trade facilitation, sourcing and commercial coordination",
  url: `${SITE_URL}/`,
  provider: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "TGPU Gulf Advisory",
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
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Businesses exploring Malaysia, Saudi Arabia and GCC cross-border opportunities",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does TGPU Gulf Advisory do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TGPU Gulf Advisory supports market-entry planning, trade facilitation, supplier and buyer sourcing, documentation coordination, commercial introductions and cross-border project follow-up between Malaysia and GCC markets.",
      },
    },
    {
      "@type": "Question",
      name: "Can TGPU Gulf Advisory guarantee regulatory approval?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Regulatory approval and customs decisions remain with the relevant authorities and licensed parties. TGPU Gulf Advisory helps identify the likely pathway, prepare information and coordinate the appropriate parties.",
      },
    },
    {
      "@type": "Question",
      name: "Do you help Saudi and GCC companies source products from Malaysia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. TGPU Gulf Advisory can support Malaysia-side supplier sourcing, preliminary engagement, specifications, quotation coordination and commercial introductions for suitable opportunities.",
      },
    },
    {
      "@type": "Question",
      name: "How do I start a discussion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Share your company, country, product or requirement and what you are looking for. TGPU Gulf Advisory can review the opportunity and identify a sensible next step.",
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
      <TgpuGulfHome lang="en" />
    </>
  )
}
