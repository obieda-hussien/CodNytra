// src/components/ui/Card.tsx
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export default function Card({
  children,
  className,
  hover = true,
  padding = 'md'
}: CardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const cardClasses = twMerge(
    clsx(
      'bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-200',
      paddingClasses[padding],
      hover && 'hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1',
      className
    )
  );

  if (hover) {
    return (
      <motion.div
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={cardClasses}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
}