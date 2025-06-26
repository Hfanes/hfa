import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NavForTailwind from "./components/NavForTailwind";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div
      className="max-w-6xl mx-auto c-space
      text-zinc-900 transition-colors bg-white dark:bg-zinc-900 dark:text-zinc-100"
    >
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <Navbar />
        <NavForTailwind />
        <Hero />
        <Projects />
      </main>
    </div>
  );
}
