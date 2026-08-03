"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

const Counter = ({ end, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime;
      let animationFrame;
      
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Easing function (easeOutQuart)
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        
        setCount(Math.floor(easeProgress * end));
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };
      
      animationFrame = requestAnimationFrame(step);
      
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [end, duration, isInView]);

  return (
    <span ref={nodeRef}>
      {count}{suffix}
    </span>
  );
};

const Statistics = () => {
  const stats = [
    { value: 5000, suffix: "+", label: "Qualified Leads Generated" },
    { value: 200, suffix: "+", label: "Institutions Served" },
    { value: 95, suffix: "%", label: "Lead Response Rate" },
    { value: 40, suffix: "%", label: "Higher Conversion" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-y border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x-0 md:divide-x divide-slate-100">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center space-y-2 px-4"
            >
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                <Counter end={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-sm md:text-base font-medium text-slate-500 max-w-[150px] mx-auto text-balance">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
