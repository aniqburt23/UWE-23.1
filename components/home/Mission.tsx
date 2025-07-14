export default function Mission() {
  return (
    <section className="py-20 bg-ubuntu-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-ubuntu-dark">Our Mission</h2>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
            We believe in the power of Ubuntu - the African philosophy that emphasizes our interconnectedness. Through
            mentorship, AI-powered career guidance, and community wisdom, we're building bridges to unlock the potential
            of African youth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">M</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-ubuntu-dark">Mentorship</h3>
              <p className="text-gray-600">Connect with experienced professionals who guide your journey</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">A</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-ubuntu-dark">AI Tools</h3>
              <p className="text-gray-600">
                Leverage artificial intelligence for career guidance and skill development
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">C</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-ubuntu-dark">Community</h3>
              <p className="text-gray-600">Join a supportive network of peers and professionals across Africa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
