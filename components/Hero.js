import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="min-h-[70vh] flex items-center justify-center px-6 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      variants={fadeUp}
    >
      <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="text-center lg:text-left">
          <p className="text-sm uppercase tracking-[0.35em] text-ember font-semibold">
            Available for freelance
          </p>
          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-display text-fog">
            Yasser Raddaoui
          </h1>
        <h2 className="mt-4 text-xl sm:text-2xl text-ember font-body">
          Full-Stack Developer
        </h2>
          <p className="mt-6 text-base sm:text-lg text-fog/80 font-body leading-relaxed">
            I build fast, expressive web experiences that blend clean
            architecture with bold visual design.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-ember text-ink font-semibold shadow-soft hover:translate-y-[-2px] transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-fog/40 text-fog hover:border-fog hover:text-white transition"
            >
              Let&#39;s Talk
            </a>
          </div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="absolute -inset-8 rounded-full bg-ember/20 blur-3xl" />
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "repeating-conic-gradient(#f26b38 0deg 14deg, rgba(242,107,56,0.18) 14deg 28deg)",
              WebkitMask:
                "radial-gradient(farthest-side, transparent calc(100% - 16px), #000 calc(100% - 15px))",
              mask:
                "radial-gradient(farthest-side, transparent calc(100% - 16px), #000 calc(100% - 15px))"
            }}
            animate={{
              rotate: 360,
              boxShadow: [
                "0 0 16px rgba(242,107,56,0.35)",
                "0 0 28px rgba(242,107,56,0.55)",
                "0 0 16px rgba(242,107,56,0.35)"
              ]
            }}
            transition={{
              rotate: { duration: 16, repeat: Infinity, ease: "linear" },
              boxShadow: { duration: 2.8, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          <motion.div
            className="relative mx-auto h-[320px] w-[320px] sm:h-[360px] sm:w-[360px] overflow-hidden rounded-full border border-white/10 bg-white/5 shadow-soft"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src="/yasser.png"
              alt="Portrait of Yasser Raddaoui"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
