"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  X,
  ArrowDown,
  Check,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Github,
  Twitter,
  MessageCircle,
  Loader2,
} from "lucide-react"

export default function OpenLabsLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const testimonials = [
    {
      quote:
        "OpenLabs transformed my understanding of open-source development. The mentorship and collaborative environment helped me grow as a developer.",
      name: "Sarah Chen",
      role: "Full Stack Developer",
      avatar: "/placeholder.svg?height=64&width=64",
    },
    {
      quote:
        "Being part of OpenLabs opened doors to amazing opportunities. The projects here are meaningful and the community is incredibly supportive.",
      name: "Marcus Johnson",
      role: "Backend Engineer",
      avatar: "/placeholder.svg?height=64&width=64",
    },
    {
      quote:
        "The learning experience at OpenLabs is unmatched. I've contributed to real-world projects and built lasting connections with fellow developers.",
      name: "Priya Patel",
      role: "Frontend Developer",
      avatar: "/placeholder.svg?height=64&width=64",
    },
  ]

  const completedProjects = [
    {
      name: "EcoTracker",
      description:
        "A sustainability tracking app that helps users monitor their carbon footprint and environmental impact.",
      logo: "/placeholder.svg?height=64&width=64",
    },
    {
      name: "StudyBuddy",
      description: "Collaborative learning platform connecting students for peer-to-peer tutoring and study sessions.",
      logo: "/placeholder.svg?height=64&width=64",
    },
    {
      name: "OpenAPI Tools",
      description: "Developer tools suite for API documentation, testing, and validation with open-source standards.",
      logo: "/placeholder.svg?height=64&width=64",
    },
  ]

  const ongoingProjects = [
    {
      name: "HealthHub",
      description: "Digital health platform for tracking wellness metrics and connecting with healthcare providers.",
      progress: 75,
      logo: "/placeholder.svg?height=64&width=64",
    },
    {
      name: "CodeMentor",
      description: "AI-powered coding assistant that provides personalized learning paths and code reviews.",
      progress: 45,
      logo: "/placeholder.svg?height=64&width=64",
    },
    {
      name: "GreenChain",
      description: "Blockchain-based supply chain transparency platform for sustainable business practices.",
      progress: 60,
      logo: "/placeholder.svg?height=64&width=64",
    },
  ]

  const leadMembers = [
    {
      name: "Alex Rivera",
      role: "President",
      bio: "Full-stack developer passionate about open-source innovation",
      photo: "/placeholder.svg?height=96&width=96",
    },
    {
      name: "Jordan Kim",
      role: "Tech Lead",
      bio: "Systems architect with expertise in scalable web applications",
      photo: "/placeholder.svg?height=96&width=96",
    },
    {
      name: "Taylor Swift",
      role: "Community Manager",
      bio: "Advocate for inclusive tech communities and mentorship",
      photo: "/placeholder.svg?height=96&width=96",
    },
  ]

  const members = Array.from({ length: 12 }, (_, i) => ({
    name: `Member ${i + 1}`,
    photo: `/placeholder.svg?height=80&width=80`,
  }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50 h-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-24 h-full flex items-center justify-between">
          <div className="text-xl font-bold text-black">OpenLabs</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="font-medium text-gray-700 hover:text-black hover:underline transition-colors">
              About
            </a>
            <a
              href="#completed"
              className="font-medium text-gray-700 hover:text-black hover:underline transition-colors"
            >
              Completed Projects
            </a>
            <a href="#ongoing" className="font-medium text-gray-700 hover:text-black hover:underline transition-colors">
              Ongoing Projects
            </a>
            <a
              href="#testimonials"
              className="font-medium text-gray-700 hover:text-black hover:underline transition-colors"
            >
              Testimonials
            </a>
            <a href="#members" className="font-medium text-gray-700 hover:text-black hover:underline transition-colors">
              Members
            </a>
            <a href="#contact" className="font-medium text-gray-700 hover:text-black hover:underline transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="secondary"
              className="hidden md:inline-flex hover:bg-black hover:text-white transition-colors"
            >
              Connect
            </Button>

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-6 py-4 space-y-4">
              <a href="#about" className="block font-medium text-gray-700 hover:text-black">
                About
              </a>
              <a href="#completed" className="block font-medium text-gray-700 hover:text-black">
                Completed Projects
              </a>
              <a href="#ongoing" className="block font-medium text-gray-700 hover:text-black">
                Ongoing Projects
              </a>
              <a href="#testimonials" className="block font-medium text-gray-700 hover:text-black">
                Testimonials
              </a>
              <a href="#members" className="block font-medium text-gray-700 hover:text-black">
                Members
              </a>
              <a href="#contact" className="block font-medium text-gray-700 hover:text-black">
                Contact
              </a>
              <Button variant="secondary" className="w-full">
                Connect
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center bg-white pt-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-3">Empowering Open-Source Collaboration</h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Join OpenLabs: the premier society for open-source contributors
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-black text-white hover:bg-gray-800 px-6 py-3 text-lg transition-colors">
              Get Started
            </Button>
            <Button
              variant="outline"
              className="border-2 border-black text-black hover:bg-black hover:text-white px-6 py-3 text-lg transition-colors"
            >
              Learn More
            </Button>
          </div>
          <div className="mt-12">
            <ArrowDown className="h-6 w-6 text-gray-400 mx-auto animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-black mb-4">About OpenLabs</h2>
            <p className="text-gray-600">Building the future of open-source collaboration</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
            <div className="bg-white/40 backdrop-blur-md border border-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-medium mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                OpenLabs is a student-led open-source community that fosters collaborative development, mentorship, and
                innovation. We empower members to learn, build, and contribute to impactful projects.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-black" />
                  <span className="text-gray-700">Collaboration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-black" />
                  <span className="text-gray-700">Learning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-black" />
                  <span className="text-gray-700">Community</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-black" />
                  <span className="text-gray-700">Innovation</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="w-full max-w-md border border-gray-200 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-200">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="OpenLabs Community Illustration"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Completed Projects Section */}
      <section id="completed" className="py-20 px-6 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-black mb-4">Completed Projects</h2>
            <p className="text-gray-600">Our Impact So Far</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-black">50+</div>
              <div className="text-gray-600">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black">200+</div>
              <div className="text-gray-600">Contributors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black">1M+</div>
              <div className="text-gray-600">Lines of Code</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col justify-between hover:border-gray-400 hover:-translate-y-1 transition-all duration-200"
              >
                <div>
                  <img
                    src={project.logo || "/placeholder.svg"}
                    alt={`${project.name} logo`}
                    className="w-16 h-16 mb-4"
                  />
                  <h3 className="text-xl font-semibold text-black mb-2">{project.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>
                <Button variant="ghost" className="mt-4 self-end text-black hover:bg-gray-100">
                  View Repo
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Projects Section */}
      <section id="ongoing" className="py-20 px-6 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-black mb-4">Ongoing Projects</h2>
            <p className="text-gray-600">Join our latest initiatives and contribute</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ongoingProjects.map((project, index) => (
              <div
                key={index}
                className="relative bg-gray-50 border border-gray-200 rounded-2xl shadow-sm p-6 hover:border-gray-400 hover:scale-105 transition-all duration-200"
              >
                <img src={project.logo || "/placeholder.svg"} alt={`${project.name} logo`} className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-semibold text-black mb-2">{project.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>

                <div className="mb-6">
                  <div className="bg-gray-200 rounded-full h-2 w-full">
                    <div
                      className="bg-black h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{project.progress}% complete</p>
                </div>

                <Button
                  variant="outline"
                  className="absolute bottom-6 right-6 border-black text-black hover:bg-black hover:text-white"
                >
                  Join Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 lg:px-24 bg-white relative">
        <div className="absolute inset-0 bg-black/[0.03]"></div>
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-black mb-4">Testimonials</h2>
            <p className="text-gray-600">Hear from our members</p>
          </div>

          <div className="relative">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl shadow-sm p-8 flex flex-col items-center text-center">
              <Quote className="h-8 w-8 text-gray-400 mb-4" />
              <p className="text-lg italic text-gray-700 leading-relaxed mb-6">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <img
                src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full border-2 border-gray-200 mb-4"
              />
              <p className="font-semibold text-black">{testimonials[currentTestimonial].name}</p>
              <p className="text-sm text-gray-600">{testimonials[currentTestimonial].role}</p>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-gray-400 hover:text-black transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-gray-400 hover:text-black transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-black" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section id="members" className="py-20 px-6 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-black mb-4">Members</h2>
            <p className="text-gray-600">Meet our contributors</p>
          </div>

          {/* Lead Members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {leadMembers.map((member, index) => (
              <div
                key={index}
                className="relative bg-gray-50 border border-gray-200 rounded-2xl shadow p-6 flex flex-col items-center"
              >
                <Badge className="absolute top-4 right-4 bg-black text-white text-xs">{member.role}</Badge>
                <img
                  src={member.photo || "/placeholder.svg"}
                  alt={member.name}
                  className="w-24 h-24 rounded-full border-2 border-black mb-4"
                />
                <h3 className="text-xl font-semibold text-black mb-2">{member.name}</h3>
                <p className="text-sm text-gray-600 text-center">{member.bio}</p>
              </div>
            ))}
          </div>

          {/* Regular Members Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {members.map((member, index) => (
              <div key={index} className="relative group">
                <img
                  src={member.photo || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-auto rounded-full border-2 border-gray-200 transition group-hover:border-black"
                />
                <div className="absolute inset-0 bg-black/30 rounded-full hidden group-hover:flex items-center justify-center transition-all">
                  <span className="text-white text-sm font-medium">{member.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-6 lg:px-24 bg-white">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-black mb-4">Get in Touch</h2>
            <p className="text-gray-600">Questions? Collaborations? We'd love to hear from you.</p>
          </div>

          <div className="bg-white/30 backdrop-blur-md border border-gray-200 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  required
                  className="focus:border-black focus:ring-black"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="focus:border-black focus:ring-black"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  required
                  className="focus:border-black focus:ring-black min-h-[120px]"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="join" />
                <label htmlFor="join" className="text-sm text-gray-700">
                  I want to join OpenLabs as a contributor
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-black text-white hover:bg-gray-800 py-3 disabled:bg-gray-400"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-24 bg-black text-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <div className="text-xl font-bold text-white mb-2">OpenLabs</div>
              <p className="text-sm text-gray-400">Building open-source futures</p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-white mb-2">Quick Links</h3>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  About
                </a>
                <a href="#completed" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Completed Projects
                </a>
                <a href="#ongoing" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Ongoing Projects
                </a>
                <a href="#testimonials" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Testimonials
                </a>
                <a href="#members" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Members
                </a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold text-white mb-2">Connect with Us</h3>
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  <MessageCircle className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-700 pt-6 text-center">
            <p className="text-sm text-gray-500">
              © 2025 OpenLabs. All rights reserved. |
              <a href="/privacy" className="text-gray-400 hover:text-white ml-1">
                Privacy
              </a>{" "}
              ·
              <a href="/terms" className="text-gray-400 hover:text-white ml-1">
                Terms
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
