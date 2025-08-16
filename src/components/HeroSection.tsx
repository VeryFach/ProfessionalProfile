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
                    <div className="absolute top-20 left-16 max-w-lg">
                        <p className="text-black font-bold text-2xl leading-tight tracking-wide">
                            IT REFLECTS 360 DAYS OF EXPLORING DIVERSE TOPICS SOME PURSUED FOR LEARNING, OTHERS SIMPLY FOR THE JOY OF DISCOVERY.
                        </p>
                    </div>

                    {/* Topic Bubbles Container */}
                    <div className="relative flex items-center justify-center h-full">
                        {/* Strawberry Character - positioned in center */}
                        <div className="absolute z-20 top-2 right-10">
                            <div className="w-70 h-100 relative">
                                <Image
                                    src="/image/meme.png"
                                    alt="Strawberry Character"
                                    fill
                                    className="object-contain"
                                    sizes="64px"
                                />
                            </div>
                        </div>

                        {/* Topic Bubbles - arranged around the strawberry */}
                        <div className="relative w-full max-w-2xl h-96">
                            {/* SECURITY - top left */}
                            <div className="absolute top-0 left-10 bg-white border-2 border-black rounded-full w-78 h-28 flex items-center justify-center shadow-lg transform -rotate-12">
                                <span className="text-black font-bold text-5xl tracking-wide">SECURITY</span>
                            </div>

                            {/* POLITICAL - top center, angled */}
                            <div className="absolute top-31 left-1/2 transform -translate-x-1/2 bg-white border-2 border-black rounded-full w-78 h-28 flex items-center justify-center shadow-lg rotate-12">
                                <span className="text-black font-bold text-5xl tracking-wide">POLITICAL</span>
                            </div>

                            {/* MEME - top right */}
                            <div className="absolute top-9 right-1 bg-white border-2 border-black rounded-full w-78 h-28 flex items-center justify-center shadow-lg transform rotate-6">
                                <span className="text-black font-bold text-5xl tracking-wide">MEME</span>
                            </div>

                            {/* DEVSECOPS - middle left */}
                            <div className="absolute top-72 left-[-40px] transform -translate-y-1/2 bg-white border-2 border-black rounded-full w-88 h-28 flex items-center justify-center shadow-lg -rotate-6">
                                <span className="text-black font-bold text-5xl tracking-wide">DEVSECOPS</span>
                            </div>

                            {/* HYBRID CLOUD - middle right */}
                            <div className="absolute top-79 right-[-40px] transform -translate-y-1/2 bg-white border-2 border-black rounded-full w-98 h-28 flex items-center justify-center shadow-lg rotate-3">
                                <span className="text-black font-bold text-5xl tracking-wide">HYBRID CLOUD</span>
                            </div>

                            {/* CONTAINER - bottom left */}
                            <div className="absolute bottom-[-72px] left-12 bg-white border-2 border-black rounded-full w-78 h-28 flex items-center justify-center shadow-lg transform -rotate-3">
                                <span className="text-black font-bold text-5xl tracking-wide">CONTAINER</span>
                            </div>

                            {/* CS:GO - bottom center */}
                            <div className="absolute bottom-[-105px] left-128 transform -translate-x-1/2 bg-white border-2 border-black rounded-full w-78 h-28 flex items-center justify-center shadow-lg rotate-6">
                                <span className="text-black font-bold text-5xl tracking-wide">CS:GO</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Atmospheric Image */}
                <div className="w-2/5 h-screen relative">
                    <div className="absolute inset-0 flex items-center justify-center pr-16">
                        <div className="w-full max-w-[380px] h-[600px] relative overflow-hidden rounded-lg">
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