import type { Metadata } from "next"
import { GccMarketEntryGuide } from "@/components/gcc-market-entry-guide"
import { SoftEntryEnhancement } from "@/components/soft-entry-enhancement"
import { ViewingExperienceNotice } from "@/components/viewing-experience-notice"

export const metadata: Metadata = {
  title: "GCC Market Entry | Free Guide for Malaysian Businesses",
  description: "A free independent guide for Malaysian businesses exploring Saudi Arabia, the UAE and wider GCC markets through official sources, practical guides and planning tools.",
  alternates: { canonical: "https://gccmarketentry.me/" },
  robots: { index: false, follow: true },
}

export default function Page() {
  return (
    <>
<GccMarketEntryGuide lang="en" />
      <SoftEntryEnhancement lang="en" />
      <ViewingExperienceNotice lang="en" />
    </>
  )
}
