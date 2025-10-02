import { RightChevronIcon } from "@/lib/IconSvgIcons";

const CTAButton = ({ title, className, onClick }: { title: string, className?: string, onClick?: () => void }) => {
    return (
        <div className={`flex ml-auto mr-2 ${className}`}>
            <button
                onClick={onClick}
                className={`
                                    border cursor-pointer border-white text-white 
                                px-4 py-2 sm:px-4 sm:py-2 
                                rounded-full flex items-center space-x-2 
                                transition-colors duration-200 font-medium group 
                                hover:border-[#B0E63B] hover:bg-white/10
                                text-xs sm:text-sm `}
            >
                <RightChevronIcon width={25} height={25} />
                <span
                    className="
                                    bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] 
                                    bg-clip-text text-transparent 
                                    transition-colors duration-200 
                                    group-hover:from-[#E0E23B] group-hover:to-[#B0E63B]
                                
                                "
                    style={{
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    <span>{title}</span>

                </span>
            </button>
        </div>
    )
}

export default CTAButton;