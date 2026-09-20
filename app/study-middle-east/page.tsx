import type { Metadata } from "next"
import { StudyMiddleEastPage } from "@/components/study-middle-east-page"
import { SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "Study in the Middle East | Scholarships & Official University Links",
  description: "Verified official links for Middle East study opportunities, admissions and scholarships across Saudi Arabia, UAE, Qatar, Oman, Bahrain and Kuwait.",
  alternates: {
    canonical: `${SITE_URL}/study-middle-east/`,
    languages: {
      "en-MY": `${SITE_URL}/study-middle-east/`,
      "ms-MY": `${SITE_URL}/bm/study-middle-east/`,
      ar: `${SITE_URL}/ar/study-middle-east/`,
    },
  },
}

export default function Page() {
  return <StudyMiddleEastPage lang="en" />
}
