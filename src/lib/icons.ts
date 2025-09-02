// قم بإنشاء ملف src/lib/icons.ts لإعداد الأيقونات مركزيًا
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCode, faLaptopCode, faMobile, faRocket, faBolt, faArrowRight, faStar, faPlay, faBars, faTimes, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

// أضف الأيقونات التي سنحتاجها فقط لتقليل حجم الحزمة
library.add(
  faCode, faLaptopCode, faMobile, faRocket, faBolt, faArrowRight, faStar, faPlay, faBars, faTimes, faExternalLinkAlt,
  faGithub, faLinkedin, faTwitter
)