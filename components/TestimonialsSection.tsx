export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="w-[1920px] mx-auto px-20">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">추천의 말씀</h2>
          <p className="text-xl text-gray-600">플레이아카데미를 응원하는 분들의 목소리</p>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-white">
                  <h3 className="text-2xl font-bold">정훈오 목사</h3>
                  <p className="text-blue-100">초교파</p>
                </div>
              </div>
              <p className="text-white text-lg italic">
                "어둠을 밝히는 등불과 같이, 플레이아카데미의 시작을 축복합니다."
              </p>
            </div>

            <div className="p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                배움의 여정은 곧 하나님께서 우리에게 주신 잠재력을 발견하고 실현해나가는 거룩한 과정입니다.
                이러한 귀한 가치를 실현하고자 설립된 '플레이아카데미'의 시작에 기쁜 마음으로 추천의 말씀을 전합니다.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                플레이아카데미는 '배움이 즐거움이 되는 순간, 새로운 가능성이 열린다'는 슬로건 아래,
                모든 개인이 자신의 고유한 가치를 찾아가는 여정을 돕고자 합니다.
                이는 단순한 지식의 전달을 넘어, 한 사람 한 사람이 삶의 주체로서 바로 서도록 이끄는 귀한 사역입니다.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                특별히 양유승 장로님을 비롯한 여러 원장님들의 헌신과 기도로 세워진 이 기관이
                다음 세대를 위한 신앙 교육의 새로운 지평을 열어가기를 소망합니다.
                이 시대의 청년들이 플레이아카데미를 통해 자신의 쓸모를 발견하고,
                하나님 안에서 참된 기쁨과 자유를 누리며 세상의 빛과 소금의 역할을 감당하는 인재로 성장하기를 기대합니다.
              </p>

              <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-blue-600">
                <p className="text-gray-800 font-medium">
                  플레이아카데미의 모든 과정 위에 하나님의 지혜와 사랑이 늘 함께하시기를 기도하며,
                  이 귀한 사역에 많은 분들의 관심과 동참을 부탁드립니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-br from-green-600 to-teal-600 p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-white">
                  <h3 className="text-2xl font-bold">민매실 강사</h3>
                  <p className="text-green-100">교육 전문가</p>
                </div>
              </div>
              <p className="text-white text-lg italic">
                "배움의 즐거움 속에서 피어나는 새로운 가능성을 응원합니다."
              </p>
            </div>

            <div className="p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                오랜 시간 교육 현장에서 많은 분들을 만나오면서,
                배움이 개인의 삶을 얼마나 풍요롭게 만들고 새로운 길을 열어주는지를 깊이 깨달아 왔습니다.
                '플레이아카데미'가 추구하는 교육 철학은 바로 이러한 배움의 본질적인 힘을 담고 있습니다.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                '인생은 자신의 쓸모를 찾아가는 여정'이라는 철학 아래,
                배움에 대한 심리적 부담을 덜고 즐거운 과정으로 재해석하려는 시도는 매우 의미 깊습니다.
                이는 모든 학습자들이 자기 자신을 깊이 이해하고,
                잠재된 가능성을 마음껏 탐색할 수 있는 훌륭한 토대가 될 것입니다.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                인생정원의 양유승 이사장님을 비롯한 여러 후원자분들의 귀한 뜻이 모여 시작되는 플레이아카데미가
                각자의 '인생정원'을 더욱 아름답게 가꾸어 나가는 소중한 밑거름이 되기를 바라며,
                새로운 시작을 앞둔 모든 분들께 힘찬 격려의 박수를 보냅니다.
              </p>

              <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-600">
                <p className="text-gray-800 font-medium">
                  플레이아카데미가 이 시대 청년들에게 희망과 비전을 심어주는
                  든든한 교육 플랫폼으로 자리매김하기를 진심으로 응원합니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">함께 만들어가는 교육의 미래</h3>
          <p className="text-xl mb-8 text-blue-100">
            플레이아카데미는 많은 분들의 기도와 후원으로 성장하고 있습니다
          </p>
          <div className="grid grid-cols-3 gap-8 max-w-[800px] mx-auto">
            <div>
              <p className="text-4xl font-bold mb-2">10+</p>
              <p className="text-blue-100">초교파 목회자 후원</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">50+</p>
              <p className="text-blue-100">원로 장로 참여</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">100+</p>
              <p className="text-blue-100">청년 교육 수혜자</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}