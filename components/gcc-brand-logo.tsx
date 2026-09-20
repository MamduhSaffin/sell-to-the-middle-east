import { SITE_BASE_PATH } from "@/lib/site"

export function GccBrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <img
      src={`${SITE_BASE_PATH}/gcc-market-entry-logo.svg`}
      alt="GCC Market Entry"
      className={compact ? "h-11 w-auto max-w-[190px]" : "h-12 w-auto max-w-[220px]"}
      loading="eager"
    />
  )
}
