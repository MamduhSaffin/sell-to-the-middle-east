import { GccMarketEntryGuide } from "@/components/gcc-market-entry-guide"
import { ViewingExperienceNotice } from "@/components/viewing-experience-notice"
import { WeeklySellerBriefing } from "@/components/weekly-seller-briefing"

export default function Page() {
  return (
    <>
      <GccMarketEntryGuide lang="en" />
      <ViewingExperienceNotice lang="en" />
      <WeeklySellerBriefing lang="en" />
    </>
  )
}
