export default function About() {
    return (
        <section className="min-h-screen flex items-center text-black">
            <div className="w-full px-8 sm:px-12 md:px-24 lg:px-40 xl:px-56 py-24">
                <div className="max-w-4xl">
                    {/* Title Section */}
                    <div className="mb-12">
                        <h1 className="text-5xl sm:text-6xl font-black mb-4 underline underline-offset-8">
                            EXPERIENCES
                        </h1>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-8 leading-relaxed">
                        <p className="text-lg sm:text-xl font-medium">
                            A passionate <span className="font-semibold">Computer Science</span> student 
                            with deep interests in networking protocols, data analytics, and cloud infrastructure. 
                            Always exploring the intersection of technology and innovation.
                        </p>

                        <p className="text-base sm:text-lg">
                            Currently focusing on <span className="font-semibold">distributed systems</span>, 
                            <span className="font-semibold"> machine learning</span> applications, and 
                            <span className="font-semibold"> scalable cloud architectures</span>. 
                            Driven by curiosity and the endless possibilities of technology.
                        </p>

                        <div className="pt-6 border-t border-black/10">
                            <p className="text-base sm:text-lg italic text-black/70">
                                “Striving to build systems that not only perform — but inspire innovation through simplicity.”
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}