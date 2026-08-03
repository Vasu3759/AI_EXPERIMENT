"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const Button = forwardRef(({ className, variant = "primary", size = "md", asChild = false, children, ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    primary: "bg-[var(--color-primary)] text-white hover:bg-blue-700 shadow-md hover:shadow-lg",
    secondary: "bg-[var(--color-secondary)] text-white hover:bg-teal-600 shadow-md hover:shadow-lg",
    accent: "bg-[var(--color-accent)] text-white hover:bg-amber-600 shadow-md hover:shadow-lg",
    outline: "border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-blue-50",
    ghost: "hover:bg-slate-100 text-slate-700 hover:text-slate-900",
  };
  
  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-8 text-base",
    lg: "h-14 px-10 text-lg",
  };

  const Comp = asChild ? motion.div : motion.button;

  return (
    <Comp
      ref={ref}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Comp>
  );
});

Button.displayName = "Button";

export { Button };
