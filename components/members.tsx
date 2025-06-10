"use client";

import { AdminCard } from "./admin-card";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";


const leadMembers = [
    {
        name: "Alex Rivera",
        role: "President",
        bio: "Full-stack developer passionate about open-source innovation",
        photo: "/placeholder.svg?height=96&width=96",
    },
    {
        name: "Jordan Kim",
        role: "Tech Lead",
        bio: "Systems architect with expertise in scalable web applications",
        photo: "/placeholder.svg?height=96&width=96",
    },
    {
        name: "Taylor Swift",
        role: "Community Manager",
        bio: "Advocate for inclusive tech communities and mentorship",
        photo: "/placeholder.svg?height=96&width=96",
    },
]

export function Members() {

    const members = Array.from({ length: 12 }, (_, i) => ({
        name: `Member ${i + 1}`,
        photo: `/placeholder.svg?height=80&width=80`,
    }))


    return (
        <section id="members" className="py-20 px-6 lg:px-24 ">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-semibold mb-4">Members</h2>
                    <p >Meet our contributors</p>
                </div>

                {/* Lead Members */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {/* {leadMembers.map((member, index) => (
                        <Card
                            key={index}
                            className="relative rounded-2xl shadow p-6 flex flex-col items-center"
                        >
                            <Badge variant={"secondary"} className="absolute top-4 right-4  text-xs">{member.role}</Badge>
                            <img
                                src={member.photo || "/placeholder.svg"}
                                alt={member.name}
                                className="w-24 h-24 rounded-full border-2  mb-4"
                            />
                            <h3 className="text-xl font-semibold  mb-2">{member.name}</h3>
                            <p className="text-sm  text-center">{member.bio}</p>
                        </Card>
                    ))} */}

                    {leadMembers.map((member, index) => (
                        <AdminCard
                            key={index}
                            name={member.name}
                            role={member.role}
                            description={member.bio}
                            avatar={member.photo}
                            github="https://github.com/sarahchen"
                            twitter="https://twitter.com/sarahchen"
                            linkedin="https://linkedin.com/in/sarahchen"
                        />
                    ))}

                </div>

                {/* Regular Members Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {members.map((member, index) => (
                        <div key={index} className="relative group flex justify-center items-center">
                            <img
                                src={member.photo || "/placeholder.svg"}
                                alt={member.name}
                                className="w-28 h-w-28 rounded-full border-2  transition "
                            />
                            <div className="absolute inset-0  rounded-full hidden group-hover:flex items-center justify-center transition-all">
                                <span className=" text-sm font-medium">{member.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
