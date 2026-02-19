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
      orbitRadius: number;
      orbitSpeed: number;
      orbitAngle: number;
      baseX: number;
      baseY: number;
      color: string;
      glowColor: string;
      opacity: number;
      pulsePhase: number;
      hasRings: boolean;
      ringColor: string;
      detailLevel: number;

      constructor() {
        this.radius = Math.random() * 40 + 20;
        this.baseX = Math.random() * canvas.width;
        this.baseY = Math.random() * canvas.height;
        this.x = this.baseX;
        this.y = this.baseY;
        this.orbitRadius = Math.random() * 100 + 50;
        this.orbitSpeed = (Math.random() - 0.5) * 0.005;
        this.orbitAngle = Math.random() * Math.PI * 2;
        this.opacity = Math.random() * 0.2 + 0.1;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.hasRings = Math.random() > 0.7;
        this.detailLevel = Math.random() * 0.5 + 0.5;

        const colors = [
          { main: '#2D3748', glow: '#4A5568' },
          { main: '#4A5568', glow: '#718096' },
          { main: '#2B6CB0', glow: '#4299E1' },
          { main: '#455A64', glow: '#607D8B' },
          { main: '#2E3A59', glow: '#4C51BF' },
          { main: '#312E81', glow: '#4338CA' }
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        this.color = color.main;
        this.glowColor = color.glow;
        this.ringColor = `rgba(${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 150 + 100)}, 0.3)`;
      }

      update() {
        this.orbitAngle += this.orbitSpeed;
        this.x = this.baseX + Math.cos(this.orbitAngle) * this.orbitRadius;
        this.y = this.baseY + Math.sin(this.orbitAngle) * this.orbitRadius;
        this.pulsePhase += 0.01;

        if (this.x < -this.radius * 2) this.baseX = canvas.width + this.radius * 2;
        if (this.x > canvas.width + this.radius * 2) this.baseX = -this.radius * 2;
        if (this.y < -this.radius * 2) this.baseY = canvas.height + this.radius * 2;
        if (this.y > canvas.height + this.radius * 2) this.baseY = -this.radius * 2;
      }

      draw() {
        const pulse = Math.sin(this.pulsePhase) * 0.05 + 1;
        const currentRadius = this.radius * pulse;

        ctx.save();

        // Create glow
        const glowGradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, currentRadius * 3);
        glowGradient.addColorStop(0, this.glowColor + '30');
        glowGradient.addColorStop(0.5, this.glowColor + '10');
        glowGradient.addColorStop(1, this.glowColor + '00');

        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentRadius * 3, 0, Math.PI * 2);
        ctx.fill();

        // Create planet gradient
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, currentRadius);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(0.5, this.color + '80');
        gradient.addColorStop(1, this.color + '40');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();

        // Add surface details
        if (this.detailLevel > 0.3) {
          ctx.fillStyle = this.color + '40';
          for (let i = 0; i < 10; i++) {
            const detailRadius = Math.random() * currentRadius * 0.8;
            const detailX = this.x + (Math.random() - 0.5) * currentRadius * 1.6;
            const detailY = this.y + (Math.random() - 0.5) * currentRadius * 1.6;
            ctx.beginPath();
            ctx.arc(detailX, detailY, detailRadius * 0.2, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        // Add rings if applicable
        if (this.hasRings) {
          ctx.fillStyle = this.ringColor;
          ctx.beginPath();
          ctx.ellipse(this.x, this.y, currentRadius * 1.8, currentRadius * 0.6, Math.PI / 4, 0, Math.PI * 2);
          ctx.fill();

          // Add inner ring
          ctx.fillStyle = this.ringColor + '80';
          ctx.beginPath();
          ctx.ellipse(this.x, this.y, currentRadius * 1.4, currentRadius * 0.4, Math.PI / 4, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }
    }

    // Create stars and planets
    const stars: Star[] = [];
    const planets: Planet[] = [];
    const starCount = Math.floor(canvas.width * canvas.height / 8000);
    const planetCount = Math.floor(Math.random() * 2) + 2;

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