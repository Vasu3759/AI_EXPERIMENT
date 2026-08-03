"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How does the AI Counselling agent work?",
    answer: "Our AI Counselling agent uses advanced natural language processing to understand student queries and respond instantly in multiple languages. It can answer questions about courses, fees, admission requirements, and campus life 24/7."
  },
  {
    question: "Can the Admission CRM integrate with our existing systems?",
    answer: "Yes, our Admission CRM is designed to be highly flexible. We offer APIs and pre-built integrations to connect with popular ERP systems, payment gateways, and student information systems already in use at your institution."
  },
  {
    question: "How do Google Ads and Landing Pages help in lead generation?",
    answer: "We run highly targeted Google Ads campaigns based on keyword research relevant to your programs. The traffic is directed to SEO-optimized, fast-loading landing pages designed specifically for high conversion rates, ensuring maximum ROI."
  },
  {
    question: "How long does it take to implement the complete ecosystem?",
    answer: "Implementation typically takes 2 to 4 weeks depending on the size of your institution and specific integration requirements. We provide a dedicated onboarding manager to ensure a smooth transition."
  },
  {
    question: "What is your pricing model?",
    answer: "We offer flexible pricing based on the size of your institution and the specific modules you choose to implement. Contact our sales team for a custom quote tailored to your admission goals."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-[var(--color-section-bg)] border-y border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about our platform and services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={cn(
                  "border rounded-2xl overflow-hidden transition-colors duration-300",
                  openIndex === index ? "bg-white border-[var(--color-primary)] shadow-sm" : "bg-white border-slate-200 hover:border-slate-300"
                )}
              >
                <button
                  className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                >
                  <span className={cn(
                    "font-bold text-lg",
                    openIndex === index ? "text-[var(--color-primary)]" : "text-slate-900"
                  )}>
                    {faq.question}
                  </span>
                  <div className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-full transition-transform duration-300",
                    openIndex === index ? "bg-blue-50 text-[var(--color-primary)] rotate-180" : "bg-slate-50 text-slate-400"
                  )}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
