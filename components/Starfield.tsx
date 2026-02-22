import React, { useEffect, useRef } from 'react';

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initStars();
    };

    const starColors = [
      '#ffffff',
      '#fffaf0',
      '#f0f8ff',
      '#fff8dc',
      '#e6e6fa',
      '#b0c4de',
      '#87ceeb',
      '#add8e6',
      '#ffc0cb',
      '#dda0dd',
    ];

    interface Star {
      x: number;
      y: number;
      z: number;
      size: number;
      baseSize: number;
      color: string;
      twinkleSpeed: number;
      twinklePhase: number;
      brightness: number;
    }

    interface DistantGalaxy {
      x: number;
      y: number;
      size: number;
      rotation: number;
      brightness: number;
      arms: number;
    }

    interface Nebula {
      x: number;
      y: number;
      size: number;
      color: string;
      opacity: number;
      shape: number[];
    }

    interface ShootingStar {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      opacity: number;
      active: boolean;
      width: number;
    }

    let stars: Star[] = [];
    let galaxies: DistantGalaxy[] = [];
    let nebulae: Nebula[] = [];
    let shootingStars: ShootingStar[] = [];

    const initStars = () => {
      stars = [];
      galaxies = [];
      nebulae = [];
      shootingStars = [];

      const starCount = Math.floor((width * height) / 800);
      
      for (let i = 0; i < starCount; i++) {
        const z = Math.random();
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: z,
          baseSize: z < 0.1 ? Math.random() * 2.5 + 1.5 : 
                   z < 0.3 ? Math.random() * 1.5 + 0.8 : 
                   Math.random() * 1 + 0.3,
          size: 0,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          twinkleSpeed: Math.random() * 0.03 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
          brightness: z < 0.1 ? 0.9 + Math.random() * 0.1 : 
                      z < 0.3 ? 0.6 + Math.random() * 0.3 : 
                      0.3 + Math.random() * 0.4
        });
      }

      const galaxyCount = 3;
      for (let i = 0; i < galaxyCount; i++) {
        galaxies.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 80 + 40,
          rotation: Math.random() * Math.PI * 2,
          brightness: Math.random() * 0.15 + 0.05,
          arms: Math.floor(Math.random() * 2) + 2
        });
      }

      const nebulaCount = 4;
      const nebulaColors = [
        'rgba(100, 149, 237, 0.03)',
        'rgba(138, 43, 226, 0.025)',
        'rgba(255, 105, 180, 0.02)',
        'rgba(0, 191, 255, 0.025)',
        'rgba(50, 205, 50, 0.02)',
      ];
      
      for (let i = 0; i < nebulaCount; i++) {
        const shape: number[] = [];
        const points = 8;
        for (let j = 0; j < points; j++) {
          shape.push(0.5 + Math.random() * 0.5);
        }
        nebulae.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 400 + 200,
          color: nebulaColors[Math.floor(Math.random() * nebulaColors.length)],
          opacity: Math.random() * 0.5 + 0.5,
          shape: shape
        });
      }

      for (let i = 0; i < 2; i++) {
        shootingStars.push({
          x: 0,
          y: 0,
          length: 0,
          speed: 0,
          angle: 0,
          opacity: 0,
          active: false,
          width: 0
        });
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const drawNebula = (nebula: Nebula) => {
      ctx.save();
      ctx.translate(nebula.x, nebula.y);
      
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, nebula.size);
      gradient.addColorStop(0, nebula.color);
      gradient.addColorStop(0.5, nebula.color.replace(/[\d.]+\)$/, `${parseFloat(nebula.color.match(/[\d.]+\)$/)?.[0] || '0.02') * 0.5})`));
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      
      const points = nebula.shape.length;
      ctx.moveTo(nebula.size * nebula.shape[0], 0);
      for (let i = 1; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const r = nebula.size * nebula.shape[i % points];
        ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const drawGalaxy = (galaxy: DistantGalaxy) => {
      ctx.save();
      ctx.translate(galaxy.x, galaxy.y);
      ctx.rotate(galaxy.rotation);
      
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, galaxy.size);
      gradient.addColorStop(0, `rgba(255, 255, 255, ${galaxy.brightness})`);
      gradient.addColorStop(0.3, `rgba(200, 200, 255, ${galaxy.brightness * 0.5})`);
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.ellipse(0, 0, galaxy.size, galaxy.size * 0.4, 0, 0, Math.PI * 2);
      ctx.fill();
      
      for (let arm = 0; arm < galaxy.arms; arm++) {
        const armAngle = (arm / galaxy.arms) * Math.PI * 2;
        ctx.save();
        ctx.rotate(armAngle);
        
        ctx.strokeStyle = `rgba(255, 255, 255, ${galaxy.brightness * 0.3})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        
        for (let i = 0; i < 50; i++) {
          const t = i / 50;
          const r = t * galaxy.size * 0.8;
          const angle = t * Math.PI * 1.5;
          const x = Math.cos(angle) * r;
          const y = Math.sin(angle) * r * 0.3;
          
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.restore();
      }
      
      ctx.restore();
    };

    const drawStar = (star: Star, time: number) => {
      const twinkle = Math.sin(star.twinklePhase + time * star.twinkleSpeed);
      const brightness = star.brightness * (0.7 + twinkle * 0.3);
      star.size = star.baseSize * (0.8 + twinkle * 0.2);
      
      if (star.z < 0.1) {
        const glowSize = star.size * 8;
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, glowSize
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${brightness * 0.3})`);
        gradient.addColorStop(0.1, `rgba(255, 255, 255, ${brightness * 0.15})`);
        gradient.addColorStop(0.5, `rgba(200, 220, 255, ${brightness * 0.05})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, glowSize, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.strokeStyle = `rgba(255, 255, 255, ${brightness * 0.1})`;
        ctx.lineWidth = 0.5;
        const rayLength = star.size * 6;
        ctx.beginPath();
        ctx.moveTo(star.x - rayLength, star.y);
        ctx.lineTo(star.x + rayLength, star.y);
        ctx.moveTo(star.x, star.y - rayLength);
        ctx.lineTo(star.x, star.y + rayLength);
        ctx.stroke();
      }
      
      ctx.fillStyle = star.color;
      ctx.globalAlpha = brightness;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    };

    const drawShootingStar = (star: ShootingStar) => {
      if (!star.active) return;
      
      const tailX = star.x - Math.cos(star.angle) * star.length;
      const tailY = star.y - Math.sin(star.angle) * star.length;
      
      const gradient = ctx.createLinearGradient(star.x, star.y, tailX, tailY);
      gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
      gradient.addColorStop(0.3, `rgba(200, 220, 255, ${star.opacity * 0.5})`);
      gradient.addColorStop(1, 'transparent');
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = star.width;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(star.x, star.y);
      ctx.lineTo(tailX, tailY);
      ctx.stroke();
      
      const headGlow = ctx.createRadialGradient(
        star.x, star.y, 0,
        star.x, star.y, star.width * 4
      );
      headGlow.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
      headGlow.addColorStop(0.5, `rgba(200, 220, 255, ${star.opacity * 0.3})`);
      headGlow.addColorStop(1, 'transparent');
      
      ctx.fillStyle = headGlow;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.width * 4, 0, Math.PI * 2);
      ctx.fill();
    };

    const updateShootingStar = (star: ShootingStar) => {
      if (!star.active) {
        if (Math.random() < 0.0003) {
          star.x = Math.random() * width * 0.8;
          star.y = Math.random() * height * 0.3;
          star.length = Math.random() * 150 + 80;
          star.speed = Math.random() * 20 + 15;
          star.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.4;
          star.opacity = 1;
          star.width = Math.random() * 2 + 1;
          star.active = true;
        }
        return;
      }
      
      star.x += Math.cos(star.angle) * star.speed;
      star.y += Math.sin(star.angle) * star.speed;
      star.opacity -= 0.015;
      
      if (star.opacity <= 0 || star.x > width || star.y > height) {
        star.active = false;
      }
    };

    let time = 0;

    const animate = () => {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);
      
      nebulae.forEach(nebula => drawNebula(nebula));
      
      galaxies.forEach(galaxy => drawGalaxy(galaxy));
      
      stars.sort((a, b) => a.z - b.z);
      stars.forEach(star => drawStar(star, time));
      
      shootingStars.forEach(star => {
        updateShootingStar(star);
        drawShootingStar(star);
      });
      
      time++;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ background: '#000000' }}
    />
  );
};

export default Starfield;
