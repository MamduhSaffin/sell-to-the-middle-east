import type { Metadata } from "next"
import {
  AlertTriangle,
  Building2,
  ExternalLink,
  Fuel,
  HeartPulse,
  MapPin,
  Plane,
  SearchCheck,
  ShieldCheck,
} from "lucide-react"
import { SITE_URL } from "@/lib/site"

const title = "Middle East Jobs | Verified Official Career Links"
const description =
  "A free directory of official Middle East career portals for aviation, energy, healthcare, construction and major employers across Saudi Arabia, UAE, Qatar and Oman."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Middle East jobs Malaysia",
    "Saudi Arabia jobs Malaysians",
    "UAE jobs Malaysians",
    "GCC jobs",
    "airline jobs Middle East",
    "oil and gas jobs GCC",
    "nursing jobs Middle East",
  ],
  alternates: { canonical: `${SITE_URL}/jobs-middle-east/` },
  openGraph: {
    title: "Middle East Jobs — Verified Official Career Links",
    description,
    url: `${SITE_URL}/jobs-middle-east/`,
  },
}

type Employer = {
  name: string
  country: string
  note: string
  href: string
}

type Group = {
  title: string
  subtitle: string
  icon: typeof Plane
  employers: Employer[]
}

const groups: Group[] = [
  {
    title: "Airlines & Aviation",
    subtitle: "Cabin crew, pilots, engineering, airport operations, commercial, IT and corporate roles.",
    icon: Plane,
    employers: [
      {
        name: "Emirates Group Careers",
        country: "UAE",
        note: "Official Emirates Group careers portal with airline, airport, cabin crew, engineering, IT and corporate roles.",
        href: "https://www.emiratesgroupcareers.com/",
      },
      {
        name: "Etihad Airways Careers",
        country: "UAE",
        note: "Official Etihad careers portal covering cabin crew, pilots, engineering, operations, corporate and international roles.",
        href: "https://careers.etihad.com/",
      },
      {
        name: "Qatar Airways Careers",
        country: "Qatar",
        note: "Official Qatar Airways career platform. Check each role carefully because eligibility differs by programme and location.",
        href: "https://careers.qatarairways.com/global/en/",
      },
      {
        name: "Saudia Group Careers",
        country: "Saudi Arabia",
        note: "Official Saudia Group vacancy and talent-network portal.",
        href: "https://careers.saudia.com/?locale=en_GB",
      },
      {
        name: "flydubai Careers",
        country: "UAE",
        note: "Official flydubai portal for cabin crew, pilots, engineering, ground and support roles.",
        href: "https://careers.flydubai.com/",
      },
    ],
  },
  {
    title: "Energy, Oil & Gas",
    subtitle: "Engineering, drilling, projects, operations, HSE, finance, technology and specialist roles.",
    icon: Fuel,
    employers: [
      {
        name: "Aramco Careers",
        country: "Saudi Arabia",
        note: "Official Saudi Aramco careers portal for graduates and experienced professionals across technical and corporate disciplines.",
        href: "https://careers.aramco.com/",
      },
      {
        name: "ADNOC Group Careers",
        country: "UAE",
        note: "Official ADNOC Group recruitment portal. Some programmes are Emiratisation-specific; check the vacancy eligibility before applying.",
        href: "https://jobs.adnoc.ae/us/en/",
      },
      {
        name: "QatarEnergy Careers",
        country: "Qatar",
        note: "Official QatarEnergy portal covering engineering, operations, drilling, HSE, finance, IT, logistics and other functions.",
        href: "https://careerportal.qatarenergy.qa/jobs",
      },
      {
        name: "OQ Careers",
        country: "Oman",
        note: "Official OQ energy careers portal with experienced-professional and talent-network opportunities, including expatriate categories.",
        href: "https://careers.oq.com/",
      },
    ],
  },
  {
    title: "Healthcare & Nursing",
    subtitle: "Nursing, physicians, allied health, clinical support, administration and hospital operations.",
    icon: HeartPulse,
    employers: [
      {
        name: "Cleveland Clinic Abu Dhabi",
        country: "UAE",
        note: "Official healthcare careers site with clinical, nursing, physician and non-clinical opportunities. Nursing licensing requirements apply.",
        href: "https://www.clevelandclinicabudhabi.ae/en/careers",
      },
      {
        name: "Hamad Medical Corporation",
        country: "Qatar",
        note: "Official HMC recruitment information for clinical and non-clinical roles across Qatar's public healthcare system.",
        href: "https://hamad.qa/EN/Join-Us/HR/Pages/default.aspx",
      },
      {
        name: "Saudi German Health",
        country: "Saudi Arabia",
        note: "Official Saudi German Health careers portal with nursing, physician, clinical-support and business-service opportunities.",
        href: "https://career.saudigermanhealth.com/",
      },
    ],
  },
  {
    title: "Major Projects, Property & Hospitality",
    subtitle: "Real estate, engineering, project delivery, hospitality, technology and corporate careers.",
    icon: Building2,
    employers: [
      {
        name: "Emaar Careers",
        country: "UAE",
        note: "Official Emaar careers page for opportunities across its global property, hospitality and related businesses.",
        href: "https://www.emaar.com/en/careers",
      },
      {
        name: "NEOM Careers",
        country: "Saudi Arabia",
        note: "Official NEOM career portal. NEOM states that legitimate recruiters do not request recruitment payments or bank fees.",
        href: "https://careers.neom.com/",
      },
      {
        name: "Red Sea Global Careers",
        country: "Saudi Arabia",
        note: "Official Red Sea Global careers page spanning engineering, hospitality, technology and project functions.",
        href: "https://www.redseaglobal.com/en/careers/",
      },
    ],
  },
]

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Middle East Jobs — Verified Official Career Links",
  url: `${SITE_URL}/jobs-middle-east/`,
  description,
  inLanguage: "en-MY",
  isPartOf: { "@type": "WebSite", name: "GCC Market Entry", url: `${SITE_URL}/` },
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#fbfaf4] text-[#14261e]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <header className="border-b border-emerald-950/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
          <a href="/" className="font-black tracking-[-0.02em] text-[#123b2c]">GCC Market Entry</a>
          <nav className="flex flex-wrap gap-4 text-sm font-bold text-[#55675e]" aria-label="Jobs directory navigation">
            <a href="/" className="hover:text-[#123b2c]">Home</a>
            <a href="/official-sources/" className="hover:text-[#123b2c]">Official Sources</a>
            <a href="/malaysia-export-desk/" className="hover:text-[#123b2c]">Malaysia Export Desk</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="border-b border-emerald-950/10 bg-gradient-to-br from-[#f8f7ee] via-white to-[#eef4ef]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-900/15 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#123b2c]">
                <SearchCheck className="h-4 w-4" /> Verified employer links
              </span>
              <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.03] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Looking for a job in the Middle East?
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5d6b64]">
                Start with the employer's official career portal. This directory points you to verified recruitment pages for major GCC employers instead of reposting vacancies that may expire or become misleading.
              </p>
              <div className="mt-7 flex flex-wrap gap-3 text-sm font-bold text-[#365548]">
                <span className="rounded-full bg-white px-4 py-2 ring-1 ring-emerald-950/10">Saudi Arabia</span>
                <span className="rounded-full bg-white px-4 py-2 ring-1 ring-emerald-950/10">UAE</span>
                <span className="rounded-full bg-white px-4 py-2 ring-1 ring-emerald-950/10">Qatar</span>
                <span className="rounded-full bg-white px-4 py-2 ring-1 ring-emerald-950/10">Oman</span>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-emerald-950/10 bg-[#123b2c] p-7 text-white shadow-xl shadow-emerald-950/10 sm:p-9">
              <ShieldCheck className="h-10 w-10 text-[#e0bf73]" />
              <h2 className="mt-5 text-2xl font-black">Apply safely</h2>
              <ul className="mt-5 space-y-4 text-sm leading-6 text-white/80">
                <li>Use the employer's official domain whenever possible.</li>
                <li>Do not pay a recruiter, visa fee or “processing deposit” just to secure an interview or offer.</li>
                <li>Check whether the role is open internationally or reserved for nationals before applying.</li>
                <li>Verify any offer against the employer's official careers site before sending sensitive documents.</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8a6b2d]">Official career portals</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] sm:text-4xl">Browse by industry</h2>
              <p className="mt-4 leading-7 text-[#657168]">We link to the employer, not to copied vacancy posts. Open the official portal and use its current search filters for the latest openings.</p>
            </div>

            <div className="space-y-12">
              {groups.map((group) => {
                const Icon = group.icon
                return (
                  <section key={group.title} className="rounded-[2rem] border border-emerald-950/10 bg-white p-5 shadow-sm sm:p-7">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eef4ef] text-[#123b2c]"><Icon className="h-6 w-6" /></div>
                      <div>
                        <h2 className="text-2xl font-black tracking-[-0.02em]">{group.title}</h2>
                        <p className="mt-1 text-sm leading-6 text-[#657168]">{group.subtitle}</p>
                      </div>
                    </div>

                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                      {group.employers.map((employer) => (
                        <a
                          key={employer.name}
                          href={employer.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group rounded-2xl border border-emerald-950/10 bg-[#fcfcf8] p-5 transition hover:-translate-y-0.5 hover:border-[#2d6a4f]/35 hover:shadow-md"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <h3 className="font-black group-hover:text-[#123b2c]">{employer.name}</h3>
                              <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-[0.08em] text-[#8a6b2d]"><MapPin className="h-3.5 w-3.5" /> {employer.country}</span>
                            </div>
                            <ExternalLink className="h-4 w-4 shrink-0 text-[#6b7d70]" />
                          </div>
                          <p className="mt-3 text-sm leading-6 text-[#657168]">{employer.note}</p>
                        </a>
                      ))}
                    </div>
                  </section>
                )
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-amber-900/10 bg-[#f7f1e3] py-14">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[auto_1fr] lg:px-8">
            <AlertTriangle className="h-8 w-8 text-[#8a6b2d]" />
            <div>
              <h2 className="text-2xl font-black">Important: “verified link” does not mean every vacancy is open to foreign applicants.</h2>
              <p className="mt-3 max-w-4xl leading-7 text-[#657168]">
                GCC employers often run both international recruitment and nationalisation programmes. Read the eligibility criteria on the exact vacancy page. The employer's current posting always takes precedence over summaries on this website.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#123b2c] py-14 text-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black tracking-[-0.03em]">Know another major GCC employer we should verify?</h2>
            <p className="mt-3 max-w-3xl leading-7 text-white/75">We can expand this directory gradually, but only after checking that the link belongs to the employer or an official recruitment portal.</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#0d2b20] px-4 py-8 text-center text-xs leading-6 text-white/60">
        GCC Market Entry is an independent educational resource and is not a recruitment agency. Applications, interviews and hiring decisions are handled by the listed employers.
      </footer>
    </div>
  )
}
