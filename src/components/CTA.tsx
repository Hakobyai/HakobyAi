"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 px-6 overflow-hidden">
      {/* Spotlight gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-20 blur-[120px]"
          style={{
            background:
              "radial-gradient(ellipse, #c9a84c, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Ready to{" "}
          <span className="text-gradient-gold">Stop Losing HVAC Jobs</span> to
          Voicemail?
        </motion.h2>

        <motion.p
          className="text-text-secondary text-lg mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Every missed call is a lost repair, a lost install, a lost
          maintenance contract. Let AI answer so you never lose another one.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative inline-block"
        >
          {/* Pulsing glow behind button */}
          <motion.div
            className="absolute inset-0 rounded-full bg-accent/30 blur-xl"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <a
            href="https://cal.com/ruben-hakobyan-1uhrel/book-apointment"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 px-10 py-4 rounded-full bg-accent text-background font-semibold text-lg hover:bg-accent-dim transition-colors duration-200"
          >
            Book a Free HVAC Demo
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
