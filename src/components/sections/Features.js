"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const whyUs = [
  "AI Automation", "Higher Admissions", "Less Manual Work", 
  "Instant Follow-ups", "CRM Integration", "Analytics Dashboard", "Higher ROI"
];

const features = [
  "Voice AI", "WhatsApp Integration", "Google Ads", "Landing Pages",
  "CRM", "Analytics", "Email Automation", "Call Automation",
  "Role Management", "Reports", "Lead Tracking", "Automation Rules"
];

const Features = () => {
  return (
    <section id="why-us" className="py-24 bg-[var(--color-section-bg)]">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-6 text-balance">
              Why Educational Institutions Choose Us
            </h2>
            <p className="text-lg text-slate-600 mb-8 text-balance">
              We replace fragmented tools and manual processes with a unified AI-powered platform designed specifically for education.
            </p>
            
            <div className="flex flex-col gap-4">
              {whyUs.map((item, index) => (
                <Card key={index} className="border-none shadow-sm bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="bg-green-100 p-2 rounded-full text-green-600">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="font-semibold text-slate-800">{item}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-[var(--color-primary)] rounded-full blur-[100px] opacity-40" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-[var(--color-secondary)] rounded-full blur-[100px] opacity-30" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8">Everything you need in one platform</h3>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                    <span className="text-slate-300 text-sm md:text-base font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Features;
