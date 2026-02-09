"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

const stats: Stat[] = [
  { value: 97, suffix: "%", label: "Call Answer Rate" },
  { value: 24, suffix: "/7", label: "Always Available" },
  { value: 5, suffix: " sec", label: "Avg. Response Time", prefix: "<" },
  { value: 200, suffix: "+", label: "Calls Handled Monthly" },
];

function AnimatedStat({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, stat.value, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setDisplayed(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      className="glass rounded-2xl p-8 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-4xl sm:text-5xl font-bold text-gradient-gold mb-2">
        {stat.prefix}{displayed}
        {stat.suffix}
      </div>
      <p className="text-text-secondary text-sm">{stat.label}</p>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section id="results" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Built for <span className="text-gradient-gold">HVAC Results</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-lg">
            Designed to deliver measurable impact for HVAC operations.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
