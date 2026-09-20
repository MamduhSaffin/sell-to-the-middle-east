import { ArrowRight, CheckCircle2, ExternalLink, ShieldCheck } from "lucide-react"
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
  ctaTitle = "Verify the important points before you commit.",
  ctaBody = "Use the official-source library and free planning tools to identify what must be checked for your exact product, market and route to market.",
}: SeoLandingPageProps) {
  const canonical = `${SITE_URL}${canonicalPath}`

  const breadcrumbItems = [
    { "@type": "ListItem", position: 1, name: "GCC Market Entry", item: `${SITE_URL}/` },
    ...(breadcrumbParent
      ? [{ "@type": "ListItem", position: 2, name: breadcrumbParent.label, item: `${SITE_URL}${breadcrumbParent.href}` }]
      : []),
    {
      "@type": "ListItem",
      position: breadcrumbParent ? 3 : 2,
      name: breadcrumbLabel,
      item: canonical,
    },
  ]

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      description: intro,
      url: canonical,
      inLanguage: "en-MY",
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
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#657168]">{intro}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={localPath("/official-sources/")} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#123b2c] px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-emerald-950/10">
                  <ShieldCheck className="h-4 w-4" /> Verify Official Sources
                </a>
                <a href={localPath("/#readiness")} className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-950/15 bg-white px-6 py-3.5 text-sm font-black text-[#123b2c]">
                  Use Free Readiness Check <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <aside className="relative z-10 rounded-[2rem] border border-emerald-950/10 bg-white p-6 shadow-xl shadow-emerald-950/5 sm:p-8">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef4ef] text-[#123b2c]"><ShieldCheck className="h-5 w-5" /></div>
              <h2 className="text-xl font-black text-[#123b2c]">What to focus on first</h2>
              <div className="mt-5 space-y-4">
                {highlights.map((item) => (
                  <div key={item} className="flex gap-3 text-sm leading-6 text-[#58675e]"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#9a742f]" /><span>{item}</span></div>
                ))}
              </div>
              <p className="mt-6 rounded-xl bg-[#f6f5ee] p-4 text-xs leading-5 text-[#6d776f]">Independent educational guidance only. Product eligibility, regulatory requirements and platform acceptance depend on the exact product, operating model and current official rules.</p>
            </aside>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {sections.map((section, index) => (
                <article key={section.title} className="grid gap-4 border-b border-emerald-950/10 pb-10 last:border-0 last:pb-0 md:grid-cols-[140px_1fr]">
                  <div className="text-xs font-black uppercase tracking-[0.14em] text-[#9a742f]">{String(index + 1).padStart(2, "0")}</div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold tracking-[-0.02em] text-[#123b2c] sm:text-3xl">{section.title}</h2>
                    {section.paragraphs?.map((paragraph) => <p key={paragraph} className="mt-4 text-base leading-8 text-[#657168]">{paragraph}</p>)}
                    {section.bullets && (
                      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                        {section.bullets.map((bullet) => <li key={bullet} className="flex gap-3 rounded-xl bg-[#f6f5ee] p-4 text-sm leading-6"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2d6a4f]" /><span>{bullet}</span></li>)}
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-emerald-950/10 bg-[#f1f4ed] py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#9a742f]">Common questions</p>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-[-0.03em] text-[#123b2c]">Frequently asked questions</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-2xl border border-emerald-950/10 bg-white p-6">
                  <h3 className="font-black text-[#123b2c]">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#657168]">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#9a742f]">Continue exploring</p>
                <h2 className="mt-3 font-serif text-3xl font-bold tracking-[-0.03em] text-[#123b2c]">Related GCC market-entry resources</h2>
              </div>
              <Globe2 className="hidden h-9 w-9 text-[#123b2c] md:block" />
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <a key={item.href} href={localPath(item.href)} className="group rounded-2xl border border-emerald-950/10 bg-white p-6 transition hover:-translate-y-1 hover:border-[#c59b4f]/50 hover:shadow-lg">
                  <h3 className="font-black text-[#123b2c] group-hover:text-[#9a742f]">{item.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#657168]">{item.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-black text-[#123b2c]">Read guide <ArrowRight className="h-3.5 w-3.5" /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#123b2c] py-16 text-white lg:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#e5c985]">Next step</p>
              <h2 className="mt-3 max-w-3xl font-serif text-3xl font-bold tracking-[-0.03em] sm:text-4xl">{ctaTitle}</h2>
              <p className="mt-4 max-w-3xl leading-7 text-white/75">{ctaBody}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a href={localPath("/official-sources/")} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e5c985] px-6 py-3.5 text-sm font-black text-[#173426]"><ShieldCheck className="h-4 w-4" /> Official Sources</a>
              <a href="https://tgpugulf.com/tgpu-gulf/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-black text-white">Optional: TGPU Gulf <ExternalLink className="h-4 w-4" /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-emerald-950/10 bg-[#09241a] text-white">
        <div className="mx-auto max-w-7xl px-4 py-8 text-xs leading-6 text-white/65 sm:px-6 lg:px-8">
          GCC Market Entry is an independent educational resource. It is not a government authority, marketplace, certification body or guarantee of market access. Verify current requirements with the relevant official authority or platform.
        </div>
      </footer>
    </div>
  )
}
