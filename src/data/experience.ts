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
        role: "Backend Developer Intern",
        company: "PT Berbinar Insightful Indonesia",
        startDate: "Jul 2026",
        endDate: null,
        location: "Surabaya, Indonesia",
        description:
            "Maintained Laravel backend services, MySQL databases, and Nginx configurations while developing REST APIs and backend features. Conducted functional and end-to-end testing using Playwright to validate application workflows and improve system reliability."
    },
    {
        role: "Web Developer Intern",
        company: "Dako Brand & Communication",
        startDate: "Feb 2026",
        endDate: "Jun 2026",
        location: "Malang, Indonesia",
        description:
            "Developed and deployed five responsive WordPress websites and a React Native mobile application. Implemented two workflow automation solutions using n8n, Next.js, Midtrans API, and Telegram Bot integrations, reducing manual processing effort by 75%. Optimized website performance and security."
    },
    {
        role: "Data Science Intern",
        company: "Basic Computing Community (BCC FILKOM)",
        startDate: "Feb 2025",
        endDate: "Mar 2025",
        location: "Malang, Indonesia",
        description:
            "Developed machine learning models for obesity classification and phishing email detection using XGBoost, Random Forest, NLP, and feature engineering. Achieved a 97.4% F1-score on 2,111 obesity records and a 99.4% ROC-AUC score on 82.5K emails."
    }
]
