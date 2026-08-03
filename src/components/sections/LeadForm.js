"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const LeadForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form Data Submitted:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section id="demo" className="py-24 relative overflow-hidden bg-background">
      {/* Background with premium gradient */}
      <div className="absolute inset-0 bg-background z-0" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary rounded-full blur-[120px] opacity-10 -mr-[400px] -mt-[400px] z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary rounded-full blur-[100px] opacity-20 -ml-[300px] -mb-[300px] z-0 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-foreground"
          >
            <div className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-3 py-1 text-sm font-medium text-foreground mb-6 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 mr-2 text-primary" />
              Limited Time Offer: Free Setup
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 leading-tight text-balance">
              Ready to supercharge your <span className="text-primary relative">admissions?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg text-balance">
              Book a free personalized demo with our education experts. We&apos;ll show you exactly how our AI ecosystem can increase your enrollments.
            </p>
            
            <ul className="space-y-4">
              {[
                "Customized walkthrough of the platform",
                "ROI projection for your institution",
                "Actionable insights on lead nurturing",
                "No commitment required"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-muted-foreground font-medium">
                  <CheckCircle2 className="h-5 w-5 mr-3 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-secondary/30 border border-border backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-foreground">Book Your Demo</h3>
                      <p className="text-sm text-muted-foreground mt-1">Fill out the details below and we&apos;ll be in touch shortly.</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-sm font-medium text-foreground">Full Name *</label>
                          <Input 
                            placeholder="John Doe" 
                            {...register("fullName", { required: "Name is required" })} 
                            className={`bg-background border-border text-foreground placeholder:text-muted-foreground ${errors.fullName ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                          />
                          {errors.fullName && <p className="text-xs text-red-500">{errors.fullName.message}</p>}
                        </div>
                        <div className="space-y-1">
                          <label className="text-sm font-medium text-foreground">Phone Number *</label>
                          <Input 
                            placeholder="+91 98765 43210" 
                            type="tel"
                            {...register("phone", { required: "Phone number is required" })} 
                            className={`bg-background border-border text-foreground placeholder:text-muted-foreground ${errors.phone ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                          />
                          {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-sm font-medium text-foreground">Email Address *</label>
                        <Input 
                          placeholder="john@school.edu" 
                          type="email"
                          {...register("email", { 
                            required: "Email is required",
                            pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email address" }
                          })} 
                          className={`bg-background border-border text-foreground placeholder:text-muted-foreground ${errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                        />
                        {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-sm font-medium text-foreground">Institution Name *</label>
                          <Input 
                            placeholder="Global School" 
                            {...register("institute", { required: "Institution name is required" })} 
                            className={`bg-background border-border text-foreground placeholder:text-muted-foreground ${errors.institute ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                          />
                          {errors.institute && <p className="text-xs text-red-500">{errors.institute.message}</p>}
                        </div>
                        <div className="space-y-1">
                          <label className="text-sm font-medium text-foreground">Designation *</label>
                          <Input 
                            placeholder="Director" 
                            {...register("designation", { required: "Designation is required" })} 
                            className={`bg-background border-border text-foreground placeholder:text-muted-foreground ${errors.designation ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                          />
                          {errors.designation && <p className="text-xs text-red-500">{errors.designation.message}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-sm font-medium text-foreground">City *</label>
                          <Input 
                            placeholder="Mumbai" 
                            {...register("city", { required: "City is required" })} 
                            className={`bg-background border-border text-foreground placeholder:text-muted-foreground ${errors.city ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                          />
                          {errors.city && <p className="text-xs text-red-500">{errors.city.message}</p>}
                        </div>
                        <div className="space-y-1">
                          <label className="text-sm font-medium text-foreground">Number of Students</label>
                          <select 
                            className="flex h-12 w-full rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent transition-all"
                            {...register("studentCount")}
                          >
                            <option value="">Select range</option>
                            <option value="1-500">1 - 500</option>
                            <option value="501-2000">501 - 2,000</option>
                            <option value="2001-5000">2,001 - 5,000</option>
                            <option value="5000+">5,000+</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-sm font-medium text-foreground">Message (Optional)</label>
                        <Textarea 
                          placeholder="Tell us about your current admission process..." 
                          {...register("message")} 
                          className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                        />
                      </div>

                      <div className="flex items-start space-x-3 pt-2">
                        <div className="flex items-center h-5">
                          <input 
                            type="checkbox" 
                            id="agree" 
                            className="h-4 w-4 rounded border-border bg-background text-primary focus:ring-primary"
                            {...register("agree", { required: "You must agree to be contacted" })}
                          />
                        </div>
                        <label htmlFor="agree" className="text-sm text-muted-foreground leading-tight">
                          I agree to be contacted via email, phone, or WhatsApp regarding this demo request.
                        </label>
                      </div>
                      {errors.agree && <p className="text-xs text-red-500">{errors.agree.message}</p>}

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full mt-4 h-12 text-lg font-bold bg-primary text-white hover:bg-primary/90 transition-colors"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          "Book My Free Demo"
                        )}
                      </Button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center text-center py-12 h-full min-h-[500px]"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                      className="w-24 h-24 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-6"
                    >
                      <CheckCircle2 size={48} />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-foreground mb-4">Awesome!</h3>
                    <p className="text-lg text-muted-foreground mb-8 max-w-sm">
                      Your demo request has been received. Our team will contact you shortly to schedule the perfect time.
                    </p>
                    <Button variant="outline" onClick={() => setIsSuccess(false)} className="border-border hover:bg-secondary">
                      Submit Another Request
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LeadForm;
