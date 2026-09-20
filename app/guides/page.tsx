import type { Metadata } from "next"
import { SeoLandingPage } from "@/components/seo-landing-page"

const title = "GCC Market Entry Guides for Malaysian Businesses"
const description = "Free independent guides for Malaysian businesses exploring Saudi Arabia, the UAE and wider GCC: readiness, localisation, market testing and official-source verification."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://gccmarketentry.me/guides/" },
  openGraph: { title: `${title} | GCC Market Entry`, description, url: "https://gccmarketentry.me/guides/" },
}

export default function Page() {
  return <SeoLandingPage
    eyebrow="Free practical resources"
    title="GCC market-entry guides built around the questions businesses actually face"
    intro="Use these guides before committing inventory, documentation work, registration fees or marketing budget. The goal is to make the first GCC decision more focused and reduce avoidable friction by separating verified requirements from assumptions."
    highlights={[
      "Check readiness before paying for expansion activity.",
      "Use market-specific and category-specific preparation instead of generic export advice.",
      "Separate marketplace opportunity from guaranteed approval.",
      "Verify material requirements with the relevant official authority or platform.",
    ]}
    sections={[
      { title: "GCC Market Entry Checklist for Malaysian Brands", paragraphs: ["A structured pre-launch checklist covering product fit, pricing, documents, localisation, listing assets, route-to-market choices and operational readiness."], bullets: ["Product selection", "Pricing and margin", "Documentation", "Operational readiness"] },
      { title: "Arabic Localisation for GCC E-commerce", paragraphs: ["A practical guide to preparing titles, descriptions, benefits, specifications and product instructions for Arabic-speaking customers while keeping the content accurate."], bullets: ["Arabic-ready content", "Claims discipline", "Search visibility", "Customer clarity"] },
      { title: "How to Test GCC Demand Before Scaling", paragraphs: ["A test-first framework for Malaysian businesses that want to learn from real market response before sending larger inventory or expanding the full catalogue."], bullets: ["Selected products", "Demand signals", "Operational learning", "Evidence-based scaling"] },
    ]}
    faqs={[
      { question: "Are these guides official marketplace or government rules?", answer: "No. They are independent preparation resources. Marketplace, customs, tax and authority requirements should always be confirmed for the exact product and target market using current official sources." },
      { question: "Can I use these guides before hiring an adviser or service provider?", answer: "Yes. That is one of their main purposes. Use the free resources first so you understand your product, market and verification questions before paying anyone." },
      { question: "Which guide should I start with?", answer: "Start with the GCC Market Entry Checklist, then use the localisation, country or market-testing guide that matches your biggest preparation gap." },
      { question: "Where should I verify regulatory information?", answer: "Use the GCC Market Entry Official Source Library for direct links to relevant Malaysian, Saudi and UAE government and institutional sources, then confirm the current requirement for your exact product." },
    ]}
    canonicalPath="/guides/"
    breadcrumbLabel="Guides"
    related={[
      { href: "/guides/gcc-market-entry-checklist-malaysian-brands/", label: "GCC market-entry checklist", description: "Prepare products, documents, pricing and operations before launch." },
      { href: "/official-sources/", label: "Official source library", description: "Verify current requirements with government and institutional sources." },
      { href: "/routes-to-market/", label: "Routes to market", description: "Compare marketplace, importer, distributor, B2B and retail pathways." },
    ]}
    ctaTitle="Turn the guide into a verified market-entry research plan."
    ctaBody="Use the official-source library, country guides and cost planner to build a clear list of what you know, what still needs verification and what evidence you need before committing."
  />
}
