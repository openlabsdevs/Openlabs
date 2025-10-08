
"use client";

import { useRouter } from "next/navigation";
import { Card } from "./ui/card";
import { AnimateOnScroll, FadeIn } from "@/components/ui/motion";

const docs = [
    {
        title: "Git & GitHub",
        description: "Learn the basics of Git and GitHub, and how to use them to contribute to open-source projects.",
        link: "/docs/git&github",
    },
];

export function Docs() {
    const router = useRouter();

    return (
        <div id="docs">
            <AnimateOnScroll className="py-20 px-6 lg:px-24 ">
                <FadeIn delay={0.1}>
                    <div className="max-w-xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-semibold mb-4">Documentation</h2>
                            <p className="">
                                Learn how to get started with OpenLabs and contribute to our projects.
                            </p>
                        </div>
                        <FadeIn delay={0.2}>
                            <div className="grid gap-4">
                                {docs.map((doc) => (
                                    <Card
                                        key={doc.title}
                                        className="p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                                        onClick={() => router.push(doc.link)}
                                    >
                                        <h3 className="text-xl font-semibold mb-2">{doc.title}</h3>
                                        <p className="">{doc.description}</p>
                                    </Card>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                </FadeIn>
            </AnimateOnScroll>
        </div>
    );
}
