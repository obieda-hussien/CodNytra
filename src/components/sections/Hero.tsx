'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FadeIn } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/Button';
import { faRocket, faCode, faPlay } from '@fortawesome/free-solid-svg-icons';

// Floating shapes component
const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 bg-blue-500/10 rounded-full"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-40 right-32 w-16 h-16 bg-emerald-500/10 rounded-lg"
        animate={{
          y: [0, -30, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute bottom-40 left-40 w-12 h-12 bg-purple-500/10"
        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        animate={{
          y: [0, -25, 0],
          rotate: [0, 120, 240, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div
        className="absolute top-60 right-20 w-8 h-8 bg-yellow-500/10 rounded-full"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
    </div>
  );
};

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-emerald-600/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]"></div>
      </div>

      {/* Floating shapes */}
      <FloatingShapes />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <FadeIn>
          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Main heading with gradient */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                مرحباً بكم في
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Codenetra
              </span>
            </h1>

            {/* Typewriter effect */}
            <div className="text-xl md:text-2xl lg:text-3xl text-gray-300 h-20 flex items-center justify-center">
              <TypeAnimation
                sequence={[
                  'تطوير تطبيقات مبتكرة.',
                  2000,
                  'حلول برمجية ذكية.',
                  2000,
                  'نحول فكرتك إلى واقع.',
                  2000,
                  'تقنيات حديثة ومتطورة.',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-medium"
              />
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              شركة تقنية مبتكرة متخصصة في تطوير التطبيقات والحلول البرمجية الذكية باستخدام أحدث التقنيات
            </p>
          </div>
        </FadeIn>

        {/* CTA Buttons */}
        <FadeIn delay={0.3}>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="glow" size="lg" icon={faRocket} className="min-w-48">
              ابدأ مشروعك
            </Button>
            <Button variant="secondary" size="lg" icon={faCode} className="min-w-48">
              شاهد أعمالنا
            </Button>
            <Button variant="ghost" size="lg" icon={faPlay} className="min-w-48">
              شاهد الفيديو
            </Button>
          </div>
        </FadeIn>

        {/* Stats or features */}
        <FadeIn delay={0.6}>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div 
              className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-gray-300">مشروع مكتمل</div>
            </motion.div>
            <motion.div 
              className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl font-bold text-emerald-400 mb-2">30+</div>
              <div className="text-gray-300">عميل سعيد</div>
            </motion.div>
            <motion.div 
              className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
              <div className="text-gray-300">سنوات خبرة</div>
            </motion.div>
          </div>
        </FadeIn>

        {/* Scroll indicator */}
        <FadeIn delay={0.9}>
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div 
                className="w-1 h-3 bg-white/50 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}