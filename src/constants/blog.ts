// src/constants/blog.ts
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: number;
  category: string;
  tags: string[];
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'react-best-practices-2024',
    title: 'أفضل ممارسات React في 2024',
    excerpt: 'اكتشف أحدث أفضل الممارسات في تطوير تطبيقات React لتحسين الأداء وتجربة المستخدم',
    content: 'محتوى المقال الكامل...',
    author: 'فريق Codenetra',
    publishedAt: '2024-01-15',
    readTime: 8,
    category: 'تطوير',
    tags: ['React', 'JavaScript', 'تطوير الويب'],
    featured: true,
  },
  {
    id: 'mobile-app-trends-2024',
    title: 'اتجاهات تطوير تطبيقات الموبايل في 2024',
    excerpt: 'استكشف أحدث التقنيات والاتجاهات في عالم تطوير تطبيقات الموبايل',
    content: 'محتوى المقال الكامل...',
    author: 'فريق Codenetra',
    publishedAt: '2024-01-10',
    readTime: 6,
    category: 'موبايل',
    tags: ['تطبيقات موبايل', 'Flutter', 'React Native'],
    featured: false,
  },
  {
    id: 'ai-integration-guide',
    title: 'دليل دمج الذكاء الاصطناعي في التطبيقات',
    excerpt: 'تعلم كيفية دمج تقنيات الذكاء الاصطناعي في مشاريعك البرمجية',
    content: 'محتوى المقال الكامل...',
    author: 'فريق Codenetra',
    publishedAt: '2024-01-05',
    readTime: 12,
    category: 'ذكاء اصطناعي',
    tags: ['AI', 'Machine Learning', 'تقنية'],
    featured: true,
  },
  {
    id: 'startup-tech-stack',
    title: 'أفضل المكتبات التقنية للشركات الناشئة',
    excerpt: 'دليل شامل لاختيار المكتبات والتقنيات المناسبة لمشروعك الناشئ',
    content: 'محتوى المقال الكامل...',
    author: 'فريق Codenetra',
    publishedAt: '2023-12-28',
    readTime: 10,
    category: 'شركات ناشئة',
    tags: ['Startup', 'Tech Stack', 'استراتيجية'],
    featured: false,
  },
  {
    id: 'web-performance-optimization',
    title: 'تحسين أداء مواقع الويب: دليل شامل',
    excerpt: 'اكتشف الطرق الفعالة لتحسين سرعة وأداء موقعك الإلكتروني',
    content: 'محتوى المقال الكامل...',
    author: 'فريق Codenetra',
    publishedAt: '2023-12-20',
    readTime: 15,
    category: 'تحسين الأداء',
    tags: ['Performance', 'Web Optimization', 'SEO'],
    featured: false,
  },
  {
    id: 'cybersecurity-essentials',
    title: 'أساسيات الأمان السيبراني للمطورين',
    excerpt: 'تعلم كيفية حماية تطبيقاتك من التهديدات السيبرانية الشائعة',
    content: 'محتوى المقال الكامل...',
    author: 'فريق Codenetra',
    publishedAt: '2023-12-15',
    readTime: 9,
    category: 'أمان',
    tags: ['Security', 'Cybersecurity', 'حماية'],
    featured: false,
  }
];

export const blogCategories = [
  'جميع المقالات',
  'تطوير',
  'موبايل',
  'ذكاء اصطناعي',
  'شركات ناشئة',
  'تحسين الأداء',
  'أمان',
];