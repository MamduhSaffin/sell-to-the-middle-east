import type { Metadata } from "next"
import { TgpuGulfHome } from "@/components/tgpu-gulf-home"
import { SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "TGPU Gulf Advisory | Malaysia–Saudi & GCC Market Entry",
  description:
    "Market entry, trade facilitation, supplier and buyer sourcing, documentation readiness and commercial coordination between Malaysia, Saudi Arabia and GCC markets.",
  alternates: { canonical: `${SITE_URL}/` },
  robots: { index: false, follow: true },
}

export default function Page() {
  return <TgpuGulfHome lang="en" />
}
