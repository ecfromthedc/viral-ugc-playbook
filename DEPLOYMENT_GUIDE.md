# Deployment Guide for GitHub Pages

## Quick Start

Your site is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

**Live URL:** https://ecfromthedc.github.io/viral-ugc-playbook/

---

## How It Works

### 1. Local Development
```bash
npm run dev
```
- Runs on http://localhost:3000
- Hot reload enabled
- No basePath applied (images at `/images/...`)

### 2. Build for Production
```bash
npm run build
```
- Creates static HTML in `/out` directory
- Applies basePath: `/viral-ugc-playbook`
- Optimizes assets and bundles
- Images referenced as `/viral-ugc-playbook/images/...`

### 3. Automatic Deployment

**Triggered by:** Push to `main` branch

**GitHub Actions Workflow:**
```yaml
1. Checkout repository
2. Setup Node.js 20
3. Install dependencies (npm ci)
4. Build site (npm run build with NODE_ENV=production)
5. Upload /out directory to GitHub Pages
6. Deploy to live site
```

**Workflow file:** `.github/workflows/deploy.yml`

---

## File Structure

```
viral-ugc-playbook/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/ui/
│   ├── Section.tsx         # Section wrapper component
│   ├── Card.tsx            # Card component
│   └── Button.tsx          # Button component
├── lib/
│   ├── utils.ts            # Utility functions (cn, getAssetPath)
│   └── design-tokens.ts    # Design system tokens
├── public/
│   ├── images/             # Static images
│   │   ├── analytics-365-days.jpg
│   │   └── analytics-28-days.jpg
│   └── .nojekyll           # Tells GitHub Pages not to use Jekyll
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── package.json            # Dependencies and scripts
```

---

## Critical Files Explained

### `next.config.ts`
```typescript
output: 'export'                    // Static HTML export
basePath: '/viral-ugc-playbook'     // GitHub Pages repository path
images: { unoptimized: true }       // Required for static export
```

### `lib/utils.ts` - `getAssetPath()`
```typescript
// Automatically adds basePath in production
getAssetPath('/images/photo.jpg')
// Dev:  /images/photo.jpg
// Prod: /viral-ugc-playbook/images/photo.jpg
```

### `public/` Directory
- Any file in `public/` is served as a static asset
- Access via `/images/file.jpg` in code (not `/public/images/`)
- Always use `getAssetPath()` for images in JSX

---

## Common Tasks

### Adding a New Image

1. **Add to public/images/**
   ```bash
   # Optimize first (recommended)
   sips -s format jpeg -s formatOptions 75 image.jpg --out public/images/image.jpg
   ```

2. **Reference in code**
   ```tsx
   <img
     src={getAssetPath("/images/image.jpg")}
     alt="Description"
     loading="lazy"
     decoding="async"
   />
   ```

3. **Build and deploy**
   ```bash
   npm run build  # Test locally
   git add public/images/image.jpg app/page.tsx
   git commit -m "Add new image"
   git push  # Auto-deploys
   ```

### Updating Content

1. **Edit app/page.tsx**
   ```tsx
   // Make your changes
   ```

2. **Test locally**
   ```bash
   npm run dev
   # Visit http://localhost:3000
   ```

3. **Build and verify**
   ```bash
   npm run build
   # Check out/index.html for correct paths
   ```

4. **Deploy**
   ```bash
   git add app/page.tsx
   git commit -m "Update content"
   git push
   ```

### Changing Styles

1. **Edit globals.css or components**
   ```css
   /* Tailwind utilities or custom CSS */
   ```

2. **Test changes**
   ```bash
   npm run dev
   ```

3. **Deploy**
   ```bash
   git add .
   git commit -m "Update styles"
   git push
   ```

---

## Troubleshooting

### Images Not Showing

**Problem:** Images work locally but not on GitHub Pages

**Solution:** Verify you're using `getAssetPath()`:
```tsx
// ✅ CORRECT
<img src={getAssetPath("/images/photo.jpg")} />

// ❌ WRONG
<img src="/images/photo.jpg" />
```

### Build Fails

**Check:**
```bash
npm run build
# Look for TypeScript or compilation errors
```

**Common issues:**
- Missing imports
- TypeScript type errors
- Syntax errors in JSX

### Deployment Not Updating

**Steps:**
1. Check GitHub Actions tab for workflow status
2. Verify build succeeded (green checkmark)
3. Wait 2-3 minutes for Pages to update
4. Hard refresh browser (Cmd+Shift+R / Ctrl+Shift+F5)
5. Check incognito/private window to bypass cache

### Wrong basePath

**Symptom:** Links work but images/styles broken

**Fix:** Check `next.config.ts`:
```typescript
basePath: isProd ? '/viral-ugc-playbook' : ''
// Must match GitHub repository name
```

---

## Performance Checklist

- [ ] Images compressed (target: <500KB per image)
- [ ] Lazy loading enabled (`loading="lazy"`)
- [ ] Alt text provided for all images
- [ ] Font optimization enabled (Next.js fonts)
- [ ] No console.logs in production (auto-removed)
- [ ] Build size reasonable (<5MB total)

---

## Deployment Verification

After pushing changes, verify:

1. **GitHub Actions Status**
   - Visit: https://github.com/ecfromthedc/viral-ugc-playbook/actions
   - Latest workflow should show ✅ green checkmark

2. **Live Site**
   - Visit: https://ecfromthedc.github.io/viral-ugc-playbook/
   - Hard refresh (Cmd+Shift+R)
   - Check images load correctly
   - Test on mobile device

3. **Browser Console**
   - Open DevTools (F12)
   - Check Console tab for errors
   - Check Network tab for 404s

---

## Emergency Rollback

If deployment breaks the site:

```bash
# Find last working commit
git log --oneline

# Revert to specific commit
git reset --hard <commit-hash>

# Force push (careful!)
git push --force

# Or create revert commit (safer)
git revert HEAD
git push
```

---

## Resources

- **Next.js Static Exports:** https://nextjs.org/docs/app/building-your-application/deploying/static-exports
- **GitHub Pages:** https://docs.github.com/en/pages
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Image Optimization:** https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading

---

## Support

For issues with:
- **Next.js build:** Check Next.js documentation
- **GitHub Actions:** Check workflow logs in Actions tab
- **GitHub Pages:** Check repository Settings > Pages

---

**Last Updated:** 2025-12-27
**Next.js Version:** 16.1.0
**Node Version:** 20.x
