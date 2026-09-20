import type { Metadata } from "next"
import { GccMarketEntryGuide } from "@/components/gcc-market-entry-guide"
import { JobsHighlight } from "@/components/jobs-highlight"
import { StudyHighlight } from "@/components/study-highlight"
import { ViewingExperienceNotice } from "@/components/viewing-experience-notice"

export const metadata: Metadata = {
  title: "GCC Market Entry | دليل مجاني للشركات الماليزية",
  description: "دليل مجاني ومستقل للشركات الماليزية التي تستكشف السعودية والإمارات وأسواق الخليج، مع مصادر رسمية وأدلة عملية وأدوات للتخطيط.",
  alternates: { canonical: "https://gccmarketentry.me/ar/" },
}

export default function Page() {
  return (
    <>
      <GccMarketEntryGuide lang="ar" />
      <JobsHighlight lang="ar" />
      <StudyHighlight lang="ar" />
      <ViewingExperienceNotice lang="ar" />
    </>
  )
}
