/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // تفعيل الوضع الليلي بناءً على class
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      colors: {
        primary: { // اللون الأزرق المميز للعلامة التجارية
          DEFAULT: '#2563eb',
          light: '#3b82f6',
          dark: '#1e3a8a',
        },
        accent: { // اللون الأخضر للتنبيهات والعناصر المميزة
          DEFAULT: '#10b981',
          light: '#34d399',
          dark: '#059669',
        },
        dark: { // ألوان الوضع الليلي
          background: '#0f172a',
          surface: '#1e293b',
          text: '#f1f5f9',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite alternate',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: { // تأثير توهج نابض للأزرار الهامة
          '0%': { boxShadow: '0 0 5px #10b981' },
          '100%': { boxShadow: '0 0 20px #10b981, 0 0 30px #10b981' },
        },
        float: { // تأثير طفو للعناصر الجذابة
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      },
      backdropBlur: { // لتأثير الزجاج المصنفر
        xs: '2px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}