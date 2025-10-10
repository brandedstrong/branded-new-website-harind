import { CheckIcon } from '@/lib/IconSvgIcons';
import React, { useEffect, useRef } from 'react';

interface BenefitButtonsMarqueeProps {
    className?: string;
}

const BenefitButtonsMarquee: React.FC<BenefitButtonsMarqueeProps> = ({ className = "" }) => {
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Pause animation when user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion && marqueeRef.current) {
            const animatedElements = marqueeRef.current.querySelectorAll('.animate-benefit-marquee');
            animatedElements.forEach((element) => {
                (element as HTMLElement).style.animationPlayState = 'paused';
            });
        }
    }, []);

    const benefitTexts = [
        "BUILD TRUST AND FAMILIARITY",
        "INCREASE RETENTION AND REPEAT BUSINESS",
        "GENERATE MORE REFERRALS THROUGH SHAREABLE CONTENT",
        "ACCELERATE BRAND GROWTH"
    ];

    return (
        <div ref={marqueeRef} className={`relative overflow-hidden ${className}`} role="banner" aria-label="Benefit buttons marquee">
            {/* Gradient Background */}
            <div className="relative bg-gradient-to-r from-[#B0E63B] to-[#E0E23B] ">
                {/* Marquee Container */}
                <div className="relative overflow-hidden">
                    {/* First Row */}
                    <div className="flex animate-benefit-marquee whitespace-nowrap">
                        {[...Array(3)].map((_, idx) => (
                            <div key={`row1-${idx}`} className="flex items-center space-x-4 mx-8">
                                {benefitTexts.map((text, textIdx) => (
                                    <div
                                        key={`${idx}-${textIdx}`}
                                        className="bg-black rounded-[23px] px-4 py-3  flex items-center space-x-3 hover:bg-gray-800 transition-colors cursor-pointer flex-shrink-0"
                                    >
                                        <CheckIcon />
                                        <span className="bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent text-xs sm:text-lg font-extrabold uppercase leading-tight whitespace-nowrap">
                                            {text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BenefitButtonsMarquee;
