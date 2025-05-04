import { UserCircle, BarChart3, BrainCircuit, Bell, Globe, Shield, Video, MessageSquare } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <UserCircle className="h-10 w-10" />,
      title: "Athlete Profiles",
      description: "Comprehensive profiles with highlight reels and performance statistics",
    },
    {
      icon: <BarChart3 className="h-10 w-10" />,
      title: "Scout Dashboards",
      description: "Powerful tools for tracking and shortlisting talent across the globe",
    },
    {
      icon: <BrainCircuit className="h-10 w-10" />,
      title: "AI Matching",
      description: "Advanced algorithms that connect athletes with the right opportunities",
    },
    {
      icon: <Bell className="h-10 w-10" />,
      title: "Real-time Updates",
      description: "Instant notifications about matches, messages, and opportunities",
    },
    {
      icon: <Video className="h-10 w-10" />,
      title: "Video Analysis",
      description: "Upload and analyze performance videos with advanced metrics",
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Global Network",
      description: "Connect with athletes and scouts from around the world",
    },
    {
      icon: <MessageSquare className="h-10 w-10" />,
      title: "Secure Messaging",
      description: "Private communication channels between athletes and scouts",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Verified Profiles",
      description: "Trust and safety with verified athlete and scout credentials",
    },
  ]

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Platform Features</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our innovative platform offers a comprehensive suite of tools designed to connect athletes with scouts and
            create life-changing opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
