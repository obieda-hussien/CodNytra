// src/components/ui/Textarea.tsx
'use client';

import { forwardRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  className?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, ...props }, ref) => {
    const textareaClasses = twMerge(
      clsx(
        'w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg',
        'bg-white dark:bg-dark-surface text-gray-900 dark:text-dark-text',
        'placeholder-gray-500 dark:placeholder-gray-400',
        'focus:ring-2 focus:ring-primary focus:border-primary',
        'transition-colors duration-200 resize-vertical',
        'min-h-[120px]',
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
        <textarea
          ref={ref}
          className={textareaClasses}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;