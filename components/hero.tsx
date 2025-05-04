import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background pattern/overlay */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto flex flex-col items-center text-center pt-24">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000266444-t61D4EgwE3Y1LNF8Xb90xOUs1JpZfV.png"
          alt="Confluenxe Logo"
          width={120}
          height={120}
          className="mb-8 animate-pulse"
        />

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Bridging Talent with Opportunity
        </h1>

        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mb-10">
          The global platform connecting athletes with scouts through innovative technology and data-driven insights.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg py-6 flex-1">
            <Link href="#athlete-signup">
              Join as Athlete
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 text-lg py-6 flex-1"
          >
            <Link href="#scout-signup">
              Join as Scout
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="mt-16 flex items-center justify-center">
          <div className="animate-bounce bg-white/20 p-2 rounded-full">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
