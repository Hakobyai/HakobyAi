"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const languages = [
  { name: "English", flag: "🇺🇸", native: "English" },
  { name: "Russian", flag: "🇷🇺", native: "Русский" },
  { name: "Armenian", flag: "🇦🇲", native: "Հայերեն" },
];

export default function Languages() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-14 h-14 rounded-full glass-strong flex items-center justify-center mx-auto mb-6">
            <Globe className="w-7 h-7 text-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Your Customers&apos; Language,{" "}
            <span className="text-gradient-gold">Our AI&apos;s Fluency</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-lg mb-12">
            Supports multilingual HVAC callers in English, Russian, and
            Armenian — so language barriers don&apos;t cost you jobs.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="glass rounded-2xl px-6 py-4 flex items-center gap-3 hover:border-accent/20 transition-colors duration-300"
            >
              <span className="text-2xl">{lang.flag}</span>
              <div className="text-left">
                <p className="text-sm font-medium text-text-primary">
                  {lang.name}
                </p>
                <p className="text-xs text-text-muted">{lang.native}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
