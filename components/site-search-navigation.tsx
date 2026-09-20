"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { ArrowRight, BookOpen, BriefcaseBusiness, Building2, Calculator, FileText, Globe2, GraduationCap, Landmark, MapPinned, Menu, Search, ShieldCheck, Store, X } from "lucide-react"

type Lang = "en" | "bm" | "ar"
type SectionResult = { label: string; id: string }
type SiteItem = {
  title: Record<Lang, string>
  description: Record<Lang, string>
  href: string
  keywords: string
  icon: typeof Search
}

const siteItems: SiteItem[] = [
  {
    title: { en: "Home", bm: "Laman Utama", ar: "الرئيسية" },
    description: { en: "GCC Market Entry roadmap and free tools", bm: "Roadmap GCC dan alat percuma", ar: "خارطة دخول الخليج والأدوات المجانية" },
    href: "/",
    keywords: "home start roadmap gcc malaysia gulf",
    icon: Globe2,
  },
  {
    title: { en: "Saudi Arabia", bm: "Arab Saudi", ar: "السعودية" },
    description: { en: "Saudi market-entry and compliance guide", bm: "Panduan pasaran dan pematuhan Saudi", ar: "دليل السوق والامتثال في السعودية" },
    href: "/saudi-arabia/",
    keywords: "saudi arabia sfda saber fasah zatca compliance",
    icon: MapPinned,
  },
  {
    title: { en: "United Arab Emirates", bm: "Emiriah Arab Bersatu", ar: "الإمارات" },
    description: { en: "UAE market-entry guide", bm: "Panduan kemasukan pasaran UAE", ar: "دليل دخول سوق الإمارات" },
    href: "/uae/",
    keywords: "uae dubai abu dhabi moiAT compliance",
    icon: Building2,
  },
  {
    title: { en: "Official Source Library", bm: "Pustaka Sumber Rasmi", ar: "مكتبة المصادر الرسمية" },
    description: { en: "Government, regulator and institutional links", bm: "Pautan kerajaan, regulator dan institusi", ar: "روابط حكومية وتنظيمية ومؤسسية" },
    href: "/official-sources/",
    keywords: "official government authority regulator sources verify",
    icon: ShieldCheck,
  },
  {
    title: { en: "Middle East Jobs", bm: "Kerja Timur Tengah", ar: "وظائف الشرق الأوسط" },
    description: { en: "Verified official employer career portals", bm: "Portal kerjaya rasmi majikan yang disemak", ar: "بوابات التوظيف الرسمية التي تم التحقق منها" },
    href: "/jobs-middle-east/",
    keywords: "jobs careers airlines aramco nurse nursing oil gas emirates qatar saudi",
    icon: BriefcaseBusiness,
  },
  {
    title: { en: "Study in the Middle East", bm: "Belajar di Timur Tengah", ar: "الدراسة في الشرق الأوسط" },
    description: { en: "Universities, admissions and scholarships", bm: "Universiti, kemasukan dan biasiswa", ar: "الجامعات والقبول والمنح الدراسية" },
    href: "/study-middle-east/",
    keywords: "study university scholarship bachelor master phd arabic islamic saudi qatar uae oman",
    icon: GraduationCap,
  },
  {
    title: { en: "Routes to Market", bm: "Laluan ke Pasaran", ar: "مسارات دخول السوق" },
    description: { en: "Marketplace, distributor, B2B, retail and more", bm: "Marketplace, distributor, B2B, retail dan lain-lain", ar: "المنصات والموزعون وB2B والتجزئة وغيرها" },
    href: "/routes-to-market/",
    keywords: "route market distributor importer b2b retail marketplace local entity",
    icon: Store,
  },
  {
    title: { en: "Malaysia Export Desk", bm: "Meja Eksport Malaysia", ar: "مكتب التصدير الماليزي" },
    description: { en: "MATRADE and Malaysian export support", bm: "MATRADE dan sokongan eksport Malaysia", ar: "ماتريد ودعم التصدير الماليزي" },
    href: "/malaysia-export-desk/",
    keywords: "matrade malaysia export sme corp halal support grants",
    icon: Landmark,
  },
  {
    title: { en: "GCC Cost Planner", bm: "Perancang Kos GCC", ar: "مخطط تكاليف الخليج" },
    description: { en: "Plan compliance, logistics and launch costs", bm: "Rancang kos pematuhan, logistik dan pelancaran", ar: "تخطيط تكاليف الامتثال والخدمات اللوجستية والإطلاق" },
    href: "/cost-planner/",
    keywords: "cost calculator budget freight customs marketing fees planner",
    icon: Calculator,
  },
  {
    title: { en: "Beauty & Wellness", bm: "Kecantikan & Wellness", ar: "الجمال والعناية" },
    description: { en: "Category preparation and research guide", bm: "Panduan persediaan dan kajian kategori", ar: "دليل الاستعداد والبحث للفئة" },
    href: "/beauty-wellness/",
    keywords: "beauty cosmetics wellness skincare personal care supplements",
    icon: BookOpen,
  },
  {
    title: { en: "Electronics", bm: "Elektronik", ar: "الإلكترونيات" },
    description: { en: "Technical and commercial readiness guide", bm: "Panduan kesiapsiagaan teknikal dan komersial", ar: "دليل الجاهزية الفنية والتجارية" },
    href: "/electronics/",
    keywords: "electronics technical specifications devices accessories",
    icon: FileText,
  },
  {
    title: { en: "Guides & Checklists", bm: "Panduan & Checklist", ar: "الأدلة وقوائم التحقق" },
    description: { en: "Practical GCC market-entry resources", bm: "Sumber praktikal kemasukan pasaran GCC", ar: "موارد عملية لدخول أسواق الخليج" },
    href: "/guides/",
    keywords: "guides checklist localization localisation demand test market entry",
    icon: FileText,
  },
  {
    title: { en: "Collaboration", bm: "Kerjasama", ar: "التعاون" },
    description: { en: "Collaborate on useful GCC public resources", bm: "Bekerjasama membina sumber awam GCC", ar: "التعاون في بناء موارد خليجية مفيدة" },
    href: "/collaborate/",
    keywords: "collaboration partner contributor matrade institution company",
    icon: Building2,
  },
]

const copy = {
  en: {
    button: "Search & navigate",
    title: "Search GCC Market Entry",
    placeholder: "Search jobs, scholarships, Saudi, UAE, guides...",
    current: "On this page",
    website: "Across the website",
    empty: "No matching page or section found.",
    close: "Close search",
    hint: "Type to search pages and headings. Select a result to jump there.",
  },
  bm: {
    button: "Cari & navigasi",
    title: "Cari GCC Market Entry",
    placeholder: "Cari kerja, biasiswa, Saudi, UAE, panduan...",
    current: "Dalam halaman ini",
    website: "Seluruh laman web",
    empty: "Tiada halaman atau bahagian yang sepadan.",
    close: "Tutup carian",
    hint: "Taip untuk mencari halaman dan tajuk. Pilih hasil untuk terus ke sana.",
  },
  ar: {
    button: "بحث وتنقّل",
    title: "ابحث في GCC Market Entry",
    placeholder: "ابحث عن وظائف، منح، السعودية، الإمارات، الأدلة...",
    current: "في هذه الصفحة",
    website: "في الموقع كله",
    empty: "لم يتم العثور على صفحة أو قسم مطابق.",
    close: "إغلاق البحث",
    hint: "اكتب للبحث في الصفحات والعناوين، ثم اختر النتيجة للانتقال إليها.",
  },
} as const

function detectLang(pathname: string): Lang {
  if (pathname === "/ar" || pathname.startsWith("/ar/")) return "ar"
  if (pathname === "/bm" || pathname.startsWith("/bm/")) return "bm"
  return "en"
}

function localHref(href: string, lang: Lang) {
  if (lang === "en") return href
  if (href === "/") return `/${lang}/`
  if (href === "/study-middle-east/") return `/${lang}/study-middle-east/`
  return href
}

export function SiteSearchNavigation() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [lang, setLang] = useState<Lang>("en")
  const [sections, setSections] = useState<SectionResult[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setLang(detectLang(window.location.pathname))
  }, [])

  useEffect(() => {
    if (!open) return
    const seen = new Set<string>()
    const found: SectionResult[] = []
    document.querySelectorAll<HTMLElement>("main h1[id], main h2[id], main h3[id], main section[id] > h1, main section[id] > h2, main section[id] > h3").forEach((element) => {
      const section = element.id ? element : element.closest<HTMLElement>("section[id]")
      const id = section?.id || element.id
      const label = element.textContent?.trim()
      if (!id || !label || seen.has(id)) return
      seen.add(id)
      found.push({ id, label })
    })
    setSections(found.slice(0, 24))
    requestAnimationFrame(() => inputRef.current?.focus())
  }, [open])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        setOpen(true)
      }
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const normalized = query.trim().toLowerCase()
  const matchingSections = useMemo(() => {
    if (!normalized) return sections.slice(0, 8)
    return sections.filter((section) => section.label.toLowerCase().includes(normalized)).slice(0, 8)
  }, [normalized, sections])

  const matchingSiteItems = useMemo(() => {
    const all = siteItems.map((item) => ({ ...item, href: localHref(item.href, lang) }))
    if (!normalized) return all.slice(0, 8)
    return all.filter((item) => {
      const haystack = `${item.title[lang]} ${item.description[lang]} ${item.keywords}`.toLowerCase()
      return haystack.includes(normalized)
    }).slice(0, 10)
  }, [lang, normalized])

  const t = copy[lang]
  const isRtl = lang === "ar"

  const goToSection = (id: string) => {
    setOpen(false)
    setQuery("")
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
      history.replaceState(null, "", `#${id}`)
    })
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-4 z-[90] inline-flex items-center gap-2 rounded-full border border-emerald-900/15 bg-[#123b2c] px-4 py-3 text-sm font-black text-white shadow-2xl shadow-emerald-950/20 transition hover:-translate-y-0.5 hover:bg-[#184b38] sm:bottom-6 sm:right-6"
        aria-label={t.button}
      >
        <Search className="h-4 w-4" />
        <span className="hidden sm:inline">{t.button}</span>
        <span className="hidden rounded-md bg-white/10 px-1.5 py-0.5 text-[10px] font-bold sm:inline">⌘K</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center bg-[#0d2b20]/55 px-3 pt-[7vh] backdrop-blur-sm sm:px-6 sm:pt-[10vh]" onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false) }}>
          <div dir={isRtl ? "rtl" : "ltr"} className="w-full max-w-3xl overflow-hidden rounded-[1.75rem] border border-emerald-950/10 bg-[#fbfaf4] shadow-2xl">
            <div className="border-b border-emerald-950/10 bg-white p-4 sm:p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#8a6b2d]">GCC Market Entry</p>
                  <h2 className="mt-1 text-xl font-black text-[#123b2c] sm:text-2xl">{t.title}</h2>
                </div>
                <button type="button" onClick={() => setOpen(false)} className="rounded-full border border-emerald-950/10 bg-[#f7f1e3] p-2.5 text-[#123b2c]" aria-label={t.close}>
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-4 flex items-center gap-3 rounded-2xl border border-emerald-950/10 bg-[#fbfaf4] px-4 py-3 focus-within:border-[#2d6a4f]/50 focus-within:ring-4 focus-within:ring-[#2d6a4f]/10">
                <Search className="h-5 w-5 shrink-0 text-[#587067]" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={t.placeholder}
                  className="min-w-0 flex-1 bg-transparent text-base font-semibold text-[#14261e] outline-none placeholder:text-[#7a8881]"
                />
                {query && <button type="button" onClick={() => setQuery("")} className="rounded-full p-1 text-[#657168]" aria-label="Clear"><X className="h-4 w-4" /></button>}
              </div>
              <p className="mt-2 text-xs leading-5 text-[#718078]">{t.hint}</p>
            </div>

            <div className="max-h-[65vh] overflow-y-auto p-3 sm:p-4">
              {matchingSections.length > 0 && (
                <section>
                  <h3 className="px-2 pb-2 text-xs font-black uppercase tracking-[0.13em] text-[#8a6b2d]">{t.current}</h3>
                  <div className="grid gap-1">
                    {matchingSections.map((section) => (
                      <button key={section.id} type="button" onClick={() => goToSection(section.id)} className="group flex w-full items-center justify-between gap-3 rounded-xl px-3 py-3 text-start hover:bg-[#eef4ef]">
                        <span className="flex min-w-0 items-center gap-3"><Menu className="h-4 w-4 shrink-0 text-[#6b7d70]" /><span className="truncate font-bold">{section.label}</span></span>
                        <ArrowRight className={`h-4 w-4 shrink-0 text-[#8a6b2d] ${isRtl ? "rotate-180" : ""}`} />
                      </button>
                    ))}
                  </div>
                </section>
              )}

              {matchingSiteItems.length > 0 && (
                <section className={matchingSections.length ? "mt-5 border-t border-emerald-950/10 pt-4" : ""}>
                  <h3 className="px-2 pb-2 text-xs font-black uppercase tracking-[0.13em] text-[#8a6b2d]">{t.website}</h3>
                  <div className="grid gap-1 sm:grid-cols-2">
                    {matchingSiteItems.map((item) => {
                      const Icon = item.icon
                      return (
                        <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="group flex items-start gap-3 rounded-xl px-3 py-3 hover:bg-[#eef4ef]">
                          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[#123b2c] ring-1 ring-emerald-950/10"><Icon className="h-4.5 w-4.5" /></span>
                          <span className="min-w-0">
                            <span className="block font-black text-[#183d2e]">{item.title[lang]}</span>
                            <span className="mt-0.5 block text-xs leading-5 text-[#657168]">{item.description[lang]}</span>
                          </span>
                        </a>
                      )
                    })}
                  </div>
                </section>
              )}

              {matchingSections.length === 0 && matchingSiteItems.length === 0 && (
                <div className="px-4 py-12 text-center text-sm font-semibold text-[#657168]">{t.empty}</div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
