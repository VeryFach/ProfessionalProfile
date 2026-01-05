export interface Certificate {
    title: string
    issuer: string
    date: string
    image?: string
    credentialUrl?: string
    skills?: string[]
}

export const certificates: Certificate[] = [
    {
        title: "ICampN 2025 Participant",
        issuer: "Infromation Centric Networking",
        date: "2025",
        image: "/certificates/ICampN_Participant.webp",
        credentialUrl: "#",
        skills: ["Network Architecture", "Virtualization & IoT Fundamentals"]
    },
    {
        title: "Finalist - BCC 2025",
        issuer: "Innovators League",
        date: "2025",
        image: "/certificates/BCC.webp",
        credentialUrl: "#",
        skills: ["Digital Marketing", "SEO", "SEM"]
    },
    {
        title: "Introduction to Cybersecurity",
        issuer: "Cisco",
        date: "2025",
        image: "/certificates/gcp.png",
        credentialUrl: "https://www.credly.com/badges/ce6bf625-6389-47c3-ba13-684777d23e1f/public_url",
        skills: ["Cybersecurity", "Threat Detection", "Network Vulnerabilities"]
    },
    {
        title: "Google Cloud Fundamentals: Core Infrastructure",
        issuer: "Google Cloud",
        date: "2024",
        image: "/certificates/gcp.png",
        credentialUrl: "https://www.credly.com/badges/8f6f3f4e-6f6e-4d3b- ninety-nine B-1234567890ab/public_url",
        skills: ["Cloud Computing", "Google Cloud Platform", "Infrastructure"]
    }
]
