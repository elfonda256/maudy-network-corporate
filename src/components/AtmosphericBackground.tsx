import React, { useState, useEffect, useRef } from 'react';

interface NodeParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  colorType: 'cyan' | 'red' | 'blue';
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
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: -1000, y: -1000 });

  useEffect(() => {
    let animationFrameId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Track mouse coordinates for interactive AI magnetism & synaptic connections
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      setMousePos({ x: -1000, y: -1000 });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseout', handleMouseLeave);

    // Initialize AI Neural Network Nodes
    const nodeCount = Math.min(width < 768 ? 28 : 55, 60);
    const nodes: NodeParticle[] = [];
    const colors = ['red', 'blue', 'cyan'] as const;

    for (let i = 0; i < nodeCount; i++) {
      const colorType = colors[i % colors.length];
      const r = Math.random() * 1.8 + 1.2;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
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
      // Find a near neighbor
      for (let j = 0; j < nodes.length; j++) {
        if (from === j) continue;
        const dx = nodes[from].x - nodes[j].x;
        const dy = nodes[from].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130 && dist > 20) {
          const rand = Math.random();
          const pColor = rand > 0.5 ? '#0050AE' : '#DC2626';
          pulses.push({
            fromNode: from,
            toNode: j,
            progress: 0,
            speed: 0.015 + Math.random() * 0.02,
            color: pColor,
          });
          break;
        }
      }
    };

    // Animation Render Loop
    const maxConnectionDistance = 125;
    const mouseRadius = 160;

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Periodically spawn AI tensor data pulses
      if (time - lastPulseTime > 400 && pulses.length < 12) {
        spawnPulse();
        lastPulseTime = time;
      }

      // 1. Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        // Bounce gently at screen edges
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse interaction: subtle pull / swell
        const dxMouse = mousePos.x - node.x;
        const dyMouse = mousePos.y - node.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < mouseRadius) {
          node.radius = node.baseRadius * 1.8;
          // Gentle attraction toward mouse
          node.x += (dxMouse / distMouse) * 0.4;
          node.y += (dyMouse / distMouse) * 0.4;

          // Connect directly to cursor with neural beam
          const alpha = (1 - distMouse / mouseRadius) * 0.4;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mousePos.x, mousePos.y);
          ctx.strokeStyle = node.colorType === 'red' ? `rgba(220, 38, 38, ${alpha})` : `rgba(0, 198, 255, ${alpha})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        } else {
          node.radius = node.baseRadius;
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        if (node.colorType === 'cyan') {
          ctx.fillStyle = 'rgba(0, 198, 255, 0.75)';
        } else if (node.colorType === 'red') {
          ctx.fillStyle = 'rgba(220, 38, 38, 0.8)';
        } else {
          ctx.fillStyle = 'rgba(0, 80, 174, 0.85)';
        }
        ctx.fill();

        // 2. Connect to neighboring nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectionDistance) {
            const alpha = (1 - dist / maxConnectionDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(0, 80, 174, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // 3. Draw travelling synaptic pulse packets
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

        ctx.beginPath();
        ctx.arc(currentX, currentY, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos.x, mousePos.y]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Interactive AI Neural Constellation Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-65 dark:opacity-85 pointer-events-none"
      />

      {/* Cyber Grid & Circuit Matrix Layers */}
      <div className="absolute inset-0 tech-matrix-grid opacity-55 dark:opacity-45"></div>
      <div className="absolute inset-0 tech-grid-pattern opacity-30 dark:opacity-20"></div>

      {/* Interactive Mouse Reactive Light Glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-25 dark:opacity-20 pointer-events-none mix-blend-screen"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          background: 'radial-gradient(circle, rgba(0, 80, 174, 0.2) 0%, rgba(220, 38, 38, 0.15) 45%, transparent 70%)',
        }}
      />

      {/* Floating Volumetric Radiant Orbs (Balanced, No Text-Washing) */}
      {/* 1. Top Left Crimson Red Ambient Pulse */}
      <div className="absolute top-[5%] -left-[140px] w-[500px] h-[500px] rounded-full bg-red-600/8 dark:bg-red-600/15 blur-[120px] animate-pulse-aura"></div>

      {/* 2. Center Right Deep Corporate Blue Luminescence */}
      <div className="absolute top-[32%] -right-[150px] w-[580px] h-[580px] rounded-full bg-blue-600/8 dark:bg-[#0050AE]/20 blur-[130px] animate-float-slow"></div>

      {/* 3. Bottom Left Sky Blue Aura */}
      <div className="absolute top-[68%] -left-[100px] w-[500px] h-[500px] rounded-full bg-blue-700/8 dark:bg-blue-700/15 blur-[120px] animate-float-delayed"></div>

      {/* 4. Deep Bottom Crimson Red Glow */}
      <div className="absolute bottom-[4%] right-[10%] w-[450px] h-[450px] rounded-full bg-red-600/8 dark:bg-red-600/12 blur-[110px] animate-pulse-aura"></div>
    </div>
  );
};
