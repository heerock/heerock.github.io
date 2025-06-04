import { GetStaticProps } from 'next'
import Link from 'next/link'
import { format } from 'date-fns'
import Layout from '../components/Layout'
import { getAllPosts, Post } from '../lib/posts'

interface HomeProps {
  posts: Post[]
}

export default function Home({ posts }: HomeProps) {
  return (
    <Layout>
      <div className="space-y-12">
        {/* Hero Section - 더 화려하고 예쁜 디자인 */}
        <section className="relative text-center py-20 overflow-hidden">
          {/* 배경 그라디언트 효과 */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 opacity-10 dark:opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-blue-400 via-cyan-400 to-teal-400 opacity-10 dark:opacity-20"></div>
          
          {/* 떠다니는 원형 장식 */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-purple-300 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-32 right-16 w-16 h-16 bg-pink-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-blue-300 rounded-full opacity-20 animate-pulse delay-2000"></div>
          
          <div className="relative z-10">
            <div className="mb-8">
              {/* 프로필 아바타 */}
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl transform hover:scale-105 transition-transform duration-300">
                희락
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 bg-clip-text text-transparent mb-6 animate-fadeIn">
              희락의 블로그
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              ✨ 개발 기술과 경험을 나누는 공간 ✨
              <br />
              <span className="text-lg opacity-80">코딩 • 아키텍처 • 문제 해결 • 성장 이야기</span>
            </p>
            
            {/* CTA 버튼들 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#posts"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center"
              >
                <span className="mr-2">📚</span>
                포스트 보기
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-semibold border-2 border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-400 transform hover:scale-105 transition-all duration-300 flex items-center"
              >
                <span className="mr-2">👋</span>
                소개 보기
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section id="posts" className="scroll-mt-20">
          <div className="flex items-center justify-center mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
            <h2 className="px-8 text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              최근 포스트
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
          </div>
          
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center">
                <span className="text-3xl">📝</span>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                개발 경험과 기술 이야기를 준비하고 있어요!
              </p>
              <p className="text-gray-500 dark:text-gray-500">
                곧 유용한 개발 팁과 인사이트로 찾아뵐게요 ✨
              </p>
            </div>
          ) : (
            <div className="grid gap-8 max-w-4xl mx-auto">
              {posts.map((post, index) => (
                <article
                  key={post.slug}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-400 transform hover:-translate-y-2"
                >
                  {/* 카드 상단 그라디언트 라인 */}
                  <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"></div>
                  
                  <div className="p-8">
                    {/* 메타 정보 */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center">
                        <span className="mr-2">📅</span>
                        <time dateTime={post.date}>
                          {format(new Date(post.date), 'yyyy년 MM월 dd일')}
                        </time>
                      </div>
                      
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex items-center gap-2">
                          <span>🏷️</span>
                          <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* 제목 */}
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                      <Link href={`/blog/${post.slug}`} className="flex items-start">
                        {post.title}
                        <span className="ml-2 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          →
                        </span>
                      </Link>
                    </h3>
                    
                    {/* 요약 */}
                    {post.excerpt && (
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                        {post.excerpt}
                      </p>
                    )}
                    
                    {/* 읽기 버튼 */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <span className="mr-2">📖</span>
                      자세히 읽기
                      <svg
                        className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                  
                  {/* 호버 시 나타나는 장식 효과 */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 rounded-full transform translate-x-10 -translate-y-10 transition-all duration-500"></div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
      
      {/* 사용자 정의 스타일 */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts()
  
  return {
    props: {
      posts,
    },
  }
}