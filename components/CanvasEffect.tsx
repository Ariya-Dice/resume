// components/CanvasEffect.tsx

"use client";

import { useRef, useEffect } from 'react';

// تابع کمکی برای تولید رنگ رندوم (RGBA)
const getRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgba(${r}, ${g}, ${b}, 0.8)`;
};

// کلاس Particle در بیرون از کامپوننت تعریف می‌شود
class Particle {
    x: number;
    y: number;
    size: number;
    vx: number; // velocity in X axis
    vy: number; // velocity in Y axis
    history: { x: number; y: number }[];
    timer: number;
    angleChangeInterval: number;
    color: string;

    // --- تنظیمات سرعت ---
    static readonly INITIAL_SPEED = 2; // سرعت اولیه را کاهش دادیم (مثلاً از 4 به 2)
    static readonly MAX_SPEED = 50;      // حداکثر سرعت را محدود می‌کنیم
    static readonly SPEED_BOOST_FACTOR = 0.2; // فاکتور افزایش سرعت هنگام تغییر جهت

    constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = 5;
        
        const angle = Math.random() * Math.PI * 2;
        this.vx = Math.cos(angle) * Particle.INITIAL_SPEED;
        this.vy = Math.sin(angle) * Particle.INITIAL_SPEED;

        this.history = [];
        this.timer = 0;
        this.angleChangeInterval = Math.random() * 80 + 50;
        this.color = getRandomColor();
    }

    update(canvasWidth: number, canvasHeight: number) {
        this.x += this.vx;
        this.y += this.vy;

        // Boundary collision
        if (this.x < 0 || this.x > canvasWidth) this.vx *= -1;
        if (this.y < 0 || this.y > canvasHeight) this.vy *= -1;

        // Store path for trail
        this.history.push({ x: this.x, y: this.y });
        if (this.history.length > 60) {
            this.history.shift();
        }
        
        // Random direction change
        this.timer++;
        if (this.timer >= this.angleChangeInterval) {
            const angles = [Math.PI / 4, -Math.PI / 4, Math.PI / 2, -Math.PI / 2, Math.PI];
            const angleChange = angles[Math.floor(Math.random() * angles.length)];
            
            const currentAngle = Math.atan2(this.vy, this.vx);
            const newAngle = currentAngle + angleChange;
            
            let newSpeed = Math.sqrt(this.vx**2 + this.vy**2) * (1 + Particle.SPEED_BOOST_FACTOR * Math.random());
            
            // **اعمال محدودیت حداکثر سرعت**
            if (newSpeed > Particle.MAX_SPEED) {
                newSpeed = Particle.MAX_SPEED;
            } else if (newSpeed < Particle.INITIAL_SPEED / 2) { // حداقل سرعت برای جلوگیری از توقف کامل
                newSpeed = Particle.INITIAL_SPEED / 2;
            }
            
            this.vx = Math.cos(newAngle) * newSpeed;
            this.vy = Math.sin(newAngle) * newSpeed;
            
            this.timer = 0;
            this.angleChangeInterval = Math.random() * 80 + 50;
        }
    }

    draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        if (this.history.length > 1) { 
            context.moveTo(this.history[0].x, this.history[0].y);
            for (let i = 1; i < this.history.length; i++) {
                const alpha = 0.5 * (i / this.history.length); 
                context.strokeStyle = `${this.color.slice(0, -4)}${alpha})`;
                context.lineTo(this.history[i].x, this.history[i].y);
            }
            context.lineWidth = 2;
            context.stroke();
        }
        
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();

        context.shadowBlur = 20;
        context.shadowColor = `${this.color.slice(0, -4)}0.5)`;
        context.fill();
        context.shadowBlur = 0;
    }
}

const CanvasEffect = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const particleRef = useRef<Particle | null>(null); 
    const animationFrameId = useRef<number | null>(null); 

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        if (!particleRef.current) {
            particleRef.current = new Particle(canvas.width, canvas.height);
        }

        let lastColorUpdateTime = performance.now();
        const COLOR_CHANGE_INTERVAL = 2000;

        const animate = (currentTime: number) => {
            const particle = particleRef.current;
            
            if (!particle) {
                if (animationFrameId.current) {
                    cancelAnimationFrame(animationFrameId.current);
                    animationFrameId.current = null;
                }
                return;
            }

            ctx.fillStyle = 'rgba(26, 32, 44, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particle.update(canvas.width, canvas.height);
            particle.draw(ctx);
            
            if (currentTime - lastColorUpdateTime > COLOR_CHANGE_INTERVAL) {
                particle.color = getRandomColor();
                lastColorUpdateTime = currentTime;
            }

            animationFrameId.current = requestAnimationFrame(animate); 
        };

        animationFrameId.current = requestAnimationFrame(animate); 

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            if (particleRef.current) {
                // Adjust position to stay within bounds after resize
                particleRef.current.x = Math.min(Math.max(0, particleRef.current.x), canvas.width - particleRef.current.size);
                particleRef.current.y = Math.min(Math.max(0, particleRef.current.y), canvas.height - particleRef.current.size);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
                animationFrameId.current = null;
            }
            particleRef.current = null;
        };

    }, []);

    return <canvas ref={canvasRef} id="effect-canvas" style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default CanvasEffect;