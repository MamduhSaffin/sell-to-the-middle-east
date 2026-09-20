"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { ArrowRight, CheckCircle2, GraduationCap } from "lucide-react"

type Lang = "en" | "bm" | "ar"

const copy = {
  en: {
    eyebrow: "NEW FREE RESOURCE",
    title: "Interested in studying in the Middle East?",
    body: "Explore verified official links for university admissions, scholarships and funding opportunities across Saudi Arabia, UAE, Qatar, Oman, Bahrain and Kuwait.",
    points: ["Official university links", "Scholarships & funding", "English • BM • العربية"],
    button: "Open Study & Scholarships",
    href: "/study-middle-east/",
  },
  bm: {
    eyebrow: "SUMBER PERCUMA BAHARU",
    title: "Berminat untuk belajar di Timur Tengah?",
    body: "Teroka pautan rasmi yang disemak untuk kemasukan universiti, biasiswa dan pembiayaan di Arab Saudi, UAE, Qatar, Oman, Bahrain dan Kuwait.",
    points: ["Pautan universiti rasmi", "Biasiswa & pembiayaan", "BM • English • العربية"],
    button: "Buka Pengajian & Biasiswa",
    href: "/bm/study-middle-east/",
  },
  ar: {
    eyebrow: "مورد مجاني جديد",
    title: "هل ترغب في الدراسة في الشرق الأوسط؟",
    body: "استكشف روابط رسمية موثقة للقبول الجامعي والمنح والتمويل في السعودية والإمارات وقطر وعُمان والبحرين والكويت.",
    points: ["روابط جامعات رسمية", "منح وتمويل", "العربية • English • BM"],
    button: "الدراسة والمنح",
    href: "/ar/study-middle-east/",
  },
} as const

export function StudyHighlight({ lang = "en" }: { lang?: Lang }) {
  const [target, setTarget] = useState<HTMLElement | null>(null)
  const t = copy[lang]

  useEffect(() => {
    const main = document.querySelector("main")
    if (!main) return
    let host = document.querySelector<HTMLElement>("[data-study-highlight-host]")
    if (!host) {
      host = document.createElement("div")
      host.dataset.studyHighlightHost = "true"
      const jobs = document.querySelector<HTMLElement>("[data-jobs-highlight-host]")
      const tools = document.getElementById("tools")
      if (jobs) jobs.insertAdjacentElement("afterend", host)
      else if (tools) tools.insertAdjacentElement("afterend", host)
      else main.appendChild(host)
    }
    setTarget(host)
  }, [])

  if (!target) return null

  return createPortal(
    <section className="border-b border-emerald-950/10 bg-[#eef4ef] py-12 sm:py-14" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-7 rounded-[2rem] border border-emerald-950/10 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-[#2d6a4f]">
              <GraduationCap className="h-4 w-4" /> {t.eyebrow}
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-[-0.03em] sm:text-3xl">{t.title}</h2>
            <p className="mt-3 max-w-4xl leading-7 text-[#657168]">{t.body}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {t.points.map((point) => (
                <span key={point} className="inline-flex items-center gap-2 rounded-full bg-[#f7f1e3] px-3 py-2 text-xs font-bold text-[#66511f]">
                  <CheckCircle2 className="h-3.5 w-3.5" /> {point}
                </span>
              ))}
            </div>
          </div>
          <a href={t.href} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#123b2c] px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-emerald-950/10">
            {t.button} <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>,
    target,
  )
}
