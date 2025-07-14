import { Users, Target, Award, Heart, Globe } from "lucide-react"

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Roots. Our Mission. Our Movement.</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
            Ubuntu Wisdom Exchange was born from the belief that African youth deserve access to the same opportunities
            and guidance that can transform lives and communities.
          </p>
        </div>
      </section>

      {/* Ubuntu Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-ubuntu-dark text-center">The Story of Ubuntu</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Ubuntu is an ancient African philosophy that means "I am because we are." It emphasizes our
                  interconnectedness and the belief that a person is a person through other people. This philosophy
                  forms the foundation of our platform.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  In traditional African societies, knowledge and wisdom were shared freely within communities. Elders
                  mentored the young, skills were passed down through generations, and everyone contributed to the
                  collective growth of the community.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  UWE brings this timeless tradition into the digital age, creating a global African community where
                  wisdom, opportunities, and support flow freely among all members.
                </p>
              </div>
              <div className="bg-ubuntu-light rounded-3xl p-8">
                <blockquote className="text-2xl font-light italic text-ubuntu-dark mb-4">
                  "Ubuntu speaks particularly about the fact that you can't exist as a human being in isolation."
                </blockquote>
                <cite className="text-ubuntu-orange font-semibold">- Desmond Tutu</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why UWE Exists */}
      <section className="py-20 bg-ubuntu-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-ubuntu-dark">Why UWE Exists</h2>
            <p className="text-xl text-gray-700 mb-12">
              Africa's youth represent 60% of the continent's population, yet many lack access to mentorship, career
              guidance, and professional networks that could unlock their potential.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card p-6">
                <div className="w-16 h-16 bg-ubuntu-red rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-ubuntu-dark">Skills Gap</h3>
                <p className="text-gray-600">
                  Many young Africans struggle to identify relevant skills and career paths in rapidly evolving
                  industries.
                </p>
              </div>

              <div className="card p-6">
                <div className="w-16 h-16 bg-ubuntu-orange rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-ubuntu-dark">Limited Networks</h3>
                <p className="text-gray-600">
                  Access to professional mentors and industry connections remains limited, especially in rural areas.
                </p>
              </div>

              <div className="card p-6">
                <div className="w-16 h-16 bg-ubuntu-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-ubuntu-dark">Fragmented Resources</h3>
                <p className="text-gray-600">
                  Educational and career resources are scattered across platforms, making it difficult to find quality
                  guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Pillars */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-ubuntu-dark">Our Four Pillars</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything we do is built on these foundational principles that guide our mission
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center flex-shrink-0">
                <Users size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-ubuntu-dark">Mentorship</h3>
                <p className="text-gray-700 leading-relaxed">
                  Connecting experienced professionals with young talent across Africa. Our mentors provide guidance,
                  share experiences, and open doors to new opportunities.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center flex-shrink-0">
                <Target size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-ubuntu-dark">AI Skills</h3>
                <p className="text-gray-700 leading-relaxed">
                  Leveraging artificial intelligence to provide personalized career guidance, skill assessments, and
                  learning recommendations tailored to each individual's goals.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center flex-shrink-0">
                <Award size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-ubuntu-dark">Wisdom</h3>
                <p className="text-gray-700 leading-relaxed">
                  Curating and sharing knowledge from African thought leaders, entrepreneurs, and innovators to inspire
                  and educate the next generation.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center flex-shrink-0">
                <Heart size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-ubuntu-dark">Community</h3>
                <p className="text-gray-700 leading-relaxed">
                  Building a supportive network where members collaborate, share opportunities, and celebrate each
                  other's successes across the African continent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-ubuntu-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-ubuntu-dark">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to community - the milestones that shaped UWE
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-ubuntu-orange"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-ubuntu-orange rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    2022
                  </div>
                  <div className="ml-8">
                    <h3 className="text-xl font-semibold mb-2 text-ubuntu-dark">The Idea</h3>
                    <p className="text-gray-700">
                      Founded by a group of African tech professionals who recognized the need for better mentorship and
                      career guidance for African youth.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-16 h-16 bg-ubuntu-gold rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    2023
                  </div>
                  <div className="ml-8">
                    <h3 className="text-xl font-semibold mb-2 text-ubuntu-dark">Platform Launch</h3>
                    <p className="text-gray-700">
                      Launched the beta version with 50 mentors and 200 mentees across 5 African countries. Introduced
                      the first version of UbuntuBot.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-16 h-16 bg-ubuntu-red rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    2024
                  </div>
                  <div className="ml-8">
                    <h3 className="text-xl font-semibold mb-2 text-ubuntu-dark">Rapid Growth</h3>
                    <p className="text-gray-700">
                      Expanded to 15 countries with 500+ mentors and 2,000+ active users. Launched the Wisdom Library
                      and Project Showcase features.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-16 h-16 bg-ubuntu-purple rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    2025
                  </div>
                  <div className="ml-8">
                    <h3 className="text-xl font-semibold mb-2 text-ubuntu-dark">The Future</h3>
                    <p className="text-gray-700">
                      Planning to reach 10,000+ users, launch mobile apps, and introduce AI-powered skill assessments
                      and job matching features.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-ubuntu-dark">Meet Our Founders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals who brought the Ubuntu philosophy to the digital age
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card p-6 text-center">
              <img
                src="/placeholder.svg?height=120&width=120"
                alt="Founder"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2 text-ubuntu-dark">Amina Kone</h3>
              <p className="text-ubuntu-orange mb-3">Co-Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                Former Google engineer passionate about using technology to solve African challenges.
              </p>
            </div>

            <div className="card p-6 text-center">
              <img
                src="/placeholder.svg?height=120&width=120"
                alt="Founder"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2 text-ubuntu-dark">Kwame Osei</h3>
              <p className="text-ubuntu-orange mb-3">Co-Founder & CTO</p>
              <p className="text-gray-600 text-sm">
                AI researcher and entrepreneur focused on building inclusive technology solutions.
              </p>
            </div>

            <div className="card p-6 text-center">
              <img
                src="/placeholder.svg?height=120&width=120"
                alt="Founder"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2 text-ubuntu-dark">Zara Mwangi</h3>
              <p className="text-ubuntu-orange mb-3">Co-Founder & CPO</p>
              <p className="text-gray-600 text-sm">
                Product strategist with experience building platforms that connect communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 gradient-bg text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Join Our Movement</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Be part of the Ubuntu Wisdom Exchange community and help us build a brighter future for African youth.
          </p>
          <a href="/profile" className="btn-primary bg-white text-ubuntu-orange hover:bg-ubuntu-light">
            Create Your Profile
          </a>
        </div>
      </section>
    </div>
  )
}
