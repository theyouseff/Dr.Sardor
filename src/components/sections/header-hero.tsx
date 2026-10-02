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
    <section id="mutaxassis" className="relative overflow-hidden bg-[#0a1424] text-white">
      {/* Klinika xonasi: chap chetdan boshlanib, o'ngda ko'k fonga singib ketadi */}
      <div className="relative md:absolute md:inset-y-0 md:left-0 md:w-1/2 md:max-w-[760px]">
        <img
          src="/expert.jpg"
          alt={doctor.name}
          className="block aspect-[546/578] w-full object-cover object-[50%_20%] md:aspect-auto md:h-full"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,#0a1424_0%,transparent_14%,transparent_70%,#0a1424_100%)] md:bg-[linear-gradient(to_right,transparent_48%,#0a1424_100%),linear-gradient(to_bottom,#0a1424_0%,transparent_14%,transparent_86%,#0a1424_100%)]" />
      </div>
      <div className="container relative grid gap-10 pb-16 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:py-24">
        <div className="hidden md:block" aria-hidden />
        <div className="-mt-14 md:mt-0">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#4da3ee]">Mutaxassis haqida</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-5xl">{doctor.name}</h2>
          <p className="mt-2 text-lg font-semibold text-[#4da3ee]">{expert.eyebrow}</p>
          <p className="mt-2 text-white/70">{expert.sub}</p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {expert.stats.map((s) => (
              <div key={s.label} className={cn("rounded-2xl border border-white/10 bg-white/[0.04] p-5", s.wide && "col-span-2")}>
                <p className="font-display text-3xl font-extrabold tabular-nums sm:text-4xl">
                  {s.value}
                  <span className="text-[#4da3ee]">{s.unit}</span>
                </p>
                <p className="mt-1 text-sm text-white/65">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
