import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const StarBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const stars: HTMLElement[] = [];

    // Create stars
    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      star.className = "absolute bg-white rounded-full";

      // Random size between 1-3px
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;

      // Random opacity
      star.style.opacity = `${Math.random() * 0.8 + 0.2}`;

      container.appendChild(star);
      stars.push(star);
    }

    // Create twinkling animation
    stars.forEach((star) => {
      const duration = Math.random() * 3 + 1; // 1-4 seconds
      const delay = Math.random() * 2; // 0-2 seconds delay

      gsap.to(star, {
        opacity: Math.random() * 0.8 + 0.2,
        duration: duration,
        repeat: -1,
        yoyo: true,
        delay: delay,
        ease: "power2.inOut",
      });
    });

    // Create bubbling effect for stars
    stars.forEach((star, index) => {
      const isFloatingStar = index % 3 === 0;
      const isBubblingStar = index % 4 === 0;
      const isRotatingStar = index % 5 === 0;

      if (isFloatingStar) {
        // Enhanced floating animation with more bubbling motion
        gsap.to(star, {
          y: Math.random() * -40 - 20, // -20 to -60px
          duration: Math.random() * 4 + 3,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        });
      }

      if (isBubblingStar) {
        // Bubbling scale animation - makes stars pulsate like bubbles
        gsap.to(star, {
          scale: Math.random() * 0.5 + 1.2, // 1.2 to 1.7 scale
          duration: Math.random() * 2 + 1.5, // 1.5 to 3.5 seconds
          repeat: -1,
          yoyo: true,
          delay: Math.random() * 3,
          ease: "elastic.inOut",
        });
      }

      if (isRotatingStar) {
        // Gentle rotation for bubble-like motion
        gsap.to(star, {
          rotation: Math.random() * 360,
          duration: Math.random() * 8 + 5, // 5 to 13 seconds
          repeat: -1,
          ease: "linear",
        });
      }

      // Create rising bubble effect for some stars
      if (index % 6 === 0) {
        gsap.to(star, {
          y: -100,
          x: Math.random() * 20 - 10, // Add slight horizontal drift
          scale: 0.5,
          opacity: 0,
          duration: Math.random() * 6 + 4, // 4 to 10 seconds
          repeat: -1,
          delay: Math.random() * 8,
          ease: "power1.out",
          onComplete: () => {
            // Reset position when animation completes
            gsap.set(star, {
              y: 0,
              x: 0,
              scale: 1,
              opacity: Math.random() * 0.8 + 0.2,
            });
          },
        });
      }
    });

    // Cleanup function
    return () => {
      stars.forEach((star) => {
        if (star.parentNode) {
          star.parentNode.removeChild(star);
        }
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 top-0"
      style={{
        background: "radial-gradient(ellipse at top, #0a0a0a 0%, #000000 70%)",
      }}
    />
  );
};

export default StarBackground;
