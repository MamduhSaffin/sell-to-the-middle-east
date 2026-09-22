"use client"

import { useEffect, useMemo, useState } from "react"
import { createPortal } from "react-dom"
import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  Languages,
  PackageSearch,
  Route,
  SearchCheck,
  ShieldCheck,
} from "lucide-react"
import { SITE_BASE_PATH } from "@/lib/site"

type Lang = "en" | "bm" | "ar"
type Category = "general" | "beauty" | "supplement" | "food" | "electronics"
type Docs = "ready" | "partial" | "early"
type Market = "saudi" | "uae" | "gcc"
type Localisation = "ready" | "planned" | "none"
type RouteChoice = "marketplace" | "distributor" | "b2b" | "retail" | "undecided"
type PilotScope = "1-3" | "4-8" | "9-15" | "full"

type Hosts = {
  method: HTMLElement
  pilot: HTMLElement
  validation: HTMLElement
  resources: HTMLElement
}

const path = (value: string) => `${SITE_BASE_PATH}${value}`

const copy = {
  en: {
    method: {
      eyebrow: "THE GCC SOFT-ENTRY METHOD",
      title: "Test the GCC without committing your entire catalogue.",
      body: "A serious GCC plan does not have to begin with a container, hundreds of SKUs or a large marketing commitment. Start with a controlled scope, verify the rules and economics, learn from real market signals, then expand selectively.",
      principle: "Start small. Verify the requirements. Test real demand. Scale what works.",
      steps: [
        ["01", "Select", "Choose a focused group of products with realistic GCC potential."],
        ["02", "Verify", "Check product classification, documentation, authority and platform requirements."],
        ["03", "Model", "Calculate compliance, freight, duties, fulfilment, fees and marketing before judging margin."],
        ["04", "Localise", "Prepare Arabic-ready product information, positioning and customer-facing content."],
        ["05", "Test", "Use a suitable route to create controlled exposure and observe genuine response."],
        ["06", "Scale", "Increase SKUs, stock, marketing or country coverage only when evidence supports it."],
      ],
      bridgeTitle: "What changes when you enter the GCC?",
      bridgeBody: "Your existing business remains the foundation. Market entry adds a GCC-ready layer around the products and operations you already have.",
      current: "Your existing business",
      gcc: "GCC layer to prepare",
      rows: [
        ["Existing products", "Selected GCC-ready SKUs"],
        ["Existing inventory", "GCC stock and fulfilment strategy"],
        ["Current product information", "Arabic / localised market-facing content"],
        ["Current pricing", "Landed-cost and channel pricing"],
        ["Current marketing", "GCC customer and buyer discovery"],
        ["Current documentation", "Market-specific compliance verification"],
      ],
    },
    pilot: {
      eyebrow: "FREE PILOT BUILDER",
      title: "Build a sensible first GCC test.",
      body: "Use this planning tool to define a manageable starting scope. It does not decide regulatory approval or guarantee market access.",
      category: "Product category",
      docs: "Documentation",
      market: "Target market",
      localisation: "Localisation",
      route: "Route to market",
      scope: "Initial SKU scope",
      options: {
        category: {
          general: "General consumer product",
          beauty: "Beauty / personal care",
          supplement: "Supplements / health",
          food: "Food / beverage",
          electronics: "Electronics / accessories",
        },
        docs: { ready: "Core file organised", partial: "Some documents ready", early: "Still gathering basics" },
        market: { saudi: "Saudi Arabia", uae: "UAE", gcc: "Not decided / wider GCC" },
        localisation: { ready: "Arabic/localised content ready", planned: "Planned", none: "Not started" },
        route: { marketplace: "Marketplace", distributor: "Importer / distributor", b2b: "Direct B2B", retail: "Retail partnership", undecided: "Not decided" },
        scope: { "1-3": "1–3 SKUs", "4-8": "4–8 SKUs", "9-15": "9–15 SKUs", full: "Full catalogue" },
      },
      result: "Suggested pilot structure",
      strong: "Good base for a controlled pilot",
      developing: "Close a few preparation gaps first",
      early: "Reduce uncertainty before spending",
      next: "Priority actions",
      disclaimer: "Planning guidance only. Exact regulatory, customs, tax, product-registration and marketplace requirements depend on the product, seller structure and current rules.",
    },
    validation: {
      eyebrow: "MARKET VALIDATION LOOP",
      title: "A listing is not evidence of demand.",
      body: "Market validation means learning from what real customers, buyers or distribution partners actually respond to. Treat the first launch as a learning loop, not proof that the market is already won.",
      stages: ["Visibility", "Engagement", "Demand signals", "Learning", "Optimisation", "Expansion"],
      signalsTitle: "Useful early signals",
      signals: ["Qualified enquiries", "Add-to-cart / conversion behaviour", "Orders and repeat interest", "Buyer or distributor feedback", "Price resistance", "High-performing SKUs", "Customer questions", "Returns or fulfilment friction"],
    },
    resources: {
      eyebrow: "MORE GCC RESOURCES",
      title: "Useful beyond business market entry",
      body: "These free resources remain available, but they are kept separate from the main business market-entry journey.",
      jobs: ["Middle East Jobs", "Official employer career portals and recruitment-scam safety notes.", "/jobs-middle-east/", "Open jobs resource"],
      study: ["Study & Scholarships", "Official university, admissions, scholarship and funding links across the Gulf.", "/study-middle-east/", "Open study resource"],
    },
  },
  bm: {
    method: {
      eyebrow: "KAEDAH SOFT-ENTRY GCC",
      title: "Uji pasaran GCC tanpa terus komited seluruh katalog.",
      body: "Pelan GCC yang serius tidak semestinya bermula dengan kontena, ratusan SKU atau bajet pemasaran yang besar. Mulakan dengan skop terkawal, sahkan peraturan dan ekonomi, belajar daripada signal pasaran sebenar, kemudian scale secara terpilih.",
      principle: "Mula kecil. Sahkan keperluan. Uji demand sebenar. Scale apa yang berfungsi.",
      steps: [
        ["01", "Pilih", "Pilih kumpulan produk fokus yang mempunyai potensi GCC yang realistik."],
        ["02", "Sahkan", "Semak klasifikasi produk, dokumen, pihak berkuasa dan syarat platform."],
        ["03", "Kira", "Kira pematuhan, freight, duti, fulfilment, fee dan pemasaran sebelum menilai margin."],
        ["04", "Lokalisasi", "Sediakan maklumat produk, positioning dan kandungan pelanggan yang sesuai termasuk Arabic-ready."],
        ["05", "Uji", "Gunakan laluan pasaran yang sesuai untuk exposure terkawal dan lihat respons sebenar."],
        ["06", "Scale", "Tambah SKU, stok, pemasaran atau negara hanya apabila evidence menyokongnya."],
      ],
      bridgeTitle: "Apa yang berubah apabila masuk ke GCC?",
      bridgeBody: "Bisnes sedia ada kekal sebagai asas. Market entry menambah GCC-ready layer di sekeliling produk dan operasi yang anda sudah bina.",
      current: "Bisnes anda sekarang",
      gcc: "GCC layer untuk disediakan",
      rows: [
        ["Produk sedia ada", "SKU terpilih yang sesuai untuk GCC"],
        ["Inventori sedia ada", "Strategi stok dan fulfilment GCC"],
        ["Maklumat produk sekarang", "Kandungan Arabic / localised untuk pasaran"],
        ["Harga semasa", "Landed-cost dan channel pricing"],
        ["Pemasaran semasa", "GCC customer dan buyer discovery"],
        ["Dokumentasi semasa", "Semakan compliance khusus pasaran"],
      ],
    },
    pilot: {
      eyebrow: "PILOT BUILDER PERCUMA",
      title: "Bina ujian GCC pertama yang lebih terkawal.",
      body: "Gunakan alat ini untuk menentukan skop permulaan yang manageable. Ia bukan keputusan kelulusan regulatori dan tidak menjamin market access.",
      category: "Kategori produk",
      docs: "Dokumentasi",
      market: "Pasaran sasaran",
      localisation: "Lokalisasi",
      route: "Laluan pasaran",
      scope: "Skop SKU awal",
      options: {
        category: { general: "Produk pengguna umum", beauty: "Kecantikan / penjagaan diri", supplement: "Suplemen / kesihatan", food: "Makanan / minuman", electronics: "Elektronik / aksesori" },
        docs: { ready: "Fail asas tersusun", partial: "Sebahagian dokumen siap", early: "Masih kumpul asas" },
        market: { saudi: "Arab Saudi", uae: "UAE", gcc: "Belum pasti / GCC lebih luas" },
        localisation: { ready: "Kandungan Arabic/localised siap", planned: "Sudah dirancang", none: "Belum bermula" },
        route: { marketplace: "Marketplace", distributor: "Importer / distributor", b2b: "Direct B2B", retail: "Retail partnership", undecided: "Belum ditentukan" },
        scope: { "1-3": "1–3 SKU", "4-8": "4–8 SKU", "9-15": "9–15 SKU", full: "Seluruh katalog" },
      },
      result: "Cadangan struktur pilot",
      strong: "Asas baik untuk controlled pilot",
      developing: "Tutup beberapa jurang persediaan dahulu",
      early: "Kurangkan ketidakpastian sebelum berbelanja",
      next: "Tindakan keutamaan",
      disclaimer: "Untuk perancangan sahaja. Keperluan regulatori, kastam, cukai, pendaftaran produk dan marketplace bergantung pada produk, struktur seller dan peraturan semasa.",
    },
    validation: {
      eyebrow: "KITARAN MARKET VALIDATION",
      title: "Listing bukan bukti demand.",
      body: "Market validation bermaksud belajar daripada respons sebenar customer, buyer atau distribution partner. Anggap launch pertama sebagai learning loop, bukan bukti bahawa pasaran sudah berjaya.",
      stages: ["Visibility", "Engagement", "Demand signals", "Learning", "Optimisation", "Expansion"],
      signalsTitle: "Signal awal yang berguna",
      signals: ["Qualified enquiries", "Add-to-cart / conversion", "Orders dan repeat interest", "Maklum balas buyer / distributor", "Price resistance", "SKU berprestasi tinggi", "Soalan pelanggan", "Returns / fulfilment friction"],
    },
    resources: {
      eyebrow: "SUMBER GCC LAIN",
      title: "Berguna di luar market entry bisnes",
      body: "Sumber percuma ini masih tersedia, tetapi dipisahkan daripada perjalanan utama market entry untuk bisnes.",
      jobs: ["Jobs Timur Tengah", "Portal kerjaya rasmi majikan dan nota keselamatan scam pekerjaan.", "/jobs-middle-east/", "Buka sumber jobs"],
      study: ["Study & Scholarships", "Pautan rasmi universiti, admissions, biasiswa dan funding di negara Teluk.", "/study-middle-east/", "Buka sumber study"],
    },
  },
  ar: {
    method: {
      eyebrow: "منهج الدخول التدريجي إلى الخليج",
      title: "اختبر سوق الخليج دون الالتزام بكامل كتالوجك.",
      body: "لا يجب أن تبدأ خطة دخول الخليج الجادة بحاوية كاملة أو مئات المنتجات أو ميزانية تسويق كبيرة. ابدأ بنطاق محدود، تحقق من المتطلبات والجدوى الاقتصادية، تعلم من إشارات السوق الحقيقية، ثم توسع بشكل انتقائي.",
      principle: "ابدأ بنطاق صغير. تحقق من المتطلبات. اختبر الطلب الحقيقي. توسع فيما ينجح.",
      steps: [
        ["01", "اختر", "حدد مجموعة مركزة من المنتجات ذات إمكانات واقعية في الخليج."],
        ["02", "تحقق", "راجع تصنيف المنتج والوثائق والجهة المختصة ومتطلبات المنصة."],
        ["03", "احسب", "احسب المطابقة والشحن والرسوم والتخزين ورسوم القنوات والتسويق قبل تقييم الهامش."],
        ["04", "وطّن", "جهز معلومات المنتج والمحتوى والتموضع بما يناسب العميل والسوق العربي."],
        ["05", "اختبر", "استخدم مساراً مناسباً لإطلاق محدود ومراقبة الاستجابة الحقيقية."],
        ["06", "توسع", "زد المنتجات أو المخزون أو التسويق أو الدول فقط عندما تدعم البيانات ذلك."],
      ],
      bridgeTitle: "ما الذي يتغير عند دخول الخليج؟",
      bridgeBody: "يبقى عملك الحالي هو الأساس. دخول السوق يضيف طبقة جاهزة للخليج حول المنتجات والعمليات التي بنيتها بالفعل.",
      current: "عملك الحالي",
      gcc: "طبقة الخليج المطلوب إعدادها",
      rows: [
        ["المنتجات الحالية", "منتجات مختارة مناسبة للخليج"],
        ["المخزون الحالي", "استراتيجية المخزون والتنفيذ للخليج"],
        ["معلومات المنتج الحالية", "محتوى عربي / محلي موجه للسوق"],
        ["الأسعار الحالية", "تكلفة الوصول وتسعير القناة"],
        ["التسويق الحالي", "اكتشاف العملاء والمشترين في الخليج"],
        ["الوثائق الحالية", "تحقق من الامتثال الخاص بالسوق"],
      ],
    },
    pilot: {
      eyebrow: "أداة بناء اختبار السوق مجاناً",
      title: "ابنِ أول اختبار خليجي بنطاق منطقي.",
      body: "استخدم هذه الأداة لتحديد بداية يمكن إدارتها. ليست قرار موافقة تنظيمية ولا تضمن الوصول إلى السوق.",
      category: "فئة المنتج",
      docs: "الوثائق",
      market: "السوق المستهدف",
      localisation: "التوطين",
      route: "مسار الوصول للسوق",
      scope: "نطاق المنتجات الأولي",
      options: {
        category: { general: "منتج استهلاكي عام", beauty: "جمال / عناية شخصية", supplement: "مكملات / صحة", food: "أغذية / مشروبات", electronics: "إلكترونيات / إكسسوارات" },
        docs: { ready: "الملف الأساسي منظم", partial: "بعض الوثائق جاهزة", early: "ما زلت أجمع الأساسيات" },
        market: { saudi: "السعودية", uae: "الإمارات", gcc: "غير محدد / الخليج عموماً" },
        localisation: { ready: "المحتوى العربي / المحلي جاهز", planned: "مخطط له", none: "لم يبدأ" },
        route: { marketplace: "منصة إلكترونية", distributor: "مستورد / موزع", b2b: "B2B مباشر", retail: "شراكة تجزئة", undecided: "غير محدد" },
        scope: { "1-3": "1–3 منتجات", "4-8": "4–8 منتجات", "9-15": "9–15 منتجاً", full: "كامل الكتالوج" },
      },
      result: "هيكل الاختبار المقترح",
      strong: "قاعدة جيدة لاختبار محدود",
      developing: "أغلق بعض فجوات الاستعداد أولاً",
      early: "قلل عدم اليقين قبل الإنفاق",
      next: "الإجراءات ذات الأولوية",
      disclaimer: "للتخطيط فقط. المتطلبات التنظيمية والجمركية والضريبية وتسجيل المنتج والمنصات تعتمد على المنتج وهيكل البائع والقواعد الحالية.",
    },
    validation: {
      eyebrow: "حلقة التحقق من السوق",
      title: "إدراج المنتج ليس دليلاً على وجود الطلب.",
      body: "التحقق من السوق يعني التعلم من استجابة العملاء والمشترين وشركاء التوزيع الحقيقيين. تعامل مع الإطلاق الأول كحلقة تعلم، لا كدليل على نجاح السوق مسبقاً.",
      stages: ["الظهور", "التفاعل", "إشارات الطلب", "التعلم", "التحسين", "التوسع"],
      signalsTitle: "إشارات مبكرة مفيدة",
      signals: ["استفسارات مؤهلة", "الإضافة للسلة / التحويل", "الطلبات وتكرار الاهتمام", "ملاحظات المشتري / الموزع", "حساسية السعر", "المنتجات الأعلى أداءً", "أسئلة العملاء", "المرتجعات / صعوبات التنفيذ"],
    },
    resources: {
      eyebrow: "موارد خليجية إضافية",
      title: "موارد مفيدة خارج مسار دخول السوق التجاري",
      body: "تبقى هذه الموارد المجانية متاحة، لكنها منفصلة عن المسار الأساسي لدخول الشركات إلى السوق.",
      jobs: ["وظائف الشرق الأوسط", "بوابات التوظيف الرسمية وتنبيهات السلامة من احتيال التوظيف.", "/jobs-middle-east/", "افتح مورد الوظائف"],
      study: ["الدراسة والمنح", "روابط الجامعات والقبول والمنح والتمويل الرسمية في الخليج.", "/study-middle-east/", "افتح مورد الدراسة"],
    },
  },
} as const

export function SoftEntryEnhancement({ lang = "en" }: { lang?: Lang }) {
  const t = copy[lang]
  const rtl = lang === "ar"
  const [hosts, setHosts] = useState<Hosts | null>(null)
  const [category, setCategory] = useState<Category>("general")
  const [docs, setDocs] = useState<Docs>("partial")
  const [market, setMarket] = useState<Market>("gcc")
  const [localisation, setLocalisation] = useState<Localisation>("planned")
  const [route, setRoute] = useState<RouteChoice>("undecided")
  const [scope, setScope] = useState<PilotScope>("4-8")

  useEffect(() => {
    const main = document.querySelector("main")
    if (!main) return

    const host = (name: keyof Hosts) => {
      const selector = `[data-soft-entry-host="${name}"]`
      const existing = document.querySelector<HTMLElement>(selector)
      if (existing) return existing
      const node = document.createElement("div")
      node.dataset.softEntryHost = name
      return node
    }

    const method = host("method")
    const pilot = host("pilot")
    const validation = host("validation")
    const resources = host("resources")

    const start = document.getElementById("start")
    const readiness = document.getElementById("readiness")
    const routes = document.getElementById("routes")
    const tools = document.getElementById("tools")

    if (!method.isConnected) (start || main.firstElementChild || main).insertAdjacentElement("afterend", method)
    if (!pilot.isConnected) (readiness || start || main.lastElementChild || main).insertAdjacentElement("afterend", pilot)
    if (!validation.isConnected) {
      if (routes) routes.insertAdjacentElement("beforebegin", validation)
      else pilot.insertAdjacentElement("afterend", validation)
    }
    if (!resources.isConnected) (tools || main.lastElementChild || main).insertAdjacentElement("afterend", resources)

    setHosts({ method, pilot, validation, resources })
  }, [])

  const pilotResult = useMemo(() => {
    let score = 0
    if (docs === "ready") score += 2
    else if (docs === "partial") score += 1
    if (market !== "gcc") score += 2
    if (localisation === "ready") score += 2
    else if (localisation === "planned") score += 1
    if (route !== "undecided") score += 2
    if (scope !== "full") score += 1

    const actions: string[] = []
    if (market === "gcc") actions.push(lang === "ar" ? "اختر سوقاً واحداً كبداية بدلاً من استهداف الخليج كله دفعة واحدة." : lang === "bm" ? "Pilih satu pasaran permulaan dahulu, bukan seluruh GCC serentak." : "Choose one first market instead of targeting the whole GCC at once.")
    if (docs === "early") actions.push(lang === "ar" ? "نظّم ملف المنتج الأساسي قبل دفع رسوم التسجيل أو الإدراج." : lang === "bm" ? "Susun fail asas produk sebelum membayar registration atau listing." : "Organise the core product file before paying for registrations or listings.")
    if (localisation === "none") actions.push(lang === "ar" ? "خطط للمحتوى العربي / المحلي قبل إطلاق الواجهة الموجهة للعملاء." : lang === "bm" ? "Rancang kandungan Arabic/localised sebelum customer-facing launch." : "Plan Arabic/localised market-facing content before launch.")
    if (route === "undecided") actions.push(lang === "ar" ? "قارن المنصة والموزع وB2B والتجزئة وحدد المسار الأنسب." : lang === "bm" ? "Bandingkan marketplace, distributor, B2B dan retail sebelum pilih route." : "Compare marketplace, distributor, B2B and retail before choosing a route.")
    if (scope === "full") actions.push(lang === "ar" ? "حوّل البداية إلى مجموعة منتجات محدودة بدلاً من كامل الكتالوج." : lang === "bm" ? "Kecilkan skop kepada selected SKUs dan elakkan full catalogue untuk ujian pertama." : "Reduce the first test to selected SKUs rather than the full catalogue.")
    if (["beauty", "supplement", "food"].includes(category)) actions.push(lang === "ar" ? "تحقق من الجهة المختصة والمتطلبات الخاصة بفئة المنتج قبل أي وعد تجاري." : lang === "bm" ? "Semak authority dan category-specific requirements sebelum membuat commercial commitment." : "Verify the relevant authority and category-specific requirements before commercial commitments.")
    if (!actions.length) actions.push(lang === "ar" ? "انتقل إلى التحقق الرسمي ونموذج التكلفة ثم حدد مؤشرات نجاح الاختبار." : lang === "bm" ? "Teruskan kepada official verification, cost model dan tetapkan success signals untuk pilot." : "Move to official verification, cost modelling and define the pilot success signals.")

    return {
      heading: score >= 8 ? t.pilot.strong : score >= 5 ? t.pilot.developing : t.pilot.early,
      actions,
    }
  }, [category, docs, market, localisation, route, scope, lang, t.pilot])

  if (!hosts) return null

  const methodSection = (
    <section id="soft-entry-method" className="border-y border-emerald-950/8 bg-[#f7f1e3] py-16 lg:py-24" dir={rtl ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8a6b2d]">{t.method.eyebrow}</p>
        <div className="mt-3 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <h2 className="font-serif text-4xl font-bold tracking-[-0.03em] text-[#123b2c] sm:text-5xl">{t.method.title}</h2>
            <p className="mt-5 max-w-3xl leading-7 text-[#657168]">{t.method.body}</p>
          </div>
          <div className="rounded-[1.5rem] bg-[#123b2c] p-6 text-white shadow-lg">
            <div className="flex items-start gap-3"><ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-[#e5c985]" /><p className="text-xl font-black leading-8">{t.method.principle}</p></div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.method.steps.map(([num, title, body]) => (
            <article key={num} className="rounded-[1.4rem] border border-amber-900/10 bg-white p-5 shadow-sm">
              <span className="text-xs font-black tracking-[0.16em] text-[#9a742f]">{num}</span>
              <h3 className="mt-2 text-lg font-black text-[#123b2c]">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#657168]">{body}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-[1.7rem] border border-emerald-950/10 bg-white shadow-sm">
          <div className="border-b border-emerald-950/10 p-6 sm:p-8">
            <h3 className="text-2xl font-black text-[#123b2c]">{t.method.bridgeTitle}</h3>
            <p className="mt-2 max-w-4xl leading-7 text-[#657168]">{t.method.bridgeBody}</p>
          </div>
          <div className="grid grid-cols-2 bg-[#eef4ef] px-5 py-3 text-xs font-black uppercase tracking-[0.1em] text-[#365548] sm:px-8">
            <span>{t.method.current}</span><span>{t.method.gcc}</span>
          </div>
          {t.method.rows.map(([left, right]) => (
            <div key={left} className="grid grid-cols-2 gap-4 border-t border-emerald-950/8 px-5 py-4 text-sm sm:px-8">
              <span className="font-bold text-[#425149]">{left}</span>
              <span className="font-black text-[#123b2c]">{right}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )

  const pilotSection = (
    <section id="pilot-builder" className="bg-[#fbfaf4] py-16 lg:py-24" dir={rtl ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-9 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#9a742f]">{t.pilot.eyebrow}</p>
            <h2 className="mt-3 font-serif text-4xl font-bold tracking-[-0.03em] text-[#123b2c] sm:text-5xl">{t.pilot.title}</h2>
            <p className="mt-5 leading-7 text-[#657168]">{t.pilot.body}</p>
            <div className="mt-6 rounded-2xl border border-emerald-950/10 bg-[#eef4ef] p-5 text-xs font-bold leading-6 text-[#526159]">{t.pilot.disclaimer}</div>
          </div>

          <div className="rounded-[2rem] border border-emerald-950/10 bg-white p-6 shadow-xl sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <SelectField label={t.pilot.category} value={category} onChange={(v) => setCategory(v as Category)} options={t.pilot.options.category} />
              <SelectField label={t.pilot.docs} value={docs} onChange={(v) => setDocs(v as Docs)} options={t.pilot.options.docs} />
              <SelectField label={t.pilot.market} value={market} onChange={(v) => setMarket(v as Market)} options={t.pilot.options.market} />
              <SelectField label={t.pilot.localisation} value={localisation} onChange={(v) => setLocalisation(v as Localisation)} options={t.pilot.options.localisation} />
              <SelectField label={t.pilot.route} value={route} onChange={(v) => setRoute(v as RouteChoice)} options={t.pilot.options.route} />
              <SelectField label={t.pilot.scope} value={scope} onChange={(v) => setScope(v as PilotScope)} options={t.pilot.options.scope} />
            </div>

            <div className="mt-7 rounded-[1.5rem] bg-[#0f3829] p-6 text-white">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#e5c985]"><SearchCheck className="h-4 w-4" />{t.pilot.result}</div>
              <h3 className="mt-3 text-2xl font-black">{pilotResult.heading}</h3>
              <p className="mt-5 text-xs font-black uppercase tracking-[0.12em] text-white/60">{t.pilot.next}</p>
              <div className="mt-3 grid gap-3">
                {pilotResult.actions.map((action) => <div key={action} className="flex gap-3 text-sm leading-6 text-white/84"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#e5c985]" /><span>{action}</span></div>)}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <a href={path("/official-sources/")} className="inline-flex items-center gap-2 rounded-full bg-[#e5c985] px-4 py-2.5 text-xs font-black text-[#173426]">Official sources <ArrowRight className={`h-3.5 w-3.5 ${rtl ? "rotate-180" : ""}`} /></a>
                <a href={path("/cost-planner/")} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-xs font-black text-white">Cost planner <ArrowRight className={`h-3.5 w-3.5 ${rtl ? "rotate-180" : ""}`} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  const validationSection = (
    <section className="border-y border-emerald-950/8 bg-[#0d3023] py-16 text-white lg:py-24" dir={rtl ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#e5c985]">{t.validation.eyebrow}</p>
        <h2 className="mt-3 max-w-4xl font-serif text-4xl font-bold tracking-[-0.03em] sm:text-5xl">{t.validation.title}</h2>
        <p className="mt-5 max-w-4xl leading-7 text-white/72">{t.validation.body}</p>
        <div className="mt-9 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {t.validation.stages.map((stage, index) => <div key={stage} className="rounded-2xl border border-white/12 bg-white/6 p-4"><span className="text-xs font-black text-[#e5c985]">0{index + 1}</span><p className="mt-2 text-sm font-black">{stage}</p></div>)}
        </div>
        <div className="mt-9 rounded-[1.5rem] border border-white/12 bg-white/6 p-6">
          <h3 className="font-black">{t.validation.signalsTitle}</h3>
          <div className="mt-4 flex flex-wrap gap-2">{t.validation.signals.map((signal) => <span key={signal} className="rounded-full border border-white/12 bg-white/8 px-3 py-2 text-xs font-bold text-white/82">{signal}</span>)}</div>
        </div>
      </div>
    </section>
  )

  const resourcesSection = (
    <section className="border-y border-emerald-950/8 bg-[#f7f1e3] py-12 lg:py-16" dir={rtl ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8a6b2d]">{t.resources.eyebrow}</p>
        <div className="mt-3 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div><h2 className="font-serif text-3xl font-bold tracking-[-0.03em] text-[#123b2c] sm:text-4xl">{t.resources.title}</h2><p className="mt-3 leading-7 text-[#657168]">{t.resources.body}</p></div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[t.resources.jobs, t.resources.study].map(([title, body, href, button], index) => (
              <a key={title} href={path(href)} className="group rounded-[1.4rem] border border-amber-900/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#eef4ef] text-[#123b2c]">{index === 0 ? <Route className="h-5 w-5" /> : <Languages className="h-5 w-5" />}</div>
                <h3 className="mt-4 text-lg font-black text-[#123b2c]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#657168]">{body}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-black text-[#8a6b2d]">{button}<ArrowRight className={`h-3.5 w-3.5 ${rtl ? "rotate-180" : ""}`} /></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )

  return <>{createPortal(methodSection, hosts.method)}{createPortal(pilotSection, hosts.pilot)}{createPortal(validationSection, hosts.validation)}{createPortal(resourcesSection, hosts.resources)}</>
}

function SelectField({ label, value, onChange, options }: { label: string; value: string; onChange: (value: string) => void; options: Record<string, string> }) {
  return (
    <label className="text-sm font-black text-[#263d33]">
      {label}
      <select value={value} onChange={(e) => onChange(e.target.value)} className="mt-2 w-full rounded-xl border border-emerald-950/12 bg-[#fbfaf4] px-3 py-3 text-sm font-semibold text-[#263d33] outline-none focus:border-[#9a742f]">
        {Object.entries(options).map(([key, text]) => <option key={key} value={key}>{text}</option>)}
      </select>
    </label>
  )
}
