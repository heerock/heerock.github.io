import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout title="About | 희록의 블로그" description="블로그 운영자에 대한 소개">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          About Me
        </h1>
        
        <div className="prose prose-lg dark:prose-dark max-w-none">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mr-6">
                희록
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  안녕하세요! 👋
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  개발을 사랑하는 블로거 희록입니다
                </p>
              </div>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              웹 개발과 새로운 기술에 관심이 많은 개발자입니다. 
              이 블로그를 통해 제가 배운 것들과 경험을 공유하고, 
              같은 관심사를 가진 분들과 소통하고 싶습니다.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  🛠️ 기술 스택
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• React / Next.js</li>
                  <li>• TypeScript</li>
                  <li>• Node.js</li>
                  <li>• Python</li>
                  <li>• Tailwind CSS</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  💡 관심 분야
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• 프론트엔드 개발</li>
                  <li>• 웹 성능 최적화</li>
                  <li>• UI/UX 디자인</li>
                  <li>• 오픈소스 기여</li>
                  <li>• 새로운 기술 학습</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              📝 블로그 소개
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              이 블로그는 Next.js와 Tailwind CSS로 구축되었으며, 
              GitHub Pages에서 호스팅됩니다. 주로 다음과 같은 내용들을 다룹니다:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start">
                <span className="text-2xl mr-3">🔧</span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">개발 팁</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">실무에서 유용한 개발 노하우</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-2xl mr-3">📚</span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">기술 리뷰</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">새로운 기술과 도구 소개</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-2xl mr-3">🚀</span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">프로젝트</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">개인 프로젝트 회고와 경험</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-2xl mr-3">💭</span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">생각 정리</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">개발과 일상에 대한 생각들</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              📧 연락처
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              궁금한 점이나 협업 제안이 있으시면 언제든 연락해주세요!
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email
              </a>
              <a
                href="https://github.com/heerock"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}