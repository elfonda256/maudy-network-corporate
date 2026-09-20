import React, { useEffect, useRef } from 'react';

export const AppleAtmosphericBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 3;
    let targetMouseX = width / 2;
    let targetMouseY = height / 3;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Particle nodes for Apple-style subtle data constellation
    const particleCount = Math.min(Math.floor((width * height) / 22000), 65);
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
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.6 + 0.8,
        alpha: Math.random() * 0.4 + 0.15,
        targetAlpha: Math.random() * 0.5 + 0.15,
        baseColor: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Render subtle connection lines
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        // Connect to neighboring particles
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const opacity = (1 - dist / 140) * 0.09;
            ctx.strokeStyle = `rgba(41, 151, 255, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        // Proximity interaction with cursor
        const mdx = particles[i].x - mouseX;
        const mdy = particles[i].y - mouseY;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 180) {
          const mOpacity = (1 - mDist / 180) * 0.15;
          ctx.strokeStyle = `rgba(41, 151, 255, ${mOpacity})`;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();

          // Subtle gentle repulsion from cursor
          particles[i].x += (mdx / mDist) * 0.4;
          particles[i].y += (mdy / mDist) * 0.4;
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

        // Gentle breathing alpha
        p.alpha += (p.targetAlpha - p.alpha) * 0.02;
        if (Math.abs(p.targetAlpha - p.alpha) < 0.03) {
          p.targetAlpha = Math.random() * 0.4 + 0.15;
        }

        ctx.fillStyle = `${p.baseColor} ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#07090E]">
      {/* 1. Silky Apple Ambient Diffused Mesh Gradients */}
      <div 
        className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[1100px] h-[750px] rounded-full opacity-40 blur-[190px] pointer-events-none animate-pulseGlow"
        style={{
          background: 'radial-gradient(circle, rgba(0, 113, 227, 0.45) 0%, rgba(41, 151, 255, 0.18) 45%, transparent 75%)',
        }}
      />
      <div 
        className="absolute top-[30%] -left-[12%] w-[850px] h-[850px] rounded-full opacity-25 blur-[220px] pointer-events-none animate-floatSlow"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.35) 0%, rgba(3, 105, 161, 0.12) 55%, transparent 80%)'
        }}
      />
      <div 
        className="absolute top-[65%] -right-[12%] w-[900px] h-[900px] rounded-full opacity-25 blur-[220px] pointer-events-none animate-floatSlow"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.32) 0%, rgba(29, 78, 216, 0.12) 55%, transparent 80%)',
          animationDelay: '-2.5s'
        }}
      />
      <div 
        className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] rounded-full opacity-20 blur-[200px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, rgba(15, 23, 42, 0) 70%)'
        }}
      />

      {/* 2. Micro Dot Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="apple-grid-pattern" width="48" height="48" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.85" fill="rgba(255, 255, 255, 0.35)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#apple-grid-pattern)" />
      </svg>

      {/* 3. Interactive Subtle Animated Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-55" />

      {/* 4. Apple Vignette Radial Fade */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 45%, transparent 35%, rgba(0, 0, 0, 0.85) 100%)'
        }}
      />
    </div>
  );
};
