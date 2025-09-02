import type { NextConfig } from "next";

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // تفعيل ضغط الاستجابات لتقليل حجم البيانات المنقولة
  compress: true,
  images: {
    // تفعيل صيغ الصور الحديثة لتقليل حجمها مع الحفاظ على الجودة
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
};

export default nextConfig;
