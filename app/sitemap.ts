import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"

export const dynamic = "force-static"

const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/bm/", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/ar/", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/saudi-arabia/", priority: 0.95, changeFrequency: "monthly" as const },
  { path: "/uae/", priority: 0.95, changeFrequency: "monthly" as const },
  { path: "/official-sources/", priority: 0.95, changeFrequency: "weekly" as const },
  { path: "/jobs-middle-east/", priority: 0.95, changeFrequency: "weekly" as const },
  { path: "/study-middle-east/", priority: 0.95, changeFrequency: "weekly" as const },
  { path: "/bm/study-middle-east/", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/ar/study-middle-east/", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/collaborate/", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/routes-to-market/", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/malaysia-export-desk/", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/cost-planner/", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/beauty-wellness/", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/electronics/", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/guides/", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/guides/gcc-market-entry-checklist-malaysian-brands/", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/guides/arabic-localisation-for-gcc-ecommerce/", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/guides/how-to-test-gcc-demand-before-scaling/", priority: 0.8, changeFrequency: "monthly" as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: SITE_URL + route.path,
    lastModified: new Date("2026-09-20"),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
