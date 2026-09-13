"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { CalendarDays, ExternalLink, MessageCircle, Video } from "lucide-react"

type Lang = "en" | "bm" | "ar"

const MEET_URL = "https://meet.google.com/euz-mgor-tfg"
const CALENDAR_URL = "https://www.google.com/calendar/event?eid=N2ozbnJxbWR1c2NrbjZjMG9wODFldDVnZWdfMjAyNjA5MThUMDczMDAwWiBtb2VzYWZmaW5AbQ"

const copy = {
  en: {
    badge: "Every Friday · 3:30 PM Malaysia Time",
    title: "Still unsure how eRomman works? Join the weekly Seller Briefing & Open Discussion.",
    body: "This free weekly session is for sellers who are interested in eRomman but still need a clearer explanation before deciding their next step. Join to understand the seller journey, GCC market-entry process, marketplace opportunities, localisation, documentation, digital marketing support and anything you would like to ask directly.",
    points: ["Free weekly briefing", "Open seller Q&A", "Same Google Meet link every Friday"],
    join: "Join Friday Briefing",
    calendar: "View in Google Calendar",
    note: "Scheduled every Friday at 3:30 PM (Malaysia Time). The same meeting link is reused for the weekly session.",
  },
  bm: {
    badge: "Setiap Jumaat · 3:30 Petang Waktu Malaysia",
    title: "Masih belum jelas bagaimana eRomman berfungsi? Sertai Taklimat Penjual & Perbincangan Terbuka mingguan.",
    body: "Sesi mingguan percuma ini adalah untuk penjual yang berminat dengan eRomman tetapi masih perlukan penerangan yang lebih jelas sebelum membuat keputusan seterusnya. Sertai untuk memahami perjalanan penjual, proses kemasukan pasaran GCC, peluang marketplace, lokalisasi, dokumentasi, sokongan digital marketing dan sebarang soalan yang anda mahu tanya secara terus.",
    points: ["Taklimat mingguan percuma", "Sesi soal jawab terbuka", "Pautan Google Meet yang sama setiap Jumaat"],
    join: "Sertai Taklimat Jumaat",
    calendar: "Lihat dalam Google Calendar",
    note: "Dijadualkan setiap Jumaat pada 3:30 petang (Waktu Malaysia). Pautan mesyuarat yang sama digunakan setiap minggu.",
  },
  ar: {
    badge: "كل جمعة · 3:30 مساءً بتوقيت ماليزيا",
    title: "هل ما زلت غير متأكد من طريقة عمل eRomman؟ انضم إلى جلسة تعريف البائعين والنقاش المفتوح الأسبوعية.",
    body: "هذه جلسة أسبوعية مجانية للبائعين المهتمين بـ eRomman والذين يحتاجون إلى شرح أوضح قبل تحديد الخطوة التالية. يمكنكم الانضمام لفهم رحلة البائع، دخول أسواق الخليج، فرص المنصات، التوطين العربي، الوثائق، دعم التسويق الرقمي وطرح الأسئلة مباشرة.",
    points: ["جلسة تعريف مجانية أسبوعية", "أسئلة وأجوبة مفتوحة للبائعين", "نفس رابط Google Meet كل جمعة"],
    join: "انضم إلى جلسة الجمعة",
    calendar: "عرض في تقويم Google",
    note: "الموعد كل جمعة الساعة 3:30 مساءً بتوقيت ماليزيا. يتم استخدام نفس رابط الاجتماع أسبوعياً.",
  },
} as const

export function WeeklySellerBriefing({ lang = "en" }: { lang?: Lang }) {
  const [target, setTarget] = useState<HTMLElement | null>(null)
  const t = copy[lang]

  useEffect(() => {
    const main = document.querySelector("main")
    if (!main) return

    let host = document.querySelector<HTMLElement>("[data-weekly-seller-briefing-host]")
    if (!host) {
      host = document.createElement("div")
      host.dataset.weeklySellerBriefingHost = "true"
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
    <section className="border-y border-red-100 bg-gradient-to-br from-[#fffaf7] via-white to-[#fff4f4] py-10 sm:py-14" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-red-100 bg-white shadow-[0_24px_70px_rgba(93,13,18,0.10)]">
          <div className="grid gap-0 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-[#fff7f7] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-primary">
                <CalendarDays className="h-4 w-4" />
                {t.badge}
              </span>
              <h2 className="mt-5 max-w-4xl text-2xl font-black leading-tight tracking-tight text-[#211916] sm:text-3xl lg:text-4xl">{t.title}</h2>
              <p className="mt-4 max-w-4xl text-base leading-relaxed text-muted-foreground sm:text-lg">{t.body}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                {t.points.map((point) => (
                  <span key={point} className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-[#fffaf7] px-3 py-2 text-sm font-bold text-[#4a3f3a]">
                    <MessageCircle className="h-4 w-4 text-primary" />
                    {point}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href={MEET_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-black text-white shadow-lg transition hover:opacity-90">
                  <Video className="h-4 w-4" />
                  {t.join}
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-white px-5 py-3 text-sm font-black text-primary transition hover:bg-[#fff7f7]">
                  <CalendarDays className="h-4 w-4" />
                  {t.calendar}
                </a>
              </div>
            </div>

            <div className="flex items-center bg-[#8f1018] p-6 text-white sm:p-8 lg:p-10">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                  <Video className="h-7 w-7" />
                </div>
                <div className="mt-6 text-sm font-black uppercase tracking-[0.16em] text-white/70">Weekly Live Session</div>
                <div className="mt-2 text-3xl font-black">Friday · 3:30 PM</div>
                <div className="mt-1 text-sm font-bold text-white/80">Malaysia Time (MYT)</div>
                <p className="mt-5 text-sm leading-relaxed text-white/85">{t.note}</p>
                <div className="mt-6 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-xs font-bold leading-relaxed text-white/90">Google Meet: meet.google.com/euz-mgor-tfg</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>,
    target,
  )
}
