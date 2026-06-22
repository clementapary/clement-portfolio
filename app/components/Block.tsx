"use client";
import { BlockProps } from "@/lib/types";
import { staggerVariants } from "@/lib/variants";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

export default function Block({ className, ...rest }: BlockProps) {
  return (
    <motion.div
      className={twMerge(
        "w-full rounded-lg border p-8 shadow-lg dark:border-zinc-700 dark:bg-zinc-900 dark:text-white",
        className,
      )}
      {...rest}
      variants={staggerVariants}
    />
  );
}
