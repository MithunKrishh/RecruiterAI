"use client";

import React from "react";
import LogoSlider from "./LogoSlider";

export default function PlatformsSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#404040] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Post Once, Reach Everywhere
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Automatically sync your job postings across all major hiring platforms. 
            One click, unlimited reach.
          </p>
        </div>

        <LogoSlider />

        <div className="text-center mt-12">
          <p className="text-sm text-white/50">
            Trusted by 1000+ companies to distribute jobs across 10+ platforms
          </p>
        </div>
      </div>
    </section>
  );
}