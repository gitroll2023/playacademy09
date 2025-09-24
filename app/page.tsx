import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PlantGallery from "@/components/PlantGallery";
import TestimonialsSection from "@/components/TestimonialsSection";
import DirectorSection from "@/components/DirectorSection";
import PlayAcademySection from "@/components/PlayAcademySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <HeroSection />

        {/* 섹션 구분자 1 */}
        <div className="section-divider">
          <div className="section-divider-content">
            <div className="section-divider-icon">
              <img src="/flower2/1.jpg" alt="꽃 장식" />
            </div>
          </div>
        </div>

        <AboutSection />

        {/* 섹션 구분자 2 */}
        <div className="section-divider">
          <div className="section-divider-content">
            <div className="section-divider-icon">
              <img src="/flower2/2.jpg" alt="꽃 장식" />
            </div>
          </div>
        </div>

        <PlantGallery />

        {/* 섹션 구분자 3 */}
        <div className="section-divider">
          <div className="section-divider-content">
            <div className="section-divider-icon">
              <img src="/flower2/3.jpg" alt="꽃 장식" />
            </div>
          </div>
        </div>

        <DirectorSection />

        {/* 섹션 구분자 4 */}
        <div className="section-divider">
          <div className="section-divider-content">
            <div className="section-divider-icon">
              <img src="/flower2/4.jpg" alt="꽃 장식" />
            </div>
          </div>
        </div>

        <PlayAcademySection />

        {/* 섹션 구분자 5 */}
        <div className="section-divider">
          <div className="section-divider-content">
            <div className="section-divider-icon">
              <img src="/flower2/1.jpg" alt="꽃 장식" />
            </div>
          </div>
        </div>

        <TestimonialsSection />

        {/* 마지막 섹션 구분자 */}
        <div className="section-divider">
          <div className="section-divider-content">
            <div className="section-divider-icon">
              <img src="/flower2/2.jpg" alt="꽃 장식" />
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
