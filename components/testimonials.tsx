"use client";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";



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



export function Testimonials() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);


    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section id="testimonials" className="py-20 px-6 lg:px-24  relative">
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
                            className={`w-2 h-2 rounded-full transition-colors ${index === currentTestimonial ? "bg-black" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
