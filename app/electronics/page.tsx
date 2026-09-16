import type { Metadata } from "next"
import { TgpuServiceLanding } from "@/components/tgpu-service-landing"
import { SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "Electronics & Technical Products GCC Market Entry",
  description:
    "TGPU Gulf Advisory supports Malaysian electronics and technical-product companies exploring Saudi Arabia and GCC markets with product-pathway review, partner search and commercial coordination.",
  keywords: [
    "Malaysia electronics Saudi Arabia",
    "electronics distributor GCC Malaysia",
    "Saudi importer Malaysian electronics",
    "GCC electronics market entry",
    "Malaysia technical products Gulf",
  ],
  alternates: { canonical: `${SITE_URL}/electronics/` },
  openGraph: {
    title: "Electronics & Technical Products GCC Market Entry | TGPU Gulf Advisory",
    description: "Market-entry and commercial coordination for Malaysian electronics and technical products entering GCC markets.",
    url: `${SITE_URL}/electronics/`,
  },
}

export default function Page() {
  return (
    <TgpuServiceLanding
      eyebrow="Electronics & technical products"
      title="Structure the commercial and technical pathway before entering GCC markets"
      intro="Electronics and technical products can require more than a sales listing. Specifications, conformity documents, product compatibility, labelling, importer responsibilities and the target sales channel can all affect the right market-entry route."
      audienceTitle="Malaysian electronics brands, manufacturers and exporters"
      audienceBody="Suitable for companies that need distributor/importer search, commercial assessment, technical-document coordination or a clearer route into Saudi Arabia, the UAE and other GCC markets."
      supportTitle="Typical electronics market-entry support"
      support={[
        "Preliminary review of the product, technical specification and intended GCC market.",
        "Search and engagement with suitable buyers, distributors, importers or commercial partners.",
        "Coordination of documentation questions with appropriate technical or regulatory specialists where needed.",
        "RFQ, quotation, product-specification and commercial-material coordination.",
        "Cross-border follow-up on volume, packaging, logistics, timelines and commercial next steps.",
      ]}
      note="Conformity, safety, wireless, customs and marketplace requirements can differ by product and country. TGPU Gulf Advisory does not issue technical approvals and does not guarantee acceptance by any authority or sales channel."
      whatsappText="Hello TGPU Gulf Advisory, I would like to discuss GCC market entry for an electronics or technical product from Malaysia."
    />
  )
}
