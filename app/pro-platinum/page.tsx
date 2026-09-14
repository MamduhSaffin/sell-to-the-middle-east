import type { Metadata } from "next"
import { ArrowLeft, Check, ExternalLink, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EROMMAN_LINKS } from "@/lib/links"
import { SITE_BASE_PATH, SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "Pro Platinum for Established Brands | eRomman GCC Market Entry",
  description:
    "A simple Pro Platinum reference for established brands exploring serious GCC marketplace expansion with eRomman, including branded storefront support, Arabic localisation, Amazon and Noon services, campaigns and dedicated Arab brand support.",
  alternates: {
    canonical: `${SITE_URL}/pro-platinum/`,
  },
}

const coreSupport = [
  "Product listing sync and bulk upload support",
  "Training assistance and virtual consultation",
  "Tailored storefront with logo, banner and brand details",
  "Brand-page presentation and welcome-blog support",
  "Monthly sales campaign participation",
  "Organic content support across Facebook, Instagram and YouTube",
  "English-to-Arabic product localisation",
  "Arabic-English SEO support",
  "Arab KOL support",
  "FBE stock-and-ship support where suitable",
  "Arab Customer Care and Expert Arab Sales Support",
  "Arab Content Pro & Designer support",
  "Exclusive Arab Brand Manager support",
]

const marketplaceSupport = [
  "Amazon and Noon brand-registration support",
  "Amazon A+ Content guidance",
  "Amazon marketing-campaign support",
  "Monthly business insights",
  "Multi-platform product uploads",
  "FBA / FBN support",
  "Strategic product insights and optimisation",
  "Amazon Ads guidance",
]

const bestFor = [
  "Established brands with a proven product range",
  "Brands ready to invest in stronger GCC marketplace presence",
  "Brands that need Arabic-facing content and brand presentation",
  "Brands considering Amazon, Noon or wider multi-platform expansion",
  "Brands that want more dedicated regional coordination instead of basic listing support",
]

export default function ProPlatinumPage() {
  const homeHref = (SITE_BASE_PATH || "") + "/"

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-background/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href={homeHref} className="flex items-center" aria-label="Back to GCC Market Entry home">
            <img
              src={SITE_BASE_PATH + "/images/eromman-logo.png"}
              alt="eRomman"
              width={1157}
              height={238}
              className="h-8 w-auto sm:h-9"
            />
          </a>
          <a href={homeHref} className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to GCC Market Entry
          </a>
        </div>
      </header>

      <section className="border-b border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">eRomman Pro Platinum</p>
            <h1 className="mt-4 text-balance font-serif text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              For established brands ready for serious GCC expansion
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Pro Platinum is eRomman&apos;s tailored corporate / enterprise pathway for brands that need more than basic seller onboarding. It combines stronger brand presentation, Arabic localisation, dedicated regional support and Amazon / Noon marketplace services.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                nativeButton={false}
                render={<a href={EROMMAN_LINKS.sellerSupportWhatsapp} target="_blank" rel="noopener noreferrer" />}
                className="rounded-full px-6"
              >
                Discuss Pro Platinum
              </Button>
              <Button
                nativeButton={false}
                variant="outline"
                render={<a href={EROMMAN_LINKS.pricing} target="_blank" rel="noopener noreferrer" />}
                className="rounded-full px-6"
              >
                Official eRomman Pricing
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl border border-border bg-card p-7 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Who it is for</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold">Best suited to established brands</h2>
            <ul className="mt-6 space-y-4">
              {bestFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-primary/20 bg-primary p-7 text-primary-foreground sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Commercial structure</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold">Custom package — contact eRomman</h2>
            <p className="mt-5 leading-relaxed text-primary-foreground/85">
              Pro Platinum is presented in eRomman&apos;s original package material as a tailored package rather than a single fixed public price. The final quotation should confirm the selected marketplace scope, services and any separate regulatory, advertising, logistics or authority costs before payment.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/40 py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Pro Platinum support</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">What the package is designed to support</h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-7">
              <h3 className="font-serif text-2xl font-semibold">Brand, content & operations</h3>
              <ul className="mt-6 space-y-3">
                {coreSupport.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-card p-7">
              <h3 className="font-serif text-2xl font-semibold">Amazon & Noon services</h3>
              <ul className="mt-6 space-y-3">
                {marketplaceSupport.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-primary/20 bg-primary/5 p-7 sm:p-9">
            <div className="flex items-start gap-4">
              <ShieldCheck className="mt-1 h-7 w-7 shrink-0 text-primary" />
              <div>
                <h2 className="font-serif text-2xl font-semibold sm:text-3xl">Important before committing</h2>
                <p className="mt-4 max-w-4xl leading-relaxed text-muted-foreground">
                  Pro Platinum support does not guarantee marketplace approval, regulatory approval or sales. Amazon / Noon activation depends on product eligibility, documentation, category rules and platform approval. Regulated products such as supplements, health and beauty items may require additional authority documents or approvals. Final scope and separate costs should always be confirmed in the quotation before payment.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <h2 className="font-serif text-3xl font-semibold">Established brand? Start with one clear discussion.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Share your brand, product category and target GCC marketplace. eRomman can review the fit and confirm the appropriate Pro Platinum scope.
            </p>
            <Button
              nativeButton={false}
              render={<a href={EROMMAN_LINKS.sellerSupportWhatsapp} target="_blank" rel="noopener noreferrer" />}
              className="mt-6 rounded-full px-7"
            >
              Talk to Seller Support
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
