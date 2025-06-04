import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'
import { format } from 'date-fns'
import Layout from '../../components/Layout'
import { getAllPosts, getPostBySlug, Post } from '../../lib/posts'

interface BlogPostProps {
  post: Post
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <Layout title={`${post.title} | 희락의 블로그`} description={post.excerpt}>
      <article className="max-w-4xl mx-auto">
        {/* 뒤로가기 링크 */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center space-x-3 px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-2xl border border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium">블로그 홈으로</span>
          </Link>
        </div>

        {/* 포스트 헤더 */}
        <header className="relative mb-12 p-8 md:p-12 bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-red-900/20 rounded-3xl border border-purple-100 dark:border-purple-800 overflow-hidden">
          {/* 배경 장식 */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-600 dark:to-pink-600 opacity-20 rounded-full transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600 opacity-20 rounded-full transform -translate-x-12 translate-y-12"></div>
          
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 bg-clip-text text-transparent mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">📅</span>
                <time dateTime={post.date} className="font-medium">
                  {format(new Date(post.date), 'yyyy년 MM월 dd일')}
                </time>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-2xl">👤</span>
                <span className="font-medium">희락</span>
              </div>
              
              {post.tags && post.tags.length > 0 && (
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🏷️</span>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {post.excerpt && (
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
                {post.excerpt}
              </p>
            )}
          </div>
        </header>

        {/* 포스트 내용 */}
        <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-700 mb-12">
          {/* 포스트 내용 스타일링 */}
          <div 
            className="prose prose-lg dark:prose-dark max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-purple-600 dark:prose-a:text-purple-400 prose-strong:text-gray-900 dark:prose-strong:text-white prose-code:text-purple-600 dark:prose-code:text-purple-400 prose-pre:bg-gray-100 dark:prose-pre:bg-gray-900 prose-blockquote:border-purple-300 dark:prose-blockquote:border-purple-600"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* 포스트 푸터 */}
        <footer className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border border-purple-100 dark:border-purple-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* 왼쪽: 뒤로가기 */}
            <Link
              href="/"
              className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>모든 포스트 보기</span>
            </Link>
            
            {/* 오른쪽: 피드백 메시지 */}
            <div className="text-center">
              <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                이 글이 도움이 되셨나요? 💜
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                더 좋은 콘텐츠로 찾아뵙겠습니다! ✨
              </p>
            </div>
          </div>
          
          {/* 구분선 */}
          <div className="mt-8 pt-6 border-t border-purple-200 dark:border-purple-700">
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Written with 💜 by <span className="font-semibold text-purple-600 dark:text-purple-400">희락</span>
              </p>
            </div>
          </div>
        </footer>

        {/* 관련 포스트 또는 추천 포스트 섹션 (미래 확장용) */}
        <div className="mt-16 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl">
            ✨
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            더 많은 이야기
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            다른 흥미로운 포스트들도 확인해보세요!
          </p>
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-2xl border-2 border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span>🏠</span>
            <span className="font-semibold">홈으로 돌아가기</span>
          </Link>
        </div>
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts()
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params?.slug as string)

  return {
    props: {
      post,
    },
  }
}