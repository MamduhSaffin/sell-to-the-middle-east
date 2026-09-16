import type { Metadata } from "next"
import { TgpuServiceLanding } from "@/components/tgpu-service-landing"
import { SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "Beauty, Wellness & Supplement GCC Market Entry",
  description:
    "TGPU Gulf Advisory supports Malaysian beauty, wellness and supplement brands exploring Saudi Arabia and GCC markets with documentation readiness, partner search and regulatory-pathway coordination.",
  keywords: [
    "Malaysia beauty brand Saudi Arabia",
    "supplement market entry Saudi Arabia Malaysia",
    "GCC wellness distributor Malaysia",
    "Saudi distributor Malaysian supplements",
    "UAE beauty importer Malaysia",
  ],
  alternates: { canonical: `${SITE_URL}/beauty-wellness/` },
  openGraph: {
    title: "Beauty, Wellness & Supplement GCC Market Entry | TGPU Gulf Advisory",
    description: "Practical market-entry and documentation coordination for Malaysian beauty, wellness and supplement brands.",
    url: `${SITE_URL}/beauty-wellness/`,
  },
}

export default function Page() {
  return (
    <TgpuServiceLanding
      eyebrow="Beauty, wellness & supplements"
      title="Prepare regulated consumer products for a realistic GCC market-entry pathway"
      intro="Beauty, wellness and supplement products can have strong commercial potential in Saudi Arabia and the wider GCC, but the route is documentation-sensitive. Product classification, ingredients, claims, labels, certificates and the local importer or distributor structure can all affect what is possible."
      audienceTitle="Malaysian brands and manufacturers in regulated consumer categories"
      audienceBody="Suitable for beauty, personal-care, wellness, supplement and health-adjacent businesses that want to understand their documentation position, identify a local commercial partner or organise a structured route into Saudi/GCC markets."
      supportTitle="Typical category support"
      support={[
        "Preliminary review of the product, claims, available certificates and commercial target market.",
        "Documentation-gap mapping before approaching importers, distributors or marketplace channels.",
        "Search and engagement with suitable Saudi/GCC commercial counterparts where appropriate.",
        "Coordination with qualified regulatory specialists or local entities for formal submissions when required.",
        "Arabic-ready commercial information, product specifications and cross-border project follow-up.",
      ]}
      note="TGPU Gulf Advisory is not a regulator and does not issue or guarantee SFDA, UAE authority, Halal, marketplace or customs approvals. Products should not be marketed as approved until the relevant formal requirements have actually been completed."
      whatsappText="Hello TGPU Gulf Advisory, I would like to discuss GCC market entry for a beauty, wellness or supplement product from Malaysia."
    />
  )
}
