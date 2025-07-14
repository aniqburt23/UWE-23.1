import Link from "next/link"
import { Bot, Users, Briefcase, BookOpen, Calendar, Lightbulb } from "lucide-react"

export default function Highlights() {
  const highlights = [
    {
      icon: Bot,
      title: "AI Career Bot",
      description: "Get personalized career guidance from UbuntuBot, our AI-powered mentor",
      link: "/chat",
      color: "bg-ubuntu-orange",
    },
    {
      icon: Users,
      title: "Mentorship Network",
      description: "Connect with industry professionals across Africa for one-on-one guidance",
      link: "/mentors",
      color: "bg-ubuntu-gold",
    },
    {
      icon: Briefcase,
      title: "Project Showcase",
      description: "Collaborate on community projects and showcase your skills",
      link: "/projects",
      color: "bg-ubuntu-red",
    },
    {
      icon: BookOpen,
      title: "Wisdom Library",
      description: "Access curated resources, courses, and knowledge from African experts",
      link: "/wisdom",
      color: "bg-ubuntu-purple",
    },
    {
      icon: Calendar,
      title: "Events & Webinars",
      description: "Join live sessions, workshops, and networking events",
      link: "/events",
      color: "bg-ubuntu-orange",
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Share ideas, get feedback, and turn concepts into reality",
      link: "/projects",
      color: "bg-ubuntu-gold",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-ubuntu-dark">Platform Highlights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the tools and resources designed to accelerate your growth and connect you with opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <Link key={index} href={item.link} className="group">
              <div className="card p-8 h-full hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <div
                  className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-ubuntu-dark group-hover:text-ubuntu-orange transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
