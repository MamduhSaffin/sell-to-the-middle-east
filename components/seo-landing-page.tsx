import { ArrowRight, CheckCircle2, ExternalLink, Globe2, ShieldCheck } from "lucide-react"
import { SITE_BASE_PATH, SITE_URL } from "@/lib/site"
import { GccBrandLogo } from "@/components/gcc-brand-logo"

type Section = {
  title: string
  paragraphs?: string[]
  bullets?: string[]
}

type Faq = { question: string; answer: string }
type RelatedLink = { href: string; label: string; description: string }
type BreadcrumbParent = { label: string; href: string }

export type SeoLandingPageProps = {
  eyebrow: string
  title: string
  intro: string
  highlights: string[]
  sections: Section[]
  faqs: Faq[]
  canonicalPath: string
  breadcrumbLabel: string
  breadcrumbParent?: BreadcrumbParent
  related: RelatedLink[]
  ctaTitle?: string
  ctaBody?: string
  whatsappPrompt?: string
}

const jsonLd = (value: unknown) => ({ __html: JSON.stringify(value).replace(/</g, "\\u003c") })
const localPath = (value: string) => `${SITE_BASE_PATH}${value}`

export function SeoLandingPage({
  eyebrow,
  title,
  intro,
  highlights,
  sections,
  faqs,
  canonicalPath,
  breadcrumbLabel,
  breadcrumbParent,
  related,
  ctaTitle = "Need to turn the research into a commercial plan?",
  ctaBody = "Use GCC Market Entry to understand the pathway first. If you later need human support with market research, sourcing, introductions or coordination, TGPU Gulf Advisory & Trade is available separately.",
  whatsappPrompt = "Assalamualaikum, I came from GCC Market Entry and would like to discuss GCC market-entry support.",
}: SeoLandingPageProps) {
  const pageUrl = `${SITE_URL}${canonicalPath}`
  const whatsapp = `https://wa.me/60126413812?text=${encodeURIComponent(whatsappPrompt)}`
  const breadcrumbItems = [
    { "@type": "ListItem", position: 1, name: "GCC Market Entry", item: `${SITE_URL}/` },
    ...(breadcrumbParent
      ? [{ "@type": "ListItem", position: 2, name: breadcrumbParent.label, item: `${SITE_URL}${breadcrumbParent.href}` }]
      : []),
    { "@type": "ListItem", position: breadcrumbParent ? 3 : 2, name: breadcrumbLabel, item: pageUrl },
  ]

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      description: intro,
      url: pageUrl,
      isPartOf: { "@type": "WebSite", name: "GCC Market Entry", url: `${SITE_URL}/` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ]

  return (
    <div className="min-h-screen bg-[#fbfaf4] text-[#14261e]">
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} />
      ))}

      <header className="border-b border-emerald-950/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <a href={localPath("/")} className="flex items-center" aria-label="GCC Market Entry home">
            <GccBrandLogo compact />
          </a>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold text-[#657168]" aria-label="GCC market resources">
            <a href={localPath("/saudi-arabia/")} className="hover:text-[#123b2c]">Saudi Arabia</a>
            <a href={localPath("/uae/")} className="hover:text-[#123b2c]">UAE</a>
            <a href={localPath("/routes-to-market/")} className="hover:text-[#123b2c]">Routes to Market</a>
            <a href={localPath("/guides/")} className="hover:text-[#123b2c]">Guides</a>
            <a href={localPath("/official-sources/")} className="hover:text-[#123b2c]">Official Sources</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-emerald-950/10 bg-gradient-to-br from-[#fbfaf4] via-white to-[#eef4ef]">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#c59b4f]/10 blur-3xl" />
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <div className="relative z-10">
              <a href={localPath("/")} className="mb-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-[#9a742f]">GCC Market Entry</a>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#9a742f]">{eyebrow}</p>
              <h1 className="mt-4 max-w-4xl font-serif text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-[#123b2c] sm:text-5xl lg:text-6xl">{title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#59685f]">{intro}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {highlights.map((item) => (
                  <span key={item} className="inline-flex items-center gap-2 rounded-full border border-emerald-950/10 bg-white px-3 py-2 text-xs font-bold text-[#385447] shadow-sm">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#9a742f]" />{item}
                  </span>
                ))}
              </div>
            </div>
            <aside className="relative z-10 rounded-[2rem] border border-emerald-950/10 bg-[#123b2c] p-7 text-white shadow-[0_20px_60px_rgba(18,59,44,0.15)]">
              <ShieldCheck className="h-9 w-9 text-[#e0bf73]" />
              <h2 className="mt-5 font-serif text-2xl font-bold">Verify before you act</h2>
              <p className="mt-3 text-sm leading-7 text-white/75">Use official authorities, platforms and institutional sources as the final reference wherever a requirement can affect product eligibility, customs, tax, shipment or marketplace access.</p>
              <a href={localPath("/official-sources/")} className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#e0bf73] px-5 py-3 text-sm font-black text-[#123b2c]">Official Source Library <ArrowRight className="h-4 w-4" /></a>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="space-y-12">
            {sections.map((section) => (
              <article key={section.title} className="rounded-[2rem] border border-emerald-950/10 bg-white p-7 shadow-sm sm:p-9">
                <h2 className="font-serif text-3xl font-bold tracking-[-0.03em] text-[#123b2c]">{section.title}</h2>
                {section.paragraphs?.map((paragraph) => <p key={paragraph} className="mt-4 leading-8 text-[#59685f]">{paragraph}</p>)}
                {section.bullets && (
                  <ul className="mt-5 grid gap-3">
                    {section.bullets.map((item) => <li key={item} className="flex gap-3 text-sm leading-7 text-[#526159]"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#9a742f]" />{item}</li>)}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-emerald-950/10 bg-[#eef4ef]">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold tracking-[-0.03em] text-[#123b2c]">Frequently asked questions</h2>
            <div className="mt-8 grid gap-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="rounded-2xl border border-emerald-950/10 bg-white p-5 shadow-sm">
                  <summary className="cursor-pointer font-black text-[#123b2c]">{faq.question}</summary>
                  <p className="mt-3 text-sm leading-7 text-[#59685f]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-emerald-950/10 bg-white p-7 shadow-sm sm:p-9">
            <div className="flex items-center justify-between gap-6">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#9a742f]">Continue exploring</p>
                <h2 className="mt-3 font-serif text-3xl font-bold tracking-[-0.03em] text-[#123b2c]">Related GCC market-entry resources</h2>
              </div>
              <Globe2 className="hidden h-9 w-9 text-[#123b2c] md:block" />
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <a key={item.href} href={localPath(item.href)} className="group rounded-2xl border border-emerald-950/10 bg-[#fbfaf4] p-5 transition hover:-translate-y-0.5 hover:border-[#c59b4f]/50 hover:shadow-md">
                  <h3 className="font-black text-[#123b2c]">{item.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#66736b]">{item.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-black text-[#8a6b2d]">Open resource <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#123b2c] text-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#e0bf73]">Optional human support</p>
              <h2 className="mt-3 max-w-3xl font-serif text-3xl font-bold tracking-[-0.03em]">{ctaTitle}</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/72">{ctaBody}</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a href="https://tgpugulf.com/tgpu-gulf/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#e0bf73] px-5 py-3 text-sm font-black text-[#123b2c]">TGPU Gulf <ExternalLink className="h-4 w-4" /></a>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-black">WhatsApp <ArrowRight className="h-4 w-4" /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-emerald-950/10 bg-[#0d2b20] px-4 py-10 text-white/65">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>GCC Market Entry is an independent educational resource. Verify final requirements with the relevant authority, platform or qualified adviser.</p>
          <a href={localPath("/")} className="font-black text-[#e0bf73]">gccmarketentry.me</a>
        </div>
      </footer>
    </div>
  )
}
