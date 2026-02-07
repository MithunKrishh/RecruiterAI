'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const FRAME_COUNT = 79;
const CANVAS_BG = '#000000';

function getFrameUrl(i: number) {
  return `/frames/${String(i + 1).padStart(3, '0')}`;
}

export default function HiringScroll() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [bitmaps, setBitmaps] = useState<ImageBitmap[] | null>(null);
  const [loaded, setLoaded] = useState(0);
  const [ready, setReady] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);
  const opacity = useTransform(scrollYProgress, [0.98, 1], [1, 0]);

  useEffect(() => {
    let isCancelled = false;
    document.documentElement.style.overflow = 'hidden';
    async function preload() {
      const arr: ImageBitmap[] = [];
      for (let i = 0; i < FRAME_COUNT; i++) {
        try {
          const res = await fetch(getFrameUrl(i), { cache: 'force-cache' });
          if (!res.ok) throw new Error('frame fetch failed');
          const blob = await res.blob();
          const bmp = await createImageBitmap(blob);
          if (isCancelled) return;
          arr.push(bmp);
          setLoaded((l) => l + 1);
        } catch {
          // continue on failure
        }
      }
      if (!isCancelled) {
        setBitmaps(arr);
        setReady(true);
        document.documentElement.style.overflow = '';
      }
    }
    preload();
    return () => {
      isCancelled = true;
      document.documentElement.style.overflow = '';
      setBitmaps((prev) => {
        prev?.forEach((b) => b.close?.());
        return null;
      });
    };
  }, []);

  useEffect(() => {
    const c = canvasRef.current!;
    if (!c) return;
    const ctx = c.getContext('2d')!;
    if (!ctx) return;

    let raf = 0;
    let currentIndex = -1;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const rect = c.getBoundingClientRect();
      c.width = Math.floor(rect.width * dpr);
      c.height = Math.floor(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize);

    function draw() {
      ctx.fillStyle = CANVAS_BG;
      ctx.fillRect(0, 0, c.width, c.height);
      const arr = bitmaps;
      if (!arr || arr.length === 0) return;
      const idx = Math.max(0, Math.min(Math.floor(currentIndex), arr.length - 1));
      const img = arr[idx];
      if (!img) return;

      const cw = c.width;
      const ch = c.height;
      const iw = img.width;
      const ih = img.height;
      const scale = Math.min(cw / iw, ch / ih);
      const dw = iw * scale;
      const dh = ih * scale;
      const dx = (cw - dw) / 2;
      const dy = (ch - dh) / 2;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, dx, dy, dw, dh);
    }

    function tick() {
      raf = requestAnimationFrame(tick);
      draw();
    }
    raf = requestAnimationFrame(tick);

    const unsub = frameIndex.on('change', (v) => {
      currentIndex = v;
      if (v >= FRAME_COUNT - 1) {
        setFadeOut(true);
      }
    });

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
      unsub();
    };
  }, [bitmaps, frameIndex]);

  const progress = useMemo(() => (loaded / FRAME_COUNT) * 100, [loaded]);

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-black">
      <motion.div
        className="sticky top-0 h-screen w-full"
        style={{ opacity }}
        aria-hidden="true"
      >
        <canvas ref={canvasRef} className="h-full w-full" />
        {!ready && (
          <div className="absolute inset-x-0 bottom-0 p-6">
            <div className="h-1 w-full bg-white/10 rounded">
              <div
                className="h-1 rounded bg-accent"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </motion.div>
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${
          fadeOut ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </section>
  );
}
