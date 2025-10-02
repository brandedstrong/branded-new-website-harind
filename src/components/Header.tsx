import { useState, useEffect } from 'react';
import { IMAGES } from '@/constants/images';
import { MenuIcon, CloseIcon } from '@/lib/IconSvgIcons';
import CTAButton from './CTAButton';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigation = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-black/20 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-18 lg:h-20">
                    {/* Logo */}
                    <Link to="/">
                        <img src={IMAGES.Logo} alt="logo" className='max-w-[250px] hidden lg:block' />
                    </Link>
                    <Link to="/">
                        <img src={IMAGES.LogoIcon} alt="logo" className='w-[50px] block lg:hidden' />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden xl:flex items-center space-x-5 justify-center ml-auto">
                        <Link to="/" className="text-white hover:text-white/70 transition-colors duration-200 text-sm font-medium">
                            WEB DESIGN
                        </Link>
                        <Link to="/on-demand-video-production" className="text-white hover:text-white/70 transition-colors duration-200 text-sm font-medium">
                            ON DEMAND VIDEO PRODUCTION
                        </Link>
                        <Link to="/monthly-video-production" className="text-white hover:text-white/70 transition-colors duration-200 text-sm font-medium">
                            MONTHLY VIDEO PRODUCTION
                        </Link>
                        <Link to="#" className="text-white hover:text-white/70 transition-colors duration-200 text-sm font-medium">
                            SHOPIFY
                        </Link>
                    </nav>

                    {/* Responsive CTA Button */}
                    <CTAButton onClick={() => navigation('/contact')} title="BOOK INTRO CALL" />



                    {/* Mobile Menu Button */}
                    <div className="xl:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white hover:text-orange-400 transition-colors duration-200"
                        >
                            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="xl:hidden fixed inset-0 top-0 z-40">
                        {/* Overlay backdrop */}
                        <div className="fixed inset-0 bg-black/50" onClick={() => setIsMenuOpen(false)} />

                        {/* Mobile Menu Panel */}
                        <div className="relative bg-gradient-to-b from-black/95 to-black/90 min-h-screen pt-0 px-6 backdrop-blur-lg bg-opacity-80">
                            {/* Close Button */}
                            <div className="flex justify-end mb-2">
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-white px-0 hover:text-orange-400 transition-colors duration-200 p-3 rounded-lg hover:bg-white/10"
                                    aria-label="Close mobile menu"
                                >
                                    <CloseIcon />
                                </button>
                            </div>

                            {/* Navigation Links */}
                            <div className="space-y-0">
                                <Link
                                    to="/"
                                    className="block py-4 md:py-8 text-white text-3xl md:text-6xl font-light transition-colors duration-200 border-b border-gray-300/20"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    WEB DESIGN
                                </Link>
                                <Link
                                    to="/on-demand-video-production"
                                    className="block py-4 md:py-8 text-white text-3xl md:text-6xl font-light transition-colors duration-200 border-b border-gray-300/20 text-left"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    ON DEMAND VIDEO
                                </Link>
                                <Link
                                    to="/monthly-video-production"
                                    className="block py-4 md:py-8 text-white text-3xl md:text-6xl font-light transition-colors duration-200 border-b border-gray-300/20"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    MONTHLY VIDEO
                                </Link>
                                <Link
                                    to="/"
                                    className="block py-4 md:py-8 text-white text-3xl md:text-6xl font-light transition-colors duration-200 border-b border-gray-300/20"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    SHOPIFY
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
