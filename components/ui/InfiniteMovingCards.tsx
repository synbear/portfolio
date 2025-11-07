"use client";

import { cn } from "@/lib/utils";
import React, { useRef, useState, useEffect } from "react";
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
  const baseX = useMotionValue(0);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [contentWidth, setContentWidth] = useState(0);

  const scrollDir = direction === "left" ? -1 : 1;
  const scrollSpeed = speed === "fast" ? 1.2 : speed === "normal" ? 0.9 : 0.7;

  // Measure width
  useEffect(() => {
    if (scrollerRef.current) {
      const totalWidth = scrollerRef.current.scrollWidth / 3; // since items repeated 3x
      setContentWidth(totalWidth);
    }
  }, [items]);

  // Auto-scroll
  useAnimationFrame((_, delta) => {
    if (!isDragging && contentWidth > 0) {
      let move = (delta / 10) * scrollSpeed * scrollDir;
      let newX = baseX.get() + move;

      // Wrap seamlessly in both directions
      if (newX <= -contentWidth) newX += contentWidth;
      if (newX >= 0) newX -= contentWidth;

      baseX.set(newX);
    }
  });

  // Drag handling
  const handleDrag = (_: any, info: any) => {
    let newX = baseX.get() + info.delta.x;

    // Seamless wrap for manual drag in both directions
    if (newX <= -contentWidth) newX += contentWidth;
    if (newX >= 0) newX -= contentWidth;

    baseX.set(newX);
  };

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  return (
    <div
      className={cn(
        "relative overflow-hidden w-screen cursor-grab active:cursor-grabbing [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >


    <motion.ul
      ref={scrollerRef}
      style={{ x: baseX }}
      drag="x"
      dragElastic={isMobile ? 0.2 : 0.05}
      dragMomentum={isMobile}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      onDrag={handleDrag}
      className={cn(
        "flex gap-16 py-6 w-max flex-nowrap",
        pauseOnHover && "pause-on-hover"
      )}
    >
        {/* Duplicate items 3× for continuous loop */}
        {[...items, ...items, ...items].map((item, idx) => (
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