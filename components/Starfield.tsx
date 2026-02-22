import React, { useEffect, useRef } from 'react';

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const flashColors = [
      { r: 59, g: 130, b: 246 },
      { r: 139, g: 92, b: 246 },
      { r: 236, g: 72, b: 153 },
      { r: 6, g: 182, b: 212 },
      { r: 16, g: 185, b: 129 },
      { r: 245, g: 158, b: 11 },
    ];

    class Star {
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      baseOpacity: number;
      color: string;
      flashColor: { r: number; g: number; b: number } | null;
      flashProgress: number;
      flashDuration: number;
      flashStartTime: number;
      twinkleSpeed: number;
      twinklePhase: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.5 + 0.5;
        this.speed = Math.random() * 0.3 + 0.05;
        this.baseOpacity = Math.random() * 0.6 + 0.2;
        this.opacity = this.baseOpacity;
        this.color = `rgba(255, 255, 255, ${this.opacity})`;
        this.flashColor = null;
        this.flashProgress = 0;
        this.flashDuration = 0;
        this.flashStartTime = 0;
        this.twinkleSpeed = Math.random() * 0.02 + 0.01;
        this.twinklePhase = Math.random() * Math.PI * 2;
      }

      triggerFlash() {
        this.flashColor = flashColors[Math.floor(Math.random() * flashColors.length)];
        this.flashDuration = Math.random() * 1000 + 500;
        this.flashStartTime = Date.now();
        this.flashProgress = 0;
      }

      update(time: number) {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
        }

        this.twinklePhase += this.twinkleSpeed;
        const twinkle = Math.sin(this.twinklePhase) * 0.3 + 0.7;
        this.opacity = this.baseOpacity * twinkle;

        if (this.flashColor) {
          const elapsed = Date.now() - this.flashStartTime;
          this.flashProgress = elapsed / this.flashDuration;
          
          if (this.flashProgress >= 1) {
            this.flashColor = null;
            this.flashProgress = 0;
          }
        }

        if (!this.flashColor && Math.random() < 0.0001) {
          this.triggerFlash();
        }
      }

      draw() {
        let r = 255, g = 255, b = 255;
        let finalOpacity = this.opacity;

        if (this.flashColor && this.flashProgress < 1) {
          const flashIntensity = Math.sin(this.flashProgress * Math.PI);
          r = Math.round(255 + (this.flashColor.r - 255) * flashIntensity);
          g = Math.round(255 + (this.flashColor.g - 255) * flashIntensity);
          b = Math.round(255 + (this.flashColor.b - 255) * flashIntensity);
          finalOpacity = this.opacity + (1 - this.opacity) * flashIntensity * 0.8;
          
          const glowSize = this.size * (1 + flashIntensity * 3);
          const gradient = ctx.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, glowSize * 4
          );
          gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${flashIntensity * 0.8})`);
          gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${flashIntensity * 0.3})`);
          gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(this.x, this.y, glowSize * 4, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${finalOpacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class Nebula {
      x: number;
      y: number;
      size: number;
      color: { r: number; g: number; b: number };
      opacity: number;
      phase: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 300 + 100;
        this.color = flashColors[Math.floor(Math.random() * flashColors.length)];
        this.opacity = Math.random() * 0.03 + 0.01;
        this.phase = Math.random() * Math.PI * 2;
      }

      update() {
        this.phase += 0.001;
      }

      draw() {
        const pulse = Math.sin(this.phase) * 0.3 + 0.7;
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size
        );
        gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity * pulse})`);
        gradient.addColorStop(0.5, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity * pulse * 0.5})`);
        gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class ShootingStar {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      opacity: number;
      active: boolean;
      trail: { x: number; y: number; opacity: number }[];

      constructor() {
        this.active = false;
        this.trail = [];
      }

      activate() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height * 0.3;
        this.length = Math.random() * 100 + 50;
        this.speed = Math.random() * 15 + 10;
        this.angle = Math.PI / 4 + Math.random() * 0.3;
        this.opacity = 1;
        this.active = true;
        this.trail = [];
      }

      update() {
        if (!this.active) return;

        this.trail.unshift({ x: this.x, y: this.y, opacity: this.opacity });
        if (this.trail.length > 20) this.trail.pop();

        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.opacity -= 0.02;

        if (this.opacity <= 0 || this.x > canvas.width || this.y > canvas.height) {
          this.active = false;
        }
      }

      draw() {
        if (!this.active) return;

        this.trail.forEach((point, i) => {
          const trailOpacity = point.opacity * (1 - i / this.trail.length) * 0.5;
          ctx.fillStyle = `rgba(255, 255, 255, ${trailOpacity})`;
          ctx.beginPath();
          ctx.arc(point.x, point.y, 1, 0, Math.PI * 2);
          ctx.fill();
        });

        const gradient = ctx.createLinearGradient(
          this.x, this.y,
          this.x - Math.cos(this.angle) * this.length,
          this.y - Math.sin(this.angle) * this.length
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(
          this.x - Math.cos(this.angle) * this.length,
          this.y - Math.sin(this.angle) * this.length
        );
        ctx.stroke();
      }
    }

    const stars: Star[] = [];
    const nebulas: Nebula[] = [];
    const shootingStars: ShootingStar[] = [];
    
    const starCount = Math.floor(canvas.width * canvas.height / 3000);
    const nebulaCount = 5;
    const shootingStarCount = 3;

    for (let i = 0; i < starCount; i++) {
      stars.push(new Star());
    }

    for (let i = 0; i < nebulaCount; i++) {
      nebulas.push(new Nebula());
    }

    for (let i = 0; i < shootingStarCount; i++) {
      shootingStars.push(new ShootingStar());
    }

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      nebulas.forEach(nebula => {
        nebula.update();
        nebula.draw();
      });

      stars.forEach(star => {
        star.update(time);
        star.draw();
      });

      shootingStars.forEach(star => {
        if (!star.active && Math.random() < 0.001) {
          star.activate();
        }
        star.update();
        star.draw();
      });

      time++;
      requestAnimationFrame(animate);
    };

    animate();

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
