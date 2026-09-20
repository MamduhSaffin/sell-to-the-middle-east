import type { Metadata } from "next"
import {
  Building2,
  CheckCircle2,
  ExternalLink,
  Globe2,
  Handshake,
  Megaphone,
  ShieldCheck,
  Users,
} from "lucide-react"
import { SITE_URL } from "@/lib/site"

const title = "Collaborate with GCC Market Entry"
const description =
  "A transparent, no-pay-to-play collaboration framework for trade institutions, GCC companies, employers, chambers, universities and verified ecosystem partners."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/collaborate/` },
  openGraph: { title, description, url: `${SITE_URL}/collaborate/` },
}

const formats = [
  {
    icon: ShieldCheck,
    title: "Official-source partner",
    text: "Help us point readers to current official guidance, regulations, programmes or public resources without turning the page into an advertisement.",
  },
  {
    icon: Building2,
    title: "Industry contributor",
    text: "Review or contribute a practical section on your industry, market or operating environment, with clear attribution and editorial independence.",
  },
  {
    icon: Users,
    title: "Employer & careers partner",
    text: "Provide your official careers portal, recruitment-scam guidance or international hiring information for our verified Middle East jobs directory.",
  },
  {
    icon: Megaphone,
    title: "Knowledge distribution partner",
    text: "Share a useful guide, webinar, checklist or public resource with your audience when it genuinely helps businesses or jobseekers.",
  },
  {
    icon: Globe2,
    title: "Country / ecosystem reviewer",
    text: "Help us improve a Saudi, UAE, Qatar, Oman, Bahrain or Kuwait page by flagging outdated information and suggesting official sources.",
  },
  {
    icon: Handshake,
    title: "Co-created public resource",
    text: "Create a free guide, Q&A, event recap or industry explainer together. The collaboration can remain non-commercial unless both sides later agree otherwise.",
  },
]

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: title,
  url: `${SITE_URL}/collaborate/`,
  description,
  isPartOf: { "@type": "WebSite", name: "GCC Market Entry", url: `${SITE_URL}/` },
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#fbfaf4] text-[#14261e]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <header className="border-b border-emerald-950/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
          <a href="/" className="font-black tracking-[-0.02em] text-[#123b2c]">GCC Market Entry</a>
          <nav className="flex flex-wrap gap-4 text-sm font-bold text-[#55675e]">
            <a href="/" className="hover:text-[#123b2c]">Home</a>
            <a href="/official-sources/" className="hover:text-[#123b2c]">Official Sources</a>
            <a href="/jobs-middle-east/" className="hover:text-[#123b2c]">Middle East Jobs</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="border-b border-emerald-950/10 bg-gradient-to-br from-[#f8f7ee] via-white to-[#eef4ef]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-900/15 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#123b2c]">
                <Handshake className="h-4 w-4" /> Collaboration
              </span>
              <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.03] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Build useful GCC knowledge together — without pay-to-play placement.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5d6b64]">
                GCC Market Entry welcomes collaboration with trade institutions, chambers, major employers, GCC companies, universities and credible ecosystem organisations when the result is genuinely useful to Malaysian businesses or jobseekers.
              </p>
            </div>

            <aside className="rounded-[2rem] border border-emerald-950/10 bg-[#123b2c] p-7 text-white shadow-xl shadow-emerald-950/10 sm:p-9">
              <ShieldCheck className="h-10 w-10 text-[#e0bf73]" />
              <h2 className="mt-5 text-2xl font-black">Our collaboration rule</h2>
              <p className="mt-4 leading-7 text-white/80">
                We only describe an organisation as a partner, collaborator or supporter after explicit approval. Until then, a company or institution may only be referenced as an official source, employer, case example or public resource where appropriate.
              </p>
            </aside>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8a6b2d]">Ways to collaborate</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] sm:text-4xl">Simple formats that can start at zero cost</h2>
              <p className="mt-4 leading-7 text-[#657168]">The starting point can be as small as reviewing one page, contributing one official link or sharing one useful guide with your audience.</p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {formats.map((item) => {
                const Icon = item.icon
                return (
                  <article key={item.title} className="rounded-[2rem] border border-emerald-950/10 bg-white p-6 shadow-sm">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef4ef] text-[#123b2c]"><Icon className="h-5 w-5" /></div>
                    <h3 className="mt-5 text-xl font-black">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#657168]">{item.text}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-emerald-950/10 bg-white py-16">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8a6b2d]">What we can offer</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.03em]">A credible public-information platform</h2>
              <ul className="mt-6 space-y-4 text-sm leading-6 text-[#657168]">
                {["A dedicated co-created resource or contributor section.", "Clear attribution and links to the organisation's official website.", "English, Bahasa Melayu and Arabic reach as the platform expands.", "A shareable page that the organisation can distribute to its audience.", "Editorial transparency so users know what is official, contributed or independent."].map((item) => (
                  <li key={item} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#2d6a4f]" /><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8a6b2d]">What we do not do</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.03em]">No implied endorsement</h2>
              <ul className="mt-6 space-y-4 text-sm leading-6 text-[#657168]">
                {["We do not display a logo as a partner without permission.", "We do not describe an organisation as endorsing GCC Market Entry unless it has explicitly agreed.", "We do not sell rankings or make one company look officially preferred because it paid.", "We distinguish public-source references from formal collaborations."].map((item) => (
                  <li key={item} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#2d6a4f]" /><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-[#123b2c] py-16 text-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-white/60">Potential collaboration</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl">Trade agency, GCC company, employer, chamber or university?</h2>
              <p className="mt-4 max-w-3xl leading-7 text-white/75">A first collaboration can be non-commercial: review a guide, contribute an official resource, co-create a public explainer or share a verified opportunity.</p>
            </div>
            <a href="https://tgpugulf.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-black text-[#123b2c]">
              Coordination via TGPU Gulf <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#0d2b20] px-4 py-8 text-center text-xs leading-6 text-white/60">
        GCC Market Entry remains an independent educational resource. Collaboration status is shown only after it has been explicitly agreed.
      </footer>
    </div>
  )
}
