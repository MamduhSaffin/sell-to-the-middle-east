import type { Metadata } from "next"
import { ArrowLeft, ExternalLink, Flag, Landmark, ShieldCheck } from "lucide-react"

const title = "Malaysia Export Desk | GCC Market Entry"
const description = "Official Malaysian starting points for businesses preparing to export or internationalise into Saudi Arabia, the UAE and wider GCC markets."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://gccmarketentry.me/malaysia-export-desk/" },
  openGraph: { title, description, url: "https://gccmarketentry.me/malaysia-export-desk/" },
}

const resources = [
  {
    name: "MATRADE",
    icon: Flag,
    url: "https://www.matrade.gov.my/en/export-to-the-world",
    role: "Malaysia's national trade-promotion starting point for businesses looking at export markets, market intelligence and internationalisation resources.",
    use: ["Export and market information", "Trade-promotion resources", "International market exploration", "Current programmes and events where applicable"],
  },
  {
    name: "SME Corp. Malaysia",
    icon: Landmark,
    url: "https://smecorp.gov.my/index.php/en/",
    role: "Central Malaysian reference point for SME development information, business advisory services and coordinated SME programmes.",
    use: ["Business advisory information", "SME development programmes", "Market-access initiatives", "Capability and competitiveness resources"],
  },
  {
    name: "Halal Malaysia / JAKIM",
    icon: ShieldCheck,
    url: "https://www.halal.gov.my/",
    role: "Official Malaysian halal portal for businesses that need to understand Malaysian halal certification and related information before presenting halal credentials abroad.",
    use: ["Official halal information", "Certification-related references", "Halal status verification", "Preparation before overseas halal discussions"],
  },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-[#fbfaf4] text-[#14261e]">
      <header className="border-b border-emerald-950/10 bg-white"><div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8"><a href="/" className="inline-flex items-center gap-2 text-sm font-black text-[#123b2c]"><ArrowLeft className="h-4 w-4" /> GCC Market Entry</a><span className="text-xs font-bold text-[#78847c]">Malaysia 🇲🇾 → GCC</span></div></header>
      <main>
        <section className="bg-[#123b2c] py-16 text-white lg:py-20"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><p className="text-xs font-black uppercase tracking-[0.18em] text-[#e5c985]">MALAYSIA EXPORT DESK</p><h1 className="mt-3 max-w-4xl font-serif text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">Use Malaysia's official support ecosystem before going abroad.</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">Before paying an overseas intermediary, check what support, market information and official guidance is already available from Malaysian institutions. Eligibility for any programme can change, so use the official websites for current terms.</p></div></section>

        <section className="py-16 lg:py-20"><div className="mx-auto max-w-6xl space-y-5 px-4 sm:px-6 lg:px-8">{resources.map((resource) => { const Icon = resource.icon; return <article key={resource.name} className="grid gap-6 rounded-[1.7rem] border border-emerald-950/10 bg-white p-6 shadow-[0_14px_40px_rgba(18,59,44,0.05)] md:grid-cols-[1fr_1.2fr] md:p-8"><div><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#eef4ef] text-[#123b2c]"><Icon className="h-5 w-5" /></span><h2 className="mt-5 font-serif text-3xl font-bold text-[#123b2c]">{resource.name}</h2><p className="mt-3 leading-7 text-[#657168]">{resource.role}</p><a href={resource.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#123b2c] px-5 py-3 text-sm font-black text-white">Open official site <ExternalLink className="h-4 w-4" /></a></div><div className="rounded-2xl bg-[#f6f5ee] p-6"><h3 className="text-sm font-black uppercase tracking-[0.12em] text-[#9a742f]">Useful starting points</h3><ul className="mt-4 grid gap-3 text-sm leading-6 text-[#526159]">{resource.use.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#9a742f]" />{item}</li>)}</ul></div></article> })}</div></section>

        <section className="border-y border-emerald-950/10 bg-[#f1f4ed] py-14"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><h2 className="font-serif text-3xl font-bold text-[#123b2c]">A practical order of work</h2><div className="mt-7 grid gap-4 md:grid-cols-4">{["1. Confirm export readiness", "2. Research target market", "3. Verify product requirements", "4. Choose commercial route"].map((item) => <div key={item} className="rounded-2xl border border-emerald-950/10 bg-white p-5 text-sm font-black text-[#123b2c]">{item}</div>)}</div><p className="mt-6 leading-7 text-[#657168]">Treat grants, financing, export programmes and market-access schemes as current opportunities to verify — not entitlements. Programme scope, application windows and eligibility may change.</p></div></section>
      </main>
    </div>
  )
}
