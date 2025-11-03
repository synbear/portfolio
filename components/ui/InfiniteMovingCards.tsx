"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerRef.current?.appendChild(duplicatedItem);
    });

    const dir = direction === "left" ? "forwards" : "reverse";
    const duration =
      speed === "fast" ? "10s" : speed === "normal" ? "20s" : "40s";

    containerRef.current.style.setProperty("--animation-direction", dir);
    containerRef.current.style.setProperty("--animation-duration", duration);
    setStart(true);
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-16 py-4",
          start && "animate-scroll",
          pauseOnHover && "pause-on-hover"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="relative w-[90vw] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 px-8 py-10 md:w-[60vw] dark:border-zinc-800"
            style={{
              background:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <blockquote className="flex flex-col justify-between h-full">
              <span className="relative z-20 text-sm md:text-lg leading-relaxed font-normal text-white">
                {item.quote}
              </span>

              <div className="relative z-20 mt-8 flex flex-row items-center">
                <div className="flex flex-col gap-1">
                  <span className="text-xl font-bold text-white">
                    {item.name}
                  </span>
                  <span className="text-sm font-normal text-zinc-300 mt-1">
                    {item.title}
                  </span>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
