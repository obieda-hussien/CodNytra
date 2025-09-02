import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { FadeIn } from "@/components/animations/FadeIn";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white dark:from-slate-950 dark:via-blue-950 dark:to-slate-950">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* Portfolio Section - Placeholder */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mb-6">
                أعمالنا
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                اطلع على مجموعة من مشاريعنا المميزة والحلول التي قدمناها لعملائنا
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-[--color-primary]/30 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-emerald-600/20 rounded-lg mb-4"></div>
                  <h3 className="text-xl font-bold text-white mb-2">مشروع {item}</h3>
                  <p className="text-gray-300">وصف مختصر للمشروع والتقنيات المستخدمة</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About Section - Placeholder */}
      <section id="about" className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent mb-6">
                عن Codenetra
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                نحن فريق من المطورين المبدعين والمتخصصين في أحدث التقنيات. نؤمن بقوة التكنولوجيا في تحويل الأفكار إلى حلول رقمية تخدم المجتمع وتحقق النجاح لعملائنا.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                تواصل معنا
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                دعنا نناقش مشروعك القادم ونحوله إلى واقع رقمي مذهل
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="max-w-2xl mx-auto">
              <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm border border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-300 mb-2">الاسم</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[--color-primary] focus:outline-none transition-colors"
                      placeholder="اسمك الكريم"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">البريد الإلكتروني</label>
                    <input 
                      type="email" 
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[--color-primary] focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-300 mb-2">الرسالة</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[--color-primary] focus:outline-none transition-colors resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>
                <button className="w-full bg-gradient-to-r from-[--color-primary] to-[--color-accent] text-white py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                  إرسال الرسالة
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
