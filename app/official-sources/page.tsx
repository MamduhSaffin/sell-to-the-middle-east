import type { Metadata } from "next"
import { ArrowLeft, ExternalLink, ShieldCheck } from "lucide-react"

const title = "Official Sources for GCC Market Entry"
const description = "A curated official-source directory for Malaysian businesses researching GCC market entry, including Malaysia, Saudi Arabia and UAE government and institutional resources."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://gccmarketentry.me/official-sources/" },
  openGraph: { title: `${title} | GCC Market Entry`, description, url: "https://gccmarketentry.me/official-sources/" },
}

const groups = [
  {
    country: "Malaysia",
    flag: "🇲🇾",
    intro: "Start here for export readiness, Malaysian SME support and halal information.",
    sources: [
      { name: "MATRADE", url: "https://www.matrade.gov.my/en/export-to-the-world", note: "Malaysia External Trade Development Corporation export resources, market information and internationalisation support." },
      { name: "SME Corp. Malaysia", url: "https://smecorp.gov.my/index.php/en/", note: "Central reference point for SME development information, advisory services, market-access initiatives and programmes." },
      { name: "SME Corp. Programmes", url: "https://smecorp.gov.my/index.php/en/all-programmes", note: "Current programme directory, including market-access and export-related initiatives where available." },
      { name: "Halal Malaysia / JAKIM", url: "https://www.halal.gov.my/", note: "Official Malaysian halal portal and certification-related information." },
    ],
  },
  {
    country: "Saudi Arabia",
    flag: "🇸🇦",
    intro: "Use the exact authority relevant to the product. Requirements differ by category and import route.",
    sources: [
      { name: "Saudi Food and Drug Authority (SFDA)", url: "https://sfda.gov.sa/en", note: "Official authority for relevant food, drug, medical-device, cosmetic and related regulated product categories." },
      { name: "SABER", url: "https://saber.sa/?lang=en", note: "Saudi platform associated with product conformity and shipment certification processes under Saudi standards." },
      { name: "ZATCA", url: "https://zatca.gov.sa/en/Pages/default.aspx", note: "Zakat, Tax and Customs Authority — official source for Saudi customs and tax information." },
      { name: "ZATCA Import Instructions", url: "https://zatca.gov.sa/en/RulesRegulations/Taxes/Pages/customs-bussiness/import-pages/Import-Instructions.aspx", note: "Official import instructions covering core documents, product-specific conditions and Fasah clearing procedures." },
      { name: "Fasah", url: "https://fasah.zatca.gov.sa/", note: "Saudi customs digital platform referenced by ZATCA for import and clearance procedures." },
    ],
  },
  {
    country: "United Arab Emirates",
    flag: "🇦🇪",
    intro: "Federal rules can sit alongside emirate-level services, depending on the product and activity.",
    sources: [
      { name: "Ministry of Industry and Advanced Technology (MoIAT)", url: "https://www.moiat.gov.ae/en/", note: "Official UAE source for standards, conformity and industrial regulatory services." },
      { name: "Federal Tax Authority", url: "https://tax.gov.ae/en/", note: "Official source for UAE VAT and federal tax information." },
      { name: "Dubai Municipality Services", url: "https://www.dm.gov.ae/dubai-municipality-services/", note: "Official Dubai Municipality service directory, including consumer-product services such as Montaji where applicable." },
    ],
  },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-[#fbfaf4] text-[#14261e]">
      <header className="border-b border-emerald-950/10 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <a href="/" className="inline-flex items-center gap-2 text-sm font-black text-[#123b2c]"><ArrowLeft className="h-4 w-4" /> GCC Market Entry</a>
          <span className="text-xs font-bold text-[#78847c]">Last checked: 20 September 2026</span>
        </div>
      </header>

      <main>
        <section className="bg-[#123b2c] py-16 text-white lg:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e5c985] text-[#173426]"><ShieldCheck className="h-6 w-6" /></div>
            <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-[#e5c985]">VERIFY BEFORE YOU ACT</p>
            <h1 className="mt-3 max-w-4xl font-serif text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">Official Source Library</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">Use these government and institutional sources as starting points before relying on a consultant, marketplace claim, quotation or social-media advice. Always verify the requirement for your exact product and operating model.</p>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
            {groups.map((group) => (
              <section key={group.country}>
                <div className="flex items-start gap-4">
                  <span className="text-4xl" aria-hidden="true">{group.flag}</span>
                  <div><h2 className="font-serif text-3xl font-bold text-[#123b2c]">{group.country}</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-[#657168]">{group.intro}</p></div>
                </div>
                <div className="mt-7 grid gap-4 md:grid-cols-2">
                  {group.sources.map((source) => (
                    <a key={source.name} href={source.url} target="_blank" rel="noopener noreferrer" className="group rounded-[1.5rem] border border-emerald-950/10 bg-white p-6 shadow-[0_12px_34px_rgba(18,59,44,0.05)] transition hover:-translate-y-1 hover:border-[#c59b4f]/60 hover:shadow-lg">
                      <div className="flex items-center justify-between gap-4"><h3 className="font-black text-[#123b2c] group-hover:text-[#9a742f]">{source.name}</h3><ExternalLink className="h-4 w-4 shrink-0 text-[#9a742f]" /></div>
                      <p className="mt-3 text-sm leading-6 text-[#657168]">{source.note}</p>
                      <span className="mt-5 inline-flex text-xs font-black text-[#123b2c]">Open official website →</span>
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="border-t border-emerald-950/10 bg-[#f1f4ed] py-12">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-black text-[#123b2c]">Important verification note</h2>
            <p className="mt-3 leading-7 text-[#657168]">This directory does not determine whether a product is approved or which exact registration is legally required. Product classification, importer structure, destination, customs treatment and current rules can change the answer. For material compliance decisions, confirm directly with the relevant authority or an appropriately qualified professional.</p>
          </div>
        </section>
      </main>
    </div>
  )
}
