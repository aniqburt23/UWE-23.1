import Link from "next/link"
import { ArrowRight, Users, MessageCircle } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="py-20 bg-ubuntu-dark text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
        <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
          Join thousands of African youth who are already transforming their careers through mentorship, AI-powered
          guidance, and community support.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Link href="/profile" className="btn-primary bg-ubuntu-orange hover:bg-ubuntu-red">
            <Users size={20} className="mr-2" />
            Create Your Profile
            <ArrowRight size={20} className="ml-2" />
          </Link>
          <Link href="/chat" className="btn-secondary bg-ubuntu-gold hover:bg-ubuntu-orange">
            <MessageCircle size={20} className="mr-2" />
            Try UbuntuBot Now
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3 text-ubuntu-gold">Free to Join</h3>
            <p className="text-gray-300">
              No hidden fees. Access to mentors, resources, and community support at no cost.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3 text-ubuntu-gold">Pan-African Network</h3>
            <p className="text-gray-300">Connect with professionals and peers from across the African continent.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3 text-ubuntu-gold">AI-Powered Growth</h3>
            <p className="text-gray-300">Leverage cutting-edge AI technology for personalized career development.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
