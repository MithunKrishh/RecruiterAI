"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import FAQItem from "./FAQItem";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does AI screening work?",
      answer:
        "RecruiterAI automatically parses resumes, scores candidates using custom criteria, and ranks the top matches so you only review the best profiles.",
    },
    {
      question: "Does RecruiterAI integrate with our existing ATS?",
      answer:
        "Yes. We integrate with popular ATS tools and job boards, or you can use RecruiterAI as a standalone hiring system.",
    },
    {
      question: "What's the pricing structure?",
      answer:
        "Flexible monthly plans based on hiring volume. No long-term contracts or hidden fees.",
    },
    {
      question: "How long does setup take?",
      answer:
        "Most teams are live within 10–15 minutes. No coding or technical setup required.",
    },
    {
      question: "Is candidate data secure?",
      answer:
        "Yes. We use encrypted storage, secure authentication, and follow industry best practices to protect candidate information.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative z-10 bg-gradient-to-b from-[#1a1a1a] to-black py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Everything you need to know before getting started
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}