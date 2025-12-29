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
        title: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "2024",
        image: "/certificates/aws.png",
        credentialUrl: "#",
        skills: ["Cloud Architecture", "AWS", "DevOps"]
    },
    {
        title: "Google Cloud Professional",
        issuer: "Google Cloud",
        date: "2024",
        image: "/certificates/gcp.png",
        credentialUrl: "#",
        skills: ["GCP", "Cloud Computing", "Kubernetes"]
    },
    {
        title: "Certified Ethical Hacker",
        issuer: "EC-Council",
        date: "2023",
        image: "/certificates/ceh.png",
        credentialUrl: "#",
        skills: ["Cybersecurity", "Penetration Testing", "Network Security"]
    },
    {
        title: "Machine Learning Specialization",
        issuer: "Coursera",
        date: "2023",
        image: "/certificates/ml.png",
        credentialUrl: "#",
        skills: ["Machine Learning", "Python", "TensorFlow"]
    },
    {
        title: "Docker and Kubernetes",
        issuer: "Linux Foundation",
        date: "2023",
        image: "/certificates/docker.png",
        credentialUrl: "#",
        skills: ["Docker", "Kubernetes", "Container Orchestration"]
    },
    {
        title: "Full Stack Web Development",
        issuer: "FreeCodeCamp",
        date: "2023",
        image: "/certificates/fullstack.png",
        credentialUrl: "#",
        skills: ["React", "Node.js", "MongoDB"]
    }
]
