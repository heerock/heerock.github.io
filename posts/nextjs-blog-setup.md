---
title: "Next.js로 GitHub 블로그 만들기"
date: "2024-06-01"
excerpt: "Next.js와 GitHub Pages를 활용하여 나만의 블로그를 만드는 과정을 단계별로 설명합니다."
tags: ["Next.js", "GitHub Pages", "튜토리얼", "개발"]
---

# Next.js로 GitHub 블로그 만들기

GitHub Pages와 Next.js를 활용하면 완전 무료로 나만의 멋진 블로그를 만들 수 있습니다. 이 포스트에서는 그 과정을 단계별로 설명하겠습니다.

## 왜 Next.js를 선택했을까?

### 1. 뛰어난 성능
- **Static Site Generation (SSG)**: 빌드 타임에 모든 페이지를 미리 생성
- **Code Splitting**: 필요한 JavaScript만 로드
- **Image Optimization**: 자동 이미지 최적화

### 2. 개발자 경험
- **Hot Reload**: 코드 변경 시 즉시 반영
- **TypeScript 지원**: 타입 안정성 제공
- **Built-in CSS Support**: CSS Modules, Sass 등 기본 지원

### 3. SEO 친화적
- **Server-side Rendering**: 검색 엔진 최적화
- **Meta Tags**: 쉬운 메타데이터 관리

## 기본 구조

```
my-blog/
├── pages/
│   ├── index.tsx          # 메인 페이지
│   └── blog/
│       └── [slug].tsx     # 동적 블로그 포스트 페이지
├── posts/
│   ├── post1.md          # 마크다운 포스트
│   └── post2.md
├── components/
│   └── Layout.tsx        # 레이아웃 컴포넌트
├── lib/
│   └── posts.ts          # 포스트 관리 유틸리티
└── public/
    └── images/           # 이미지 파일들
```

## 주요 기능들

### 마크다운 지원
- **gray-matter**: Front matter 파싱
- **remark**: 마크다운을 HTML로 변환

```typescript
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export function getPostBySlug(slug: string) {
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  const processedContent = remark().use(html).processSync(content)
  const contentHtml = processedContent.toString()
  
  return {
    slug,
    content: contentHtml,
    ...data
  }
}
```

### 다크 모드
- **Tailwind CSS**: 클래스 기반 다크 모드
- **Local Storage**: 사용자 설정 저장

```typescript
const toggleDarkMode = () => {
  setDarkMode(!darkMode)
  if (!darkMode) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}
```

## GitHub Pages 배포

### 1. Repository 설정
- Repository 이름: `username.github.io` 또는 원하는 이름
- Public repository로 설정

### 2. GitHub Actions 워크플로우
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: actions/deploy-pages@v1
        with:
          artifact_name: github-pages
          path: ./out
```

### 3. next.config.js 설정
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

## 마무리

Next.js를 활용한 블로그 구축은 생각보다 간단하면서도 강력한 기능들을 제공합니다. 무엇보다 GitHub Pages를 통해 완전 무료로 호스팅할 수 있다는 점이 가장 큰 장점입니다.

### 참고 자료
- [Next.js 공식 문서](https://nextjs.org/docs)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [GitHub Pages 가이드](https://pages.github.com/)

앞으로도 블로그 개선 과정과 새로운 기능 추가에 대해 계속 포스팅하겠습니다! 🚀