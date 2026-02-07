"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-black border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-serif text-5xl md:text-6xl tracking-tight text-white"
        >
          RecruiterAI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mt-6 text-lg text-white/80 max-w-2xl"
        >
          From raw, unstructured data to an AI-driven hiring system.
        </motion.p>

        {/* Optional Footer Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
        >
          <div className="flex flex-wrap gap-6 text-white/60 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
          <div className="text-white/60 text-sm">
            © 2026 RecruiterAI. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}