"use client"

import { useState } from "react"
import { Search, MapPin, Star, Calendar, MessageCircle } from "lucide-react"

export default function Mentors() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("all")
  const [selectedIndustry, setSelectedIndustry] = useState("all")
  const [selectedAvailability, setSelectedAvailability] = useState("all")

  const mentors = [
    {
      id: 1,
      name: "Dr. Amara Okafor",
      title: "Senior Software Engineer",
      company: "Google",
      location: "Lagos, Nigeria",
      image: "/placeholder.svg?height=120&width=120",
      rating: 4.9,
      sessions: 45,
      industry: "Technology",
      availability: "Available",
      specialties: ["Software Development", "Career Transition", "Leadership"],
      bio: "Passionate about helping young developers navigate their tech careers. 10+ years at top tech companies.",
    },
    {
      id: 2,
      name: "Kwame Asante",
      title: "Founder & CEO",
      company: "TechHub Accra",
      location: "Accra, Ghana",
      image: "/placeholder.svg?height=120&width=120",
      rating: 4.8,
      sessions: 32,
      industry: "Entrepreneurship",
      availability: "Available",
      specialties: ["Startup Strategy", "Fundraising", "Business Development"],
      bio: "Serial entrepreneur who has built and scaled multiple successful startups across West Africa.",
    },
    {
      id: 3,
      name: "Zara Mwangi",
      title: "Data Science Manager",
      company: "Microsoft",
      location: "Nairobi, Kenya",
      image: "/placeholder.svg?height=120&width=120",
      rating: 4.9,
      sessions: 28,
      industry: "Data Science",
      availability: "Busy",
      specialties: ["Machine Learning", "Data Analytics", "Team Management"],
      bio: "Leading data science teams and passionate about increasing diversity in AI and machine learning.",
    },
    {
      id: 4,
      name: "Thabo Molefe",
      title: "Creative Director",
      company: "Ogilvy Africa",
      location: "Cape Town, South Africa",
      image: "/placeholder.svg?height=120&width=120",
      rating: 4.7,
      sessions: 38,
      industry: "Design",
      availability: "Available",
      specialties: ["UX Design", "Brand Strategy", "Creative Leadership"],
      bio: "Award-winning designer helping the next generation of African creatives build impactful careers.",
    },
    {
      id: 5,
      name: "Fatima Al-Rashid",
      title: "Investment Director",
      company: "Africa Capital Partners",
      location: "Cairo, Egypt",
      image: "/placeholder.svg?height=120&width=120",
      rating: 4.8,
      sessions: 22,
      industry: "Finance",
      availability: "Available",
      specialties: ["Investment Banking", "Financial Planning", "Venture Capital"],
      bio: "Helping young professionals break into finance and investment across the African continent.",
    },
    {
      id: 6,
      name: "Chidi Okwu",
      title: "Marketing Director",
      company: "Unilever Africa",
      location: "Lagos, Nigeria",
      image: "/placeholder.svg?height=120&width=120",
      rating: 4.6,
      sessions: 41,
      industry: "Marketing",
      availability: "Available",
      specialties: ["Digital Marketing", "Brand Management", "Consumer Insights"],
      bio: "Experienced marketer passionate about building authentic African brands and developing marketing talent.",
    },
  ]

  const regions = ["all", "West Africa", "East Africa", "North Africa", "Southern Africa", "Central Africa"]
  const industries = ["all", "Technology", "Entrepreneurship", "Data Science", "Design", "Finance", "Marketing"]
  const availabilities = ["all", "Available", "Busy"]

  const filteredMentors = mentors.filter((mentor) => {
    const matchesSearch =
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.specialties.some((specialty) => specialty.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesRegion = selectedRegion === "all" || mentor.location.includes(selectedRegion.split(" ")[0])
    const matchesIndustry = selectedIndustry === "all" || mentor.industry === selectedIndustry
    const matchesAvailability = selectedAvailability === "all" || mentor.availability === selectedAvailability

    return matchesSearch && matchesRegion && matchesIndustry && matchesAvailability
  })

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Find Your Mentor</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
            Connect with experienced professionals across Africa who are ready to guide your career journey
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search mentors, skills, or industries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-ubuntu-orange focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-ubuntu-orange"
              >
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region === "all" ? "All Regions" : region}
                  </option>
                ))}
              </select>

              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-ubuntu-orange"
              >
                {industries.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry === "all" ? "All Industries" : industry}
                  </option>
                ))}
              </select>

              <select
                value={selectedAvailability}
                onChange={(e) => setSelectedAvailability(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-ubuntu-orange"
              >
                {availabilities.map((availability) => (
                  <option key={availability} value={availability}>
                    {availability === "all" ? "All Availability" : availability}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 text-gray-600">
            Showing {filteredMentors.length} of {mentors.length} mentors
          </div>
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="py-12 bg-ubuntu-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMentors.map((mentor) => (
              <div key={mentor.id} className="card p-6 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={mentor.image || "/placeholder.svg"}
                    alt={mentor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-ubuntu-dark mb-1">{mentor.name}</h3>
                    <p className="text-ubuntu-orange font-medium">{mentor.title}</p>
                    <p className="text-gray-600 text-sm">{mentor.company}</p>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      mentor.availability === "Available"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {mentor.availability}
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <MapPin size={14} />
                    <span>{mentor.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star size={14} className="text-ubuntu-gold fill-current" />
                    <span>{mentor.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{mentor.sessions} sessions</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 text-sm leading-relaxed">{mentor.bio}</p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {mentor.specialties.map((specialty, index) => (
                      <span key={index} className="px-3 py-1 bg-ubuntu-light text-ubuntu-orange text-xs rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full btn-primary flex items-center justify-center">
                  <MessageCircle size={16} className="mr-2" />
                  Request Session
                </button>
              </div>
            ))}
          </div>

          {filteredMentors.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search size={32} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No mentors found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Become a Mentor CTA */}
      <section className="py-20 bg-ubuntu-dark text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Become a Mentor</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Share your expertise and help shape the next generation of African leaders. Join our community of mentors
            making a difference.
          </p>
          <button className="btn-primary bg-ubuntu-orange hover:bg-ubuntu-red">Apply to Mentor</button>
        </div>
      </section>
    </div>
  )
}
