import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export default function Contact() {
  const tabs = ["Experience", "Education", "Skills", "About me"];
  const [activeTab, setActiveTab] = useState("Experience");

  const tabContent = {
    Experience: [
      { label: "Role", value: "Internship / Academic projects" },
      { label: "Focus", value: "Full-stack development & applied AI" },
      { label: "Availability", value: "Open for Internship / PFE" }
    ],
    Education: [
      { label: "Degree", value: "Software Engineering Student" },
      { label: "University", value: "To be added" },
      { label: "Year", value: "2024 - Present" }
    ],
    Skills: [
      { label: "Backend", value: "Java, Spring Boot, PHP, REST, SOAP" },
      { label: "Frontend", value: "HTML, CSS, JavaScript, Responsive UI" },
      { label: "AI & Data", value: "Python, ML fundamentals, data analysis" }
    ],
    "About me": [
      {
        label: "Summary",
        value:
          "I am a software engineering student with a strong interest in building clean, scalable, and efficient applications. I enjoy working on real-world projects and exploring AI-driven solutions. I am motivated, detail-oriented, and continuously improving my technical and problem-solving skills."
      },
      { label: "Phone", value: "+216 23 759 596" },
      {
        label: "Email",
        value: "yasserraddaoui15@gmail.com",
        link: "mailto:yasserraddaoui15@gmail.com"
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/yasser-raddawi-728a78320",
        link: "https://www.linkedin.com/in/yasser-raddawi-728a78320/"
      },
      {
        label: "GitHub",
        value: "github.com/yasserraddaoui",
        link: "https://github.com/yasserraddaoui"
      },
      { label: "Languages", value: "Arabic, French, English" },
      { label: "Location", value: "Tunisia" }
    ]
  };

  return (
    <motion.section
      id="contact"
      className="px-6 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      variants={fadeUp}
    >
      <div className="max-w-6xl mx-auto rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10 shadow-soft">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-ember font-semibold">
                Resume / Contact
              </p>
              <h3 className="mt-4 text-3xl sm:text-4xl font-display text-fog">
                Professional profile
              </h3>
              <p className="mt-3 text-fog/70 font-body">
                Quick access to experience, education, and contact channels.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {tabs.map((item) => {
                const isActive = activeTab === item;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setActiveTab(item)}
                    className={`rounded-full border px-5 py-2 text-sm uppercase tracking-[0.2em] transition ${
                      isActive
                        ? "border-ember text-ember"
                        : "border-ember/40 text-ember hover:border-ember hover:text-ember"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            {tabContent[activeTab].map((item) => (
              <div
                key={`${activeTab}-${item.label}`}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-white/10 pb-3"
              >
                <span className="text-sm uppercase tracking-[0.25em] text-fog/50">
                  {item.label}
                </span>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-ember hover:text-ember/80 transition"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-fog font-body">{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
