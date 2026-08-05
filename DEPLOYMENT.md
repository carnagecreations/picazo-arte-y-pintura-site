# Deployment Guide — Cloudflare Pages

## Deploy to Cloudflare Pages

If you already have a Cloudflare Pages project set up:

1. **Connect your GitHub repo** (if not already connected):
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Pages → Create project → Connect Git
   - Select `carnagecreations/picazo-arte-y-pintura-site`

2. **Set build settings:**
   - Build command: (leave blank)
   - Build output directory: `/`
   - Root directory: `/`

3. **Deploy:**
   - Push to `master` branch — it will auto-deploy
   - Or trigger manual redeploy in Cloudflare Pages dashboard

4. **Your site is live at:** `https://picazo-site.pages.dev` (or your custom domain)

## Updating the Admin Password

The admin password is currently hardcoded as `picazo2024` in `functions/api/auth.ts`.

To change it:
1. Edit `functions/api/auth.ts` — change `picazo2024` to your new password
2. Commit and push to GitHub
3. Cloudflare Pages will auto-redeploy

## Local Development

```bash
npm install
npm start
```

Site runs at: `http://localhost:3000`
Admin dashboard: `http://localhost:3000/admin.html`

## Admin Dashboard

- URL: `yourdomain.com/admin.html`
- Password: `picazo2024`
- Can add new gallery items (currently with existing images)
- Can edit/delete items
- Can manage hero slider images
