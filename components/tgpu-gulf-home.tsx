import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  FileText,
  Globe2,
  Handshake,
  Mail,
  MapPin,
  Phone,
  Search,
  Ship,
} from "lucide-react"

type Lang = "en" | "bm" | "ar"

const PHONE_DISPLAY = "+60 12-868 1339"
const PHONE_TEL = "+60128681339"
const EMAIL = "mamduh@tgpugulf.com"
const WEBSITE = "https://www.tgpugulf.com"

const copy = {
  en: {
    dir: "ltr" as const,
    nav: { services: "Services", corridors: "Trade Corridors", process: "How We Work", contact: "Contact" },
    language: "العربية",
    languageHref: "/ar/",
    eyebrow: "Malaysia ↔ Saudi Arabia & GCC",
    title: "Malaysia–Saudi Arabia & GCC Market Entry and Trade Advisory",
    intro:
      "Practical cross-border support for businesses exploring Malaysia and the Gulf — from market-entry readiness and documentation coordination to supplier, buyer and commercial introductions.",
    primary: "Discuss an Opportunity",
    secondary: "Email TGPU Gulf",
    trust: ["Malaysia-registered business", "Kuala Lumpur, Malaysia", "English • Bahasa Melayu • العربية"],
    servicesTitle: "Cross-border support built around the actual opportunity",
    servicesIntro:
      "We coordinate the commercial pathway while the appropriate licensed parties, authorities and specialists handle formal approvals where required.",
    services: [
      ["Saudi & GCC Market Entry", "Preliminary market-entry assessment, route planning, product pathway review and documentation readiness."],
      ["Trade Facilitation", "Supplier and buyer introductions, RFQ coordination, commercial discussions and transaction follow-up."],
      ["Regulatory Pathway Coordination", "Identify likely requirements and coordinate documentation with suitable local parties and specialists."],
      ["Supplier & Buyer Sourcing", "Search, preliminary screening and engagement with manufacturers, importers, distributors and buyers."],
      ["Commercial Documentation", "Company introductions, enquiry packs, specifications, RFQs and supporting commercial documents."],
      ["Project Coordination", "Cross-border communication, document tracking, timelines and follow-up between stakeholders."],
    ],
    corridorsTitle: "Two-way Malaysia–GCC commercial support",
    malaysiaToGcc: "Malaysia → Saudi Arabia / GCC",
    malaysiaToGccBody:
      "For Malaysian manufacturers and brands seeking distributors, importers, marketplace routes or structured market-entry support in Saudi Arabia and the wider GCC.",
    gccToMalaysia: "Saudi Arabia / GCC → Malaysia",
    gccToMalaysiaBody:
      "For Gulf businesses seeking Malaysian suppliers, products, manufacturing partners or commercial introductions, with Malaysia-side sourcing and coordination.",
    sectorsTitle: "Opportunity-led, category-aware",
    sectorsBody:
      "We can evaluate trade opportunities across food ingredients, consumer products, health & wellness, e-commerce, manufacturing and other commercially viable categories. Regulated products remain subject to the applicable requirements in each market.",
    processTitle: "A clear process before major commitments",
    process: [
      ["1", "Define the opportunity", "Buyer, supplier, product, market, quantity, objective and commercial requirement."],
      ["2", "Verify the pathway", "Review commercial fit, documentation gaps, likely regulatory route and counterpart requirements."],
      ["3", "Connect the right parties", "Engage suitable buyers, suppliers, distributors, importers or specialist partners."],
      ["4", "Coordinate execution", "Support discussions, documents, RFQs, follow-up and project milestones through the commercial process."],
    ],
    principleTitle: "Practical coordination, not unrealistic promises",
    principleBody:
      "TGPU Gulf Advisory does not guarantee regulatory approval, customs clearance or commercial outcomes. We help structure the process, prepare information and coordinate with the appropriate parties so decisions can be made on a clearer basis.",
    contactTitle: "Have a Malaysia–GCC opportunity to discuss?",
    contactBody:
      "Send the company, country, product or requirement and what you are looking for. We can review the opportunity and identify the sensible next step.",
    whatsapp: "WhatsApp TGPU Gulf",
    call: "Call",
    email: "Email",
    founder: "Muhammad Mamduh Bin Saffin",
    role: "Founder | GCC Market Entry Consultant",
    location: "Kuala Lumpur, Malaysia",
    registration: "SSM Reg. No. CA0427558-D",
    footerLine: "Malaysia ↔ Saudi Arabia & GCC Market Entry and Trade Advisory",
    whatsappText: "Hello TGPU Gulf Advisory, I would like to discuss a Malaysia–Saudi/GCC business opportunity.",
  },
  bm: {
    dir: "ltr" as const,
    nav: { services: "Perkhidmatan", corridors: "Laluan Perdagangan", process: "Cara Kami Bekerja", contact: "Hubungi" },
    language: "العربية",
    languageHref: "/ar/",
    eyebrow: "Malaysia ↔ Arab Saudi & GCC",
    title: "Khidmat Kemasukan Pasaran & Perdagangan Malaysia–Arab Saudi dan GCC",
    intro:
      "Sokongan rentas sempadan yang praktikal untuk syarikat yang meneroka Malaysia dan pasaran Teluk — daripada kesiapsiagaan pasaran dan koordinasi dokumentasi hingga pencarian pembekal, pembeli dan pengenalan komersial.",
    primary: "Bincang Peluang",
    secondary: "E-mel TGPU Gulf",
    trust: ["Perniagaan berdaftar di Malaysia", "Kuala Lumpur, Malaysia", "English • Bahasa Melayu • العربية"],
    servicesTitle: "Sokongan rentas sempadan berdasarkan keperluan sebenar",
    servicesIntro:
      "Kami menyelaras laluan komersial, manakala kelulusan rasmi dikendalikan oleh pihak berlesen, pihak berkuasa dan pakar yang sesuai apabila diperlukan.",
    services: [
      ["Kemasukan Pasaran Saudi & GCC", "Penilaian awal, perancangan laluan, semakan produk dan kesiapsiagaan dokumentasi."],
      ["Fasilitasi Perdagangan", "Pengenalan pembekal dan pembeli, koordinasi RFQ, perbincangan komersial dan susulan transaksi."],
      ["Koordinasi Laluan Regulatori", "Kenal pasti keperluan yang berkemungkinan dan koordinasi dokumen dengan pihak tempatan/pakar yang sesuai."],
      ["Pencarian Pembekal & Pembeli", "Carian, saringan awal dan penglibatan pengilang, pengimport, pengedar dan pembeli."],
      ["Dokumentasi Komersial", "Pengenalan syarikat, enquiry pack, spesifikasi, RFQ dan dokumen komersial sokongan."],
      ["Koordinasi Projek", "Komunikasi rentas sempadan, penjejakan dokumen, garis masa dan susulan pihak berkepentingan."],
    ],
    corridorsTitle: "Sokongan komersial dua hala Malaysia–GCC",
    malaysiaToGcc: "Malaysia → Arab Saudi / GCC",
    malaysiaToGccBody:
      "Untuk pengilang dan jenama Malaysia yang mencari pengedar, pengimport, saluran marketplace atau laluan kemasukan pasaran yang tersusun ke Arab Saudi dan GCC.",
    gccToMalaysia: "Arab Saudi / GCC → Malaysia",
    gccToMalaysiaBody:
      "Untuk syarikat Teluk yang mencari pembekal, produk, rakan pengilang atau peluang komersial dari Malaysia, dengan pencarian dan koordinasi di pihak Malaysia.",
    sectorsTitle: "Berpandukan peluang dan kategori",
    sectorsBody:
      "Kami boleh menilai peluang dalam bahan makanan, produk pengguna, kesihatan & wellness, e-dagang, pembuatan dan kategori komersial lain. Produk terkawal tetap tertakluk kepada keperluan pasaran masing-masing.",
    processTitle: "Proses yang jelas sebelum komitmen besar",
    process: [
      ["1", "Tetapkan peluang", "Pembeli, pembekal, produk, pasaran, kuantiti, objektif dan keperluan komersial."],
      ["2", "Semak laluan", "Semak kesesuaian komersial, jurang dokumen, laluan regulatori dan keperluan counterpart."],
      ["3", "Hubungkan pihak yang sesuai", "Libatkan pembeli, pembekal, pengedar, pengimport atau rakan pakar yang berkaitan."],
      ["4", "Selaras pelaksanaan", "Sokong perbincangan, dokumen, RFQ, susulan dan milestone sepanjang proses komersial."],
    ],
    principleTitle: "Koordinasi praktikal tanpa janji yang tidak realistik",
    principleBody:
      "TGPU Gulf Advisory tidak menjamin kelulusan regulatori, pelepasan kastam atau hasil komersial. Kami membantu menyusun proses, menyediakan maklumat dan menyelaras pihak yang sesuai supaya keputusan dapat dibuat dengan lebih jelas.",
    contactTitle: "Ada peluang Malaysia–GCC untuk dibincangkan?",
    contactBody:
      "Hantar nama syarikat, negara, produk atau keperluan dan apa yang anda cari. Kami boleh menilai peluang tersebut dan cadangkan langkah seterusnya yang sesuai.",
    whatsapp: "WhatsApp TGPU Gulf",
    call: "Telefon",
    email: "E-mel",
    founder: "Muhammad Mamduh Bin Saffin",
    role: "Founder | GCC Market Entry Consultant",
    location: "Kuala Lumpur, Malaysia",
    registration: "No. Pendaftaran SSM CA0427558-D",
    footerLine: "Khidmat Kemasukan Pasaran & Perdagangan Malaysia ↔ Arab Saudi dan GCC",
    whatsappText: "Salam TGPU Gulf Advisory, saya ingin berbincang tentang peluang perniagaan Malaysia–Saudi/GCC.",
  },
  ar: {
    dir: "rtl" as const,
    nav: { services: "خدماتنا", corridors: "المسارات التجارية", process: "آلية العمل", contact: "تواصل معنا" },
    language: "English",
    languageHref: "/",
    eyebrow: "ماليزيا ↔ السعودية ودول الخليج",
    title: "استشارات دخول السوق وتيسير التجارة بين ماليزيا والسعودية ودول الخليج",
    intro:
      "دعم عملي للشركات التي تستكشف الفرص التجارية بين ماليزيا والخليج، من دراسة مسار دخول السوق وتجهيز المستندات إلى البحث عن الموردين والمشترين والتنسيق التجاري.",
    primary: "ناقش فرصة تجارية",
    secondary: "راسل TGPU Gulf",
    trust: ["منشأة مسجلة في ماليزيا", "كوالالمبور، ماليزيا", "العربية • English • Bahasa Melayu"],
    servicesTitle: "دعم تجاري مبني على متطلبات الفرصة الفعلية",
    servicesIntro:
      "ننسق المسار التجاري، بينما تتولى الجهات المرخصة والسلطات والمختصون الإجراءات الرسمية والموافقات المطلوبة عند الحاجة.",
    services: [
      ["دخول السوق السعودي والخليجي", "دراسة أولية للسوق والمسار المناسب للمنتج ومتطلبات الجاهزية والمستندات."],
      ["تيسير التجارة", "ربط الموردين والمشترين، تنسيق طلبات الأسعار والمناقشات التجارية والمتابعة."],
      ["تنسيق المسار التنظيمي", "تحديد المتطلبات المتوقعة وتنسيق المستندات مع الأطراف المحلية والمختصين المناسبين."],
      ["البحث عن الموردين والمشترين", "البحث والفرز الأولي والتواصل مع المصنعين والمستوردين والموزعين والمشترين."],
      ["المستندات التجارية", "إعداد ملفات التعريف والاستفسارات والمواصفات وطلبات الأسعار والمستندات التجارية المساندة."],
      ["إدارة وتنسيق المشاريع", "تنسيق التواصل والمستندات والجداول الزمنية والمتابعة بين الأطراف في ماليزيا والخليج."],
    ],
    corridorsTitle: "دعم تجاري ثنائي الاتجاه بين ماليزيا والخليج",
    malaysiaToGcc: "ماليزيا ←→ السعودية / الخليج",
    malaysiaToGccBody:
      "للشركات والعلامات الماليزية الباحثة عن مستوردين أو موزعين أو قنوات بيع أو مسار منظم لدخول السعودية وأسواق الخليج.",
    gccToMalaysia: "السعودية / الخليج → ماليزيا",
    gccToMalaysiaBody:
      "للشركات الخليجية الباحثة عن موردين أو منتجات أو مصانع أو شركاء تجاريين في ماليزيا، مع البحث والتنسيق من الجانب الماليزي.",
    sectorsTitle: "نبدأ من الفرصة ومتطلبات القطاع",
    sectorsBody:
      "يمكننا دراسة فرص في المكونات الغذائية والمنتجات الاستهلاكية والصحة والعافية والتجارة الإلكترونية والتصنيع وغيرها من القطاعات القابلة للتنفيذ تجارياً، مع الالتزام بمتطلبات المنتجات المنظمة في كل سوق.",
    processTitle: "مسار واضح قبل الالتزامات الكبيرة",
    process: [
      ["1", "تحديد الفرصة", "المشتري أو المورد، المنتج، السوق، الكمية، الهدف والمتطلبات التجارية."],
      ["2", "مراجعة المسار", "دراسة الملاءمة التجارية ونواقص المستندات والمسار التنظيمي ومتطلبات الطرف المقابل."],
      ["3", "ربط الأطراف المناسبة", "التواصل مع المشترين أو الموردين أو الموزعين أو المستوردين أو المختصين المناسبين."],
      ["4", "تنسيق التنفيذ", "متابعة المناقشات والمستندات وطلبات الأسعار والمراحل الرئيسية خلال العملية التجارية."],
    ],
    principleTitle: "تنسيق عملي دون وعود غير واقعية",
    principleBody:
      "لا تضمن TGPU Gulf Advisory الموافقات التنظيمية أو التخليص الجمركي أو النتائج التجارية. دورنا هو تنظيم المسار وتجهيز المعلومات والتنسيق مع الجهات المناسبة لدعم قرار تجاري أوضح.",
    contactTitle: "لديك فرصة تجارية بين ماليزيا والخليج؟",
    contactBody:
      "أرسل اسم الشركة والدولة والمنتج أو الطلب وما الذي تبحث عنه. سنراجع الفرصة ونحدد الخطوة التالية المناسبة.",
    whatsapp: "واتساب TGPU Gulf",
    call: "اتصال",
    email: "البريد الإلكتروني",
    founder: "محمد ممدوح بن صافين",
    role: "المؤسس | مستشار دخول أسواق الخليج",
    location: "كوالالمبور، ماليزيا",
    registration: "رقم التسجيل الماليزي CA0427558-D",
    footerLine: "استشارات دخول السوق والتجارة بين ماليزيا ↔ السعودية ودول الخليج",
    whatsappText: "السلام عليكم، أرغب في مناقشة فرصة تجارية بين السعودية/الخليج وماليزيا مع TGPU Gulf Advisory.",
  },
}

const icons = [Globe2, Handshake, FileText, Search, Building2, Ship]

export function TgpuGulfHome({ lang = "en" }: { lang?: Lang }) {
  const t = copy[lang]
  const whatsapp = `https://wa.me/${PHONE_TEL.replace("+", "")}?text=${encodeURIComponent(t.whatsappText)}`

  return (
    <main dir={t.dir} lang={lang === "bm" ? "ms" : lang} className="min-h-screen overflow-x-hidden">
      <header className="sticky top-0 z-50 border-b border-emerald-950/10 bg-[#fffdf8]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <a href={lang === "ar" ? "/ar/" : "/"} className="min-w-0">
            <div className="text-sm font-black tracking-[0.18em] text-emerald-950 sm:text-base">TGPU GULF ADVISORY</div>
            <div className="mt-0.5 text-[11px] text-emerald-900/65">Malaysia ↔ Saudi Arabia & GCC</div>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-emerald-950/80 lg:flex">
            <a href="#services" className="hover:text-emerald-700">{t.nav.services}</a>
            <a href="#corridors" className="hover:text-emerald-700">{t.nav.corridors}</a>
            <a href="#process" className="hover:text-emerald-700">{t.nav.process}</a>
            <a href="#contact" className="hover:text-emerald-700">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={t.languageHref} className="rounded-full border border-emerald-950/15 px-3 py-2 text-xs font-bold text-emerald-950 hover:bg-emerald-950/5">
              {t.language}
            </a>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="hidden rounded-full bg-emerald-900 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-emerald-800 sm:inline-flex">
              {t.primary}
            </a>
          </div>
        </div>
      </header>

      <section className="relative border-b border-emerald-950/10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(5,107,82,0.12),transparent_32rem),radial-gradient(circle_at_92%_20%,rgba(196,145,45,0.16),transparent_28rem)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-900/15 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-emerald-900">
              <Globe2 className="h-4 w-4" /> {t.eyebrow}
            </div>
            <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-emerald-950 sm:text-5xl lg:text-6xl">{t.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">{t.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-emerald-900 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-950/10 hover:bg-emerald-800">
                {t.primary} <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-full border border-emerald-950/15 bg-white px-6 py-3.5 text-sm font-bold text-emerald-950 hover:bg-emerald-950/5">
                <Mail className="h-4 w-4" /> {t.secondary}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
              {t.trust.map((item) => (
                <span key={item} className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-700" />{item}</span>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl border border-emerald-950/10 bg-emerald-950 p-7 text-white shadow-2xl shadow-emerald-950/15 lg:p-8">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">TGPU Gulf Advisory</div>
            <h2 className="mt-3 text-2xl font-black">{t.contactTitle}</h2>
            <p className="mt-3 leading-7 text-emerald-50/80">{t.contactBody}</p>
            <div className="mt-7 space-y-3 text-sm">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3 hover:bg-white/15">
                <span className="flex items-center gap-3"><Phone className="h-4 w-4" /> {PHONE_DISPLAY}</span><ArrowUpRight className="h-4 w-4" />
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3 hover:bg-white/15">
                <span className="flex items-center gap-3"><Mail className="h-4 w-4" /> {EMAIL}</span><ArrowUpRight className="h-4 w-4" />
              </a>
              <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3"><MapPin className="h-4 w-4" /> {t.location}</div>
            </div>
          </aside>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">{t.nav.services}</div>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-emerald-950 sm:text-4xl">{t.servicesTitle}</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">{t.servicesIntro}</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.services.map(([title, body], index) => {
            const Icon = icons[index]
            return (
              <article key={title} className="rounded-3xl border border-emerald-950/10 bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-900 text-white"><Icon className="h-5 w-5" /></div>
                <h3 className="mt-5 text-lg font-black text-emerald-950">{title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{body}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section id="corridors" className="border-y border-emerald-950/10 bg-emerald-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">Malaysia ↔ GCC</div>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{t.corridorsTitle}</h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <div className="flex items-center gap-3 text-amber-300"><Ship className="h-5 w-5" /><span className="text-sm font-bold">Export & Market Entry</span></div>
              <h3 className="mt-4 text-2xl font-black">{t.malaysiaToGcc}</h3>
              <p className="mt-3 leading-8 text-emerald-50/80">{t.malaysiaToGccBody}</p>
            </article>
            <article className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <div className="flex items-center gap-3 text-amber-300"><Search className="h-5 w-5" /><span className="text-sm font-bold">Sourcing & Commercial Matching</span></div>
              <h3 className="mt-4 text-2xl font-black">{t.gccToMalaysia}</h3>
              <p className="mt-3 leading-8 text-emerald-50/80">{t.gccToMalaysiaBody}</p>
            </article>
          </div>
          <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-7">
            <h3 className="text-xl font-black">{t.sectorsTitle}</h3>
            <p className="mt-3 max-w-5xl leading-8 text-emerald-50/80">{t.sectorsBody}</p>
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">{t.nav.process}</div>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-emerald-950 sm:text-4xl">{t.processTitle}</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {t.process.map(([number, title, body]) => (
            <article key={number} className="rounded-3xl border border-emerald-950/10 bg-white p-6">
              <div className="text-3xl font-black text-amber-600">{number}</div>
              <h3 className="mt-4 text-lg font-black text-emerald-950">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{body}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-3xl border border-amber-600/20 bg-amber-50 p-7">
          <div className="flex items-start gap-4">
            <Handshake className="mt-1 h-6 w-6 shrink-0 text-amber-700" />
            <div>
              <h3 className="text-xl font-black text-emerald-950">{t.principleTitle}</h3>
              <p className="mt-2 max-w-5xl leading-8 text-slate-700">{t.principleBody}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-emerald-950/10 bg-[#f3f8f3]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[1fr_0.8fr] lg:px-8 lg:py-20">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">{t.nav.contact}</div>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-emerald-950 sm:text-4xl">{t.contactTitle}</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{t.contactBody}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-emerald-900 px-6 py-3.5 text-sm font-bold text-white hover:bg-emerald-800"><Phone className="h-4 w-4" />{t.whatsapp}</a>
              <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 rounded-full border border-emerald-950/15 bg-white px-6 py-3.5 text-sm font-bold text-emerald-950"><Phone className="h-4 w-4" />{t.call}</a>
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-full border border-emerald-950/15 bg-white px-6 py-3.5 text-sm font-bold text-emerald-950"><Mail className="h-4 w-4" />{t.email}</a>
            </div>
          </div>
          <div className="rounded-3xl border border-emerald-950/10 bg-white p-7 shadow-sm">
            <div className="text-xl font-black text-emerald-950">{t.founder}</div>
            <div className="mt-1 text-sm font-semibold text-amber-700">{t.role}</div>
            <div className="mt-6 space-y-3 text-sm text-slate-700">
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-emerald-800" /><a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a></div>
              <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-emerald-800" /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div>
              <div className="flex items-center gap-3"><Globe2 className="h-4 w-4 text-emerald-800" /><a href={WEBSITE}>{WEBSITE.replace("https://", "")}</a></div>
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-emerald-800" />{t.location}</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-emerald-950 text-emerald-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm lg:flex-row lg:items-end lg:justify-between lg:px-8">
          <div>
            <div className="font-black tracking-[0.14em]">TGPU GULF ADVISORY</div>
            <div className="mt-2 text-emerald-50/65">{t.footerLine}</div>
          </div>
          <div className="space-y-1 text-emerald-50/65 lg:text-end">
            <div>{PHONE_DISPLAY} · {EMAIL}</div>
            <div>{t.registration} · {t.location}</div>
          </div>
        </div>
      </footer>
    </main>
  )
}
