export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-green-50 to-blue-50 overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239ca3af' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative w-[1920px] mx-auto h-full flex items-center px-20">
        <div className="max-w-[800px]">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              비영리단체 승인 대기 중
            </span>
          </div>

          <h1 className="text-7xl font-bold text-gray-900 mb-6 leading-tight">
            삶의 정원을<br />
            <span className="text-green-600">함께 가꾸어가는</span><br />
            인생정원
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            화훼, 청년, 교육의 가치를 통합하여<br />
            개인의 성장과 사회 발전에 기여하는 비영리단체
          </p>

          <div className="flex gap-4">
            <button className="px-8 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all transform hover:scale-105 text-lg font-medium shadow-lg">
              플레이아카데미 알아보기
            </button>
            <button className="px-8 py-4 bg-white text-gray-700 rounded-xl hover:bg-gray-50 transition-all border-2 border-gray-200 text-lg font-medium">
              후원 참여하기
            </button>
          </div>

          <div className="mt-12 flex gap-8">
            <div>
              <p className="text-3xl font-bold text-gray-900">40+</p>
              <p className="text-gray-600">년간 화훼 전문 경력</p>
            </div>
            <div className="w-[1px] bg-gray-300"></div>
            <div>
              <p className="text-3xl font-bold text-gray-900">100+</p>
              <p className="text-gray-600">청년 교육 지원</p>
            </div>
            <div className="w-[1px] bg-gray-300"></div>
            <div>
              <p className="text-3xl font-bold text-gray-900">초교파</p>
              <p className="text-gray-600">목회자 후원</p>
            </div>
          </div>
        </div>

        <div className="absolute right-20 top-1/2 transform -translate-y-1/2">
          <div className="relative">
            <div className="w-[600px] h-[600px] bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[400px] h-[400px] bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-[200px] h-[200px] text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}