// src/components/layout/Footer.tsx
'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const socialLinks = [
    { href: '#', icon: faGithub, label: 'GitHub' },
    { href: '#', icon: faLinkedin, label: 'LinkedIn' },
    { href: '#', icon: faTwitter, label: 'Twitter' },
  ];

  const footerLinks = [
    { href: '#services', label: 'خدماتنا' },
    { href: '#portfolio', label: 'أعمالنا' },
    { href: '#about', label: 'من نحن' },
    { href: '#contact', label: 'تواصل معنا' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-dark-surface border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-primary mb-4"
            >
              Codenetra
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed"
            >
              شركة رائدة في تطوير التطبيقات المبتكرة والحلول البرمجية الذكية. نحول فكرتك إلى واقع رقمي عصري وفائق الأداء.
            </motion.p>
            
            {/* Social Links */}
            <div className="flex space-x-4 space-x-reverse">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors duration-200"
                  aria-label={link.label}
                >
                  <FontAwesomeIcon icon={link.icon} className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-4"
            >
              روابط سريعة
            </motion.h4>
            <div className="space-y-2">
              {footerLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="block text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-4"
            >
              تواصل معنا
            </motion.h4>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-2 text-gray-600 dark:text-gray-400"
            >
              <p>البريد الإلكتروني: info@codenetra.com</p>
              <p>الهاتف: +966 12 345 6789</p>
              <p>العنوان: الرياض، المملكة العربية السعودية</p>
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400"
        >
          <p>&copy; 2024 Codenetra. جميع الحقوق محفوظة.</p>
        </motion.div>
      </div>
    </footer>
  );
}