"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Lock, Server } from "lucide-react";

const trustItems = [
  {
    icon: Lock,
    label: "256-bit Encryption",
    detail: "Every call fully encrypted",
  },
  {
    icon: Server,
    label: "99.9% Uptime SLA",
    detail: "No downtime during peak season",
  },
  {
    icon: Shield,
    label: "HVAC-Trained AI",
    detail: "Knows heating, cooling & IAQ",
  },
  {
    icon: Clock,
    label: "24/7 Coverage",
    detail: "Nights, weekends & holidays",
  },
];

export default function TrustBar() {
  return (
    <section className="py-12 px-6 border-y border-border-subtle">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/5 border border-accent/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-sm font-medium text-text-primary">
                  {item.label}
                </p>
                <p className="text-xs text-text-muted">{item.detail}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
