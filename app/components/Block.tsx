"use client";
import { BlockProps } from "@/lib/types";
import { staggerVariants } from "@/lib/variants";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

export default function Block({ className, ...rest }: BlockProps) {
  return (
    <motion.div
      className={twMerge(
        "w-full rounded-lg border border-zinc-700 bg-zinc-900 p-8 text-white shadow-lg",
        className,
      )}
      {...rest}
      variants={staggerVariants}
    />
  );
}
