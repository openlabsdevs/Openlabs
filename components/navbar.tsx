"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import Image from "next/image";
import Logo from "../public/Logo.png";
import { useTheme } from "next-themes";
import { Toggle } from "./ui/toggle";


export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");


    return (
        <nav className="fixed top-0 w-full z-50 h-16 py-2">
            {/* Navigation */}
            <div className="max-w-7xl mx-auto px-6 lg:px-24 h-full flex items-center justify-between">
                <div className="text-xl h-full flex gap-2 items-center font-bold p-2 backdrop-blur-xl rounded bg-black/5    "><Image className="size-6" src={Logo} alt="Logo" /> OpenLabs</div>

                {/* Desktop Navigation */}
                <div className="flex items-center h-full justify-between p-2 backdrop-blur-xl rounded bg-black/5    ">
                    <div className="hidden md:flex items-center space-x-6">
                        <a href="#about" className="font-medium  hover:underline transition-colors">
                            About
                        </a>
                        <a
                            href="#completed"
                            className="font-medium  hover:underline transition-colors"
                        >
                            Projects
                        </a>
                        <a href="#members" className="font-medium hover:underline transition-colors">
                            Members
                        </a>
                        <a href="#contact" className="font-medium hover:underline transition-colors">
                            Contact
                        </a>
                        <Toggle
                            pressed={theme === 'dark'}
                            onPressedChange={toggleTheme}
                            aria-label="Toggle theme"
                            className="ml-2"
                        >
                            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                        </Toggle>
                    </div>

                    <div className="flex items-center space-x-4">
                        {/* Mobile menu button */}
                        <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>

            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden mt-2 border-t backdrop-blur-xl rounded bg-black/5">
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
