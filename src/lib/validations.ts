// src/lib/validations.ts
import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'الاسم يجب أن يكون على الأقل حرفين')
    .max(50, 'الاسم يجب أن يكون أقل من 50 حرف'),
  email: z
    .string()
    .min(1, 'البريد الإلكتروني مطلوب')
    .email('البريد الإلكتروني غير صحيح'),
  phone: z
    .string()
    .min(10, 'رقم الهاتف يجب أن يكون على الأقل 10 أرقام')
    .max(15, 'رقم الهاتف يجب أن يكون أقل من 15 رقم')
    .regex(/^[0-9+\-\s()]+$/, 'رقم الهاتف يحتوي على أرقام فقط'),
  subject: z
    .string()
    .min(5, 'الموضوع يجب أن يكون على الأقل 5 أحرف')
    .max(100, 'الموضوع يجب أن يكون أقل من 100 حرف'),
  message: z
    .string()
    .min(10, 'الرسالة يجب أن تكون على الأقل 10 أحرف')
    .max(1000, 'الرسالة يجب أن تكون أقل من 1000 حرف'),
  service: z
    .string()
    .min(1, 'يرجى اختيار نوع الخدمة'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;