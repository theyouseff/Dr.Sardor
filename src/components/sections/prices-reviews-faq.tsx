import { useState } from "react"
import { Play } from "lucide-react"

import TestimonialMarquee from "@/components/ui/marquee-01"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useConsultation } from "@/components/consultation"
import { SectionHead } from "./services-allon"
import { doctor, faqs, prices, videoReviews, writtenReviews } from "@/data/content"

function PriceList({ title, items }: { title: string; items: { name: string; note: string; price: string }[] }) {
  return (
    <div className="rounded-3xl border border-border bg-background p-6 sm:p-8">
      <h3 className="text-xl font-bold">{title}</h3>
      <ul className="mt-4 divide-y divide-border">
        {items.map((it) => (
          <li key={it.name} className="flex items-center justify-between gap-4 py-4">
            <div>
              <p className="font-semibold">{it.name}</p>
              <p className="text-xs text-muted-foreground">{it.note}</p>
            </div>
            <p className={it.price ? "font-display font-bold text-primary" : "text-sm text-muted-foreground"}>
              {it.price || "Narx so'rang"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Prices() {
  return (
    <section id="narxlar" className="bg-muted/60 py-20 sm:py-28">
      <div className="container">
        <SectionHead eyebrow="Narxlar" title="Aniq va oldindan kelishilgan" text="Yakuniy narx konsultatsiyada tekshiruv natijasiga qarab belgilanadi." />
        <div className="grid gap-5 md:grid-cols-2">
          <PriceList title="Implantlar" items={prices.implants} />
          <PriceList title="Koronkalar" items={prices.crowns} />
        </div>
      </div>
    </section>
  )
}

function VideoCard({ v }: { v: (typeof videoReviews)[number] }) {
  const isEmbed = /youtube|youtu\.be|vimeo/.test(v.src)
  const card = (
    <button
      disabled={!v.src}
      className="group relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-sky-soft text-left disabled:cursor-default"
    >
      <img src={v.poster} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
      <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-primary shadow-xl transition group-hover:scale-110">
        <Play className="ml-1 h-6 w-6 fill-current" />
      </span>
      <span className="absolute inset-x-0 bottom-0 p-5 text-white">
        <span className="block text-sm font-semibold">{v.caption}</span>
        <span className="text-xs text-white/75">{v.name}</span>
      </span>
    </button>
  )
  if (!v.src) return card
  return (
    <Dialog>
      <DialogTrigger asChild>{card}</DialogTrigger>
      <DialogContent className="max-w-3xl p-3 sm:p-3">
        <DialogTitle className="sr-only">{v.caption}</DialogTitle>
        <div className="aspect-video overflow-hidden rounded-xl bg-black">
          {isEmbed ? (
            <iframe src={v.src} title={v.caption} className="h-full w-full" allow="autoplay; encrypted-media; fullscreen" allowFullScreen />
          ) : (
            <video src={v.src} controls autoPlay playsInline className="h-full w-full" />
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function VideoReviews() {
  return (
    <section id="sharhlar" className="container pt-20 sm:pt-28">
      <SectionHead eyebrow="Video sharhlar" title="Bemorlar o'z so'zlari bilan" />
      <div className="grid gap-5 sm:grid-cols-3">
        {videoReviews.map((v, i) => (
          <VideoCard key={i} v={v} />
        ))}
      </div>
    </section>
  )
}

export function WrittenReviews() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <SectionHead eyebrow="Yozma sharhlar" title="Mamnun bemorlar fikri" />
      </div>
      <TestimonialMarquee reviews={writtenReviews} />
    </section>
  )
}

export function Faq() {
  return (
    <section id="savollar" className="container max-w-3xl pb-20 sm:pb-28">
      <SectionHead eyebrow="Savol-javob" title="Ko'p so'raladigan savollar" />
      <Accordion type="single" collapsible className="border-t">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`q${i}`}>
            <AccordionTrigger>{f.q}</AccordionTrigger>
            <AccordionContent>{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

export function FinalCta() {
  const { open } = useConsultation()
  return (
    <section className="container pb-20 sm:pb-28">
      <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-16 text-center text-primary-foreground sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-white/10" />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold sm:text-5xl">Yangi tabassumingiz bir qadam narida</h2>
          <p className="mx-auto mt-5 max-w-xl text-primary-foreground/85">
            Konsultatsiyaga yoziling — holatingizni baholab, sizga mos davolash rejasini taklif qilamiz.
          </p>
          <Button size="lg" onClick={open} className="mt-9 bg-white text-primary shadow-lg shadow-black/10 hover:bg-white hover:brightness-95">
            Konsultatsiyaga ro'yxatdan o'tish
          </Button>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const [year] = useState(new Date().getFullYear())
  return (
    <footer className="border-t border-border py-10 text-sm text-muted-foreground">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-display font-extrabold text-foreground">{doctor.name}<span className="text-primary">.</span></p>
        <p className="text-center">{doctor.address} · {doctor.hours}</p>
        <a href={doctor.phoneHref} className="font-semibold text-foreground hover:text-primary">{doctor.phone}</a>
      </div>
      <p className="container mt-6 text-center text-xs">© {year} {doctor.name}. Barcha huquqlar himoyalangan.</p>
    </footer>
  )
}
