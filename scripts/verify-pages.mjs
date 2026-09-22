import assert from "node:assert/strict"
import { createHash } from "node:crypto"
import { readFile, writeFile } from "node:fs/promises"
import { resolve, sep } from "node:path"
import { setTimeout as delay } from "node:timers/promises"

const digest = (bytes) => createHash("sha256").update(bytes).digest("hex")
const routes = [
  "",
  "en/",
  "bm/",
  "ar/",
  "saudi-arabia/",
  "uae/",
  "official-sources/",
  "jobs-middle-east/",
  "study-middle-east/",
  "bm/study-middle-east/",
  "ar/study-middle-east/",
  "collaborate/",
  "routes-to-market/",
  "malaysia-export-desk/",
  "cost-planner/",
  "beauty-wellness/",
  "electronics/",
  "guides/",
  "guides/gcc-market-entry-checklist-malaysian-brands/",
  "guides/arabic-localisation-for-gcc-ecommerce/",
  "guides/how-to-test-gcc-demand-before-scaling/",
]
const guideRoutes = ["", "en/", "bm/", "ar/"]
const visibleLanguageRoutes = ["bm/", "ar/"]
const headlines = new Map([
  ["", "Enter the GCC with better information."],
  ["en/", "Enter the GCC with better information."],
  ["bm/", "Masuk pasaran GCC dengan maklumat yang lebih jelas."],
  ["ar/", "ادخل أسواق الخليج بمعلومات أوضح."],
])
const sections = ["start", "countries", "readiness", "routes", "tools"]
const socialPreviewPath = "images/social/gcc-market-entry-approved-banner.webp"
const iconPath = "icon.svg"
const appleIconPath = "apple-icon.png"

export async function stamp(directory, commit, basePath) {
  assert.match(commit, /^[0-9a-f]{40}$/, "A full source commit SHA is required")
  assert.equal(basePath, "", "Custom-domain deployment must use the site root")
  const root = resolve(directory)
  const files = new Map()

  async function record(filePath, url) {
    const absolute = resolve(root, filePath)
    assert.ok(absolute.startsWith(root + sep), "Asset must stay inside the export")
    const bytes = await readFile(absolute)
    files.set(url, { path: url, sha256: digest(bytes) })
    return bytes.toString("utf8")
  }

  for (const route of routes) {
    const html = await record(route + "index.html", route)
    assert.ok(html.includes("/_next/static/"), "Compiled assets missing from " + (route || "/"))

    if (route === "") {
      assert.ok(html.includes("gcc-market-entry-approved-banner.webp"), "Homepage is missing the approved social sharing preview")
      assert.ok(html.includes('content="1200"'), "Homepage social preview width metadata is missing")
      assert.ok(html.includes('content="630"'), "Homepage social preview height metadata is missing")
    }

    if (route === "jobs-middle-east/") {
      assert.ok(html.includes("Looking for a job in the Middle East?"), "Middle East jobs directory headline is missing")
      assert.ok(html.includes("emiratesgroupcareers.com"), "Middle East jobs directory is missing Emirates official careers")
      assert.ok(html.includes("careers.aramco.com"), "Middle East jobs directory is missing Aramco official careers")
      assert.ok(html.includes("clevelandclinicabudhabi.ae"), "Middle East jobs directory is missing verified healthcare careers")
    }

    if (route === "study-middle-east/") {
      assert.ok(html.includes("Interested in studying in the Middle East?"), "English Middle East study page headline is missing")
      assert.ok(html.includes("studyinsaudi.moe.gov.sa"), "Study in Saudi official portal is missing")
      assert.ok(html.includes("admissions.kaust.edu.sa"), "KAUST funding link is missing")
      assert.ok(html.includes("www.qu.edu.qa"), "Qatar University scholarship link is missing")
      assert.ok(html.includes("www.ku.ac.ae"), "Khalifa University scholarship link is missing")
      assert.ok(html.includes("www.squ.edu.om"), "Sultan Qaboos University scholarship link is missing")
    }

    if (route === "bm/study-middle-east/") {
      assert.ok(html.includes("Berminat untuk belajar di Timur Tengah?"), "BM Middle East study page headline is missing")
    }

    if (route === "ar/study-middle-east/") {
      assert.ok(html.includes("هل ترغب في الدراسة في الشرق الأوسط؟"), "Arabic Middle East study page headline is missing")
      assert.ok(html.includes('dir="rtl"'), "Arabic study page RTL layout is missing")
    }

    if (route === "collaborate/") {
      assert.ok(html.includes("Build useful GCC knowledge together"), "Collaboration page headline is missing")
      assert.ok(html.includes("only describe an organisation as a partner"), "Collaboration transparency rule is missing")
    }

    if (guideRoutes.includes(route)) {
      assert.ok(html.includes(headlines.get(route)), "Independent GCC Market Entry guide missing from " + (route || "/"))
      for (const id of sections) assert.ok(html.includes('id="' + id + '"'), "Missing resource section " + id + " from " + (route || "/"))
      for (const language of visibleLanguageRoutes) {
        assert.ok(html.includes("/" + language), "Missing language route " + language + " from " + (route || "/"))
      }
      assert.ok(!html.toLowerCase().includes("eromman"), "Legacy employer branding found on " + (route || "/"))
      if (route === "ar/") assert.ok(html.includes('dir="rtl"'), "Arabic RTL missing")
    }

    for (const tag of html.match(/<(?:script|link|img)\b[^>]*>/g) || []) {
      const match = tag.match(/(?:src|href)="([^"]+)"/)
      if (!match) continue
      const asset = match[1].replaceAll("&amp;", "&")
      if (/^(?:https?:|data:|\/\/)/.test(asset)) continue
      assert.ok(asset.startsWith("/"), "Asset has wrong root path: " + asset)
      const assetPath = decodeURIComponent(asset.split(/[?#]/)[0].slice(1))
      if (!assetPath) continue
      await record(assetPath, asset.slice(1))
    }
  }

  await record(socialPreviewPath, socialPreviewPath)
  await record(iconPath, iconPath)
  await record(appleIconPath, appleIconPath)

  const manifest = { commit, basePath, files: [...files.values()] }
  await writeFile(resolve(root, "deployment.json"), JSON.stringify(manifest, null, 2) + "\n")
  await writeFile(resolve(root, ".nojekyll"), "")
  console.log("Validated GCC Market Entry routes, jobs, study directory, collaboration page, favicon and approved social preview across " + files.size + " exported pages/assets for " + commit)
  return manifest
}

async function get(url) {
  const response = await fetch(url, {
    headers: { "Cache-Control": "no-cache" },
    cache: "no-store",
    signal: AbortSignal.timeout(20000),
  })
  assert.equal(response.status, 200, url + " returned HTTP " + response.status)
  return Buffer.from(await response.arrayBuffer())
}

export async function verify(siteUrl, commit) {
  const base = new URL(siteUrl.endsWith("/") ? siteUrl : siteUrl + "/")
  const manifestUrl = new URL("deployment.json", base)
  manifestUrl.searchParams.set("release", commit)
  const manifest = JSON.parse((await get(manifestUrl)).toString("utf8"))
  assert.equal(manifest.commit, commit, "Pages is serving another release")
  assert.equal(base.pathname, "/", "Custom domain must serve from the root path")
  assert.equal(manifest.basePath, "", "Published release has an unexpected base path")
  for (const route of routes) assert.ok(manifest.files.some((file) => file.path === route), "Missing route " + (route || "/"))
  for (const assetPath of [socialPreviewPath, iconPath, appleIconPath]) {
    assert.ok(manifest.files.some((file) => file.path === assetPath), "Missing shared asset " + assetPath)
  }

  for (let offset = 0; offset < manifest.files.length; offset += 6) {
    await Promise.all(manifest.files.slice(offset, offset + 6).map(async (file) => {
      const url = new URL(file.path, base)
      assert.ok(url.origin === base.origin && url.pathname.startsWith(base.pathname), "Unexpected asset URL")
      assert.equal(digest(await get(url)), file.sha256, "Stale or incorrect published file: " + url.href)
    }))
  }
  console.log("LIVE VERIFIED: " + commit + " at " + base.href + " — all independent resource routes and " + manifest.files.length + " pages/assets match the build.")
}

if (process.argv[2] === "stamp") {
  await stamp(process.argv[3], process.argv[4], process.argv[5])
} else if (process.argv[2] === "live") {
  const attempts = Number(process.env.PAGES_VERIFY_ATTEMPTS || 31)
  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      await verify(process.argv[3], process.argv[4])
      break
    } catch (error) {
      if (attempt === attempts) throw error
      console.log("Waiting for custom-domain/DNS propagation (" + attempt + "/" + attempts + "): " + error.message)
      await delay(20000)
    }
  }
}
