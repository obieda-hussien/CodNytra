'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faMobile, faCode, faBolt } from '@fortawesome/free-solid-svg-icons';
import { FadeIn } from '@/components/animations/FadeIn';
import { services } from '@/constants/content';

const iconMap = {
  'laptop-code': faLaptopCode,
  'mobile': faMobile,
  'code': faCode,
  'bolt': faBolt,
};

interface ServiceType {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard = ({ service, index }: { service: ServiceType; index: number }) => {
  const icon = iconMap[service.icon as keyof typeof iconMap];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className="bg-white/5 dark:bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-[--color-primary]/30 transition-all duration-300"
    >
      <div className="text-center space-y-4">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[--color-primary] to-[--color-accent] rounded-lg mb-6">
          <FontAwesomeIcon icon={icon} className="text-2xl text-white" />
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-4">
          {service.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-300 leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
};

export function Services() {
  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-6">
              خدماتنا
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              نقدم مجموعة شاملة من الخدمات التقنية المتطورة لتحويل أفكارك إلى حلول رقمية مبتكرة
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Call to action */}
        <FadeIn delay={0.6}>
          <div className="text-center mt-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-gradient-to-r from-[--color-primary] to-[--color-accent] text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                تواصل معنا لمناقشة مشروعك
              </button>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}