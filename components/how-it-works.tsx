import { ArrowRight } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description: "Create your profile as an athlete or scout in minutes",
      icon: "👤",
    },
    {
      number: "02",
      title: "Build Profile",
      description: "Add your stats, videos, and achievements to showcase your talent",
      icon: "📊",
    },
    {
      number: "03",
      title: "Get Connected",
      description: "Our AI matches athletes with the right scouts based on needs and goals",
      icon: "🔗",
    },
    {
      number: "04",
      title: "Get Scouted",
      description: "Receive opportunities and take your career to the next level",
      icon: "🚀",
    },
  ]

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">How It Works</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our streamlined process makes it easy for athletes to get discovered and for scouts to find talent.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-primary/20 -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-primary text-white text-5xl h-24 w-24 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  {step.icon}
                </div>
                <div className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-[calc(25%*2-1rem)] -translate-y-1/2 text-primary">
                    <ArrowRight className="h-8 w-8" style={{ left: `calc(25%*${index + 1} - 1rem)` }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
