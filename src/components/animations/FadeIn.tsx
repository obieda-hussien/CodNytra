// src/components/animations/FadeIn.tsx
// الهدف:
// 1. استخدم `useInView` من `react-intersection-observer` لتحديد متى يكون المكون مرئيًا.
// 2. استخدم `motion.div` من `framer-motion`.
// 3. قم بتطبيق animation variant (مثل `fadeInUp`) عندما يصبح المكون `inView`.
// 4. يجب أن يقبل المكون `children` لكي يلتف حول أي عنصر آخر.

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  triggerOnce?: boolean;
}

export default function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 30,
  className,
  triggerOnce = true,
}: FadeInProps) {
  const [ref, inView] = useInView({
    triggerOnce,
    threshold: 0.1,
  });

  const directionOffset = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };

  const variants = {
    hidden: {
      opacity: 0,
      ...directionOffset[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}