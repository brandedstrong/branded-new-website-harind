import React, { useEffect, useRef } from 'react';

interface TextMarqueeProps {
    className?: string;
    marqueeText?: string;
    upperBandText?: string;
}

const DEFAULT_MARQUEE_TEXT = "FEWER TOOLS TO JUGGLE PRO TEAM ON DEMAND NO DESIGN DEBT SAVE 10+ HRS/WEEK";
const DEFAULT_UPPER_BAND_TEXT = "FEWER TOOLS TO JUGGLE PRO TEAM";

const TextMarquee: React.FC<TextMarqueeProps> = ({
    className = "",
    marqueeText = DEFAULT_MARQUEE_TEXT,
    upperBandText = DEFAULT_UPPER_BAND_TEXT,
}) => {
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Pause animation when user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion && marqueeRef.current) {
            const animatedElements = marqueeRef.current.querySelectorAll('.animate-marquee-slow, .animate-marquee-fast');
            animatedElements.forEach((element) => {
                (element as HTMLElement).style.animationPlayState = 'paused';
            });
        }
    }, []);

    return (
        <div
            ref={marqueeRef}
            className={`relative -top-[160px] z-20 overflow-hidden  ${className}`}
            role="banner"
            aria-label="Promotional text marquee"
        >
            {/* Diagonal Bands Container */}
            <div className="relative z-10 h-[160px] xs:h-[160px] sm:h-[160px] md:h-[160px] lg:h-[180px] xl:h-[200px] 2xl:h-[220px] overflow-hidden marquee-container">
                {/* Upper Yellow-Green Band */}
                <div
                    className="absolute top-[72px] left-0 w-full py-3 bg-[#1B1B1B]  origin-left"
                    style={{ transform: 'rotate(3deg)' }}
                >
                    <div className="flex items-center h-full overflow-hidden">
                        <div className="flex animate-marquee-slow whitespace-nowrap font-bold text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                            {[...Array(6)].map((_, idx) => (
                                <span
                                    key={idx}
                                    className="mr-4 xs:mr-6 sm:mr-8 md:mr-12 lg:mr-16 xl:mr-20 2xl:mr-24 bg-gradient-to-r from-[#B0E63B] to-[#E0E23B] bg-clip-text text-transparent"
                                    style={{
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                    }}
                                >
                                    {upperBandText}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Lower Lime Green Band */}
                <div
                    className="absolute bottom-0 left-0 py-3 w-full bg-gradient-to-r from-[#a3e635] to-[#facc15] transform  origin-left"
                    style={{ transform: 'rotate(-3deg)' }}
                >
                    <div className="flex items-center h-full overflow-hidden">
                        <div className="flex animate-marquee-fast whitespace-nowrap text-black font-bold text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                            {[...Array(6)].map((_, idx) => (
                                <span
                                    key={idx}
                                    className="mr-3 xs:mr-4 sm:mr-6 md:mr-8 lg:mr-10 xl:mr-12 2xl:mr-14"
                                >
                                    {marqueeText}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextMarquee;
