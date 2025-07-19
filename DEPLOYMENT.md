# Cloudflare Pages Deployment Guide

## 🚀 Quick Deploy to Cloudflare Pages

### Step 1: Connect GitHub Repository
1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Click "Create a project"
3. Connect your GitHub account
4. Select the `techguardokc` repository

### Step 2: Configure Build Settings
Use these exact settings in Cloudflare Pages:

**Framework preset:** `Create React App`

**Build command:**
```bash
npm run build
```

**Build output directory:**
```
build
```

**Root directory:** 
```
/ (leave empty for root)
```

### Step 3: Environment Variables (if needed)
No environment variables are required for this build.

### Step 4: Deploy
Click "Save and Deploy" - your site will be live in 2-3 minutes!

## 🔧 Build Configuration

The site is pre-configured with:
- ✅ `_redirects` file for SPA routing
- ✅ Optimized React build
- ✅ Tailwind CSS production build
- ✅ All dependencies properly configured

## 🌐 Custom Domain Setup

After deployment, you can add a custom domain:
1. Go to your Cloudflare Pages project
2. Click "Custom domains"
3. Add your domain (e.g., `techguardokc.com`)
4. Follow Cloudflare's DNS setup instructions

## 📊 Performance Optimizations

The site includes:
- Optimized images and assets
- Minified CSS and JavaScript
- Gzip compression ready
- Fast loading animations
- Responsive design for all devices

## 🔄 Automatic Deployments

Once connected, Cloudflare Pages will automatically deploy:
- ✅ Every push to the `main` branch
- ✅ Pull request previews
- ✅ Rollback capabilities

## 📞 Support

If you need help with deployment, contact:
- **Email**: hello@techguardokc.com
- **Phone**: (405) 555-TECH

---

Your TechGuard OKC website is ready for the world! 🌟