// src/components/sections/Hero.tsx
// المتطلبات التفصيلية:
// 1. خلفية متدرجة متحركة (Animated Gradient): استخدم CSS لإنشاء خلفية تتحرك ببطء بين ألوان (primary.dark, accent.dark, dark.background).
// 2. تأثير الكتابة (Typewriter Effect): استخدم مكتبة مثل `react-type-animation` لعرض النصوص الرئيسية ("تطوير تطبيقات مبتكرة.", "حلول برمجية ذكية.", "نحول فكرتك إلى واقع.").
// 3. أزرار CTA: أضف زرين، واحد `glow` (لنبدأ مشروعك) والآخر `secondary` (شاهد أعمالنا).
// 4. تأثير الطفو (Float Animation): طبّق `animation-float` على بعض الأشكال الهندسية أو الأيقونات في الخلفية لإعطاء إحساس بالعمق.

'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Button from '../ui/Button';
import FadeIn from '../animations/FadeIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faPlay, faCode, faLaptopCode, faMobile } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "تطوير تطبيقات مبتكرة.",
    "حلول برمجية ذكية.", 
    "نحول فكرتك إلى واقع."
  ];

  // Typewriter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-accent-dark to-dark-background animate-gradient-x opacity-90"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating icons */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 text-white/20"
        >
          <FontAwesomeIcon icon={faCode} className="w-12 h-12" />
        </motion.div>
        
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-32 right-20 text-white/20"
        >
          <FontAwesomeIcon icon={faLaptopCode} className="w-16 h-16" />
        </motion.div>
        
        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-32 left-20 text-white/20"
        >
          <FontAwesomeIcon icon={faMobile} className="w-10 h-10" />
        </motion.div>

        {/* Geometric shapes */}
        <motion.div
          animate={{ 
            rotate: 360,
            y: [0, -30, 0]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-40 right-10 w-8 h-8 border-2 border-white/30 transform rotate-45"
        ></motion.div>
        
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            y: [0, -20, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-40 right-32 w-6 h-6 bg-accent/30 rounded-full"
        ></motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn delay={0.2}>
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            مرحباً بك في{' '}
            <span className="text-accent bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent">
              Codenetra
            </span>
          </motion.h1>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="h-20 flex items-center justify-center mb-8">
            <motion.h2 
              key={currentText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-xl sm:text-2xl lg:text-3xl text-gray-200 font-medium"
            >
              {texts[currentText]}
            </motion.h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            نحن فريق من المطورين المبدعين والمصممين المحترفين، نسعى لتقديم حلول تقنية مبتكرة
            تساعد الشركات والأفراد على تحقيق أهدافهم الرقمية بأحدث التقنيات وأفضل الممارسات.
          </p>
        </FadeIn>

        <FadeIn delay={0.8}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="glow"
              size="lg"
              icon={faRocket}
              iconPosition="right"
              className="min-w-[200px]"
            >
              لنبدأ مشروعك
            </Button>
            
            <Button
              variant="secondary"
              size="lg"
              icon={faPlay}
              iconPosition="right"
              className="min-w-[200px] border-white text-white hover:bg-white hover:text-primary"
            >
              شاهد أعمالنا
            </Button>
          </div>
        </FadeIn>

        {/* Scroll indicator */}
        <FadeIn delay={1.0}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 bg-white/70 rounded-full mx-auto"
              ></motion.div>
            </div>
          </motion.div>
        </FadeIn>
      </div>

      {/* Custom CSS for animated gradient */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
      `}</style>
    </section>
  );
}