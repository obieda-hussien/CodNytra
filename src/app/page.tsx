import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { faRocket, faCode } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white dark:from-slate-950 dark:via-blue-950 dark:to-slate-950">
      {/* Hero Section */}
      <section id="home" className="pt-20 md:pt-32 pb-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                مرحباً بكم في Codenetra
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                شركة تقنية مبتكرة متخصصة في تطوير التطبيقات والحلول البرمجية الذكية
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="mt-12 flex flex-wrap gap-4 justify-center">
              <Button variant="glow" size="lg" icon={faRocket}>
                ابدأ مشروعك
              </Button>
              <Button variant="secondary" size="lg" icon={faCode}>
                شاهد أعمالنا
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Test Sections for Navigation */}
      <section id="services" className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              خدماتنا
            </h2>
            <p className="text-center text-gray-300 max-w-2xl mx-auto">
              نقدم مجموعة شاملة من الخدمات التقنية المتطورة
            </p>
          </FadeIn>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              أعمالنا
            </h2>
            <p className="text-center text-gray-300 max-w-2xl mx-auto">
              اطلع على مجموعة من مشاريعنا المميزة
            </p>
          </FadeIn>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              تواصل معنا
            </h2>
            <p className="text-center text-gray-300 max-w-2xl mx-auto">
              دعنا نناقش مشروعك القادم
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
