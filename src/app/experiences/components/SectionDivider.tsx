export default function SectionDivider() {
    return (
        <div className="flex items-center justify-center mb-12 sm:mb-16">
            <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-gray-600"></div>
            <div className="mx-6 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
            </div>
            <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-gray-600"></div>
        </div>
    )
}
