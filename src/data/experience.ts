export interface Experience {
    role: string
    company: string
    startDate: string
    endDate: string | null
    location: string
    description: string
}

export const experiences: Experience[] = [
    {
        role: "Web Development Intern",
        company: "Dako Brand & Communication",
        startDate: "Januari 2026",
        endDate: "Juni 2026",
        location: "Kota Malang, Malang",
        description: "Developed and maintained web applications using React and Node.js, improving user experience and performance."
    }
]