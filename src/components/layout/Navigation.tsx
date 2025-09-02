'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { navigation } from '@/constants/content';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={cn("relative", className)}>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8 space-x-reverse">
        {navigation.main.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-gray-700 dark:text-gray-300 hover:text-[--color-primary] dark:hover:text-[--color-accent] transition-colors duration-200 font-medium"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Theme Switcher */}
      <div className="hidden md:block">
        <ThemeSwitcher />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-4">
        <ThemeSwitcher />
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-11 h-11 p-0"
        >
          <FontAwesomeIcon 
            icon={isOpen ? faTimes : faBars} 
            className="h-5 w-5" 
          />
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-64 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg md:hidden"
          >
            <div className="py-4">
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-3 text-gray-700 dark:text-gray-300 hover:text-[--color-primary] dark:hover:text-[--color-accent] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}