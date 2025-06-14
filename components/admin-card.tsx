import { Github, Twitter, Linkedin, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface UserAdminCardProps {
    name: string;
    role: string;
    description: string;
    avatar: string;
    github?: string;
    twitter?: string;
    linkedin?: string;
}

export const AdminCard = ({
    name,
    role,
    description,
    avatar,
    github,
    twitter,
    linkedin
}: UserAdminCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const socialLinks = [
        { icon: Github, url: github, label: 'GitHub' },
        { icon: Twitter, url: twitter, label: 'Twitter' },
        { icon: Linkedin, url: linkedin, label: 'LinkedIn' },
    ].filter(link => link.url);

    return (
        <Card
            className="relative  rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Main Card Content */}
            <div className="relative z-10 p-8 h-full flex flex-col items-center justify-center text-center">
                {/* Role Badge */}
                <Badge variant={"secondary"} className='absolute top-6 right-6'>
                    {role}
                </Badge>

                {/* Avatar */}
                <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4  shadow-lg">
                        <img
                            src={avatar}
                            alt={name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute inset-0 rounded-full"></div>
                </div>

                {/* Name */}
                <h3 className="text-2xl font-bold  mb-2">{name}</h3>

                {/* Description */}
                <p className=" text-sm leading-relaxed px-2">{description}</p>
            </div>

            {/* Sliding Social Panel */}
            <div
                className={`absolute inset-x-0 z-10 bottom-0 bg-secondary  border-t transform transition-all duration-500 ease-out ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                    }`}
            >
                <div className="p-6">
                    <h4 className=" font-semibold mb-4 text-center">Connect with {name.split(' ')[0]}</h4>

                    <div className="flex justify-center space-x-4">
                        {socialLinks.map(({ icon: Icon, url, label }) => (
                            <a
                                key={label}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative p-3 rounded-xl transition-all duration-300 border border-primary-foreground/50"
                                title={label}
                            >
                                <Icon size={20} className="  transition-colors duration-300" />
                                <ExternalLink size={12} className="absolute -top-1 -right-1  opacity-0 group-hover:opacity-100 transition-all duration-300" />
                            </a>
                        ))}
                    </div>

                    {/* Additional Details */}
                    <div className="mt-4 text-center">
                        <div className="inline-flex items-center space-x-2 text-xs ">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span>Available for collaboration</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 pointer-events-none"></div>

            {/* Animated Border */}
            <div className={`absolute inset-0 rounded-2xl border-2 transition-all duration-300`}></div>
        </Card>
    );
};
