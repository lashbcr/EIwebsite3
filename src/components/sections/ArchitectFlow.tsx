'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import {
  Zap, Globe, Shield, Database, Cpu, BarChart3, Layers, FileText, GitBranch,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface NodeDef {
  id: string;
  label: string;
  icon: LucideIcon;
  x: number;
  y: number;
  color: string;
  large?: boolean;
  appearDelay: number;
  pulseDelay: number;
}

interface ConnectionDef {
  id: string;
  path: string;
  color: string;
  filter: string;
  drawStart: number;
  drawDuration: number;
  electricityDuration: number;
  dotFrom?: [number, number];
  dotTo?: [number, number];
}

// Sequence: AI Core first, then inputs, then outputs, then cross-links, then feedback arc.
// pulseDelay = appearDelay + 0.35 so rings fire after the node has popped in.
const NODES: NodeDef[] = [
  { id: 'ai',           label: 'AI Core',      icon: Zap,       x: 250, y: 200, color: '#ec2c44', large: true, appearDelay: 0.30, pulseDelay: 0.65 },
  { id: 'architecture', label: 'Architecture', icon: GitBranch, x:  90, y: 100, color: '#5de0e6',              appearDelay: 0.65, pulseDelay: 1.00 },
  { id: 'strategy',     label: 'Strategy',     icon: Globe,     x: 250, y:  40, color: '#5de0e6',              appearDelay: 0.75, pulseDelay: 1.10 },
  { id: 'requirements', label: 'Requirements', icon: FileText,  x:  40, y: 200, color: '#5de0e6',              appearDelay: 0.85, pulseDelay: 1.20 },
  { id: 'governance',   label: 'Governance',   icon: Shield,    x: 410, y: 100, color: '#5de0e6',              appearDelay: 0.95, pulseDelay: 1.30 },
  { id: 'data',         label: 'Data Layer',   icon: Database,  x: 460, y: 200, color: '#60a5fa',              appearDelay: 1.90, pulseDelay: 2.25 },
  { id: 'apps',         label: 'Applications', icon: Layers,    x:  90, y: 320, color: '#60a5fa',              appearDelay: 2.00, pulseDelay: 2.35 },
  { id: 'insights',     label: 'Insights',     icon: BarChart3, x: 250, y: 370, color: '#a78bfa',              appearDelay: 2.10, pulseDelay: 2.45 },
  { id: 'systems',      label: 'Systems',      icon: Cpu,       x: 410, y: 320, color: '#60a5fa',              appearDelay: 2.70, pulseDelay: 3.05 },
];

// drawStart: when the line begins drawing
// drawDuration: how long the draw-in takes
// electricityStart (computed): drawStart + drawDuration + 0.1 — when the flow begins
// All paths use border-to-border coordinates.
// Node radii in SVG units: AI Core r=28 (w-14), all others r=22 (w-11).
// Each endpoint is offset from the node center by r in the connection's unit direction.
const CONNECTIONS: ConnectionDef[] = [
  // Inputs → AI Core (cyan)
  { id: 'c1',  path: 'M 250,62 L 250,172',   color: '#5de0e6', filter: 'glow-cyan',   drawStart: 1.00, drawDuration: 0.60, electricityDuration: 2.5, dotFrom: [250,  62], dotTo: [250, 172] },
  { id: 'c4',  path: 'M 109,112 L 226,185',  color: '#5de0e6', filter: 'glow-cyan',   drawStart: 1.10, drawDuration: 0.65, electricityDuration: 2.8, dotFrom: [109, 112], dotTo: [226, 185] },
  { id: 'c3',  path: 'M 62,200 L 222,200',   color: '#5de0e6', filter: 'glow-cyan',   drawStart: 1.20, drawDuration: 0.60, electricityDuration: 2.5, dotFrom: [ 62, 200], dotTo: [222, 200] },
  { id: 'c2',  path: 'M 391,112 L 274,185',  color: '#5de0e6', filter: 'glow-cyan',   drawStart: 1.15, drawDuration: 0.65, electricityDuration: 2.8, dotFrom: [391, 112], dotTo: [274, 185] },
  // AI Core → outputs (red)
  { id: 'c5',  path: 'M 278,200 L 438,200',  color: '#ec2c44', filter: 'glow-red',    drawStart: 2.10, drawDuration: 0.60, electricityDuration: 2.5, dotFrom: [278, 200], dotTo: [438, 200] },
  { id: 'c6',  path: 'M 228,217 L 108,307',  color: '#ec2c44', filter: 'glow-red',    drawStart: 2.20, drawDuration: 0.65, electricityDuration: 2.8, dotFrom: [228, 217], dotTo: [108, 307] },
  { id: 'c7',  path: 'M 250,228 L 250,348',  color: '#ec2c44', filter: 'glow-red',    drawStart: 2.30, drawDuration: 0.60, electricityDuration: 2.5, dotFrom: [250, 228], dotTo: [250, 348] },
  // Cross connections (blue)
  { id: 'c8',  path: 'M 452,220 L 418,300',  color: '#60a5fa', filter: 'glow-blue',   drawStart: 2.90, drawDuration: 0.55, electricityDuration: 2.0, dotFrom: [452, 220], dotTo: [418, 300] },
  { id: 'c10', path: 'M 111,327 L 229,363',  color: '#60a5fa', filter: 'glow-blue',   drawStart: 3.10, drawDuration: 0.60, electricityDuration: 2.5, dotFrom: [111, 327], dotTo: [229, 363] },
  { id: 'c9',  path: 'M 389,327 L 271,363',  color: '#60a5fa', filter: 'glow-blue',   drawStart: 3.30, drawDuration: 0.60, electricityDuration: 2.5, dotFrom: [389, 327], dotTo: [271, 363] },
  // Feedback arc: insights → strategy — endpoints offset to node borders along tangent direction
  { id: 'c11', path: 'M 231,359 Q -30,200 231,51', color: '#a78bfa', filter: 'glow-purple', drawStart: 3.70, drawDuration: 1.00, electricityDuration: 4.0 },
];

export function ArchitectFlow() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const dark = !mounted || resolvedTheme === 'dark';

  const panelStyle = dark
    ? {
        background: 'rgba(7, 12, 21, 0.7)',
        border: '1px solid rgba(255,255,255,0.06)',
        boxShadow: '0 0 80px rgba(93,224,230,0.05), inset 0 0 40px rgba(0,0,0,0.4)',
      }
    : {
        background: 'rgba(255, 255, 255, 0.85)',
        border: '1px solid rgba(0,0,0,0.08)',
        boxShadow: '0 0 80px rgba(93,224,230,0.08), 0 4px 24px rgba(0,0,0,0.08)',
      };

  const nodeBg = dark ? '#070c15' : '#ffffff';

  return (
    <div
      className="relative w-full max-w-125"
      style={{ aspectRatio: '5/4' }}
    >
      {/* Background panel */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={panelStyle}
      />

      {/* SVG: connection lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 500 400"
        fill="none"
      >
        <defs>
          <filter id="glow-cyan" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-red" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-blue" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-purple" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {CONNECTIONS.map((conn) => {
          const elStart = conn.drawStart + conn.drawDuration + 0.1;
          return (
            <g key={conn.id}>
              {/* Base line draws itself in */}
              <motion.path
                d={conn.path}
                stroke={conn.color}
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.15 }}
                transition={{
                  pathLength: { duration: conn.drawDuration, delay: conn.drawStart, ease: 'easeInOut' },
                  opacity:     { duration: 0.05,             delay: conn.drawStart },
                }}
              />
              {/* Electricity dash — fades in after line is fully drawn */}
              <motion.path
                d={conn.path}
                stroke={conn.color}
                strokeWidth="2"
                strokeDasharray="10 28"
                strokeLinecap="round"
                style={{ filter: `url(#${conn.filter})` }}
                initial={{ opacity: 0 }}
                animate={{ strokeDashoffset: [0, -38], opacity: 1 }}
                transition={{
                  strokeDashoffset: { duration: conn.electricityDuration, repeat: Infinity, ease: 'linear', delay: elStart },
                  opacity:          { duration: 0.4, delay: elStart },
                }}
              />
              {/* Travelling glow dot (straight-line connections only) */}
              {conn.dotFrom && conn.dotTo && (
                <motion.circle
                  r={3.5}
                  fill={conn.color}
                  style={{ filter: `url(#${conn.filter})` }}
                  initial={{ cx: conn.dotFrom[0], cy: conn.dotFrom[1], opacity: 0 }}
                  animate={{
                    cx:      [conn.dotFrom[0], conn.dotTo[0]],
                    cy:      [conn.dotFrom[1], conn.dotTo[1]],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: conn.electricityDuration,
                    repeat:   Infinity,
                    ease:     'linear',
                    delay:    elStart + conn.electricityDuration * 0.25,
                    times:    [0, 0.08, 0.92, 1],
                  }}
                />
              )}
            </g>
          );
        })}
      </svg>

      {/* Nodes: pop in sequentially, then pulse forever */}
      {NODES.map((node) => {
        const Icon = node.icon;
        const size = node.large ? 56 : 44;
        const iconSize = node.large ? 24 : 19;

        return (
          <div
            key={node.id}
            className="absolute"
            style={{
              left:      `${(node.x / 500) * 100}%`,
              top:       `${(node.y / 400) * 100}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
          <motion.div
            className="flex flex-col items-center gap-1.25"
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: node.appearDelay, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <div className="relative flex items-center justify-center">
              {/* Outer pulse ring */}
              <motion.div
                className="absolute rounded-full"
                style={{ width: size, height: size, background: node.color }}
                animate={{ scale: [1, 2.1, 1], opacity: [0.45, 0, 0.45] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: node.pulseDelay }}
              />
              {/* Inner pulse ring */}
              <motion.div
                className="absolute rounded-full"
                style={{ width: size, height: size, background: node.color }}
                animate={{ scale: [1, 1.6, 1], opacity: [0.2, 0, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: node.pulseDelay + 0.4 }}
              />
              {/* Circle */}
              <div
                className="relative z-10 flex items-center justify-center rounded-full"
                style={{
                  width:     size,
                  height:    size,
                  background: nodeBg,
                  border:    `1.5px solid ${node.color}55`,
                  boxShadow: `0 0 18px ${node.color}30, inset 0 0 12px ${node.color}12`,
                }}
              >
                <Icon size={iconSize} color={node.color} strokeWidth={1.8} />
              </div>
            </div>
            {/* Label */}
            <span
              className="text-[9px] font-semibold tracking-widest uppercase whitespace-nowrap select-none"
              style={{ color: `${node.color}99` }}
            >
              {node.label}
            </span>
          </motion.div>
          </div>
        );
      })}
    </div>
  );
}
