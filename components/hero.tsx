"use client";

import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import { Aurora } from "./animated-background";
import { RotatingText } from "./RotatingText";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import GetStarted from "./get-started";
import { AnimateOnScroll, FadeIn } from "@/components/ui/motion";
import Link from "next/link";


export function Hero() {
  return (
    <div id="hero">
      <AnimateOnScroll className="min-h-screen flex flex-col justify-center items-center text-center pt-16 w-full px-2 sm:px-4 md:px-6 overflow-x-hidden">
        <div className="max-w-4xl w-full mx-auto px-2 sm:px-4 md:px-6 z-50">
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap transition-all justify-center items-center duration-500">
              <h1 className="text-5xl md:text-6xl font-bold mb-3 mr-3">Empowering</h1>
              <RotatingText
                texts={['Open-source', 'Community', 'Development', 'Logic']}
                mainClassName="text-5xl md:text-6xl font-bold overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center mb-3"
                staggerFrom={"last"}
                initial={{ y: "100%" } as any}
                animate={{ y: 0 } as any}
                exit={{ y: "-120%" } as any}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={8000}
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-6xl font-bold mb-3">Collaboration</h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-xl mb-8 leading-relaxed">
              Join OpenLabs: the premier society for open-source contributors
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className=" px-6 py-3 text-lg transition-colors">
                    Get Started
                  </Button>
                </DialogTrigger>
                <GetStarted />
              </Dialog>
              <Button
                variant="outline"
                className="border-2 px-6 py-3 text-lg transition-colors"
              >
                <Link href={"/learn-more"}>Learn More</Link>
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.5}>
            <div className="mt-12">
              <ArrowDown className="h-6 w-6 text-gray-400 mx-auto animate-bounce" />
            </div>
          </FadeIn>
        </div>
        <div>
          <Aurora />
        </div>
      </AnimateOnScroll>
    </div>
  )
}
