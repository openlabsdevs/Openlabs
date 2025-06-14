"use client";

import { AnimatedBlob } from "./animated-blob";
import GetStarted from "./get-started";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";



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
        <section id="ongoing" className="py-20 px-6 lg:px-24 flex justify-center">
            <div className="absolute z-0 left-[15%] top-[2400px] rotate-90">
                <AnimatedBlob
                    className="rounded-xl opacity-20"
                    firstBlobColor="bg-[#EB2933]"
                    secondBlobColor="bg-secondary-foreground"
                />

            </div>
            <div className="max-w-7xl flex flex-col gap-4 justify-center z-10">
                <div className="flex justify-between items-center px-4">
                    <div>
                        <h2 className="text-4xl font-semibold mb-4">Ongoing Projects</h2>
                        <p className="">Join our latest initiatives and contribute</p>
                    </div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button
                                className="sm:px-8 sm:py-3 sm:text-lg transition-colors"
                            >Join <p className="hidden sm:inline">Now</p></Button>
                        </DialogTrigger>
                        <GetStarted />
                    </Dialog>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ongoingProjects.map((project, index) => (
                        <Card
                            key={index}
                            className="relative  rounded-2xl shadow-sm p-6  hover:scale-105 transition-all duration-200"
                        >
                            <img src={project.logo || "/placeholder.svg"} alt={`${project.name} logo`} className="w-full mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                            <p className=" leading-relaxed mb-4">{project.description}</p>

                            <div className="mb-6">
                                <div className=" rounded-full bg-secondary h-2 w-full">
                                    <div
                                        className=" h-2 bg-black dark:bg-white rounded-full transition-all duration-300"
                                        style={{ width: `${project.progress}%` }}
                                    ></div>
                                </div>
                                <p className="text-sm mt-1">{project.progress}% complete</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
