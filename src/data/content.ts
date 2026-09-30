// Barcha matnlar shu yerda. TODO belgilari — mijozdan kelishi kerak bo'lgan ma'lumotlar.
import type { Review } from "@/components/ui/marquee-01"

const avatar = (id: string) =>
  `https://images.unsplash.com/${id}?w=96&h=96&fit=crop&crop=faces`

export const doctor = {
  name: "Dr. Sardor", // TODO: to'liq ism-familiya
  title: "Implantolog-jarroh",
  phone: "+998 90 000 00 00", // TODO
  phoneHref: "tel:+998900000000", // TODO
  telegram: "https://t.me/", // TODO
  instagram: "https://instagram.com/", // TODO
  address: "Toshkent, O'zbekiston", // TODO
  hours: "Du–Sha: 09:00 – 19:00", // TODO
}

export const stats = [
  { value: "10+", label: "yil tajriba" }, // TODO
  { value: "3000+", label: "o'rnatilgan implant" }, // TODO
  { value: "98%", label: "muvaffaqiyatli bitish" }, // TODO
  { value: "1 kun", label: "All-on-4 / 6 da tishlar" },
]

export const services = [
  {
    title: "Bitta tish implanti",
    text: "Yo'qolgan bitta tishni qo'shni tishlarga tegmasdan, tabiiy ko'rinishda tiklash.",
  },
  {
    title: "Bir nechta tish",
    text: "Ketma-ket yo'qolgan tishlar uchun mustahkam ko'prik — kam implant bilan, yuqori bardosh bilan.",
  },
  {
    title: "To'liq jag tiklash",
    text: "Tishsiz jag uchun All-on-4 va All-on-6 — operatsiya kuniyoq vaqtinchalik tishlar bilan.",
  },
]

export const allOn = {
  four: {
    id: "4",
    label: "All-on-4",
    tagline: "Tezkor va tejamkor yechim",
    text: "Jagga 4 ta implant joylashtiriladi: ikkitasi oldingi qismga, ikkitasi burchak ostida orqa qismga. Suyak hajmi yetarli bo'lmagan hollarda ham ko'pincha suyak ko'paytirishsiz amalga oshiriladi.",
    points: [
      "4 ta implant — bitta to'liq jag",
      "Suyak qo'shish ehtimoli kam",
      "Operatsiya kuni vaqtinchalik tishlar",
      "Qulay narx",
    ],
    positions: [0.07, 0.34, 0.66, 0.93], // yoy bo'ylab joylashuv (0–1)
  },
  six: {
    id: "6",
    label: "All-on-6",
    tagline: "Maksimal mustahkamlik",
    text: "Jagga 6 ta implant joylashtiriladi. Chaynov yuklamasi teng taqsimlanadi, protez uzoq yillar xizmat qiladi. Suyak hajmi yaxshi bo'lganda eng ishonchli tanlov.",
    points: [
      "6 ta implant — yuklama teng taqsimlanadi",
      "Protez uchun qo'shimcha tayanch",
      "Uzoq muddatli mustahkamlik",
      "Tabiiy chaynash hissi",
    ],
    positions: [0.05, 0.23, 0.41, 0.59, 0.77, 0.95],
  },
}

export const steps = [
  { title: "Konsultatsiya", text: "Shikoyatlar, tekshiruv va 3D tomografiya asosida reja tuziladi." },
  { title: "Rejalashtirish", text: "Implant turi, soni va jarayon narxi oldindan aniq kelishiladi." },
  { title: "Implantatsiya", text: "Mahalliy og'riqsizlantirish ostida, qulay va og'riqsiz operatsiya." },
  { title: "Koronka / protez", text: "Suyak bitgach yoki darhol — doimiy tishlar o'rnatiladi." },
]

// TODO: narxlar keyin beriladi. `price` bo'sh bo'lsa "Narx so'rang" ko'rinadi.
export const prices = {
  implants: [
    { name: "Implant — Koreya", note: "Osstem, Dentium", price: "" },
    { name: "Implant — Yevropa", note: "Straumann, Nobel", price: "" },
    { name: "All-on-4", note: "Bir jag, implantlar bilan", price: "" },
    { name: "All-on-6", note: "Bir jag, implantlar bilan", price: "" },
  ],
  crowns: [
    { name: "Metallokeramika", note: "Klassik, ishonchli", price: "" },
    { name: "Sirkoniy", note: "Estetik va mustahkam", price: "" },
    { name: "E-max", note: "Eng tabiiy ko'rinish", price: "" },
  ],
}

// TODO: haqiqiy video havolalarini `src` ga qo'ying (mp4 yoki YouTube embed havolasi)
export const videoReviews = [
  {
    name: "Bemor ismi", // TODO
    caption: "All-on-4 — bir kunda yangi tabassum",
    poster: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=1000&fit=crop",
    src: "",
  },
  {
    name: "Bemor ismi", // TODO
    caption: "Implantatsiya tajribam",
    poster: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop",
    src: "",
  },
  {
    name: "Bemor ismi", // TODO
    caption: "All-on-6 natijasi",
    poster: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=1000&fit=crop",
    src: "",
  },
]

// TODO: haqiqiy bemor sharhlari bilan almashtiring
export const writtenReviews: Review[] = [
  { name: "Bemor ismi", username: "Implantatsiya", body: "“Operatsiya umuman og'rimadi. Doktor hamma bosqichni oldindan tushuntirdi, natijadan juda mamnunman.”", profile: avatar("photo-1507003211169-0a1dd7228f2d") },
  { name: "Bemor ismi", username: "All-on-4", body: "“Bir kunda tishlarim bo'ldi. Endi hech kimdan uyalmasdan kulaman va hamma narsani yeyman.”", profile: avatar("photo-1494790108377-be9c29b29330") },
  { name: "Bemor ismi", username: "Implantatsiya", body: "“Hammasi toza, zamonaviy va tartibli. Narx oldindan aytilganidek bo'ldi, hech qanday kutilmagan xarajat chiqmadi.”", profile: avatar("photo-1500648767791-00dcc994a43e") },
  { name: "Bemor ismi", username: "All-on-6", body: "“Yillar davomida protezdan qiynalgandim. All-on-6 dan keyin chaynash o'zimning tishimdagidek bo'ldi.”", profile: avatar("photo-1438761681033-6461ffad8d80") },
  { name: "Bemor ismi", username: "Koronka", body: "“Koronka rangi va shakli tabiiy tishimdan farq qilmaydi. Doktorga katta rahmat!”", profile: avatar("photo-1544005313-94ddf0286df2") },
  { name: "Bemor ismi", username: "Implantatsiya", body: "“Qo'rqib yurgandim, lekin hammasi oson o'tdi. Ertasiga ishga chiqdim. Hammaga tavsiya qilaman.”", profile: avatar("photo-1472099645785-5658abf4ff4e") },
  { name: "Bemor ismi", username: "All-on-4", body: "“Doktorning e'tibori va tajribasi seziladi. Nazorat ko'riklarida ham doim aloqada bo'ldi.”", profile: avatar("photo-1573496359142-b8d87734a5a2") },
  { name: "Bemor ismi", username: "All-on-6", body: "“Natija kutganimdan ham yaxshi chiqdi. Endi oynaga qarashni yoqtiraman.”", profile: avatar("photo-1531427186611-ecfd6d936c79") },
]

export const faqs = [
  { q: "Implantatsiya og'riqlimi?", a: "Operatsiya mahalliy og'riqsizlantirish ostida o'tadi, shuning uchun jarayon davomida og'riq sezmaysiz. Keyingi kunlarda yengil noqulaylik bo'lishi mumkin, u oddiy dori bilan o'tib ketadi." },
  { q: "All-on-4 va All-on-6 farqi nimada?", a: "All-on-4 da jagga 4 ta, All-on-6 da 6 ta implant o'rnatiladi. All-on-4 tezroq va tejamkorroq, All-on-6 esa yuklamani yaxshiroq taqsimlaydi. Qaysi biri sizga mosligini tomografiyadan so'ng aniqlaymiz." },
  { q: "Tishlar qancha vaqtda tayyor bo'ladi?", a: "All-on-4 va All-on-6 da vaqtinchalik tishlar operatsiya kuniyoq o'rnatiladi. Doimiy tishlar odatda bir necha oydan so'ng qo'yiladi." },
  { q: "Implant necha yil xizmat qiladi?", a: "To'g'ri parvarish va muntazam ko'riklar bilan implantlar o'nlab yillar, ko'pincha umr bo'yi xizmat qiladi." },
  { q: "Suyak yetishmasa ham implant qo'yish mumkinmi?", a: "Ha. Ko'p hollarda suyak ko'paytirish yoki All-on-4 texnikasi yordam beradi. Aniq yechim konsultatsiyada tomografiya asosida beriladi." },
  { q: "Konsultatsiya pullikmi?", a: "Dastlabki konsultatsiya bo'yicha tafsilotni ro'yxatdan o'tganingizda aytamiz." }, // TODO: bepul/pullikligini aniqlang
]

// TODO: drubaydulloh.com dagi forma savollari bilan almashtiring (sayt tarmoqdan ochilmadi)
export const formQuestions = {
  problems: [
    "Bitta yoki bir nechta tishim yo'q",
    "Tishlarim deyarli yo'q / to'liq tishsiz jag",
    "Protezim qulay emas",
    "Tishlarim qimirlayapti yoki tushayapti",
    "Bilmayman, maslahat kerak",
  ],
  interests: ["Yakka implant", "All-on-4", "All-on-6", "Koronka / protez", "Hali bilmayman"],
  times: ["Ertalab (09–12)", "Kunduzi (12–16)", "Kechqurun (16–19)"],
}
