import { SITE_BASE_PATH } from "@/lib/site"

export function GccBrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <img
      src={`${SITE_BASE_PATH}/gcc-market-entry-logo.svg?v=20260920-approved`}
      alt="GCC Market Entry"
      className={compact ? "h-14 w-14 rounded-xl object-contain sm:h-16 sm:w-16" : "h-16 w-16 rounded-xl object-contain sm:h-[4.5rem] sm:w-[4.5rem]"}
      loading="eager"
    />
  )
}
