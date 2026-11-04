import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="site-footer-shell">
                {/* Main Footer Content */}
                <div className="site-footer-main">
                    {/* Left Section - Brand */}
                    <div className="site-footer-brand">
                        <Link href="/" className="site-footer-brand-link" aria-label="Very Fachrurozi, homepage">
                            <Image src="/logo.svg" alt="" width={48} height={45} className="site-footer-logo" />
                            <span>Fachru</span>
                        </Link>
                        <p className="site-footer-description">
                            Computer Science student focused on backend development, data, and cloud technology.
                        </p>
                    </div>

                    {/* Center Section - Navigation */}
                    <div className="site-footer-navigation">
                        <div className="site-footer-nav-grid">
                            <div>
                                <h4 className="site-footer-label">
                                    EXPLORE
                                </h4>
                                <div className="site-footer-link-list">
                                    <Link href="/projects" className="site-footer-link">
                                        Works
                                    </Link>
                                    <Link href="/experiences" className="site-footer-link">
                                        Experiences
                                    </Link>
                                    <Link href="/about" className="site-footer-link">
                                        About
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <h4 className="site-footer-label">
                                    CONNECT
                                </h4>
                                <div className="site-footer-link-list">
                                    <Link href="/contact" className="site-footer-link">
                                        Contact
                                    </Link>
                                    <a href="mailto:fachvery@gmail.com" className="site-footer-link">
                                        Email
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Social Links */}
                    <div className="site-footer-social">
                        <div>
                            <h4 className="site-footer-label">
                                FOLLOW
                            </h4>
                            <div className="site-footer-link-list">
                                <a
                                    href="https://github.com/VeryFach"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="site-footer-link site-footer-social-link group"
                                >
                                    <span>
                                        GITHUB
                                    </span>
                                    <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/very-fachrurozi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="site-footer-link site-footer-social-link group"
                                >
                                    <span>
                                        LINKEDIN
                                    </span>
                                    <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a
                                    href="mailto:fachvery@gmail.com"
                                    className="site-footer-link site-footer-social-link group"
                                >
                                    <span>
                                        EMAIL
                                    </span>
                                    <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="site-footer-rule"></div>

                {/* Bottom Section */}
                <div className="site-footer-bottom">
                    <div>
                        <p className="site-footer-copyright">
                            © {new Date().getFullYear()} Fachru. All rights reserved.
                        </p>
                    </div>

                    <div>
                        <a
                            href="#top"
                            className="site-footer-top group"
                        >
                            <span>Back to Top</span>
                            <svg className="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
