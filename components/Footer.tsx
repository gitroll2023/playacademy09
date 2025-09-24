export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="w-[1920px] mx-auto px-20">
        <div className="grid grid-cols-4 gap-12 mb-12">
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">인</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">라이프가든</h2>
                <p className="text-xs text-gray-400">Life Garden</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              화훼, 청년, 교육의 가치를 통합하여
              개인의 성장과 사회 발전에 기여하는
              비영리단체입니다.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-6">바로가기</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  라이프가든 소개
                </a>
              </li>
              <li>
                <a href="#academy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  플레이아카데미
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors text-sm">
                  추천의 말씀
                </a>
              </li>
              <li>
                <a href="#director" className="text-gray-400 hover:text-white transition-colors text-sm">
                  이사장 소개
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-6">프로그램</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">플레이아카데미</li>
              <li className="text-gray-400 text-sm">청년 교육 지원</li>
              <li className="text-gray-400 text-sm">화훼 전문 교육</li>
              <li className="text-gray-400 text-sm">멘토링 프로그램</li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-6">문의하기</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-400 text-sm">contact@lifegarden.kr</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-400 text-sm">02-1234-5678</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400 text-sm">서울특별시 강남구</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex justify-between items-center">
            <div className="text-gray-400 text-sm">
              <p>© 2024 라이프가든. All rights reserved.</p>
              <p className="mt-2">
                <span className="text-gray-500">비영리단체 승인 대기 중</span> ·
                <span className="text-gray-500 ml-2">이사장: 양유승</span>
              </p>
            </div>

            <div className="flex gap-6">
              <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
                후원하기
              </button>
              <button className="px-6 py-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors font-medium border border-gray-700">
                뉴스레터 구독
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gray-800/50 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <h4 className="text-yellow-500 font-bold">후원 안내</h4>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            라이프가든과 플레이아카데미는 여러분의 후원으로 운영됩니다.
            청년들의 성장과 교육을 위한 귀한 사역에 동참해 주세요.
            작은 관심과 후원이 큰 변화를 만들어갑니다.
          </p>
        </div>
      </div>
    </footer>
  );
}