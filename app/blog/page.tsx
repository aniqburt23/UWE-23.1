"use client"

import { useState } from "react"
import { Search, Calendar, ArrowRight, Tag } from "lucide-react"

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const blogPosts = [
    {
      id: 1,
      title: "The Rise of African Tech Hubs: A New Era of Innovation",
      excerpt:
        "Exploring how cities like Lagos, Nairobi, and Cape Town are becoming global tech powerhouses and what this means for African youth.",
      content: "Full article content would go here...",
      author: "Amina Kone",
      authorImage: "/placeholder.svg?height=40&width=40",
      date: "2024-02-10",
      readTime: "8 min read",
      category: "Technology",
      tags: ["Tech Hubs", "Innovation", "Africa", "Startups"],
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
    },
    {
      id: 2,
      title: "Building Resilience: Mental Health in the African Workplace",
      excerpt:
        "Understanding the importance of mental health support for young professionals and how to create healthier work environments.",
      content: "Full article content would go here...",
      author: "Dr. Zara Mwangi",
      authorImage: "/placeholder.svg?height=40&width=40",
      date: "2024-02-08",
      readTime: "6 min read",
      category: "Wellness",
      tags: ["Mental Health", "Workplace", "Wellness", "Professional Development"],
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
    },
    {
      id: 3,
      title: "From Idea to Impact: Success Stories of Young African Entrepreneurs",
      excerpt:
        "Inspiring stories of young entrepreneurs who turned their ideas into successful businesses that are making a difference.",
      content: "Full article content would go here...",
      author: "Kwame Asante",
      authorImage: "/placeholder.svg?height=40&width=40",
      date: "2024-02-05",
      readTime: "10 min read",
      category: "Entrepreneurship",
      tags: ["Entrepreneurship", "Success Stories", "Business", "Innovation"],
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
    },
    {
      id: 4,
      title: "The Future of Remote Work in Africa",
      excerpt:
        "How remote work is reshaping the African job market and creating new opportunities for young professionals.",
      content: "Full article content would go here...",
      author: "Thabo Molefe",
      authorImage: "/placeholder.svg?height=40&width=40",
      date: "2024-02-03",
      readTime: "7 min read",
      category: "Career",
      tags: ["Remote Work", "Future of Work", "Career Development", "Technology"],
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
    },
    {
      id: 5,
      title: "Sustainable Development Goals: How African Youth Are Leading Change",
      excerpt:
        "Young Africans are at the forefront of achieving the UN's Sustainable Development Goals. Here's how they're making it happen.",
      content: "Full article content would go here...",
      author: "Fatima Al-Rashid",
      authorImage: "/placeholder.svg?height=40&width=40",
      date: "2024-01-30",
      readTime: "9 min read",
      category: "Social Impact",
      tags: ["SDGs", "Social Impact", "Youth Leadership", "Sustainability"],
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
    },
    {
      id: 6,
      title: "Mastering the Art of Networking: A Guide for African Professionals",
      excerpt:
        "Practical tips and strategies for building meaningful professional relationships across the African continent.",
      content: "Full article content would go here...",
      author: "Chidi Okwu",
      authorImage: "/placeholder.svg?height=40&width=40",
      date: "2024-01-28",
      readTime: "5 min read",
      category: "Career",
      tags: ["Networking", "Professional Development", "Career Growth", "Relationships"],
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
    },
  ]

  const categories = ["all", "Technology", "Career", "Entrepreneurship", "Wellness", "Social Impact"]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Technology":
        return "bg-blue-100 text-blue-800"
      case "Career":
        return "bg-green-100 text-green-800"
      case "Entrepreneurship":
        return "bg-purple-100 text-purple-800"
      case "Wellness":
        return "bg-pink-100 text-pink-800"
      case "Social Impact":
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Ubuntu Stories</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
            Insights, stories, and wisdom from the African youth community
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
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-ubuntu-orange focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-ubuntu-orange text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-ubuntu-light hover:text-ubuntu-orange"
                  }`}
                >
                  {category === "all" ? "All Categories" : category}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 text-gray-600">
            Showing {filteredPosts.length} of {blogPosts.length} articles
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 bg-ubuntu-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-ubuntu-dark mb-8">Featured Stories</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="card overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar size={14} className="mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-ubuntu-dark mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img
                          src={post.authorImage || "/placeholder.svg"}
                          alt={post.author}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-sm font-medium text-ubuntu-dark">{post.author}</p>
                          <p className="text-xs text-gray-500">{post.readTime}</p>
                        </div>
                      </div>
                      <button className="text-ubuntu-orange hover:text-ubuntu-red font-medium flex items-center">
                        Read More
                        <ArrowRight size={16} className="ml-1" />
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-ubuntu-light text-ubuntu-orange text-xs rounded flex items-center"
                        >
                          <Tag size={10} className="mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-ubuntu-dark mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="card overflow-hidden hover:shadow-2xl transition-all duration-300">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-ubuntu-dark mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <img
                        src={post.authorImage || "/placeholder.svg"}
                        alt={post.author}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-xs font-medium text-ubuntu-dark">{post.author}</p>
                        <p className="text-xs text-gray-500">{post.readTime}</p>
                      </div>
                    </div>
                    <button className="text-ubuntu-orange hover:text-ubuntu-red font-medium text-sm flex items-center">
                      Read
                      <ArrowRight size={14} className="ml-1" />
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-ubuntu-light text-ubuntu-orange text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search size={32} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or category filter</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-ubuntu-light">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-ubuntu-dark mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Get the latest stories, insights, and opportunities delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-ubuntu-orange focus:border-transparent"
              />
              <button className="btn-primary px-8">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      {/* Submit Story CTA */}
      <section className="py-20 bg-ubuntu-dark text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Share Your Story</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Have an inspiring story, insight, or experience to share with the African youth community? We'd love to
            feature it.
          </p>
          <button className="btn-primary bg-ubuntu-orange hover:bg-ubuntu-red">Submit Your Story</button>
        </div>
      </section>
    </div>
  )
}
