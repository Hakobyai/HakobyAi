"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  CalendarCheck,
  BarChart3,
  PhoneForwarded,
  Thermometer,
  Clock,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: AlertTriangle,
    title: "Emergency Detection",
    description:
      "Detects urgency like 'no heat,' 'no AC,' or 'unit not turning on' and can escalate immediately to your on-call team.",
  },
  {
    icon: Thermometer,
    title: "Seasonal Scaling",
    description:
      "Handles peak-season call spikes — summer AC rushes, winter heating emergencies — without adding headcount.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Booking",
    description:
      "Books service calls directly into your calendar or CRM. Confirms time slots, captures job details, and sends reminders.",
  },
  {
    icon: PhoneForwarded,
    title: "Human Handoff",
    description:
      "Transfers urgent or complex calls to your on-call technician or dispatcher based on your custom escalation rules.",
  },
  {
    icon: Clock,
    title: "After-Hours Coverage",
    description:
      "Answers nights, weekends, and holidays. Designed to book jobs the same way it does during business hours — so callers never hit voicemail.",
  },
  {
    icon: BarChart3,
    title: "CRM + Call Records",
    description:
      "Logs call summaries, transcripts, and outcomes to your dispatch workflow. Full visibility into every interaction.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Built for <span className="text-gradient-gold">HVAC Companies</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            You spend thousands on ads — then calls hit voicemail. After-hours
            surges and busy dispatchers cost you booked jobs. Capture every
            opportunity and stop handing revenue to competitors.
          </p>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group glass rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 hover:scale-[1.02]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
