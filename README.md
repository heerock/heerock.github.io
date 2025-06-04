# 희록의 블로그

Next.js와 Tailwind CSS로 구축된 개인 블로그입니다. GitHub Pages에서 호스팅되며, 마크다운으로 블로그 포스트를 작성할 수 있습니다.

## ✨ 주요 기능

- 🌙 **다크 모드 지원** - 시스템 설정에 따른 자동 감지 및 수동 토글
- 📱 **반응형 디자인** - 모든 기기에서 최적화된 경험
- ⚡ **빠른 성능** - Next.js SSG를 활용한 정적 사이트 생성
- 🏷️ **태그 시스템** - 포스트 분류 및 검색 기능
- 📝 **마크다운 지원** - 간편한 포스트 작성
- 🚀 **자동 배포** - GitHub Actions를 통한 CI/CD

## 🛠️ 기술 스택

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📁 프로젝트 구조

```
heerock-blog/
├── pages/
│   ├── _app.tsx           # Next.js App 컴포넌트
│   ├── index.tsx          # 메인 페이지
│   ├── about.tsx          # About 페이지
│   └── blog/
│       └── [slug].tsx     # 동적 블로그 포스트 페이지
├── posts/
│   ├── welcome-to-my-blog.md
│   └── nextjs-blog-setup.md
├── components/
│   └── Layout.tsx         # 레이아웃 컴포넌트
├── lib/
│   └── posts.ts           # 포스트 관리 유틸리티
├── styles/
│   └── globals.css        # 글로벌 스타일
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions 워크플로우
└── public/
    └── favicon.ico
```

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 3. 빌드 및 배포

```bash
npm run build
npm run export
```

## 📝 포스트 작성하기

### 1. 새 마크다운 파일 생성

`posts/` 폴더에 새로운 `.md` 파일을 생성합니다:

```bash
posts/my-new-post.md
```

### 2. Front Matter 작성

파일 상단에 메타데이터를 추가합니다:

```markdown
---
title: "포스트 제목"
date: "2024-06-04"
excerpt: "포스트 요약 설명"
tags: ["태그1", "태그2", "태그3"]
---

# 포스트 내용 시작

여기에 마크다운으로 내용을 작성하세요...
```

### 3. 지원하는 Front Matter 필드

- `title`: 포스트 제목 (필수)
- `date`: 작성 날짜 (YYYY-MM-DD 형식)
- `excerpt`: 포스트 요약 (선택사항)
- `tags`: 태그 배열 (선택사항)

## 🌐 GitHub Pages 배포 설정

### 1. Repository 설정

1. GitHub에서 새 repository 생성
2. Repository 이름: `username.github.io` (또는 원하는 이름)
3. Public repository로 설정

### 2. GitHub Pages 활성화

1. Repository > Settings > Pages
2. Source: "GitHub Actions" 선택

### 3. 코드 푸시

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

GitHub Actions가 자동으로 빌드하고 배포합니다.

### 4. Custom Domain (선택사항)

`username.github.io`가 아닌 다른 이름의 repository를 사용하는 경우, `next.config.js`에서 다음 설정을 수정하세요:

```javascript
const nextConfig = {
  // ... 기존 설정
  basePath: '/repository-name',
  assetPrefix: '/repository-name/',
}
```

## 🎨 커스터마이징

### 색상 및 스타일 변경

`tailwind.config.js`와 `styles/globals.css`에서 색상과 스타일을 변경할 수 있습니다.

### 레이아웃 수정

`components/Layout.tsx`에서 헤더, 푸터, 네비게이션을 수정할 수 있습니다.

### 새 페이지 추가

`pages/` 폴더에 새로운 `.tsx` 파일을 추가하면 자동으로 라우팅됩니다.

## 📄 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.

---

⭐ 이 프로젝트가 도움이 되었다면 별점을 눌러주세요!