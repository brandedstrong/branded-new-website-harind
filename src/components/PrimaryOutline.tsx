interface PrimaryButtonProps {
    title: string
    onClick: () => void
    className?: string
}

const PrimaryButton = ({ title, onClick, className = '' }: PrimaryButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`w-full cursor-pointer font-ubuntu rounded-full sm:w-auto bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] text-black px-3 py-3 transition-colors duration-200 text-sm hover:from-[#E0E23B] hover:to-[#B0E63B] hover:bg-gradient-to-l hover:text-white ${className}`}
            style={{ width: '100%' }}
        >
            {title}
        </button>
    )
}

export default PrimaryButton