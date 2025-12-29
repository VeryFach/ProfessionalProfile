import { stories, type Story } from '@/data'

export default function Blog() {
    return (
        <section className="min-h-screen flex items-center py-20 sm:py-24 lg:py-32">
            <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
                
                {/* Title Section */}
                <div className="mb-12 sm:mb-16">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 underline underline-offset-8">
                        STORIES
                    </h1>
                    <p className="text-gray-700 text-base sm:text-lg lg:text-xl max-w-2xl">
                        A collection of insights, experiences, and lessons learned from technology explorations.
                    </p>
                </div>

                {/* Stories Grid */}
                <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                    {stories.map((story: Story, index: number) => (
                        <article
                            key={index}
                            className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
                        >
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-2 sm:gap-3">
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">
                                    {story.title}
                                </h2>
                                <span className="text-gray-500 text-xs sm:text-sm lg:text-base whitespace-nowrap">
                                    {story.date}
                                </span>
                            </div>

                            <p className="text-gray-800 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                                {story.excerpt}
                            </p>

                            <button className="text-gray-500 text-sm sm:text-base font-medium hover:underline transition-all duration-200">
                                Read More →
                            </button>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
