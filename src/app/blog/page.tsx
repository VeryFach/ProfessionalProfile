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
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-8">
                <h1 className="text-6xl font-black text-black mb-12">
                    STORIES
                </h1>
                <div className="space-y-8">
                    {stories.map((story, index) => (
                        <article key={index} className="bg-white/90 p-8 rounded-lg backdrop-blur-sm">
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-3xl font-bold text-black">
                                    {story.title}
                                </h2>
                                <span className="text-gray-600 text-sm">
                                    {story.date}
                                </span>
                            </div>
                            <p className="text-black text-lg leading-relaxed mb-4">
                                {story.excerpt}
                            </p>
                            <button className="text-black font-medium hover:underline">
                                Read More →
                            </button>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}