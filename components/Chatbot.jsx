import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useRef, useState, useEffect } from "react";

const responseMap = [
  {
    keywords: ["who", "you", "name", "developer"],
    answer:
      "I am Yasser Raddaoui, a software engineering student focused on building clean, scalable applications."
  },
  {
    keywords: ["skills", "technologies", "tech", "stack"],
    answer:
      "I work with Java, Spring Boot, Python, JavaScript, PHP, HTML/CSS, MySQL, and REST APIs, plus AI-focused tools."
  },
  {
    keywords: ["projects", "work", "built"],
    answer:
      "Key projects include HARMONIA (AI wellness), Smart Transport System, YASSER-LABEL e-commerce, AI Travel Assistant, EZ Store, and ProScout AI."
  },
  {
    keywords: ["education", "study", "university"],
    answer:
      "I am a software engineering student. I focus on practical projects and continuous learning."
  },
  {
    keywords: ["contact", "email", "phone", "linkedin", "github"],
    answer:
      "You can reach me at yasserraddaoui15@gmail.com, +216 23 759 596, LinkedIn: linkedin.com/in/yasser-raddawi-728a78320, GitHub: github.com/yasserraddaoui."
  }
];

const defaultAnswer =
  "I can help with info about my background, skills, projects, education, or contact details. Try asking one of those.";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi! Ask me about Yasser, skills, projects, education, or contact info."
    }
  ]);
  const historyRef = useRef(null);

  const normalizedResponses = useMemo(
    () =>
      responseMap.map((item) => ({
        ...item,
        keywords: item.keywords.map((word) => word.toLowerCase())
      })),
    []
  );

  useEffect(() => {
    if (!historyRef.current) return;
    historyRef.current.scrollTop = historyRef.current.scrollHeight;
  }, [messages, open]);

  const findResponse = (text) => {
    const lower = text.toLowerCase();
    const match = normalizedResponses.find((item) =>
      item.keywords.some((keyword) => lower.includes(keyword))
    );
    return match ? match.answer : defaultAnswer;
  };

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    const reply = findResponse(trimmed);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
    }, 300);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-4 w-[90vw] max-w-sm overflow-hidden rounded-3xl border border-ember/30 bg-[#0f1118] shadow-[0_20px_60px_-30px_rgba(0,0,0,0.7)]"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-ember">
                  AI Assistant
                </p>
                <p className="text-sm text-fog/70">Ask about Yasser</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-fog/60 hover:text-fog transition"
                aria-label="Close chat"
              >
                ✕
              </button>
            </div>

            <div
              ref={historyRef}
              className="max-h-72 space-y-3 overflow-y-auto px-5 py-4 text-sm"
            >
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 leading-relaxed ${
                      message.role === "user"
                        ? "bg-ember/20 text-ember/90"
                        : "bg-white/5 text-fog/90"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 border-t border-white/10 px-4 py-3">
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your question..."
                className="flex-1 rounded-full bg-white/5 px-4 py-2 text-sm text-fog placeholder:text-fog/40 focus:outline-none focus:ring-2 focus:ring-ember/50"
              />
              <button
                type="button"
                onClick={sendMessage}
                className="rounded-full bg-ember px-4 py-2 text-sm font-semibold text-ink hover:bg-ember/90 transition"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-ember text-ink shadow-[0_12px_30px_-14px_rgba(242,107,56,0.8)] transition hover:scale-105"
        aria-label="Open chat"
      >
        💬
      </button>
    </div>
  );
}
