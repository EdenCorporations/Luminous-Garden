"use client";

import { useEffect, useRef } from "react";

type Pointer = { x: number; y: number };

export function CoreField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerRef = useRef<Pointer>({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    let raf = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      const t = time * 0.001;
      const px = pointerRef.current.x * width;
      const py = pointerRef.current.y * height;

      context.clearRect(0, 0, width, height);

      const gradientA = context.createRadialGradient(
        width * 0.45 + Math.sin(t * 0.8) * 20,
        height * 0.45 + Math.cos(t * 0.6) * 14,
        width * 0.06,
        width * 0.5,
        height * 0.5,
        width * 0.42,
      );
      gradientA.addColorStop(0, "rgba(255,133,99,0.22)");
      gradientA.addColorStop(0.45, "rgba(200,75,49,0.12)");
      gradientA.addColorStop(1, "rgba(10,9,8,0)");

      context.fillStyle = gradientA;
      context.fillRect(0, 0, width, height);

      const gradientB = context.createRadialGradient(
        px,
        py,
        width * 0.03,
        px,
        py,
        width * 0.25,
      );
      gradientB.addColorStop(0, "rgba(255,133,99,0.18)");
      gradientB.addColorStop(1, "rgba(255,133,99,0)");

      context.fillStyle = gradientB;
      context.fillRect(0, 0, width, height);

      for (let ring = 0; ring < 5; ring += 1) {
        const r = width * (0.11 + ring * 0.055) + Math.sin(t * (1.4 + ring * 0.25)) * 5;
        const alpha = 0.13 - ring * 0.02;
        context.beginPath();
        context.arc(width * 0.5, height * 0.5, r, 0, Math.PI * 2);
        context.strokeStyle = `rgba(200,75,49,${Math.max(alpha, 0.03)})`;
        context.lineWidth = 1;
        context.stroke();
      }

      for (let i = 0; i < 40; i += 1) {
        const angle = (i / 40) * Math.PI * 2 + t * 0.17;
        const radius = width * 0.22 + Math.sin(t * 0.9 + i) * 10;
        const x = width * 0.5 + Math.cos(angle) * radius;
        const y = height * 0.5 + Math.sin(angle) * radius * 0.58;
        context.fillStyle = "rgba(236,231,222,0.35)";
        context.fillRect(x, y, 1.2, 1.2);
      }

      raf = requestAnimationFrame(draw);
    };

    const onPointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerRef.current = {
        x: Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width)),
        y: Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height)),
      };
    };

    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointer);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />;
}
