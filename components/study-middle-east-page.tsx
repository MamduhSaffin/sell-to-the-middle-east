"use client"

import { useMemo, useState } from "react"
import {
  BookOpen,
  CheckCircle2,
  ExternalLink,
  Filter,
  GraduationCap,
  MapPin,
  RotateCcw,
  SearchCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

type Lang = "en" | "bm" | "ar"
type Level = "bachelor" | "master" | "phd" | "arabic-islamic"
type Funding = "full" | "partial" | "merit" | "admission"
type Country = "Saudi Arabia" | "UAE" | "Qatar" | "Oman" | "Bahrain" | "Kuwait"

type LinkItem = {
  name: string
  country: Country
  kind: Record<Lang, string>
  note: Record<Lang, string>
  levels: Level[]
  funding: Funding[]
  href: string
}

const items: LinkItem[] = [
  {
    name: "Study in Saudi",
    country: "Saudi Arabia",
    kind: { en: "Government portal + scholarships", bm: "Portal kerajaan + biasiswa", ar: "منصة حكومية + منح" },
    note: {
      en: "Official Saudi Ministry of Education portal for international study pathways, including full, partial and paid study options across participating institutions.",
      bm: "Portal rasmi Kementerian Pendidikan Saudi untuk pelajar antarabangsa, termasuk laluan biasiswa penuh, separa dan pengajian berbayar di institusi yang mengambil bahagian.",
      ar: "المنصة الرسمية لوزارة التعليم السعودية للدراسة الدولية، وتشمل المنح الكاملة والجزئية والدراسة المدفوعة في المؤسسات المشاركة.",
    },
    levels: ["bachelor", "master", "phd", "arabic-islamic"],
    funding: ["full", "partial", "admission"],
    href: "https://studyinsaudi.moe.gov.sa/StudyTypes/FreeScholarships",
  },
  {
    name: "Islamic University of Madinah",
    country: "Saudi Arabia",
    kind: { en: "International scholarships + Islamic studies", bm: "Biasiswa antarabangsa + pengajian Islam", ar: "منح دولية + دراسات إسلامية" },
    note: {
      en: "Official admission source for international scholarship applicants. The university offers bachelor's, master's and doctoral pathways and is a strong starting point for Islamic and Arabic-related study research.",
      bm: "Sumber kemasukan rasmi untuk pemohon biasiswa antarabangsa. Universiti menawarkan laluan sarjana muda, sarjana dan PhD serta menjadi titik mula penting untuk pengajian Islam dan bahasa Arab.",
      ar: "مصدر القبول الرسمي لطلاب المنح الدوليين. تقدم الجامعة مسارات البكالوريوس والماجستير والدكتوراه، وهي نقطة مهمة للبحث عن برامج الدراسات الإسلامية والعربية.",
    },
    levels: ["bachelor", "master", "phd", "arabic-islamic"],
    funding: ["full", "partial"],
    href: "https://iu.edu.sa/en-us/Deanship-Admission-Registration",
  },
  {
    name: "KAUST Admissions & Fellowship",
    country: "Saudi Arabia",
    kind: { en: "Master's / PhD fellowship", bm: "Fellowship Sarjana / PhD", ar: "زمالة ماجستير / دكتوراه" },
    note: {
      en: "Official KAUST graduate admissions and funding information. Admitted MS and PhD students are considered for the KAUST Fellowship according to current university terms.",
      bm: "Maklumat rasmi kemasukan dan pembiayaan pascasiswazah KAUST. Pelajar MS dan PhD yang diterima dipertimbangkan untuk KAUST Fellowship mengikut syarat semasa universiti.",
      ar: "معلومات القبول والتمويل الرسمية للدراسات العليا في كاوست، مع النظر في زمالة كاوست للطلاب المقبولين وفق الشروط الحالية للجامعة.",
    },
    levels: ["master", "phd"],
    funding: ["full", "merit"],
    href: "https://admissions.kaust.edu.sa/fees-funding",
  },
  {
    name: "KFUPM International Students",
    country: "Saudi Arabia",
    kind: { en: "Bachelor's / Master's / PhD", bm: "Sarjana Muda / Sarjana / PhD", ar: "بكالوريوس / ماجستير / دكتوراه" },
    note: {
      en: "Official KFUPM information for international applicants, including tuition and scholarship information for undergraduate and graduate study.",
      bm: "Maklumat rasmi KFUPM untuk pemohon antarabangsa, termasuk yuran dan biasiswa bagi pengajian sarjana muda dan pascasiswazah.",
      ar: "معلومات رسمية من جامعة الملك فهد للبترول والمعادن للطلاب الدوليين، تشمل الرسوم والمنح للبكالوريوس والدراسات العليا.",
    },
    levels: ["bachelor", "master", "phd"],
    funding: ["merit", "partial", "admission"],
    href: "https://www.kfupm.edu.sa/study/international-students/fees-and-scholarships",
  },
  {
    name: "Qatar University — International Student Scholarship",
    country: "Qatar",
    kind: { en: "Undergraduate scholarship", bm: "Biasiswa sarjana muda", ar: "منحة بكالوريوس" },
    note: {
      en: "Official Qatar University scholarship information for international undergraduate applicants. Awards are competitive and conditions can change by intake.",
      bm: "Maklumat rasmi biasiswa Universiti Qatar untuk pemohon sarjana muda antarabangsa. Biasiswa adalah kompetitif dan syarat boleh berubah mengikut intake.",
      ar: "معلومات المنح الرسمية بجامعة قطر للمتقدمين الدوليين لمرحلة البكالوريوس، والمنح تنافسية وقد تتغير الشروط حسب الفصل.",
    },
    levels: ["bachelor"],
    funding: ["full", "merit"],
    href: "https://www.qu.edu.qa/en-us/students/admission/scholarships/types",
  },
  {
    name: "Hamad Bin Khalifa University",
    country: "Qatar",
    kind: { en: "Graduate admissions + funding", bm: "Kemasukan pascasiswazah + pembiayaan", ar: "قبول دراسات عليا + تمويل" },
    note: {
      en: "Official HBKU graduate admissions. Funding and tuition waivers vary by college and programme, so applicants should check the exact programme page.",
      bm: "Kemasukan pascasiswazah rasmi HBKU. Pembiayaan dan pengecualian yuran berbeza mengikut kolej dan program, jadi semak halaman program yang tepat.",
      ar: "القبول الرسمي للدراسات العليا في جامعة حمد بن خليفة. يختلف التمويل والإعفاء من الرسوم حسب الكلية والبرنامج.",
    },
    levels: ["master", "phd"],
    funding: ["partial", "merit", "admission"],
    href: "https://www.hbku.edu.qa/en/graduate-admissions",
  },
  {
    name: "Khalifa University Scholarships",
    country: "UAE",
    kind: { en: "Undergraduate + graduate scholarships", bm: "Biasiswa sarjana muda + pascasiswazah", ar: "منح بكالوريوس + دراسات عليا" },
    note: {
      en: "Official scholarship information for qualified UAE and international students. Scholarship assessment is tied to admission and available awards are limited.",
      bm: "Maklumat biasiswa rasmi untuk pelajar UAE dan antarabangsa yang layak. Penilaian biasiswa berkait dengan kemasukan dan tempat adalah terhad.",
      ar: "معلومات المنح الرسمية للطلاب المؤهلين من الإمارات والطلاب الدوليين، وتخضع المنح للتقييم ضمن عملية القبول وعدد المقاعد محدود.",
    },
    levels: ["bachelor", "master", "phd"],
    funding: ["partial", "merit"],
    href: "https://www.ku.ac.ae/scholarships-undergraduate",
  },
  {
    name: "United Arab Emirates University",
    country: "UAE",
    kind: { en: "Undergraduate scholarships", bm: "Biasiswa sarjana muda", ar: "منح بكالوريوس" },
    note: {
      en: "Official UAEU scholarship page for new students, including international-student tuition support under current university policies.",
      bm: "Halaman biasiswa rasmi UAEU untuk pelajar baharu, termasuk sokongan yuran bagi pelajar antarabangsa mengikut polisi semasa universiti.",
      ar: "صفحة المنح الرسمية بجامعة الإمارات للطلاب الجدد، بما في ذلك دعم الرسوم للطلاب الدوليين وفق السياسات الحالية.",
    },
    levels: ["bachelor"],
    funding: ["partial", "merit"],
    href: "https://www.uaeu.ac.ae/en/admission/undergraduate-scholarships.shtml",
  },
  {
    name: "Al Qasimia University",
    country: "UAE",
    kind: { en: "Full scholarship + Arabic & Islamic studies", bm: "Biasiswa penuh + Bahasa Arab & Pengajian Islam", ar: "منحة كاملة + العربية والدراسات الإسلامية" },
    note: {
      en: "Official Al Qasimia University admissions for international students. Its bachelor's programmes include Sharia, Foundations of Religion, Arabic Language and Literature, and Islamic Civilization, with international students admitted on scholarships under university rules.",
      bm: "Kemasukan rasmi Al Qasimia University untuk pelajar antarabangsa. Program sarjana muda termasuk Syariah, Usuluddin, Bahasa dan Kesusasteraan Arab serta Tamadun Islam, dengan pelajar antarabangsa diterima melalui biasiswa mengikut peraturan universiti.",
      ar: "القبول الرسمي للطلاب الدوليين في الجامعة القاسمية. تشمل برامج البكالوريوس الشريعة وأصول الدين واللغة العربية وآدابها والحضارة الإسلامية، ويُقبل الطلاب الدوليون على منح وفق لوائح الجامعة.",
    },
    levels: ["bachelor", "arabic-islamic"],
    funding: ["full"],
    href: "https://www.alqasimia.ac.ae/en/AdmissionRegistration/Bachelor/Pages/AdmissionRequirements.aspx",
  },
  {
    name: "American University of Sharjah",
    country: "UAE",
    kind: { en: "Grants + scholarships", bm: "Geran + biasiswa", ar: "مساعدات مالية + منح" },
    note: {
      en: "Official AUS financial grants and scholarship information for undergraduate and graduate students.",
      bm: "Maklumat rasmi geran kewangan dan biasiswa AUS untuk pelajar sarjana muda dan pascasiswazah.",
      ar: "معلومات رسمية عن المنح والمساعدات المالية في الجامعة الأمريكية في الشارقة لطلاب البكالوريوس والدراسات العليا.",
    },
    levels: ["bachelor", "master", "phd"],
    funding: ["partial", "merit"],
    href: "https://www.aus.edu/node/85126",
  },
  {
    name: "Sultan Qaboos University",
    country: "Oman",
    kind: { en: "Postgraduate scholarships", bm: "Biasiswa pascasiswazah", ar: "منح دراسات عليا" },
    note: {
      en: "Official SQU postgraduate scholarship information. Some scholarships are open to non-Omani students and may include tuition support, allowances or travel benefits.",
      bm: "Maklumat rasmi biasiswa pascasiswazah SQU. Sesetengah biasiswa terbuka kepada pelajar bukan Oman dan mungkin meliputi yuran, elaun atau perjalanan.",
      ar: "معلومات رسمية عن منح الدراسات العليا بجامعة السلطان قابوس، وبعضها متاح لغير العمانيين وقد يشمل الرسوم والمخصصات وتذاكر السفر.",
    },
    levels: ["master", "phd"],
    funding: ["full", "partial", "merit"],
    href: "https://www.squ.edu.om/ps/Scholarships",
  },
  {
    name: "University of Bahrain — International Admissions",
    country: "Bahrain",
    kind: { en: "International admissions", bm: "Kemasukan antarabangsa", ar: "قبول دولي" },
    note: {
      en: "Official University of Bahrain admissions guidance for international undergraduate and postgraduate applicants. Scholarship arrangements should be verified separately for each intake.",
      bm: "Panduan kemasukan rasmi Universiti Bahrain untuk pemohon antarabangsa sarjana muda dan pascasiswazah. Urusan biasiswa perlu disemak berasingan bagi setiap intake.",
      ar: "إرشادات القبول الرسمية بجامعة البحرين للطلاب الدوليين في البكالوريوس والدراسات العليا، ويجب التحقق من ترتيبات المنح لكل دفعة على حدة.",
    },
    levels: ["bachelor", "master", "phd"],
    funding: ["admission"],
    href: "https://www.uob.edu.bh/study/international-student/inter-std-admission/",
  },
  {
    name: "Kuwait University Admissions",
    country: "Kuwait",
    kind: { en: "Admissions information", bm: "Maklumat kemasukan", ar: "معلومات القبول" },
    note: {
      en: "Official Kuwait University admissions information. Check the current admission announcement and applicant category before applying from outside Kuwait.",
      bm: "Maklumat kemasukan rasmi Kuwait University. Semak pengumuman intake semasa dan kategori pemohon sebelum memohon dari luar Kuwait.",
      ar: "معلومات القبول الرسمية بجامعة الكويت. تحقق من إعلان القبول الحالي وفئة المتقدم قبل التقديم من خارج الكويت.",
    },
    levels: ["bachelor", "master", "phd"],
    funding: ["admission"],
    href: "https://www.ku.edu.kw/",
  },
]

const text = {
  en: {
    dir: "ltr" as const,
    eyebrow: "STUDY IN THE MIDDLE EAST",
    title: "Interested in studying in the Middle East?",
    intro: "Start from official university and government sources. This page gathers verified links for admissions, scholarships and funding opportunities across major GCC study destinations.",
    free: "Free official links",
    verified: "Official-source first",
    updated: "Checked 20 Sep 2026",
    scholarshipTitle: "Scholarships & admissions by country",
    scholarshipBody: "Use the filters to narrow the directory by study level, scholarship type and country. Scholarship availability can change by intake, programme and applicant profile.",
    filterTitle: "Find the right study route",
    levelLabel: "Study level",
    fundingLabel: "Funding / scholarship",
    countryLabel: "Country",
    all: "All",
    level: { bachelor: "Bachelor", master: "Master", phd: "PhD", "arabic-islamic": "Arabic & Islamic Studies" },
    funding: { full: "Full scholarship available", partial: "Partial / tuition support", merit: "Merit / competitive", admission: "Admissions only" },
    reset: "Reset filters",
    showing: "Showing",
    opportunities: "official opportunities",
    noResults: "No exact match yet. Reset a filter or check the broader official portals while we continue expanding the directory.",
    cautionTitle: "Before you apply",
    cautions: [
      "Do not pay an unofficial agent just to submit a university application.",
      "Check whether the scholarship is open to international applicants and to your level of study.",
      "Confirm language tests, academic equivalency, document attestation and visa requirements directly with the institution.",
      "Deadlines change by intake. The official university or government portal is the final reference.",
    ],
    open: "Open official page",
    footer: "GCC Market Entry is an independent educational resource. We do not award scholarships and are not affiliated with the universities listed unless a collaboration is explicitly confirmed.",
  },
  bm: {
    dir: "ltr" as const,
    eyebrow: "BELAJAR DI TIMUR TENGAH",
    title: "Berminat untuk belajar di Timur Tengah?",
    intro: "Mulakan dengan sumber rasmi universiti dan kerajaan. Halaman ini mengumpulkan pautan yang disemak untuk kemasukan, biasiswa dan pembiayaan di destinasi pengajian utama GCC.",
    free: "Pautan rasmi percuma",
    verified: "Utamakan sumber rasmi",
    updated: "Disemak 20 Sep 2026",
    scholarshipTitle: "Biasiswa & kemasukan mengikut negara",
    scholarshipBody: "Gunakan penapis untuk mengecilkan pilihan mengikut tahap pengajian, jenis biasiswa dan negara. Ketersediaan biasiswa boleh berubah mengikut intake, program dan profil pemohon.",
    filterTitle: "Cari laluan pengajian yang sesuai",
    levelLabel: "Tahap pengajian",
    fundingLabel: "Pembiayaan / biasiswa",
    countryLabel: "Negara",
    all: "Semua",
    level: { bachelor: "Sarjana Muda", master: "Sarjana", phd: "PhD", "arabic-islamic": "Bahasa Arab & Pengajian Islam" },
    funding: { full: "Biasiswa penuh tersedia", partial: "Separa / bantuan yuran", merit: "Merit / kompetitif", admission: "Kemasukan sahaja" },
    reset: "Set semula penapis",
    showing: "Menunjukkan",
    opportunities: "peluang rasmi",
    noResults: "Belum ada padanan tepat. Set semula satu penapis atau semak portal rasmi yang lebih umum sementara direktori ini terus dikembangkan.",
    cautionTitle: "Sebelum memohon",
    cautions: [
      "Jangan bayar ejen tidak rasmi hanya untuk menghantar permohonan universiti.",
      "Semak sama ada biasiswa terbuka kepada pelajar antarabangsa dan tahap pengajian anda.",
      "Sahkan syarat bahasa, kesetaraan akademik, pengesahan dokumen dan visa terus dengan institusi.",
      "Tarikh tutup berubah mengikut intake. Portal rasmi universiti atau kerajaan ialah rujukan akhir.",
    ],
    open: "Buka halaman rasmi",
    footer: "GCC Market Entry ialah sumber pendidikan bebas. Kami tidak menganugerahkan biasiswa dan tidak berafiliasi dengan universiti yang disenaraikan kecuali kerjasama dinyatakan secara rasmi.",
  },
  ar: {
    dir: "rtl" as const,
    eyebrow: "الدراسة في الشرق الأوسط",
    title: "هل ترغب في الدراسة في الشرق الأوسط؟",
    intro: "ابدأ من المصادر الرسمية للجامعات والجهات الحكومية. تجمع هذه الصفحة روابط موثقة للقبول والمنح والتمويل في أبرز وجهات الدراسة بدول الخليج.",
    free: "روابط رسمية مجانية",
    verified: "الأولوية للمصادر الرسمية",
    updated: "تم التحقق 20 سبتمبر 2026",
    scholarshipTitle: "المنح والقبول حسب الدولة",
    scholarshipBody: "استخدم المرشحات لتحديد النتائج حسب المرحلة الدراسية ونوع المنحة والدولة. قد تتغير المنح حسب الدفعة والبرنامج وملف المتقدم.",
    filterTitle: "ابحث عن مسار الدراسة المناسب",
    levelLabel: "المرحلة الدراسية",
    fundingLabel: "التمويل / المنحة",
    countryLabel: "الدولة",
    all: "الكل",
    level: { bachelor: "البكالوريوس", master: "الماجستير", phd: "الدكتوراه", "arabic-islamic": "العربية والدراسات الإسلامية" },
    funding: { full: "تتوفر منحة كاملة", partial: "منحة جزئية / دعم الرسوم", merit: "تفوق / تنافسية", admission: "قبول فقط" },
    reset: "إعادة ضبط المرشحات",
    showing: "عرض",
    opportunities: "فرصة رسمية",
    noResults: "لا توجد مطابقة دقيقة حاليًا. أعد ضبط أحد المرشحات أو استخدم البوابات الرسمية العامة بينما نواصل توسيع الدليل.",
    cautionTitle: "قبل التقديم",
    cautions: [
      "لا تدفع لوكيل غير رسمي لمجرد تقديم طلب جامعي.",
      "تحقق من أن المنحة متاحة للطلاب الدوليين ولمرحلتك الدراسية.",
      "أكد متطلبات اللغة ومعادلة الشهادات وتصديق الوثائق والتأشيرة مباشرة مع المؤسسة.",
      "تتغير المواعيد من دفعة إلى أخرى، والموقع الرسمي للجامعة أو الجهة الحكومية هو المرجع النهائي.",
    ],
    open: "فتح الصفحة الرسمية",
    footer: "GCC Market Entry مورد تعليمي مستقل. نحن لا نقدم المنح ولا ننتمي إلى الجامعات المذكورة إلا إذا تم الإعلان صراحة عن تعاون رسمي.",
  },
} as const

const countryNames: Record<Lang, Record<Country, string>> = {
  en: { "Saudi Arabia": "Saudi Arabia", UAE: "UAE", Qatar: "Qatar", Oman: "Oman", Bahrain: "Bahrain", Kuwait: "Kuwait" },
  bm: { "Saudi Arabia": "Arab Saudi", UAE: "UAE", Qatar: "Qatar", Oman: "Oman", Bahrain: "Bahrain", Kuwait: "Kuwait" },
  ar: { "Saudi Arabia": "السعودية", UAE: "الإمارات", Qatar: "قطر", Oman: "عُمان", Bahrain: "البحرين", Kuwait: "الكويت" },
}

const languageLinks = [["EN", "/study-middle-east/"], ["BM", "/bm/study-middle-east/"], ["العربية", "/ar/study-middle-east/"]] as const

export function StudyMiddleEastPage({ lang }: { lang: Lang }) {
  const t = text[lang]
  const [level, setLevel] = useState<"all" | Level>("all")
  const [funding, setFunding] = useState<"all" | Funding>("all")
  const [country, setCountry] = useState<"all" | Country>("all")

  const filtered = useMemo(() => items.filter((item) => {
    const matchesLevel = level === "all" || item.levels.includes(level)
    const matchesFunding = funding === "all" || item.funding.includes(funding)
    const matchesCountry = country === "all" || item.country === country
    return matchesLevel && matchesFunding && matchesCountry
  }), [level, funding, country])

  const reset = () => { setLevel("all"); setFunding("all"); setCountry("all") }

  const levelOptions: Array<["all" | Level, string]> = [["all", t.all], ["bachelor", t.level.bachelor], ["master", t.level.master], ["phd", t.level.phd], ["arabic-islamic", t.level["arabic-islamic"]]]
  const fundingOptions: Array<["all" | Funding, string]> = [["all", t.all], ["full", t.funding.full], ["partial", t.funding.partial], ["merit", t.funding.merit], ["admission", t.funding.admission]]

  return (
    <div dir={t.dir} className="min-h-screen bg-[#fbfaf4] text-[#14261e]">
      <header className="border-b border-emerald-950/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
          <a href={lang === "en" ? "/" : `/${lang}/`} className="font-black tracking-[-0.02em] text-[#123b2c]">GCC Market Entry</a>
          <div className="flex flex-wrap items-center gap-2">{languageLinks.map(([label, href]) => <a key={label} href={href} className="rounded-full border border-emerald-950/10 bg-white px-3 py-1.5 text-xs font-black text-[#365548] hover:border-[#2d6a4f]/40">{label}</a>)}</div>
        </div>
      </header>

      <main>
        <section className="border-b border-emerald-950/10 bg-gradient-to-br from-[#f8f7ee] via-white to-[#eef4ef]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-900/15 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#123b2c]"><GraduationCap className="h-4 w-4" /> {t.eyebrow}</span>
              <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.03] tracking-[-0.045em] sm:text-5xl lg:text-6xl">{t.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5d6b64]">{t.intro}</p>
              <div className="mt-7 flex flex-wrap gap-3 text-sm font-bold text-[#365548]"><span className="rounded-full bg-white px-4 py-2 ring-1 ring-emerald-950/10">{t.free}</span><span className="rounded-full bg-white px-4 py-2 ring-1 ring-emerald-950/10">{t.verified}</span><span className="rounded-full bg-white px-4 py-2 ring-1 ring-emerald-950/10">{t.updated}</span></div>
            </div>
            <aside className="rounded-[2rem] border border-emerald-950/10 bg-[#123b2c] p-7 text-white shadow-xl shadow-emerald-950/10 sm:p-9">
              <ShieldCheck className="h-10 w-10 text-[#e0bf73]" /><h2 className="mt-5 text-2xl font-black">{t.cautionTitle}</h2>
              <ul className="mt-5 space-y-4 text-sm leading-6 text-white/80">{t.cautions.map((item) => <li key={item} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#e0bf73]" /><span>{item}</span></li>)}</ul>
            </aside>
          </div>
        </section>

        <section className="border-b border-emerald-950/10 bg-white py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6 flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef4ef] text-[#123b2c]"><Filter className="h-5 w-5" /></div><div><p className="text-xs font-black uppercase tracking-[0.15em] text-[#8a6b2d]">FILTER DIRECTORY</p><h2 className="text-2xl font-black tracking-[-0.025em]">{t.filterTitle}</h2></div></div>
            <div className="grid gap-6 lg:grid-cols-3">
              <div><p className="mb-3 text-sm font-black text-[#365548]">{t.levelLabel}</p><div className="flex flex-wrap gap-2">{levelOptions.map(([value, label]) => <button key={value} type="button" onClick={() => setLevel(value)} className={`rounded-full px-4 py-2 text-sm font-bold transition ${level === value ? "bg-[#123b2c] text-white shadow-sm" : "border border-emerald-950/10 bg-[#fbfaf4] text-[#365548] hover:border-[#2d6a4f]/35"}`}>{label}</button>)}</div></div>
              <div><p className="mb-3 text-sm font-black text-[#365548]">{t.fundingLabel}</p><div className="flex flex-wrap gap-2">{fundingOptions.map(([value, label]) => <button key={value} type="button" onClick={() => setFunding(value)} className={`rounded-full px-4 py-2 text-sm font-bold transition ${funding === value ? "bg-[#123b2c] text-white shadow-sm" : "border border-emerald-950/10 bg-[#fbfaf4] text-[#365548] hover:border-[#2d6a4f]/35"}`}>{label}</button>)}</div></div>
              <div><label htmlFor={`study-country-${lang}`} className="mb-3 block text-sm font-black text-[#365548]">{t.countryLabel}</label><select id={`study-country-${lang}`} value={country} onChange={(event) => setCountry(event.target.value as "all" | Country)} className="w-full rounded-xl border border-emerald-950/15 bg-[#fbfaf4] px-4 py-3 text-sm font-bold text-[#365548] outline-none focus:border-[#2d6a4f]"><option value="all">{t.all}</option>{(Object.keys(countryNames[lang]) as Country[]).map((item) => <option key={item} value={item}>{countryNames[lang][item]}</option>)}</select></div>
            </div>
            <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-emerald-950/10 pt-5"><div className="inline-flex items-center gap-2 text-sm font-bold text-[#55675e]"><SearchCheck className="h-4 w-4 text-[#2d6a4f]" /> {t.showing} <strong className="text-[#123b2c]">{filtered.length}</strong> {t.opportunities}</div>{(level !== "all" || funding !== "all" || country !== "all") && <button type="button" onClick={reset} className="inline-flex items-center gap-2 rounded-xl border border-emerald-950/10 px-4 py-2 text-sm font-black text-[#123b2c] hover:bg-[#eef4ef]"><RotateCcw className="h-4 w-4" /> {t.reset}</button>}</div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-3xl"><p className="text-xs font-black uppercase tracking-[0.16em] text-[#8a6b2d]">{t.eyebrow}</p><h2 className="mt-3 text-3xl font-black tracking-[-0.03em] sm:text-4xl">{t.scholarshipTitle}</h2><p className="mt-4 leading-7 text-[#657168]">{t.scholarshipBody}</p></div>
            {filtered.length === 0 ? <div className="rounded-[2rem] border border-dashed border-emerald-950/20 bg-white p-8 text-center"><BookOpen className="mx-auto h-9 w-9 text-[#8a6b2d]" /><p className="mx-auto mt-4 max-w-2xl font-bold leading-7 text-[#657168]">{t.noResults}</p><button type="button" onClick={reset} className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#123b2c] px-5 py-3 text-sm font-black text-white"><RotateCcw className="h-4 w-4" /> {t.reset}</button></div> : <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{filtered.map((item) => <article key={item.name} className="flex h-full flex-col rounded-[1.6rem] border border-emerald-950/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"><div className="flex items-start justify-between gap-3"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#eef4ef] text-[#123b2c]"><GraduationCap className="h-5 w-5" /></div><span className="inline-flex items-center gap-1.5 rounded-full bg-[#f7f1e3] px-3 py-1.5 text-xs font-black text-[#8a6b2d]"><MapPin className="h-3.5 w-3.5" /> {countryNames[lang][item.country]}</span></div><h3 className="mt-5 text-xl font-black tracking-[-0.02em]">{item.name}</h3><p className="mt-2 text-xs font-black uppercase tracking-[0.08em] text-[#2d6a4f]">{item.kind[lang]}</p><p className="mt-4 flex-1 text-sm leading-6 text-[#657168]">{item.note[lang]}</p><div className="mt-5 flex flex-wrap gap-2">{item.levels.slice(0, 4).map((tag) => <span key={tag} className="rounded-full bg-[#eef4ef] px-2.5 py-1 text-[11px] font-bold text-[#365548]">{t.level[tag]}</span>)}</div><a href={item.href} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center justify-between gap-3 rounded-xl bg-[#123b2c] px-4 py-3 text-sm font-black text-white"><span>{t.open}</span><ExternalLink className="h-4 w-4 shrink-0" /></a></article>)}</div>}
          </div>
        </section>

        <section className="border-y border-amber-900/10 bg-[#f7f1e3] py-14"><div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><div className="flex items-start gap-4 rounded-[1.5rem] bg-white p-6 ring-1 ring-amber-900/10 sm:p-8"><Sparkles className="mt-1 h-7 w-7 shrink-0 text-[#8a6b2d]" /><div><h2 className="text-2xl font-black">{t.cautionTitle}</h2><p className="mt-3 leading-7 text-[#657168]">{t.scholarshipBody}</p></div></div></div></section>
      </main>

      <footer className="border-t border-white/10 bg-[#0d2b20] px-4 py-8 text-center text-xs leading-6 text-white/60">{t.footer}</footer>
    </div>
  )
}
