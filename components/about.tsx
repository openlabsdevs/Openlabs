"use client"

import { Check, Star } from "lucide-react"

export function About() {
    return (
        <section id="about" className="py-20 px-6 lg:px-24 ">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-semibold mb-4">About OpenLabs</h2>
                    <p className="">Building the future of open-source collaboration</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
                    <div className=" backdrop-blur-md border rounded-2xl p-8">
                        <h3 className="text-2xl font-medium mb-4">Our Mission</h3>
                        <p className=" leading-relaxed mb-6">
                            OpenLabs is a student-led open-source community that fosters collaborative development, mentorship, and
                            innovation. We empower members to learn, build, and contribute to impactful projects.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Check className="h-5 w-5 " />
                                <span className="">Collaboration</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Star className="h-5 w-5" />
                                <span className="">Learning</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Check className="h-5 w-5" />
                                <span className="">Community</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Star className="h-5 w-5" />
                                <span className="">Innovation</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <div className="w-full max-w-md border  rounded-xl overflow-hidden hover:scale-105 transition-transform duration-200">
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
    )
}
