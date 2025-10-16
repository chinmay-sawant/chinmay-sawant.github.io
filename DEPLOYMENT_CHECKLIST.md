# 🚀 Deployment Checklist

## ✅ Pre-Deployment Verification

### 1. Local Testing
- [x] Development server runs: `npm run dev`
- [x] All components render correctly
- [x] Theme toggle works (dark/light)
- [x] GitHub stars load (check browser console)
- [x] All links work
- [x] Responsive design works (test mobile view)
- [x] All animations working
- [x] No console errors

### 2. Build Verification
- [x] Build completes: `npm run build`
- [x] No build errors
- [x] Dist folder created
- [x] Assets folder contains JS and CSS

### 3. Deploy to Root
- [x] Deploy script runs: `npm run deploy`
- [x] `index.html` copied to root
- [x] `assets/` folder copied to root
- [x] Old files backed up to `old-site/`

## 📋 Git Commit Checklist

### Files to Commit
```bash
# Source files (required)
git add src/
git add package.json package-lock.json
git add vite.config.js
git add index-vite.html
git add deploy.js
git add .gitignore
git add .nojekyll

# Documentation (recommended)
git add README.md
git add QUICK_START.md
git add MIGRATION_SUMMARY.md
git add COMPARISON.md

# Built files (required for GitHub Pages)
git add index.html
git add assets/

# Commit
git commit -m "Migrate to React + Vite with complete feature parity"
```

### Files to Ignore
```bash
# These are auto-generated or backed up
node_modules/
dist/
old-site/
*.log
```

## 🌐 GitHub Pages Setup

### Step 1: Push to GitHub
```bash
git push origin master
```

### Step 2: Configure GitHub Pages
1. Go to repository settings
2. Navigate to "Pages" section
3. Under "Source", select "Deploy from a branch"
4. Select branch: **master**
5. Select folder: **/ (root)**
6. Click "Save"

### Step 3: Verify Deployment
- Wait 1-2 minutes
- Visit: `https://chinmay-sawant.github.io`
- Check that the React version loads
- Test all features

## 🔍 Post-Deployment Testing

### Visual Testing
- [ ] Homepage loads
- [ ] Theme toggle works
- [ ] All sections visible
- [ ] Projects display correctly
- [ ] Links work
- [ ] Icons load
- [ ] Animations play

### Functional Testing
- [ ] Theme persists on reload
- [ ] GitHub stars load
- [ ] Hover effects work
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Page loads quickly

### Browser Testing (Optional)
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (if available)
- [ ] Mobile browsers

## 🐛 Troubleshooting

### Issue: 404 on GitHub Pages
**Solution:** Make sure you deployed to root
```bash
npm run deploy
git add index.html assets/
git commit -m "Deploy to root"
git push
```

### Issue: Blank Page
**Solution:** Check browser console for errors
- May need to clear GitHub Pages cache (wait 5-10 mins)
- Check that `index.html` is in root
- Check that `assets/` folder exists

### Issue: Assets Not Loading
**Solution:** Check `.nojekyll` file exists
```bash
touch .nojekyll
git add .nojekyll
git commit -m "Add .nojekyll"
git push
```

### Issue: Old Site Still Showing
**Solution:** Hard refresh
- Windows/Linux: `Ctrl + Shift + R`
- Mac: `Cmd + Shift + R`
- Or clear browser cache

## 📊 Verification Commands

```bash
# Check files are in root
ls -la index.html assets/

# Check build output
npm run build

# Check deploy works
npm run deploy

# Check Git status
git status

# Check what will be committed
git diff --cached
```

## ✅ Final Checklist

Before pushing to GitHub:

- [x] ✅ All source files created
- [x] ✅ Build successful
- [x] ✅ Deploy successful
- [x] ✅ Local testing passed
- [x] ✅ Documentation complete
- [ ] Git committed
- [ ] Pushed to GitHub
- [ ] GitHub Pages configured
- [ ] Live site tested

## 🎉 You're Ready!

Once you complete the Git steps above, your site will be live at:
**https://chinmay-sawant.github.io**

### Commands to Run Now:

```bash
# 1. Commit everything
git add .
git commit -m "Complete migration to React + Vite"

# 2. Push to GitHub
git push origin master

# 3. Wait 2-3 minutes, then visit your site!
```

---

**Need help?** Check the troubleshooting section above or review the QUICK_START.md guide.
