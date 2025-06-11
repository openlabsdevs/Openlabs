"use client";

import { Link2, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { Card } from "./ui/card";
import { AnimatedBlob } from "./animated-blob";

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
                    className="rounded-xl opacity-35 top-[400px]"
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
                    <Button variant={"secondary"} className="w-full mt-4"><Link2/> Donate</Button>
                </Card>
            </div>
        </section>
    )
}
