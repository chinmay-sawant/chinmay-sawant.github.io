export const skillsData = [
  { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
  { name: 'Rust', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Gin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
  { name: 'gRPC', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grpc/grpc-original.svg' },
  { name: 'gqlgen', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { name: 'GORM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
  { name: 'Twirp', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
  { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Kafka', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg' },
  { name: 'AWS Lambda', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'GCP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'OpenShift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'CI/CD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Testify', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
  { name: 'GoMock', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
  { name: 'JUnit 5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Tree-sitter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg' },
  { name: 'Static Analysis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg' },
  { name: 'Microservices', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
];

export const skillGroups = [
  {
    label: 'languages',
    skills: ['Go', 'Rust', 'Python', 'Java', 'TypeScript', 'SQL'],
  },
  {
    label: 'frameworks',
    skills: ['Gin', 'gRPC', 'gqlgen', 'GraphQL', 'GORM', 'Twirp', 'Spring Boot', 'React'],
  },
  {
    label: 'data & messaging',
    skills: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB', 'Kafka'],
  },
  {
    label: 'cloud & devops',
    skills: ['AWS Lambda', 'GCP', 'Docker', 'OpenShift', 'CI/CD', 'Microservices'],
  },
  {
    label: 'testing & analysis',
    skills: ['Testify', 'GoMock', 'JUnit 5', 'Tree-sitter', 'Static Analysis'],
  },
];

export const experienceData = [
  {
    company: 'CitiusTech · Mumbai, India',
    role: 'Senior Golang Developer',
    duration: 'Aug 2024 - Present',
    highlights: [
      'Over the last 2 years as a Golang developer - core team for Patient Care Journey, configuring and deploying 40+ AWS Lambda microservices with gRPC and GraphQL (gqlgen).',
      'Built oneforall to containerize Lambda services for local debugging, cutting feature turnaround by 30–40%.',
      'Built GoPDFSuit, an open-source PDF engine originally developed as an internal initiative (575+ ⭐) - projected $2K–$4K/year cost savings vs third-party APIs.',
      'Built GoMindMapper to reverse-engineer legacy dependencies, reducing time-to-understand unfamiliar codebases by 50%+.',
      'Developed an AI-powered knowledge base system inspired by Karpathy\'s knowledge management framework. Ingested internal architecture docs, API specs, and meeting notes to auto-generate context-rich Jira tickets and sprint briefs - cutting ticket grooming time by ~40% and reducing ambiguity in sprint deliverables.',
      'Led onboarding and knowledge transfer, reducing new-hire ramp-up from 4 weeks to under 2 weeks.',
    ],
  },
  {
    company: 'NSEIT · Mumbai, India',
    role: 'Associate System Analyst',
    duration: 'Feb 2020 - Jul 2024',
    highlights: [
      '4+ years across Java and Python - reporting services (JasperReports, ReportLab), Spring Boot APIs, and workflow automation.',
      'Engineered TDOS exam monitoring system with Spring Boot and HTTP/2 client-server push across PAN India.',
      'Led legacy modernization from Java/Servlet to Spring Boot & Angular, JBoss to WildFly with STQC compliance.',
      'Built 40+ Python/Java utilities - bulk candidate search cut data retrieval from days to 15 minutes.',
    ],
  },
];

export const interestsData = [
  'book reading',
  'cycling',
  'music',
  'exploring tech',
  'chess',
  'space enthusiast',
];