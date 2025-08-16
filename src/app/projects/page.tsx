export default function Projects() {
    const projects = [
        {
            title: "Phishing Email Detection",
            description: "A model designed to classify emails as phishing or legitimate based on textual features and email metadata",
            image: "https://via.placeholder.com/400x240/1f2937/ffffff?text=Network+Analysis"
        },
        {
            title: "Obesity Risk Classification",
            description: "A multi-class classification model to assess obesity risk levels (0 to 6) based on demographic, lifestyle, and family history factors",
            image: "https://via.placeholder.com/400x240/3b82f6/ffffff?text=Cloud+Dashboard"
        },
        {
            title: "Bemon",
            description: "This game project use GUI java ",
            image: "https://via.placeholder.com/400x240/059669/ffffff?text=Data+Pipeline"
        },
        {
            title: "Shift Left security",
            description: "integrates security checks at the start of development, not the end",
            image: "https://via.placeholder.com/400x240/dc2626/ffffff?text=Security+Audit"
        },
        {
            title: "Machine Learning Platform",
            description: "End-to-end ML platform for model training, deployment, and monitoring in production environments",
            image: "https://via.placeholder.com/400x240/7c3aed/ffffff?text=ML+Platform"
        },
        {
            title: "Blockchain Analytics",
            description: "Cryptocurrency transaction analysis and visualization tool for fraud detection and compliance",
            image: "https://via.placeholder.com/400x240/f59e0b/ffffff?text=Blockchain+Analytics"
        }
    ]

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-16 md:mb-20">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-black mb-4 sm:mb-6 tracking-tight">
                        WORKS
                    </h1>
                    {/* <div className="w-16 sm:w-20 md:w-24 h-1 sm:h-1.5 bg-black mx-auto rounded-full"></div> */}
                </div>

                {/* Projects Grid - Fixed 3 columns layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden
                                        shadow-lg hover:shadow-2xl transition-all duration-300 ease-out
                                        hover:-translate-y-2 hover:bg-white border-2 border-transparent
                                        hover:border-black/10 flex flex-col"
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden h-48 sm:h-52 lg:h-56">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-300 
                                                group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent 
                                                opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Content Container */}
                            <div className="p-6 sm:p-8 lg:p-10 flex-1 flex flex-col">
                                {/* Project Title */}
                                <div className="mb-4 sm:mb-6">
                                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black leading-tight
                                                    group-hover:text-red-600 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <div className="w-8 sm:w-12 h-0.5 bg-red-500 mt-2 sm:mt-3 rounded-full
                                                    group-hover:w-16 sm:group-hover:w-20 transition-all duration-300"></div>
                                </div>

                                {/* Project Description */}
                                <p className="text-gray-800 text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-loose 
                                                mb-6 sm:mb-8 flex-1">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Spacing */}
                <div className="mt-12 sm:mt-16 md:mt-20 text-center">
                    <p className="text-black/80 text-sm sm:text-base font-medium py-100">
                        Showcasing innovative solutions & technical expertise
                    </p>
                </div>
            </div>
        </div>
    )
}