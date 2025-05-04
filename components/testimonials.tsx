import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Confluenxe changed my life. I was spotted by a scout from Europe and now I'm playing professionally in Spain.",
      name: "Michael Johnson",
      role: "Professional Basketball Player",
      avatar: "MJ",
    },
    {
      quote:
        "As a scout, I've discovered incredible talent that I would never have found without this platform. The AI matching is spot on.",
      name: "Sarah Williams",
      role: "Football Scout, Premier League",
      avatar: "SW",
    },
    {
      quote: "The analytics and performance tracking helped me improve my game and get noticed by college recruiters.",
      name: "David Chen",
      role: "College Track Athlete",
      avatar: "DC",
    },
    {
      quote:
        "Confluenxe streamlines our recruitment process. We've signed three athletes from the platform in the last year alone.",
      name: "James Rodriguez",
      role: "Talent Director, Pro Soccer Team",
      avatar: "JR",
    },
  ]

  return (
    <section id="testimonials" className="py-24 w-full bg-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Success Stories</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from athletes and scouts who have found success through our platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="flex items-center gap-4 border-t pt-4">
                <Avatar>
                  <AvatarFallback className="bg-primary text-white">{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
