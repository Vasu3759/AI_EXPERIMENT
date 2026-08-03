"use client";

import { motion } from "framer-motion";
import { 
  Bot, 
  Mic, 
  KanbanSquare, 
  MessageCircle, 
  TrendingUp, 
  Layout 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    title: "AI Counselling",
    description: "24×7 multilingual AI counsellor that engages students instantly and accurately.",
    icon: Bot,
    features: ["24x7 Availability", "Multilingual Support", "Instant Queries Resolved"]
  },
  {
    title: "Voice AI",
    description: "Human-like voice agents to handle inbound and outbound admission calls.",
    icon: Mic,
    features: ["Automated Phone Calls", "Instant Responses", "Natural Conversations"]
  },
  {
    title: "Admission CRM",
    description: "Comprehensive CRM built specifically for educational institutions.",
    icon: KanbanSquare,
    features: ["Lead Pipeline", "Smart Follow-ups", "Task Management", "Detailed Reports"]
  },
  {
    title: "Lead Nurturing",
    description: "Automated omni-channel nurturing to keep your institution top-of-mind.",
    icon: MessageCircle,
    features: ["WhatsApp Automation", "Email & SMS", "Automatic Reminders"]
  },
  {
    title: "Google Ads",
    description: "Data-driven performance marketing to generate high-quality student leads.",
    icon: TrendingUp,
    features: ["Lead Gen Campaigns", "Campaign Optimization", "Keyword Research"]
  },
  {
    title: "Landing Pages",
    description: "High-converting landing pages designed to maximize your marketing ROI.",
    icon: Layout,
    features: ["Fast Loading", "SEO Optimized", "High Conversion", "Mobile Responsive"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-3 py-1 text-sm font-medium text-primary mb-4 uppercase tracking-widest">
            Our Solutions
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tighter mb-4">
            Complete Admission Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to attract, engage, and enroll students, integrated into one powerful platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-border/50 bg-secondary/20 shadow-sm hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 group relative overflow-hidden backdrop-blur-md">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent opacity-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500`} />
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300 border border-primary/20`}>
                    <service.icon size={28} />
                  </div>
                  <CardTitle className="text-xl text-foreground font-bold tracking-tight">{service.title}</CardTitle>
                  <CardDescription className="text-base mt-2 text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mt-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-sm text-muted-foreground font-medium">
                        <span className={`mr-2 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
