import { IMAGES } from '@/constants/images';
import React from 'react';

interface StartTodaySectionProps {
    className?: string;
}

const StartTodaySection: React.FC<StartTodaySectionProps> = ({ className = '' }) => {
    return (
        <div className={`relative bg-black overflow-hidden -mt-[150px]  ${className}`}>
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Main Content Container */}
                    <div className="relative">
                        {/* Responsive Image Grid - Asymmetrical Layout */}
                        <div className="relative grid grid-cols-2 sm:grid-cols-4 md:grid-cols-12 gap-4 sm:gap-8 md:gap-14 items-end mb-8 sm:mb-12 md:mb-14">
                            {/* Top-Left Panel - Professional Video Camera */}
                            <div className="col-span-1 sm:col-span-2 md:col-span-4 relative">
                                <img
                                    src={IMAGES.Image1}
                                    alt="Professional video camera in action"
                                    className="object-cover rounded-[20px] sm:rounded-[28px] md:rounded-[35px] w-full h-[120px] sm:h-[180px] md:h-[267px] opacity-40"
                                />
                            </div>

                            {/* Middle-Right Panel - Photographer with DSLR */}
                            <div className="col-span-1 sm:col-span-1 md:col-span-2 relative">
                                <img
                                    src={IMAGES.Image2}
                                    alt="Photographer with DSLR camera"
                                    className="object-cover rounded-[20px] sm:rounded-[28px] md:rounded-[35px] w-full h-[70px] sm:h-[110px] md:h-[150px] opacity-70"
                                />
                            </div>

                            {/* Bottom-Middle Panel - Video Editing Timeline */}
                            <div className="hidden sm:block col-span-1 md:col-span-2 relative">
                                <img
                                    src={IMAGES.Image3}
                                    alt="Video editing timeline interface"
                                    className="object-cover rounded-[20px] sm:rounded-[28px] md:rounded-[35px] w-full h-[70px] sm:h-[110px] md:h-[150px] relative md:-top-[50px]"
                                />
                            </div>

                            {/* Rightmost Panel - Studio Recording Setup */}
                            <div className="col-span-1 sm:col-span-2 md:col-span-4 relative">
                                <img
                                    src={IMAGES.Image4}
                                    alt="Studio recording setup with camera and microphone"
                                    className="object-cover rounded-[20px] sm:rounded-[28px] md:rounded-[35px] w-full h-[120px] sm:h-[180px] md:h-[267px] opacity-40"
                                />
                            </div>
                        </div>
                        {/* Central Text Content */}
                        <div className="text-center z-20 relative max-w-[95vw] sm:max-w-[750px] mx-auto">
                            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl font-bold uppercase text-white leading-tight mb-4 sm:mb-8 lg:mb-12">
                                <span className="bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent italic">Start today</span> <span className="font-light">and get</span> your first video session in less
                                <br className="hidden md:block" />
                                Than <span className="bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent">10 days!</span>
                            </h1>
                        </div>
                        {/* Responsive Image Grid - Asymmetrical Layout */}
                        <div className="relative grid grid-cols-2 sm:grid-cols-4 md:grid-cols-12 gap-4 sm:gap-8 md:gap-14 items-end max-w-full sm:max-w-3xl md:max-w-5xl mx-auto">
                            {/* Top-Left Panel - Professional Video Camera */}
                            <div className="col-span-1 sm:col-span-1 md:col-span-3 relative">
                                <img
                                    src={IMAGES.Image1}
                                    alt="Professional video camera in action"
                                    className="object-cover rounded-[20px] sm:rounded-[28px] md:rounded-[35px] w-full h-[90px] sm:h-[140px] md:h-[220px] opacity-40 relative md:-top-[50px]"
                                />
                            </div>

                            {/* Middle-Right Panel - Photographer with DSLR */}
                            <div className="col-span-1 sm:col-span-1 md:col-span-3 relative">
                                <img
                                    src={IMAGES.Image2}
                                    alt="Photographer with DSLR camera"
                                    className="object-cover rounded-[20px] sm:rounded-[28px] md:rounded-[35px] w-full h-[40px] sm:h-[70px] md:h-[100px] opacity-70"
                                />
                            </div>

                            {/* Bottom-Middle Panel - Video Editing Timeline */}
                            <div className="hidden sm:block col-span-1 md:col-span-3 relative">
                                <img
                                    src={IMAGES.Image3}
                                    alt="Video editing timeline interface"
                                    className="object-cover rounded-[20px] sm:rounded-[28px] md:rounded-[35px] w-full h-[60px] sm:h-[110px] md:h-[170px] relative"
                                />
                            </div>

                            {/* Rightmost Panel - Studio Recording Setup */}
                            <div className="col-span-1 sm:col-span-1 md:col-span-3 relative">
                                <img
                                    src={IMAGES.Image4}
                                    alt="Studio recording setup with camera and microphone"
                                    className="object-cover rounded-[20px] sm:rounded-[28px] md:rounded-[35px] w-full h-[90px] sm:h-[140px] md:h-[220px] opacity-40 relative md:-top-[50px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default StartTodaySection;