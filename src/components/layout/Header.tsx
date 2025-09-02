// src/components/layout/Header.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'الرئيسية' },
    { href: '#services', label: 'خدماتنا' },
    { href: '#portfolio', label: 'أعمالنا' },
    { href: '#about', label: 'من نحن' },
    { href: '#contact', label: 'تواصل معنا' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-surface/80 backdrop-blur-xs border-b border-gray-200 dark:border-gray-700"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <h1 className="text-2xl font-bold text-primary">
              Codenetra
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <Button
              variant="primary"
              size="sm"
              className="hidden sm:flex"
            >
              ابدأ مشروعك
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <FontAwesomeIcon
                icon={isMenuOpen ? faTimes : faBars}
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 py-2 font-medium"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full"
                >
                  ابدأ مشروعك
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}