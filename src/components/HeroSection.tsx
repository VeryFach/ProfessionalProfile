import Image from 'next/image'

const HeroSection = () => {
    return (
        <section className="min-h-screen bg-red-500 flex items-center">
            {/* Header Title */}
            <div className="absolute top-8 left-8 z-20">
                <h1 className="text-2xl font-bold text-black tracking-wide">
                    FACHRU
                </h1>
            </div>

            {/* Left Side - Silhouette Image */}
            <div className="w-1/2 h-screen relative">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-96 h-[600px] relative overflow-hidden rounded-lg">
                        <Image
                            src="/images/hero.jpg"
                            alt="Silhouette"
                            fill
                            className="object-cover silhouette-image"
                            priority
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
    )
}

export default HeroSection