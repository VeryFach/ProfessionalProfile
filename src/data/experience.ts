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
        description: " Developed responsive websites using WordPress and backend systems with Laravel, including API integration and database management. Implemented workflow automation using n8n to improve process efficiency and system integration."
    }
]