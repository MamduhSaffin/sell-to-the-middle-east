import type { Metadata } from "next"
import { ArrowLeft, AlertTriangle } from "lucide-react"
import { CostPlannerTool } from "@/components/cost-planner-tool"

const title = "Free GCC Market Entry Cost Planner"
const description = "Build a transparent GCC market-entry cost estimate using your own verified quotations for compliance, freight, customs, fulfilment, localisation and marketing."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://gccmarketentry.me/cost-planner/" },
  openGraph: { title: `${title} | GCC Market Entry`, description, url: "https://gccmarketentry.me/cost-planner/" },
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#fbfaf4] text-[#14261e]">
      <header className="border-b border-emerald-950/10 bg-white"><div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8"><a href="/" className="inline-flex items-center gap-2 text-sm font-black text-[#123b2c]"><ArrowLeft className="h-4 w-4" /> GCC Market Entry</a></div></header>
      <main>
        <section className="bg-[#123b2c] py-16 text-white lg:py-20"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><p className="text-xs font-black uppercase tracking-[0.18em] text-[#e5c985]">FREE PLANNING TOOL</p><h1 className="mt-3 max-w-4xl font-serif text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">Build your own GCC cost estimate.</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">No invented package prices. Enter your own verified quotations or research assumptions so you can see the full cost picture before deciding whether a market-entry plan makes commercial sense.</p></div></section>
        <section className="py-16 lg:py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><CostPlannerTool /></div></section>
        <section className="border-y border-amber-900/10 bg-[#f7f0dc] py-12"><div className="mx-auto flex max-w-5xl gap-4 px-4 sm:px-6 lg:px-8"><AlertTriangle className="mt-1 h-6 w-6 shrink-0 text-[#8a6b2d]" /><div><h2 className="text-lg font-black text-[#5e481e]">Planning estimate only</h2><p className="mt-2 leading-7 text-[#6f634a]">This calculator does not quote government fees, duties, VAT, marketplace fees or professional services. Requirements and rates can change. Verify actual costs with the relevant authority, platform, logistics provider, customs professional or other responsible provider for the exact product and route.</p></div></div></section>
      </main>
    </div>
  )
}
