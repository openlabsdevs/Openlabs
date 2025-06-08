
import { About } from "@/components/about"
import { CompletedProjects } from "@/components/completed-projects"
import { OngoingProjects } from "@/components/ongoing-projects"
import { Testimonials } from "@/components/testimonials"
import { Members } from "@/components/members"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Metadata } from "next"


//disable-use-client-then it.
export const metadata: Metadata = {
  title: 'Openlabs',
  description: '',
  icons: {
    icon: './favicon.ico',
  },
};











export default function OpenLabsLanding() {


  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Completed Projects Section */}
      <CompletedProjects />

      {/* Ongoing Projects Section */}
      <OngoingProjects />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Members Section */}
      <Members />

      {/* Contact Form Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  )
}
