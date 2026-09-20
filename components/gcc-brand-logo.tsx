import { SITE_BASE_PATH } from "@/lib/site"

export function GccBrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <img
      src={`${SITE_BASE_PATH}/gcc-market-entry-header.svg?v=20260920-brand`}
      alt="GCC Market Entry"
      className={compact ? "h-10 w-auto max-w-[190px] sm:h-12 sm:max-w-[220px]" : "h-12 w-auto max-w-[220px] sm:h-14 sm:max-w-[260px]"}
      loading="eager"
    />
  )
}
