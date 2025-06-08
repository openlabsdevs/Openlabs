"use client";

import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


    return (
        <nav className="fixed top-0 w-full  shadow-sm z-50 h-16">
            {/* Navigation */}
            <div className="max-w-7xl mx-auto px-6 lg:px-24 h-full flex items-center justify-between">
                <div className="text-xl font-bold">OpenLabs</div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-6">
                    <a href="#about" className="font-medium  hover:underline transition-colors">
                        About
                    </a>
                    <a
                        href="#completed"
                        className="font-medium  hover:underline transition-colors"
                    >
                        Completed Projects
                    </a>
                    <a href="#ongoing" className="font-medium hover:underline transition-colors">
                        Ongoing Projects
                    </a>
                    <a
                        href="#testimonials"
                        className="font-medium hover:underline transition-colors"
                    >
                        Testimonials
                    </a>
                    <a href="#members" className="font-medium hover:underline transition-colors">
                        Members
                    </a>
                    <a href="#contact" className="font-medium hover:underline transition-colors">
                        Contact
                    </a>
                </div>

                <div className="flex items-center space-x-4">
                    <Button
                        variant="secondary"
                        className="hidden md:inline-flex"
                    >
                        Connect
                    </Button>

                    {/* Mobile menu button */}
                    <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden  border-t">
                    <div className="px-6 py-4 space-y-4">
                        <a href="#about" className="block font-medium">
                            About
                        </a>
                        <a href="#completed" className="block font-medium">
                            Completed Projects
                        </a>
                        <a href="#ongoing" className="block font-medium">
                            Ongoing Projects
                        </a>
                        <a href="#testimonials" className="block font-medium">
                            Testimonials
                        </a>
                        <a href="#members" className="block font-medium">
                            Members
                        </a>
                        <a href="#contact" className="block font-medium">
                            Contact
                        </a>
                        <Button variant="secondary" className="w-full">
                            Connect
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    )
}
