import Hero from "@/components/hero"
import AboutUs from "@/components/about-us"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"
import GlobalImpact from "@/components/global-impact"
import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <AboutUs />
      <Features />
      <HowItWorks />
      <Testimonials />
      <GlobalImpact />
      <CallToAction />
      <Footer />
    </main>
  )
}
