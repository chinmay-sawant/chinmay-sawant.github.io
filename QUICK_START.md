# 🚀 Quick Start Guide

## First Time Setup

```bash
# 1. Install dependencies (only needed once)
npm install

# 2. Start development server
npm run dev

# 3. Open http://localhost:5173 in your browser
```

## Daily Development

```bash
# Start dev server (with hot reload)
npm run dev
```

Visit `http://localhost:5173` - changes auto-refresh!

## Deploy to GitHub Pages

```bash
# Build and deploy in one command
npm run deploy

# Then commit and push
git add .
git commit -m "Update portfolio"
git push origin master
```

## Common Tasks

### Add a New Project

Edit `src/utils/projectsData.js`:

```javascript
python: [
  {
    title: 'my_new_project',
    description: 'Description here...',
    links: [
      { text: 'view_source →', url: 'https://github.com/...' }
    ],
    stars: 'username/repo' // Optional: for GitHub stars
  }
]
```

### Update Skills

Edit `src/utils/data.js`:

```javascript
export const skillsData = [
  { name: 'new_skill', icon: 'icon_url_here' },
  // ... existing skills
];
```

### Change Theme Colors

Edit `src/styles/variables.css`:

```css
:root {
  --accent: #007acc;  /* Change this for accent color */
}
```

### Update Experience

Edit `src/utils/data.js` in the `experienceData` array.

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
npx kill-port 5173

# Or use different port
npm run dev -- --port 3000
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Old Files Showing
```bash
# Make sure you deployed
npm run deploy

# Then commit
git add index.html assets/
git commit -m "Deploy React version"
git push
```

## Project Structure at a Glance

```
src/
├── components/      # UI components (edit these for layout changes)
├── hooks/          # React hooks (functionality)
├── styles/         # Global styles (theme, animations)
└── utils/          # Data files (content changes)
```

## Key Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run deploy` | Build + copy to root |
| `npm run preview` | Preview production build |

## Best Practices

1. **Always test locally first**: `npm run dev`
2. **Build before deploying**: `npm run deploy` does this automatically
3. **Keep data files updated**: Edit `src/utils/data.js` and `projectsData.js`
4. **Commit regularly**: Small, frequent commits are better
5. **Test in production**: After pushing, check your GitHub Pages site

## Need Help?

- Dev server not starting? Check port 5173 is free
- Build failing? Check console for errors
- Changes not showing? Hard refresh (Ctrl+Shift+R)
- GitHub Pages not updating? Check repository settings

---

**Happy coding!** 🎨✨
