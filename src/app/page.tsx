import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { faRocket, faCode } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <main className="container mx-auto px-4 py-20">
        <FadeIn>
          <div className="text-center space-y-8">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              مرحباً بكم في Codenetra
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
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
        
        <FadeIn delay={0.6}>
          <div className="mt-20 text-center">
            <p className="text-gray-400">
              Testing components with Arabic text support and RTL layout
            </p>
          </div>
        </FadeIn>
      </main>
    </div>
  );
}
