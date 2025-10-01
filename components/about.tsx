"use client"

import { Check, Globe, GraduationCap, Lightbulb, Star, Users } from "lucide-react"
import { Card } from "./ui/card"
import Image from "next/image"
import About1 from "../public/about 1.png"
import About2 from "../public/about 2.png"
import { AnimateOnScroll, FadeIn } from "@/components/ui/motion"


export function About() {
    return (
        <div id="about" className="w-full flex items-center justify-center">
            <AnimateOnScroll className="py-20 px-6 xl:px-40 flex gap-12 mx-auto">
                <FadeIn delay={0.1} className="hidden lg:block">
                    <div className="hidden w-auto lg:flex flex-col gap-4">
                        <h1 className="text-4xl font-bold">Our Mission</h1>
                        <p className="text-wrap">To foster a vibrant community where innovation thrives through open collaboration and shared knowledge.</p>
                        <div><Image className="rounded-lg" src={About1} alt="About image" /></div>
                    </div>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <div className="flex flex-col gap-4 z-10">
                        <h1 className="text-4xl font-bold">About OpenLabs</h1>
                        <p className="text-wrap">OpenLabs is a dynamic, open-source collaboration society dedicated to pushing the boundaries of technology and innovation. We believe in the power of collective intelligence and the transformative potential of shared knowledge. Our community is a melting pot of diverse talents, from seasoned developers to enthusiastic beginners, all united by a passion for creating impactful solutions.</p>
                        <p className="text-wrap">In today's rapidly evolving technological landscape, open collaboration is more crucial than ever. It accelerates progress, fosters creativity, and ensures that innovation benefits everyone. OpenLabs provides a platform where individuals can contribute to meaningful projects, learn from peers, and build a portfolio of work that reflects their skills and dedication.</p>
                        <div className="flex flex-col gap-3">
                            <h2 className="text-xl font-bold">Our Core Values</h2>
                            <div className="flex gap-4 items-center"><div className="bg-secondary rounded-xl p-2"><Globe className="h-6 w-6" /></div> Openness</div>
                            <div className="flex gap-4 items-center"><div className="bg-secondary rounded-xl p-2"><Users className="h-6 w-6" /></div> Collaboration</div>
                            <div className="flex gap-4 items-center"><div className="bg-secondary rounded-xl p-2"><Lightbulb className="h-6 w-6" /></div> Innovation</div>
                            <div className="flex gap-4 items-center"><div className="bg-secondary rounded-xl p-2"><GraduationCap className="h-6 w-6" /></div> Learning</div>
                        </div>
                        <div><Image className="rounded-lg w-full" src={About2} alt="About image" /></div>
                    </div>
                </FadeIn>
            </AnimateOnScroll>
        </div>
    )
}
