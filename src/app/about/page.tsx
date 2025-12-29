export default function About() {
    return (
        <section className="min-h-screen flex items-center text-black">
            <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 py-20 sm:py-32">
                <div className="max-w-4xl mx-auto">
                    {/* Title Section */}
                    <div className="mb-8 sm:mb-12">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 underline underline-offset-8">
                            ABOUT ME
                        </h1>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-6 sm:space-y-8 leading-relaxed">
                        <p className="text-base sm:text-lg lg:text-xl font-medium">
                            Hello! I'm <span className="font-bold">Fachru</span>, a passionate <span className="font-semibold">Computer Science</span> student 
                            with deep interests in networking protocols, data analytics, and cloud infrastructure. 
                            Always exploring the intersection of technology and innovation.
                        </p>

                        <p className="text-sm sm:text-base lg:text-lg">
                            Currently focusing on <span className="font-semibold">distributed systems</span>, 
                            <span className="font-semibold"> machine learning</span> applications, and 
                            <span className="font-semibold"> scalable cloud architectures</span>. 
                            Driven by curiosity and the endless possibilities of technology.
                        </p>

                        <div className="pt-4 sm:pt-6 border-t border-black/10">
                            <h2 className="text-xl sm:text-2xl font-bold mb-4">Skills & Interests</h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm sm:text-base lg:text-lg">
                                <li className="flex items-center gap-2">
                                    <span className="text-red-500">▪</span> Network Security
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-red-500">▪</span> Cloud Computing
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-red-500">▪</span> Data Analytics
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-red-500">▪</span> DevSecOps
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-red-500">▪</span> Container Technologies
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-red-500">▪</span> Hybrid Cloud
                                </li>
                            </ul>
                        </div>

                        <div className="pt-4 sm:pt-6 border-t border-black/10">
                            <p className="text-sm sm:text-base lg:text-lg italic text-black/70">
                                "Striving to build systems that not only perform — but inspire innovation through simplicity."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
