import { ConsultationProvider } from "@/components/consultation"
import { Header, Hero, Stats } from "@/components/sections/header-hero"
import { AllOn, Services, Steps } from "@/components/sections/services-allon"
import { Faq, FinalCta, Footer, Prices, VideoReviews, WrittenReviews } from "@/components/sections/prices-reviews-faq"

export default function App() {
  return (
    <ConsultationProvider>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
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
