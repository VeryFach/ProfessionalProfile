
export interface Project {
    title: string
    description: string
    image: string
    demo?: string
    github?: string
}

export const projects: Project[] = [
    {
        title: "EcoOil",
        description:
            "1st Place Winner at Play-It Hackathon Polinema 2026. Developed backend APIs, a mass balance calculation engine, and a weighted quality grading system for a waste cooking oil supply chain platform during a 24-hour hackathon.",
        image: "/project/16.png",
        github: "https://github.com/VeryFach/Hackathon-Final.git"
    },
    {
        title: "BaraWatch",
        description:
            "Contributed as an AI Engineer to a forest fire monitoring platform by developing FastAPI-based AI services integrating YOLOv8 fire and smoke detection, DBSCAN hotspot clustering, spatial-temporal matching, risk scoring, and Sentinel-2 dNBR analysis.",
        image: "/project/14.png",
        github: "https://github.com/VeryFach/Hackathon-Final.git",
        demo: "https://bara-watch.vercel.app/"
    },
    {
        title: "KlikRasa",
        description:
            "Developed backend REST APIs using NestJS and MongoDB for an AI-powered cultural platform featuring interactive chat, traditional Indonesian cake information, and automated content summaries.",
        image: "/project/13.webp",
        github: "https://github.com/AIYayay-Berbudaya/klikrasa-backend.git",
        demo: "https://klikrasa.vercel.app/"
    },
    {
        title: "Creanomic",
        description:
            "Developed Express.js backend APIs and integrated Supabase to support a digital platform connecting local farmers with Indonesia's Free Nutritious Meal (MBG) program.",
        image: "/project/9.webp",
        github: "https://github.com/rakafdil/creanomic.git",
        demo: "https://creanomic.vercel.app/products"
    },
    {
        title: "NutriMori",
        description:
            "Developed backend APIs, a nutrition analysis engine, and database and AI service integrations for a food tracking application using Indonesian nutrition datasets.",
        image: "/project/8.webp",
        github: "https://github.com/rakafdil/NutriMori.git",
        demo: "https://nutri-mori.vercel.app/"
    },
    {
        title: "mediScan",
        description:
            "Developed hospital availability checks, nearby hospital search, and disease-specific health article features for a web-based symptom analysis and health screening platform.",
        image: "/project/7.webp",
        github: "https://github.com/rakafdil/mediscan.git",
        demo: "https://mediscan-smoky.vercel.app/"
    },
    {
        title: "Habitoria Mobile",
        description:
            "Developed a gamified habit-tracking mobile application using React Native, Expo, Firebase, and Zustand, featuring civilization simulation, Google authentication, real-time Firestore synchronization, and offline action queuing with SQLite.",
        image: "/project/15.jpg",
        github: "https://github.com/VeryFach/CivFit.git",
    },
    {
        title: "Team Quest",
        description:
            "Built a cross-platform team productivity application using Expo React Native and Firebase, featuring task management and collaborative workflows.",
        image: "/project/11.webp",
        github: "https://github.com/VeryFach/TeamQuest.git"
    },
    {
        title: "Planetify",
        description:
            "Developed an interactive 3D solar system visualization using Three.js, featuring planetary models, orbital simulations, rotation animations, and interactive exploration.",
        image: "/project/10.webp",
        github: "https://github.com/Jakij4ki/Planetify.git",
        demo: "https://planetify-eight.vercel.app/"
    },
    {
        title: "Phishing Email Detection",
        description:
            "Built a machine learning pipeline to classify phishing and legitimate emails using NLP, URL-based feature engineering, PCA, Random Forest, and XGBoost, achieving a 99.4% ROC-AUC score on 82.5K emails.",
        image: "/project/2.webp",
        github: "https://github.com/VeryFach/Comprehensive-Predictive-Modeling.git"
    },
    {
        title: "Obesity Risk Classification",
        description:
            "Developed an XGBoost-based multiclass obesity classification model using 2,111 records, achieving a 97.4% F1-score while reducing the feature set by 47.1%.",
        image: "/project/3.webp",
        github: "https://github.com/VeryFach/Comprehensive-Predictive-Modeling.git"
    },
    {
        title: "Shift Left Security",
        description:
            "Explored DevSecOps practices by integrating security checks into earlier stages of the software development lifecycle to support proactive vulnerability detection.",
        image: "/project/1.webp",
        github: "https://github.com/AmosJuang/DevSecOps.git"
    },
    {
        title: "Mininet",
        description:
            "Explored traditional and programmable networking through hands-on network topology creation and simulation using Mininet.",
        image: "/project/12.webp",
        github: "https://github.com/VeryFach/mininet101.git"
    },
    {
        title: "Interactive Data Framework",
        description:
            "Developed a Java Swing desktop application for interactive data exploration and visualization through a graphical user interface.",
        image: "/project/6.webp",
        github: "https://github.com/VeryFach/Data-Interaction-Framework.git"
    },
    {
        title: "Bemon",
        description:
            "Developed a Java-based desktop game featuring a graphical user interface and interactive gameplay.",
        image: "/project/4.webp",
        github: "https://github.com/VeryFach/Bemon.git"
    }
]
