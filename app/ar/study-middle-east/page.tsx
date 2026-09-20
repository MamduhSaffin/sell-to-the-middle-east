import type { Metadata } from "next"
import { StudyMiddleEastPage } from "@/components/study-middle-east-page"
import { SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "الدراسة في الشرق الأوسط | منح وروابط جامعات رسمية",
  description: "روابط رسمية موثقة للدراسة والقبول والمنح في السعودية والإمارات وقطر وعمان والبحرين والكويت.",
  alternates: {
    canonical: `${SITE_URL}/ar/study-middle-east/`,
    languages: {
      "en-MY": `${SITE_URL}/study-middle-east/`,
      "ms-MY": `${SITE_URL}/bm/study-middle-east/`,
      ar: `${SITE_URL}/ar/study-middle-east/`,
    },
  },
}

export default function Page() {
  return <StudyMiddleEastPage lang="ar" />
}
