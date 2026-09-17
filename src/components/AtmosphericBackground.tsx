import React, { useState, useEffect } from 'react';

export const AtmosphericBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: -500, y: -500 });

  useEffect(() => {
    let animationFrameId: number;
    const handleMouseMove = (e: MouseEvent) => {
      animationFrameId = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* High-Tech Cyber Grid Matrix Layer */}
      <div className="absolute inset-0 tech-matrix-grid opacity-75 dark:opacity-60"></div>
      <div className="absolute inset-0 tech-grid-pattern opacity-40 dark:opacity-30"></div>

      {/* Interactive Cursor Reactive Light Glow */}
      <div
        className="absolute w-[550px] h-[550px] rounded-full transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-35 dark:opacity-25 pointer-events-none mix-blend-screen"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.2) 0%, rgba(0, 80, 174, 0.25) 45%, transparent 70%)',
        }}
      />

      {/* Floating Volumetric Radiant Orbs */}
      {/* Top Left Crimson Ambient Pulse */}
      <div className="absolute top-[8%] -left-[120px] w-[500px] h-[500px] rounded-full bg-red-600/10 dark:bg-red-600/15 blur-[120px] animate-pulse-aura"></div>

      {/* Center Right Royal Blue Luminescence */}
      <div className="absolute top-[35%] -right-[150px] w-[600px] h-[600px] rounded-full bg-blue-600/10 dark:bg-blue-600/20 blur-[140px] animate-float-slow"></div>

      {/* Bottom Left High-Tech Cyan Radiance */}
      <div className="absolute top-[65%] -left-[100px] w-[550px] h-[550px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 blur-[130px] animate-float-delayed"></div>

      {/* Deep Bottom Crimson Glow */}
      <div className="absolute bottom-[5%] right-[10%] w-[450px] h-[450px] rounded-full bg-red-600/8 dark:bg-red-600/12 blur-[110px] animate-pulse-aura"></div>

      {/* Decorative High-Tech Crosshairs along the sides */}
      <div className="hidden xl:block absolute top-[20%] left-6 text-slate-400/40 dark:text-cyan-400/20 text-xs font-mono font-bold select-none">
        + 07°00'16"S
      </div>
      <div className="hidden xl:block absolute top-[20%] right-6 text-slate-400/40 dark:text-cyan-400/20 text-xs font-mono font-bold select-none text-right">
        110°20'45"E +
      </div>
      <div className="hidden xl:block absolute top-[55%] left-6 text-slate-400/40 dark:text-red-400/20 text-xs font-mono font-bold select-none">
        + VSAT KU-BAND
      </div>
      <div className="hidden xl:block absolute top-[55%] right-6 text-slate-400/40 dark:text-red-400/20 text-xs font-mono font-bold select-none text-right">
        NOC ACTIVE +
      </div>
    </div>
  );
};
