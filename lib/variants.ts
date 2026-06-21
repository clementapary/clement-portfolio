export const staggerVariants = {
  open: { opacity: 0, scale: 0, y: "50%" },
  closed: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  transition: {
    type: "spring",
    staggerChildren: 0.15,
    mass: 4,
    stiffness: 400,
    damping: 50,
    ease: "easeInOut",
  },
};
