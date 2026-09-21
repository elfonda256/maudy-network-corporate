import React, { useEffect, useRef } from 'react';

interface NodeParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  colorType: 'cyan' | 'indigo' | 'blue';
}

interface PulsePacket {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  color: string;
}

export const AtmosphericBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mousePosRef = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });

  useEffect(() => {
    let animationFrameId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const isMobile = width < 768;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Track mouse coordinates in ref (ZERO React re-renders!)
    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mousePosRef.current = { x: -1000, y: -1000 };
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      window.addEventListener('mouseout', handleMouseLeave, { passive: true });
    }

    // Adaptive Node Count: 16 on mobile (saves battery & heat), 38 on desktop
    const nodeCount = isMobile ? 16 : Math.min(Math.floor(width / 38), 40);
    const nodes: NodeParticle[] = [];
    const colors = ['indigo', 'blue', 'cyan'] as const;

    for (let i = 0; i < nodeCount; i++) {
      const colorType = colors[i % colors.length];
      const r = Math.random() * 1.5 + 1.2;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: r,
        baseRadius: r,
        colorType,
      });
    }

    // Synaptic Data Pulse Packets
    const pulses: PulsePacket[] = [];
    let lastPulseTime = 0;

    const spawnPulse = () => {
      if (nodes.length < 2) return;
      const from = Math.floor(Math.random() * nodes.length);
      for (let j = 0; j < nodes.length; j++) {
        if (from === j) continue;
        const dx = nodes[from].x - nodes[j].x;
        const dy = nodes[from].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130 && dist > 30) {
          pulses.push({
            fromNode: from,
            toNode: j,
            progress: 0,
            speed: 0.012 + Math.random() * 0.015,
            color: Math.random() > 0.5 ? '#0071E3' : '#2997FF',
          });
          break;
        }
      }
    };

    // Performance throttler: cap at ~35-40 FPS to keep GPU cool
    const targetFpsInterval = 1000 / 36;
    let lastDrawTime = 0;
    const maxConnectionDistance = isMobile ? 95 : 120;
    const mouseRadius = 150;

    const render = (currentTime: number) => {
      // Pause completely if tab is hidden (saves battery on laptop/phone!)
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

      // Periodically spawn AI pulse packets (capped at 6)
      if (currentTime - lastPulseTime > 700 && pulses.length < 6) {
        spawnPulse();
        lastPulseTime = currentTime;
      }

      const currentMouse = mousePosRef.current;

      // 1. Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse interaction (only if active)
        if (currentMouse.x > 0) {
          const dxMouse = currentMouse.x - node.x;
          const dyMouse = currentMouse.y - node.y;
          const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

          if (distMouse < mouseRadius) {
            node.radius = node.baseRadius * 1.5;
            const alpha = (1 - distMouse / mouseRadius) * 0.35;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(currentMouse.x, currentMouse.y);
            ctx.strokeStyle = `rgba(41, 151, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          } else {
            node.radius = node.baseRadius;
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.colorType === 'cyan' 
          ? 'rgba(0, 198, 255, 0.75)' 
          : node.colorType === 'indigo' 
          ? 'rgba(99, 102, 241, 0.8)' 
          : 'rgba(0, 113, 227, 0.85)';
        ctx.fill();

        // 2. Connect to neighboring nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectionDistance) {
            const alpha = (1 - dist / maxConnectionDistance) * 0.2;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(0, 80, 174, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // 3. Draw travelling synaptic pulse packets (No costly shadowBlur)
      for (let pIdx = pulses.length - 1; pIdx >= 0; pIdx--) {
        const p = pulses[pIdx];
        p.progress += p.speed;

        if (p.progress >= 1) {
          pulses.splice(pIdx, 1);
          continue;
        }

        const nFrom = nodes[p.fromNode];
        const nTo = nodes[p.toNode];
        if (!nFrom || !nTo) continue;

        const currentX = nFrom.x + (nTo.x - nFrom.x) * p.progress;
        const currentY = nFrom.y + (nTo.y - nFrom.y) * p.progress;

        // Outer subtle glow halo (much faster than shadowBlur)
        ctx.beginPath();
        ctx.arc(currentX, currentY, 4, 0, Math.PI * 2);
        ctx.fillStyle = p.color === '#0071E3' ? 'rgba(0, 113, 227, 0.25)' : 'rgba(41, 151, 255, 0.25)';
        ctx.fill();

        // Core bright pulse point
        ctx.beginPath();
        ctx.arc(currentX, currentY, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseout', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#07090E]">
      {/* Static GPU-Accelerated Atmospheric Lighting (Zero CPU Cost) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 65% 45% at 50% -10%, rgba(0, 113, 227, 0.35), transparent 70%),
            radial-gradient(ellipse 55% 40% at 85% 50%, rgba(0, 80, 174, 0.25), transparent 60%),
            radial-gradient(ellipse 50% 35% at 15% 75%, rgba(99, 102, 241, 0.2), transparent 50%),
            radial-gradient(ellipse 45% 30% at 70% 95%, rgba(0, 198, 255, 0.15), transparent 50%)
          `
        }}
      />

      {/* Cyber Grid & Circuit Matrix Layers */}
      <div className="absolute inset-0 tech-matrix-grid opacity-20"></div>
      <div className="absolute inset-0 tech-grid-pattern opacity-10"></div>

      {/* Optimized Interactive AI Neural Constellation Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
      />
    </div>
  );
};
