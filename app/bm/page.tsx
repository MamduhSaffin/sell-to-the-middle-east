import type { Metadata } from "next"
import { GccMarketEntryGuide } from "@/components/gcc-market-entry-guide"
import { SoftEntryEnhancement } from "@/components/soft-entry-enhancement"
import { ViewingExperienceNotice } from "@/components/viewing-experience-notice"

export const metadata: Metadata = {
  title: "GCC Market Entry | Panduan Percuma untuk Perniagaan Malaysia",
  description: "Panduan bebas dan percuma untuk perniagaan Malaysia yang meneroka Arab Saudi, UAE dan pasaran GCC melalui sumber rasmi, panduan praktikal dan alat perancangan.",
  alternates: { canonical: "https://gccmarketentry.me/bm/" },
}

export default function Page() {
  return (
    <>
<GccMarketEntryGuide lang="bm" />
      <SoftEntryEnhancement lang="bm" />
      <ViewingExperienceNotice lang="bm" />
    </>
  )
}
