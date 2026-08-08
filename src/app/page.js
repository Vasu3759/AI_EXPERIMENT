import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Clients from "@/components/sections/Clients";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <Clients />
    </div>
  );
}
