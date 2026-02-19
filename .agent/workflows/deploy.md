---
description: How to deploy the tsgabrielle® Next.js storefront to Vercel production
---

# tsgabrielle® — Complete Deployment Guide 🚀

This workflow guides you from local code to live production at [tsg-mauve.vercel.app](https://tsg-mauve.vercel.app/).

**Stack:** Next.js 16 · Prisma 7 · Supabase · Vercel · Google OAuth · PayPal

---

## Phase 1 — Local Pre-flight Check ✅

Verify the project builds cleanly before pushing to production.

### Step 1: Install dependencies

```powershell
npm install
```

### Step 2: Generate the Prisma client

```powershell
npx prisma generate
```

### Step 3: Test the production build locally

```powershell
npx next build
```

> ✅ Fix any TypeScript or ESLint errors before proceeding. The build must pass 100%.

### Step 4: (Optional) Run the dev server for a final visual check

```powershell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to verify collections, cart, and auth work as expected.

---

## Phase 2 — Environment Variables 🔑

All secrets must be configured in **both** your local `.env` and the **Vercel Dashboard** before deploying.

Navigate to: **[Vercel Dashboard → tsg project → Settings → Environment Variables](https://vercel.com/gabrielles-projects-451a3298/tsg/settings/environment-variables)**

Add the following variables for **Production**, **Preview**, and **Development** environments:

| Variable | Where to get it |
|---|---|
| `DATABASE_URL` | Supabase → Project → Settings → Database → Connection String |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase → Project → Settings → API → Project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase → Project → Settings → API → anon public key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase → Project → Settings → API → service_role key |
| `GOOGLE_CLIENT_ID` | [Google Cloud Console](https://console.cloud.google.com/) → Credentials |
| `GOOGLE_CLIENT_SECRET` | Google Cloud Console → Credentials |
| `NEXTAUTH_URL` | Set to your production URL: `https://tsg-mauve.vercel.app` |
| `NEXTAUTH_SECRET` | Any secure random string (32+ chars). Use: `openssl rand -base64 32` |
| `ADMIN_EMAIL` | Your admin email: `yridoutt@gmail.com` |

> ⚠️ **CRITICAL**: `NEXTAUTH_URL` must be `https://tsg-mauve.vercel.app` in production, NOT `http://localhost:3000`.

---

## Phase 3 — Google OAuth Production Setup 🔐

Your Google OAuth was configured for `localhost`. You must add the production URL.

1. Go to [Google Cloud Console](https://console.cloud.google.com/) → Your Project → APIs & Services → Credentials.
2. Click your OAuth 2.0 Client ID.
3. Under **Authorized redirect URIs**, add:

   ```
   https://tsg-mauve.vercel.app/api/auth/callback/google
   ```

4. Under **Authorized JavaScript origins**, add:

   ```
   https://tsg-mauve.vercel.app
   ```

5. Click **Save**.

---

## Phase 4 — Push to GitHub & Auto-Deploy 🐙

Vercel auto-deploys on every push to main. This is the standard flow:

### Step 1: Stage your changes

```powershell
git add -A
```

### Step 2: Commit with a descriptive message

```powershell
git commit -m "feat: universal collection immersion — 14 drops live"
```

### Step 3: Push to GitHub (triggers auto-deploy)

```powershell
git push origin main
```

> ⚡ Vercel will automatically pick up the push and run: `npx prisma generate && next build`

---

## Phase 5 — Manual Deploy via Vercel CLI (Alternative) 🛠️

If you prefer a manual deploy or need to push without GitHub:

### Step 1: Run Vercel in a command prompt (not PowerShell — scripts are disabled)

Open **Command Prompt (`cmd.exe`)** and navigate to your project:

```cmd
cd C:\Users\ChrisWork\Documents\tsg-us
```

### Step 2: Deploy to production

```cmd
npx vercel --prod
```

> 💡 You must use `cmd.exe` (not PowerShell) due to Windows execution policy restrictions.

---

## Phase 6 — Post-Deploy Verification 🧪

After deployment completes (usually 2-3 minutes):

1. **Visit the live site**: [https://tsg-mauve.vercel.app](https://tsg-mauve.vercel.app)
2. **Check all 14 collection pages** load correctly (e.g., `/collections/peach-phoenix`, `/collections/womanizer`)
3. **Test Google OAuth sign-in** — should redirect correctly and create a user session.
4. **Test the cart** — add products, remove products, verify totals.
5. **Test admin access** — log in as `yridoutt@gmail.com` and verify `/admin` is accessible.
6. **Check the Vercel deployment logs** for any runtime errors: Vercel Dashboard → tsg → Deployments → View Logs.

---

## Troubleshooting 🔧

| Issue | Fix |
|---|---|
| Build fails with Prisma error | Run `npx prisma generate` locally first, then push |
| Google Sign-In fails on production | Verify the redirect URI is in Google Cloud Console |
| 500 error on collection pages | Check Supabase env vars are set in Vercel dashboard |
| `NEXTAUTH_SECRET` error | Ensure it's set in Vercel environment variables |
| `npx` not running in PowerShell | Use `cmd.exe` instead |
