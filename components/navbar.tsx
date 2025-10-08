"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../public/Logo.png";
import { useTheme } from "next-themes";
import { Toggle } from "./ui/toggle";
import { useRouter } from "next/navigation";
import { motion, useAnimation } from "framer-motion";


export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const router = useRouter();
    const controls = useAnimation();
    const [lastY, setLastY] = useState(0);


    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            if (currentY > lastY) {
                // Scrolling down
                controls.start("hidden");
            } else {
                // Scrolling up
                controls.start("visible");
            }
            setLastY(currentY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastY, controls]);


    const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

    const scroll = (id: string) => {
        if (window.location.pathname === '/') {
            const targetElement = document.getElementById(id);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
            }
        } else {
            router.push('/#' + id);
        }
    }



    return (
        <motion.nav
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: -60, opacity: 0 },
            }}
            initial="visible"
            animate={controls}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="fixed top-0 w-screen z-60 h-16 py-2 bg-background"
        >
                {/* Navigation */}
                <div className="max-w-7xl mx-auto px-6 lg:px-24 h-full flex items-center justify-between">
                    <div className="text-xl h-full flex gap-2 items-center font-bold cursor-pointer" onClick={() => router.push("/")}><Image className="size-6" src={Logo} alt="Logo" /> OpenLabs</div>

                    {/* Desktop Navigation */}
                    <div className="flex items-center h-full justify-between    ">
                        <div className="hidden md:flex items-center space-x-6">
                            <a onClick={() => scroll("about")} className="font-medium  hover:underline transition-colors hover:cursor-pointer">
                                About
                            </a>
                            <a onClick={() => scroll("ongoing")} className="font-medium  hover:underline transition-colors hover:cursor-pointer">
                                Projects
                            </a>
                            <a onClick={() => scroll("members")} className="font-medium hover:underline transition-colors hover:cursor-pointer">
                                Members
                            </a>
                            <a onClick={() => router.push("/docs")} className="font-medium hover:underline transition-colors hover:cursor-pointer">
                                Docs
                            </a>
                            <a onClick={() => scroll("contact")} className="font-medium hover:underline transition-colors hover:cursor-pointer">
                                Contact
                            </a>
                            <Toggle
                                pressed={theme === 'light'}
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
                    <div className="md:hidden mt-3 border border-secondary-foreground/20 backdrop-blur-xl rounded-lg bg-secondary-foreground/10" onClick={() => setMobileMenuOpen(false)}>
                        <div className="px-6 py-4 space-y-4 w-full">
                            <a onClick={() => scroll("about")} className="block font-medium">
                                About
                            </a>
                            <a onClick={() => scroll("ongoing")} className="block font-medium">
                                Projects
                            </a>
                            <a onClick={() => scroll("members")} className="block font-medium">
                                Members
                            </a>
                            <a onClick={() => router.push("/docs")} className="block font-medium">
                                Docs
                            </a>
                            <a onClick={() => scroll("contact")} className="block font-medium">
                                Contact
                            </a>
                            <Toggle
                                pressed={theme === 'light'}
                                onPressedChange={toggleTheme}
                                aria-label="Toggle theme"
                                className="ml-2 w-full"
                            >
                                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                            </Toggle>
                        </div>
                    </div>
                )}
        </motion.nav>
    )
}
