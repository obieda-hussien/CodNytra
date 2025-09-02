'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  icon?: IconDefinition;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    icon, 
    iconPosition = 'left',
    children,
    onClick,
    disabled,
    type = 'button'
  }, ref) => {
    const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      primary: "bg-[--color-primary] text-white hover:bg-[--color-primary-light] focus-visible:ring-[--color-primary]",
      secondary: "border-2 border-[--color-primary] text-[--color-primary] bg-transparent hover:bg-[--color-primary] hover:text-white focus-visible:ring-[--color-primary]",
      ghost: "text-[--color-primary] bg-transparent hover:text-[--color-primary-light] hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:ring-[--color-primary]",
      glow: "bg-[--color-primary] text-white hover:bg-[--color-primary-light] focus-visible:ring-[--color-primary] animate-[--animate-pulse-glow]"
    };
    
    const sizes = {
      sm: "h-9 px-4 text-sm gap-2",
      md: "h-11 px-6 text-base gap-3",
      lg: "h-13 px-8 text-lg gap-4"
    };

    return (
      <motion.button
        ref={ref}
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
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
);

Button.displayName = "Button";

export { Button };