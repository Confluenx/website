import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy } from "lucide-react"

export default function GlobalImpact() {
  const stats = [
    { label: "Countries", value: "50+" },
    { label: "Athletes", value: "10,000+" },
    { label: "Scouts", value: "500+" },
    { label: "Success Stories", value: "2,000+" },
  ]

  const successStories = [
    {
      title: "From Local Field to National Team",
      description: "A young footballer from rural Kenya was discovered by a national team scout through Confluenxe.",
      region: "Africa",
    },
    {
      title: "College Scholarship Success",
      description:
        "Track athlete from Brazil secured a full scholarship to a Division I university in the United States.",
      region: "South America",
    },
    {
      title: "Professional Contract Signing",
      description:
        "Basketball player from the Philippines signed their first professional contract with a European club.",
      region: "Asia",
    },
  ]

  return (
    <section className="py-24 bg-primary text-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Global Impact</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Confluenxe is changing lives across the globe, connecting talent with opportunity regardless of geography.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <p className="text-3xl md:text-4xl font-bold">{stat.value}</p>
              <p className="text-sm uppercase tracking-wider mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="relative mb-16">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-20 rounded-xl"></div>
          <div className="relative z-10 h-[300px] md:h-[400px] rounded-xl flex items-center justify-center">
            <div className="text-center p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Global Reach, Local Impact</h3>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Our platform connects athletes and scouts across continents, breaking down geographical barriers and
                creating opportunities worldwide.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {successStories.map((story, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-none text-white">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="h-5 w-5 text-yellow-300" />
                  <span className="text-sm font-medium text-yellow-300">{story.region}</span>
                </div>
                <CardTitle>{story.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">{story.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
