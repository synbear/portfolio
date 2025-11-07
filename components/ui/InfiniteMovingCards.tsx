"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: { quote: string; name: string; title: string }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const scrollX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Auto scroll speed
  const scrollSpeed = speed === "fast" ? 0.8 : speed === "normal" ? 0.4 : 0.2;
  const scrollDir = direction === "left" ? -1 : 1;

  // Auto animation loop
  useAnimationFrame((t, delta) => {
    if (!isDragging) {
      const move = (delta / 10) * scrollSpeed * scrollDir;
      scrollX.set(scrollX.get() + move);
    }
  });

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden w-screen cursor-grab active:cursor-grabbing [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <motion.ul
        drag="x"
        dragConstraints={{ left: -Infinity, right: Infinity }}
        style={{ x: scrollX }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        className={cn(
          "flex gap-16 py-6 w-max min-w-full shrink-0 flex-nowrap",
          pauseOnHover && "pause-on-hover"
        )}
      >
        {[...items, ...items].map((item, idx) => (
          <li
            key={idx}
            className="relative w-[90vw] md:w-[60vw] shrink-0 rounded-2xl border border-zinc-700/40 px-8 py-10"
            style={{
              background:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <blockquote className="flex flex-col justify-between h-full">
              <span className="text-sm md:text-lg text-white leading-relaxed">
                {item.quote}
              </span>
              <div className="mt-8">
                <span className="text-xl font-bold text-white">{item.name}</span>
                <div className="text-sm text-zinc-300 mt-1">{item.title}</div>
              </div>
            </blockquote>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};
