import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-ubuntu-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">U</span>
              </div>
              <span className="text-xl font-bold">UWE</span>
            </div>
            <p className="text-gray-300">
              Ubuntu Wisdom Exchange - Connecting African youth to mentorship, AI career tools, and community resources.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-ubuntu-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-ubuntu-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-ubuntu-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-ubuntu-orange transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-ubuntu-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-ubuntu-orange transition-colors">
                  About UWE
                </Link>
              </li>
              <li>
                <Link href="/mentors" className="text-gray-300 hover:text-ubuntu-orange transition-colors">
                  Find Mentors
                </Link>
              </li>
              <li>
                <Link href="/wisdom" className="text-gray-300 hover:text-ubuntu-orange transition-colors">
                  Wisdom Library
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-ubuntu-orange transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-ubuntu-orange transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-ubuntu-gold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/chat" className="text-gray-300 hover:text-ubuntu-orange transition-colors">
                  UbuntuBot AI
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-ubuntu-orange transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-ubuntu-orange transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-ubuntu-orange transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-ubuntu-orange transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-ubuntu-gold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-ubuntu-orange" />
                <span className="text-gray-300">hello@uwe.africa</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-ubuntu-orange" />
                <span className="text-gray-300">+27 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-ubuntu-orange" />
                <span className="text-gray-300">Cape Town, South Africa</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-700 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-ubuntu-orange"
                />
                <button className="bg-ubuntu-orange hover:bg-ubuntu-red px-4 py-2 rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>© 2025 Ubuntu Wisdom Exchange. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
