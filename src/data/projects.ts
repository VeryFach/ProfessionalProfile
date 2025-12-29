export interface Project {
    title: string
    description: string
    image: string
    demo?: string
    github?: string
}

export const projects: Project[] = [
    {
        title: "Phishing Email Detection",
        description: "A model designed to classify emails as phishing or legitimate based on textual features and email metadata",
        image: "/project/2.png",
        github: "https://github.com/VeryFach/phishing-detection",
        demo: "#"
    },
    {
        title: "Obesity Risk Classification",
        description: "A multi-class classification model to assess obesity risk levels (0 to 6) based on demographic, lifestyle, and family history factors",
        image: "/project/3.png",
        github: "https://github.com/VeryFach/obesity-classification",
        demo: "#"
    },
    {
        title: "Bemon",
        description: "This game project use GUI java ",
        image: "/project/4.png",
        github: "https://github.com/VeryFach/bemon-game",
        demo: "#"
    },
    {
        title: "Shift Left security",
        description: "integrates security checks at the start of development, not the end",
        image: "/project/1.png",
        github: "https://github.com/VeryFach/shift-left-security",
        demo: "#"
    },
    {
        title: "House Price Prediction",
        description: "predicts house prices based on various features such as location, size, and amenities",
        image: "/project/5.png",
        github: "https://github.com/VeryFach/house-price-prediction",
        demo: "#"
    },
    {
        title: "Interactive Data Framework",
        description: "Using java swing to create a framework that allows users to interact with data in a more intuitive way",
        image: "/project/6.png",
        github: "https://github.com/VeryFach/interactive-data-framework",
        demo: "#"
    },
    {
        title: "mediScan",
        description: "A web-based health screening and symptom analysis tool - Allows users to input symptoms and receive preliminary medical insights through a structured, decision-based analysis approach. Contributed as a Full-Stack Developer by implementing medical history tracking (allergies, diseases, scan history) and integrating location and weather data to enhance health context accuracy",
        image: "/project/7.png",
        github: "https://github.com/rakafdil/mediscan.git",
        demo: "https://mediscan-smoky.vercel.app/"
    },
    {
        title: "Nutrimori",
        description: "A smart nutrition tracking web application - Designed to help users log daily food intake, analyze nutritional values, and receive personalized recommendations based on dietary patterns and individual preferences. as a Back-End Developer, I built the APIs, nutrition analysis engine, and integrated database and AI services.",
        image: "/project/8.png",
        github: "https://github.com/rakafdil/NutriMori.git",
        demo: "https://nutrimori.vercel.app/"
    },
    {
        title: "GrowthWell",
        description: "A digital platform for personal growth and well-being - Built to help users track progress, manage personal goals, and access curated self-improvement resources in a single integrated platform. I developed the Express.js API and integrated Supabase for core backend services",
        image: "/project/9.png",
        github: "https://github.com/rakafdil/creanomic.git",
        demo: "https://creanomic.vercel.app/products"
    }
]
