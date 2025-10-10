import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
        const baseClasses = "cursor-pointer font-ubuntu transition-colors duration-200 text-sm rounded-full";

        const sizeClasses = {
            sm: "px-3 py-2 text-xs",
            md: "px-3 py-3 text-sm",
            lg: "px-4 py-4 text-base"
        };

        const variantClasses = {
            primary: "bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] text-black hover:from-[#E0E23B] hover:to-[#B0E63B] hover:bg-gradient-to-l hover:text-white",
            outline: "w-full cursor-pointer font-ubuntu sm:w-auto bg-transparent text-white transition-colors duration-200 text-sm mb-2 rounded-full border-2 hover:bg-gradient-to-r hover:from-[#B0E63B] hover:via-[#E0E23B] hover:to-[#E0E23B] hover:text-white"
        };

        const outlineStyle = variant === 'outline' ? {
            backgroundImage: 'linear-gradient(#000, #000), linear-gradient(to right, #B0E63B, #E0E23B)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'content-box, border-box',
        } : {};

        return (
            <button
                ref={ref}
                className={cn(
                    baseClasses,
                    sizeClasses[size],
                    variantClasses[variant],
                    className
                )}
                style={outlineStyle}
                {...props}
            >
                {/* {children} */}
                <span className='p-3 block'>LEARN MORE</span>
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
