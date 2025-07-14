"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, User, MessageCircle } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Mentors", href: "/mentors" },
    { name: "Wisdom Library", href: "/wisdom" },
    { name: "Events", href: "/events" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">U</span>
            </div>
            <span className="text-xl font-bold text-ubuntu-dark">UWE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-ubuntu-dark hover:text-ubuntu-orange transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/chat" className="p-2 text-ubuntu-orange hover:text-ubuntu-red transition-colors">
              <MessageCircle size={20} />
            </Link>
            <Link href="/profile" className="btn-primary">
              <User size={16} className="mr-2" />
              Profile
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-ubuntu-dark hover:text-ubuntu-orange transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-ubuntu-dark hover:text-ubuntu-orange transition-colors duration-200 font-medium px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 px-4 pt-4 border-t border-gray-200">
                <Link href="/chat" className="btn-secondary flex-1 text-center">
                  UbuntuBot
                </Link>
                <Link href="/profile" className="btn-primary flex-1 text-center">
                  Profile
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
