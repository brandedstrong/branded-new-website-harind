import React from 'react';
import clsx from 'clsx';

interface OutlineButtonProps {
    title: string;
    onClick: () => void;
    className?: string;
    titleclassName?: string;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({ title, onClick, className, titleclassName }) => {
    return (
        <button
            onClick={onClick}
            className={clsx(
                "w-full cursor-pointer font-ubuntu sm:w-auto bg-transparent text-white transition-colors duration-200 text-sm mb-2 rounded-full border-2 hover:bg-gradient-to-r hover:from-[#B0E63B] hover:via-[#E0E23B] hover:to-[#E0E23B] hover:text-white",
                className
            )}
            style={{
                border: '2px solid transparent',
                borderRadius: '9999px',
                backgroundImage: 'linear-gradient(#000, #000), linear-gradient(to right, #B0E63B, #E0E23B)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'content-box, border-box',
                width: '100%'
            }}
        >
            <span className={clsx("p-3 block", titleclassName)}>{title}</span>
        </button>
    );
};

export default OutlineButton;