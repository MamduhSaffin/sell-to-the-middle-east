import { SITE_BASE_PATH } from "@/lib/site"

export function GccBrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <img
      src={`${SITE_BASE_PATH}/gcc-market-entry-brand.webp?v=20260921-brand`}
      alt="GCC Market Entry"
      className={compact ? "h-auto w-[128px] sm:w-[150px]" : "h-auto w-[160px] sm:w-[190px]"}
      loading="eager"
    />
  )
}
