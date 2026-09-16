import type { Metadata } from "next"
import { TgpuGulfHome } from "@/components/tgpu-gulf-home"
import { SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "TGPU Gulf Advisory | التجارة بين ماليزيا والسعودية والخليج",
  description:
    "TGPU Gulf Advisory تقدم دعماً عملياً لدخول السوق وتيسير التجارة والبحث عن الموردين والمشترين والتنسيق التجاري بين ماليزيا والسعودية ودول الخليج.",
  keywords: [
    "تجارة ماليزيا السعودية",
    "استيراد من ماليزيا للسعودية",
    "موردين ماليزيا",
    "دخول السوق السعودي",
    "شركات ماليزية للتصدير للسعودية",
    "Malaysia suppliers Saudi Arabia",
    "Malaysia GCC sourcing",
  ],
  alternates: {
    canonical: `${SITE_URL}/ar/`,
    languages: {
      "en-MY": `${SITE_URL}/`,
      "ms-MY": `${SITE_URL}/bm/`,
      "ar-SA": `${SITE_URL}/ar/`,
      "x-default": `${SITE_URL}/`,
    },
  },
  openGraph: {
    locale: "ar_SA",
    title: "TGPU Gulf Advisory — ماليزيا ↔ السعودية ودول الخليج",
    description: "استشارات دخول السوق وتيسير التجارة والبحث عن الموردين والمشترين بين ماليزيا والخليج.",
  },
}

export default function Page() {
  return <TgpuGulfHome lang="ar" />
}
