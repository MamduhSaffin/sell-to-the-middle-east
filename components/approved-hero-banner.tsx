import { SITE_BASE_PATH } from "@/lib/site"

export function ApprovedHeroBanner() {
  const src = `${SITE_BASE_PATH}/images/social/gcc-market-entry-approved-banner.webp?v=20260922-approved-logo`

  return (
    <section className="bg-white pt-4 sm:pt-6" aria-label="GCC Market Entry">
      <div className="mx-auto w-full max-w-[1600px] px-2 sm:px-4">
        <img
          src={src}
          alt="GCC Market Entry — Malaysia to Saudi Arabia, UAE and the wider GCC"
          width={1200}
          height={675}
          fetchPriority="high"
          decoding="async"
          className="block h-auto w-full rounded-2xl object-cover shadow-[0_18px_48px_rgba(18,59,44,0.14)] sm:rounded-3xl"
        />
      </div>
    </section>
  )
}
