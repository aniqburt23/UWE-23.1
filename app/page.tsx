import Hero from "@/components/home/Hero"
import Mission from "@/components/home/Mission"
import Highlights from "@/components/home/Highlights"
import Testimonials from "@/components/home/Testimonials"
import CallToAction from "@/components/home/CallToAction"

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <Mission />
      <Highlights />
      <Testimonials />
      <CallToAction />
    </div>
  )
}
