"use client";

import { motion } from "framer-motion";
import { Phone, AlertTriangle, CalendarCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Step {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: Phone,
    title: "Instant Answer",
    description:
      "Customer calls your HVAC line. AI typically picks up within seconds — 24/7, no hold music, no voicemail.",
  },
  {
    number: "02",
    icon: AlertTriangle,
    title: "Triage & Qualify",
    description:
      "Detects urgency like 'no heat,' 'no AC,' or 'unit not turning on.' Separates emergencies from routine maintenance requests.",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Book & Handoff",
    description:
      "Books the appointment directly into your calendar or CRM. Transfers emergencies to your on-call tech when needed.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What Happens When a Customer{" "}
            <span className="text-gradient-gold">Calls</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-lg">
            Every call follows the same reliable flow — whether it&apos;s 2 PM or
            2 AM, peak season or off-season.
          </p>
        </motion.div>

        {/* Timeline badge */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass text-sm text-accent font-medium">
            <Phone className="w-4 h-4" />
            Every call, every time
          </span>
        </motion.div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-24 left-[16.7%] right-[16.7%] h-px bg-gradient-to-r from-transparent via-border-glass to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              {/* Step number */}
              <span className="text-5xl font-bold text-gradient-gold opacity-25 select-none">
                {step.number}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-full glass-strong flex items-center justify-center mx-auto mt-3 mb-4">
                <step.icon className="w-6 h-6 text-accent" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-sm leading-relaxed max-w-[260px] mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
