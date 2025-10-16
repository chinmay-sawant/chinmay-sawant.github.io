# Chinmay Sawant - Portfolio Website

A modern portfolio website built with **React 18** and **Vite 5**, showcasing my work as a backend developer specializing in Go and Java.

## 🚀 Tech Stack

- **React 18.3.1** - Modern UI library with hooks
- **Vite 5.4.10** - Lightning-fast build tool
- **CSS3** - Component-scoped styling with animations
- **JavaScript (ES6+)** - Modern syntax

## 📁 Project Structure

```
├── src/
│   ├── components/         # React components (Header, About, Experience, etc.)
│   ├── hooks/             # Custom React hooks (useTheme, useGitHubStars, etc.)
│   ├── styles/            # Global styles and animations
│   ├── utils/             # Data files and utilities
│   ├── App.jsx            # Main App component
│   └── main.jsx           # Entry point
├── index-vite.html        # Vite HTML template
├── vite.config.js         # Vite configuration
├── deploy.js              # Deployment script for GitHub Pages
└── package.json           # Dependencies and scripts
```

## 🛠️ Development

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Run Development Server

```bash
# Start dev server at http://localhost:5173
npm run dev
```

### Build for Production

```bash
# Build the application
npm run build

# Deploy to root (for GitHub Pages)
npm run deploy
```

## 🎨 Features

- **Dark/Light Theme Toggle** - Persistent theme preference
- **Smooth Animations** - CSS animations with intersection observer
- **GitHub Stars Display** - Live GitHub API integration
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Fast Loading** - Optimized assets and code splitting

## 📦 Components

- **ThemeToggle** - Theme switcher with localStorage
- **Header** - Name, role, and social links
- **About** - Professional summary
- **Experience** - Work history with animations
- **Skills** - Technical skills with icons
- **Projects** - Categorized project showcase
- **Interests** - Personal interests
- **Footer** - Copyright and credits

## 🎯 Deployment

This site is configured for **GitHub Pages** deployment:

1. Build the project: `npm run build`
2. Deploy to root: `npm run deploy`
3. Commit and push changes
4. GitHub Pages will serve from the root `index.html`

The `deploy.js` script automatically:
- Backs up old files to `old-site/`
- Copies built files from `dist/` to root
- Preserves the `.git` directory

## 🌐 Live Site

[https://chinmay-sawant.github.io](https://chinmay-sawant.github.io)

## 📝 License

© 2025 Chinmay Sawant. Built with ❤️

## 🔧 Migration Notes

This project was migrated from vanilla HTML/CSS/JS to React + Vite while preserving:
- ✅ All original content and features
- ✅ Theme toggle functionality
- ✅ GitHub API integration
- ✅ All animations and interactions
- ✅ Responsive design
- ✅ GitHub Pages compatibility

## 📞 Contact

- GitHub: [@chinmay-sawant](https://github.com/chinmay-sawant)
- LinkedIn: [chinmaysawant06](https://www.linkedin.com/in/chinmaysawant06)
