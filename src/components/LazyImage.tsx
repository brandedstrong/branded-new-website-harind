import React, { useState, useRef, useEffect } from 'react';
import SkeletonLoader from './SkeletonLoader';

interface LazyImageProps {
    src: string;
    alt: string;
    className?: string;
    width?: string | number;
    height?: string | number;
    skeletonClassName?: string;
    skeletonVariant?: 'rectangular' | 'circular' | 'text';
    onLoad?: () => void;
    onError?: () => void;
    fallbackSrc?: string;
    loading?: 'lazy' | 'eager';
    placeholder?: React.ReactNode;
}

const LazyImage: React.FC<LazyImageProps> = ({
    src,
    alt,
    className = '',
    width,
    height,
    skeletonClassName = '',
    skeletonVariant = 'rectangular',
    onLoad,
    onError,
    fallbackSrc,
    loading = 'lazy',
    placeholder
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (loading === 'eager') {
            setIsInView(true);
            return;
        }

        const imgElement = imgRef.current;
        if (!imgElement) return;

        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observerRef.current?.disconnect();
                    }
                });
            },
            {
                rootMargin: '50px 0px', // Start loading 50px before the image comes into view
                threshold: 0.1
            }
        );

        observerRef.current.observe(imgElement);

        return () => {
            observerRef.current?.disconnect();
        };
    }, [loading]);

    const handleLoad = () => {
        setIsLoaded(true);
        setIsError(false);
        onLoad?.();
    };

    const handleError = () => {
        setIsError(true);
        setIsLoaded(false);
        onError?.();
    };

    const imageSrc = isError && fallbackSrc ? fallbackSrc : src;

    return (
        <div className="relative" style={{ width, height }}>
            {/* Skeleton loader - shown while loading or if error and no fallback */}
            {(!isLoaded || (isError && !fallbackSrc)) && (
                <SkeletonLoader
                    className={`absolute inset-0 ${skeletonClassName}`}
                    variant={skeletonVariant}
                    width={width}
                    height={height}
                />
            )}

            {/* Custom placeholder */}
            {placeholder && !isLoaded && !isError && (
                <div className="absolute inset-0 flex items-center justify-center">
                    {placeholder}
                </div>
            )}

            {/* Actual image */}
            {isInView && (
                <img
                    ref={imgRef}
                    src={imageSrc}
                    alt={alt}
                    className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'
                        } ${className}`}
                    onLoad={handleLoad}
                    onError={handleError}
                    loading={loading}
                    style={{ width, height }}
                />
            )}
        </div>
    );
};

export default LazyImage;
