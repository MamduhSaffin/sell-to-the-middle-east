import type { Metadata } from "next"
import { TgpuServiceLanding } from "@/components/tgpu-service-landing"
import { SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "Malaysia Supplier Sourcing for Saudi Arabia & GCC",
  description:
    "TGPU Gulf Advisory helps Saudi and GCC companies source Malaysian suppliers, manufacturers and products with Malaysia-side search, engagement, specifications and commercial coordination.",
  keywords: [
    "Malaysia supplier sourcing Saudi Arabia",
    "Malaysian manufacturers GCC",
    "source products from Malaysia Saudi",
    "Malaysia exporter GCC",
    "Malaysia sourcing agent Saudi Arabia",
    "موردين من ماليزيا للسعودية",
    "مصانع ماليزية للتصدير",
    "استيراد من ماليزيا للخليج",
  ],
  alternates: { canonical: `${SITE_URL}/malaysia-sourcing/` },
  openGraph: {
    title: "Malaysia Supplier Sourcing for Saudi Arabia & GCC | TGPU Gulf Advisory",
    description: "Malaysia-side supplier, manufacturer and product sourcing for Saudi and GCC businesses.",
    url: `${SITE_URL}/malaysia-sourcing/`,
  },
}

export default function Page() {
  return (
    <TgpuServiceLanding
      eyebrow="Saudi Arabia / GCC → Malaysia"
      title="Source Malaysian suppliers, manufacturers and products with local coordination"
      intro="For Saudi and GCC companies looking for products, manufacturers or commercial partners in Malaysia, TGPU Gulf Advisory provides Malaysia-side sourcing and coordination — helping turn a requirement into a structured supplier search and commercial discussion."
      audienceTitle="Saudi and GCC importers, distributors and buyers"
      audienceBody="Suitable for businesses with a genuine sourcing requirement, product specification, target category or commercial brief that needs Malaysia-side supplier identification, initial engagement and follow-up."
      supportTitle="Typical Malaysia sourcing support"
      support={[
        "Identify Malaysian manufacturers, suppliers and exporters that fit the stated commercial requirement.",
        "Conduct preliminary engagement to understand product availability, MOQ, specifications and export readiness.",
        "Coordinate requests for quotations, catalogues, technical sheets, samples and supporting commercial documents.",
        "Facilitate communication between the GCC buyer and Malaysian supplier while protecting confidential commercial information.",
        "Support follow-up on packaging, volume, Incoterms, documentation and next-stage commercial discussions.",
      ]}
      note="TGPU Gulf Advisory acts as a sourcing and commercial coordination partner. Supplier qualification, product compliance, import approvals, customs clearance and final contracting remain subject to the parties' own due diligence and applicable regulations."
      whatsappText="Hello TGPU Gulf Advisory, our company is in Saudi/GCC and we are looking to source a product or supplier from Malaysia."
    />
  )
}
