"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { MonitorSmartphone } from "lucide-react"

type Lang = "en" | "bm" | "ar"

const copy: Record<Lang, { label: string; message: string; dir: "ltr" | "rtl" }> = {
  en: {
    label: "Viewing tip",
    message: "For the best viewing experience and full visual details, we recommend using a desktop or tablet. You can still continue on mobile.",
    dir: "ltr",
  },
  bm: {
    label: "Cadangan paparan",
    message: "Untuk pengalaman paparan terbaik dan visual yang lebih lengkap, kami mengesyorkan menggunakan desktop atau tablet. Anda masih boleh meneruskan menggunakan telefon.",
    dir: "ltr",
  },
  ar: {
    label: "نصيحة للعرض",
    message: "لأفضل تجربة عرض ولرؤية التفاصيل المرئية بشكل أوضح، نوصي باستخدام جهاز كمبيوتر أو جهاز لوحي. ويمكنك الاستمرار عبر الهاتف المحمول.",
    dir: "rtl",
  },
}

export function ViewingExperienceNotice({ lang }: { lang: Lang }) {
  const [target, setTarget] = useState<HTMLElement | null>(null)
  const text = copy[lang]

  useEffect(() => {
    const main = document.querySelector("main")
    if (!main) return

    let host = document.querySelector<HTMLElement>("[data-viewing-experience-notice-host]")
    if (!host) {
      host = document.createElement("div")
      host.dataset.viewingExperienceNoticeHost = "true"

      const sections = Array.from(main.children).filter(
        (node): node is HTMLElement => node instanceof HTMLElement && node.tagName === "SECTION",
      )
      const heroSection = sections[0]
      if (heroSection) heroSection.insertAdjacentElement("afterend", host)
      else main.prepend(host)
    }

    setTarget(host)
  }, [])

  if (!target) return null

  return createPortal(
    <aside className="border-b border-red-100 bg-white" aria-label={text.label} dir={text.dir}>
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-start justify-center gap-3 rounded-2xl border border-red-100 bg-[#fffaf7] px-4 py-3 text-sm text-[#5f514b] shadow-sm sm:items-center">
          <MonitorSmartphone className="mt-0.5 h-5 w-5 shrink-0 text-primary sm:mt-0" aria-hidden="true" />
          <p className="leading-relaxed">
            <strong className="font-black text-[#2c2421]">{text.label}:</strong>{" "}
            {text.message}
          </p>
        </div>
      </div>
    </aside>,
    target,
  )
}
