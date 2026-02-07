'use client';
import Hero from '@/components/Hero';
import HiringScroll from '@/components/HiringScroll';
import FlowchartCard from '@/components/FlowchartCard';
import StatCard from '@/components/StatCard';
import BenefitCard from '@/components/BenefitCard';
import PlatformsSection from '@/components/PlatformsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
  const workflows = [
    {
      title: 'Smart Screening',
      benefit: 'Screen 250+ applications in minutes',
      steps: [
        { type: 'step' as const, label: 'Application', icon: '📄', color: 'border-[#3B82F6]/40' },
        { type: 'step' as const, label: 'AI Screening', icon: '🤖', color: 'border-[#B197FC]/40' },
        { type: 'step' as const, label: 'Auto Questions', icon: '❓', color: 'border-[#A5D8FF]/40' },
        { type: 'decision' as const, label: 'Qualified?', branches: { yes: 'Schedule', no: 'Thank You' } }
      ]
    },
    {
      title: 'Fast-Track Hiring',
      benefit: 'Reduce time-to-hire from 42 to 12 days',
      steps: [
        { type: 'step' as const, label: 'Interview Invite', icon: '📧', color: 'border-[#3B82F6]/40' },
        { type: 'step' as const, label: 'AI Video Interview', icon: '🎥', color: 'border-[#B197FC]/40' },
        { type: 'step' as const, label: 'Auto Score', icon: '⭐', color: 'border-[#D0BCFF]/40' },
        { type: 'decision' as const, label: 'Pass?', branches: { yes: 'Round 2', no: 'Reject' } }
      ]
    },
    {
      title: 'Talent Pipeline',
      benefit: 'Build a talent pipeline automatically',
      steps: [
        { type: 'step' as const, label: 'Rejected', icon: '↩️', color: 'border-[#3B82F6]/40' },
        { type: 'step' as const, label: 'Add to Pool', icon: '💾', color: 'border-[#B197FC]/40' },
        { type: 'step' as const, label: 'Wait Period', icon: '⏳', color: 'border-[#D0BCFF]/40' },
        { type: 'decision' as const, label: 'New Role?', branches: { yes: 'Re-engage', no: 'Check Later' } }
      ]
    }
  ];

  return (
    <main>
      <Hero />
      <HiringScroll />

      {/* How RecruiterAI Solves This */}
      <section className="relative z-10 bg-black border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-24">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="font-serif text-4xl md:text-5xl tracking-tight"
            >
              How RecruiterAI Solves This
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              className="mt-4 text-white/70 text-lg max-w-2xl mx-auto"
            >
              Automated workflows that transform hiring from chaos to precision
            </motion.p>
          </div>

          {/* Workflow Cards Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {workflows.map((workflow, index) => (
              <FlowchartCard
                key={index}
                title={workflow.title}
                benefit={workflow.benefit}
                steps={workflow.steps}
                delay={index * 0.15}
              />
            ))}
          </div>
        </div>
      </section>

      {/* The RecruiterAI Advantage */}
      <section className="relative z-10 bg-gradient-to-b from-[#000000] to-[#404040]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6"
            >
              The RecruiterAI Advantage
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed"
            >
              Transform your hiring with measurable results
            </motion.p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-24">
            <StatCard value="10x" label="Faster Screening" barHeight={100} delay={0} color="bg-[#A5D8FF]" />
            <StatCard value="70%" label="Faster Time-to-Hire" barHeight={85} delay={0.1} color="bg-[#3B82F6]" />
            <StatCard value="25x" label="Interview Capacity" barHeight={95} delay={0.2} color="bg-[#B197FC]" />
            <StatCard value="95%" label="Application Completion" barHeight={90} delay={0.3} color="bg-[#D0BCFF]" />
            <StatCard value="89%" label="Qualified Applications" barHeight={88} delay={0.4} color="bg-[#A5D8FF]" />
            <StatCard value="80%" label="Lower Costs" barHeight={92} delay={0.5} color="bg-[#3B82F6]" />
            <StatCard value="50%" label="Fewer Bad Hires" barHeight={78} delay={0.6} color="bg-[#B197FC]" />
          </div>

          {/* Benefits Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <BenefitCard
              icon="🎯"
              title="Precision Matching"
              description="AI-powered semantic matching finds the perfect candidates every time"
              delay={0}
            />
            <BenefitCard
              icon="⚡"
              title="Lightning Fast"
              description="Automate screening and scheduling to move at the speed of business"
              delay={0.1}
            />
            <BenefitCard
              icon="📊"
              title="Data-Driven Insights"
              description="Real-time analytics and reporting to optimize your hiring funnel"
              delay={0.2}
            />
            <BenefitCard
              icon="🤝"
              title="Better Experience"
              description="Delight candidates with a smooth, responsive hiring journey"
              delay={0.3}
            />
            <BenefitCard
              icon="🔒"
              title="Compliant & Secure"
              description="Enterprise-grade security with built-in compliance tools"
              delay={0.4}
            />
            <BenefitCard
              icon="🚀"
              title="Scale Effortlessly"
              description="Handle 10x more applications without adding headcount"
              delay={0.5}
            />
            <BenefitCard
              icon="💡"
              title="Smart Automation"
              description="Let AI handle the repetitive work while you focus on strategy"
              delay={0.6}
            />
            <BenefitCard
              icon="🎓"
              title="Continuous Learning"
              description="AI gets smarter with every hire, improving over time"
              delay={0.7}
            />
          </div>
        </div>
      </section>

      {/* Post Once, Reach Everywhere */}
      <PlatformsSection />

      {/* Trusted by Growing Teams */}
      <TestimonialsSection />

      {/* Frequently Asked Questions */}
      <FAQSection />

      {/* Final CTA */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}