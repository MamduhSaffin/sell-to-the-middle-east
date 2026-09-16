import type { Metadata } from "next"
import { TgpuServiceLanding } from "@/components/tgpu-service-landing"
import { SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "UAE & GCC Market Entry from Malaysia",
  description:
    "TGPU Gulf Advisory supports Malaysian businesses exploring the UAE and wider GCC with market-entry planning, distributor/importer search, documentation coordination and commercial follow-up.",
  keywords: [
    "UAE market entry Malaysia",
    "sell to UAE from Malaysia",
    "UAE distributor Malaysia products",
    "GCC market entry Malaysia",
    "Malaysia GCC trade consultant",
  ],
  alternates: { canonical: `${SITE_URL}/uae/` },
  openGraph: {
    title: "UAE & GCC Market Entry from Malaysia | TGPU Gulf Advisory",
    description: "Practical UAE and GCC market-entry coordination for Malaysian businesses.",
    url: `${SITE_URL}/uae/`,
  },
}

export default function Page() {
  return (
    <TgpuServiceLanding
      eyebrow="UAE & GCC market entry"
      title="Build a practical route from Malaysia into the UAE and wider GCC"
      intro="The UAE can be a useful gateway into the Gulf, but the best entry structure depends on product category, importer/distributor arrangements, commercial economics, documentation and the target sales channel. TGPU Gulf Advisory helps companies organise those decisions before they commit significant inventory or budget."
      audienceTitle="Malaysian businesses exploring the UAE and GCC"
      audienceBody="Suitable for manufacturers, brands and exporters that need a clearer market-entry route, commercial counterpart search, documentation coordination or structured follow-up with potential GCC partners."
      supportTitle="Typical UAE & GCC support"
      support={[
        "Preliminary market and product-pathway review based on the target category and channel.",
        "Search and engagement with potential importers, distributors, buyers or commercial partners.",
        "Documentation readiness review and coordination with appropriate qualified parties where formal submissions are required.",
        "Commercial enquiry packs, product specifications, quotation support and bilingual-ready materials.",
        "Cross-border communication and follow-up between Malaysian and GCC stakeholders.",
      ]}
      note="Marketplace, customs and regulatory requirements differ by country and product category. TGPU Gulf Advisory coordinates the process but does not guarantee third-party approval or commercial acceptance."
      whatsappText="Hello TGPU Gulf Advisory, I would like to discuss UAE/GCC market entry for a Malaysian business or product."
    />
  )
}
