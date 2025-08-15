import Image from 'next/image'

const HeroSection = () => {
    return (
        <>
            {/* First Section */}
            <section className="min-h-screen flex items-center relative">
                {/* Header Title */}
                <div className="absolute top-8 left-8 z-20">
                    <h1 className="text-2xl font-bold text-black tracking-wide">
                        FACHRU
                    </h1>
                </div>

                {/* Left Side - Silhouette Image */}
                <div className="w-1/2 h-screen relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full max-w-[480px] h-[600px] relative overflow-hidden rounded-lg">
                            <Image
                                src="/image/hero.jpg"
                                alt="Silhouette"
                                fill
                                className="object-cover silhouette-image"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Side - Main Content */}
                <div className="w-1/2 h-screen flex flex-col justify-center px-16">
                    <div className="space-y-6">
                        {/* Main Heading */}
                        <h2 className="text-7xl font-black text-black leading-[0.9] tracking-tight">
                            CS STUDENT.<br />
                            NETWORKS<br />
                            BUZZING.<br />
                            DATA CRUNCHING.<br />
                            CLOUDS FLOATING.
                        </h2>

                        {/* Description */}
                        <div className="mt-12">
                            <p className="text-lg font-medium text-black max-w-4xl leading-relaxed">
                                IT PORTRAYS A COMPUTER SCIENCE STUDENT IMMERSED IN NETWORKING, DATA ANALYSIS, AND CLOUD TECHNOLOGIES, DRIVEN BY A RESTLESS, CURIOUS MIND
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Second Section */}
            <section className="min-h-screen flex items-center relative">
                {/* Left Side - Topics */}
                <div className="w-3/5 h-screen flex flex-col justify-center px-16 relative">
                    {/* Top Text */}
                    <div className="mb-16">
                        <p className="text-black font-bold text-lg leading-tight tracking-wide max-w-md">
                            IT REFLECTS 360 DAYS OF EXPLORING DIVERSE TOPICS SOME PURSUED FOR LEARNING, OTHERS SIMPLY FOR THE JOY OF DISCOVERY.
                        </p>
                    </div>

                    {/* Topic Bubbles */}
                    <div className="relative">
                        {/* Strawberry Character */}
                        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
                            <div className="w-20 h-20 relative">
                                <Image
                                    src="/image/meme.png"
                                    alt="Strawberry Character"
                                    fill
                                    className="object-contain"
                                    sizes="80px"
                                />
                            </div>
                        </div>

                        {/* Topic Bubbles */}
                        <div className="flex flex-wrap gap-4 justify-center items-center mt-16">
                            {['SECURITY', 'POLITICAL', 'MEME', 'DEVSECOPS', 'HYBRID CLOUD', 'CONTAINER', 'CS:GO'].map((topic) => (
                                <div key={topic} className="bg-white px-8 py-4 rounded-full shadow-lg">
                                    <span className="text-black font-bold text-xl tracking-wide">{topic}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side - Atmospheric Image */}
                <div className="w-1/2 h-screen relative">
                    <div className="absolute inset-0 flex items-center justify-center pr-16">
                        <div className="w-full max-w-[480px] h-[600px] relative overflow-hidden rounded-lg">
                            <Image
                                src="/image/hero2.png"
                                alt="Atmospheric"
                                fill
                                className="object-cover silhouette-image"
                                sizes="(max-width: 768px) 100vw, 40vw"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection