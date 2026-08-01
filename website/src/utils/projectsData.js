export const projectsdata = {
  rust: [
    {
      title: 'slopguard',
      description:
        'Enhanced rewrite of deslop with improved architecture and performance heuristics. Language-agnostic static analysis built in Rust using Tree-sitter - supports Go, Python, and Rust codebases.',
      links: [
        { text: 'source', url: 'https://github.com/chinmay-sawant/SlopGuard' },
      ],
    },
    {
      title: 'deslop',
      description:
        'Language-agnostic, ultra-fast best practice analyzer built in Rust with Tree-sitter. Heuristics for code quality, security, and performance across Go, Python, and Rust codebases. Predecessor to goslop.',
      links: [
        { text: 'source', url: 'https://github.com/chinmay-sawant/deslop' },
        { text: 'demo', url: 'https://chinmay-sawant.github.io/deslop/' },
      ],
      stars: 'chinmay-sawant/deslop',
    },
  ],
  go: [
    {
      title: 'goslop',
      description:
        'Modern, fast static analyzer for the AI coding era. Detects low-context AI-generated code patterns and performance issues. Active development in Go; successor focus after deslop.',
      links: [
        { text: 'source', url: 'https://github.com/chinmay-sawant/goslop' },
      ],
      stars: 'chinmay-sawant/goslop',
      active: true,
      featured: true,
    },
    {
      title: 'gopdfsuit',
      description:
        'High-performance PDF generation engine built from scratch in Go. PDF/UA-2 archival compliance with ultra-fast, in-memory JSON templates. Born as a cost-saving alternative to third-party PDF APIs at work.',
      links: [
        { text: 'source', url: 'https://github.com/chinmay-sawant/gopdfsuit' },
        { text: 'demo', url: 'https://chinmay-sawant.github.io/gopdfsuit/' },
      ],
      stars: 'chinmay-sawant/gopdfsuit',
      active: true,
      featured: true,
    },
    {
      title: 'gomindmapper',
      description:
        'Code visualization tool that maps Go call graphs and repository structures. Built during a discovery phase to analyze undocumented legacy code and cut time-to-understand by 50%+.',
      links: [
        { text: 'source', url: 'https://github.com/chinmay-sawant/gomindmapper' },
        { text: 'demo', url: 'https://chinmay-sawant.github.io/gomindmapper/' },
      ],
      stars: 'chinmay-sawant/gomindmapper',
    },
    {
      title: 'gosourcemap',
      description:
        'Language-agnostic code mapper for complex systems - evolution of GoMindMapper with broader language support and deeper dependency analysis.',
      links: [
        { text: 'source', url: 'https://github.com/chinmay-sawant/gosourcemap' },
      ],
    },
    {
      title: 'gochromedp',
      description:
        'Go wrapper around chromedp, extracted from GoPDFSuit for reusable headless Chrome automation in PDF and web rendering pipelines.',
      links: [
        { text: 'source', url: 'https://github.com/chinmay-sawant/gochromedp' },
      ],
      stars: 'chinmay-sawant/gochromedp',
    },
    {
      title: 'go_fhir_demo',
      description:
        'FHIR R4 + Gin + PostgreSQL application with Swagger docs, external FHIR server integration, database migrations, and clean architecture patterns.',
      links: [
        { text: 'source', url: 'https://github.com/chinmay-sawant/go_fhir_demo' },
      ],
    },
    {
      title: 'go_apollo_graphql',
      description:
        'GraphQL server using Go and gqlgen with Apollo Gateway integration - federation capabilities and modern GraphQL API patterns.',
      links: [
        { text: 'source', url: 'https://github.com/chinmay-sawant/go-apollo-graphql-example' },
      ],
    },
  ],
  python: [
    {
      title: 'motionsaver',
      description:
        'Screensaver inspired by Wallpaper Engine - dynamic video backgrounds, real-time widgets (weather, stocks, media), multi-monitor support, and Windows API integration. Built with Python and OpenCV.',
      badges: [
        { src: 'https://raw.githubusercontent.com/chinmay-sawant/motionsaver/master/.github/badges/views_badge.svg', alt: 'views' },
        { src: 'https://raw.githubusercontent.com/chinmay-sawant/motionsaver/master/.github/badges/total_downloads_badge.svg', alt: 'downloads' },
      ],
      links: [
        { text: 'source', url: 'https://github.com/chinmay-sawant/motionsaver' },
        { text: 'demo', url: 'https://chinmay-sawant.github.io/MotionSaver/' },
      ],
      stars: 'chinmay-sawant/MotionSaver',
    },
  ],
  java: [
    {
      title: 'netflix_springboot_graphql',
      description:
        'Spring Boot GraphQL API with Netflix movies & TV shows dataset - real-world data processing with modern GraphQL patterns.',
      links: [
        { text: 'source', url: 'https://github.com/chinmay-sawant/netflix-springboot-graphql' },
      ],
    },
    {
      title: 'url_shortener',
      description:
        'Full-stack URL shortener with React frontend and Spring Boot backend. Redis storage, configurable expiry, and JWT authentication.',
      links: [
        { text: 'source', url: 'https://github.com/chinmay-sawant/urlshortener' },
      ],
    },
  ],
  react: [
    {
      title: 'rotify',
      description:
        'Spotify receipt-style music dashboard built with React, TypeScript, and Vite. Recently played tracks, theme system, and responsive design.',
      links: [
        { text: 'source', url: 'https://github.com/chinmay-sawant/rotify' },
        { text: 'demo', url: 'https://chinmay-sawant.github.io/Rotify/' },
      ],
    },
  ],
  vscode: [
    {
      title: 'dokumenter',
      description:
        'VS Code extension to collect code snippets with descriptions, highlight snippets in-editor, and export to markdown. Published on the Marketplace.',
      links: [
        { text: 'source', url: 'https://github.com/chinmay-sawant/dokumenter' },
        { text: 'marketplace', url: 'https://marketplace.visualstudio.com/items?itemname=chinmay-sawant.code-snippet-collector' },
      ],
    },
  ],
  chrome: [
    {
      title: 'gemini to markdown',
      description:
        'Chrome extension that converts Gemini conversations to markdown with smart filename generation and clipboard integration.',
      links: [
        { text: 'source', url: 'https://github.com/chinmay-sawant/gemini-to-markdown' },
      ],
    },
    {
      title: 'youtube comments tracker',
      description:
        'Chrome extension with live-updating comment overlay on YouTube - user filtering, timestamp detection, and draggable transparent UI.',
      links: [
        { text: 'source', url: 'https://github.com/chinmay-sawant/youtubecommentstracker' },
        { text: 'demo', url: 'https://chinmay-sawant.github.io/YoutubeCommentsViewer/' },
        { text: 'chrome store', url: 'https://chromewebstore.google.com/detail/youtube-user-comment-view/monlejnbfmbmokaeopljdejmldiinpmb' },
      ],
      chromerating: { rating: 5.0, reviewcount: 4 },
    },
    {
      title: 'aura tube',
      description:
        'Chrome extension to customize YouTube grid layout - adjustable columns (1-20), spacing presets, and persistent settings.',
      links: [
        { text: 'source', url: 'https://github.com/chinmay-sawant/auratubeextension' },
        { text: 'demo', url: 'https://chinmay-sawant.github.io/AuraTubeExtension/' },
        { text: 'chrome store', url: 'https://chromewebstore.google.com/detail/anokmndlhnkfbjbjolamicemoijgoeea' },
      ],
    },
  ],
};

/** Flatten categorized projects with category metadata. */
export const getAllProjects = () =>
  Object.entries(projectsdata).flatMap(([category, projects]) =>
    projects.map((project) => ({ ...project, category })),
  );

export const getFeaturedProjects = () =>
  getAllProjects().filter((project) => project.featured);

export const getOtherProjects = () =>
  getAllProjects().filter((project) => !project.featured);

/** Lowercase owner/repo keys for curated projects (for GitHub dedupe). */
export const getCuratedRepoKeys = () => {
  const keys = [];
  for (const project of getAllProjects()) {
    if (project.stars) {
      keys.push(project.stars.toLowerCase());
      continue;
    }
    const github = project.links?.find((l) => l.url?.includes('github.com'));
    if (github) {
      try {
        const parts = new URL(github.url).pathname.split('/').filter(Boolean);
        if (parts[0] && parts[1]) {
          keys.push(`${parts[0]}/${parts[1]}`.toLowerCase());
        }
      } catch {
        /* ignore */
      }
    }
  }
  return keys;
};