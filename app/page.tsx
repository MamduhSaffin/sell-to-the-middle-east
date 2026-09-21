import type { Metadata } from "next"
import { ApprovedHeroBanner } from "@/components/approved-hero-banner"
import { GccMarketEntryGuide } from "@/components/gcc-market-entry-guide"
import { JobsHighlight } from "@/components/jobs-highlight"
import { StudyHighlight } from "@/components/study-highlight"
import { ViewingExperienceNotice } from "@/components/viewing-experience-notice"
import { SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "GCC Market Entry | Free Guide for Malaysian Businesses",
  description:
    "A free, independent GCC market-entry resource for Malaysian businesses exploring Saudi Arabia, the UAE and the wider Gulf through official sources, practical guides and planning tools.",
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

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "GCC Market Entry",
  url: `${SITE_URL}/`,
  description:
    "Independent educational resources for Malaysian businesses researching Saudi Arabia, the UAE and wider GCC market-entry pathways.",
  inLanguage: ["en-MY", "ms-MY", "ar"],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is GCC Market Entry a marketplace or government authority?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. GCC Market Entry is an independent educational resource. Regulatory, tax, customs and marketplace requirements should be verified with the relevant official authority or platform.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to launch my full product catalogue?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily. A smaller group of suitable products can make early market research and controlled testing easier to manage.",
      },
    },
    {
      "@type": "Question",
      name: "Does this website guarantee Amazon, Noon or regulatory approval?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Eligibility and approval depend on the exact product, seller structure, documentation, category rules and the current requirements of the relevant platform or authority.",
      },
    },
    {
      "@type": "Question",
      name: "Are the tools and guides free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The learning resources, planning tools and official-source directory on GCC Market Entry are provided free to use.",
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
      <ApprovedHeroBanner />
      <GccMarketEntryGuide lang="en" />
      <JobsHighlight lang="en" />
      <StudyHighlight lang="en" />
      <ViewingExperienceNotice lang="en" />
    </>
  )
}
