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
        name: "Student Representative Council, Universitas Brawijaya (DPM UB)",
        role: "Legislative Staff",
        period: "Mar 2025 – Nov 2025",
        description: "Contributed to drafting student government regulations and supporting legislative oversight.",
        type: "organization",
        logo: "/organizations/dpm-ub.png",
        achievements: [
            "Assisted in drafting and reviewing internal regulations",
            "Supported oversight of the student executive body",
            "Prepared administrative and research documents"
        ]
    },
    {
        name: "Raja Brawijaya",
        role: "Public Relations Staff",
        period: "Jun 2024 – Aug 2024",
        description: "University-wide orientation program for new students.",
        type: "committee",
        logo: "/organizations/raja-brawijaya.png",
        achievements: [
            "Supported university-level student orientation",
            "Managed event communication and publications",
            "Coordinated with student organizations"
        ]
    },
    {
        name: "EQUALOGIC Webinar",
        role: "Public Relations Staff",
        period: "Oct 2023 – Dec 2023",
        description: "Online seminar for high school students focusing on Python basics.",
        type: "committee",
        logo: "/organizations/equalogic.png",
        achievements: [
            "Provided technical assistance during sessions",
            "Guided participants using Python and Google Colab",
            "Facilitated interactive discussions"
        ]
    },
    {
        name: "Google Developer Groups on Campus (GDGoC) Brawijaya",
        role: "Member",
        period: "Feb 2024 – Present",
        description: "Learning tracks in Cloud Development and Machine Learning.",
        type: "organization",
        logo: "/organizations/gdgoc-brawijaya.png",
        achievements: [
            "Completed Cloud and ML learning tracks",
            "Collaborated on technology-based projects",
            "Solved technical challenges with mentors"
        ]
    },
    {
        name: "BEFORE 2024 (Business Expo for Entrepreneurs)",
        role: "Volunteer Committee Member",
        period: "Mar 2024 – May 2024",
        description: "National entrepreneurship event organized by HMDTIF FILKOM UB.",
        type: "committee",
        logo: "/organizations/before-2024.png",
        achievements: [
            "Supported national entrepreneurship seminars",
            "Assisted competitions, exhibitions, and mini courses",
            "Helped coordinate Business Expo activities"
        ]
    },
    {
        name: "LKI AMD FILKOM, Universitas Brawijaya",
        role: "Communications Specialist",
        period: "Mar 2024 – Dec 2024",
        description: "Islamic student organization focused on spiritual and community development.",
        type: "organization",
        logo: "/organizations/lki-amd.png",
        achievements: [
            "Managed organizational communications and publications",
            "Supported internal events",
            "Maintained member engagement"
        ]
    },
    {
        name: "PEMIRA Universitas Brawijaya 2024",
        role: "Public Relations Specialist",
        period: "Sep 2024 – Nov 2024",
        description: "University-wide student election for executive and legislative bodies.",
        type: "committee",
        logo: "/organizations/pemira-ub.png",
        achievements: [
            "Managed PEMIRA communications and publications",
            "Disseminated campaign and debate information",
            "Encouraged student participation"
        ]
    }
]
