"use client";

import { motion } from "framer-motion";
import { 
  Megaphone, 
  Bot, 
  HeartHandshake, 
  Database, 
  GraduationCap, 
  LineChart,
  ArrowRight
} from "lucide-react";

const steps = [
  { name: "Generate Leads", icon: Megaphone, color: "text-blue-500", bg: "bg-blue-100" },
  { name: "AI Counselling", icon: Bot, color: "text-indigo-500", bg: "bg-indigo-100" },
  { name: "Lead Nurturing", icon: HeartHandshake, color: "text-purple-500", bg: "bg-purple-100" },
  { name: "Admission CRM", icon: Database, color: "text-rose-500", bg: "bg-rose-100" },
  { name: "Admission", icon: GraduationCap, color: "text-amber-500", bg: "bg-amber-100" },
  { name: "Analytics", icon: LineChart, color: "text-emerald-500", bg: "bg-emerald-100" }
];

const Workflow = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            How The Ecosystem Works
          </h2>
          <p className="text-lg text-slate-600">
            A seamless, automated pipeline that takes a prospective student from their first click to final enrollment.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-slate-100 -translate-y-1/2 z-0" />
          
          {/* Mobile connecting line */}
          <div className="md:hidden absolute top-0 bottom-0 left-[27px] w-1 bg-slate-100 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex md:flex-col items-center gap-4 md:gap-6 relative group"
              >
                <div className={`w-14 h-14 rounded-full ${step.bg} ${step.color} flex items-center justify-center shrink-0 border-4 border-white shadow-sm z-10 transition-transform group-hover:scale-110 duration-300`}>
                  <step.icon size={24} />
                </div>
                
                <div className="md:text-center">
                  <h3 className="font-bold text-slate-900 mb-1">{step.name}</h3>
                </div>

                {/* Desktop Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 md:-right-2 -translate-y-1/2 text-slate-300">
                    <ArrowRight size={20} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Workflow;
