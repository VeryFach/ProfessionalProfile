export interface Organization {
    name: string
    role: string
    period: string
    description: string
    type: 'organization' | 'committee'
    logo?: string
    achievements?: string[]
}

export const organizations: Organization[] = [
    {
        name: "Computer Science Student Association",
        role: "President",
        period: "2023 - 2024",
        description: "Leading the student organization, organizing tech events, workshops, and community building activities",
        type: "organization",
        logo: "/organizations/cs-association.png",
        achievements: [
            "Organized 10+ tech workshops",
            "Increased membership by 40%",
            "Established mentorship program"
        ]
    },
    {
        name: "Hackathon 2024",
        role: "Technical Lead",
        period: "March 2024",
        description: "Led technical team for university's annual hackathon with 200+ participants",
        type: "committee",
        logo: "/organizations/hackathon.png",
        achievements: [
            "Managed infrastructure for 50+ teams",
            "Coordinated with 15 technical mentors",
            "Secured sponsorship worth $10,000"
        ]
    },
    {
        name: "Tech Talk Series",
        role: "Event Coordinator",
        period: "2023 - Present",
        description: "Organizing monthly tech talks and seminars with industry professionals",
        type: "committee",
        logo: "/organizations/tech-talk.png",
        achievements: [
            "Hosted 12 successful events",
            "Invited speakers from top tech companies",
            "Average attendance of 150+ students"
        ]
    },
    {
        name: "Cybersecurity Club",
        role: "Vice President",
        period: "2022 - 2023",
        description: "Promoting cybersecurity awareness and organizing CTF competitions",
        type: "organization",
        logo: "/organizations/cyber-club.png",
        achievements: [
            "Conducted 5 CTF competitions",
            "Trained 100+ students in security",
            "Won regional cybersecurity challenge"
        ]
    },
    {
        name: "University Open House",
        role: "IT Infrastructure Head",
        period: "September 2023",
        description: "Managing all technical aspects of university's open house event",
        type: "committee",
        logo: "/organizations/open-house.png",
        achievements: [
            "Set up registration system for 5,000+ visitors",
            "Managed live streaming with 10,000 viewers",
            "Zero technical issues during event"
        ]
    },
    {
        name: "DevOps Community",
        role: "Co-Founder",
        period: "2023 - Present",
        description: "Building a community focused on DevOps practices and cloud technologies",
        type: "organization",
        logo: "/organizations/devops.png",
        achievements: [
            "Grew community to 300+ members",
            "Organized weekly knowledge sharing",
            "Partnered with 3 tech companies"
        ]
    }
]
