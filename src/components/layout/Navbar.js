"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 flex justify-center",
        isScrolled ? "top-4" : "top-6"
      )}
    >
      <div 
        className={cn(
          "w-full max-w-5xl transition-all duration-300 ease-in-out rounded-full",
          isScrolled
            ? "bg-secondary/80 backdrop-blur-md shadow-2xl shadow-black/50 border border-border py-3 px-6"
            : "bg-transparent py-3 px-2"
        )}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img 
              src="https://chalksnboard.in/brandlogo.jpg" 
              alt="ChalksNBoard Logo" 
              className="h-10 w-auto object-contain rounded-lg"
            />
            <span className="font-black text-xl tracking-tighter text-white hidden sm:block">
              CHALKS<span className="text-primary drop-shadow-md">N</span>BOARD
            </span>
          </Link>

          {/* Right Section */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-4 mr-2">
              <Link href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Solutions
              </Link>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link href="#demo">
                <Button size="sm" className="bg-primary text-white hover:bg-primary/90 font-bold rounded-full px-6">
                  Book Demo
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden flex items-center justify-center p-2 text-muted-foreground hover:text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full mt-4 left-4 right-4 bg-secondary border border-border rounded-2xl shadow-2xl py-4 px-4 flex flex-col space-y-4 backdrop-blur-md">
          <div className="flex flex-col space-y-3">
            <Link href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-foreground font-medium p-2 hover:bg-secondary/80 rounded-lg">
              Solutions
            </Link>
            <Link href="#demo" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
              <Button className="w-full bg-primary text-white font-bold">Book Demo</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
