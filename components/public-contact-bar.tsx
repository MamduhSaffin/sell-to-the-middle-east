"use client"

import { Mail, MessageCircle } from "lucide-react"

export function PublicContactBar() {
  return (
    <section className="border-t border-emerald-950/10 bg-[#0d2b20] px-4 py-6 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.14em] text-[#e0bf73]">Questions · corrections · collaboration</p>
          <p className="mt-1 text-sm leading-6 text-white/70">For official enquiries, corrections, institutional matters or collaboration proposals, contact GCC Market Entry directly.</p>
        </div>
        <div className="flex flex-wrap gap-2 text-sm font-bold">
          <a href="mailto:mamduh@tgpugulf.com" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3 hover:bg-white/15">
            <Mail className="h-4 w-4" /> mamduh@tgpugulf.com
          </a>
          <a href="https://wa.me/60126413812" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-[#123b2c]">
            <MessageCircle className="h-4 w-4" /> +60 12-641 3812
          </a>
        </div>
      </div>
    </section>
  )
}
