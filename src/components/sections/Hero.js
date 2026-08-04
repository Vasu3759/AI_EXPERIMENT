"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Bot, Users, LineChart } from "lucide-react";
import { BookingForm } from "@/components/ui/booking-form";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden pt-32 pb-20">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[120px] -translate-y-1/4 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-secondary/80 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 w-full max-w-7xl">
        {/* Top section: Video & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch mb-12">

          {/* Left Column: Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end w-full order-2 lg:order-1"
          >
            <div className="h-full rounded-3xl overflow-hidden shadow-2xl bg-black aspect-[9/16]">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/NahkxhxJSV4?autoplay=1&loop=1&mute=1&playlist=NahkxhxJSV4"
                title="YouTube shorts video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full flex justify-center lg:justify-start order-1 lg:order-2 h-full"
          >
            <div className="w-full max-w-[500px]">
              <BookingForm />
            </div>
          </motion.div>

        </div>

        {/* Bottom section: Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center text-center w-full max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-secondary/80 border border-border rounded-full font-bold uppercase tracking-wider text-xs text-foreground backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Next-Gen Admission Platform
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-foreground leading-[1.05] mb-6 tracking-tighter">
            AI Integrated <br />
            <span className="text-primary relative inline-block mt-2">
              Admission Ecosystem
              <svg className="absolute w-full h-3 lg:h-4 -bottom-1 lg:-bottom-2 left-0 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"></path>
              </svg>
            </span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
            We transform educational institutions with intelligent automation.
            Nurture every student lead, deploy 24/7 AI counsellors, and manage your entire admissions pipeline from one unified platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12">
            <Link href="#services" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full text-lg px-8 py-6 rounded-full font-bold border-2 border-border bg-background/50 backdrop-blur-sm hover:bg-secondary transition-all hover:-translate-y-1">
                View Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
