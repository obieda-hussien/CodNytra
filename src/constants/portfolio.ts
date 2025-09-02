// src/constants/portfolio.ts
export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: 'all' | 'web' | 'mobile' | 'software';
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export const portfolioCategories = [
  { id: 'all', label: 'جميع الأعمال', count: 8 },
  { id: 'web', label: 'تطبيقات ويب', count: 3 },
  { id: 'mobile', label: 'تطبيقات موبايل', count: 3 },
  { id: 'software', label: 'برمجيات مخصصة', count: 2 },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'ecommerce-platform',
    title: 'منصة تجارة إلكترونية متقدمة',
    description: 'منصة تجارة إلكترونية شاملة مع نظام إدارة المخزون والمدفوعات الآمنة',
    category: 'web',
    image: '/portfolio/ecommerce.jpg',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    link: 'https://demo-ecommerce.com',
    github: 'https://github.com/codenetra/ecommerce'
  },
  {
    id: 'delivery-app',
    title: 'تطبيق توصيل الطعام',
    description: 'تطبيق توصيل طعام متكامل مع تتبع الطلبات في الوقت الفعلي',
    category: 'mobile',
    image: '/portfolio/delivery-app.jpg',
    technologies: ['React Native', 'Firebase', 'Google Maps', 'Stripe'],
    link: 'https://play.google.com/store/apps/details?id=com.fooddelivery'
  },
  {
    id: 'crm-system',
    title: 'نظام إدارة علاقات العملاء',
    description: 'نظام CRM متطور لإدارة العملاء والمبيعات مع تحليلات متقدمة',
    category: 'software',
    image: '/portfolio/crm-system.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    link: 'https://demo-crm.com'
  },
  {
    id: 'learning-platform',
    title: 'منصة تعليمية تفاعلية',
    description: 'منصة تعليم إلكتروني مع فيديوهات تفاعلية واختبارات ذكية',
    category: 'web',
    image: '/portfolio/learning-platform.jpg',
    technologies: ['Next.js', 'Prisma', 'AWS S3', 'WebRTC']
  },
  {
    id: 'fitness-app',
    title: 'تطبيق اللياقة البدنية',
    description: 'تطبيق لياقة بدنية مع خطط تدريب مخصصة وتتبع التقدم',
    category: 'mobile',
    image: '/portfolio/fitness-app.jpg',
    technologies: ['Flutter', 'Firebase', 'ML Kit', 'HealthKit']
  },
  {
    id: 'analytics-dashboard',
    title: 'لوحة تحليلات ذكية',
    description: 'لوحة تحكم متقدمة لتحليل البيانات مع رسوم بيانية تفاعلية',
    category: 'web',
    image: '/portfolio/analytics-dashboard.jpg',
    technologies: ['Vue.js', 'D3.js', 'Python', 'FastAPI']
  },
  {
    id: 'social-app',
    title: 'تطبيق التواصل الاجتماعي',
    description: 'تطبيق تواصل اجتماعي مع ميزات الدردشة والمشاركة الفورية',
    category: 'mobile',
    image: '/portfolio/social-app.jpg',
    technologies: ['React Native', 'GraphQL', 'Redis', 'WebSocket']
  },
  {
    id: 'inventory-system',
    title: 'نظام إدارة المخزون',
    description: 'نظام شامل لإدارة المخزون مع تتبع المنتجات والتقارير التفصيلية',
    category: 'software',
    image: '/portfolio/inventory-system.jpg',
    technologies: ['Angular', 'Spring Boot', 'MySQL', 'Docker']
  }
];