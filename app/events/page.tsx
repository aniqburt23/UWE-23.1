"use client"

import { useState } from "react"
import { Calendar, Clock, MapPin, Users, Video, ExternalLink } from "lucide-react"

export default function Events() {
  const [activeTab, setActiveTab] = useState("upcoming")

  const upcomingEvents = [
    {
      id: 1,
      title: "AI in African Healthcare",
      date: "2024-02-15",
      time: "14:00 GMT",
      type: "webinar",
      location: "Online",
      attendees: 245,
      maxAttendees: 500,
      speaker: "Dr. Amina Kone",
      speakerTitle: "AI Research Director",
      description: "Exploring how artificial intelligence is revolutionizing healthcare delivery across Africa.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["AI", "Healthcare", "Innovation"],
    },
    {
      id: 2,
      title: "Fintech Startup Pitch Night",
      date: "2024-02-20",
      time: "18:00 GMT",
      type: "event",
      location: "Lagos, Nigeria",
      attendees: 89,
      maxAttendees: 150,
      speaker: "Multiple Speakers",
      speakerTitle: "Entrepreneurs & Investors",
      description: "Young African fintech entrepreneurs pitch their innovative solutions to investors.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Fintech", "Entrepreneurship", "Investment"],
    },
    {
      id: 3,
      title: "Building Your Tech Career",
      date: "2024-02-25",
      time: "16:00 GMT",
      type: "workshop",
      location: "Online",
      attendees: 156,
      maxAttendees: 300,
      speaker: "Kwame Asante",
      speakerTitle: "Senior Software Engineer",
      description: "Interactive workshop on navigating the tech industry and building a successful career.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Career", "Technology", "Skills"],
    },
  ]

  const pastEvents = [
    {
      id: 4,
      title: "Women in Tech Leadership",
      date: "2024-01-30",
      time: "15:00 GMT",
      type: "panel",
      location: "Online",
      attendees: 320,
      speaker: "Panel Discussion",
      speakerTitle: "Female Tech Leaders",
      description: "Inspiring panel discussion with successful women leaders in African tech.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Leadership", "Women in Tech", "Inspiration"],
      recording: "https://example.com/recording",
      summary:
        "Key insights on breaking barriers, building inclusive teams, and creating opportunities for women in technology across Africa.",
    },
    {
      id: 5,
      title: "Blockchain for Social Impact",
      date: "2024-01-15",
      time: "17:00 GMT",
      type: "webinar",
      location: "Online",
      attendees: 198,
      speaker: "Zara Mwangi",
      speakerTitle: "Blockchain Developer",
      description: "How blockchain technology can address social challenges in African communities.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Blockchain", "Social Impact", "Innovation"],
      recording: "https://example.com/recording",
      summary:
        "Explored practical applications of blockchain in supply chain transparency, digital identity, and financial inclusion.",
    },
  ]

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case "webinar":
        return <Video size={16} />
      case "workshop":
        return <Users size={16} />
      case "event":
        return <Calendar size={16} />
      case "panel":
        return <Users size={16} />
      default:
        return <Calendar size={16} />
    }
  }

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "webinar":
        return "bg-blue-100 text-blue-800"
      case "workshop":
        return "bg-green-100 text-green-800"
      case "event":
        return "bg-purple-100 text-purple-800"
      case "panel":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Events & Webinars</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
            Join our community events, learn from industry experts, and connect with fellow African innovators
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setActiveTab("upcoming")}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeTab === "upcoming"
                    ? "bg-white text-ubuntu-orange shadow-md"
                    : "text-gray-600 hover:text-ubuntu-orange"
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab("past")}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeTab === "past"
                    ? "bg-white text-ubuntu-orange shadow-md"
                    : "text-gray-600 hover:text-ubuntu-orange"
                }`}
              >
                Past Events
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 bg-ubuntu-light">
        <div className="container mx-auto px-4">
          {activeTab === "upcoming" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="card overflow-hidden">
                  <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getEventTypeColor(event.type)}`}
                      >
                        {getEventTypeIcon(event.type)}
                        <span>{event.type.toUpperCase()}</span>
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {event.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-ubuntu-light text-ubuntu-orange text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-ubuntu-dark mb-2">{event.title}</h3>
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">{event.description}</p>

                    <div className="space-y-2 mb-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Calendar size={14} />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock size={14} />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={14} />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users size={14} />
                        <span>
                          {event.attendees}/{event.maxAttendees} registered
                        </span>
                      </div>
                    </div>

                    <div className="border-t pt-4 mb-4">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Speaker:</span> {event.speaker}
                      </p>
                      <p className="text-sm text-gray-500">{event.speakerTitle}</p>
                    </div>

                    <button className="w-full btn-primary">RSVP Now</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "past" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {pastEvents.map((event) => (
                <div key={event.id} className="card overflow-hidden">
                  <div className="md:flex">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full md:w-48 h-48 object-cover"
                    />
                    <div className="p-6 flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getEventTypeColor(event.type)}`}
                        >
                          {getEventTypeIcon(event.type)}
                          <span>{event.type.toUpperCase()}</span>
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {event.tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-ubuntu-light text-ubuntu-orange text-xs rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-ubuntu-dark mb-2">{event.title}</h3>
                      <p className="text-gray-700 mb-4 text-sm leading-relaxed">{event.description}</p>

                      <div className="space-y-2 mb-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Calendar size={14} />
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users size={14} />
                          <span>{event.attendees} attended</span>
                        </div>
                      </div>

                      {event.summary && (
                        <div className="bg-ubuntu-light p-3 rounded-lg mb-4">
                          <h4 className="font-medium text-ubuntu-dark mb-1">AI Summary</h4>
                          <p className="text-sm text-gray-700">{event.summary}</p>
                        </div>
                      )}

                      <div className="flex space-x-2">
                        {event.recording && (
                          <button className="flex-1 btn-secondary text-sm py-2">
                            <ExternalLink size={14} className="mr-1" />
                            Watch Recording
                          </button>
                        )}
                        <button className="flex-1 btn-outline text-sm py-2">View Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Host Event CTA */}
      <section className="py-20 bg-ubuntu-dark text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Host a Webinar</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Share your expertise with the African youth community. Host a webinar, workshop, or panel discussion.
          </p>
          <button className="btn-primary bg-ubuntu-orange hover:bg-ubuntu-red">Submit Event Proposal</button>
        </div>
      </section>
    </div>
  )
}
