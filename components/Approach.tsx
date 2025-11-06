"use client"

import React from 'react'
import { CanvasRevealEffect } from './ui/CanvasRevealEffect'
import { AnimatePresence, motion } from 'framer-motion';

const Approach = () => {
  return (
    <section className='w-full py-20'>
      <h1 className='heading'>
        My <span className='text-purple-300'>approach</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        <Card 
          title="Planning and Strategy" 
          icon={<AceternityIcon order="Phase 1"/>}
          description="We will collaborate to map out your website's goals, target audience, and key functionalities. We will discuss site structure, navigation, and content requirements.">
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card 
          title="Development & Progress Update" 
          icon={<AceternityIcon order="Phase 2"/>}
          description="Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, keeping you updated every step of the way.">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
        </Card>
        <Card 
          title="Development & Launch" 
          icon={<AceternityIcon order="Phase 3"/>}
          description="This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  )
}

const Card: React.FC<{
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description?: string;
}> = ({ title, icon, children, description }) => {
  const [hovered, setHovered] = React.useState(false);
  const rootRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    // Capture pointerdown so parent toggles before children consume it (works across mobile browsers)
    const onPointerDownCapture = (ev: PointerEvent) => {
      if (ev.pointerType === "touch") {
        setHovered((s) => !s);
      }
    };

    // Close when tapping outside (touch only)
    const onDocPointerDown = (ev: PointerEvent) => {
      if (ev.pointerType !== "touch") return;
      if (!node.contains(ev.target as Node)) setHovered(false);
    };

    node.addEventListener("pointerdown", onPointerDownCapture, { capture: true });
    document.addEventListener("pointerdown", onDocPointerDown, { capture: true });

    return () => {
      node.removeEventListener("pointerdown", onPointerDownCapture, { capture: true } as any);
      document.removeEventListener("pointerdown", onDocPointerDown, { capture: true } as any);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      // mouse hover for desktop
      onPointerEnter={(e) => e.pointerType === "mouse" && setHovered(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 lg:h-[35rem] relative rounded-3xl overflow-hidden"
      style={{
        touchAction: "manipulation",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      {/* corner icons / decorative */}
      <div className="absolute -top-3 -left-3 z-[60]"></div>
      <div className="absolute -bottom-3 -left-3 z-[60]"></div>
      <div className="absolute -top-3 -right-3 z-[60]"></div>
      <div className="absolute -bottom-3 -right-3 z-[60]"></div>

      {/* Reveal/animation layer (children) */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="reveal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="absolute inset-0 z-[20] pointer-events-none"
            style={{ transform: "translateZ(0)", willChange: "opacity" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content layer */}
      <div className="py-5 relative z-[40] w-full h-full flex flex-col items-center justify-center text-center px-4">
        {/* Centered Phase button / icon */}
        <div
          className={`flex items-center justify-center transition-all duration-300 ${
            hovered ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
          }`}
          aria-hidden={hovered}
        >
          {icon}
        </div>

        {/* Title */}
        <h2
          className={`mt-3 font-bold text-2xl text-center transition-all duration-300 ${
            hovered ? "opacity-100 translate-y-0 text-white" : "opacity-0 -translate-y-1 text-black"
          }`}
        >
          {title}
        </h2>

        {/* Description */}
        <p
          className={`mt-2 text-sm text-center transition-all duration-300 ${
            hovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
          }`}
          style={{ color: "#e4ecff", maxWidth: "85%" }}
        >
          {description}
        </p>

        {/* Hint text */}
        <p
          className={`mt-auto text-sm text-gray-400 transition-all duration-300 ${
            hovered ? "opacity-0" : "opacity-100"
          }`}
          style={{ textTransform: "lowercase" }}
        >
          click/hover to reveal
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-white backdrop-blur-3xl text-2xl font-bold">
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach;