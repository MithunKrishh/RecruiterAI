"use client";

import React from "react";
import { motion } from "framer-motion";
import TestimonialCard from "@/components/TestimonialCard";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "We went from 6 weeks to hire a developer to just 10 days. RecruiterAI handled everything from screening to scheduling. Game changer for our 5-person startup.",
      name: "Rahul Mehta",
      title: "Founder",
      company: "TechStart Solutions",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      quote:
        "Screening 300+ resumes used to take days. Now AI ranks candidates instantly and we only interview the best.",
      name: "Sarah Kapoor",
      title: "Head of Talent",
      company: "GrowthLoop",
      avatar: "https://i.pravatar.cc/150?img=47",
    },
    {
      quote:
        "Interview scheduling chaos is gone. Everything runs automatically and our team finally focuses on product, not hiring admin.",
      name: "Amit Verma",
      title: "HR Manager",
      company: "ScaleUp Labs",
      avatar: "https://i.pravatar.cc/150?img=33",
    },
  ];

  return (
    <section className="relative z-10 bg-gradient-to-b from-[#404040] to-[#1a1a1a] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-4"
          >
            Trusted by Growing Teams
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto"
          >
            See how teams are transforming their hiring process
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              company={testimonial.company}
              avatar={testimonial.avatar}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}