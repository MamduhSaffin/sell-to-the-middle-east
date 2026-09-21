export function ApprovedHeroBanner() {
  return (
    <section aria-label="GCC Market Entry featured banner" className="mx-auto w-full max-w-[1480px] px-3 pt-4 sm:px-5 sm:pt-6">
      <img
        src="/images/social/gcc-approved-hero.jpg"
        alt="GCC Market Entry — expand your brand into the GCC"
        width={1200}
        height={675}
        fetchPriority="high"
        decoding="async"
        className="h-auto w-full rounded-2xl shadow-2xl"
      />
    </section>
  )
}
