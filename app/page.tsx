
import { About } from "@/components/about"
import { CompletedProjects } from "@/components/completed-projects"
import { OngoingProjects } from "@/components/ongoing-projects"
import { Testimonials } from "@/components/testimonials"
import { Members } from "@/components/members"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"














export default function OpenLabsLanding() {


  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Completed Projects Section */}
      {/* <CompletedProjects /> */} 

      {/* Ongoing Projects Section */}
      <OngoingProjects />

      {/* Testimonials Section */}
      {/* <Testimonials /> */}

      {/* Members Section */}
      <Members />

      {/* Contact Form Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  )
}
