"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-cente justify-around">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000266444-t61D4EgwE3Y1LNF8Xb90xOUs1JpZfV.png"
                alt="Confluenxe Logo"
                width={40}
                height={40}
                className="mr-2 rounded-sm"
              />
              <span className={`font-bold text-xl ${isScrolled ? "text-primary" : "text-white"}`}>Confluenxe</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#about"
              className={`text-sm font-medium hover:text-primary-foreground/80 ${isScrolled ? "text-primary" : "text-white"}`}
            >
              About
            </Link>
            <Link
              href="#features"
              className={`text-sm font-medium hover:text-primary-foreground/80 ${isScrolled ? "text-primary" : "text-white"}`}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className={`text-sm font-medium hover:text-primary-foreground/80 ${isScrolled ? "text-primary" : "text-white"}`}
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              className={`text-sm font-medium hover:text-primary-foreground/80 ${isScrolled ? "text-primary" : "text-white"}`}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className={`text-sm font-medium hover:text-primary-foreground/80 ${isScrolled ? "text-primary" : "text-white"}`}
            >
              Contact
            </Link>

          </nav>
          <div className="flex items-center space-x-2">
            {/* <Button
              variant="outline"
              className={`border-2 ${isScrolled ? "border-primary text-primary hover:bg-primary hover:text-white" : "border-white text-white hover:bg-white hover:text-primary text-primary"}`}
            >
              Sign In
            </Button> */}
            <Button asChild className="bg-primary text-white hover:bg-primary/90">
              <Link href="/signup?role=scout">Get Started</Link>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className={isScrolled ? "text-primary" : "text-white"} />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="#about" className="text-lg font-medium hover:text-primary">
                  About
                </Link>
                <Link href="#features" className="text-lg font-medium hover:text-primary">
                  Features
                </Link>
                <Link href="#how-it-works" className="text-lg font-medium hover:text-primary">
                  How It Works
                </Link>
                <Link href="#testimonials" className="text-lg font-medium hover:text-primary">
                  Testimonials
                </Link>
                <Link href="#contact" className="text-lg font-medium hover:text-primary">
                  Contact
                </Link>
                <div className="flex flex-col gap-2 mt-4">
                  <Button
                    variant="outline"
                    className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Sign In
                  </Button>
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">Get Started</Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
