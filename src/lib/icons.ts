import { library } from '@fortawesome/fontawesome-svg-core'
import { faCode, faLaptopCode, faMobile, faRocket, faBolt, faArrowRight, faStar, faPlay, faSun, faMoon, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

// Add only the icons we need to reduce bundle size
library.add(
  faCode, faLaptopCode, faMobile, faRocket, faBolt, faArrowRight, faStar, faPlay, faSun, faMoon, faBars, faTimes,
  faGithub, faLinkedin, faTwitter
)