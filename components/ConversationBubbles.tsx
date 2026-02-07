'use client';
import { motion } from 'framer-motion';

export default function ConversationBubbles() {
  const bubbles = [
    {
      id: 1,
      position: 'bottom-left',
      profile: {
        name: 'Priya S.',
        role: 'CEO at InnovateLabs',
        avatar: '/avatars/priya.jpg' // You can replace with actual image or use initials
      },
      quote: "I'm the CEO, product lead, AND now doing HR? There's zero time to read 200 resumes properly.",
      delay: 0.3
    },
    {
      id: 2,
      position: 'bottom-right',
      profile: {
        name: 'Amit T.',
        role: 'Head of HR at ScaleUp',
        avatar: '/avatars/amit.jpg' // You can replace with actual image or use initials
      },
      quote: "Our best candidate accepted another offer while we were still scheduling interviews. This keeps happening.",
      delay: 0.6
    }
  ];

  const getPositionClasses = (position: string) => {
    switch (position) {
      case 'bottom-left':
        return 'bottom-20 left-8 md:left-16';
      case 'bottom-right':
        return 'bottom-20 right-8 md:right-16';
      default:
        return '';
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  return (
    <>
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: bubble.delay }}
          className={`absolute ${getPositionClasses(bubble.position)} max-w-xs z-20 hidden lg:block`}
        >
          {/* Chat Bubble */}
          <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-2xl">
            {/* Quote */}
            <p className="text-white/90 text-sm leading-relaxed italic">
              "{bubble.quote}"
            </p>

            {/* Profile */}
            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/10">
              {/* Avatar - Using initials as placeholder */}
              <div className="w-10 h-10 rounded-full bg-accent/80 flex items-center justify-center flex-shrink-0">
                <span className="text-black font-semibold text-sm">
                  {getInitials(bubble.profile.name)}
                </span>
              </div>

              {/* Name and Role */}
              <div>
                <p className="text-white font-medium text-sm">
                  {bubble.profile.name}
                </p>
                <p className="text-white/60 text-xs">
                  {bubble.profile.role}
                </p>
              </div>
            </div>

            {/* Tail/Arrow pointing down-left or down-right */}
            <div
              className={`absolute -bottom-2 ${
                bubble.position.includes('left') ? 'left-8' : 'right-8'
              } w-4 h-4 bg-white/10 border-b border-r border-white/20 rotate-45`}
            />
          </div>

          {/* Floating animation */}
          <motion.div
            className="absolute inset-0"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}
    </>
  );
}