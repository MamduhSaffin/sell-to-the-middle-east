import { ArrowLeft, ArrowUpRight, CheckCircle2, Mail, Phone } from "lucide-react"

const PHONE_DISPLAY = "+60 12-868 1339"
const PHONE_TEL = "+60128681339"
const EMAIL = "mamduh@tgpugulf.com"

type Props = {
  eyebrow: string
  title: string
  intro: string
  audienceTitle: string
  audienceBody: string
  supportTitle: string
  support: string[]
  noteTitle?: string
  note?: string
  whatsappText: string
}

export function TgpuServiceLanding({
  eyebrow,
  title,
  intro,
  audienceTitle,
  audienceBody,
  supportTitle,
  support,
  noteTitle = "Important",
  note,
  whatsappText,
}: Props) {
  const whatsapp = `https://wa.me/${PHONE_TEL.replace("+", "")}?text=${encodeURIComponent(whatsappText)}`

  return (
    <main className="min-h-screen bg-[#fffdf8]">
      <header className="border-b border-emerald-950/10 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <a href="/" className="font-black tracking-[0.16em] text-emerald-950">TGPU GULF ADVISORY</a>
          <div className="flex gap-2">
            <a href="/ar/" className="rounded-full border border-emerald-950/15 px-3 py-2 text-xs font-bold text-emerald-950">العربية</a>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-full bg-emerald-900 px-4 py-2 text-xs font-bold text-white">Discuss an Opportunity</a>
          </div>
        </div>
      </header>

      <section className="border-b border-emerald-950/10 bg-[radial-gradient(circle_at_15%_10%,rgba(5,107,82,0.12),transparent_30rem),radial-gradient(circle_at_92%_20%,rgba(196,145,45,0.14),transparent_26rem)]">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
          <a href="/" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-800"><ArrowLeft className="h-4 w-4" /> TGPU Gulf Advisory</a>
          <div className="mt-7 max-w-4xl">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">{eyebrow}</div>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-emerald-950 sm:text-5xl">{title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">{intro}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-emerald-900 px-6 py-3.5 text-sm font-bold text-white hover:bg-emerald-800">Discuss an Opportunity <ArrowUpRight className="h-4 w-4" /></a>
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-full border border-emerald-950/15 bg-white px-6 py-3.5 text-sm font-bold text-emerald-950"><Mail className="h-4 w-4" /> {EMAIL}</a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-18">
        <article className="rounded-3xl border border-emerald-950/10 bg-emerald-950 p-7 text-white">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">Who this is for</div>
          <h2 className="mt-3 text-2xl font-black">{audienceTitle}</h2>
          <p className="mt-4 leading-8 text-emerald-50/80">{audienceBody}</p>
        </article>

        <article className="rounded-3xl border border-emerald-950/10 bg-white p-7 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">TGPU Gulf support</div>
          <h2 className="mt-3 text-2xl font-black text-emerald-950">{supportTitle}</h2>
          <div className="mt-5 space-y-4">
            {support.map((item) => (
              <div key={item} className="flex items-start gap-3 text-slate-700"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-700" /><span className="leading-7">{item}</span></div>
            ))}
          </div>
        </article>
      </section>

      {note ? (
        <section className="mx-auto max-w-6xl px-5 pb-14 lg:px-8">
          <div className="rounded-3xl border border-amber-600/20 bg-amber-50 p-7">
            <h2 className="text-xl font-black text-emerald-950">{noteTitle}</h2>
            <p className="mt-3 leading-8 text-slate-700">{note}</p>
          </div>
        </section>
      ) : null}

      <section className="bg-[#f2f8f3]">
        <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
          <h2 className="text-3xl font-black text-emerald-950">Start with the actual requirement.</h2>
          <p className="mt-3 max-w-3xl leading-8 text-slate-600">Share the company, market, product or sourcing requirement, expected volume if known, and what kind of counterpart you need. We can review the opportunity before major commitments are made.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-emerald-900 px-6 py-3.5 text-sm font-bold text-white"><Phone className="h-4 w-4" /> WhatsApp {PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-full border border-emerald-950/15 bg-white px-6 py-3.5 text-sm font-bold text-emerald-950"><Mail className="h-4 w-4" /> {EMAIL}</a>
          </div>
        </div>
      </section>

      <footer className="bg-emerald-950 px-5 py-7 text-sm text-emerald-50/70 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span>TGPU Gulf Advisory · Kuala Lumpur, Malaysia · SSM CA0427558-D</span>
          <span>{PHONE_DISPLAY} · {EMAIL}</span>
        </div>
      </footer>
    </main>
  )
}
