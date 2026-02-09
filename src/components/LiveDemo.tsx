"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, PhoneOff, Loader2, CheckCircle } from "lucide-react";
import { createWebCall } from "@/lib/retell";

type CallStatus = "idle" | "connecting" | "connected" | "speaking" | "error";

export default function LiveDemo() {
  const [status, setStatus] = useState<CallStatus>("idle");
  const retellClientRef = useRef<RetellWebClientType | null>(null);

  type RetellWebClientType = InstanceType<
    typeof import("retell-client-js-sdk").RetellWebClient
  >;

  const initClient = useCallback(async () => {
    if (retellClientRef.current) return;

    const { RetellWebClient } = await import("retell-client-js-sdk");
    const client = new RetellWebClient();
    retellClientRef.current = client;

    client.on("call_started", () => setStatus("connected"));
    client.on("call_ended", () => setStatus("idle"));
    client.on("agent_start_talking", () => setStatus("speaking"));
    client.on("agent_stop_talking", () => setStatus("connected"));
    client.on("error", (error: unknown) => {
      console.error("Retell error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    });
  }, []);

  const startCall = useCallback(async () => {
    setStatus("connecting");

    try {
      await initClient();
      const { access_token } = await createWebCall();
      await retellClientRef.current!.startCall({
        accessToken: access_token,
        sampleRate: 24000,
      });
    } catch (error) {
      console.error("Failed to start call:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }, [initClient]);

  const endCall = useCallback(() => {
    retellClientRef.current?.stopCall();
    setStatus("idle");
  }, []);

  const handleClick = () => {
    if (status === "idle" || status === "error") startCall();
    else if (status === "connected" || status === "speaking") endCall();
  };

  useEffect(() => {
    return () => {
      retellClientRef.current?.stopCall();
    };
  }, []);

  const statusLabel: Record<CallStatus, string> = {
    idle: "Click the microphone to start",
    connecting: "Connecting to your HVAC AI agent...",
    connected: "AI is listening — speak naturally",
    speaking: "AI is responding...",
    error: "Connection failed. Try again.",
  };

  const isActive = status === "connected" || status === "speaking";

  return (
    <section id="demo" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Hear Your{" "}
              <span className="text-gradient-gold">HVAC AI Agent</span> in
              Action
            </h2>
            <p className="text-text-secondary text-lg mb-6 leading-relaxed">
              Talk to our AI agent right now — directly from your browser. No
              phone call needed. It will handle your request just like a real
              HVAC customer call.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5 shrink-0">
                  <CheckCircle className="w-3.5 h-3.5 text-accent" />
                </div>
                <p className="text-text-secondary text-sm">
                  Hear how it handles &quot;my AC is out&quot; vs. &quot;I need a
                  tune-up&quot;
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5 shrink-0">
                  <CheckCircle className="w-3.5 h-3.5 text-accent" />
                </div>
                <p className="text-text-secondary text-sm">
                  Experience real-time appointment booking and dispatch logic
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5 shrink-0">
                  <CheckCircle className="w-3.5 h-3.5 text-accent" />
                </div>
                <p className="text-text-secondary text-sm">
                  No commitment — just proof it works for HVAC
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right side - voice call interface */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="glass-strong rounded-3xl p-8 sm:p-10 flex flex-col items-center">
              <h3 className="text-xl font-semibold text-text-primary mb-1">
                Try the AI Live
              </h3>
              <p className="text-text-muted text-sm mb-8">
                Uses your microphone — allow access when prompted.
              </p>

              {/* Microphone button */}
              <div className="relative mb-6">
                {/* Pulsing rings when active */}
                <AnimatePresence>
                  {isActive && (
                    <>
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-accent-blue/40"
                        initial={{ scale: 1, opacity: 0 }}
                        animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute inset-0 rounded-full border border-accent-blue/20"
                        initial={{ scale: 1, opacity: 0 }}
                        animate={{
                          scale: [1, 2, 1],
                          opacity: [0.3, 0, 0.3],
                        }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      />
                    </>
                  )}
                </AnimatePresence>

                {/* Idle pulse */}
                {status === "idle" && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-accent-blue/20"
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.3, 0, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}

                <motion.button
                  onClick={handleClick}
                  disabled={status === "connecting"}
                  className="relative w-24 h-24 rounded-full flex items-center justify-center cursor-pointer disabled:cursor-wait"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={
                    status === "idle"
                      ? "Start voice call with AI"
                      : "End voice call"
                  }
                >
                  <div
                    className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
                      status === "idle"
                        ? "bg-gradient-to-br from-accent-blue to-blue-700 shadow-accent-blue/25"
                        : status === "connecting"
                          ? "bg-gradient-to-br from-amber-600 to-accent animate-pulse shadow-accent/25"
                          : status === "error"
                            ? "bg-red-600 shadow-red-600/25"
                            : "bg-gradient-to-br from-accent-blue to-blue-600 shadow-accent-blue/40"
                    }`}
                  >
                    {status === "idle" && (
                      <Mic className="w-8 h-8 text-white" />
                    )}
                    {status === "connecting" && (
                      <Loader2 className="w-8 h-8 text-white animate-spin" />
                    )}
                    {isActive && (
                      <PhoneOff className="w-8 h-8 text-white" />
                    )}
                    {status === "error" && (
                      <Mic className="w-8 h-8 text-white" />
                    )}
                  </div>
                </motion.button>
              </div>

              {/* Status text */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={status}
                  className={`text-sm text-center ${
                    status === "error"
                      ? "text-red-400"
                      : isActive
                        ? "text-accent-blue"
                        : "text-text-muted"
                  }`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  {statusLabel[status]}
                </motion.p>
              </AnimatePresence>

              {/* Active call indicator */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 w-full"
                  >
                    <div className="flex items-center justify-center gap-1.5">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`w-1 rounded-full ${
                            status === "speaking"
                              ? "bg-accent-blue"
                              : "bg-accent-blue/40"
                          }`}
                          animate={{
                            height:
                              status === "speaking"
                                ? [8, 24, 8]
                                : [8, 12, 8],
                          }}
                          transition={{
                            duration: status === "speaking" ? 0.5 : 1.5,
                            repeat: Infinity,
                            delay: i * 0.1,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-text-muted text-center mt-3">
                      {status === "speaking"
                        ? "Agent is talking..."
                        : "Listening — try saying \"My AC stopped working\""}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <p className="text-text-muted text-xs text-center mt-6">
                Requires microphone access. Works best in Chrome or Edge.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
