"use client";
import React, { useState, memo } from "react";
import { validateEmail } from "./utils/validation";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false
  });

  const validateEmailField = (email: string) => {
    const validation = validateEmail(email);
    setStatusMessage(validation.isValid ? "" : validation.message);
    setStatus(validation.isValid ? "idle" : "error");
    return validation;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Validate email if it's the email field and already touched
    if (name === 'email' && touched.email) {
      validateEmailField(value);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    // Validate email on blur
    if (name === 'email' && value) {
      validateEmailField(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage("Please fill out all fields");
      setStatus("error");
      return;
    }

    // Validate email
    const validation = validateEmail(formData.email);
    if (!validation.isValid) {
      setStatusMessage(validation.message);
      setStatus("error");
      return;
    }

    // Submit form
    setStatus("loading");
    setStatusMessage("Sending message...");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus("success");
        setStatusMessage("Message sent successfully! We'll be in touch soon.");
        setFormData({
          name: "",
          email: "",
          message: ""
        });
        // Reset touched state
        setTouched({
          name: false,
          email: false,
          message: false
        });
      } else {
        setStatusMessage(data.message || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatusMessage("Failed to connect to server. Please try again.");
      setStatus("error");
    }
  };

  return (
    <form 
      className="w-full flex flex-col gap-4" 
      onSubmit={handleSubmit} 
      noValidate 
      aria-label="Contact form"
    >
      {statusMessage && (
        <div 
          className={`text-sm mb-2 ${
            status === "error" ? "text-red-400" : 
            status === "success" ? "text-green-400" : 
            "text-white"
          }`}
          role="alert"
        >
          {statusMessage}
        </div>
      )}
      
      <div className="flex flex-col w-full">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Your Name"
          className="w-full h-[50px] px-4 rounded-lg text-white bg-transparent border-2 border-white outline-none focus:ring-2 focus:ring-primary-light placeholder-white/70"
          required
          aria-label="Your name"
        />
      </div>

      <div className="flex flex-col w-full">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Your Email"
          className={`w-full h-[50px] px-4 rounded-lg text-white bg-transparent border-2 ${
            touched.email && status === "error" ? "border-red-500" : "border-white"
          } outline-none focus:ring-2 focus:ring-primary-light placeholder-white/70`}
          required
          aria-label="Your email"
        />
      </div>

      <div className="flex flex-col w-full">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Your Message"
          className="w-full px-4 py-3 rounded-lg text-white bg-transparent border-2 border-white outline-none focus:ring-2 focus:ring-primary-light min-h-[120px] placeholder-white/70"
          required
          aria-label="Your message"
        />
      </div>

      <button
        type="submit"
        className={`bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg text-center focus:outline-none focus:ring-2 focus:ring-white mt-2 ${
          status === "loading" ? "opacity-70 cursor-not-allowed" : ""
        }`}
        disabled={status === "loading"}
        aria-busy={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(ContactForm);
