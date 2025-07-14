import Link from "next/link"
import { MessageCircle, Users, BookOpen } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border-2 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Quote */}
          <div className="mb-8">
            <blockquote className="text-2xl md:text-4xl font-light italic mb-4">"I am because we are"</blockquote>
            <p className="text-lg md:text-xl opacity-90">Ubuntu Philosophy - The foundation of our community</p>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            Ubuntu Wisdom
            <span className="block text-white">Exchange</span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto animate-slide-up">
            Connecting African youth to mentorship, AI career tools, and community resources for a brighter future
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Link href="/mentors" className="btn-primary bg-white text-ubuntu-orange hover:bg-ubuntu-light">
              <Users size={20} className="mr-2" />
              Explore Mentors
            </Link>
            <Link href="/chat" className="btn-secondary bg-ubuntu-gold hover:bg-ubuntu-orange">
              <MessageCircle size={20} className="mr-2" />
              Ask UbuntuBot
            </Link>
            <Link
              href="/profile"
              className="btn-outline border-white text-white hover:bg-white hover:text-ubuntu-orange"
            >
              <BookOpen size={20} className="mr-2" />
              Sign In
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Active Mentors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">2,000+</div>
              <div className="text-lg opacity-90">Youth Connected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">15</div>
              <div className="text-lg opacity-90">African Countries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
