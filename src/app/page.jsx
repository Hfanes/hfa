import About from "@/components/sections/About";
import Navbar from "@/components/layout/Navbar";
import NavForTailwind from "@/components/layout/NavForTailwind";
import LeftNavbar from "@/components/layout/LeftNavbar";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/sections/Footer";
import CustomCursor from "@/components/ui/CustomCursor ";
import Hero from "@/components/sections/Hero";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div
      className="max-w-6xl mx-auto c-space
     transition-colors "
    >
      <CustomCursor />
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <Navbar />
        <LeftNavbar />
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
