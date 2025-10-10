import { useState, useEffect, useRef } from "react";

interface UseCounterAnimationProps {
  targetValue: number;
  duration?: number;
  startValue?: number;
  isVisible?: boolean;
}

export const useCounterAnimation = ({
  targetValue,
  duration = 2000,
  startValue = 0,
  isVisible = true,
}: UseCounterAnimationProps) => {
  const [currentValue, setCurrentValue] = useState(startValue);
  const [hasAnimated, setHasAnimated] = useState(false);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!isVisible || hasAnimated) return;

    const startTime = Date.now();
    const difference = targetValue - startValue;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const newValue = startValue + difference * easeOutQuart;

      setCurrentValue(Math.floor(newValue));

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCurrentValue(targetValue);
        setHasAnimated(true);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [targetValue, duration, startValue, isVisible, hasAnimated]);

  return currentValue;
};
