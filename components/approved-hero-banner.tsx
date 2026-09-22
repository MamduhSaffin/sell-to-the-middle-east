"use client"

import { useEffect, useState } from "react"
import { SITE_BASE_PATH } from "@/lib/site"

export function ApprovedHeroBanner() {
  const fallback = `${SITE_BASE_PATH}/gcc-market-entry-approved.png`
  const [src, setSrc] = useState(fallback)

  useEffect(() => {
    const paths = [1, 2, 3].map(
      (part) => `${SITE_BASE_PATH}/images/social/gcc-banner.b64.${part}`,
    )

    Promise.all(
      paths.map(async (path) => {
        const response = await fetch(path, { cache: "no-store" })
        if (!response.ok) throw new Error(`Banner part failed: ${path}`)
        return response.text()
      }),
    )
      .then((parts) => setSrc(`data:image/webp;base64,${parts.join("")}`))
      .catch(() => setSrc(fallback))
  }, [fallback])

  return (
    <section className="bg-white pt-4 sm:pt-6" aria-label="GCC Market Entry">
      <div className="mx-auto w-full max-w-[1600px] px-2 sm:px-4">
        <img
          src={src}
          alt="GCC Market Entry — Malaysia to Saudi Arabia, UAE and the wider GCC"
          width={640}
          height={360}
          fetchPriority="high"
          decoding="async"
          className="block h-auto w-full rounded-2xl object-cover shadow-[0_18px_48px_rgba(18,59,44,0.14)] sm:rounded-3xl"
        />
      </div>
    </section>
  )
}
