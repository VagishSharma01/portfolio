"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function ScrollTextures() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tileRef = useRef<HTMLCanvasElement | null>(null);
  const { scrollYProgress, scrollY } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });
  const gridY = useTransform(scrollY, [0, 3000], [0, 260]);
  const grainY = useTransform(scrollY, [0, 3000], [0, -180]);
  const grainOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.6, 1],
    [0.06, 0.1, 0.12, 0.08],
  );
  const veil = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "radial-gradient(900px 600px at 15% 10%, rgba(94,225,197,0.12), transparent 55%)",
      "radial-gradient(900px 600px at 70% 40%, rgba(224,176,122,0.10), transparent 55%)",
      "radial-gradient(900px 600px at 40% 80%, rgba(94,225,197,0.10), transparent 55%)",
    ],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Build a reusable noise tile once
    const tile = document.createElement("canvas");
    tile.width = 128;
    tile.height = 128;
    const tctx = tile.getContext("2d");
    if (!tctx) return;
    const img = tctx.createImageData(128, 128);
    for (let i = 0; i < img.data.length; i += 4) {
      const v = 160 + ((Math.random() * 80) | 0);
      img.data[i] = v;
      img.data[i + 1] = v;
      img.data[i + 2] = v;
      img.data[i + 3] = Math.random() > 0.62 ? 50 : 0;
    }
    tctx.putImageData(img, 0, 0);
    tileRef.current = tile;

    let raf = 0;
    const pattern = ctx.createPattern(tile, "repeat");

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const y = window.scrollY;
      ctx.clearRect(0, 0, w, h);

      if (pattern) {
        ctx.save();
        ctx.translate(0, -((y * 0.15) % 128));
        ctx.fillStyle = pattern;
        ctx.globalAlpha = 0.55;
        ctx.fillRect(0, 0, w, h + 128);
        ctx.restore();
      }

      // Scroll-scrubbed signal filaments
      ctx.save();
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = "#5ee1c5";
      ctx.lineWidth = 1;
      for (let i = 0; i < 6; i++) {
        const yy = ((y * (0.25 + i * 0.08) + i * 120) % (h + 60)) - 20;
        ctx.beginPath();
        ctx.moveTo(0, yy);
        for (let x = 0; x <= w; x += 24) {
          ctx.lineTo(
            x,
            yy + Math.sin(x * 0.01 + y * 0.004 + i) * (4 + i),
          );
        }
        ctx.stroke();
      }
      ctx.restore();

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <motion.div className="progress" style={{ scaleX: progress }} />
      <motion.div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage: veil,
        }}
      />
      <motion.div className="grid-layer" style={{ y: gridY }} aria-hidden />
      <motion.canvas
        ref={canvasRef}
        className="noise-layer"
        style={{ y: grainY, opacity: grainOpacity }}
        aria-hidden
      />
    </>
  );
}
