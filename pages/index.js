import Head from "next/head";
import { useCallback } from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Chatbot from "../components/Chatbot";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

export default function Home() {
  const scrollToSection = useCallback((id) => {
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <>
      <Head>
        <title>Yasser Raddaoui | Portfolio</title>
        <meta
          name="description"
          content="Professional portfolio of Yasser Raddaoui, full-stack developer."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-[#0b0d13] text-fog font-body">

        <motion.nav
          className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
            <button
              type="button"
              onClick={() => scrollToSection("hero")}
              className="text-2xl font-display text-fog tracking-wide"
            >
              YA
            </button>
            <div className="hidden md:flex items-center gap-6 text-sm uppercase tracking-[0.2em]">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="text-fog/70 hover:text-fog transition"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="px-4 py-2 rounded-full border border-ember text-ember hover:bg-ember hover:text-ink transition text-sm"
            >
              Contact Me
            </button>
          </div>
        </motion.nav>

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <Chatbot />

        <footer className="px-6 py-10 text-center text-fog/50 text-sm">
          © 2024 Yasser Raddaoui. Crafted with Next.js & Tailwind CSS.
        </footer>
      </div>
    </>
  );
}
