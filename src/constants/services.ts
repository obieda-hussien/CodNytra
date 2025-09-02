// src/constants/services.ts
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faCode, faLaptopCode, faMobile, faRocket } from '@fortawesome/free-solid-svg-icons';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: IconDefinition;
  features: string[];
  color: string;
}

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'تطوير تطبيقات الويب',
    description: 'نطور تطبيقات ويب عصرية وسريعة باستخدام أحدث التقنيات مثل React، Next.js، وNode.js',
    icon: faLaptopCode,
    features: [
      'تطبيقات ويب تفاعلية',
      'تصميم متجاوب لجميع الأجهزة',
      'أداء فائق وسرعة تحميل عالية',
      'تقنيات SEO متقدمة'
    ],
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'mobile-development',
    title: 'تطوير تطبيقات الموبايل',
    description: 'نصمم تطبيقات موبايل أصلية ومتقدمة لنظامي iOS و Android بتجربة مستخدم استثنائية',
    icon: faMobile,
    features: [
      'تطبيقات أصلية iOS و Android',
      'تطبيقات هجينة متقدمة',
      'تصميم UI/UX احترافي',
      'تكامل مع الخدمات السحابية'
    ],
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'custom-software',
    title: 'حلول برمجية مخصصة',
    description: 'نقدم حلول برمجية مخصصة تلبي احتياجات عملك الفريدة وتساعدك على تحقيق أهدافك',
    icon: faCode,
    features: [
      'تحليل متطلبات العمل',
      'تصميم أنظمة مخصصة',
      'تطوير APIs متقدمة',
      'صيانة ودعم مستمر'
    ],
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'startup-solutions',
    title: 'حلول الشركات الناشئة',
    description: 'نساعد الشركات الناشئة على تحويل أفكارهم إلى منتجات رقمية ناجحة ومربحة',
    icon: faRocket,
    features: [
      'استشارات تقنية متخصصة',
      'تطوير MVP سريع',
      'استراتيجيات نمو رقمية',
      'دعم الانطلاق والتوسع'
    ],
    color: 'from-orange-500 to-orange-600'
  }
];