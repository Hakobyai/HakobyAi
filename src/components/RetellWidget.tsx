"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, MicOff, PhoneOff, Loader2 } from "lucide-react";
import { RetellWebClient } from "retell-client-js-sdk";
import { createWebCall } from "@/lib/retell";

type CallStatus = "idle" | "connecting" | "connected" | "speaking" | "error";

export default function RetellWidget() {
  const [status, setStatus] = useState<CallStatus>("idle");
  const [isExpanded, setIsExpanded] = useState(false);
  const retellClientRef = useRef<RetellWebClient | null>(null);

  useEffect(() => {
    const client = new RetellWebClient();
    retellClientRef.current = client;

    client.on("call_started", () => setStatus("connected"));
    client.on("call_ended", () => {
      setStatus("idle");
      setIsExpanded(false);
    });
    client.on("agent_start_talking", () => setStatus("speaking"));
    client.on("agent_stop_talking", () => setStatus("connected"));
    client.on("error", (error) => {
      console.error("Retell error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2000);
    });

    return () => {
      client.stopCall();
    };
  }, []);

  const startCall = useCallback(async () => {
    if (!retellClientRef.current) return;
    setStatus("connecting");
    setIsExpanded(true);

    try {
      const { access_token } = await createWebCall();
      await retellClientRef.current.startCall({
        accessToken: access_token,
        sampleRate: 24000,
      });
    } catch (error) {
      console.error("Failed to start call:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2000);
    }
  }, []);

  const endCall = useCallback(() => {
    retellClientRef.current?.stopCall();
    setStatus("idle");
    setIsExpanded(false);
  }, []);

  const handleClick = () => {
    if (status === "idle") startCall();
    else if (status === "connected" || status === "speaking") endCall();
  };

  const statusLabel: Record<CallStatus, string> = {
    idle: "",
    connecting: "Connecting to AI agent...",
    connected: "AI is listening...",
    speaking: "AI is speaking...",
    error: "Connection error. Try again.",
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Status tooltip */}
      <AnimatePresence>
        {isExpanded && status !== "idle" && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="glass-strong rounded-2xl px-4 py-3 text-sm text-text-secondary min-w-[200px] text-center"
          >
            {statusLabel[status]}
          </motion.div>
        )}
      </AnimatePresence>

      {/* The orb */}
      <motion.button
        onClick={handleClick}
        disabled={status === "connecting"}
        className="relative w-16 h-16 rounded-full flex items-center justify-center cursor-pointer disabled:cursor-wait"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={
          status === "idle"
            ? "Start voice call with AI"
            : "End voice call"
        }
      >
        {/* Pulsing rings for active states */}
        {(status === "connected" || status === "speaking") && (
          <>
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-accent-blue/40"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border border-accent-blue/20"
              animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </>
        )}

        {/* Idle pulse */}
        {status === "idle" && (
          <motion.div
            className="absolute inset-0 rounded-full bg-accent-blue/20"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        {/* Orb body */}
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
          {status === "idle" && <Mic className="w-6 h-6 text-white" />}
          {status === "connecting" && (
            <Loader2 className="w-6 h-6 text-white animate-spin" />
          )}
          {(status === "connected" || status === "speaking") && (
            <PhoneOff className="w-6 h-6 text-white" />
          )}
          {status === "error" && <MicOff className="w-6 h-6 text-white" />}
        </div>
      </motion.button>
    </div>
  );
}
