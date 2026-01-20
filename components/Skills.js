import { motion } from "framer-motion";

const fadeRight = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0 }
};

const languages = [
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  {
    name: "SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  }
];

const skillGroups = [
  {
    title: "Backend Development",
    items: [
      "Spring Boot (REST APIs, backend architecture)",
      "Python backend (scripts, logic, MVC structure)",
      "PHP backend (authentication, data handling)",
      "RESTful API design",
      "SOAP services (basic knowledge)"
    ]
  },
  {
    title: "Frontend Development",
    items: [
      "HTML / CSS / JavaScript",
      "Responsive web design",
      "User interface implementation",
      "Frontend-backend integration"
    ]
  },
  {
    title: "AI & Data",
    items: [
      "Machine learning fundamentals",
      "Player performance analysis (ProScout AI)",
      "Data preprocessing & feature extraction",
      "Similarity analysis & scoring models",
      "AI-based recommendation systems",
      "Chatbot logic & conversational assistants"
    ]
  },
  {
    title: "Databases",
    items: [
      "MySQL",
      "SQLite",
      "Database design & queries",
      "Backend-database integration"
    ]
  },
  {
    title: "Software Architecture",
    items: [
      "MVC architecture",
      "Microservices architecture",
      "Modular project design",
      "Separation of concerns (frontend / backend)"
    ]
  },
  {
    title: "DevOps & Tools",
    items: [
      "Git & GitHub (advanced usage)",
      "Branching",
      "Merge conflict resolution",
      "Force push (controlled)",
      "Docker & Docker Compose",
      "Maven",
      "Project versioning & repo management"
    ]
  },
  {
    title: "Soft Skills",
    items: [
      "Problem solving",
      "Debugging & troubleshooting",
      "Project structuring",
      "Independent learning",
      "Real-world project management",
      "Technical documentation (README, portfolio)"
    ]
  }
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="px-6 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      variants={fadeRight}
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-ember font-semibold">
          Technical Skills - Yasser Raddaoui
        </p>
        <h3 className="mt-4 text-3xl sm:text-4xl font-display text-fog">
          Full-stack skills with strong delivery focus.
        </h3>

        <div className="mt-10">
          <h4 className="text-lg uppercase tracking-[0.25em] text-fog/70 font-semibold">
            Programming Languages
          </h4>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {languages.map((language) => (
              <div
                key={language.name}
                className="group relative flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <img
                  src={language.icon}
                  alt={`${language.name} logo`}
                  className="h-7 w-7"
                />
                <span className="text-fog font-body text-sm">
                  {language.name}
                </span>
                <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 rounded-full bg-ink px-3 py-1 text-xs uppercase tracking-[0.2em] text-fog/80 opacity-0 transition duration-200 group-hover:-translate-y-1 group-hover:opacity-100">
                  {language.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h4 className="text-lg font-semibold text-fog">{group.title}</h4>
              <ul className="mt-4 space-y-2 text-fog/80 font-body text-sm">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-ember" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
