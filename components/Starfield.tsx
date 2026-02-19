import React, { useEffect, useRef } from 'react';

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star class
    class Star {
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speed = Math.random() * 0.5 + 0.1;
        this.opacity = Math.random() * 0.8 + 0.2;
        this.color = `rgba(255, 255, 255, ${this.opacity})`;
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Planet class
    class Planet {
      x: number;
      y: number;
      radius: number;
      speedX: number;
      speedY: number;
      color: string;
      glowColor: string;
      opacity: number;
      pulsePhase: number;

      constructor() {
        this.radius = Math.random() * 15 + 8;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speedX = (Math.random() - 0.5) * 0.15;
        this.speedY = (Math.random() - 0.5) * 0.15;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.pulsePhase = Math.random() * Math.PI * 2;

        const colors = [
          { main: '#6366F1', glow: '#818CF8' },
          { main: '#8B5CF6', glow: '#A78BFA' },
          { main: '#EC4899', glow: '#F472B6' },
          { main: '#06B6D4', glow: '#22D3EE' },
          { main: '#10B981', glow: '#34D399' },
          { main: '#F59E0B', glow: '#FBBF24' }
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        this.color = color.main;
        this.glowColor = color.glow;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.pulsePhase += 0.02;

        if (this.x < -this.radius * 2) this.x = canvas.width + this.radius * 2;
        if (this.x > canvas.width + this.radius * 2) this.x = -this.radius * 2;
        if (this.y < -this.radius * 2) this.y = canvas.height + this.radius * 2;
        if (this.y > canvas.height + this.radius * 2) this.y = -this.radius * 2;
      }

      draw() {
        const pulse = Math.sin(this.pulsePhase) * 0.1 + 0.9;
        const currentRadius = this.radius * pulse;

        ctx.save();

        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, currentRadius);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(0.4, this.color + '80');
        gradient.addColorStop(1, this.color + '00');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();

        const glowGradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, currentRadius * 3);
        glowGradient.addColorStop(0, this.glowColor + '30');
        glowGradient.addColorStop(0.5, this.glowColor + '10');
        glowGradient.addColorStop(1, this.glowColor + '00');

        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentRadius * 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    }

    // Create stars and planets
    const stars: Star[] = [];
    const planets: Planet[] = [];
    const starCount = Math.floor(canvas.width * canvas.height / 8000);
    const planetCount = Math.floor(Math.random() * 2) + 1;

    for (let i = 0; i < starCount; i++) {
      stars.push(new Star());
    }

    for (let i = 0; i < planetCount; i++) {
      planets.push(new Planet());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        star.update();
        star.draw();
      });

      planets.forEach(planet => {
        planet.update();
        planet.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default Starfield;