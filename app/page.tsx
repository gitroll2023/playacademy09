import RetroHeader from "@/components/RetroHeader";
import RetroHeroSection from "@/components/RetroHeroSection";
import RetroAboutSection from "@/components/RetroAboutSection";
import PlantGallery from "@/components/PlantGallery";
import RetroTestimonials from "@/components/RetroTestimonials";
import RetroDirector from "@/components/RetroDirector";
import UpdateButton from "@/components/UpdateButton";

export default function Home() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <RetroHeader />
      <div style={{ paddingTop: '110px' }}> {/* 헤더 높이만큼 여백 */}
        <RetroHeroSection />

        {/* 섹션 구분자 1 */}
        <div className="section-divider">
          <div className="flower-icon">
            <img src="/flower2/1.jpg" alt="꽃 장식" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />
          </div>
        </div>

        <RetroAboutSection />

        {/* 섹션 구분자 2 */}
        <div className="section-divider">
          <div className="flower-icon">
            <img src="/flower2/2.jpg" alt="꽃 장식" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />
          </div>
        </div>

        <PlantGallery />

      {/* 섹션 구분자 3 */}
      <div className="section-divider">
        <div className="flower-icon">
          <img src="/flower2/3.jpg" alt="꽃 장식" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />
        </div>
      </div>

      {/* 플레이아카데미 섹션 - 시골스 스타일 */}
      <div id="academy" className="sigols-container" style={{ margin: '30px auto' }}>
        <div className="retro-section" style={{ padding: '30px', borderRadius: '3px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '20px',
            padding: '10px'
          }}>
            <img
              src="/playacademy.png"
              alt="플레이아카데미 로고"
              style={{
                maxWidth: '350px',
                height: 'auto',
                display: 'block',
                margin: '0 auto'
              }}
            />
          </div>
          <div style={{ textAlign: 'center', marginBottom: '25px' }}>
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#666', marginBottom: '10px' }}>
              인생정원 산하기관
            </div>
            <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#333', fontStyle: 'italic' }}>
              "배움이 즐거움이 되는 순간, 새로운 가능성이 열립니다"
            </div>
          </div>

          <div className="retro-card" style={{ padding: '25px', marginBottom: '20px', background: '#f0f8ff', border: '1px solid #4169e1' }}>
            <h3 className="retro-title" style={{ fontSize: '16px', marginBottom: '15px', color: '#4169e1', textAlign: 'center' }}>
              ✨ 초교파 목사님과 원로 장로님이 후원하는 성경 교육 기관 ✨
            </h3>
            <p className="retro-text" style={{ marginBottom: '15px', textAlign: 'center' }}>
              양유승 장로님을 필두로 원장님들이 마음을 모아 후원하는 중입니다.
            </p>
          </div>

          <div className="retro-card" style={{ padding: '25px', marginBottom: '20px' }}>
            <h3 className="retro-title" style={{ fontSize: '16px', marginBottom: '15px', color: '#333', textAlign: 'center' }}>
              🎯 교육 철학
            </h3>
            <div className="retro-text" style={{ fontSize: '13px', lineHeight: '1.8', textAlign: 'center' }}>
              <p style={{ marginBottom: '20px' }}>
                Play Academy는 배움의 본질을 재정의하는 교육 프로그램입니다.
              </p>
              <p style={{ marginBottom: '20px' }}>
                우리는 모든 개인이 자신의 고유한 가치를 발견해가고,<br />
                이를 통해 삶의 주체적인 존재로 인정받기를 원한다는<br />
                통찰에서 출발합니다.
              </p>
              <p style={{ marginBottom: '20px', fontWeight: 'bold', color: '#ff3300', fontSize: '15px' }}>
                "인생은 자신의 쓸모를 찾아가는 여정"
              </p>
              <p style={{ marginBottom: '15px' }}>
                이러한 철학 아래, 그 여정에 필수적인 도구는<br />
                바로 '배움'이라고 정의합니다.
              </p>
            </div>
          </div>

          <div className="retro-card" style={{ padding: '25px', marginBottom: '20px', background: '#f0fff0', border: '1px solid #32cd32' }}>
            <h3 className="retro-title" style={{ fontSize: '16px', marginBottom: '15px', color: '#32cd32', textAlign: 'center' }}>
              🌟 교육 방향성
            </h3>
            <div className="retro-text" style={{ fontSize: '13px', lineHeight: '1.8', textAlign: 'center' }}>
              <p style={{ marginBottom: '20px' }}>
                Play Academy는 기존 배움에 대한 심리적 부담감을 해소하고,<br />
                배움을 통해 자신의 가치를 찾아가는<br />
                즐거운 과정으로 재해석합니다.
              </p>
              <p style={{ marginBottom: '15px' }}>
                단순한 지식 습득을 넘어,<br />
                자기 자신을 깊이 이해하고 새로운 가능성을 탐색하는<br />
                몰입형 교육 경험을 제공합니다.
              </p>
            </div>
          </div>

          <div className="retro-card" style={{ padding: '25px', background: '#fff8dc', border: '1px solid #ff8c00' }}>
            <h3 className="retro-title" style={{ fontSize: '16px', marginBottom: '15px', color: '#ff8c00', textAlign: 'center' }}>
              🚀 비전
            </h3>
            <div className="retro-text" style={{ fontSize: '13px', lineHeight: '1.8', textAlign: 'center' }}>
              <p>
                Play Academy는 단순한 교육 기관을 넘어,<br />
                배움을 통해 개인의 잠재력을 극대화하고,<br />
                궁극적으로 더 나은 삶을 위한<br />
                실질적인 변화를 창출하는 플랫폼이 될 것입니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 섹션 구분자 4 */}
      <div className="section-divider">
        <div className="flower-icon">
          <img src="/flower2/4.jpg" alt="꽃 장식" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />
        </div>
      </div>

      <RetroTestimonials />

      {/* 섹션 구분자 5 */}
      <div className="section-divider">
        <div className="flower-icon">
          <img src="/flower2/1.jpg" alt="꽃 장식" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />
        </div>
      </div>

      <RetroDirector />

      {/* 마지막 섹션 구분자 */}
      <div className="section-divider">
        <div className="flower-icon">
          <img src="/flower2/2.jpg" alt="꽃 장식" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />
        </div>
      </div>

      {/* 하단 정보 - 시골스 스타일 */}
      <footer id="contact" style={{ background: '#f5f5f5', borderTop: '1px solid #ddd', padding: '30px 0', marginTop: '50px' }}>
        <div className="sigols-container">
          <div style={{ textAlign: 'center', color: '#666', fontSize: '12px', lineHeight: '1.6' }}>
            <div style={{ marginBottom: '15px' }}>
              <strong style={{ color: '#333', fontSize: '14px' }}>문의하기</strong>
            </div>
            <div>
              이메일: contact@lifegarden.o-r.kr
            </div>
            <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid #ddd' }}>
              Copyright © 2014 인생정원 All Rights Reserved. | 이사장: 양유승 | 비영리단체 승인 대기중
            </div>

            {/* PC/모바일 버전 선택 */}
            <div style={{ marginTop: '20px', paddingTop: '15px', borderTop: '1px solid #ddd' }}>
              <div style={{ fontSize: '12px', marginBottom: '10px', color: '#888' }}>버전 선택</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <span
                  style={{
                    padding: '8px 15px',
                    background: '#666666',
                    border: '1px solid #666666',
                    borderRadius: '4px',
                    color: 'white',
                    fontSize: '12px'
                  }}
                >
                  PC 버전
                </span>
                <a
                  href="/mobile"
                  style={{
                    padding: '8px 15px',
                    background: '#ffffff',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    color: '#333',
                    fontSize: '12px'
                  }}
                >
                  모바일 버전
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
