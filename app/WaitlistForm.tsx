import React, { useState, memo } from "react";
import Image from "next/image"; // Import next/image
import { validateEmail } from "./utils/validation";

const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [touched, setTouched] = useState(false);

  const validateAndSetStatus = (emailValue: string) => {
    if (!touched) return;
    const validation = validateEmail(emailValue);
    setMessage(validation.message);
    setStatus(validation.isValid ? "idle" : "error");
    return validation;
  };

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
        setTouched(true);
      } else {
        setMessage(data.message || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting waitlist form:", error);
      setMessage("Failed to connect to server. Please try again.");
      setStatus("error");
    }
  };

  return (
    <form 
      className="flex flex-col sm:flex-row items-stretch sm:items-end gap-4 w-full" 
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
        <div className="relative flex items-center">
          <Image // Replace img with Image
            src="/mail-icon.svg" 
            alt="Email icon" 
            width={20} // Add width
            height={20} // Add height
            className="absolute left-3 pointer-events-none" // Adjusted className, h-5 and w-5 are covered by height and width
          />
          <input
            type="email"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
              validateAndSetStatus(e.target.value);
            }}
            onBlur={() => {
              setTouched(true);
              validateAndSetStatus(email);
            }}
            placeholder="Enter your work email"
            className={`w-full h-[50px] pl-10 pr-4 rounded-lg text-white bg-transparent border-2 ${
              touched && status === "error" ? "border-red-500" : "border-white"
            } outline-none focus:ring-2 focus:ring-primary-light placeholder-white/70`}
            required
            aria-label="Work email"
            aria-invalid={touched && status === "error"}
            aria-describedby={message ? "email-validation-message" : undefined}
          />
        </div>
      </div>
      <button
        type="submit"
        className={`bg-white text-primary-dark px-6 sm:px-8 h-[50px] rounded-lg font-medium text-base sm:text-lg text-center focus:outline-none ${
          status === "loading" ? "opacity-70 cursor-not-allowed" : "hover:scale-105 hover:shadow-lg"
        } w-full sm:w-auto whitespace-nowrap transition-transform duration-200 ease-in-out`}
        disabled={status === "loading"}
        aria-busy={status === "loading"}
      >
        {status === "loading" ? "Processing..." : "Join Waitlist"}
      </button>
    </form>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(WaitlistForm);
