"use client";

import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-slate-600">
            Have questions? Our team is here to help you transform your admission process.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-full text-[var(--color-primary)]">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Phone</h4>
                  <p className="text-slate-600">+91 98765 43210</p>
                  <p className="text-slate-600">+91 11223 34455</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-teal-50 p-3 rounded-full text-[var(--color-secondary)]">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                  <p className="text-slate-600">hello@eduai.com</p>
                  <p className="text-slate-600">support@eduai.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-amber-50 p-3 rounded-full text-[var(--color-accent)]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Office</h4>
                  <p className="text-slate-600">
                    4th Floor, Innovation Tower,<br />
                    Cyber City, Phase 2,<br />
                    Gurugram, Haryana 122002
                  </p>
                </div>
              </div>
            </div>

            {/* Map Mockup */}
            <div className="w-full h-48 bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden relative">
               <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-50">
                  <span>[Google Map Integration Here]</span>
               </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="lg:col-span-3">
            <Card className="border-none shadow-xl bg-white h-full">
              <CardContent className="p-8 md:p-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Name</label>
                      <Input placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Email</label>
                      <Input type="email" placeholder="you@company.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Subject</label>
                    <Input placeholder="How can we help?" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Message</label>
                    <Textarea placeholder="Write your message here..." className="min-h-[150px]" />
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto px-8">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
