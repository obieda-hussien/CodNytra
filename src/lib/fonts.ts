// src/lib/fonts.ts
// قم باستيراد الخطوط من next/font لتحسين الأداء تلقائيًا
import { Inter, JetBrains_Mono } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // سيتم استخدامه في Tailwind
  fallback: ['system-ui', 'arial'],
})

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono', // خط مميز للأكواد
  fallback: ['Consolas', 'Monaco', 'Courier New', 'monospace'],
})