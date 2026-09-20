"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { ArrowRight, BriefcaseBusiness, CheckCircle2 } from "lucide-react"

type Lang = "en" | "bm" | "ar"

const copy = {
  en: {
    eyebrow: "NEW FREE RESOURCE",
    title: "Looking for a job in the Middle East?",
    body: "Browse verified official career portals for airlines, oil & gas, healthcare, nursing, engineering, property and major GCC employers — without relying on copied vacancy posts.",
    points: ["Official employer links", "Saudi Arabia, UAE, Qatar & Oman", "Recruitment-scam safety notes"],
    button: "Open Middle East Jobs",
  },
  bm: {
    eyebrow: "SUMBER PERCUMA BAHARU",
    title: "Sedang mencari kerja di Timur Tengah?",
    body: "Teroka portal kerjaya rasmi yang telah disemak untuk syarikat penerbangan, minyak & gas, kesihatan, kejururawatan, kejuruteraan, hartanah dan majikan utama GCC — tanpa bergantung pada iklan kerja yang disalin.",
    points: ["Pautan rasmi majikan", "Arab Saudi, UAE, Qatar & Oman", "Nota keselamatan scam pekerjaan"],
    button: "Buka Jobs Timur Tengah",
  },
  ar: {
    eyebrow: "مورد مجاني جديد",
    title: "هل تبحث عن وظيفة في الشرق الأوسط؟",
    body: "تصفح بوابات التوظيف الرسمية التي تم التحقق منها لشركات الطيران والطاقة والرعاية الصحية والتمريض والهندسة والعقارات وكبرى جهات التوظيف في الخليج.",
    points: ["روابط أصحاب العمل الرسمية", "السعودية والإمارات وقطر وعُمان", "تنبيهات ضد احتيال التوظيف"],
    button: "وظائف الشرق الأوسط",
  },
} as const

export function JobsHighlight({ lang = "en" }: { lang?: Lang }) {
  const [target, setTarget] = useState<HTMLElement | null>(null)
  const t = copy[lang]

  useEffect(() => {
    const main = document.querySelector("main")
    if (!main) return
    let host = document.querySelector<HTMLElement>("[data-jobs-highlight-host]")
    if (!host) {
      host = document.createElement("div")
      host.dataset.jobsHighlightHost = "true"
      const tools = document.getElementById("tools")
      if (tools) tools.insertAdjacentElement("afterend", host)
      else main.appendChild(host)
    }
    setTarget(host)
  }, [])

  if (!target) return null

  return createPortal(
    <section className="border-y border-emerald-950/10 bg-[#f7f1e3] py-12 sm:py-14" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-7 rounded-[2rem] border border-amber-900/10 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-[#8a6b2d]">
              <BriefcaseBusiness className="h-4 w-4" /> {t.eyebrow}
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-[-0.03em] sm:text-3xl">{t.title}</h2>
            <p className="mt-3 max-w-4xl leading-7 text-[#657168]">{t.body}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {t.points.map((point) => (
                <span key={point} className="inline-flex items-center gap-2 rounded-full bg-[#eef4ef] px-3 py-2 text-xs font-bold text-[#365548]">
                  <CheckCircle2 className="h-3.5 w-3.5" /> {point}
                </span>
              ))}
            </div>
          </div>
          <a href="/jobs-middle-east/" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#123b2c] px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-emerald-950/10">
            {t.button} <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>,
    target,
  )
}
