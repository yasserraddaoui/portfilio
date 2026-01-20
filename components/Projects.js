import { motion } from "framer-motion";

const sectionFade = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

const gridStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const cardLift = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const projects = [
  {
    name: "HARMONIA – AI-powered Wellness Platform",
    description:
      "Harmonia est une plateforme intelligente de bien-etre et de gestion du stress. Elle permet aux utilisateurs d'evaluer leur niveau de stress, de suivre leur etat de sante mentale et de recevoir des recommandations personnalisees basees sur des tests et des donnees utilisateur.",
    tech: [
      "Java",
      "Spring Boot",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
      "Maven",
      "Git",
      "GitHub"
    ],
    link: "https://github.com"
  },
  {
    name: "Smart Transport System",
    description:
      "Systeme de transport intelligent base sur une architecture microservices. Le projet gere les bus, les conducteurs, la geolocalisation GPS et la billetterie de maniere distribuee et scalable.",
    tech: [
      "Java (Spring Boot)",
      "Node.js",
      "FastAPI",
      "Python",
      "C# (SOAP)",
      "Docker",
      "REST",
      "SOAP"
    ],
    link: "https://github.com"
  },
  {
    name: "YASSER-LABEL – E-commerce Clothing Brand",
    description:
      "Plateforme e-commerce pour une marque de vetements. Le projet gere l'affichage des produits, l'inscription des utilisateurs et la logique de commande.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Git", "GitHub"],
    link: "https://github.com"
  },
  {
    name: "AI Travel Assistant Chatbot",
    description:
      "Assistant intelligent de voyage capable de repondre aux questions liees aux vols, itineraires, horaires et informations de transport. Architecture modulaire orientee chatbot.",
    tech: ["Python", "XML", "Batch scripts", "Git", "GitHub"],
    link: "https://github.com"
  },
  {
    name: "EZ Store – Gaming & Digital Games Platform",
    description:
      "Plateforme web dediee aux jeux video et contenus gaming. Interface moderne et intuitive, prete pour une extension e-commerce.",
    tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Git", "GitHub"],
    link: "https://github.com"
  },
  {
    name: "ProScout AI – Intelligent Player Scouting Platform",
    description:
      "Plateforme intelligente de scouting sportif basee sur l'IA pour analyser les performances des joueurs, identifier des talents et comparer des profils sportifs.",
    tech: [
      "Python",
      "Machine Learning",
      "pandas",
      "numpy",
      "scikit-learn",
      "Matplotlib",
      "Seaborn",
      "CSV",
      "SQLite",
      "Git",
      "GitHub"
    ],
    link: "https://github.com"
  }
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="px-6 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      variants={sectionFade}
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-ember font-semibold">
          Projects
        </p>
        <h3 className="mt-4 text-3xl sm:text-4xl font-display text-fog">
          Selected work that blends craft and performance.
        </h3>
        <motion.div
          className="mt-10 grid gap-6 lg:grid-cols-3"
          variants={gridStagger}
        >
          {projects.map((project) => (
            <motion.article
              key={project.name}
              variants={cardLift}
              whileHover={{
                y: -6,
                scale: 1.01,
                boxShadow: "0 25px 70px -45px rgba(242,107,56,0.6)"
              }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft"
            >
              <div>
                <h4 className="text-2xl font-display text-fog">
                  {project.name}
                </h4>
                <p className="mt-3 text-fog/80 font-body leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-xs uppercase tracking-wider text-ember border border-ember/40 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.link}
                className="mt-8 inline-flex items-center justify-between text-fog font-body hover:text-white transition"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
                <span className="text-ember">↗</span>
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
