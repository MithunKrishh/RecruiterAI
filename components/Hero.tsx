'use client';

import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform
} from 'framer-motion';
import { useMemo, useRef } from 'react';
import ConversationBubbles from './ConversationBubbles';
function useCursorGlow() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const sx = useSpring(x, { stiffness: 120, damping: 20 });
  const sy = useSpring(y, { stiffness: 120, damping: 20 });

  function onMove(e: React.MouseEvent) {
    x.set(e.clientX);
    y.set(e.clientY);
  }

  return { sx, sy, onMove };
}

function useMagnetic() {
  function onMove(e: React.MouseEvent<HTMLElement>) {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();

    const mx = e.clientX - (r.left + r.width / 2);
    const my = e.clientY - (r.top + r.height / 2);

    const strength = 0.15;

    const tx = Math.max(-12, Math.min(12, mx * strength));
    const ty = Math.max(-12, Math.min(12, my * strength));

    el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
  }

  function onLeave(e: React.MouseEvent<HTMLElement>) {
    e.currentTarget.style.transform = 'translate3d(0,0,0)';
  }

  return { onMove, onLeave };
}

export default function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 0.15, 0]);
  const blur = useTransform(scrollYProgress, [0, 1], ['0px', '12px']);

  const { sx, sy, onMove } = useCursorGlow();
  const { onMove: onMagnet, onLeave: onUnmagnet } = useMagnetic();

  const words = useMemo(
    () => 'Every Hire, Faster and Better'.split(' '),
    []
  );

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden"
      onMouseMove={onMove}
      style={{ backgroundColor: '#000000' }}
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ opacity, filter: blur }}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_20%_20%,rgba(165,216,255,0.08),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_80%_30%,rgba(255,255,255,0.06),transparent_70%)]" />
          <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,255,255,0.03),transparent)]" />
        </div>
        <div className="absolute inset-0 backdrop-blur-[2px] bg-white/2" />
      </motion.div>

      {/* Cursor Glow */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-10 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          x: sx,
          y: sy,
          background:
            'radial-gradient(closest-side, rgba(165,216,255,0.25), rgba(165,216,255,0.05), transparent)',
          mixBlendMode: 'screen'
        }}
      />

      <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col">

        {/* Navbar */}
        <div className="fixed top-4 left-6 right-6 z-30 grid grid-cols-3 items-center px-6 py-5 border border-white/10 rounded-2xl backdrop-blur-sm bg-white/5 max-w-7xl mx-auto">

          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-accent/60" />
            <span className="font-serif text-lg tracking-tight">
              RecruiterAI
            </span>
          </div>

          <nav className="hidden md:flex justify-self-center items-center gap-8 text-white/80">
            {['Home', 'Features', 'Resources', 'About'].map((item) => (
              <button
                key={item}
                onMouseMove={onMagnet}
                onMouseLeave={onUnmagnet}
                className="relative will-change-transform transition-colors hover:text-white"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* ✅ FIXED */}
          <div className="justify-self-end">
            <a
              href="#"
              onMouseMove={onMagnet}
              onMouseLeave={onUnmagnet}
              className="inline-flex items-center rounded-xl bg-accent px-5 py-2.5 font-medium text-black will-change-transform"
            >
              Request Demo
            </a>
          </div>
        </div>

        {/* Hero Content */}
        <div className="flex flex-1 items-center justify-center px-6">
          <div className="text-center">

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight md:whitespace-nowrap">
              {words.map((w, i) => (
                <motion.span
                  key={i}
                  whileHover={{
                    y: -2,
                    color: '#A5D8FF',
                    textShadow: '0 0 8px rgba(165,216,255,0.18)'
                  }}
                  transition={{ duration: 0.18 }}
                  className="inline-block px-1"
                >
                  {w}
                </motion.span>
              ))}
            </h1>

            <p className="mt-4 text-white/70">
              Precision AI for sourcing, matching, and hiring operations.
            </p>

            {/* ✅ FIXED CTA BUTTONS */}
            <div className="mt-8 flex items-center justify-center gap-4">

              <a
                href="#"
                onMouseMove={onMagnet}
                onMouseLeave={onUnmagnet}
                className="inline-flex items-center rounded-xl bg-accent px-6 py-3 font-medium text-black transition-all hover:bg-accent/90"
              >
                Start Hiring Smarter
              </a>

              <a
                href="#"
                onMouseMove={onMagnet}
                onMouseLeave={onUnmagnet}
                className="inline-flex items-center rounded-xl border border-white/20 px-6 py-3 font-medium text-white transition-all hover:bg-white/5"
              >
                See How It Works
              </a>

            </div>
          </div>
        </div>
      </div>
      {/* Conversation Bubbles */}
      <ConversationBubbles />
    </section>
  );
}
