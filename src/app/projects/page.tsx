export default function Projects() {
    const projects = [
        {
            title: "Network Traffic Analyzer",
            description: "Real-time network packet analysis tool using Python and Wireshark",
            tech: ["Python", "Wireshark", "Socket Programming"]
        },
        {
            title: "Cloud Infrastructure Dashboard",
            description: "AWS-based monitoring dashboard for cloud resources",
            tech: ["AWS", "React", "Node.js", "CloudWatch"]
        },
        {
            title: "Data Pipeline Automation",
            description: "Automated ETL pipeline for big data processing",
            tech: ["Apache Spark", "Docker", "Kubernetes", "PostgreSQL"]
        }
    ]

    return (
        <div className="min-h-screen bg-red-500 py-20">
            <div className="container mx-auto px-8">
                <h1 className="text-6xl font-black text-black mb-12">
                    WORKS
                </h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white/90 p-8 rounded-lg backdrop-blur-sm">
                            <h3 className="text-2xl font-bold text-black mb-4">
                                {project.title}
                            </h3>
                            <p className="text-black mb-6 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="bg-black text-white px-3 py-1 text-sm rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}