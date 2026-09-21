"use client"

import { useMemo, useState } from "react"
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpenCheck,
  Building2,
  Calculator,
  CheckCircle2,
  ExternalLink,
  FileCheck2,
  FileText,
  Landmark,
  Languages,
  MapPinned,
  Menu,
  Network,
  PackageSearch,
  Route,
  Scale,
  SearchCheck,
  ShieldCheck,
  Store,
  Truck,
  X,
} from "lucide-react"
import { SITE_BASE_PATH } from "@/lib/site"
import { GccBrandLogo } from "@/components/gcc-brand-logo"

type Lang = "en" | "bm" | "ar"
type Category = "general" | "beauty" | "supplement" | "food" | "electronics"
type Docs = "ready" | "partial" | "early"
type Market = "saudi" | "uae" | "gcc"

const path = (value: string) => `${SITE_BASE_PATH}${value}`

const copy = {
  en: {
    dir: "ltr" as const,
    language: "English",
    brandSub: "Independent GCC knowledge hub",
    nav: { start: "Start Here", countries: "Country Guides", routes: "Routes to Market", tools: "Free Tools", sources: "Official Sources" },
    hero: {
      eyebrow: "FREE • INDEPENDENT • MULTILINGUAL",
      title: "Enter the GCC with better information.",
      body: "A practical learning hub for Malaysian businesses exploring Saudi Arabia, the UAE and the wider Gulf. Use official-source-first guidance, country notes, readiness tools and free planning resources before you spend money or commit inventory.",
      primary: "Start the roadmap",
      secondary: "Check my readiness",
      badges: ["Free to use", "English • BM • العربية", "Official-source first"],
    },
    intro: {
      title: "Know what to verify before you pay anyone.",
      body: "GCC Market Entry is not a marketplace, regulator or paid package. It is an independent educational resource designed to help you ask better questions, understand the moving parts and verify requirements with the correct authority or platform.",
    },
    roadmap: {
      eyebrow: "START HERE",
      title: "A six-step GCC market-entry roadmap",
      steps: [
        ["01", "Check product-market fit", "Choose a small group of products with a clear value proposition and realistic cross-border economics."],
        ["02", "Choose the market", "Compare Saudi Arabia, the UAE and other GCC markets instead of assuming one route fits every brand."],
        ["03", "Map the rules", "Identify the authority, technical regulation, product-registration or marketplace requirements that may apply."],
        ["04", "Prepare the route to market", "Decide whether marketplace, importer, distributor, retailer, B2B or another model is the practical starting point."],
        ["05", "Model the real cost", "Include compliance, testing, localisation, freight, customs, fulfilment, platform fees and marketing before judging margin."],
        ["06", "Test, learn and scale", "Start with a controlled launch, measure response and expand only after the commercial and operational model makes sense."],
      ],
    },
    countries: {
      eyebrow: "COUNTRY GUIDES",
      title: "Start with the market, not the platform",
      body: "Each GCC market has its own commercial environment, authorities and operating details. Saudi Arabia and the UAE have dedicated guides now; the remaining markets will be expanded progressively.",
      live: "Open guide",
      developing: "Research section in development",
    },
    knowledge: {
      eyebrow: "KNOWLEDGE LIBRARY",
      title: "Use the section that matches your question",
      items: [
        ["Saudi compliance", "SFDA, SABER, ZATCA/FASAH and product-specific verification starting points.", "/saudi-arabia/"],
        ["UAE compliance", "MoIAT, tax, consumer-product and emirate-level starting points.", "/uae/"],
        ["Beauty & wellness", "Claims, ingredient information, product assets and category-specific preparation.", "/beauty-wellness/"],
        ["Electronics", "Specifications, compatibility, technical documentation and pricing readiness.", "/electronics/"],
        ["Guides & checklists", "Free practical guides for localisation, readiness and controlled market testing.", "/guides/"],
        ["Official sources", "A curated directory of government and institutional sources to verify current requirements.", "/official-sources/"],
      ],
    },
    checker: {
      eyebrow: "FREE READINESS CHECK",
      title: "Where should your research start?",
      body: "This is a planning tool, not an approval decision. It highlights the type of work you may need before a serious market-entry conversation.",
      category: "Product category",
      docs: "Documentation status",
      market: "Target market",
      cat: {
        general: "General consumer product",
        beauty: "Beauty / personal care",
        supplement: "Supplements / health",
        food: "Food / beverage",
        electronics: "Electronics / accessories",
      },
      doc: { ready: "Core product documents organised", partial: "Some documents available", early: "Still gathering basics" },
      markets: { saudi: "Saudi Arabia", uae: "UAE", gcc: "Not decided / wider GCC" },
      result: "Planning result",
      high: ["Good base for deeper market research", "You appear to have enough structure to move into market-specific verification. Check the official sources, route-to-market options and cost model before committing."],
      mid: ["A few preparation gaps should be closed", "Your next step is to organise product information and identify market-specific requirements before focusing on platform onboarding or commercial promises."],
      low: ["Start with the fundamentals first", "Build a clean product file, clarify the target market and use the official-source directory before paying for registrations, listings or expansion services."],
      disclaimer: "Indicative planning only. Regulatory, customs, tax and marketplace requirements can change and depend on the exact product and operating model.",
    },
    routes: {
      eyebrow: "ROUTES TO MARKET",
      title: "There is more than one way into the GCC",
      items: [
        ["Marketplace", "Useful for digital demand testing when seller and product eligibility are clear.", "Store"],
        ["Importer / distributor", "A local commercial partner may handle import, distribution and channel access under an agreed arrangement.", "Network"],
        ["Direct B2B", "Sell to a buyer, wholesaler or institutional customer rather than building a consumer storefront first.", "Building"],
        ["Retail partnership", "Suitable where physical shelf presence, local merchandising or an established retailer matters.", "Landmark"],
        ["Local entity", "A longer-term option when the commercial case justifies deeper local operations and responsibilities.", "Scale"],
        ["Licensing / strategic partner", "A partnership-led route for brands where local capabilities, manufacturing or distribution rights are central.", "Route"],
      ],
      open: "Compare routes",
    },
    tools: {
      eyebrow: "FREE TOOLS",
      title: "Plan before you spend",
      items: [
        ["Cost planner", "Build your own GCC cost estimate without using invented package prices.", "/cost-planner/"],
        ["Malaysia Export Desk", "Start with MATRADE, SME Corp, Halal Malaysia and other Malaysian export-support resources.", "/malaysia-export-desk/"],
        ["Official Source Library", "Verify current rules from authorities and official institutions before acting.", "/official-sources/"],
        ["Entry checklist", "Use a structured checklist before you commit inventory, documentation work or marketing budget.", "/guides/gcc-market-entry-checklist-malaysian-brands/"],
      ],
    },
    verify: {
      eyebrow: "VERIFY BEFORE YOU ACT",
      title: "Official sources come before sales claims.",
      body: "Where a requirement can materially affect your product, shipment, tax position or marketplace access, use the relevant authority or platform as the final reference. This website explains the pathway; it does not replace official approval or professional legal, tax or customs advice.",
      button: "Open Official Source Library",
    },
    advisory: {
      eyebrow: "OPTIONAL HUMAN SUPPORT",
      title: "Need help turning research into a commercial plan?",
      body: "GCC Market Entry remains free and independent. If you later need human support for market research, supplier or buyer sourcing, introductions or commercial coordination, you can separately explore TGPU Gulf Advisory & Trade.",
      button: "Explore TGPU Gulf",
    },
    footer: "GCC Market Entry is an independent educational resource. It is not an official government authority, marketplace, certification body or guarantee of market access.",
  },
  bm: {
    dir: "ltr" as const,
    language: "Bahasa Melayu",
    brandSub: "Pusat ilmu GCC bebas",
    nav: { start: "Mula Di Sini", countries: "Panduan Negara", routes: "Laluan Pasaran", tools: "Alat Percuma", sources: "Sumber Rasmi" },
    hero: {
      eyebrow: "PERCUMA • BEBAS • PELBAGAI BAHASA",
      title: "Masuk pasaran GCC dengan maklumat yang lebih jelas.",
      body: "Pusat pembelajaran praktikal untuk syarikat Malaysia yang meneroka Arab Saudi, UAE dan pasaran Teluk. Gunakan panduan berasaskan sumber rasmi, nota negara, alat kesiapsiagaan dan perancangan percuma sebelum mengeluarkan kos atau menghantar stok.",
      primary: "Mulakan roadmap",
      secondary: "Semak kesiapsiagaan",
      badges: ["Percuma", "BM • English • العربية", "Utamakan sumber rasmi"],
    },
    intro: {
      title: "Tahu apa yang perlu disemak sebelum membayar sesiapa.",
      body: "GCC Market Entry bukan marketplace, regulator atau pakej berbayar. Ia ialah sumber pendidikan bebas untuk membantu anda memahami proses, bertanya soalan yang betul dan menyemak keperluan dengan pihak berkuasa atau platform yang tepat.",
    },
    roadmap: {
      eyebrow: "MULA DI SINI",
      title: "Roadmap kemasukan pasaran GCC dalam enam langkah",
      steps: [
        ["01", "Semak product-market fit", "Pilih beberapa produk dengan nilai yang jelas dan ekonomi rentas sempadan yang realistik."],
        ["02", "Pilih pasaran", "Bandingkan Arab Saudi, UAE dan pasaran GCC lain; jangan anggap satu laluan sesuai untuk semua jenama."],
        ["03", "Petakan peraturan", "Kenal pasti pihak berkuasa, peraturan teknikal, pendaftaran produk atau syarat marketplace yang mungkin terpakai."],
        ["04", "Pilih laluan pasaran", "Tentukan sama ada marketplace, importer, distributor, retailer, B2B atau model lain paling praktikal."],
        ["05", "Kira kos sebenar", "Masukkan kos pematuhan, ujian, terjemahan, freight, kastam, fulfilment, platform dan pemasaran."],
        ["06", "Uji, belajar dan scale", "Mulakan secara terkawal, ukur respons dan besarkan hanya apabila model komersial dan operasi masuk akal."],
      ],
    },
    countries: {
      eyebrow: "PANDUAN NEGARA",
      title: "Mulakan dengan pasaran, bukan platform",
      body: "Setiap pasaran GCC mempunyai persekitaran komersial, pihak berkuasa dan proses tersendiri. Arab Saudi dan UAE mempunyai panduan khusus sekarang; negara lain akan ditambah secara berperingkat.",
      live: "Buka panduan",
      developing: "Bahagian penyelidikan sedang dibangunkan",
    },
    knowledge: {
      eyebrow: "PUSTAKA ILMU",
      title: "Pilih bahagian mengikut persoalan anda",
      items: [
        ["Pematuhan Saudi", "Titik mula untuk SFDA, SABER, ZATCA/FASAH dan semakan produk.", "/saudi-arabia/"],
        ["Pematuhan UAE", "Titik mula untuk MoIAT, cukai, produk pengguna dan keperluan emirate.", "/uae/"],
        ["Kecantikan & wellness", "Tuntutan, ramuan, aset produk dan persediaan kategori.", "/beauty-wellness/"],
        ["Elektronik", "Spesifikasi, keserasian, dokumen teknikal dan kesiapsiagaan harga.", "/electronics/"],
        ["Panduan & checklist", "Panduan percuma untuk lokalisasi, kesiapsiagaan dan ujian pasaran.", "/guides/"],
        ["Sumber rasmi", "Direktori sumber kerajaan dan institusi untuk menyemak keperluan terkini.", "/official-sources/"],
      ],
    },
    checker: {
      eyebrow: "SEMAKAN KESIAPSIAGAAN PERCUMA",
      title: "Di mana patut penyelidikan anda bermula?",
      body: "Ini alat perancangan, bukan keputusan kelulusan. Ia membantu mengenal pasti kerja yang mungkin perlu dilakukan sebelum anda serius memasuki pasaran.",
      category: "Kategori produk",
      docs: "Status dokumentasi",
      market: "Pasaran sasaran",
      cat: { general: "Produk pengguna umum", beauty: "Kecantikan / penjagaan diri", supplement: "Suplemen / kesihatan", food: "Makanan / minuman", electronics: "Elektronik / aksesori" },
      doc: { ready: "Dokumen asas produk tersusun", partial: "Sebahagian dokumen tersedia", early: "Masih kumpul maklumat asas" },
      markets: { saudi: "Arab Saudi", uae: "UAE", gcc: "Belum pasti / GCC lebih luas" },
      result: "Hasil perancangan",
      high: ["Asas yang baik untuk penyelidikan lebih mendalam", "Anda sudah mempunyai struktur asas untuk bergerak kepada semakan khusus pasaran. Semak sumber rasmi, laluan pasaran dan model kos sebelum membuat komitmen."],
      mid: ["Beberapa jurang perlu diselesaikan", "Susun maklumat produk dan kenal pasti keperluan khusus pasaran sebelum memberi fokus kepada onboarding platform atau janji komersial."],
      low: ["Mulakan dengan asas dahulu", "Bina fail produk yang kemas, jelaskan pasaran sasaran dan gunakan direktori sumber rasmi sebelum membayar pendaftaran, listing atau servis pengembangan."],
      disclaimer: "Untuk perancangan sahaja. Keperluan regulatori, kastam, cukai dan marketplace boleh berubah dan bergantung pada produk serta model operasi.",
    },
    routes: {
      eyebrow: "LALUAN KE PASARAN",
      title: "Ada lebih daripada satu cara untuk memasuki GCC",
      items: [
        ["Marketplace", "Sesuai untuk ujian permintaan digital apabila kelayakan seller dan produk jelas.", "Store"],
        ["Importer / distributor", "Rakan komersial tempatan boleh mengurus import, pengedaran dan akses saluran mengikut perjanjian.", "Network"],
        ["B2B terus", "Jual kepada buyer, wholesaler atau pelanggan institusi tanpa membina storefront pengguna terlebih dahulu.", "Building"],
        ["Kerjasama retail", "Sesuai apabila kehadiran fizikal, merchandising tempatan atau retailer established penting.", "Landmark"],
        ["Entiti tempatan", "Pilihan jangka panjang apabila kes komersial membenarkan operasi dan tanggungjawab tempatan yang lebih mendalam.", "Scale"],
        ["Lesen / rakan strategik", "Laluan berasaskan kerjasama apabila keupayaan tempatan, pembuatan atau hak pengedaran penting.", "Route"],
      ],
      open: "Bandingkan laluan",
    },
    tools: {
      eyebrow: "ALAT PERCUMA",
      title: "Rancang sebelum berbelanja",
      items: [
        ["Perancang kos", "Bina anggaran kos GCC anda sendiri tanpa harga pakej yang direka-reka.", "/cost-planner/"],
        ["Malaysia Export Desk", "Mulakan dengan MATRADE, SME Corp, Halal Malaysia dan sumber sokongan eksport Malaysia.", "/malaysia-export-desk/"],
        ["Pustaka Sumber Rasmi", "Semak peraturan semasa melalui pihak berkuasa dan institusi rasmi.", "/official-sources/"],
        ["Checklist kemasukan", "Gunakan checklist sebelum komit stok, kerja dokumentasi atau bajet pemasaran.", "/guides/gcc-market-entry-checklist-malaysian-brands/"],
      ],
    },
    verify: {
      eyebrow: "SEMAK SEBELUM BERTINDAK",
      title: "Sumber rasmi lebih penting daripada dakwaan jualan.",
      body: "Apabila sesuatu keperluan boleh memberi kesan kepada produk, shipment, cukai atau akses marketplace, gunakan pihak berkuasa atau platform berkaitan sebagai rujukan akhir. Laman ini menerangkan laluan; ia bukan pengganti kelulusan rasmi atau nasihat profesional undang-undang, cukai atau kastam.",
      button: "Buka Pustaka Sumber Rasmi",
    },
    advisory: {
      eyebrow: "SOKONGAN MANUSIA PILIHAN",
      title: "Perlukan bantuan menukar penyelidikan kepada pelan komersial?",
      body: "GCC Market Entry kekal percuma dan bebas. Jika kemudian anda perlukan bantuan manusia untuk market research, sourcing buyer/supplier, introduction atau koordinasi komersial, anda boleh meneroka TGPU Gulf Advisory & Trade secara berasingan.",
      button: "Terokai TGPU Gulf",
    },
    footer: "GCC Market Entry ialah sumber pendidikan bebas. Ia bukan pihak berkuasa kerajaan, marketplace, badan pensijilan atau jaminan akses pasaran.",
  },
  ar: {
    dir: "rtl" as const,
    language: "العربية",
    brandSub: "مركز معرفي مستقل لدخول أسواق الخليج",
    nav: { start: "ابدأ هنا", countries: "أدلة الدول", routes: "مسارات السوق", tools: "أدوات مجانية", sources: "المصادر الرسمية" },
    hero: {
      eyebrow: "مجاني • مستقل • متعدد اللغات",
      title: "ادخل أسواق الخليج بمعلومات أوضح.",
      body: "مركز معرفي عملي للشركات الماليزية التي تستكشف السعودية والإمارات وأسواق الخليج. استخدم إرشادات تبدأ من المصادر الرسمية، وأدلة الدول، وأدوات الجاهزية والتخطيط المجانية قبل إنفاق المال أو الالتزام بالمخزون.",
      primary: "ابدأ خارطة الطريق",
      secondary: "افحص الجاهزية",
      badges: ["مجاني للجميع", "العربية • English • BM", "المصدر الرسمي أولاً"],
    },
    intro: {
      title: "اعرف ما يجب التحقق منه قبل أن تدفع لأي جهة.",
      body: "GCC Market Entry ليس منصة بيع ولا جهة تنظيمية ولا باقة مدفوعة. إنه مورد تعليمي مستقل يساعدك على فهم الخطوات وطرح الأسئلة الصحيحة والتحقق من المتطلبات لدى الجهة الرسمية أو المنصة المناسبة.",
    },
    roadmap: {
      eyebrow: "ابدأ هنا",
      title: "خارطة طريق من ست خطوات لدخول أسواق الخليج",
      steps: [
        ["01", "تحقق من ملاءمة المنتج للسوق", "اختر مجموعة صغيرة من المنتجات ذات قيمة واضحة واقتصاديات واقعية للبيع عبر الحدود."],
        ["02", "اختر السوق", "قارن بين السعودية والإمارات وبقية الخليج بدلاً من افتراض أن مساراً واحداً يناسب كل العلامات."],
        ["03", "حدد المتطلبات", "اعرف الجهة المختصة واللوائح الفنية وتسجيل المنتج ومتطلبات المنصة التي قد تنطبق."],
        ["04", "اختر مسار الوصول للسوق", "حدد ما إذا كانت المنصة أو المستورد أو الموزع أو التجزئة أو B2B أو نموذج آخر هو البداية العملية."],
        ["05", "احسب التكلفة الحقيقية", "أدخل تكاليف المطابقة والاختبارات والتعريب والشحن والجمارك والتخزين ورسوم المنصة والتسويق."],
        ["06", "اختبر وتعلم ثم توسع", "ابدأ بإطلاق محدود، راقب الاستجابة، ثم توسع عندما يصبح النموذج التجاري والتشغيلي منطقياً."],
      ],
    },
    countries: {
      eyebrow: "أدلة الدول",
      title: "ابدأ بالسوق، وليس بالمنصة",
      body: "لكل سوق خليجي بيئته التجارية وجهاته التنظيمية وتفاصيله التشغيلية. تتوفر حالياً أدلة للسعودية والإمارات، وسيتم توسيع بقية الأسواق تدريجياً.",
      live: "افتح الدليل",
      developing: "قسم البحث قيد التطوير",
    },
    knowledge: {
      eyebrow: "مكتبة المعرفة",
      title: "اختر القسم المناسب لسؤالك",
      items: [
        ["الامتثال في السعودية", "نقاط بداية لـ SFDA وSABER وZATCA/FASAH والتحقق الخاص بالمنتج.", "/saudi-arabia/"],
        ["الامتثال في الإمارات", "نقاط بداية لـ MoIAT والضرائب والمنتجات الاستهلاكية ومتطلبات الإمارة.", "/uae/"],
        ["الجمال والعناية", "الادعاءات والمكونات وأصول المنتج والاستعداد الخاص بالفئة.", "/beauty-wellness/"],
        ["الإلكترونيات", "المواصفات والتوافق والوثائق الفنية والاستعداد السعري.", "/electronics/"],
        ["الأدلة والقوائم", "أدلة مجانية للتعريب والجاهزية واختبار السوق بشكل منظم.", "/guides/"],
        ["المصادر الرسمية", "دليل للجهات الحكومية والمؤسسات الرسمية للتحقق من المتطلبات الحالية.", "/official-sources/"],
      ],
    },
    checker: {
      eyebrow: "فحص جاهزية مجاني",
      title: "من أين يجب أن يبدأ بحثك؟",
      body: "هذه أداة تخطيط وليست قرار موافقة. تساعدك على تحديد نوع العمل المطلوب قبل الدخول الجاد للسوق.",
      category: "فئة المنتج",
      docs: "حالة الوثائق",
      market: "السوق المستهدف",
      cat: { general: "منتج استهلاكي عام", beauty: "جمال / عناية شخصية", supplement: "مكملات / صحة", food: "أغذية / مشروبات", electronics: "إلكترونيات / إكسسوارات" },
      doc: { ready: "الوثائق الأساسية منظمة", partial: "بعض الوثائق متوفرة", early: "ما زلت أجمع الأساسيات" },
      markets: { saudi: "السعودية", uae: "الإمارات", gcc: "غير محدد / الخليج عموماً" },
      result: "نتيجة التخطيط",
      high: ["قاعدة جيدة لبحث أعمق", "لديك هيكل مبدئي جيد للانتقال إلى التحقق الخاص بالسوق. راجع المصادر الرسمية ومسارات السوق ونموذج التكلفة قبل الالتزام."],
      mid: ["هناك بعض الفجوات التي يجب إغلاقها", "نظّم معلومات المنتج وحدد المتطلبات الخاصة بالسوق قبل التركيز على تسجيل المنصات أو الوعود التجارية."],
      low: ["ابدأ بالأساسيات أولاً", "أنشئ ملفاً واضحاً للمنتج وحدد السوق المستهدف واستخدم دليل المصادر الرسمية قبل دفع رسوم التسجيل أو الإدراج أو خدمات التوسع."],
      disclaimer: "للتخطيط فقط. المتطلبات التنظيمية والجمركية والضريبية ومتطلبات المنصات قد تتغير وتعتمد على المنتج ونموذج التشغيل.",
    },
    routes: {
      eyebrow: "مسارات الوصول للسوق",
      title: "هناك أكثر من طريق لدخول الخليج",
      items: [
        ["المنصات الإلكترونية", "مناسبة لاختبار الطلب الرقمي عندما تكون أهلية البائع والمنتج واضحة.", "Store"],
        ["المستورد / الموزع", "يمكن لشريك تجاري محلي إدارة الاستيراد والتوزيع والوصول إلى القنوات وفق اتفاق واضح.", "Network"],
        ["البيع المباشر B2B", "البيع لمشترٍ أو تاجر جملة أو عميل مؤسسي بدلاً من بناء متجر للمستهلك أولاً.", "Building"],
        ["شراكة التجزئة", "مناسبة عندما يكون الوجود على الرفوف أو التسويق المحلي أو شريك تجزئة قائم مهماً.", "Landmark"],
        ["كيان محلي", "خيار طويل الأجل عندما تبرر الحالة التجارية عمليات ومسؤوليات محلية أعمق.", "Scale"],
        ["الترخيص / الشريك الاستراتيجي", "مسار قائم على الشراكة عندما تكون القدرات المحلية أو التصنيع أو حقوق التوزيع محورية.", "Route"],
      ],
      open: "قارن المسارات",
    },
    tools: {
      eyebrow: "أدوات مجانية",
      title: "خطط قبل أن تنفق",
      items: [
        ["مخطط التكلفة", "أنشئ تقديرك الخاص لتكاليف دخول الخليج دون أسعار باقات مفترضة.", "/cost-planner/"],
        ["مكتب التصدير الماليزي", "ابدأ من MATRADE وSME Corp وHalal Malaysia وموارد دعم التصدير الماليزية.", "/malaysia-export-desk/"],
        ["مكتبة المصادر الرسمية", "تحقق من المتطلبات الحالية عبر الجهات والمؤسسات الرسمية.", "/official-sources/"],
        ["قائمة التحقق", "استخدم قائمة منظمة قبل الالتزام بالمخزون أو الوثائق أو ميزانية التسويق.", "/guides/gcc-market-entry-checklist-malaysian-brands/"],
      ],
    },
    verify: {
      eyebrow: "تحقق قبل أن تتصرف",
      title: "المصدر الرسمي أهم من أي ادعاء تسويقي.",
      body: "عندما يمكن لمتطلب ما أن يؤثر على المنتج أو الشحنة أو الضرائب أو الوصول إلى منصة، استخدم الجهة الرسمية أو المنصة المعنية كمرجع نهائي. هذا الموقع يشرح المسار ولا يحل محل الموافقة الرسمية أو المشورة القانونية أو الضريبية أو الجمركية المهنية.",
      button: "افتح مكتبة المصادر الرسمية",
    },
    advisory: {
      eyebrow: "دعم بشري اختياري",
      title: "هل تحتاج إلى تحويل البحث إلى خطة تجارية؟",
      body: "يبقى GCC Market Entry مجانياً ومستقلاً. إذا احتجت لاحقاً إلى دعم بشري في أبحاث السوق أو البحث عن مشترين وموردين أو التعارف التجاري أو التنسيق، يمكنك استكشاف TGPU Gulf Advisory & Trade بشكل منفصل.",
      button: "استكشف TGPU Gulf",
    },
    footer: "GCC Market Entry مورد تعليمي مستقل. ليس جهة حكومية أو منصة بيع أو جهة اعتماد ولا يضمن الوصول إلى السوق.",
  },
} as const

const countries = [
  { name: "Saudi Arabia", flag: "🇸🇦", href: "/saudi-arabia/", live: true },
  { name: "United Arab Emirates", flag: "🇦🇪", href: "/uae/", live: true },
  { name: "Kuwait", flag: "🇰🇼", live: false },
  { name: "Qatar", flag: "🇶🇦", live: false },
  { name: "Oman", flag: "🇴🇲", live: false },
  { name: "Bahrain", flag: "🇧🇭", live: false },
] as const

const routeIcon = (name: string) => {
  const props = { className: "h-5 w-5" }
  if (name === "Store") return <Store {...props} />
  if (name === "Network") return <Network {...props} />
  if (name === "Building") return <Building2 {...props} />
  if (name === "Landmark") return <Landmark {...props} />
  if (name === "Scale") return <Scale {...props} />
  return <Route {...props} />
}

export function GccMarketEntryGuide({ lang }: { lang: Lang }) {
  const t = copy[lang]
  const isArabic = lang === "ar"
  const [menuOpen, setMenuOpen] = useState(false)
  const [category, setCategory] = useState<Category>("general")
  const [docs, setDocs] = useState<Docs>("partial")
  const [market, setMarket] = useState<Market>("gcc")

  const readiness = useMemo(() => {
    let score = docs === "ready" ? 3 : docs === "partial" ? 2 : 0
    if (market !== "gcc") score += 2
    if (category === "general" || category === "electronics") score += 2
    else if (category === "beauty") score += 1
    else score += 0
    if (score >= 6) return t.checker.high
    if (score >= 3) return t.checker.mid
    return t.checker.low
  }, [category, docs, market, t])

  const languageLinks = [
    ["BM", path("/bm/")],
    ["EN", path("/")],
    ["العربية", path("/ar/")],
  ] as const

  return (
    <div dir={t.dir} lang={lang === "bm" ? "ms" : lang} className="min-h-screen bg-[#fbfaf4] text-[#14261e]">
      <header className="sticky top-0 z-50 border-b border-emerald-950/10 bg-[#fbfaf4]/95 backdrop-blur-xl">
        <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <a href={path("/")} className="flex items-center" aria-label="GCC Market Entry home">
            <GccBrandLogo />
          </a>

          <nav className="hidden items-center gap-5 text-xs font-extrabold text-[#526159] xl:flex" aria-label="Main navigation">
            <a href="#start" className="hover:text-[#123b2c]">{t.nav.start}</a>
            <a href="#countries" className="hover:text-[#123b2c]">{t.nav.countries}</a>
            <a href="#routes" className="hover:text-[#123b2c]">{t.nav.routes}</a>
            <a href="#tools" className="hover:text-[#123b2c]">{t.nav.tools}</a>
            <a href={path("/official-sources/")} className="hover:text-[#123b2c]">{t.nav.sources}</a>
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <div className="flex rounded-full border border-emerald-950/10 bg-white p-1">
              {languageLinks.map(([label, href]) => (
                <a key={label} href={href} className={`rounded-full px-3 py-1.5 text-xs font-black ${((lang === "bm" && label === "BM") || (lang === "en" && label === "EN") || (lang === "ar" && label === "العربية")) ? "bg-[#123b2c] text-white" : "text-[#526159]"}`}>{label}</a>
              ))}
            </div>
          </div>

          <button type="button" onClick={() => setMenuOpen((v) => !v)} className="grid h-10 w-10 place-items-center rounded-xl border border-emerald-950/10 bg-white xl:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
        {menuOpen && (
          <div className="border-t border-emerald-950/10 bg-white px-4 py-4 xl:hidden">
            <div className="mx-auto grid max-w-7xl gap-2 text-sm font-bold">
              <a href="#start" onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-2 hover:bg-[#eef4ef]">{t.nav.start}</a>
              <a href="#countries" onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-2 hover:bg-[#eef4ef]">{t.nav.countries}</a>
              <a href="#routes" onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-2 hover:bg-[#eef4ef]">{t.nav.routes}</a>
              <a href="#tools" onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-2 hover:bg-[#eef4ef]">{t.nav.tools}</a>
              <a href={path("/official-sources/")} className="rounded-xl px-3 py-2 hover:bg-[#eef4ef]">{t.nav.sources}</a>
              <div className="mt-2 flex gap-2 border-t border-emerald-950/10 pt-3">{languageLinks.map(([label, href]) => <a key={label} href={href} className="rounded-full border border-emerald-950/10 px-3 py-1.5 text-xs font-black">{label}</a>)}</div>
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="relative overflow-hidden bg-[#0d3023] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(197,155,79,0.25),transparent_28%),radial-gradient(circle_at_12%_85%,rgba(73,130,96,0.22),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
            <div>
              <img
                src={path("/gcc-market-entry-approved.png")}
                alt="GCC Market Entry — Business, Jobs, Scholarships, Official Resources and Market Guides"
                className="mb-8 h-auto w-full max-w-[760px] rounded-[1.5rem] bg-white shadow-2xl"
                width={1581}
                height={995}
              />
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#e5c985]">{t.hero.eyebrow}</p>
              <h1 className="mt-5 max-w-4xl font-serif text-5xl font-bold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">{t.hero.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">{t.hero.body}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#start" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e5c985] px-6 py-3.5 text-sm font-black text-[#173426]">{t.hero.primary}<ArrowRight className={`h-4 w-4 ${isArabic ? "rotate-180" : ""}`} /></a>
                <a href="#readiness" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-black text-white">{t.hero.secondary}<SearchCheck className="h-4 w-4" /></a>
              </div>
              <div className="mt-7 flex flex-wrap gap-2">{t.hero.badges.map((item) => <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/7 px-3 py-2 text-xs font-bold text-white/85"><CheckCircle2 className="h-3.5 w-3.5 text-[#e5c985]" />{item}</span>)}</div>
            </div>
            <aside className="self-center rounded-[2rem] border border-white/12 bg-white/7 p-7 shadow-2xl backdrop-blur-sm">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e5c985] text-[#173426]"><ShieldCheck className="h-6 w-6" /></div>
              <h2 className="mt-5 text-2xl font-black">{t.intro.title}</h2>
              <p className="mt-4 leading-7 text-white/75">{t.intro.body}</p>
              <div className="mt-6 grid gap-3 text-sm text-white/82">
                <div className="flex gap-3"><BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#e5c985]" /><span>Independent from marketplaces and certification bodies</span></div>
                <div className="flex gap-3"><BookOpenCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#e5c985]" /><span>Educational guidance with clear verification points</span></div>
                <div className="flex gap-3"><Languages className="mt-0.5 h-5 w-5 shrink-0 text-[#e5c985]" /><span>{t.language} · BM · English · العربية</span></div>
              </div>
            </aside>
          </div>
        </section>

        <section id="start" className="py-18 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#9a742f]">{t.roadmap.eyebrow}</p>
            <h2 className="mt-3 max-w-4xl font-serif text-4xl font-bold tracking-[-0.03em] text-[#123b2c] sm:text-5xl">{t.roadmap.title}</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {t.roadmap.steps.map(([num, title, body]) => (
                <article key={num} className="rounded-[1.6rem] border border-emerald-950/10 bg-white p-6 shadow-[0_14px_40px_rgba(18,59,44,0.06)]">
                  <span className="text-xs font-black tracking-[0.18em] text-[#9a742f]">{num}</span>
                  <h3 className="mt-3 text-xl font-black text-[#123b2c]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#66736b]">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="countries" className="border-y border-emerald-950/8 bg-[#f1f4ed] py-18 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#9a742f]">{t.countries.eyebrow}</p>
            <h2 className="mt-3 font-serif text-4xl font-bold tracking-[-0.03em] text-[#123b2c] sm:text-5xl">{t.countries.title}</h2>
            <p className="mt-4 max-w-3xl leading-7 text-[#66736b]">{t.countries.body}</p>
            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {countries.map((country) => {
                const card = <><div className="text-3xl">{country.flag}</div><h3 className="mt-4 text-lg font-black text-[#123b2c]">{country.name}</h3><p className="mt-2 text-xs font-bold uppercase tracking-[0.1em] text-[#7a867e]">{country.live ? t.countries.live : t.countries.developing}</p>{country.live && <ArrowRight className={`mt-5 h-4 w-4 text-[#9a742f] ${isArabic ? "rotate-180" : ""}`} />}</>
                return country.live && "href" in country ? <a key={country.name} href={path(country.href)} className="rounded-[1.5rem] border border-emerald-950/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">{card}</a> : <article key={country.name} className="rounded-[1.5rem] border border-dashed border-emerald-950/15 bg-white/65 p-6">{card}</article>
              })}
            </div>
          </div>
        </section>

        <section className="py-18 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#9a742f]">{t.knowledge.eyebrow}</p>
            <h2 className="mt-3 font-serif text-4xl font-bold tracking-[-0.03em] text-[#123b2c] sm:text-5xl">{t.knowledge.title}</h2>
            <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {t.knowledge.items.map(([title, body, href], index) => {
                const icons = [ShieldCheck, MapPinned, PackageSearch, FileCheck2, BookOpenCheck, SearchCheck]
                const Icon = icons[index]
                return <a key={title} href={path(href)} className="group rounded-[1.5rem] border border-emerald-950/10 bg-white p-6 transition hover:-translate-y-1 hover:border-[#c59b4f]/60 hover:shadow-lg"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#eef4ef] text-[#123b2c]"><Icon className="h-5 w-5" /></span><h3 className="mt-5 text-lg font-black group-hover:text-[#9a742f]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#66736b]">{body}</p><span className="mt-5 inline-flex items-center gap-2 text-xs font-black text-[#123b2c]">Explore <ArrowRight className={`h-3.5 w-3.5 ${isArabic ? "rotate-180" : ""}`} /></span></a>
              })}
            </div>
          </div>
        </section>

        <section id="readiness" className="border-y border-emerald-950/8 bg-[#0f3829] py-18 text-white lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#e5c985]">{t.checker.eyebrow}</p>
              <h2 className="mt-3 font-serif text-4xl font-bold tracking-[-0.03em] sm:text-5xl">{t.checker.title}</h2>
              <p className="mt-5 max-w-xl leading-7 text-white/70">{t.checker.body}</p>
              <div className="mt-7 rounded-2xl border border-white/12 bg-white/6 p-5"><p className="text-xs font-bold leading-6 text-white/68">{t.checker.disclaimer}</p></div>
            </div>
            <div className="rounded-[2rem] bg-white p-6 text-[#14261e] shadow-2xl sm:p-8">
              <div className="grid gap-5 sm:grid-cols-3">
                <label className="text-sm font-black">{t.checker.category}<select value={category} onChange={(e) => setCategory(e.target.value as Category)} className="mt-2 w-full rounded-xl border border-[#dce5de] bg-white px-3 py-3 text-sm font-medium"><option value="general">{t.checker.cat.general}</option><option value="beauty">{t.checker.cat.beauty}</option><option value="supplement">{t.checker.cat.supplement}</option><option value="food">{t.checker.cat.food}</option><option value="electronics">{t.checker.cat.electronics}</option></select></label>
                <label className="text-sm font-black">{t.checker.docs}<select value={docs} onChange={(e) => setDocs(e.target.value as Docs)} className="mt-2 w-full rounded-xl border border-[#dce5de] bg-white px-3 py-3 text-sm font-medium"><option value="ready">{t.checker.doc.ready}</option><option value="partial">{t.checker.doc.partial}</option><option value="early">{t.checker.doc.early}</option></select></label>
                <label className="text-sm font-black">{t.checker.market}<select value={market} onChange={(e) => setMarket(e.target.value as Market)} className="mt-2 w-full rounded-xl border border-[#dce5de] bg-white px-3 py-3 text-sm font-medium"><option value="saudi">{t.checker.markets.saudi}</option><option value="uae">{t.checker.markets.uae}</option><option value="gcc">{t.checker.markets.gcc}</option></select></label>
              </div>
              <div className="mt-7 rounded-2xl bg-[#f1f4ed] p-6"><p className="text-xs font-black uppercase tracking-[0.14em] text-[#9a742f]">{t.checker.result}</p><h3 className="mt-3 text-2xl font-black text-[#123b2c]">{readiness[0]}</h3><p className="mt-3 leading-7 text-[#66736b]">{readiness[1]}</p><div className="mt-5 flex flex-wrap gap-3"><a href={path("/official-sources/")} className="inline-flex items-center gap-2 rounded-full bg-[#123b2c] px-4 py-2.5 text-xs font-black text-white"><ShieldCheck className="h-4 w-4" />{t.nav.sources}</a><a href={path("/cost-planner/")} className="inline-flex items-center gap-2 rounded-full border border-[#123b2c]/15 px-4 py-2.5 text-xs font-black text-[#123b2c]"><Calculator className="h-4 w-4" />{t.tools.items[0][0]}</a></div></div>
            </div>
          </div>
        </section>

        <section id="routes" className="py-18 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#9a742f]">{t.routes.eyebrow}</p>
            <h2 className="mt-3 font-serif text-4xl font-bold tracking-[-0.03em] text-[#123b2c] sm:text-5xl">{t.routes.title}</h2>
            <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{t.routes.items.map(([title, body, icon]) => <article key={title} className="rounded-[1.5rem] border border-emerald-950/10 bg-white p-6"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#eef4ef] text-[#123b2c]">{routeIcon(icon)}</span><h3 className="mt-5 text-lg font-black">{title}</h3><p className="mt-2 text-sm leading-6 text-[#66736b]">{body}</p></article>)}</div>
            <a href={path("/routes-to-market/")} className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#123b2c]/15 bg-white px-5 py-3 text-sm font-black text-[#123b2c]">{t.routes.open}<ArrowRight className={`h-4 w-4 ${isArabic ? "rotate-180" : ""}`} /></a>
          </div>
        </section>

        <section id="tools" className="border-y border-emerald-950/8 bg-[#f1f4ed] py-18 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#9a742f]">{t.tools.eyebrow}</p>
            <h2 className="mt-3 font-serif text-4xl font-bold tracking-[-0.03em] text-[#123b2c] sm:text-5xl">{t.tools.title}</h2>
            <div className="mt-9 grid gap-4 md:grid-cols-2">
              {t.tools.items.map(([title, body, href], index) => {
                const icons = [Calculator, Landmark, ShieldCheck, FileText]
                const Icon = icons[index]
                return <a key={title} href={path(href)} className="group flex gap-5 rounded-[1.6rem] border border-emerald-950/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#123b2c] text-white"><Icon className="h-5 w-5" /></span><span><h3 className="text-lg font-black group-hover:text-[#9a742f]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#66736b]">{body}</p></span></a>
              })}
            </div>
          </div>
        </section>

        <section className="py-18 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <article className="rounded-[2rem] bg-[#123b2c] p-8 text-white sm:p-10"><ShieldCheck className="h-7 w-7 text-[#e5c985]" /><p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-[#e5c985]">{t.verify.eyebrow}</p><h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">{t.verify.title}</h2><p className="mt-4 leading-7 text-white/72">{t.verify.body}</p><a href={path("/official-sources/")} className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#e5c985] px-5 py-3 text-sm font-black text-[#173426]">{t.verify.button}<ArrowRight className={`h-4 w-4 ${isArabic ? "rotate-180" : ""}`} /></a></article>
            <article className="rounded-[2rem] border border-emerald-950/10 bg-white p-8 sm:p-10"><Truck className="h-7 w-7 text-[#9a742f]" /><p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-[#9a742f]">{t.advisory.eyebrow}</p><h2 className="mt-3 font-serif text-3xl font-bold text-[#123b2c] sm:text-4xl">{t.advisory.title}</h2><p className="mt-4 leading-7 text-[#66736b]">{t.advisory.body}</p><a href="https://tgpugulf.com/tgpu-gulf/" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#123b2c]/15 px-5 py-3 text-sm font-black text-[#123b2c]">{t.advisory.button}<ExternalLink className="h-4 w-4" /></a></article>
          </div>
        </section>
      </main>

      <footer className="border-t border-emerald-950/10 bg-[#09241a] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-xs leading-6 text-white/65 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8"><p className="max-w-4xl">{t.footer}</p><a href={path("/official-sources/")} className="font-black text-[#e5c985]">{t.nav.sources}</a></div>
      </footer>
    </div>
  )
}
