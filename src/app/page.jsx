import About from "@/components/sections/About";
import Navbar from "@/components/layout/Navbar";
import NavForTailwind from "@/components/layout/NavForTailwind";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/sections/Footer";
import CustomCursor from "@/components/ui/CustomCursor ";
import Hero from "@/components/sections/Hero";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div
      className="max-w-6xl mx-auto c-space
    text-zinc-900 transition-colors bg-white dark:bg-zinc-900 dark:text-zinc-100"
    >
      <CustomCursor />
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <Navbar />
        <NavForTailwind />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
