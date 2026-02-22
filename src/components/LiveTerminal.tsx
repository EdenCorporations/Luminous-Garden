"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";

interface TerminalLine {
  text: string;
  type?: "command" | "output" | "success" | "error" | "info";
  delay?: number;
}

interface LiveTerminalProps {
  lines: TerminalLine[];
  typingSpeed?: number;
  className?: string;
  title?: string;
  loop?: boolean;
  loopDelay?: number;
}

export function LiveTerminal({
  lines,
  typingSpeed = 35,
  className = "",
  title = "edencorp-terminal",
  loop = false,
  loopDelay = 3000,
}: LiveTerminalProps) {
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: !loop, amount: 0.3 });
  const [displayedLines, setDisplayedLines] = useState<
    { text: string; type: string; isTyping: boolean }[]
  >([]);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [displayedLines]);

  // Type lines sequentially
  useEffect(() => {
    if (!isInView) return;

    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const typeLines = async () => {
      setDisplayedLines([]);

      for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
        if (cancelled) return;
        const line = lines[lineIdx];
        const delay = line.delay ?? 200;

        await new Promise<void>((resolve) => {
          timeoutId = setTimeout(resolve, delay);
        });
        if (cancelled) return;

        if (line.type === "command") {
          // Type character by character
          for (let charIdx = 0; charIdx <= line.text.length; charIdx++) {
            if (cancelled) return;
            const partial = line.text.slice(0, charIdx);
            setDisplayedLines((prev) => {
              const next = [...prev];
              if (next.length > lineIdx) {
                next[lineIdx] = {
                  text: partial,
                  type: line.type || "output",
                  isTyping: charIdx < line.text.length,
                };
              } else {
                next.push({
                  text: partial,
                  type: line.type || "output",
                  isTyping: charIdx < line.text.length,
                });
              }
              return next;
            });
            await new Promise<void>((resolve) => {
              timeoutId = setTimeout(resolve, typingSpeed);
            });
          }
        } else {
          // Instant display
          setDisplayedLines((prev) => [
            ...prev,
            { text: line.text, type: line.type || "output", isTyping: false },
          ]);
        }
      }

      if (loop && !cancelled) {
        await new Promise<void>((resolve) => {
          timeoutId = setTimeout(resolve, loopDelay);
        });
        if (!cancelled) typeLines();
      }
    };

    typeLines();

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [isInView, lines, typingSpeed, loop, loopDelay]);

  const getLineColor = (type: string) => {
    switch (type) {
      case "command":
        return "text-ember-glow";
      case "success":
        return "text-success";
      case "error":
        return "text-error";
      case "info":
        return "text-text-secondary";
      default:
        return "text-text-tertiary";
    }
  };

  return (
    <motion.div
      ref={ref}
      className={`surface-card overflow-hidden rounded-lg border border-border ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-surface/80">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-error/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-success/60" />
        </div>
        <span className="text-xs font-mono text-text-tertiary ml-2">
          {title}
        </span>
      </div>

      {/* Terminal body */}
      <div
        ref={scrollRef}
        className="p-4 font-mono text-xs sm:text-sm leading-relaxed max-h-80 overflow-y-auto"
      >
        {displayedLines.map((line, i) => (
          <div key={i} className={`${getLineColor(line.type)} whitespace-pre`}>
            {line.type === "command" && (
              <span className="text-ember mr-2">$</span>
            )}
            {line.text}
            {line.isTyping && (
              <span
                className={`inline-block w-[7px] h-[14px] bg-ember-glow ml-0.5 align-middle ${
                  cursorVisible ? "opacity-100" : "opacity-0"
                }`}
              />
            )}
          </div>
        ))}
        {displayedLines.length > 0 &&
          !displayedLines[displayedLines.length - 1]?.isTyping && (
            <div className="text-ember-glow mt-1">
              <span className="text-ember mr-2">$</span>
              <span
                className={`inline-block w-[7px] h-[14px] bg-ember-glow align-middle ${
                  cursorVisible ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          )}
      </div>
    </motion.div>
  );
}
