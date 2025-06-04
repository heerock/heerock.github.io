import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout title="About | 희락의 블로그" description="백엔드 개발자 희락에 대한 소개">
      <div className="max-w-4xl mx-auto">
        {/* 페이지 제목 */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 bg-clip-text text-transparent mb-6">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-12">
          {/* 프로필 카드 */}
          <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden border border-gray-100 dark:border-gray-700">
            {/* 배경 장식 */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 rounded-full opacity-20 transform translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-200 to-cyan-200 dark:from-blue-800 dark:to-cyan-800 rounded-full opacity-20 transform -translate-x-16 translate-y-16"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                {/* 프로필 이미지 */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-red-500 via-blue-500 to-purple-500 rounded-3xl flex items-center justify-center text-white text-4xl md:text-5xl font-bold shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    희락
                  </div>
                </div>
                
                {/* 소개 텍스트 */}
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    안녕하세요! 👋
                  </h2>
                  <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-6">
                    서버와 시스템을 중심으로 한 개발자 희락입니다
                  </h3>
                  
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6">
                    주로 백엔드와 시스템 아키텍처를 담당하고 있지만, 
                    프론트엔드부터 인프라까지 개발의 전체 스펙트럼에 관심이 많습니다. 
                    복잡한 문제를 깔끔한 코드로 해결하는 것을 좋아하며, 
                    이 블로그를 통해 개발 경험과 기술적 인사이트를 공유합니다.
                  </p>
                  
                  {/* 키워드 태그들 */}
                  <div className="flex flex-wrap gap-3">
                    {['🖥️ 백엔드 개발자', '🔧 문제 해결사', '📚 지속 학습자', '🚀 기술 탐험가'].map((keyword) => (
                      <span
                        key={keyword}
                        className="px-4 py-2 bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 기술 스택 & 관심 분야 */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* 기술 스택 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-2xl mr-4">
                  🛠️
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  기술 스택
                </h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { name: 'NestJS / TypeScript', level: '주력 기술', color: 'from-red-500 to-blue-600', icon: '🚀' },
                  { name: 'Node.js / Express', level: '주력 기술', color: 'from-green-400 to-green-600', icon: '🟢' },
                  { name: 'Java / Spring Boot', level: '실무 경험', color: 'from-orange-400 to-red-600', icon: '☕' },
                  { name: 'PHP', level: '프로젝트 경험', color: 'from-purple-500 to-blue-500', icon: '🐘' },
                  { name: 'PostgreSQL / MySQL', level: '주력 기술', color: 'from-blue-400 to-purple-500', icon: '🗄️' },
                  { name: 'Redis / MongoDB', level: '사용 경험', color: 'from-red-400 to-pink-500', icon: '💾' },
                  { name: 'Docker / Kubernetes', level: '실무 활용', color: 'from-blue-400 to-blue-600', icon: '🐳' },
                  { name: 'AWS / GCP', level: '클라우드 운영', color: 'from-yellow-400 to-orange-500', icon: '☁️' }
                ].map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <div>
                        <span className="text-gray-900 dark:text-white font-medium block">
                          {skill.name}
                        </span>
                        <span className={`text-sm font-medium bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                          {skill.level}
                        </span>
                      </div>
                    </div>
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${skill.color}`}></div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* 관심 분야 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-2xl mr-4">
                  💡
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  관심 분야
                </h3>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: '🏗️', title: '시스템 아키텍처', desc: '확장 가능하고 안정적인 서버 설계' },
                  { icon: '⚡', title: '성능 최적화', desc: '쿼리 튜닝과 캐싱 전략으로 속도 개선' },
                  { icon: '🔐', title: '보안 & 인증', desc: 'JWT, OAuth, 보안 취약점 분석' },
                  { icon: '📊', title: '데이터베이스 설계', desc: '효율적인 스키마와 인덱싱 전략' },
                  { icon: '☁️', title: '클라우드 & DevOps', desc: 'CI/CD 파이프라인과 인프라 자동화' },
                  { icon: '🔄', title: 'MSA & API 설계', desc: '마이크로서비스와 RESTful API 구축' },
                  { icon: '📈', title: '모니터링 & 로깅', desc: '시스템 상태 추적과 장애 대응' },
                  { icon: '🤖', title: 'AI/ML 백엔드', desc: 'ML 모델 서빙과 데이터 파이프라인' }
                ].map((interest) => (
                  <div key={interest.title} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                    <span className="text-2xl flex-shrink-0">{interest.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {interest.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {interest.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* 경험 & 프로젝트 */}
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-green-900/20 rounded-2xl shadow-xl p-8 border border-blue-100 dark:border-blue-800">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-4">
                💼
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
                경험 & 전문 분야
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
                다양한 프로젝트를 통해 쌓은 개발 경험과 
                지속적인 학습으로 발전시켜온 기술적 전문성을 소개합니다.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: '🚀', title: 'API 개발', desc: 'RESTful API 설계 및 구현, API 문서화' },
                { icon: '🔍', title: '데이터 분석', desc: '대용량 데이터 처리와 분석 시스템 구축' },
                { icon: '🛡️', title: '보안 강화', desc: '인증/인가 시스템과 보안 취약점 대응' },
                { icon: '📡', title: '실시간 처리', desc: 'WebSocket, 메시지 큐를 활용한 실시간 시스템' },
                { icon: '🌐', title: '분산 시스템', desc: '로드밸런싱과 분산 처리 아키텍처 설계' },
                { icon: '🔧', title: '인프라 운영', desc: '서버 모니터링과 자동화된 배포 시스템' }
              ].map((topic) => (
                <div key={topic.title} className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">{topic.icon}</div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    {topic.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {topic.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* 연락처 */}
          <div className="text-center bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-12 border border-gray-100 dark:border-gray-700">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                함께 협업해요! 🤝
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                개발 관련 논의나 기술적 협업, 
                혹은 흥미로운 프로젝트 제안이 있으시면 언제든 연락주세요!
                새로운 도전과 학습 기회를 항상 환영합니다. 🚀
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="mailto:heerock93@gmail.com"
                className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-2xl font-semibold hover:from-blue-600 hover:to-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>이메일 문의</span>
              </a>
              
              <a
                href="https://github.com/heerock"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-8 py-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-2xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                <span>GitHub 방문</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}