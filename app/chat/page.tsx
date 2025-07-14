"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, Bot, User, Upload, Sun, Moon, RotateCcw } from "lucide-react"

export default function UbuntuBot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content:
        "Hello! I'm UbuntuBot, your AI career companion. I'm here to help you navigate your career journey with personalized guidance. How can I assist you today?",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const suggestedPrompts = [
    "Which career path suits my skills and interests?",
    "What should I study to get into tech?",
    "How can I improve my resume?",
    "What are the best networking strategies?",
    "How do I prepare for job interviews?",
    "What skills are in demand in Africa?",
  ]

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      id: messages.length + 1,
      type: "user" as const,
      content: inputMessage,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: "bot" as const,
        content: generateBotResponse(inputMessage),
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsLoading(false)
    }, 1500)
  }

  const generateBotResponse = (input: string) => {
    const lowerInput = input.toLowerCase()

    if (lowerInput.includes("career") || lowerInput.includes("path")) {
      return "Great question! To recommend the best career path for you, I'd need to understand your interests, skills, and goals better. Here are some questions to consider:\n\n• What activities energize you?\n• What subjects did you excel in during school?\n• Do you prefer working with people, data, or creative projects?\n• What impact do you want to make in your community?\n\nBased on current trends in Africa, high-growth areas include:\n- Technology (software development, data science, cybersecurity)\n- Healthcare (telemedicine, health informatics)\n- Finance (fintech, digital banking)\n- Agriculture (agritech, sustainable farming)\n- Renewable energy\n\nWould you like to explore any of these areas in more detail?"
    }

    if (lowerInput.includes("tech") || lowerInput.includes("technology")) {
      return "Excellent choice! Tech is one of the fastest-growing sectors in Africa. Here's a roadmap to get started:\n\n**Programming Fundamentals:**\n• Start with Python or JavaScript\n• Learn HTML/CSS for web development\n• Practice on platforms like Codecademy, freeCodeCamp\n\n**Specialization Options:**\n• Web Development: React, Node.js\n• Mobile Development: React Native, Flutter\n• Data Science: Python, SQL, machine learning\n• Cybersecurity: Network security, ethical hacking\n\n**African Tech Hubs to Explore:**\n• Lagos (Nigeria) - Fintech hub\n• Nairobi (Kenya) - Silicon Savannah\n• Cape Town (South Africa) - Startup ecosystem\n• Accra (Ghana) - Growing tech scene\n\n**Next Steps:**\n1. Choose a specialization\n2. Build projects for your portfolio\n3. Join local tech communities\n4. Apply for internships or bootcamps\n\nWhat specific area of tech interests you most?"
    }

    if (lowerInput.includes("resume") || lowerInput.includes("cv")) {
      return "A strong resume is crucial for career success! Here are key tips for African job markets:\n\n**Structure:**\n• Contact information\n• Professional summary (2-3 lines)\n• Work experience (most recent first)\n• Education\n• Skills (technical and soft skills)\n• Languages (important in multilingual Africa)\n\n**African Context Tips:**\n• Include your location and willingness to relocate\n• Mention language proficiencies\n• Highlight community involvement/volunteer work\n• Show understanding of local market challenges\n\n**Common Mistakes to Avoid:**\n• Generic objectives\n• Typos and formatting issues\n• Irrelevant information\n• Missing contact details\n\n**Pro Tips:**\n• Quantify achievements (increased sales by 20%)\n• Use action verbs (led, developed, implemented)\n• Tailor for each application\n• Keep it to 1-2 pages\n\nWould you like me to review your resume if you upload it?"
    }

    return "That's an interesting question! I'm here to help you with career guidance, skill development, and professional growth. I can assist with:\n\n• Career path recommendations\n• Skill development strategies\n• Resume and interview preparation\n• Industry insights for African markets\n• Educational recommendations\n• Networking advice\n• Entrepreneurship guidance\n\nFeel free to ask me anything related to your career journey, or try one of the suggested prompts below. How else can I help you today?"
  }

  const handleSuggestedPrompt = (prompt: string) => {
    setInputMessage(prompt)
  }

  const handleFileUpload = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const fileMessage = {
        id: messages.length + 1,
        type: "user" as const,
        content: `Uploaded file: ${file.name}`,
        timestamp: new Date(),
        file: file,
      }
      setMessages((prev) => [...prev, fileMessage])

      // Simulate file analysis
      setTimeout(() => {
        const analysisResponse = {
          id: messages.length + 2,
          type: "bot" as const,
          content: `I've analyzed your ${file.type.includes("pdf") ? "resume" : "document"}. Here's my feedback:\n\n**Strengths:**\n• Clear contact information\n• Good use of action verbs\n• Relevant work experience\n\n**Areas for Improvement:**\n• Add more quantifiable achievements\n• Include technical skills section\n• Consider adding a professional summary\n• Optimize for ATS (Applicant Tracking Systems)\n\n**Specific Recommendations:**\n• Use metrics where possible (e.g., "Managed team of 5" instead of "Managed team")\n• Add keywords relevant to your target industry\n• Ensure consistent formatting throughout\n\nWould you like specific suggestions for any section?`,
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, analysisResponse])
      }, 2000)
    }
  }

  const resetChat = () => {
    setMessages([
      {
        id: 1,
        type: "bot",
        content:
          "Hello! I'm UbuntuBot, your AI career companion. I'm here to help you navigate your career journey with personalized guidance. How can I assist you today?",
        timestamp: new Date(),
      },
    ])
  }

  return (
    <div className={`min-h-screen pt-16 ${isDarkMode ? "bg-gray-900 text-white" : "bg-ubuntu-light text-ubuntu-dark"}`}>
      {/* Header */}
      <div
        className={`border-b ${isDarkMode ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-white"} sticky top-16 z-10`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center">
                <Bot size={20} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold">UbuntuBot</h1>
                <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>AI Career Companion</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={resetChat}
                className={`p-2 rounded-full hover:bg-gray-100 ${isDarkMode ? "hover:bg-gray-700" : ""} transition-colors`}
                title="Reset Chat"
              >
                <RotateCcw size={18} />
              </button>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-full hover:bg-gray-100 ${isDarkMode ? "hover:bg-gray-700" : ""} transition-colors`}
                title="Toggle Theme"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="space-y-6 mb-6">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`flex space-x-3 max-w-3xl ${message.type === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === "user" ? "bg-ubuntu-orange" : "gradient-bg"
                  }`}
                >
                  {message.type === "user" ? (
                    <User size={16} className="text-white" />
                  ) : (
                    <Bot size={16} className="text-white" />
                  )}
                </div>

                <div
                  className={`rounded-2xl px-4 py-3 ${
                    message.type === "user"
                      ? "bg-ubuntu-orange text-white"
                      : isDarkMode
                        ? "bg-gray-800 border border-gray-700"
                        : "bg-white border border-gray-200"
                  }`}
                >
                  <div className="whitespace-pre-wrap leading-relaxed">{message.content}</div>
                  <div
                    className={`text-xs mt-2 opacity-70 ${
                      message.type === "user" ? "text-white" : isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="flex space-x-3 max-w-3xl">
                <div className="w-8 h-8 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot size={16} className="text-white" />
                </div>
                <div
                  className={`rounded-2xl px-4 py-3 ${
                    isDarkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"
                  }`}
                >
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-ubuntu-orange rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-ubuntu-orange rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-ubuntu-orange rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Prompts */}
        {messages.length === 1 && (
          <div className="mb-6">
            <p className={`text-sm mb-3 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Try asking me about:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {suggestedPrompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestedPrompt(prompt)}
                  className={`text-left p-3 rounded-lg border transition-colors ${
                    isDarkMode
                      ? "border-gray-700 hover:border-ubuntu-orange hover:bg-gray-800"
                      : "border-gray-200 hover:border-ubuntu-orange hover:bg-white"
                  }`}
                >
                  <span className="text-sm">{prompt}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className={`border-t ${isDarkMode ? "border-gray-700" : "border-gray-200"} pt-4`}>
          <div className="flex space-x-3">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              className="hidden"
            />

            <button
              onClick={handleFileUpload}
              className={`p-3 rounded-full border transition-colors ${
                isDarkMode
                  ? "border-gray-700 hover:border-ubuntu-orange hover:bg-gray-800"
                  : "border-gray-300 hover:border-ubuntu-orange hover:bg-white"
              }`}
              title="Upload Resume"
            >
              <Upload size={18} />
            </button>

            <div className="flex-1 relative">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask me about your career journey..."
                className={`w-full px-4 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-ubuntu-orange focus:border-transparent ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-ubuntu-dark placeholder-gray-500"
                }`}
                disabled={isLoading}
              />
            </div>

            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isLoading}
              className="btn-primary px-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
            </button>
          </div>

          <p className={`text-xs mt-2 text-center ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
            UbuntuBot can make mistakes. Consider checking important information.
          </p>
        </div>
      </div>
    </div>
  )
}
