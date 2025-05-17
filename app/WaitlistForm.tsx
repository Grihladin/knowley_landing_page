// WaitlistForm: React state-based, accessible, and user-friendly waitlist form
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { formInputVariants, buttonVariants } from "./utils/animations";
import { validateEmail } from "./utils/validation";

const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [touched, setTouched] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateEmail(email);
    if (!validation.isValid) {
      setMessage(validation.message);
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
        setMessage("✓ Successfully joined the waitlist!");
        setStatus("success");
        setTouched(true); // Show the success message
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
    <form 
      className="flex flex-col sm:flex-row items-end gap-4" 
      onSubmit={handleSubmit} 
      noValidate 
      aria-label="Join waitlist form"
    >
      <div className="flex-grow relative pt-6">
        {touched && message && (
          <div 
            className={`absolute top-0 left-1 text-sm ${
              status === "error" ? "text-red-500" : 
              status === "success" ? "text-green-500" : ""
            }`}
            id="email-validation-message"
            role="alert"
          >
            {message}
          </div>
        )}
        <motion.input
          variants={formInputVariants}
          whileFocus="focus"
          type="email"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
            if (touched) {
              const validation = validateEmail(e.target.value);
              setMessage(validation.message);
              setStatus(validation.isValid ? "idle" : "error");
            }
          }}
          onBlur={() => {
            setTouched(true);
            const validation = validateEmail(email);
            setMessage(validation.message);
            setStatus(validation.isValid ? "idle" : "error");
          }}
          placeholder="Enter your work email"
          className={`w-full h-[50px] px-4 rounded-lg text-gray-dark border-2 ${
            touched && status === "error" ? "border-red-500" : "border-white"
          } outline-none focus:ring-2 focus:ring-primary-light`}
          required
          aria-label="Work email"
          aria-invalid={touched && status === "error"}
          aria-describedby={message ? "email-validation-message" : undefined}
        />

      </div>
      <motion.button
        variants={buttonVariants}
        whileHover={status !== "loading" ? "hover" : undefined}
        whileTap={status !== "loading" ? "tap" : undefined}
        animate={status === "loading" ? "loading" : "visible"}
        type="submit"
        className={`bg-white text-primary h-[50px] px-5 rounded-lg transition-colors font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-white ${
          status === "loading" ? "opacity-70 cursor-not-allowed" : "hover:bg-gray-light"
        }`}
        disabled={status === "loading"}
        aria-busy={status === "loading"}
      >
        {status === "loading" ? "Processing..." : "Join Waitlist"}
      </motion.button>
    </form>
  );
};

export default WaitlistForm;
