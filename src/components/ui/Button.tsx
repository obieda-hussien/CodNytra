// src/components/ui/Button.tsx
// استخدم مكتبة `clsx` و `tailwind-merge` لدمج الـ classes بذكاء
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

// الهدف:
// 1. `variant: 'primary'`: خلفية زرقاء (primary) مع نص أبيض.
// 2. `variant: 'secondary'`: حدود زرقاء (primary) مع خلفية شفافة ونص أزرق.
// 3. `variant: 'ghost'`: بدون حدود أو خلفية، فقط نص يتغير لونه عند الـ hover.
// 4. `variant: 'glow'`: زر `primary` مع تأثير `pulse-glow` لجذب الانتباه.
// 5. أضف تأثير `scaleOnHover` من Framer Motion لجميع الأزرار.

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  icon?: IconDefinition;
  iconPosition?: 'left' | 'right';
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  children,
  className,
  onClick,
  disabled = false,
  type = 'button',
}: ButtonProps) {
  const baseClasses = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary flex items-center justify-center gap-2';
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary',
    secondary: 'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white focus:ring-primary',
    ghost: 'text-gray-600 hover:text-primary hover:bg-gray-100 dark:text-gray-400 dark:hover:text-primary dark:hover:bg-gray-800',
    glow: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary animate-pulse-glow',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const buttonClasses = twMerge(
    clsx(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      disabled && 'opacity-50 cursor-not-allowed',
      className
    )
  );

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {icon && iconPosition === 'left' && (
        <FontAwesomeIcon icon={icon} className="w-4 h-4" />
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <FontAwesomeIcon icon={icon} className="w-4 h-4" />
      )}
    </motion.button>
  );
}