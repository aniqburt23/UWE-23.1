"use client"

import { useState } from "react"
import { Search, BookOpen, Video, FileText, Download, Eye, Bot } from "lucide-react"

export default function WisdomLibrary() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedType, setSelectedType] = useState("all")
  const [showAISummary, setShowAISummary] = useState(false)

  const resources = [
    {
      id: 1,
      title: "The Future of Tech in Africa",
      type: "video",
      category: "Tech",
      author: "Dr. Amina Kone",
      duration: "45 min",
      views: 1250,
      description: "Exploring emerging technologies and their impact on African economies and societies.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      aiSummary:
        "This video discusses AI, blockchain, and mobile technology trends across Africa, highlighting opportunities in fintech, healthtech, and agritech sectors.",
    },
    {
      id: 2,
      title: "Building Your Personal Brand",
      type: "ebook",
      category: "Careers",
      author: "Kwame Asante",
      pages: 120,
      downloads: 890,
      description:
        "A comprehensive guide to developing and maintaining a strong professional brand in the digital age.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      aiSummary:
        "Key strategies for online presence, networking, content creation, and authentic storytelling to build a compelling personal brand.",
    },
    {
      id: 3,
      title: "Entrepreneurship Fundamentals",
      type: "pdf",
      category: "Business",
      author: "Zara Mwangi",
      pages: 85,
      downloads: 1420,
      description: "Essential principles and practical steps for starting and scaling a business in Africa.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      aiSummary:
        "Covers market research, business planning, funding options, legal considerations, and growth strategies specific to African markets.",
    },
    {
      id: 4,
      title: "Leadership in the Digital Age",
      type: "video",
      category: "Life Skills",
      author: "Thabo Molefe",
      duration: "32 min",
      views: 980,
      description: "Modern leadership principles for navigating remote teams and digital transformation.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      aiSummary:
        "Discusses adaptive leadership, emotional intelligence, digital communication, and building inclusive teams in virtual environments.",
    },
    {
      id: 5,
      title: "Financial Literacy for Young Professionals",
      type: "ebook",
      category: "Careers",
      author: "Fatima Al-Rashid",
      pages: 95,
      downloads: 2100,
      description: "Practical financial management strategies for early-career professionals.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      aiSummary:
        "Covers budgeting, saving, investing, debt management, and building wealth through smart financial decisions and planning.",
    },
    {
      id: 6,
      title: "Innovation and Problem Solving",
      type: "pdf",
      category: "Tech",
      author: "Chidi Okwu",
      pages: 67,
      downloads: 756,
      description: "Creative approaches to solving complex problems using design thinking and innovation frameworks.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      aiSummary:
        "Explores design thinking methodology, creative problem-solving techniques, and innovation processes for developing impactful solutions.",
    },
  ]

  const categories = ["all", "Careers", "Tech", "Life Skills", "Business"]
  const types = ["all", "video", "ebook", "pdf"]

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory
    const matchesType = selectedType === "all" || resource.type === selectedType

    return matchesSearch && matchesCategory && matchesType
  })

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video size={16} />
      case "ebook":
        return <BookOpen size={16} />
      case "pdf":
        return <FileText size={16} />
      default:
        return <FileText size={16} />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "video":
        return "bg-red-100 text-red-800"
      case "ebook":
        return "bg-blue-100 text-blue-800"
      case "pdf":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Wisdom Library</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
            Access curated knowledge from African thought leaders, entrepreneurs, and innovators
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center mb-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
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
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-ubuntu-orange"
              >
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type === "all" ? "All Types" : type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* AI Summary Toggle */}
          <div className="flex items-center space-x-3">
            <Bot size={20} className="text-ubuntu-orange" />
            <span className="text-gray-700">AI Summary Mode:</span>
            <button
              onClick={() => setShowAISummary(!showAISummary)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                showAISummary ? "bg-ubuntu-orange" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  showAISummary ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span className="text-sm text-gray-600">{showAISummary ? "Show AI summaries" : "Show full content"}</span>
          </div>

          <div className="mt-4 text-gray-600">
            Showing {filteredResources.length} of {resources.length} resources
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12 bg-ubuntu-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => (
              <div key={resource.id} className="card overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={resource.thumbnail || "/placeholder.svg"}
                    alt={resource.title}
                    className="w-full h-48 object-cover"
                  />
                  <div
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getTypeColor(resource.type)}`}
                  >
                    {getTypeIcon(resource.type)}
                    <span>{resource.type.toUpperCase()}</span>
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-ubuntu-orange text-white text-xs rounded-full">
                    {resource.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-ubuntu-dark mb-2 line-clamp-2">{resource.title}</h3>
                  <p className="text-ubuntu-orange font-medium mb-3">by {resource.author}</p>

                  {showAISummary ? (
                    <div className="mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Bot size={16} className="text-ubuntu-orange" />
                        <span className="text-sm font-medium text-ubuntu-orange">AI Summary</span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{resource.aiSummary}</p>
                    </div>
                  ) : (
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">{resource.description}</p>
                  )}

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    {resource.type === "video" ? (
                      <>
                        <span>{resource.duration}</span>
                        <div className="flex items-center space-x-1">
                          <Eye size={14} />
                          <span>{resource.views} views</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <span>{resource.pages} pages</span>
                        <div className="flex items-center space-x-1">
                          <Download size={14} />
                          <span>{resource.downloads} downloads</span>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 btn-primary text-sm py-2">
                      {resource.type === "video" ? "Watch Now" : "Download"}
                    </button>
                    <button className="px-4 py-2 border border-ubuntu-orange text-ubuntu-orange rounded-full hover:bg-ubuntu-orange hover:text-white transition-colors text-sm">
                      Preview
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search size={32} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No resources found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Contribute CTA */}
      <section className="py-20 bg-ubuntu-dark text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Share Your Wisdom</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Have knowledge, insights, or resources that could help other African youth? Contribute to our growing
            library of wisdom.
          </p>
          <button className="btn-primary bg-ubuntu-orange hover:bg-ubuntu-red">Submit Resource</button>
        </div>
      </section>
    </div>
  )
}
