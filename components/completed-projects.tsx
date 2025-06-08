"use client";

import { Button } from "./ui/button";



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

export function CompletedProjects() {
    return (
        <section id="completed" className="py-20 px-6 lg:px-24 ">
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
    )
}
