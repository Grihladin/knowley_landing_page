// WaitlistForm: React state-based, accessible, and user-friendly waitlist form
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { formInputVariants, formButtonVariants } from "./utils/animations";

const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setMessage("Please enter a valid email address");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setMessage("Processing...");
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (response.ok) {
        setEmail("");
        setMessage("Success! You've been added to our waitlist.");
        setStatus("success");
      } else {
        setMessage(data.message || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setMessage("Failed to connect to server. Please try again.");
      setStatus("error");
    }
  };

  return (
    <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubmit} aria-label="Join waitlist form">
      <motion.input
        variants={formInputVariants}
        whileFocus="focus"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Enter your work email"
        className="flex-grow px-4 py-3 rounded-lg text-gray-dark border-2 border-white outline-none focus:ring-2 focus:ring-primary-light"
        required
        aria-label="Work email"
      />
      <motion.button
        variants={formButtonVariants}
        whileHover={status !== "loading" ? "hover" : undefined}
        whileTap={status !== "loading" ? "tap" : undefined}
        animate={status === "loading" ? "loading" : "visible"}
        type="submit"
        className="bg-accent text-white px-5 py-3 rounded-lg hover:bg-accent/90 transition-colors font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary"
        disabled={status === "loading"}
        aria-busy={status === "loading"}
      >
        {status === "loading" ? "Joining..." : "Join Waitlist"}
      </motion.button>
      <AnimatePresence mode="wait">
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className={`waitlist-message text-sm mt-3 ${
              status === "success" 
                ? "text-green-300" 
                : status === "error" 
                ? "text-yellow-300" 
                : "text-white"
            }`}
            role="status"
            aria-live="polite"
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
};

export default WaitlistForm;
