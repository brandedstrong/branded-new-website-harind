import React from "react";
import Slider from "react-slick";
import { IMAGES } from "@/constants/images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Custom Arrow Components
interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

const CustomPrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <button
        className="absolute border border-white/50 cursor-pointer left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-300 hover:scale-110"
        onClick={onClick}
        aria-label="Previous video"
    >
        <ChevronLeft size={24} />
    </button>
);

const CustomNextArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <button
        className="absolute border border-white/50 cursor-pointer right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-300 hover:scale-110"
        onClick={onClick}
        aria-label="Next video"
    >
        <ChevronRight size={24} />
    </button>
);

interface VideoSliderProps {
    className?: string;
}

const VideoSlider: React.FC<VideoSliderProps> = ({ className = "" }) => {
    const videoImages = [
        {
            src: IMAGES.Video2_Img,
            alt: "Professional Video Production 1",
            title: "Video Production Service 1"
        },
        {
            src: IMAGES.Video3_Img,
            alt: "Professional Video Production 2",
            title: "Video Production Service 2"
        },
        {
            src: IMAGES.Video4_Img,
            alt: "Professional Video Production 3",
            title: "Video Production Service 3"
        },
        {
            src: IMAGES.Videoalptop_Img,
            alt: "Professional Video Production 4",
            title: "Video Production Service 4"
        },
        {
            src: IMAGES.Computer_Img,
            alt: "Professional Video Production 5",
            title: "Video Production Service 5"
        },
        {
            src: IMAGES.Lady_with_laptop,
            alt: "Professional Video Production 6",
            title: "Video Production Service 6"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: true,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        fade: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    dots: true,
                },
            },
        ],
    };

    return (
        <div className={`relative w-full ${className}`}>
            {/* Video Slider Container */}
            <div className="video-slider">
                <Slider {...settings}>
                    {videoImages.map((video, index) => (
                        <div key={index}>
                            <div className="relative w-full aspect-video">
                                <img
                                    src={video.src}
                                    alt={video.alt}
                                    className="w-full h-full object-cover rounded-lg"
                                    loading="lazy"
                                />
                                {/* Optional overlay with title */}
                                {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <h3 className="text-white font-semibold text-lg uppercase">
                                        {video.title}
                                    </h3>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

        </div>
    );
};

export default VideoSlider;
