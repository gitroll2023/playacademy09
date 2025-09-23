import { Metadata } from 'next';
import RetroHeader from "@/components/RetroHeader";
import RetroHeroSection from "@/components/RetroHeroSection";
import RetroAboutSection from "@/components/RetroAboutSection";
import PlantGallery from "@/components/PlantGallery";
import RetroTestimonials from "@/components/RetroTestimonials";
import RetroDirector from "@/components/RetroDirector";

export const metadata: Metadata = {
  title: '인생정원 - Life Garden (모바일)',
  description: '화훼, 청년, 교육의 가치를 통합하여 개인의 성장과 사회 발전에 기여하는 비영리단체',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
};

export default function MobilePage() {
  return (
    <div className="mobile-container" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <div style={{
        background: '#ffffff',
        borderBottom: '1px solid #ddd',
        padding: '10px 15px',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <div style={{
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#4CAF50',
          fontFamily: 'Gungsuh, 궁서, GungsuhChe, 궁서체, Batang, 바탕, Georgia, serif',
          textAlign: 'center'
        }}>
          人生庭園
        </div>
        <div style={{
          fontSize: '12px',
          color: '#666',
          textAlign: 'center',
          marginTop: '2px'
        }}>
          Life Garden
        </div>
      </div>

      <div style={{ padding: '0 10px' }}>
        <RetroHeroSection />

        {/* 섹션 구분선 */}
        <div style={{ borderTop: '1px solid #ddd', margin: '20px 0' }}></div>

        <RetroAboutSection />

        <div style={{ borderTop: '1px solid #ddd', margin: '20px 0' }}></div>

        <PlantGallery />

        {/* 플레이아카데미 섹션 */}
        <div style={{ borderTop: '1px solid #ddd', margin: '20px 0' }}></div>

        <div id="academy" style={{ margin: '20px 0' }}>
          <div style={{ background: '#ffffff', padding: '15px', borderRadius: '3px', border: '1px solid #ddd' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '15px',
              padding: '5px'
            }}>
              <img
                src="/playacademy.png"
                alt="플레이아카데미 로고"
                style={{
                  maxWidth: '250px',
                  height: 'auto',
                  display: 'block',
                  margin: '0 auto'
                }}
              />
            </div>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#666', marginBottom: '8px' }}>
                인생정원 산하기관
              </div>
              <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#333', fontStyle: 'italic' }}>
                "배움이 즐거움이 되는 순간, 새로운 가능성이 열립니다"
              </div>
            </div>

            <div style={{ padding: '15px', marginBottom: '15px', background: '#f0f8ff', borderRadius: '3px', border: '1px solid #4169e1' }}>
              <h3 style={{ fontSize: '13px', marginBottom: '10px', color: '#4169e1', textAlign: 'center' }}>
                ✨ 초교파 목사님과 원로 장로님이 후원하는 성경 교육 기관 ✨
              </h3>
              <p style={{ fontSize: '11px', textAlign: 'center' }}>
                양유승 장로님을 필두로 원장님들이 마음을 모아 후원하는 중입니다.
              </p>
            </div>

            <div style={{ padding: '15px', marginBottom: '15px', background: '#ffffff', borderRadius: '3px', border: '1px solid #ddd' }}>
              <h3 style={{ fontSize: '13px', marginBottom: '10px', color: '#333', textAlign: 'center' }}>
                🎯 교육 철학
              </h3>
              <div style={{ fontSize: '11px', lineHeight: '1.7', textAlign: 'center' }}>
                <p style={{ marginBottom: '15px' }}>
                  Play Academy는 배움의 본질을<br />
                  재정의하는 교육 프로그램입니다.
                </p>
                <p style={{ marginBottom: '15px' }}>
                  모든 개인이 자신의 고유한 가치를<br />
                  발견해가는 교육을 제공합니다.
                </p>
                <p style={{ marginBottom: '15px', fontWeight: 'bold', color: '#ff3300', fontSize: '12px' }}>
                  "인생은 자신의 쓸모를<br />
                  찾아가는 여정"
                </p>
                <p>
                  이러한 철학 아래,<br />
                  그 여정에 필수적인 도구는<br />
                  바로 '배움'입니다.
                </p>
              </div>
            </div>

            <div style={{ padding: '15px', marginBottom: '15px', background: '#f0fff0', borderRadius: '3px', border: '1px solid #32cd32' }}>
              <h3 style={{ fontSize: '13px', marginBottom: '10px', color: '#32cd32', textAlign: 'center' }}>
                🌟 교육 방향성
              </h3>
              <div style={{ fontSize: '11px', lineHeight: '1.7', textAlign: 'center' }}>
                <p style={{ marginBottom: '15px' }}>
                  기존 배움에 대한 심리적 부담감을 해소하고,<br />
                  배움을 통해 자신의 가치를 찾아가는<br />
                  즐거운 과정으로 재해석합니다.
                </p>
                <p>
                  단순한 지식 습득을 넘어,<br />
                  새로운 가능성을 탐색하는<br />
                  몰입형 교육 경험을 제공합니다.
                </p>
              </div>
            </div>

            <div style={{ padding: '15px', background: '#fff8dc', borderRadius: '3px', border: '1px solid #ff8c00' }}>
              <h3 style={{ fontSize: '13px', marginBottom: '10px', color: '#ff8c00', textAlign: 'center' }}>
                🚀 비전
              </h3>
              <div style={{ fontSize: '11px', lineHeight: '1.7', textAlign: 'center' }}>
                <p>
                  배움을 통해 개인의 잠재력을 극대화하고,<br />
                  더 나은 삶을 위한 실질적인 변화를<br />
                  창출하는 플랫폼이 될 것입니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #ddd', margin: '20px 0' }}></div>

        <RetroTestimonials />

        <div style={{ borderTop: '1px solid #ddd', margin: '20px 0' }}></div>

        <RetroDirector />

        {/* 하단 정보 */}
        <footer id="contact" style={{ background: '#f5f5f5', borderTop: '1px solid #ddd', padding: '20px 15px', marginTop: '30px' }}>
          <div style={{ textAlign: 'center', color: '#666', fontSize: '12px', lineHeight: '1.6' }}>
            <div style={{ marginBottom: '10px' }}>
              <strong style={{ color: '#333', fontSize: '14px' }}>문의하기</strong>
            </div>
            <div style={{ marginBottom: '10px' }}>
              이메일: contact@lifegarden.o-r.kr
            </div>
            <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid #ddd', fontSize: '11px' }}>
              Copyright © 2014 인생정원 All Rights Reserved. | 이사장: 양유승 | 비영리단체 승인 대기중
            </div>

            {/* PC/모바일 버전 선택 */}
            <div style={{ marginTop: '20px', paddingTop: '15px', borderTop: '1px solid #ddd' }}>
              <div style={{ fontSize: '12px', marginBottom: '10px', color: '#888' }}>버전 선택</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <a
                  href="/"
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
                  PC 버전
                </a>
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
                  모바일 버전
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}