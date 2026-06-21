"use client";
import { staggerVariants } from "@/lib/variants";
import { motion, AnimatePresence } from "motion/react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence>
      <motion.div initial="open" animate="closed" variants={staggerVariants}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
