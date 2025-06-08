"use client";

import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

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
            <div className="max-w-xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-semibold text-black mb-4">Get in Touch</h2>
                    <p className="text-gray-600">Questions? Collaborations? We'd love to hear from you.</p>
                </div>

                <div className="bg-white/30 backdrop-blur-md border border-gray-200 rounded-2xl p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                Name
                            </label>
                            <Input
                                id="name"
                                placeholder="Your full name"
                                required
                                className="focus:border-black focus:ring-black"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                required
                                className="focus:border-black focus:ring-black"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                Message
                            </label>
                            <Textarea
                                id="message"
                                placeholder="How can we help you?"
                                required
                                className="focus:border-black focus:ring-black min-h-[120px]"
                            />
                        </div>

                        <div className="flex items-center space-x-2">
                            <Checkbox id="join" />
                            <label htmlFor="join" className="text-sm text-gray-700">
                                I want to join OpenLabs as a contributor
                            </label>
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-black text-white hover:bg-gray-800 py-3 disabled:bg-gray-400"
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
                </div>
            </div>
        </section>
    )
}
