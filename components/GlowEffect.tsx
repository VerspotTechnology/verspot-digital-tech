import React, { useEffect, useRef, useMemo } from 'react';

interface GlowEffectProps {
  color?: 'blue' | 'purple' | 'pink' | 'cyan' | 'orange' | 'green' | 'mixed' | 'white';
  intensity?: 'subtle' | 'medium' | 'strong';
  animated?: boolean;
}

const colorSchemes = {
  blue: {
    colors: ['rgba(59, 130, 246, 0.4)', 'rgba(99, 102, 241, 0.3)', 'rgba(14, 165, 233, 0.2)'],
    shadow: 'rgba(59, 130, 246, 0.15)'
  },
  purple: {
    colors: ['rgba(139, 92, 246, 0.4)', 'rgba(168, 85, 247, 0.3)', 'rgba(192, 132, 252, 0.2)'],
    shadow: 'rgba(139, 92, 246, 0.15)'
  },
  pink: {
    colors: ['rgba(236, 72, 153, 0.4)', 'rgba(219, 39, 119, 0.3)', 'rgba(244, 114, 182, 0.2)'],
    shadow: 'rgba(236, 72, 153, 0.15)'
  },
  cyan: {
    colors: ['rgba(6, 182, 212, 0.4)', 'rgba(8, 145, 178, 0.3)', 'rgba(34, 211, 238, 0.2)'],
    shadow: 'rgba(6, 182, 212, 0.15)'
  },
  orange: {
    colors: ['rgba(245, 158, 11, 0.4)', 'rgba(217, 119, 6, 0.3)', 'rgba(251, 191, 36, 0.2)'],
    shadow: 'rgba(245, 158, 11, 0.15)'
  },
  green: {
    colors: ['rgba(16, 185, 129, 0.4)', 'rgba(5, 150, 105, 0.3)', 'rgba(52, 211, 153, 0.2)'],
    shadow: 'rgba(16, 185, 129, 0.15)'
  },
  mixed: {
    colors: ['rgba(59, 130, 246, 0.35)', 'rgba(139, 92, 246, 0.3)', 'rgba(236, 72, 153, 0.25)'],
    shadow: 'rgba(99, 102, 241, 0.15)'
  },
  white: {
    colors: ['rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0.4)', 'rgba(255, 255, 255, 0.3)'],
    shadow: 'rgba(255, 255, 255, 0.2)'
  }
};

const intensitySettings = {
  subtle: { blur: 80, scale: 1.3, opacity: 0.6 },
  medium: { blur: 60, scale: 1.5, opacity: 0.8 },
  strong: { blur: 40, scale: 1.7, opacity: 1 }
};

const GlowEffect: React.FC<GlowEffectProps> = ({
  color = 'blue',
  intensity = 'medium',
  animated = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scheme = colorSchemes[color];
  const settings = intensitySettings[intensity];

  const orbs = useMemo(() => [
    { size: '50%', x: '15%', y: '10%', delay: 0, duration: 12 },
    { size: '40%', x: '60%', y: '50%', delay: -3, duration: 10 },
    { size: '35%', x: '25%', y: '60%', delay: -6, duration: 14 }
  ], []);

  useEffect(() => {
    if (!animated || !containerRef.current) return;

    let frameId: number;
    let time = 0;

    const animate = () => {
      time += 0.003;
      const orbs = containerRef.current?.querySelectorAll('.glow-orb');
      
      orbs?.forEach((orb, i) => {
        const el = orb as HTMLElement;
        const offsetX = Math.sin(time * (0.5 + i * 0.2)) * 15;
        const offsetY = Math.cos(time * (0.4 + i * 0.15)) * 12;
        const scale = 1 + Math.sin(time * 0.8 + i) * 0.08;
        el.style.transform = `translate(${offsetX}%, ${offsetY}%) scale(${scale})`;
      });

      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(frameId);
  }, [animated]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden rounded-inherit pointer-events-none"
      style={{
        filter: `blur(${settings.blur}px)`,
        transform: `scale(${settings.scale})`,
        zIndex: -1,
        opacity: settings.opacity
      }}
    >
      {orbs.map((orb, i) => (
        <div
          key={i}
          className="glow-orb absolute transition-transform duration-700 ease-out"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${scheme.colors[i]} 0%, transparent 70%)`,
            animation: animated ? `pulse ${orb.duration}s ease-in-out infinite` : 'none',
            animationDelay: `${orb.delay}s`
          }}
        />
      ))}
    </div>
  );
};

export default GlowEffect;
