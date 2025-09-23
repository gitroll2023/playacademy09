export default function DirectorSection() {
  return (
    <section id="director" className="py-24 bg-white">
      <div className="w-[1920px] mx-auto px-20">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            DIRECTOR PROFILE
          </span>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">이사장 소개</h2>
          <p className="text-xl text-gray-600">인생정원을 이끄는 리더십</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-16">
          <div className="grid grid-cols-3 gap-16">
            <div className="col-span-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-400 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                  <div className="w-48 h-48 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-6xl">양유승</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">양유승 이사장</h3>
                    <p className="text-gray-600 mb-4">인생정원 설립자</p>
                    <div className="flex flex-col gap-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2 justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span>남평 식물원 원장</span>
                      </div>
                      <div className="flex items-center gap-2 justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>40년 화훼 전문가</span>
                      </div>
                      <div className="flex items-center gap-2 justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span>교육 후원가</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-2">
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  "땅을 가꾸던 지혜로 사람을 키우는 후원자"
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  한평생 흙을 만지고 생명의 신비를 돌보아 온 식물 전문가에서,
                  이제 다음 세대의 마음 밭을 가꾸는 교육 후원가로 제2의 인생을 시작합니다.
                  40여 년간 식물을 키워내며 터득한 인내와 헌신의 가치를 바탕으로,
                  청년들이 자신의 가능성을 발견하고 삶의 주체로 성장할 수 있도록 돕는 일에 헌신하고자 합니다.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    주요 약력
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <div>
                        <strong>現 비영리단체 인생정원 이사장</strong>
                        <p className="text-sm text-gray-600">화훼, 교육, 청년, 신앙의 가치 통합</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <div>
                        <strong>現 플레이아카데미 핵심 후원자</strong>
                        <p className="text-sm text-gray-600">성경 기반 교육 기관의 든든한 버팀목</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <div>
                        <strong>現 남평 식물원 원장</strong>
                        <p className="text-sm text-gray-600">동백류, 양치식물 전문 재배</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    전문 분야
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <div>
                        <strong>식물원 운영 40여 년</strong>
                        <p className="text-sm text-gray-600">야생화, 분재, 꽃 등 화훼 전문가</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <div>
                        <strong>생명 가치 교육</strong>
                        <p className="text-sm text-gray-600">자연과 인간의 조화로운 성장 철학</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <div>
                        <strong>청년 멘토링</strong>
                        <p className="text-sm text-gray-600">차세대 리더 육성 프로그램 지원</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">교육 후원에 대한 비전</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  양유승 이사장은 오랜 시간 식물을 돌보며 생명 하나하나가 가진 고유한 가치와 잠재력을 깨달았습니다.
                  그는 식물이 좋은 토양과 햇빛, 그리고 정성 어린 보살핌 속에서 가장 아름답게 피어나듯,
                  사람 또한 건강한 공동체와 올바른 가치관 교육 안에서 자신의 재능을 마음껏 펼칠 수 있다고 믿습니다.
                </p>
                <div className="bg-white/50 rounded-xl p-6 border-l-4 border-green-600">
                  <p className="text-gray-800 font-medium italic">
                    "인생정원에서 청년들이 자신의 '쓸모'를 발견하고,
                    즐거운 배움을 통해 인생이라는 정원을 스스로 가꾸어 나가는
                    주체적인 존재로 성장할 수 있도록,
                    기꺼이 든든한 거름이자 뿌리가 되어주고자 합니다."
                  </p>
                  <p className="text-right text-gray-600 mt-3">- 양유승 이사장 -</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-4 gap-8">
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg border-2 border-green-100">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h5 className="text-lg font-bold text-gray-900 mb-2">화훼 전문성</h5>
            <p className="text-gray-600 text-sm">40년 식물원 운영 경험</p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg border-2 border-blue-100">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h5 className="text-lg font-bold text-gray-900 mb-2">교육 철학</h5>
            <p className="text-gray-600 text-sm">생명 가치 기반 교육</p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg border-2 border-purple-100">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h5 className="text-lg font-bold text-gray-900 mb-2">사회 공헌</h5>
            <p className="text-gray-600 text-sm">비영리 활동 추진</p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg border-2 border-orange-100">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h5 className="text-lg font-bold text-gray-900 mb-2">청년 후원</h5>
            <p className="text-gray-600 text-sm">차세대 리더 육성</p>
          </div>
        </div>
      </div>
    </section>
  );
}