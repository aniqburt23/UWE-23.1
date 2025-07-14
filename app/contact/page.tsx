"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, MessageCircle, Send, Clock } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    type: "general",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        type: "general",
      })
    }, 2000)
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
            We're here to help you on your journey. Reach out with questions, feedback, or collaboration ideas.
          </p>
        </div>
      </section>

      <section className="py-16 bg-ubuntu-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-ubuntu-dark mb-6">Let's Connect</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  Whether you're looking for mentorship, want to contribute to our platform, or have questions about our
                  services, we'd love to hear from you. Our team is committed to supporting the African youth community.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ubuntu-orange rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ubuntu-dark mb-1">Email Us</h3>
                    <p className="text-gray-600 mb-2">Get in touch via email for detailed inquiries</p>
                    <a href="mailto:hello@uwe.africa" className="text-ubuntu-orange hover:text-ubuntu-red font-medium">
                      hello@uwe.africa
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ubuntu-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ubuntu-dark mb-1">Call Us</h3>
                    <p className="text-gray-600 mb-2">Speak directly with our support team</p>
                    <a href="tel:+27123456789" className="text-ubuntu-orange hover:text-ubuntu-red font-medium">
                      +27 123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ubuntu-red rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ubuntu-dark mb-1">WhatsApp</h3>
                    <p className="text-gray-600 mb-2">Quick support via WhatsApp</p>
                    <a
                      href="https://wa.me/27123456789"
                      className="text-ubuntu-orange hover:text-ubuntu-red font-medium"
                    >
                      +27 123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ubuntu-purple rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ubuntu-dark mb-1">Visit Us</h3>
                    <p className="text-gray-600 mb-2">Our virtual headquarters</p>
                    <p className="text-ubuntu-orange font-medium">Cape Town, South Africa</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ubuntu-dark rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ubuntu-dark mb-1">Support Hours</h3>
                    <p className="text-gray-600 mb-2">When our team is available</p>
                    <p className="text-ubuntu-orange font-medium">Mon-Fri: 9AM-6PM GMT</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-ubuntu-dark mb-6">Send us a Message</h3>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-ubuntu-dark mb-2">Message Sent!</h4>
                  <p className="text-gray-600">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-ubuntu-orange hover:text-ubuntu-red font-medium"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ubuntu-orange focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ubuntu-orange focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ubuntu-orange focus:border-transparent"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="mentorship">Mentorship</option>
                      <option value="partnership">Partnership</option>
                      <option value="technical">Technical Support</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ubuntu-orange focus:border-transparent"
                      placeholder="Brief subject of your message"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ubuntu-orange focus:border-transparent resize-vertical"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ubuntu-dark mb-4">Our Virtual Presence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              While we operate virtually across Africa, our heart is in Cape Town, South Africa. We're building bridges
              across the continent to connect African youth with opportunities.
            </p>
          </div>

          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-ubuntu-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-ubuntu-dark mb-2">Interactive Map</h3>
              <p className="text-gray-600">Cape Town, South Africa</p>
              <p className="text-sm text-gray-500 mt-2">Virtual headquarters serving all of Africa</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-ubuntu-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ubuntu-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about UWE and our services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="card p-6">
              <h3 className="font-semibold text-ubuntu-dark mb-2">How do I find a mentor?</h3>
              <p className="text-gray-600">
                Visit our Mentors page, use the filters to find mentors in your field of interest, and click "Request
                Session" on their profile. We'll help facilitate the connection.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="font-semibold text-ubuntu-dark mb-2">Is UWE free to use?</h3>
              <p className="text-gray-600">
                Yes! UWE is completely free for all African youth. Our mission is to make mentorship and career guidance
                accessible to everyone.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="font-semibold text-ubuntu-dark mb-2">How can I become a mentor?</h3>
              <p className="text-gray-600">
                If you have professional experience and want to give back, visit our Mentors page and click "Apply to
                Mentor". We'll review your application and get you set up.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="font-semibold text-ubuntu-dark mb-2">What is UbuntuBot?</h3>
              <p className="text-gray-600">
                UbuntuBot is our AI-powered career companion that provides personalized guidance, resume feedback, and
                answers to career-related questions 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
