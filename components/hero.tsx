"use client";

import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import { Aurora } from "./animated-background";
import { RotatingText } from "./RotatingText";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";


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
            <DialogTrigger>
              <Button className=" px-6 py-3 text-lg transition-colors">
                Get Started
              </Button>
            </DialogTrigger>
            <DialogContent>
              Get Started
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger>
              <Button
                variant="outline"
                className="border-2 px-6 py-3 text-lg transition-colors"
              >
                Learn More
              </Button>
            </DialogTrigger>
            <DialogContent>
              Learn More
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
