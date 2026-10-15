"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

/** Subtle grain + scroll progress — no scroll-jacking. */
export function ScrollTextures() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: reduce ? 1000 : 140,
    damping: reduce ? 100 : 32,
  });
  const grainOpacity = useTransform(scrollYProgress, [0, 1], [0.03, 0.055]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const tile = document.createElement("canvas");
    tile.width = 128;
    tile.height = 128;
    const tctx = tile.getContext("2d");
    if (!tctx) return;
    const img = tctx.createImageData(128, 128);
    for (let i = 0; i < img.data.length; i += 4) {
      const v = 170 + ((Math.random() * 70) | 0);
      img.data[i] = v;
      img.data[i + 1] = v;
      img.data[i + 2] = v;
      img.data[i + 3] = Math.random() > 0.72 ? 36 : 0;
    }
    tctx.putImageData(img, 0, 0);
    const pattern = ctx.createPattern(tile, "repeat");

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      if (pattern) {
        ctx.globalAlpha = 0.5;
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <>
      <motion.div className="progress" style={{ scaleX: progress }} />
      <div className="grid-layer" aria-hidden />
      <motion.canvas
        ref={canvasRef}
        className="noise-layer"
        style={{ opacity: grainOpacity }}
        aria-hidden
      />
    </>
  );
}
