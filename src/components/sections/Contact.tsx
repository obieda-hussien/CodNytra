// src/components/sections/Contact.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import FadeIn from '../animations/FadeIn';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';
import { contactFormSchema, ContactFormData } from '../../lib/validations';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form data:', data);
      setSubmitMessage({ type: 'success', text: 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.' });
      reset();
    } catch (error) {
      setSubmitMessage({ type: 'error', text: 'حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: faEnvelope,
      title: 'البريد الإلكتروني',
      value: 'info@codenetra.com',
      link: 'mailto:info@codenetra.com',
    },
    {
      icon: faPhone,
      title: 'الهاتف',
      value: '+966 12 345 6789',
      link: 'tel:+966123456789',
    },
    {
      icon: faMapMarkerAlt,
      title: 'العنوان',
      value: 'الرياض، المملكة العربية السعودية',
      link: '#',
    },
  ];

  const serviceOptions = [
    'تطوير تطبيقات الويب',
    'تطوير تطبيقات الموبايل',
    'حلول برمجية مخصصة',
    'حلول الشركات الناشئة',
    'استشارات تقنية',
    'أخرى',
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-dark-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn delay={0.1}>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-dark-text mb-4"
            >
              تواصل معنا
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              هل لديك مشروع في ذهنك؟ نحن هنا لمساعدتك في تحويل فكرتك إلى واقع رقمي.
              تواصل معنا الآن وابدأ رحلة النجاح معاً.
            </motion.p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <FadeIn delay={0.3}>
            <Card className="h-fit">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-6">
                أرسل لنا رسالة
              </h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="الاسم الكامل"
                    placeholder="أدخل اسمك الكامل"
                    {...register('name')}
                    error={errors.name?.message}
                  />
                  <Input
                    label="البريد الإلكتروني"
                    type="email"
                    placeholder="أدخل بريدك الإلكتروني"
                    {...register('email')}
                    error={errors.email?.message}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="رقم الهاتف"
                    placeholder="أدخل رقم هاتفك"
                    {...register('phone')}
                    error={errors.phone?.message}
                  />
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      نوع الخدمة
                    </label>
                    <select
                      {...register('service')}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-surface text-gray-900 dark:text-dark-text focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                    >
                      <option value="">اختر نوع الخدمة</option>
                      {serviceOptions.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-sm text-red-600 dark:text-red-400">{errors.service.message}</p>
                    )}
                  </div>
                </div>

                <Input
                  label="موضوع الرسالة"
                  placeholder="أدخل موضوع رسالتك"
                  {...register('subject')}
                  error={errors.subject?.message}
                />

                <Textarea
                  label="الرسالة"
                  placeholder="اكتب رسالتك هنا..."
                  rows={5}
                  {...register('message')}
                  error={errors.message?.message}
                />

                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg ${
                      submitMessage.type === 'success'
                        ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400'
                        : 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400'
                    }`}
                  >
                    {submitMessage.text}
                  </motion.div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon={faPaperPlane}
                  iconPosition="right"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                </Button>
              </form>
            </Card>
          </FadeIn>

          {/* Contact Information */}
          <div className="space-y-8">
            <FadeIn delay={0.5}>
              <Card>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-6">
                  معلومات التواصل
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex items-center space-x-4 space-x-reverse group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
                        <FontAwesomeIcon icon={info.icon} className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-dark-text">
                          {info.title}
                        </h4>
                        <a
                          href={info.link}
                          className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </FadeIn>

            <FadeIn delay={0.7}>
              <Card>
                <h3 className="text-xl font-bold text-gray-900 dark:text-dark-text mb-4">
                  ساعات العمل
                </h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-400">
                  <div className="flex justify-between">
                    <span>الأحد - الخميس</span>
                    <span>9:00 ص - 6:00 م</span>
                  </div>
                  <div className="flex justify-between">
                    <span>الجمعة</span>
                    <span>مغلق</span>
                  </div>
                  <div className="flex justify-between">
                    <span>السبت</span>
                    <span>10:00 ص - 2:00 م</span>
                  </div>
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}