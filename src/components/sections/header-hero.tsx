import { CalendarCheck, Phone, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useConsultation } from "@/components/consultation"
import { doctor, stats } from "@/data/content"

export function Header() {
  const { open } = useConsultation()
  const links = [
    ["Xizmatlar", "#xizmatlar"],
    ["All-on-4/6", "#all-on"],
    ["Narxlar", "#narxlar"],
    ["Sharhlar", "#sharhlar"],
    ["Savollar", "#savollar"],
  ]
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="font-display text-lg font-extrabold tracking-tight">
          {doctor.name}<span className="text-primary">.</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="transition hover:text-foreground">{l}</a>
          ))}
        </nav>
        <Button size="sm" onClick={open}>Yozilish</Button>
      </div>
    </header>
  )
}

export function Hero() {
  const { open } = useConsultation()
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-sky-soft blur-3xl" />
      <div className="container relative grid items-center gap-12 py-14 md:grid-cols-[1.1fr_0.9fr] md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3.5 py-1.5 text-xs font-semibold text-primary">
            <ShieldCheck className="h-3.5 w-3.5" /> {doctor.title}
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
            Tishlaringizni <span className="text-primary">bir kunda</span> tiklang
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Zamonaviy implantatsiya, All-on-4 va All-on-6. Og'riqsiz, aniq rejali va kafolatli natija bilan — tabiiy tabassumga qaytamiz.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" onClick={open}>
              <CalendarCheck className="h-5 w-5" /> Konsultatsiyaga yozilish
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={doctor.phoneHref}><Phone className="h-5 w-5" /> Qo'ng'iroq qilish</a>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="absolute inset-0 -m-4 rounded-full border border-dashed border-primary/30" />
          <div className="relative aspect-square overflow-hidden rounded-full border-[6px] border-white bg-sky-soft shadow-[0_24px_60px_-20px_hsl(205_90%_52%/0.45)]">
            <img src="/doctor.jpg" alt={doctor.name} className="h-full w-full scale-[1.12] object-cover" />
          </div>
          <div className="absolute -bottom-2 left-0 rounded-2xl border border-border bg-background px-5 py-3 shadow-lg sm:-left-4">
            <p className="font-display text-xl font-extrabold text-primary">{stats[0].value}</p>
            <p className="text-xs text-muted-foreground">{stats[0].label}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Stats() {
  return (
    <section className="border-y border-border bg-muted/60">
      <div className="container grid grid-cols-2 gap-y-8 py-10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-3xl font-extrabold text-primary sm:text-4xl">{s.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
