import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import CustomCursor from "@/components/ui/CustomCursor";
import Hero from "@/components/sections/Hero";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div
      className="max-w-6xl mx-auto c-space
     transition-colors"
    >
      <CustomCursor />
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
