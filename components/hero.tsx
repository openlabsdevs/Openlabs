"use client";

import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center pt-16">
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
  )
}
