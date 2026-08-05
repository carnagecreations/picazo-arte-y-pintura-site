# Deployment Guide

## Quick Deploy to Render (Free)

1. Go to [Render.com](https://render.com)
2. Sign up or log in with GitHub
3. Click "New +" → "Web Service"
4. Connect your GitHub repository: `carnagecreations/picazo-arte-y-pintura-site`
5. Choose the "picazo-site" service (it will auto-detect the render.yaml)
6. Click "Deploy"
7. Wait 2-3 minutes for deployment to complete

Your site will be live at: `https://picazo-site.onrender.com` (or similar)

## Deploy to Railway (Alternative)

1. Go to [Railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select the `picazo-arte-y-pintura-site` repo
5. Railway will auto-detect it's a Node.js app
6. Set `ADMIN_PASSWORD` environment variable (default: `picazo2024`)
7. Click "Deploy"

Your site will be live at the Railway-provided URL.

## Environment Variables

You can customize the admin password by setting:
- `ADMIN_PASSWORD` — Default is `picazo2024`

On Render: Add in Environment section
On Railway: Add in Variables section

## Local Development

```bash
npm install
npm start
```

Site runs at: `http://localhost:3000`
Admin dashboard: `http://localhost:3000/admin.html`

## Admin Dashboard

Login with password: `picazo2024` (or your custom `ADMIN_PASSWORD`)

From there you can:
- Add new gallery items with image uploads
- Edit existing items
- Delete items
- Manage hero slider images
