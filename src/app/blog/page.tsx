export default function Blog() {
    const stories = [
        {
            title: "Journey into Cloud Computing",
            excerpt: "Exploring the vast landscape of cloud technologies and their impact on modern development.",
            date: "2024-01-15"
        },
        {
            title: "Network Security in the Modern Age",
            excerpt: "Understanding the evolving challenges of cybersecurity in distributed systems.",
            date: "2024-01-10"
        },
        {
            title: "Data Analytics: From Raw to Insights",
            excerpt: "The process of transforming massive datasets into actionable business intelligence.",
            date: "2024-01-05"
        }
    ]

    return (
        <section className="min-h-screen flex items-center py-24">
            <div className="w-full px-8 sm:px-12 md:px-24 lg:px-40 xl:px-56">
                
                {/* Title Section */}
                <div className="mb-16">
                    <h1 className="text-5xl sm:text-6xl font-black mb-4 underline underline-offset-8">
                        STORIES
                    </h1>
                    <p className="text-gray-700 text-lg sm:text-xl max-w-2xl">
                        A collection of insights, experiences, and lessons learned from technology explorations.
                    </p>
                </div>

                {/* Stories Grid */}
                <div className="space-y-10">
                    {stories.map((story, index) => (
                        <article
                            key={index}
                            className="bg-white p-8 sm:p-10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
                        >
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
                                <h2 className="text-2xl sm:text-3xl font-bold text-black">
                                    {story.title}
                                </h2>
                                <span className="text-gray-500 text-sm sm:text-base">
                                    {story.date}
                                </span>
                            </div>

                            <p className="text-gray-800 text-lg leading-relaxed mb-6">
                                {story.excerpt}
                            </p>

                            <button className="text-orange-500 font-medium hover:underline transition-all duration-200">
                                Read More →
                            </button>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
