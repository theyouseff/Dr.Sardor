import { useState } from "react"
import { Check } from "lucide-react"

import { allOn, services, steps } from "@/data/content"
import { cn } from "@/lib/utils"

export function SectionHead({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-muted-foreground">{text}</p>}
    </div>
  )
}

export function Services() {
  return (
    <section id="xizmatlar" className="container py-20 sm:py-28">
      <SectionHead eyebrow="Xizmatlar" title="Sizga mos implant yechimi" />
      <div className="grid gap-5 md:grid-cols-3">
        {services.map((s, i) => (
          <div key={s.title} className="rounded-3xl border border-border p-8 transition hover:border-primary/40 hover:shadow-[0_12px_40px_-16px_hsl(205_90%_52%/0.35)]">
            <span className="font-display text-sm font-bold text-primary">0{i + 1}</span>
            <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// Yoy (Bezier) bo'ylab nuqta hisoblash
const P = [[8, 64], [8, 8], [92, 8], [92, 64]] as const
const bez = (t: number) => {
  const u = 1 - t
  const f = (i: 0 | 1) =>
    u ** 3 * P[0][i] + 3 * u * u * t * P[1][i] + 3 * u * t * t * P[2][i] + t ** 3 * P[3][i]
  return [f(0), f(1)] as const
}
const teeth = Array.from({ length: 14 }, (_, i) => i / 13)

function Arch({ positions }: { positions: number[] }) {
  return (
    <svg viewBox="0 0 100 76" className="w-full" role="img" aria-label="Jagdagi implantlar joylashuvi">
      <path d="M8 64 C 8 8, 92 8, 92 64" fill="none" stroke="hsl(204 100% 94%)" strokeWidth="13" strokeLinecap="round" />
      {teeth.map((t) => {
        const [x, y] = bez(t)
        return <circle key={t} cx={x} cy={y} r="3.1" fill="#fff" stroke="hsl(205 35% 85%)" strokeWidth="0.5" />
      })}
      <path d="M8 64 C 8 8, 92 8, 92 64" fill="none" stroke="hsl(205 90% 52%)" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="1.5 2" />
      {positions.map((t) => {
        const [x, y] = bez(t)
        return (
          <g key={t}>
            <circle cx={x} cy={y} r="5.4" fill="hsl(205 90% 52%)" fillOpacity="0.18" />
            <circle cx={x} cy={y} r="2.9" fill="hsl(205 90% 52%)" stroke="#fff" strokeWidth="1" />
          </g>
        )
      })}
    </svg>
  )
}

export function AllOn() {
  const [tab, setTab] = useState<"four" | "six">("four")
  const d = allOn[tab]
  return (
    <section id="all-on" className="bg-muted/60 py-20 sm:py-28">
      <div className="container">
        <SectionHead
          eyebrow="To'liq jag uchun"
          title="All-on-4 yoki All-on-6?"
          text="Ikkala usulda ham tishsiz jag kam implant bilan tiklanadi. Qaysi biri sizga mosligini tomografiyadan so'ng birga tanlaymiz."
        />
        <div className="mx-auto mb-10 flex w-fit rounded-full border border-border bg-background p-1">
          {(["four", "six"] as const).map((k) => (
            <button
              key={k}
              onClick={() => setTab(k)}
              className={cn(
                "rounded-full px-7 py-2.5 text-sm font-semibold transition",
                tab === k ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {allOn[k].label}
            </button>
          ))}
        </div>
        <div className="grid items-center gap-10 rounded-[2rem] border border-border bg-background p-6 sm:p-10 md:grid-cols-2">
          <div className="mx-auto w-full max-w-md">
            <Arch positions={d.positions} />
            <p className="mt-2 text-center text-xs text-muted-foreground">Implantlar joylashuvi (sxema)</p>
          </div>
          <div key={tab} className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <p className="text-sm font-semibold text-primary">{d.tagline}</p>
            <h3 className="mt-2 text-3xl font-extrabold">{d.label}</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{d.text}</p>
            <ul className="mt-6 space-y-3">
              {d.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Steps() {
  return (
    <section className="container py-20 sm:py-28">
      <SectionHead eyebrow="Jarayon" title="Davolash qanday o'tadi" />
      <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} className="relative">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-display text-lg font-bold text-primary-foreground">
              {i + 1}
            </span>
            {i < steps.length - 1 && (
              <span className="absolute left-14 right-0 top-6 hidden h-px bg-border lg:block" />
            )}
            <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
