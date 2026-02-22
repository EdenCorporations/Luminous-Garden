"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useSpring,
  useTransform,
  useInView,
  type MotionValue,
} from "motion/react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  label?: string;
  decimals?: number;
}

function AnimatedNumber({
  motionValue,
  decimals = 0,
}: {
  motionValue: MotionValue<number>;
  decimals?: number;
}) {
  const [display, setDisplay] = useState("0");
  const rounded = useTransform(motionValue, (v) =>
    decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString()
  );

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return unsubscribe;
  }, [rounded]);

  return <>{display}</>;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
  label,
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 30,
    duration: duration * 1000,
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, springValue, value]);

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <div className="text-5xl md:text-6xl lg:text-7xl font-display italic text-gradient-ember leading-none">
        {prefix}
        <AnimatedNumber motionValue={springValue} decimals={decimals} />
        {suffix}
      </div>
      {label && (
        <motion.p
          className="mt-3 text-sm font-mono tracking-widest uppercase text-text-secondary"
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: duration * 0.6, duration: 0.6 }}
        >
          {label}
        </motion.p>
      )}
    </div>
  );
}
