import { BookOpen, ExternalLink, GraduationCap, MapPin, ShieldCheck, Sparkles } from "lucide-react"

type Lang = "en" | "bm" | "ar"

type LinkItem = {
  name: string
  country: string
  kind: string
  note: Record<Lang, string>
  href: string
}

const items: LinkItem[] = [
  {
    name: "Study in Saudi",
    country: "Saudi Arabia",
    kind: "Government portal + scholarships",
    note: {
      en: "Official Saudi Ministry of Education portal for international study pathways, including full, partial and paid study options.",
      bm: "Portal rasmi Kementerian Pendidikan Saudi untuk pelajar antarabangsa, termasuk laluan biasiswa penuh, separa dan pengajian berbayar.",
      ar: "المنصة الرسمية لوزارة التعليم السعودية للدراسة الدولية، وتشمل المنح الكاملة والجزئية والدراسة المدفوعة.",
    },
    href: "https://studyinsaudi.moe.gov.sa/StudyTypes/FreeScholarships",
  },
  {
    name: "KAUST Admissions & Fellowship",
    country: "Saudi Arabia",
    kind: "Master's / PhD",
    note: {
      en: "Official KAUST graduate admissions. Admitted MS and PhD students are considered for the KAUST Fellowship according to current university terms.",
      bm: "Kemasukan pascasiswazah rasmi KAUST. Pelajar MS dan PhD yang diterima dipertimbangkan untuk KAUST Fellowship mengikut syarat semasa universiti.",
      ar: "القبول الرسمي للدراسات العليا في كاوست، مع زمالة كاوست للطلاب المقبولين وفق الشروط الحالية للجامعة.",
    },
    href: "https://admissions.kaust.edu.sa/fees-funding",
  },
  {
    name: "KFUPM International Students",
    country: "Saudi Arabia",
    kind: "Bachelor's / Master's / PhD",
    note: {
      en: "Official KFUPM information for international applicants, including tuition and scholarship information for undergraduate and graduate study.",
      bm: "Maklumat rasmi KFUPM untuk pemohon antarabangsa, termasuk yuran dan biasiswa bagi pengajian sarjana muda dan pascasiswazah.",
      ar: "معلومات رسمية من جامعة الملك فهد للبترول والمعادن للطلاب الدوليين، تشمل الرسوم والمنح للبكالوريوس والدراسات العليا.",
    },
    href: "https://www.kfupm.edu.sa/study/international-students/fees-and-scholarships",
  },
  {
    name: "Qatar University — International Student Scholarship",
    country: "Qatar",
    kind: "Undergraduate scholarship",
    note: {
      en: "Official Qatar University scholarship information for international undergraduate applicants. Awards are competitive and conditions can change by intake.",
      bm: "Maklumat rasmi biasiswa Universiti Qatar untuk pemohon sarjana muda antarabangsa. Biasiswa adalah kompetitif dan syarat boleh berubah mengikut intake.",
      ar: "معلومات المنح الرسمية بجامعة قطر للمتقدمين الدوليين لمرحلة البكالوريوس، والمنح تنافسية وقد تتغير الشروط حسب الفصل.",
    },
    href: "https://www.qu.edu.qa/en-us/students/admission/scholarships/types",
  },
  {
    name: "Hamad Bin Khalifa University",
    country: "Qatar",
    kind: "Graduate admissions + funding",
    note: {
      en: "Official HBKU graduate admissions. Funding and tuition waivers vary by college and programme, so applicants should check the exact programme page.",
      bm: "Kemasukan pascasiswazah rasmi HBKU. Pembiayaan dan pengecualian yuran berbeza mengikut kolej dan program, jadi semak halaman program yang tepat.",
      ar: "القبول الرسمي للدراسات العليا في جامعة حمد بن خليفة. يختلف التمويل والإعفاء من الرسوم حسب الكلية والبرنامج.",
    },
    href: "https://www.hbku.edu.qa/en/graduate-admissions",
  },
  {
    name: "Khalifa University Scholarships",
    country: "UAE",
    kind: "Undergraduate + graduate scholarships",
    note: {
      en: "Official scholarship information for qualified UAE and international students. Scholarship assessment is tied to admission and available awards are limited.",
      bm: "Maklumat biasiswa rasmi untuk pelajar UAE dan antarabangsa yang layak. Penilaian biasiswa berkait dengan kemasukan dan tempat adalah terhad.",
      ar: "معلومات المنح الرسمية للطلاب المؤهلين من الإمارات والطلاب الدوليين، وتخضع المنح للتقييم ضمن عملية القبول وعدد المقاعد محدود.",
    },
    href: "https://www.ku.ac.ae/scholarships-undergraduate",
  },
  {
    name: "United Arab Emirates University",
    country: "UAE",
    kind: "Undergraduate scholarships",
    note: {
      en: "Official UAEU scholarship page for new students, including international-student tuition support under current university policies.",
      bm: "Halaman biasiswa rasmi UAEU untuk pelajar baharu, termasuk sokongan yuran bagi pelajar antarabangsa mengikut polisi semasa universiti.",
      ar: "صفحة المنح الرسمية بجامعة الإمارات للطلاب الجدد، بما في ذلك دعم الرسوم للطلاب الدوليين وفق السياسات الحالية.",
    },
    href: "https://www.uaeu.ac.ae/en/admission/undergraduate-scholarships.shtml",
  },
  {
    name: "American University of Sharjah",
    country: "UAE",
    kind: "Grants + scholarships",
    note: {
      en: "Official AUS financial grants and scholarship information for undergraduate and graduate students.",
      bm: "Maklumat rasmi geran kewangan dan biasiswa AUS untuk pelajar sarjana muda dan pascasiswazah.",
      ar: "معلومات رسمية عن المنح والمساعدات المالية في الجامعة الأمريكية في الشارقة لطلاب البكالوريوس والدراسات العليا.",
    },
    href: "https://www.aus.edu/node/85126",
  },
  {
    name: "Sultan Qaboos University",
    country: "Oman",
    kind: "Postgraduate scholarships",
    note: {
      en: "Official SQU postgraduate scholarship information. Some scholarships are open to non-Omani students and may include tuition support, allowances or travel benefits.",
      bm: "Maklumat rasmi biasiswa pascasiswazah SQU. Sesetengah biasiswa terbuka kepada pelajar bukan Oman dan mungkin meliputi yuran, elaun atau perjalanan.",
      ar: "معلومات رسمية عن منح الدراسات العليا بجامعة السلطان قابوس، وبعضها متاح لغير العمانيين وقد يشمل الرسوم والمخصصات وتذاكر السفر.",
    },
    href: "https://www.squ.edu.om/ps/Scholarships",
  },
  {
    name: "University of Bahrain — International Admissions",
    country: "Bahrain",
    kind: "International admissions",
    note: {
      en: "Official University of Bahrain admissions guidance for international undergraduate and postgraduate applicants. Scholarship arrangements should be verified separately for each intake.",
      bm: "Panduan kemasukan rasmi Universiti Bahrain untuk pemohon antarabangsa. Urusan biasiswa perlu disemak secara berasingan bagi setiap intake.",
      ar: "إرشادات القبول الرسمية بجامعة البحرين للطلاب الدوليين، ويجب التحقق من ترتيبات المنح لكل دفعة على حدة.",
    },
    href: "https://www.uob.edu.bh/study/international-student/inter-std-admission/",
  },
  {
    name: "Kuwait University Admissions",
    country: "Kuwait",
    kind: "Admissions information",
    note: {
      en: "Official Kuwait University admissions information. Check the current admission announcement and applicant category before applying from outside Kuwait.",
      bm: "Maklumat kemasukan rasmi Kuwait University. Semak pengumuman intake semasa dan kategori pemohon sebelum memohon dari luar Kuwait.",
      ar: "معلومات القبول الرسمية بجامعة الكويت. تحقق من إعلان القبول الحالي وفئة المتقدم قبل التقديم من خارج الكويت.",
    },
    href: "https://www.ku.edu.kw/media-center/news/jamt-alkwyt-tfth-bab-alalthaq-llfsl-aldrasy-alawl-2027/2026-atbaraan-mn-18-ywlyw",
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
    scholarshipBody: "Scholarships can be full, partial, merit-based, programme-specific or tied directly to admission. Always read the latest intake conditions on the official page.",
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
    scholarshipBody: "Biasiswa boleh berbentuk penuh, separa, merit, khusus program atau dinilai terus semasa kemasukan. Sentiasa baca syarat intake terkini pada halaman rasmi.",
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
    scholarshipBody: "قد تكون المنح كاملة أو جزئية أو مبنية على التفوق أو مرتبطة ببرنامج محدد أو بقرار القبول. تحقق دائمًا من شروط الدفعة الحالية في الصفحة الرسمية.",
    cautionTitle: "قبل التقديم",
    cautions: [
      "لا تدفع لوكيل غير رسمي لمجرد تقديم طلب جامعي.",
      "تحقق من أن المنحة متاحة للطلاب الدوليين ولمرحلتك الدراسية.",
      "أكد متطلبات اللغة ومعادلة الشهادات وتصديق الوثائق والتأشيرة مباشرة مع المؤسسة.",
      "تتغير المواعيد من دفعة إلى أخرى، والموقع الرسمي للجامعة أو الجهة الحكومية هو المرجع النهائي.",
    ],
    open: "فتح الصفحة الرسمية",
    footer: "GCC Market Entry مصدر تعليمي مستقل. نحن لا نقدم المنح ولا نمثل الجامعات المذكورة إلا إذا أُعلن عن تعاون رسمي بشكل صريح.",
  },
}

const langLinks = [
  ["EN", "/study-middle-east/"],
  ["BM", "/bm/study-middle-east/"],
  ["العربية", "/ar/study-middle-east/"],
]

export function StudyMiddleEastPage({ lang }: { lang: Lang }) {
  const t = text[lang]
  return (
    <div dir={t.dir} className="min-h-screen bg-[#fbfaf4] text-[#14261e]">
      <header className="border-b border-emerald-950/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
          <a href={lang === "en" ? "/" : `/${lang}/`} className="font-black tracking-[-0.02em] text-[#123b2c]">GCC Market Entry</a>
          <div className="flex flex-wrap items-center gap-2">
            {langLinks.map(([label, href]) => (
              <a key={label} href={href} className="rounded-full border border-emerald-950/10 bg-white px-3 py-1.5 text-xs font-black text-[#365548] hover:bg-[#eef4ef]">{label}</a>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section className="border-b border-emerald-950/10 bg-gradient-to-br from-[#f8f7ee] via-white to-[#eef4ef]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-900/15 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#123b2c]"><GraduationCap className="h-4 w-4" /> {t.eyebrow}</span>
              <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.03] tracking-[-0.045em] sm:text-5xl lg:text-6xl">{t.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5d6b64]">{t.intro}</p>
              <div className="mt-7 flex flex-wrap gap-3 text-sm font-bold text-[#365548]">
                <span className="rounded-full bg-white px-4 py-2 ring-1 ring-emerald-950/10">{t.free}</span>
                <span className="rounded-full bg-white px-4 py-2 ring-1 ring-emerald-950/10">{t.verified}</span>
                <span className="rounded-full bg-white px-4 py-2 ring-1 ring-emerald-950/10">{t.updated}</span>
              </div>
            </div>
            <aside className="rounded-[2rem] border border-emerald-950/10 bg-[#123b2c] p-7 text-white shadow-xl shadow-emerald-950/10 sm:p-9">
              <ShieldCheck className="h-10 w-10 text-[#e0bf73]" />
              <h2 className="mt-5 text-2xl font-black">{t.cautionTitle}</h2>
              <ul className="mt-5 space-y-4 text-sm leading-6 text-white/80">
                {t.cautions.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </aside>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8a6b2d]">{t.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] sm:text-4xl">{t.scholarshipTitle}</h2>
              <p className="mt-4 leading-7 text-[#657168]">{t.scholarshipBody}</p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {items.map((item) => (
                <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="group rounded-[1.6rem] border border-emerald-950/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#2d6a4f]/35 hover:shadow-md">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-[0.08em] text-[#8a6b2d]"><MapPin className="h-3.5 w-3.5" /> {item.country}</span>
                      <h3 className="mt-3 text-xl font-black tracking-[-0.02em] group-hover:text-[#123b2c]">{item.name}</h3>
                    </div>
                    <ExternalLink className="h-4 w-4 shrink-0 text-[#6b7d70]" />
                  </div>
                  <div className="mt-3 inline-flex rounded-full bg-[#eef4ef] px-3 py-1 text-[11px] font-black uppercase tracking-[0.06em] text-[#365548]">{item.kind}</div>
                  <p className="mt-4 text-sm leading-6 text-[#657168]">{item.note[lang]}</p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-black text-[#123b2c]"><BookOpen className="h-4 w-4" /> {t.open}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-emerald-950/10 bg-[#eef4ef] py-12">
          <div className="mx-auto flex max-w-6xl items-start gap-4 px-4 sm:px-6 lg:px-8">
            <Sparkles className="mt-1 h-6 w-6 shrink-0 text-[#8a6b2d]" />
            <p className="text-sm leading-7 text-[#55675e]">{t.footer}</p>
          </div>
        </section>
      </main>
    </div>
  )
}
