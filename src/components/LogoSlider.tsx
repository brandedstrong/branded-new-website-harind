import React from 'react';
import Slider from 'react-slick';
import { IMAGES } from '@/constants/images';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LogoSlider: React.FC = () => {
    const logos = [
        { src: IMAGES.Icons1, alt: 'Ubuntu' },
        { src: IMAGES.Icons2, alt: 'Photoshop' },
        { src: IMAGES.Icons3, alt: 'Cursor' },
        { src: IMAGES.Icons4, alt: 'Illustrator' },
        { src: IMAGES.Icons5, alt: 'Figma' },
        { src: IMAGES.Icons6, alt: 'JavaScript' },
        { src: IMAGES.Icons7, alt: 'Mailchimp' },
        { src: IMAGES.Icons8, alt: 'React' },
        { src: IMAGES.Icons1, alt: 'Ubuntu' },
        { src: IMAGES.Icons2, alt: 'Photoshop' },
        { src: IMAGES.Icons3, alt: 'Cursor' },
        { src: IMAGES.Icons4, alt: 'Illustrator' },
        { src: IMAGES.Icons5, alt: 'Figma' },
        { src: IMAGES.Icons6, alt: 'JavaScript' },
        { src: IMAGES.Icons7, alt: 'Mailchimp' },
        { src: IMAGES.Icons8, alt: 'React' },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 4000,
        slidesToShow: 15,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 12,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 8,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 8,
                }
            }
        ]
    };

    return (
        <div className="relative w-full overflow-hidden bg-black py-16 pb-8 md:pb-30">
            {/* Left Black Overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-20 lg:w-32 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />

            {/* Right Black Overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-20 lg:w-32 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />

            {/* Slider Container */}
            <div className="relative z-0 logo-slider">
                <Slider {...settings}>
                    {logos.map((logo, index) => (
                        <div key={index}>
                            <div className="flex items-center justify-center">
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="w-12 h-12 lg:w-16 lg:h-16"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default LogoSlider;
