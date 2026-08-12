"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3;
  className?: string;
}

const DELAY_SECONDS: Record<number, number> = {
  0: 0,
  1: 0.08,
  2: 0.16,
  3: 0.24,
};

export default function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px", amount: 0.15 }}
      transition={{
        duration: 0.9,
        ease: [0.16, 0.84, 0.44, 1],
        delay: DELAY_SECONDS[delay],
      }}
    >
      {children}
    </motion.div>
  );
}
