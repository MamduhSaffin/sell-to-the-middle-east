import type { Metadata } from "next"
import { TgpuServiceLanding } from "@/components/tgpu-service-landing"

export const metadata: Metadata = {
  title: "Business Advisory Services",
  description: "Current TGPU Gulf Advisory services for Malaysia–Saudi Arabia and GCC market entry, sourcing and trade facilitation.",
  robots: { index: false, follow: true },
}

export default function Page() {
  return (
    <TgpuServiceLanding
      eyebrow="TGPU Gulf Advisory services"
      title="This page now reflects our current independent advisory services"
      intro="TGPU Gulf Advisory is an independent Malaysia-based business focused on market-entry advisory, trade facilitation, sourcing, documentation coordination and commercial introductions between Malaysia, Saudi Arabia and GCC markets."
      audienceTitle="Companies with a real cross-border requirement"
      audienceBody="We work opportunity-by-opportunity rather than through a fixed marketplace package. The starting point is the product, market, buyer/supplier requirement, documentation position and commercial objective."
      supportTitle="Current areas of support"
      support={[
        "Saudi Arabia and GCC market-entry planning for Malaysian businesses.",
        "Malaysia-side supplier and manufacturer sourcing for Saudi/GCC companies.",
        "Buyer, distributor and importer search for suitable commercial opportunities.",
        "Regulatory-pathway and documentation coordination with qualified parties.",
        "RFQ, specifications, commercial introductions and cross-border project follow-up.",
      ]}
      note="TGPU Gulf Advisory does not represent or sell any former employer package through this website. All current enquiries are handled independently under TGPU Gulf Advisory."
      whatsappText="Hello TGPU Gulf Advisory, I would like to discuss your current Malaysia–Saudi/GCC advisory services."
    />
  )
}
