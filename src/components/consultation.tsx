import { createContext, useContext, useState, type FormEvent, type ReactNode } from "react"
import { CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { formQuestions } from "@/data/content"
import { cn } from "@/lib/utils"

const Ctx = createContext<{ open: () => void; problems: string[]; setProblems: (p: string[]) => void }>({
  open: () => {},
  problems: [],
  setProblems: () => {},
})
export const useConsultation = () => useContext(Ctx)

// Yuborish manzili: .env ichida VITE_FORM_ENDPOINT (masalan Formspree / Google Apps Script)
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined

const fieldCls =
  "h-12 w-full rounded-xl border border-input bg-background px-4 text-sm outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20"

function Choice({ name, options, type = "radio" }: { name: string; options: string[]; type?: "radio" | "checkbox" }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <label key={o} className="cursor-pointer">
          <input type={type} name={name} value={o} className="peer sr-only" required={type === "radio"} />
          <span className="block rounded-full border border-input px-4 py-2 text-sm transition peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary peer-focus-visible:ring-2 peer-focus-visible:ring-ring">
            {o}
          </span>
        </label>
      ))}
    </div>
  )
}

function Q({ label, children }: { label: string; children: ReactNode }) {
  return (
    <fieldset className="space-y-2.5">
      <legend className="text-sm font-semibold">{label}</legend>
      {children}
    </fieldset>
  )
}

export function ConsultationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false)
  const [problems, setProblems] = useState<string[]>([])
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle")

  const onOpenChange = (v: boolean) => {
    setOpen(v)
    if (!v) setTimeout(() => setStatus("idle"), 200)
  }

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data: Record<string, FormDataEntryValue> = Object.fromEntries(new FormData(e.currentTarget).entries())
    if (problems.length) data.problems = problems.join("; ")
    setStatus("sending")
    try {
      if (ENDPOINT) {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data),
        })
        if (!res.ok) throw new Error(String(res.status))
      } else {
        console.info("Konsultatsiya so'rovi (VITE_FORM_ENDPOINT sozlanmagan):", data)
      }
      setStatus("done")
    } catch {
      setStatus("error")
    }
  }

  return (
    <Ctx.Provider value={{ open: () => setOpen(true), problems, setProblems }}>
      {children}
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent>
          {status === "done" ? (
            <div className="flex flex-col items-center gap-3 py-8 text-center">
              <CheckCircle2 className="h-14 w-14 text-primary" />
              <DialogTitle>Rahmat!</DialogTitle>
              <DialogDescription>So'rovingiz qabul qilindi. Tez orada siz bilan bog'lanamiz.</DialogDescription>
              <Button className="mt-4" onClick={() => onOpenChange(false)}>Yopish</Button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-6">
              <div className="space-y-1.5 pr-8">
                <DialogTitle>Konsultatsiyaga yozilish</DialogTitle>
                <DialogDescription>Bir necha savolga javob bering — biz siz bilan bog'lanamiz.</DialogDescription>
              </div>
              <Q label={`1. ${formQuestions.regionLabel}`}>
                <Choice name="region" options={formQuestions.regions} />
              </Q>
              <Q label={`2. ${formQuestions.nameLabel}`}>
                <input name="name" required autoComplete="name" placeholder="Ismingizni kiriting" className={fieldCls} />
              </Q>
              <Q label={`3. ${formQuestions.phoneLabel}`}>
                <input name="phone" required type="tel" inputMode="tel" autoComplete="tel" placeholder="+998 90 123 45 67" className={fieldCls} />
              </Q>
              {status === "error" && (
                <p className={cn("rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700")}>
                  Yuborib bo'lmadi. Iltimos, qaytadan urinib ko'ring yoki qo'ng'iroq qiling.
                </p>
              )}
              <Button type="submit" size="lg" className="w-full" disabled={status === "sending"}>
                {status === "sending" ? "Yuborilmoqda…" : "Yuborish"}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </Ctx.Provider>
  )
}
