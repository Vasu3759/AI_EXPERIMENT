"use client";

import Image from "next/image";

const clientLogos = [
  { name: "Swiss School", src: "/CLIENTS/Swiss_logo.png" },
  { name: "Birkbeck College", src: "/CLIENTS/Birkbeck_logo.png" },
  { name: "Arkangel University", src: "/CLIENTS/arkangel-univ_logo.png" },
  { name: "Doon Defence", src: "/CLIENTS/Doon_defence_logo.png" },
  { name: "Shravana School", src: "/CLIENTS/Shravana_logo.png" },
  { name: "SKS Group", src: "/CLIENTS/Sks_logo.jpg" },
  { name: "Tansen Music Alliance", src: "/CLIENTS/Tansenn_logo.jpg" },
  { name: "Bhatnagar International", src: "/CLIENTS/Bhatnagar_logo.jpeg" },
  { name: "Dibber Schools", src: "/CLIENTS/Dibber_logo.jpeg" },
  { name: "Coventry University", src: "/CLIENTS/coventry university Logo.jpeg" },
  { name: "Sapling", src: "/CLIENTS/sapling-logo.webp" },
];

export default function Clients() {
  // Double the array for infinite scrolling effect
  const doubledLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="py-16 bg-background border-t border-border/50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10 mb-10 text-center">
        <div className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-3 py-1 text-sm font-medium text-primary mb-4 uppercase tracking-widest">
          Our Partners
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-foreground tracking-tighter">
          Trusted by Leading Educational Institutions
        </h2>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative flex overflow-x-hidden w-full py-10">
        {/* Left & Right gradient fades for premium look */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-8">
          {doubledLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white rounded-2xl p-4 w-44 h-24 relative hover:z-30 hover:scale-125 hover:-translate-y-3 hover:shadow-[0_15px_35px_rgba(239,68,68,0.25)] hover:border-primary/40 transition-all duration-200 shrink-0 select-none group border border-border cursor-pointer"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  sizes="176px"
                  className="object-contain transition-transform duration-300 p-1"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
