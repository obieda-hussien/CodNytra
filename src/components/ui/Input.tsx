// src/components/ui/Input.tsx
'use client';

import { forwardRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    const inputClasses = twMerge(
      clsx(
        'w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg',
        'bg-white dark:bg-dark-surface text-gray-900 dark:text-dark-text',
        'placeholder-gray-500 dark:placeholder-gray-400',
        'focus:ring-2 focus:ring-primary focus:border-primary',
        'transition-colors duration-200',
        error && 'border-red-500 focus:ring-red-500 focus:border-red-500',
        className
      )
    );

    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={inputClasses}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;