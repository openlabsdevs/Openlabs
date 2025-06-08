"use client";

import { Button } from "./ui/button";



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


export function OngoingProjects() {
    return (
        <section id="ongoing" className="py-20 px-6 lg:px-24 ">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-semibold mb-4">Ongoing Projects</h2>
                    <p className="">Join our latest initiatives and contribute</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ongoingProjects.map((project, index) => (
                        <div
                            key={index}
                            className="relative  rounded-2xl shadow-sm p-6  hover:scale-105 transition-all duration-200"
                        >
                            <img src={project.logo || "/placeholder.svg"} alt={`${project.name} logo`} className="w-16 h-16 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                            <p className=" leading-relaxed mb-4">{project.description}</p>

                            <div className="mb-6">
                                <div className=" rounded-full h-2 w-full">
                                    <div
                                        className=" h-2 rounded-full transition-all duration-300"
                                        style={{ width: `${project.progress}%` }}
                                    ></div>
                                </div>
                                <p className="text-sm mt-1">{project.progress}% complete</p>
                            </div>

                            <Button
                                variant="outline"
                                className="absolute bottom-6 right-6"
                            >
                                Join Now
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
