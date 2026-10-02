import { ConsultationProvider } from "@/components/consultation"
import { Expert, Header, Hero } from "@/components/sections/header-hero"
import { AllOn, ForWhom, Steps } from "@/components/sections/services-allon"
import { Faq, FinalCta, Footer, Prices, VideoReviews, WrittenReviews } from "@/components/sections/prices-reviews-faq"

export default function App() {
  return (
    <ConsultationProvider>
      <Header />
      <main>
        <Hero />
        <ForWhom />
        <Expert />
        <AllOn />
        <Steps />
        <Prices />
        {/* Avval video sharhlar, keyin yozma sharhlar */}
        <VideoReviews />
        <WrittenReviews />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </ConsultationProvider>
  )
}
