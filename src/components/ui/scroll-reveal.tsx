import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../../lib/utils";

type ScrollRevealDirection = "up" | "down" | "left" | "right" | "none";

type ScrollRevealProps = {
  children: ReactNode;
  direction?: ScrollRevealDirection;
  delay?: number;
  duration?: number;
  amount?: number;
  once?: boolean;
} & HTMLAttributes<HTMLDivElement>;

const directionOffset: Record<ScrollRevealDirection, { x?: number; y?: number }> = {
  up: { y: 32 },
  down: { y: -32 },
  left: { x: 32 },
  right: { x: -32 },
  none: {},
};

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const ScrollReveal = ({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.6,
  amount = 0.2,
  once = true,
  ...rest
}: ScrollRevealProps): JSX.Element => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={className} {...rest}>
        {children}
      </div>
    );
  }

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...directionOffset[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease,
      },
    },
  };

  return (
    <motion.div
      className={cn("will-change-transform", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      {...rest}
    >
      {children}
    </motion.div>
  );
};


