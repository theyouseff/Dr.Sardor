import { CalendarCheck, Phone, ShieldCheck } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useConsultation } from "@/components/consultation"
import { doctor, expert } from "@/data/content"

export function Header() {
  const { open } = useConsultation()
  const links = [
    ["Kim uchun", "#kim-uchun"],
    ["Mutaxassis", "#mutaxassis"],
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
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-gradient-to-b from-sky-soft to-white shadow-[0_24px_60px_-24px_hsl(205_90%_52%/0.45)]">
            <img src="/doctor.webp" alt={doctor.name} className="absolute bottom-0 left-1/2 h-[98%] max-w-none -translate-x-1/2" />
          </div>
          <div className="absolute -bottom-3 left-4 rounded-2xl border border-border bg-background px-5 py-3 shadow-lg sm:-left-4">
            <p className="font-display text-xl font-extrabold text-primary">{doctor.years}</p>
            <p className="text-xs text-muted-foreground">yil tajriba</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Expert() {
  return (
    <section id="mutaxassis" className="bg-muted/60 py-20 sm:py-28">
      <div className="container grid items-center gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <div className="relative mx-auto aspect-[546/578] w-full max-w-md overflow-hidden rounded-[2rem] shadow-[0_28px_60px_-24px_hsl(215_70%_20%/0.55)]">
          <img src="/expert.jpg" alt={doctor.name} className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Mutaxassis haqida</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">{doctor.name}</h2>
          <p className="mt-2 font-semibold text-primary">{expert.eyebrow}</p>
          <p className="mt-2 text-muted-foreground">{expert.sub}</p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {expert.stats.map((s) => (
              <div key={s.label} className={cn("rounded-2xl border border-border bg-background p-5", s.wide && "col-span-2")}>
                <p className="font-display text-3xl font-extrabold tabular-nums sm:text-4xl">
                  {s.value}
                  <span className="text-primary">{s.unit}</span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
