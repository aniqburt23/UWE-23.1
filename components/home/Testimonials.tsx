"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Amara Okafor",
      role: "Software Developer",
      location: "Lagos, Nigeria",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "UWE connected me with an amazing mentor who helped me transition from marketing to tech. The AI career bot gave me personalized learning paths that made all the difference.",
      rating: 5,
    },
    {
      name: "Kwame Asante",
      role: "Entrepreneur",
      location: "Accra, Ghana",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "The wisdom library is incredible! I found resources that helped me launch my startup. The community support has been invaluable throughout my journey.",
      rating: 5,
    },
    {
      name: "Zara Mwangi",
      role: "Data Scientist",
      location: "Nairobi, Kenya",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Through UWE, I not only found my career path but also became a mentor myself. The platform creates a beautiful cycle of giving back to the community.",
      rating: 5,
    },
    {
      name: "Thabo Molefe",
      role: "UX Designer",
      location: "Cape Town, South Africa",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "The events and webinars on UWE are top-notch. I've learned from industry leaders and built a network that spans across Africa. Ubuntu in action!",
      rating: 5,
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Success Stories</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Hear from our community members who have transformed their careers through Ubuntu Wisdom Exchange
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="flex items-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} size={20} className="text-ubuntu-gold fill-current" />
              ))}
            </div>

            <blockquote className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              "{testimonials[currentIndex].content}"
            </blockquote>

            <div className="flex items-center">
              <img
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full mr-4 object-cover"
              />
              <div>
                <h4 className="font-semibold text-ubuntu-dark text-lg">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-600">
                  {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
