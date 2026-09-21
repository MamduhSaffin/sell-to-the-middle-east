import { SITE_BASE_PATH } from "@/lib/site"

export function GccBrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <img
      src={`${SITE_BASE_PATH}/gcc-market-entry-approved.png`}
      alt="GCC Market Entry"
      width={1581}
      height={995}
      className={compact ? "h-auto w-[120px] shrink-0" : "h-auto w-[140px] shrink-0"}
      loading="eager"
      decoding="async"
    />
  )
}
