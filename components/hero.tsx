"use client";

import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import { Aurora } from "./animated-background";
import { RotatingText } from "./RotatingText";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import GetStarted from "./get-started";


export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center pt-16">
      <div className="max-w-4xl mx-auto px-6 z-50">
        <div className="flex flex-wrap transition-all justify-center items-center duration-500">
          <h1 className="text-5xl md:text-6xl font-bold mb-3 mr-3">Empowering</h1>
          <RotatingText
            texts={['Open-source', 'Community', 'Development', 'Logic']}
            mainClassName="text-5xl md:text-6xl font-bold overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center mb-3"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={8000}
          />

        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-3">Collaboration</h1>
        <p className="text-xl mb-8 leading-relaxed">
          Join OpenLabs: the premier society for open-source contributors
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <Dialog>
            <DialogTrigger asChild>
              <Button className=" px-6 py-3 text-lg transition-colors">
                Get Started
              </Button>
            </DialogTrigger>
              <GetStarted />
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="border-2 px-6 py-3 text-lg transition-colors"
              >
                Learn More
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl scroll-auto overflow-y-auto [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-primary-foreground
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-primary/40">
              <DialogTitle className="text-3xl">Learn More About OpenLabs</DialogTitle>
              <DialogDescription>
                <div className="flex flex-col gap-3 overflow-y-auto">
                  <h1 className="text-xl font-semibold">What is OpenLabs?</h1>
                  <p className="text-wrap ml-4">OpenLabs is a forward-thinking, student-driven initiative committed to fostering a culture of open-source contribution and technical excellence. It serves as a collaborative ecosystem where aspiring developers, designers, and technologists converge to conceptualize, develop, and maintain impactful software projects. The club functions not merely as a learning hub, but as a launchpad for real-world innovation.</p>
                  <h1 className="text-xl font-semibold">Why Join OpenLabs?</h1>
                  <p className="text-wrap ml-4">Participation in OpenLabs offers a unique opportunity to engage in practical, high-impact work that transcends traditional academic boundaries. Members are immersed in a dynamic environment that emphasizes collaborative development, continuous learning, and the application of industry-relevant tools and methodologies. The community encourages the exploration of emerging technologies, peer-to-peer mentorship, and active contribution to scalable solutions that serve broader technical and societal needs.</p>
                  <h1 className="text-xl font-semibold">Our Mission</h1>
                  <p className="text-wrap ml-4">OpenLabs exists to empower the next generation of open-source contributors by cultivating a mindset of curiosity, responsibility, and excellence. We aim to bridge the gap between theoretical knowledge and applied skills by facilitating access to collaborative projects, community-driven learning pathways, and leadership opportunities in the realm of open development.</p>
                  <h1 className="text-xl font-semibold">What Distinguishes OpenLabs?</h1>
                  <div>
                    <li>Active engagement in end-to-end software development cycles on live repositories.</li>
                    <li>A democratically structured, community-first approach to decision-making and innovation.</li>
                    <li>An emphasis on experiential learning through real-time problem-solving and agile workflows.</li>
                    <li>Recognition through publicly documented contributions and collaborative authorship in open platforms.</li>
                  </div>
                </div>
              </DialogDescription>
            </DialogContent>
          </Dialog>
        </div>
        <div className="mt-12">
          <ArrowDown className="h-6 w-6 text-gray-400 mx-auto animate-bounce" />
        </div>
      </div>
      <div>
        <Aurora />
      </div>
    </section>
  )
}
