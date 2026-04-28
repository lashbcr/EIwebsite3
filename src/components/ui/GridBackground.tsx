'use client';

import { useEffect, useRef } from 'react';

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  targetOpacity: number;
  radius: number;
}

export function GridBackground({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;
    const ctxEl = canvasEl.getContext('2d');
    if (!ctxEl) return;

    // Assign to typed aliases so closures infer non-null types
    const canvas: HTMLCanvasElement = canvasEl;
    const ctx: CanvasRenderingContext2D = ctxEl;

    const GRID = 36;
    const DOT_COUNT = 25;
    const MAX_LINK_DIST = 160;
    const dots: Dot[] = [];
    let raf: number;

    function isDark() {
      return document.documentElement.classList.contains('dark');
    }

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function spawnDots() {
      dots.length = 0;
      for (let i = 0; i < DOT_COUNT; i++) {
        const op = Math.random() * 0.4 + 0.1;
        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          opacity: op,
          targetOpacity: op,
          radius: Math.random() * 1.5 + 1,
        });
      }
    }

    function frame() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const dark = isDark();
      const gridAlpha = dark ? 0.12 : 0.07;
      const dotR = 1;

      // Static dot grid
      ctx.fillStyle = `rgba(236,44,68,${gridAlpha})`;
      for (let x = GRID; x < canvas.width; x += GRID) {
        for (let y = GRID; y < canvas.height; y += GRID) {
          ctx.beginPath();
          ctx.arc(x, y, dotR, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Moving dots + connections
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];

        // Drift
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0) d.x = canvas.width;
        if (d.x > canvas.width) d.x = 0;
        if (d.y < 0) d.y = canvas.height;
        if (d.y > canvas.height) d.y = 0;

        // Breathe
        d.opacity += (d.targetOpacity - d.opacity) * 0.015;
        if (Math.abs(d.targetOpacity - d.opacity) < 0.01) {
          d.targetOpacity = Math.random() * 0.5 + 0.15;
        }

        const alpha = dark ? d.opacity : d.opacity * 0.6;

        // Connection lines
        for (let j = i + 1; j < dots.length; j++) {
          const d2 = dots[j];
          const dx = d.x - d2.x;
          const dy = d.y - d2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_LINK_DIST) {
            const lineAlpha = (1 - dist / MAX_LINK_DIST) * alpha * 0.4;
            ctx.beginPath();
            ctx.moveTo(d.x, d.y);
            ctx.lineTo(d2.x, d2.y);
            ctx.strokeStyle = `rgba(236,44,68,${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Glow halo
        const grd = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.radius * 6);
        grd.addColorStop(0, `rgba(236,44,68,${alpha * 0.6})`);
        grd.addColorStop(1, 'rgba(236,44,68,0)');
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.radius * 6, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240,104,122,${alpha})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(frame);
    }

    const ro = new ResizeObserver(() => {
      resize();
      spawnDots();
    });
    ro.observe(canvas);

    resize();
    spawnDots();
    frame();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className ?? ''}`}
    />
  );
}
