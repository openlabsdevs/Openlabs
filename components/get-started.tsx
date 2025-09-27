"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { DialogContent, DialogDescription, DialogTitle } from "./ui/dialog";
import { ExternalLink } from "lucide-react";


export default function GetStarted() {
    return (

        <DialogContent className="scroll-auto overflow-y-auto [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-primary-foreground
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-primary/40">
            <DialogTitle className="text-3xl">Get Started with OpenLabs</DialogTitle>
            <div className="flex flex-col gap-4">
                <div className="text-wrap ml-2">Interested in contributing to meaningful open-source projects and collaborating with like-minded innovators? Fill out the form to express your interest and take the first step toward becoming an active member of OpenLabs.</div>
                <div className="py-4 pl-2 border-r-2 border-l-2 rounded-xl border-secondary bg-primary/10 dark:bg-primary/2">
                    Join the community. Build. Learn. Lead.
                </div>
            </div>

            <Button >
                <Link href={"/form"} className="flex items-center gap-2">
                    <ExternalLink />
                    ApplyLink
                </Link>
            </Button>
        </DialogContent>
    )
}
