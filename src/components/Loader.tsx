import React from 'react';

interface LoaderProps {
    isLoading: boolean;
    children?: React.ReactNode;
    message?: string;
    overlay?: boolean;
    size?: 'small' | 'medium' | 'large';
}

const Loader: React.FC<LoaderProps> = ({
    isLoading,
    children,
    overlay = true,
    size = 'medium'
}) => {
    if (!isLoading) {
        return <>{children}</>;
    }

    const sizeClasses = {
        small: 'w-6 h-6',
        medium: 'w-9 h-9',
        large: 'w-12 h-12'
    };

    const spinnerSizeClasses = {
        small: 'spinner-sm',
        medium: 'spinner',
        large: 'spinner-lg'
    };

    const LoaderContent = () => (
        <div className="flex flex-col items-center justify-center space-y-4" >
            {/* Spinner */}
            <div className={`${spinnerSizeClasses[size]} ${sizeClasses[size]}`}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );

    if (overlay) {
        return (
            <div className="fixed inset-0  z-50 flex items-center justify-center" style={{ backgroundColor: '#1A1819' }}>
                <LoaderContent />
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center p-8" style={{ backgroundColor: '#1A1819' }}>
            <LoaderContent />
        </div>
    );
};

export default Loader;
