import type { Metadata } from "next"
import { ArrowLeft, ArrowUpRight, CheckCircle2, Mail, MapPin, Phone, Search, Ship } from "lucide-react"
import { SITE_URL } from "@/lib/site"

const PHONE_DISPLAY = "+60 12-868 1339"
const PHONE_TEL = "+60128681339"
const EMAIL = "mamduh@tgpugulf.com"
const whatsappText = "السلام عليكم، نحن شركة من السعودية/الخليج ونرغب في البحث عن مورد أو مصنع أو منتج من ماليزيا."
const whatsapp = `https://wa.me/${PHONE_TEL.replace("+", "")}?text=${encodeURIComponent(whatsappText)}`

export const metadata: Metadata = {
  title: "البحث عن موردين ومصانع من ماليزيا للسعودية والخليج",
  description:
    "تساعد TGPU Gulf Advisory الشركات السعودية والخليجية في البحث عن موردين ومصانع ومنتجات من ماليزيا، مع التنسيق التجاري وطلبات الأسعار والمواصفات والمستندات.",
  keywords: [
    "موردين من ماليزيا للسعودية",
    "مصانع ماليزية للتصدير للسعودية",
    "استيراد من ماليزيا للسعودية",
    "منتجات ماليزية للخليج",
    "البحث عن مصنع في ماليزيا",
    "Malaysia suppliers Saudi Arabia",
    "Malaysia sourcing GCC",
  ],
  alternates: {
    canonical: `${SITE_URL}/ar/malaysia-sourcing/`,
    languages: {
      "en-MY": `${SITE_URL}/malaysia-sourcing/`,
      "ar-SA": `${SITE_URL}/ar/malaysia-sourcing/`,
      "x-default": `${SITE_URL}/malaysia-sourcing/`,
    },
  },
  openGraph: {
    locale: "ar_SA",
    title: "البحث عن موردين من ماليزيا | TGPU Gulf Advisory",
    description: "دعم من داخل ماليزيا للشركات السعودية والخليجية الباحثة عن موردين ومصانع ومنتجات ماليزية.",
    url: `${SITE_URL}/ar/malaysia-sourcing/`,
  },
}

const support = [
  "البحث عن مصانع وموردين ومصدرين ماليزيين وفق المنتج والمواصفات والكمية المطلوبة.",
  "التواصل الأولي مع الموردين لمعرفة التوفر والحد الأدنى للطلب والمواصفات والاستعداد للتصدير.",
  "تنسيق طلبات الأسعار والكتالوجات والمواصفات الفنية والعينات والمستندات التجارية المتاحة.",
  "تسهيل التواصل بين المشتري الخليجي والمورد الماليزي مع مراعاة سرية المعلومات التجارية.",
  "متابعة التغليف والكميات وشروط التسليم Incoterms والمستندات والخطوات التجارية التالية.",
]

export default function Page() {
  return (
    <main dir="rtl" lang="ar" className="min-h-screen bg-[#fffdf8]">
      <header className="border-b border-emerald-950/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <a href="/ar/" className="font-black tracking-[0.12em] text-emerald-950">TGPU GULF ADVISORY</a>
          <div className="flex items-center gap-2">
            <a href="/malaysia-sourcing/" className="rounded-full border border-emerald-950/15 px-3 py-2 text-xs font-bold text-emerald-950">English</a>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-full bg-emerald-900 px-4 py-2 text-xs font-bold text-white">تواصل عبر واتساب</a>
          </div>
        </div>
      </header>

      <section className="border-b border-emerald-950/10 bg-[radial-gradient(circle_at_15%_10%,rgba(5,107,82,0.12),transparent_30rem),radial-gradient(circle_at_92%_20%,rgba(196,145,45,0.14),transparent_26rem)]">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
          <a href="/ar/" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-800">العودة إلى TGPU Gulf Advisory <ArrowLeft className="h-4 w-4 rotate-180" /></a>
          <div className="mt-7 max-w-4xl">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">السعودية والخليج ← ماليزيا</div>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-emerald-950 sm:text-5xl">ابحث عن موردين ومصانع ومنتجات من ماليزيا مع تنسيق محلي</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">
              إذا كانت شركتكم في السعودية أو الخليج تبحث عن منتج أو مصنع أو مورد ماليزي، تساعدكم TGPU Gulf Advisory من داخل ماليزيا في تحويل المتطلب إلى بحث منظم وتواصل تجاري واضح مع الأطراف المناسبة.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-emerald-900 px-6 py-3.5 text-sm font-bold text-white hover:bg-emerald-800">ناقش متطلب التوريد <ArrowUpRight className="h-4 w-4" /></a>
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-full border border-emerald-950/15 bg-white px-6 py-3.5 text-sm font-bold text-emerald-950"><Mail className="h-4 w-4" /> {EMAIL}</a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
        <article className="rounded-3xl border border-emerald-950/10 bg-emerald-950 p-7 text-white">
          <div className="flex items-center gap-3 text-amber-300"><Search className="h-5 w-5" /><span className="text-sm font-bold">لمن هذه الخدمة؟</span></div>
          <h2 className="mt-4 text-2xl font-black">للمستوردين والموزعين والمشترين في السعودية ودول الخليج</h2>
          <p className="mt-4 leading-8 text-emerald-50/80">مناسبة للشركات التي لديها طلب حقيقي أو مواصفات منتج أو فئة تجارية محددة وتحتاج إلى جهة في ماليزيا للبحث عن المورد المناسب والتواصل الأولي والمتابعة التجارية.</p>
        </article>

        <article className="rounded-3xl border border-emerald-950/10 bg-white p-7 shadow-sm">
          <div className="flex items-center gap-3 text-amber-700"><Ship className="h-5 w-5" /><span className="text-sm font-bold">دعم TGPU Gulf</span></div>
          <h2 className="mt-4 text-2xl font-black text-emerald-950">ما الذي يمكننا تنسيقه من ماليزيا؟</h2>
          <div className="mt-5 space-y-4">
            {support.map((item) => (
              <div key={item} className="flex items-start gap-3 text-slate-700"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-700" /><span className="leading-7">{item}</span></div>
            ))}
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-14 lg:px-8">
        <div className="rounded-3xl border border-amber-600/20 bg-amber-50 p-7">
          <h2 className="text-xl font-black text-emerald-950">تنبيه مهم</h2>
          <p className="mt-3 leading-8 text-slate-700">تعمل TGPU Gulf Advisory كشريك في البحث والتنسيق التجاري. تبقى مسؤولية التحقق النهائي من المورد والمنتج والمطابقة والتراخيص والاستيراد والتخليص الجمركي والتعاقد النهائي على الأطراف المعنية ووفق الأنظمة المطبقة في كل دولة.</p>
        </div>
      </section>

      <section className="bg-[#f2f8f3]">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 lg:grid-cols-[1fr_0.7fr] lg:px-8">
          <div>
            <h2 className="text-3xl font-black text-emerald-950">ابدأ بإرسال متطلبك الفعلي</h2>
            <p className="mt-3 max-w-3xl leading-8 text-slate-600">أرسل اسم الشركة والدولة والمنتج أو المواصفات والكمية المتوقعة إن وجدت ونوع المورد أو المصنع المطلوب. سنراجع المتطلب ونحدد الخطوة التجارية المناسبة.</p>
          </div>
          <div className="rounded-3xl border border-emerald-950/10 bg-white p-6">
            <div className="space-y-4 text-sm text-slate-700">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3"><Phone className="h-5 w-5 text-emerald-800" /> {PHONE_DISPLAY}</a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3"><Mail className="h-5 w-5 text-emerald-800" /> {EMAIL}</a>
              <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-emerald-800" /> كوالالمبور، ماليزيا</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-emerald-950 px-5 py-7 text-sm text-emerald-50/70 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span>TGPU Gulf Advisory · كوالالمبور، ماليزيا · SSM CA0427558-D</span>
          <span>{PHONE_DISPLAY} · {EMAIL}</span>
        </div>
      </footer>
    </main>
  )
}
