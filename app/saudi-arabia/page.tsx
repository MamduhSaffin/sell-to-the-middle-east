import type { Metadata } from "next"
import { TgpuServiceLanding } from "@/components/tgpu-service-landing"
import { SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "Saudi Arabia Market Entry from Malaysia",
  description:
    "TGPU Gulf Advisory supports Malaysian companies exploring Saudi Arabia with market-entry planning, distributor/importer search, documentation coordination and commercial follow-up.",
  keywords: [
    "Saudi market entry Malaysia",
    "sell to Saudi Arabia from Malaysia",
    "Saudi distributor search Malaysia",
    "Saudi importer for Malaysian products",
    "Malaysia Saudi trade consultant",
  ],
  alternates: { canonical: `${SITE_URL}/saudi-arabia/` },
  openGraph: {
    title: "Saudi Arabia Market Entry from Malaysia | TGPU Gulf Advisory",
    description: "Practical Saudi market-entry and commercial coordination for Malaysian businesses.",
    url: `${SITE_URL}/saudi-arabia/`,
  },
}

export default function Page() {
  return (
    <TgpuServiceLanding
      eyebrow="Saudi Arabia market entry"
      title="A structured route from Malaysia into the Saudi market"
      intro="Saudi Arabia can offer meaningful commercial opportunities, but the correct route depends on the product, target customer, importer/distributor model, documentation and applicable regulatory requirements. TGPU Gulf Advisory helps companies structure those questions before major commitments are made."
      audienceTitle="Malaysian manufacturers, brands and exporters"
      audienceBody="Suitable for businesses that want to evaluate Saudi Arabia, identify the right local counterpart, understand documentation gaps, prepare commercial materials or coordinate a real buyer/distributor discussion."
      supportTitle="Typical Saudi market-entry support"
      support={[
        "Preliminary product and market-entry assessment based on the actual category and commercial objective.",
        "Saudi importer, distributor or commercial-partner search where appropriate.",
        "Documentation gap review and coordination of the likely regulatory pathway with qualified local parties.",
        "Arabic-ready commercial information, enquiry packs, specifications and RFQ coordination.",
        "Cross-border follow-up between the Malaysian company and Saudi counterpart through the commercial process.",
      ]}
      note="TGPU Gulf Advisory does not guarantee SFDA, SABER, customs, marketplace or other regulatory approvals. Formal approvals remain subject to the relevant authorities and qualified local entities."
      whatsappText="Hello TGPU Gulf Advisory, I would like to discuss Saudi Arabia market entry for a Malaysian business/product."
    />
  )
}
