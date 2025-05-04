import { CheckCircle } from "lucide-react"

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Us</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Confluenxe is revolutionizing how athletes and scouts connect across the globe, creating opportunities that
            transcend geographical boundaries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
              <h3 className="text-xl font-bold text-primary mb-2">Our Mission</h3>
              <p className="text-gray-700">"Empowering athletes and scouts through smart technology."</p>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
              <h3 className="text-xl font-bold text-primary mb-2">Our Vision</h3>
              <p className="text-gray-700">"To be the global standard for athlete discovery and career development."</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                <p className="text-gray-700">Democratizing access to opportunities in sports</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                <p className="text-gray-700">Leveraging data and AI to create meaningful connections</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                <p className="text-gray-700">Building a global community of athletes and scouts</p>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-400 opacity-90 z-10"></div>
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=600')] bg-cover bg-center"></div>
            <div className="absolute inset-0 flex items-center justify-center z-20 p-8">
              <div className="text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-4xl font-bold">50+</p>
                    <p className="text-sm">Countries</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold">10k+</p>
                    <p className="text-sm">Athletes</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold">500+</p>
                    <p className="text-sm">Scouts</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold">2k+</p>
                    <p className="text-sm">Success Stories</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
