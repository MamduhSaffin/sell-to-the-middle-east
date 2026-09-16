import type { Metadata } from "next"
import { TgpuGulfHome } from "@/components/tgpu-gulf-home"
import { SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "TGPU Gulf Advisory | Malaysia–Saudi & GCC Trade Advisory",
  description:
    "TGPU Gulf Advisory membantu syarikat Malaysia dan GCC dengan kemasukan pasaran, fasilitasi perdagangan, pencarian pembekal/pembeli, koordinasi dokumentasi dan pengenalan komersial.",
  alternates: {
    canonical: `${SITE_URL}/bm/`,
    languages: {
      "en-MY": `${SITE_URL}/`,
      "ms-MY": `${SITE_URL}/bm/`,
      "ar-SA": `${SITE_URL}/ar/`,
      "x-default": `${SITE_URL}/`,
    },
  },
}

export default function Page() {
  return <TgpuGulfHome lang="bm" />
}
