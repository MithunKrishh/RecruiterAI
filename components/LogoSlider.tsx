"use client";

import React from "react";

interface Logo {
  name: string;
  svg: string;
}

const logos: Logo[] = [
  {
    name: "LinkedIn",
    svg: `<svg viewBox="0 0 120 40" fill="currentColor"><path d="M8 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm.5 4h3v12h-3V10zm5 0h2.9v1.6h.1c.4-.8 1.4-1.6 2.8-1.6 3 0 3.6 2 3.6 4.5V22h-3v-6.3c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4V22h-3V10z"/><text x="30" y="26" font-size="18" font-weight="600">LinkedIn</text></svg>`,
  },
  {
    name: "Naukri",
    svg: `<svg viewBox="0 0 120 40" fill="currentColor"><circle cx="12" cy="20" r="8" fill="#4A90E2"/><text x="26" y="26" font-size="20" font-weight="700">naukri</text></svg>`,
  },
  {
    name: "Indeed",
    svg: `<svg viewBox="0 0 120 40" fill="currentColor"><rect x="6" y="8" width="4" height="24" rx="2"/><text x="16" y="26" font-size="20" font-weight="700">indeed</text></svg>`,
  },
  {
    name: "AngelList",
    svg: `<svg viewBox="0 0 140 40" fill="currentColor"><path d="M12 8l-2.5 10L2 18l7.5 6.5L7 35l5-4 5 4-2.5-10.5L22 18l-7.5 0L12 8z"/><text x="28" y="26" font-size="18" font-weight="600">AngelList</text></svg>`,
  },
  {
    name: "Instahyre",
    svg: `<svg viewBox="0 0 150 40" fill="currentColor"><rect x="4" y="10" width="12" height="20" rx="2"/><text x="20" y="26" font-size="18" font-weight="600">Instahyre</text></svg>`,
  },
  {
    name: "Wellfound",
    svg: `<svg viewBox="0 0 150 40" fill="currentColor"><circle cx="12" cy="20" r="6"/><circle cx="12" cy="20" r="3" fill="white"/><text x="24" y="26" font-size="18" font-weight="600">Wellfound</text></svg>`,
  },
  {
    name: "IIMJobs",
    svg: `<svg viewBox="0 0 130 40" fill="currentColor"><rect x="4" y="8" width="3" height="24"/><rect x="9" y="8" width="3" height="24"/><rect x="14" y="8" width="6" height="24"/><text x="24" y="26" font-size="18" font-weight="700">IIMJobs</text></svg>`,
  },
  {
    name: "Glassdoor",
    svg: `<svg viewBox="0 0 150 40" fill="currentColor"><rect x="6" y="8" width="8" height="24" rx="1"/><circle cx="10" cy="16" r="2" fill="white"/><text x="20" y="26" font-size="18" font-weight="600">Glassdoor</text></svg>`,
  },
  {
    name: "Monster India",
    svg: `<svg viewBox="0 0 130 40" fill="currentColor"><path d="M8 12c0-2 2-4 4-4s4 2 4 4v16c0 2-2 4-4 4s-4-2-4-4V12z"/><text x="20" y="26" font-size="20" font-weight="700">Monster</text></svg>`,
  },
  {
    name: "Cutshort",
    svg: `<svg viewBox="0 0 130 40" fill="currentColor"><path d="M6 12h10l-5 8 5 8H6l5-8-5-8z"/><text x="20" y="26" font-size="18" font-weight="600">Cutshort</text></svg>`,
  },
];

export default function LogoSlider() {
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full overflow-hidden py-8">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#404040] via-[#404040]/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent z-10 pointer-events-none" />
        
        <div className="flex gap-12 md:gap-16 animate-scroll group hover:[animation-play-state:paused]">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center transition-all duration-300 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 cursor-pointer"
              title={logo.name}
            >
              <div 
                className="w-28 h-12 text-gray-400 hover:text-white transition-colors duration-300"
                dangerouslySetInnerHTML={{ __html: logo.svg }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}