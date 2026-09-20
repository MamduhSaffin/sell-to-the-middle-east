import { SITE_BASE_PATH } from "@/lib/site"

export function GccBrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <img
      src={`${SITE_BASE_PATH}/gcc-market-entry-header.svg?v=20260921-live-nav-fix`}
      alt="GCC Market Entry"
      width={560}
      height={120}
      className={compact ? "h-auto w-[170px] sm:w-[195px]" : "h-auto w-[190px] sm:w-[225px]"}
      loading="eager"
      decoding="async"
    />
  )
}
