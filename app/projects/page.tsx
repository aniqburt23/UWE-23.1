"use client"

import { useState } from "react"
import { Search, Users, ExternalLink, Github, Calendar } from "lucide-react"

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")

  const projects = [
    {
      id: 1,
      title: "AgriTech Mobile App",
      category: "Tech",
      status: "Active",
      description:
        "Mobile application helping smallholder farmers access market prices, weather data, and agricultural tips.",
      image: "/placeholder.svg?height=200&width=300",
      author: "Kwame Osei",
      location: "Accra, Ghana",
      participants: 8,
      maxParticipants: 12,
      skills: ["React Native", "Node.js", "Agriculture"],
      startDate: "2024-01-15",
      githubUrl: "https://github.com/example/agritech-app",
      demoUrl: "https://agritech-demo.com",
      progress: 65,
    },
    {
      id: 2,
      title: "Youth Mental Health Platform",
      category: "Social",
      status: "Active",
      description: "Digital platform providing mental health resources and peer support for African youth.",
      image: "/placeholder.svg?height=200&width=300",
      author: "Amina Kone",
      location: "Lagos, Nigeria",
      participants: 6,
      maxParticipants: 10,
      skills: ["Psychology", "Web Development", "Community Building"],
      startDate: "2024-02-01",
      githubUrl: "https://github.com/example/mental-health",
      demoUrl: "https://youth-mental-health.com",
      progress: 40,
    },
    {
      id: 3,
      title: "African Art Marketplace",
      category: "Art",
      status: "Completed",
      description: "Online marketplace connecting African artists with global buyers, promoting cultural heritage.",
      image: "/placeholder.svg?height=200&width=300",
      author: "Zara Mwangi",
      location: "Nairobi, Kenya",
      participants: 5,
      maxParticipants: 8,
      skills: ["E-commerce", "Art Curation", "Digital Marketing"],
      startDate: "2023-10-01",
      completedDate: "2024-01-30",
      githubUrl: "https://github.com/example/art-marketplace",
      demoUrl: "https://african-art-market.com",
      progress: 100,
    },
    {
      id: 4,
      title: "FinTech Literacy Program",
      category: "Business",
      status: "Active",
      description: "Educational program teaching financial literacy and digital payment systems to rural communities.",
      image: "/placeholder.svg?height=200&width=300",
      author: "Thabo Molefe",
      location: "Cape Town, South Africa",
      participants: 12,
      maxParticipants: 15,
      skills: ["Finance", "Education", "Community Outreach"],
      startDate: "2024-01-20",
      githubUrl: null,
      demoUrl: "https://fintech-literacy.org",
      progress: 55,
    },
    {
      id: 5,
      title: "Renewable Energy Tracker",
      category: "Tech",
      status: "Recruiting",
      description:
        "IoT solution for monitoring and optimizing solar panel performance in off-grid African communities.",
      image: "/placeholder.svg?height=200&width=300",
      author: "Fatima Al-Rashid",
      location: "Cairo, Egypt",
      participants: 3,
      maxParticipants: 10,
      skills: ["IoT", "Solar Energy", "Data Analytics"],
      startDate: "2024-03-01",
      githubUrl: "https://github.com/example/energy-tracker",
      demoUrl: null,
      progress: 20,
    },
    {
      id: 6,
      title: "Cultural Heritage Documentation",
      category: "Art",
      status: "Active",
      description: "Digital archive preserving African oral histories, traditional music, and cultural practices.",
      image: "/placeholder.svg?height=200&width=300",
      author: "Chidi Okwu",
      location: "Abuja, Nigeria",
      participants: 7,
      maxParticipants: 12,
      skills: ["Digital Archiving", "Cultural Studies", "Audio/Video Production"],
      startDate: "2023-11-15",
      githubUrl: null,
      demoUrl: "https://heritage-archive.africa",
      progress: 75,
    },
  ]

  const categories = ["all", "Tech", "Social", "Art", "Business"]
  const statuses = ["all", "Active", "Recruiting", "Completed"]

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory
    const matchesStatus = selectedStatus === "all" || project.status === selectedStatus

    return matchesSearch && matchesCategory && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800"
      case "Recruiting":
        return "bg-blue-100 text-blue-800"
      case "Completed":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Tech":
        return "bg-blue-500"
      case "Social":
        return "bg-green-500"
      case "Art":
        return "bg-purple-500"
      case "Business":
        return "bg-orange-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Community Projects</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
            Collaborate on impactful projects that address real challenges across Africa
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
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-ubuntu-orange focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-ubuntu-orange"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </option>
                ))}
              </select>

              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-ubuntu-orange"
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status === "all" ? "All Status" : status}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 text-gray-600">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-ubuntu-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="card overflow-hidden">
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(project.category)}`}
                    >
                      {project.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-ubuntu-dark mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">{project.description}</p>

                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">By {project.author}</span>
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users size={14} />
                      <span>
                        {project.participants}/{project.maxParticipants} members
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={14} />
                      <span>Started {new Date(project.startDate).toLocaleDateString()}</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-ubuntu-orange h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-ubuntu-light text-ubuntu-orange text-xs rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 mb-4">
                    {project.status === "Recruiting" ? (
                      <button className="flex-1 btn-primary text-sm py-2">Join Project</button>
                    ) : project.status === "Active" ? (
                      <button className="flex-1 btn-secondary text-sm py-2">View Details</button>
                    ) : (
                      <button className="flex-1 btn-outline text-sm py-2">View Case Study</button>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex justify-center space-x-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="text-gray-600 hover:text-ubuntu-orange transition-colors"
                        title="GitHub Repository"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        className="text-gray-600 hover:text-ubuntu-orange transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search size={32} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No projects found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Submit Project CTA */}
      <section className="py-20 bg-ubuntu-dark text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Your Project</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Have an idea that could make a difference? Submit your project and find collaborators in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary bg-ubuntu-orange hover:bg-ubuntu-red">Submit a Project</button>
            <button className="btn-outline border-white text-white hover:bg-white hover:text-ubuntu-dark">
              Browse All Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
