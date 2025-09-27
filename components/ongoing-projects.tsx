"use client";

import { AnimatedBlob } from "./animated-blob";
import GetStarted from "./get-started";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { AnimateOnScroll, FadeIn } from "@/components/ui/motion";



const ongoingProjects = [
    {
        name: "Snap-Form",
        description: "Snap-form is a modern, agentic AI form builder that lets you create, edit, and analyze forms.",
        progress: 12,
        logo: "/snap-form.png",
    },
    {
        name: "Hacklog",
        description: "Platform to create and manage Compititive Programming Contests with ease.",
        progress: 5,
        logo: "/hacklog.png",
    },
    {
        name: "Aura",
        description: "Aura is a Web3-native freelancing marketplace powered by Solana.",
        progress: 8,
        logo: "/aura.png",
    }
]


export function OngoingProjects() {
    return (
        <div id="ongoing">
            <AnimateOnScroll className="py-20 px-6 lg:px-24 flex justify-center">
                <FadeIn delay={0.1}>
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
                        <FadeIn delay={0.2}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {ongoingProjects.map((project, index) => (
                                    <Card
                                        key={index}
                                        className="flex flex-col justify-between items-stretch relative  rounded-2xl shadow-sm p-6  hover:scale-105 transition-all duration-200"
                                    >
                                        <div>
                                            <div className=" aspect-video mb-4 rounded-md">
                                                <img src={project.logo || "/placeholder.svg"} alt={`${project.name} logo`} className="w-full h-full object-cover rounded-md" />
                                            </div>
                                            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                                            <p className=" leading-relaxed mb-4">{project.description}</p>

                                        </div>
                                        <div className="">
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
                        </FadeIn>
                    </div>
                </FadeIn>
            </AnimateOnScroll>
        </div>
    )
}
