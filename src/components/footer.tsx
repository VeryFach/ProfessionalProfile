const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-8">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm">
                            © 2024 Fachru. All rights reserved.
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-sm hover:text-red-500 transition-colors">
                            GitHub
                        </a>
                        <a href="#" className="text-sm hover:text-red-500 transition-colors">
                            LinkedIn
                        </a>
                        <a href="#" className="text-sm hover:text-red-500 transition-colors">
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer