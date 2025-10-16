export const projectsData = {
  python: [
    {
      title: 'motionsaver',
      description: 'a screensaver application inspired by wallpaper engine. features dynamic video backgrounds, real-time widgets (weather, stocks, media player), multi-monitor support, advanced security with windows api integration. built with python, opencv.',
      badges: [
        { src: 'https://raw.githubusercontent.com/chinmay-sawant/MotionSaver/master/.github/badges/views_badge.svg', alt: 'views' },
        { src: 'https://raw.githubusercontent.com/chinmay-sawant/MotionSaver/master/.github/badges/total_downloads_badge.svg', alt: 'downloads' }
      ],
      links: [
        { text: 'view_source →', url: 'https://github.com/chinmay-sawant/MotionSaver' }
      ]
    }
  ],
  go: [
    {
      title: 'gopdfsuit',
      description: 'comprehensive web service for PDF generation using Go and Gin framework. features template-based PDF creation, HTML to PDF conversion, PDF merging, form filling, multi-page support with automatic page breaks, and interactive web interfaces. supports custom page sizes, font styling, tables, checkboxes, and wkhtmltopdf integration.',
      links: [
        { text: 'view_source →', url: 'https://github.com/chinmay-sawant/gopdfsuit' },
        { text: 'live_demo →', url: 'https://chinmay-sawant.github.io/gopdfsuit/' }
      ],
      stars: 'chinmay-sawant/gopdfsuit'
    },
    {
      title: 'gomindmapper',
      description: 'interactive function relationship visualizer for go codebases — intelligent type resolution, interface implementation detection, and external module analysis. explore repositories through an expandable, pannable, zoomable mind map.',
      links: [
        { text: 'view_source →', url: 'https://github.com/chinmay-sawant/gomindmapper' },
        { text: 'live_demo →', url: 'https://chinmay-sawant.github.io/gomindmapper/' }
      ],
      stars: 'chinmay-sawant/gomindmapper'
    },
    {
      title: 'codemapper',
      description: 'tool to analyze large go codebases: automatically parse functions and call sites, generate a dependency map (codemap.json), and visualize relationships in an interactive react graph ui. backend is written in go; frontend is a browser visualizer. mit licensed.',
      links: [
        { text: 'view_source →', url: 'https://github.com/chinmay-sawant/CodeMapper' },
        { text: 'live_demo →', url: 'https://chinmay-sawant.github.io/CodeMapper/' }
      ]
    },
    {
      title: 'go_fhir_demo',
      description: 'comprehensive go gin framework application with fhir r4 support. features postgresql database, swagger documentation, external fhir server integration, database migrations, structured logging, and clean architecture patterns.',
      links: [
        { text: 'view_source →', url: 'https://github.com/chinmay-sawant/GO_FHIR_DEMO' }
      ]
    },
    {
      title: 'employee_management_system',
      description: 'clean architecture employee management system with go and gin framework. interface-based service and controller layers, repository pattern, comprehensive testing with testify suites and gomock, swagger/openapi documentation for restful crud operations.',
      links: [
        { text: 'view_source →', url: 'https://github.com/chinmay-sawant/gin-example' }
      ]
    },
    {
      title: 'go_apollo_graphql',
      description: 'graphql server demonstration using go and gqlgen library with apollo gateway integration. showcases graphql federation capabilities, apollo router setup, and modern graphql best practices for scalable api architectures.',
      links: [
        { text: 'view_source →', url: 'https://github.com/chinmay-sawant/Go-Apollo-Graphql-Example' }
      ]
    }
  ],
  java: [
    {
      title: 'netflix_springboot_graphql',
      description: 'spring boot application with graphql implementation showcasing netflix dataset integration. demonstrates modern graphql api development with spring boot, utilizing kaggle netflix movies and tv shows dataset for real-world data processing.',
      links: [
        { text: 'view_source →', url: 'https://github.com/chinmay-sawant/Netflix-SpringBoot-Graphql' }
      ]
    },
    {
      title: 'url_shortener',
      description: 'full-stack url shortening service with react frontend and java spring boot backend. redis integration for fast storage and retrieval, configurable url expiry, authentication system, seamless redirect functionality with intuitive ui.',
      links: [
        { text: 'view_source →', url: 'https://github.com/chinmay-sawant/URLShortener' }
      ]
    },
    {
      title: 'ecommerce_learning_project',
      description: 'spring boot learning initiative exploring modern web development. robust security with spring security and auth0 jwt authentication, spring data jpa with postgresql, comprehensive testing with junit5 and mockito, ci/cd pipelines using github actions.',
      links: [
        { text: 'view_source →', url: 'https://github.com/chinmay-sawant/e-Commerce' }
      ]
    }
  ],
  vscode: [
    {
      title: 'codememos (dokumenter)',
      description: 'vs code extension to collect and save code snippets with descriptions and explanations, highlight snippets in-editor, and export collected snippets to markdown files. features codelens ui, smart filename generation, and works with any language.',
      links: [
        { text: 'view_source →', url: 'https://github.com/chinmay-sawant/Dokumenter' },
        { text: 'vscode marketplace →', url: 'https://marketplace.visualstudio.com/items?itemName=chinmay-sawant.code-snippet-collector' }
      ]
    }
  ],
  chrome: [
    {
      title: 'gemini to markdown (gemininotetaker)',
      description: 'chrome extension that enhances your gemini experience by converting conversations to markdown format. features direct html-to-markdown conversion, integrated utilities menu, smart filename generation, and clipboard integration for seamless workflow.',
      links: [
        { text: 'view_source →', url: 'https://github.com/chinmay-sawant/gemini-to-markdown' }
      ]
    },
    {
      title: 'youtube comments tracker',
      description: 'chrome extension that displays live-updating comments from specific users and/or comments containing timestamps on youtube video pages in a transparent, draggable overlay. features real-time comment monitoring, user-specific filtering, automatic timestamp detection, and dual mode operation for enhanced youtube viewing experience.',
      links: [
        { text: 'view_source →', url: 'https://github.com/chinmay-sawant/YoutubeCommentsTracker' },
        { text: 'live_demo →', url: 'https://chinmay-sawant.github.io/YoutubeCommentsViewer/' },
        { text: 'chrome_store →', url: 'https://chromewebstore.google.com/detail/youtube-user-comment-view/monlejnbfmbmokaeopljdejmldiinpmb?authuser=0&hl=en', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg' }
      ],
      chromeRating: { rating: 5.0, reviewCount: 4 }
    },
    {
      title: 'aura tube',
      description: 'chrome extension to customize youtube\'s grid layout — change the number of columns (1–20), adjust spacing (compact/normal/comfortable), and apply changes in real-time with persistent settings saved to the browser.',
      links: [
        { text: 'view_source →', url: 'https://github.com/chinmay-sawant/AuraTubeExtension' },
        { text: 'live_demo →', url: 'https://chinmay-sawant.github.io/AuraTubeExtension/' },
        { text: 'chrome_store →', url: 'https://chromewebstore.google.com/detail/anokmndlhnkfbjbjolamicemoijgoeea?utm_source=item-share-cb', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg' }
      ]
    }
  ],
  vibe: [
    {
      title: 'blackhole simulation',
      description: 'interactive blackhole simulation created using gemini ai. features realistic gravitational effects and particle physics visualization. built with html5 canvas and javascript for an immersive space experience. best viewed in 1024x768 resolution.',
      links: [
        { text: 'view_source →', url: 'https://github.com/chinmay-sawant/Blackhole_Simulation' },
        { text: 'live_demo →', url: 'https://chinmay-sawant.github.io/Blackhole_Simulation/' }
      ]
    },
    {
      title: 'dyson swarms',
      description: 'futuristic dyson swarm visualization created with gemini ai. demonstrates the concept of solar energy collection megastructures around stars. interactive simulation with realistic orbital mechanics and energy collection visualization.',
      links: [
        { text: 'view_source →', url: 'https://github.com/chinmay-sawant/Dyson_Swarms' },
        { text: 'live_demo →', url: 'https://chinmay-sawant.github.io/Dyson_Swarms/' }
      ]
    }
  ]
};
