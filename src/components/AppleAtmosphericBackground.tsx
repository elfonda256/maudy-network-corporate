import React, { useEffect, useRef } from 'react';

export const AppleAtmosphericBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mousePosRef = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const isMobile = width < 768;

    let mouseX = width / 2;
    let mouseY = height / 3;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', handleResize, { passive: true });
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    // Adaptive Particle Count: 18 on mobile, 36 on desktop
    const particleCount = isMobile ? 18 : 36;
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      targetAlpha: number;
      baseColor: string;
    }[] = [];

    const colors = [
      'rgba(41, 151, 255,', // Apple electric blue
      'rgba(255, 255, 255,', // Crisp white
      'rgba(56, 189, 248,',  // Sky cyan
      'rgba(99, 102, 241,',  // Deep indigo
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 1.5 + 0.8,
        alpha: Math.random() * 0.35 + 0.15,
        targetAlpha: Math.random() * 0.45 + 0.15,
        baseColor: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Performance throttler: cap at ~35-40 FPS
    const targetFpsInterval = 1000 / 36;
    let lastDrawTime = 0;
    const maxConnectionDistance = isMobile ? 90 : 125;

    const render = (currentTime: number) => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const elapsed = currentTime - lastDrawTime;
      if (elapsed < targetFpsInterval) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }
      lastDrawTime = currentTime - (elapsed % targetFpsInterval);

      ctx.clearRect(0, 0, width, height);

      const curMouse = mousePosRef.current;
      if (curMouse.x > 0) {
        mouseX += (curMouse.x - mouseX) * 0.08;
        mouseY += (curMouse.y - mouseY) * 0.08;
      }

      // Render subtle connection lines
      ctx.lineWidth = 0.65;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectionDistance) {
            const opacity = (1 - dist / maxConnectionDistance) * 0.08;
            ctx.strokeStyle = `rgba(41, 151, 255, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        // Proximity interaction with cursor
        if (curMouse.x > 0) {
          const mdx = particles[i].x - mouseX;
          const mdy = particles[i].y - mouseY;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist < 140) {
            const mOpacity = (1 - mDist / 140) * 0.12;
            ctx.strokeStyle = `rgba(41, 151, 255, ${mOpacity})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouseX, mouseY);
            ctx.stroke();
          }
        }
      }

      // Render particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = `${p.baseColor} ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#07090E]">
      {/* 1. Silky Apple Ambient Diffused Mesh Gradients (GPU Pre-Rasterized, Zero Heat) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-45"
        style={{
          backgroundImage: `
            radial-gradient(circle 600px at 50% 10%, rgba(0, 113, 227, 0.35), transparent 75%),
            radial-gradient(circle 500px at 85% 45%, rgba(14, 165, 233, 0.22), transparent 75%),
            radial-gradient(circle 550px at 15% 75%, rgba(99, 102, 241, 0.2), transparent 70%)
          `
        }}
      />

      {/* 2. Micro Dot Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="apple-grid-pattern" width="48" height="48" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.85" fill="rgba(255, 255, 255, 0.3)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#apple-grid-pattern)" />
      </svg>

      {/* 3. Optimized Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-50" />

      {/* 4. Apple Vignette Radial Fade */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 45%, transparent 40%, rgba(7, 9, 14, 0.85) 100%)'
        }}
      />
    </div>
  );
};
