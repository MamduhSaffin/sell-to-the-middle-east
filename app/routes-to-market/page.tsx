import type { Metadata } from "next"
import { ArrowLeft, ArrowRight, Building2, Landmark, Network, Route, Scale, Store } from "lucide-react"

const title = "GCC Routes to Market for Malaysian Businesses"
const description = "Compare marketplace, importer-distributor, direct B2B, retail, local-entity and strategic-partner routes for Malaysian businesses exploring GCC markets."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://gccmarketentry.me/routes-to-market/" },
  openGraph: { title: `${title} | GCC Market Entry`, description, url: "https://gccmarketentry.me/routes-to-market/" },
}

const routes = [
  {
    icon: Store,
    title: "Marketplace",
    useful: "Useful when eligible products can be sold through an established digital channel and the seller can meet platform, tax, fulfilment and category requirements.",
    questions: ["Who is the seller of record?", "Who imports the goods?", "What product approvals apply?", "How will fulfilment, returns and VAT be handled?"],
  },
  {
    icon: Network,
    title: "Importer / Distributor",
    useful: "Useful when a local partner can take responsibility for import, channel development, local sales relationships or distribution under a clear commercial agreement.",
    questions: ["Exclusive or non-exclusive?", "Who owns registrations and customer data?", "Minimum orders and territory?", "What are payment, stock and termination terms?"],
  },
  {
    icon: Building2,
    title: "Direct B2B / Wholesale",
    useful: "Useful when the first target is a retailer, wholesaler, institutional buyer, project customer or corporate procurement channel rather than individual consumers.",
    questions: ["Incoterms and delivery point?", "Buyer due diligence?", "Payment method and credit terms?", "Who manages import and compliance?"],
  },
  {
    icon: Landmark,
    title: "Retail Partnership",
    useful: "Useful for products where physical visibility, local merchandising, demonstrations, pharmacy placement or specialist retail channels matter.",
    questions: ["Listing or shelf fees?", "Margin and promotions?", "Stock ownership and returns?", "Local marketing responsibilities?"],
  },
  {
    icon: Scale,
    title: "Local Entity",
    useful: "A deeper long-term route where the commercial case justifies local incorporation, banking, tax, employment, contracting and operating responsibilities.",
    questions: ["Why is local presence commercially necessary?", "What licensing activity is required?", "Tax and accounting obligations?", "Who will manage local operations?"],
  },
  {
    icon: Route,
    title: "Licensing / Strategic Partner",
    useful: "Useful where local manufacturing, brand licensing, technology, distribution rights or a joint commercial model is more valuable than direct selling alone.",
    questions: ["Scope of rights and territory?", "IP protection?", "Quality-control obligations?", "Royalty, revenue-share and exit terms?"],
  },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-[#fbfaf4] text-[#14261e]">
      <header className="border-b border-emerald-950/10 bg-white"><div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8"><a href="/" className="inline-flex items-center gap-2 text-sm font-black text-[#123b2c]"><ArrowLeft className="h-4 w-4" /> GCC Market Entry</a></div></header>
      <main>
        <section className="bg-[#123b2c] py-16 text-white lg:py-20"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><p className="text-xs font-black uppercase tracking-[0.18em] text-[#e5c985]">ROUTES TO MARKET</p><h1 className="mt-3 max-w-4xl font-serif text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">Choose the commercial route before choosing the platform.</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">There is no single GCC entry model that fits every business. The practical route depends on product regulation, target customers, volume, control, investment level and who will take responsibility for import, compliance and fulfilment.</p></div></section>

        <section className="py-16 lg:py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{routes.map((item) => { const Icon = item.icon; return <article key={item.title} className="rounded-[1.6rem] border border-emerald-950/10 bg-white p-6 shadow-[0_14px_40px_rgba(18,59,44,0.05)]"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#eef4ef] text-[#123b2c]"><Icon className="h-5 w-5" /></span><h2 className="mt-5 text-xl font-black text-[#123b2c]">{item.title}</h2><p className="mt-3 text-sm leading-6 text-[#657168]">{item.useful}</p><h3 className="mt-6 text-xs font-black uppercase tracking-[0.12em] text-[#9a742f]">Questions to clarify</h3><ul className="mt-3 space-y-2 text-sm leading-6 text-[#526159]">{item.questions.map((q) => <li key={q} className="flex gap-2"><ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-[#9a742f]" />{q}</li>)}</ul></article> })}</div></div></section>

        <section className="border-y border-emerald-950/10 bg-[#f1f4ed] py-14"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><h2 className="font-serif text-3xl font-bold text-[#123b2c]">Do not confuse channel access with market access.</h2><p className="mt-4 leading-7 text-[#657168]">Being able to create a marketplace account does not automatically settle product registration, customs, importer, tax, labelling, fulfilment or consumer-protection responsibilities. Likewise, having a distributor does not remove the need to understand who owns registrations, stock, data and commercial rights. Document the responsibilities before committing.</p><div className="mt-7 flex flex-wrap gap-3"><a href="/official-sources/" className="rounded-full bg-[#123b2c] px-5 py-3 text-sm font-black text-white">Verify official sources</a><a href="/cost-planner/" className="rounded-full border border-emerald-950/15 bg-white px-5 py-3 text-sm font-black text-[#123b2c]">Build a cost plan</a></div></div></section>
      </main>
    </div>
  )
}
