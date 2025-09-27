"use client";

import { AdminCard } from "./admin-card";
import { AnimatedBlob } from "./animated-blob";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { AnimateOnScroll, FadeIn } from "@/components/ui/motion";


const leadMembers = [
    {
        name: "Bashar Khan",
        role: "Founder",
        github: "https://github.com/basharkhan7776",
        twitter: "https://x.com/_Bashar_khan_",
        linkedin: "https://www.linkedin.com/in/basharkhan7776/"
    },
    {
        name: "Syed Zakaria Rizvi",
        role: "Co-Founder",
        github: "https://github.com/SyedZakariaRizvi",
        twitter: "https://x.com/sy_zakr",
        linkedin: "https://www.linkedin.com/in/syed-zakaria-rizvi-428673278/"
    },
    {
        name: "Sahil Ansari",
        role: "Maintainer",
        github: "https://github.com/sahilansari189",
        twitter: "https://x.com/sahilansari189",
        linkedin: "https://www.linkedin.com/in/sahilansari189/"
    },
]

const members = [{
    name: "Member 1",
    github: "https://github.com/member1"
},
{
    name: "Member 2",
    github: "https://github.com/member2"
}
];

export function Members() {




    return (
        <div id="members">
            <AnimateOnScroll className="py-20 px-6 lg:px-24 ">
                <FadeIn delay={0.1}>
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-semibold mb-4">Members</h2>
                            <p >Meet our contributors</p>
                        </div>

                        {/* Lead Members */}
                        <FadeIn delay={0.2}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

                                {leadMembers.map((member, index) => (
                                    <AdminCard
                                        key={index}
                                        name={member.name}
                                        role={member.role}
                                        github={member.github}
                                        twitter={member.twitter}
                                        linkedin={member.linkedin}
                                    />
                                ))}

                            </div>
                        </FadeIn>

                        {/* Regular Members Grid */}
                        {/* <FadeIn delay={0.3}>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                {members.map((member, index) => (
                                    <a href={member.github} target="_blank" rel="noopener noreferrer" key={index} className="group">
                                        <div key={index} className="relative group flex justify-center items-center cursor-default">
                                            <img
                                                src={member.github ? `https://avatars.githubusercontent.com/${member.github.substring(member.github.lastIndexOf('/') + 1)}` : "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"}
                                                alt={member.name}
                                                className="w-28 h-w-28 rounded-full border-2  transition "
                                            />
                                            <div className="absolute inset-0 rounded-full hidden group-hover:flex items-center justify-center transition-all duration-500">
                                                <span className="rounded-lg bg-secondary p-1 text-sm font-light ">{member.name}</span>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </FadeIn> */}
                    </div>
                </FadeIn>
            </AnimateOnScroll>
        </div>
    )
}
