import type { Metadata } from "next"
import { StudyMiddleEastPage } from "@/components/study-middle-east-page"
import { SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "Belajar di Timur Tengah | Biasiswa & Pautan Universiti Rasmi",
  description: "Pautan rasmi yang disemak untuk pengajian, kemasukan dan biasiswa di Arab Saudi, UAE, Qatar, Oman, Bahrain dan Kuwait.",
  alternates: {
    canonical: `${SITE_URL}/bm/study-middle-east/`,
    languages: {
      "en-MY": `${SITE_URL}/study-middle-east/`,
      "ms-MY": `${SITE_URL}/bm/study-middle-east/`,
      ar: `${SITE_URL}/ar/study-middle-east/`,
    },
  },
}

export default function Page() {
  return <StudyMiddleEastPage lang="bm" />
}
