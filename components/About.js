import { motion } from "framer-motion";

const fadeLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0 }
};

export default function About() {
  return (
    <motion.section
      id="about"
      className="px-6 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      variants={fadeLeft}
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-ember font-semibold">
          About
        </p>
        <h3 className="mt-4 text-3xl sm:text-4xl font-display text-fog">
          Building scalable software with clarity and purpose.
        </h3>
        <p className="mt-6 text-fog/80 font-body leading-relaxed text-base sm:text-lg">
          I am a software engineering student focused on building clean,
          scalable, and efficient applications. I enjoy working on real-world
          projects, from web development to backend systems, with a strong
          interest in AI-driven products. I aim to bridge solid engineering
          practices with practical problem-solving and continuously improve my
          technical skills.
        </p>
      </div>
    </motion.section>
  );
}
