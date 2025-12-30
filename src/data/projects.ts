export interface Project {
    title: string
    description: string
    image: string
    demo?: string
    github?: string
}

export const projects: Project[] = [
    {
        title: "mediScan",
        description: "A web-based health screening tool for decision-based symptom analysis, where I implemented hospital availability checks, nearby hospital search, and disease-specific health article features.",
        image: "/project/7.png",
        github: "https://github.com/rakafdil/mediscan.git",
        demo: "https://mediscan-smoky.vercel.app/"
    },
    {
        title: "Nutrimori",
        description: "A smart nutrition tracking web app for logging food intake, analyzing nutrition, and delivering personalized recommendations. Built APIs, nutrition analysis engine, and integrated database and AI services.",
        image: "/project/8.png",
        github: "https://github.com/rakafdil/NutriMori.git",
        demo: "https://nutri-mori.vercel.app/"
    },
    {
        title: "GrowthWell",
        description: "A digital personal growth platform for tracking goals, monitoring progress, and accessing curated self-improvement resources, built with an Express.js backend integration.",
        image: "/project/9.png",
        github: "https://github.com/rakafdil/creanomic.git",
        demo: "https://creanomic.vercel.app/products"
    },
    {
        title: "Planetify",
        description: "An interactive 3D solar system visualization built with THREE.js, featuring realistic planet models, orbit and rotation simulations, and interactive exploration of planetary details",
        image: "/project/10.png",
        github: "https://github.com/Jakij4ki/Planetify.git",
        demo: "https://planetify-eight.vercel.app/"
    },
    {
        title: "Team Quest",
        description: "A team productivity app built with Expo (React Native) and Firebase, focused on engaging task management and collaboration.",
        image: "/project/11.png",
        github: "https://github.com/VeryFach/TeamQuest.git",
        demo: "#"
    },
    {
        title: "Mininet",
        description: "Learn about network from traditional to programmable network using mininet environment.",
        image: "/project/12.png",
        github: "https://github.com/VeryFach/mininet101.git",
        demo: "#"
    },
    {
        title: "Phishing Email Detection",
        description: "A model designed to classify emails as phishing or legitimate based on textual features and email metadata",
        image: "/project/2.png",
        github: "https://github.com/VeryFach/Comprehensive-Predictive-Modeling.git",
        demo: "#"
    },
    {
        title: "Obesity Risk Classification",
        description: "A multi-class classification model to assess obesity risk levels (0 to 6) based on demographic, lifestyle, and family history factors",
        image: "/project/3.png",
        github: "https://github.com/VeryFach/Comprehensive-Predictive-Modeling.git",
        demo: "#"
    },
    {
        title: "Bemon",
        description: "This game project use GUI java ",
        image: "/project/4.png",
        github: "https://github.com/VeryFach/Bemon.git",
        demo: "#"
    },
    {
        title: "Shift Left security",
        description: "integrates security checks at the start of development, not the end",
        image: "/project/1.png",
        github: "https://github.com/AmosJuang/DevSecOps.git",
        demo: "#"
    },
    {
        title: "Interactive Data Framework",
        description: "Using java swing to create a framework that allows users to interact with data in a more intuitive way",
        image: "/project/6.png",
        github: "https://github.com/VeryFach/Data-Interaction-Framework.git",
        demo: "#"
    }
]
