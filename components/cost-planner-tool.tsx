"use client"

import { useMemo, useState } from "react"
import { Calculator, RotateCcw } from "lucide-react"

type CostKey = "compliance" | "testing" | "localisation" | "freight" | "customs" | "platform" | "fulfilment" | "marketing" | "professional" | "other"

type CostItem = { key: CostKey; label: string; note: string }

const items: CostItem[] = [
  { key: "compliance", label: "Registration / compliance", note: "Authority, conformity, registration or certification quotations that actually apply to your product." },
  { key: "testing", label: "Testing / laboratory", note: "Product testing, reports or technical assessment where required." },
  { key: "localisation", label: "Translation / localisation", note: "Arabic content, labels, packaging or documentation preparation." },
  { key: "freight", label: "Freight / shipping", note: "Sample shipment, bulk freight, courier or transport quotations." },
  { key: "customs", label: "Customs / duties / tax buffer", note: "Use a verified customs/tax estimate for the chosen product and import model." },
  { key: "platform", label: "Marketplace / listing costs", note: "Only enter current verified platform or channel costs relevant to your route." },
  { key: "fulfilment", label: "Warehousing / fulfilment", note: "Storage, handling, pick-pack, delivery or local fulfilment estimates." },
  { key: "marketing", label: "Marketing / launch", note: "Content, advertising, promotion, samples, trade activity or launch budget." },
  { key: "professional", label: "Professional / advisory", note: "Optional legal, tax, customs, regulatory or commercial professional fees." },
  { key: "other", label: "Other / contingency", note: "Any other verified cost or planning buffer you want to include." },
]

const empty = Object.fromEntries(items.map((item) => [item.key, ""])) as Record<CostKey, string>

export function CostPlannerTool() {
  const [values, setValues] = useState<Record<CostKey, string>>(empty)

  const total = useMemo(
    () => items.reduce((sum, item) => sum + Math.max(0, Number.parseFloat(values[item.key] || "0") || 0), 0),
    [values],
  )

  const filled = items.filter((item) => Number.parseFloat(values[item.key] || "0") > 0).length

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <label key={item.key} className="rounded-2xl border border-emerald-950/10 bg-white p-5 shadow-[0_10px_30px_rgba(18,59,44,0.04)]">
            <span className="block text-sm font-black text-[#123b2c]">{item.label}</span>
            <span className="mt-1 block min-h-12 text-xs leading-5 text-[#78847c]">{item.note}</span>
            <div className="mt-4 flex items-center overflow-hidden rounded-xl border border-emerald-950/10 bg-[#fbfaf4] focus-within:border-[#c59b4f]">
              <span className="px-3 text-sm font-black text-[#657168]">RM</span>
              <input
                type="number"
                min="0"
                step="0.01"
                inputMode="decimal"
                value={values[item.key]}
                onChange={(event) => setValues((current) => ({ ...current, [item.key]: event.target.value }))}
                placeholder="0.00"
                className="min-w-0 flex-1 bg-transparent px-2 py-3 text-right text-sm font-bold outline-none"
              />
            </div>
          </label>
        ))}
      </div>

      <aside className="h-fit rounded-[2rem] bg-[#123b2c] p-7 text-white shadow-xl lg:sticky lg:top-6">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e5c985] text-[#173426]"><Calculator className="h-6 w-6" /></div>
        <p className="mt-6 text-xs font-black uppercase tracking-[0.15em] text-[#e5c985]">Planning total</p>
        <div className="mt-2 text-4xl font-black sm:text-5xl">RM {total.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
        <p className="mt-3 text-sm leading-6 text-white/70">{filled} of {items.length} cost categories currently included.</p>

        <div className="mt-7 border-t border-white/12 pt-6">
          <h3 className="font-black">How to use this properly</h3>
          <ul className="mt-3 space-y-3 text-sm leading-6 text-white/75">
            <li>• Enter quotations or researched estimates you can trace.</li>
            <li>• Do not treat this total as a regulatory fee quotation.</li>
            <li>• Recalculate for each country, route and product category.</li>
            <li>• Keep contingency separate from confirmed costs.</li>
          </ul>
        </div>

        <button type="button" onClick={() => setValues(empty)} className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-xs font-black text-white hover:bg-white/8"><RotateCcw className="h-4 w-4" /> Reset planner</button>
      </aside>
    </div>
  )
}
