"use client";

import { Github, MessageCircle, Twitter } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
    return (
        <footer className="py-12 px-6 lg:px-24  ">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div>
                        <div className="text-xl font-bold  mb-2">OpenLabs</div>
                        <p className="text-sm ">Building open-source futures</p>
                    </div>

                    <div>
                        <h3 className="text-base font-semibold  mb-2">Quick Links</h3>
                        <div className="space-y-2">
                            <a href="#about" className="block transition-colors text-sm">
                                About
                            </a>
                            <a href="#completed" className="block transition-colors text-sm">
                                Completed Projects
                            </a>
                            <a href="#ongoing" className="block transition-colors text-sm">
                                Ongoing Projects
                            </a>
                            <a href="#testimonials" className="block transition-colors text-sm">
                                Testimonials
                            </a>
                            <a href="#members" className="block transition-colors text-sm">
                                Members
                            </a>
                            <a href="#contact" className="block transition-colors text-sm">
                                Contact
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-base font-semibold  mb-2">Connect with Us</h3>
                        <div className="flex space-x-2">
                            <Button variant="ghost" size="sm">
                                <Github className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="sm">
                                <Twitter className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="sm">
                                <MessageCircle className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-700 pt-6 text-center">
                    <p className="text-sm text-gray-500">
                        © 2025 OpenLabs. All rights reserved. |
                        <a href="/privacy" className="ml-1">
                            Privacy
                        </a>{" "}
                        ·
                        <a href="/terms" className="ml-1">
                            Terms
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}
