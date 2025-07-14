"use client"

import type React from "react"

import { useState } from "react"
import { User, MapPin, Calendar, Edit, Save, Upload, BookOpen, Users, MessageCircle } from "lucide-react"

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showLogin, setShowLogin] = useState(true)
  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
    age: "",
    country: "",
    interests: [],
    careerGoals: "",
    linkedin: "",
    website: "",
  })

  const [profileData, setProfileData] = useState({
    fullName: "Amara Okafor",
    email: "amara.okafor@email.com",
    age: "24",
    country: "Nigeria",
    city: "Lagos",
    interests: ["Software Development", "AI/ML", "Entrepreneurship", "Mentorship"],
    careerGoals:
      "To become a senior software engineer and eventually start my own tech company focused on solving African challenges.",
    linkedin: "https://linkedin.com/in/amaraokafor",
    website: "https://amaraokafor.dev",
    profileImage: "/placeholder.svg?height=120&width=120",
    joinDate: "2024-01-15",
    role: "Mentee",
  })

  const availableInterests = [
    "Software Development",
    "Data Science",
    "AI/ML",
    "Cybersecurity",
    "Mobile Development",
    "Web Development",
    "DevOps",
    "Product Management",
    "UX/UI Design",
    "Digital Marketing",
    "Entrepreneurship",
    "Finance",
    "Healthcare",
    "Education",
    "Agriculture",
    "Renewable Energy",
    "Social Impact",
    "Mentorship",
    "Leadership",
    "Public Speaking",
  ]

  const sessions = [
    {
      id: 1,
      mentor: "Dr. Kwame Asante",
      date: "2024-02-20",
      time: "14:00",
      topic: "Career Transition to Tech",
      status: "Upcoming",
    },
    {
      id: 2,
      mentor: "Zara Mwangi",
      date: "2024-02-10",
      time: "16:00",
      topic: "Building Technical Skills",
      status: "Completed",
    },
  ]

  const savedResources = [
    {
      id: 1,
      title: "The Future of Tech in Africa",
      type: "video",
      author: "Dr. Amina Kone",
    },
    {
      id: 2,
      title: "Building Your Personal Brand",
      type: "ebook",
      author: "Kwame Asante",
    },
  ]

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate login
    setIsLoggedIn(true)
  }

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate signup
    setProfileData({
      ...profileData,
      fullName: signupData.fullName,
      email: signupData.email,
      age: signupData.age,
      country: signupData.country,
      interests: signupData.interests,
      careerGoals: signupData.careerGoals,
      linkedin: signupData.linkedin,
      website: signupData.website,
    })
    setIsLoggedIn(true)
  }

  const handleSave = () => {
    setIsEditing(false)
    // Here you would typically save to a backend
  }

  const handleInterestToggle = (interest: string) => {
    if (isEditing) {
      setProfileData({
        ...profileData,
        interests: profileData.interests.includes(interest)
          ? profileData.interests.filter((i) => i !== interest)
          : [...profileData.interests, interest],
      })
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="pt-16 min-h-screen bg-ubuntu-light">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <User size={32} className="text-white" />
              </div>
              <h1 className="text-3xl font-bold text-ubuntu-dark mb-2">Welcome to UWE</h1>
              <p className="text-gray-600">Join our community of African youth and mentors</p>
            </div>

            <div className="card p-8">
              <div className="flex mb-6">
                <button
                  onClick={() => setShowLogin(true)}
                  className={`flex-1 py-2 text-center font-medium transition-colors ${
                    showLogin ? "text-ubuntu-orange border-b-2 border-ubuntu-orange" : "text-gray-500"
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => setShowLogin(false)}
                  className={`flex-1 py-2 text-center font-medium transition-colors ${
                    !showLogin ? "text-ubuntu-orange border-b-2 border-ubuntu-orange" : "text-gray-500"
                  }`}
                >
                  Sign Up
                </button>
              </div>

              {showLogin ? (
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ubuntu-orange"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <input
                      type="password"
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ubuntu-orange"
                      placeholder="Your password"
                      required
                    />
                  </div>
                  <button type="submit" className="w-full btn-primary">
                    Sign In
                  </button>
                  <div className="text-center">
                    <button type="button" className="text-ubuntu-orange hover:text-ubuntu-red text-sm">
                      Forgot password?
                    </button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        value={signupData.fullName}
                        onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ubuntu-orange"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                      <input
                        type="number"
                        value={signupData.age}
                        onChange={(e) => setSignupData({ ...signupData, age: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ubuntu-orange"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={signupData.email}
                      onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ubuntu-orange"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <input
                      type="password"
                      value={signupData.password}
                      onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ubuntu-orange"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                    <select
                      value={signupData.country}
                      onChange={(e) => setSignupData({ ...signupData, country: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ubuntu-orange"
                      required
                    >
                      <option value="">Select your country</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Kenya">Kenya</option>
                      <option value="South Africa">South Africa</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Egypt">Egypt</option>
                      <option value="Morocco">Morocco</option>
                      <option value="Ethiopia">Ethiopia</option>
                      <option value="Uganda">Uganda</option>
                      <option value="Tanzania">Tanzania</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full btn-primary">
                    Create Account
                  </button>
                </form>
              )}

              <div className="mt-6 text-center">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>
                <button className="mt-4 w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Continue with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16 min-h-screen bg-ubuntu-light">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="card p-8 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
              <div className="flex items-center space-x-6 mb-4 md:mb-0">
                <div className="relative">
                  <img
                    src={profileData.profileImage || "/placeholder.svg"}
                    alt={profileData.fullName}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  {isEditing && (
                    <button className="absolute bottom-0 right-0 bg-ubuntu-orange text-white p-2 rounded-full hover:bg-ubuntu-red transition-colors">
                      <Upload size={16} />
                    </button>
                  )}
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-ubuntu-dark">{profileData.fullName}</h1>
                  <div className="flex items-center space-x-4 text-gray-600 mt-2">
                    <div className="flex items-center space-x-1">
                      <MapPin size={16} />
                      <span>
                        {profileData.city}, {profileData.country}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>Joined {new Date(profileData.joinDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        profileData.role === "Mentor" ? "bg-ubuntu-gold text-white" : "bg-ubuntu-orange text-white"
                      }`}
                    >
                      {profileData.role}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
                className={`btn-${isEditing ? "primary" : "outline"} flex items-center`}
              >
                {isEditing ? <Save size={16} className="mr-2" /> : <Edit size={16} className="mr-2" />}
                {isEditing ? "Save Changes" : "Edit Profile"}
              </button>
            </div>

            {/* Profile Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ubuntu-orange"
                  />
                ) : (
                  <p className="text-gray-900">{profileData.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                {isEditing ? (
                  <input
                    type="number"
                    value={profileData.age}
                    onChange={(e) => setProfileData({ ...profileData, age: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ubuntu-orange"
                  />
                ) : (
                  <p className="text-gray-900">{profileData.age} years old</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn</label>
                {isEditing ? (
                  <input
                    type="url"
                    value={profileData.linkedin}
                    onChange={(e) => setProfileData({ ...profileData, linkedin: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ubuntu-orange"
                  />
                ) : (
                  <a href={profileData.linkedin} className="text-ubuntu-orange hover:text-ubuntu-red">
                    {profileData.linkedin}
                  </a>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                {isEditing ? (
                  <input
                    type="url"
                    value={profileData.website}
                    onChange={(e) => setProfileData({ ...profileData, website: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ubuntu-orange"
                  />
                ) : (
                  <a href={profileData.website} className="text-ubuntu-orange hover:text-ubuntu-red">
                    {profileData.website}
                  </a>
                )}
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Career Goals</label>
              {isEditing ? (
                <textarea
                  value={profileData.careerGoals}
                  onChange={(e) => setProfileData({ ...profileData, careerGoals: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ubuntu-orange"
                />
              ) : (
                <p className="text-gray-900">{profileData.careerGoals}</p>
              )}
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">Interests & Skills</label>
              <div className="flex flex-wrap gap-2">
                {isEditing
                  ? availableInterests.map((interest) => (
                      <button
                        key={interest}
                        onClick={() => handleInterestToggle(interest)}
                        className={`px-3 py-1 rounded-full text-sm transition-colors ${
                          profileData.interests.includes(interest)
                            ? "bg-ubuntu-orange text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-ubuntu-light"
                        }`}
                      >
                        {interest}
                      </button>
                    ))
                  : profileData.interests.map((interest, index) => (
                      <span key={index} className="px-3 py-1 bg-ubuntu-light text-ubuntu-orange rounded-full text-sm">
                        {interest}
                      </span>
                    ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mentorship Sessions */}
            <div className="card p-6">
              <h2 className="text-xl font-bold text-ubuntu-dark mb-4 flex items-center">
                <Users size={20} className="mr-2" />
                Your Sessions
              </h2>
              <div className="space-y-4">
                {sessions.map((session) => (
                  <div key={session.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-ubuntu-dark">{session.topic}</h3>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          session.status === "Upcoming" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                        }`}
                      >
                        {session.status}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">with {session.mentor}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      {new Date(session.date).toLocaleDateString()} at {session.time}
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 btn-primary">
                <MessageCircle size={16} className="mr-2" />
                Book a Mentor
              </button>
            </div>

            {/* Saved Resources */}
            <div className="card p-6">
              <h2 className="text-xl font-bold text-ubuntu-dark mb-4 flex items-center">
                <BookOpen size={20} className="mr-2" />
                Saved Resources
              </h2>
              <div className="space-y-4">
                {savedResources.map((resource) => (
                  <div key={resource.id} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-ubuntu-dark mb-1">{resource.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">by {resource.author}</p>
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-1 bg-ubuntu-light text-ubuntu-orange text-xs rounded">
                        {resource.type.toUpperCase()}
                      </span>
                      <button className="text-ubuntu-orange hover:text-ubuntu-red text-sm">View</button>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 btn-secondary">
                <BookOpen size={16} className="mr-2" />
                Explore Library
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card p-6 mt-8">
            <h2 className="text-xl font-bold text-ubuntu-dark mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="btn-primary text-center">
                <MessageCircle size={16} className="mr-2" />
                Chat with UbuntuBot
              </button>
              <button className="btn-secondary text-center">
                <Users size={16} className="mr-2" />
                Find Mentors
              </button>
              <button className="btn-outline text-center">
                <BookOpen size={16} className="mr-2" />
                Browse Resources
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
