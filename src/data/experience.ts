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
        role: "Backend Development Intern",
        company: "Berbinar Insightful Indonesia",
        startDate: "Agustus 2026",
        endDate: "Present",
        location: "Kec. Jambangan, Kota Surabaya",
        description: "Developed responsive websites backend systems with Laravel, including API integration and database management. Implemented workflow automation using n8n to improve process efficiency and system integration."
    },
    {
        role: "Web Development Intern",
        company: "Dako Brand & Communication",
        startDate: "Januari 2026",
        endDate: "Juni 2026",
        location: "Kota Malang, Malang",
        description: "Built and optimized cross-platform web and mobile solutions while implementing backend workflow automations to maximize system reliability and operational efficiency."
    },
    {
        role: "Data Science Intern",
        company: "Basic Computing Community",
        startDate: "Februari 2025",
        endDate: "Maret 2025",
        location: "University Brawijaya, Malang",
        description: "Developed an obesity classification model on 2,111 records using XGBoost, achieving a 97.4% F1-score while reducing features by 47.1% through statistical feature selection and feature importance analysis."
    },
]