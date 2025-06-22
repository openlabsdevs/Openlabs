"use client";

import { Link2, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { Card } from "./ui/card";
import { AnimatedBlob } from "./animated-blob";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "./ui/dialog";

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false)



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 2000))
        setIsSubmitting(false)
    }




    return (
        <section id="contact" className="py-20 px-6 lg:px-24 ">
            <div className="absolute z-0 right-[25%] -rotate-30">
                <AnimatedBlob
                    className="rounded-xl opacity-35 top-[400px] overflow-hidden"
                    firstBlobColor="bg-primary"
                    secondBlobColor="bg-secondary"
                />

            </div>
            <div className="max-w-xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-semibold mb-4">Get in Touch</h2>
                    <p className="">Questions? Collaborations? We'd love to hear from you.</p>
                </div>

                <Card className=" border  rounded-2xl p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                Name
                            </label>
                            <Input
                                id="name"
                                placeholder="Your full name"
                                required
                                className=""
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                Email
                            </label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                required
                                className=""
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium ">
                                Message
                            </label>
                            <Textarea
                                id="message"
                                placeholder="How can we help you?"
                                required
                                className=" min-h-[120px]"
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                "Send Message"
                            )}
                        </Button>
                    </form>
                    <Dialog>
                        <DialogTrigger className="w-full" asChild>
                            <Button variant={"secondary"} className="w-full mt-4"><Link2 /> Support</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogTitle className="text-xl">Support OpenLabs</DialogTitle>
                            <DialogDescription>Your contribution helps us empower more students, sustain impactful open-source projects, and expand our community initiatives. Every donation fuels innovation and growth.</DialogDescription>
                            <div className="py-4 pl-2 border-r-2 border-l-2 rounded-xl border-secondary bg-primary/10 dark:bg-primary/2">
                                Donate and make a difference.
                            </div>
                            <Button variant={"secondary"}>Donate through Strips</Button>
                            <Button variant={"secondary"}>Donate through wallet</Button>
                        </DialogContent>
                    </Dialog>
                </Card>
            </div>
        </section>
    )
}
