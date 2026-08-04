"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfV2U6qyWcZzHFESdUn0hGKzfba-MWWrR53Sot2YOpd0J6tFQ/formResponse";
      const formData = new URLSearchParams();
      formData.append("entry.727289475", data.fullName || "");
      formData.append("entry.611921212", data.phone || "");
      formData.append("entry.927057652", data.email || "");
      formData.append("entry.1814520198", data.city || "");
      formData.append("entry.1814520199", data.state || "");
      formData.append("entry.1814520200", data.institute || "");
      formData.append("entry.735463707", data.designation || "");
      formData.append("entry.2025212453", data.message || "");

      // Use mode: 'no-cors' to bypass CORS restrictions directly from the browser
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });
      
      // With no-cors, the response is opaque, meaning we can't read response.ok
      // We just assume success if it didn't throw a network error
      setIsSuccess(true);
      // Fire Google Ads conversion for form submission
      if (typeof gtag_report_conversion === "function") {
        gtag_report_conversion();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-secondary/30 border border-border backdrop-blur-md rounded-3xl p-5 md:p-6 shadow-2xl relative overflow-hidden w-full max-w-[500px] mx-auto">
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold text-foreground">Book Your Demo</h3>
              <p className="text-xs text-muted-foreground mt-1">Fill out the details below and we&apos;ll be in touch shortly.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-foreground uppercase tracking-wider">Full Name *</label>
                  <Input 
                    placeholder="Enter your name" 
                    {...register("fullName", { required: "Name is required" })} 
                    className={`h-9 bg-background border-border text-foreground placeholder:text-muted-foreground text-sm ${errors.fullName ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-foreground uppercase tracking-wider">Phone Number *</label>
                  <Input 
                    placeholder="Enter phone number" 
                    type="tel"
                    {...register("phone", { required: "Phone number is required" })} 
                    className={`h-9 bg-background border-border text-foreground placeholder:text-muted-foreground text-sm ${errors.phone ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-medium text-foreground uppercase tracking-wider">Email Address *</label>
                <Input 
                  placeholder="Enter email address" 
                  type="email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email address" }
                  })} 
                  className={`h-9 bg-background border-border text-foreground placeholder:text-muted-foreground text-sm ${errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-foreground uppercase tracking-wider">City *</label>
                  <Input 
                    placeholder="Enter city" 
                    {...register("city", { required: "City is required" })} 
                    className={`h-9 bg-background border-border text-foreground placeholder:text-muted-foreground text-sm ${errors.city ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-foreground uppercase tracking-wider">State *</label>
                  <Input 
                    placeholder="Enter state" 
                    {...register("state", { required: "State is required" })} 
                    className={`h-9 bg-background border-border text-foreground placeholder:text-muted-foreground text-sm ${errors.state ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-foreground uppercase tracking-wider">Institution Name *</label>
                  <Input 
                    placeholder="Enter institution name" 
                    {...register("institute", { required: "Institution name is required" })} 
                    className={`h-9 bg-background border-border text-foreground placeholder:text-muted-foreground text-sm ${errors.institute ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-foreground uppercase tracking-wider">What is your role at School? *</label>
                  <select 
                    {...register("designation", { required: "Role is required" })} 
                    defaultValue=""
                    className={`flex w-full rounded-lg border px-3 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:border-transparent transition-all h-9 bg-background border-border text-foreground text-sm ${errors.designation ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                  >
                    <option value="" disabled hidden>Select your role</option>
                    <option value="School Owner">School Owner</option>
                    <option value="Principal">Principal</option>
                    <option value="Management/Trustee">Management/Trustee</option>
                    <option value="Director">Director</option>
                    <option value="Vice Principal">Vice Principal</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-medium text-foreground uppercase tracking-wider">Your Monthly Marketing Budget? *</label>
                <select 
                  {...register("message", { required: "Budget is required" })} 
                  defaultValue=""
                  className={`flex w-full rounded-lg border px-3 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:border-transparent transition-all h-9 bg-background border-border text-foreground text-sm ${errors.message ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                >
                  <option value="" disabled hidden>Select budget</option>
                  <option value="50,000">50,000</option>
                  <option value="1 Lakh">1 Lakh</option>
                  <option value="1.5 Lakh">1.5 Lakh</option>
                  <option value="2 Lakh">2 Lakh</option>
                  <option value="Above 2 Lakh">Above 2 Lakh</option>
                </select>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full mt-1 h-10 text-sm font-bold bg-primary text-white hover:bg-primary/90 transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
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
            className="flex flex-col items-center justify-center text-center py-12 h-full min-h-[300px]"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-6"
            >
              <CheckCircle2 size={40} />
            </motion.div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Awesome!</h3>
            <p className="text-md text-muted-foreground mb-8 max-w-sm">
              Your demo request has been received. Our team will contact you shortly.
            </p>
            <Button variant="outline" onClick={() => setIsSuccess(false)} className="border-border hover:bg-secondary">
              Submit Another Request
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
