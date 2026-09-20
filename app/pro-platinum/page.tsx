import type { Metadata } from "next"
import { ArrowLeft, BookOpenCheck, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Legacy Package Page Retired | GCC Market Entry",
  description: "This legacy commercial package page has been retired. GCC Market Entry is now a free independent educational resource.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://gccmarketentry.me/" },
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#fbfaf4] text-[#14261e]">
      <header className="border-b border-emerald-950/10 bg-white"><div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:px-8"><a href="/" className="inline-flex items-center gap-2 text-sm font-black text-[#123b2c]"><ArrowLeft className="h-4 w-4" /> GCC Market Entry</a></div></header>
      <main className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#123b2c] text-white"><BookOpenCheck className="h-7 w-7" /></div>
        <p className="mt-7 text-xs font-black uppercase tracking-[0.18em] text-[#9a742f]">LEGACY PAGE RETIRED</p>
        <h1 className="mt-3 font-serif text-4xl font-bold tracking-[-0.04em] text-[#123b2c] sm:text-5xl">GCC Market Entry no longer promotes membership packages.</h1>
        <p className="mt-6 text-lg leading-8 text-[#657168]">This page belonged to an earlier version of the website. The project has been repositioned as a free and independent GCC market-entry knowledge resource for Malaysian businesses.</p>
        <div className="mt-9 rounded-[1.7rem] border border-emerald-950/10 bg-white p-7 shadow-[0_14px_40px_rgba(18,59,44,0.05)]"><div className="flex gap-3"><ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[#9a742f]" /><div><h2 className="font-black text-[#123b2c]">What to use instead</h2><p className="mt-2 leading-7 text-[#657168]">Start with the free roadmap, country guides, official-source library, routes-to-market guide and cost planner. If you later choose any commercial provider, compare scope, responsibilities, evidence and terms independently before paying.</p></div></div></div>
        <div className="mt-8 flex flex-wrap gap-3"><a href="/" className="rounded-full bg-[#123b2c] px-5 py-3 text-sm font-black text-white">Open GCC Market Entry</a><a href="/official-sources/" className="rounded-full border border-emerald-950/15 bg-white px-5 py-3 text-sm font-black text-[#123b2c]">Official Sources</a><a href="/guides/" className="rounded-full border border-emerald-950/15 bg-white px-5 py-3 text-sm font-black text-[#123b2c]">Free Guides</a></div>
      </main>
    </div>
  )
}
