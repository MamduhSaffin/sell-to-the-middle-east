import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"

export const dynamic = "force-static"

const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/ar/", priority: 0.95, changeFrequency: "weekly" as const },
  { path: "/bm/", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/saudi-arabia/", priority: 0.95, changeFrequency: "monthly" as const },
  { path: "/uae/", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/malaysia-sourcing/", priority: 0.95, changeFrequency: "monthly" as const },
  { path: "/ar/malaysia-sourcing/", priority: 0.95, changeFrequency: "monthly" as const },
  { path: "/beauty-wellness/", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/electronics/", priority: 0.8, changeFrequency: "monthly" as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: SITE_URL + route.path,
    lastModified: new Date("2026-09-17"),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
