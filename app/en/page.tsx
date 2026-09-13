import type { Metadata } from "next"
import { GccMarketEntryGuide } from "@/components/gcc-market-entry-guide"
import { ViewingExperienceNotice } from "@/components/viewing-experience-notice"
import { WeeklySellerBriefing } from "@/components/weekly-seller-briefing"

export const metadata: Metadata = {
  title: "GCC Market Entry Malaysia | Saudi Arabia & UAE | eRomman",
  description: "A practical GCC market-entry guide for Malaysian brands exploring Saudi Arabia, UAE and the wider Middle East with eRomman.",
  alternates: { canonical: "https://gccmarketentry.me/" },
  robots: { index: false, follow: true },
}

export default function Page() {
  return (
    <>
      <GccMarketEntryGuide lang="en" />
      <ViewingExperienceNotice lang="en" />
      <WeeklySellerBriefing lang="en" />
    </>
  )
}
