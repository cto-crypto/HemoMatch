# HemoMatch Deployment Guide

This guide explains how to deploy HemoMatch to Hostinger or any other Node.js hosting environment.

## Option 1: Standard Node.js Hosting (Recommended)

If your hosting (like Hostinger) supports running Node.js commands:

1.  **Upload Source Code:** Upload all files from the project (except `node_modules` and `.next`).
2.  **Install Dependencies:** Run `npm install` in your hosting's terminal or via their Node.js dashboard.
3.  **Build the App:** Run `npm run build`.
4.  **Start the App:** Run `npm run start`.
5.  **Port Configuration:** Ensure your hosting is configured to route traffic to the port Next.js is running on (default is 3000).

## Option 2: Static Export (If Node.js is not supported)

If you only have static file hosting (no Node.js server):

1.  **Modify `next.config.ts`:** Change `output: 'standalone'` to `output: 'export'`.
2.  **Build Locally:** Run `npm run build` on your local machine.
3.  **Upload `out` Folder:** Upload the contents of the generated `out` folder to your hosting's public directory.
    *Note: Some features like server-side rendering or dynamic routes won't work in this mode, but HemoMatch is designed to be client-side first.*

## Troubleshooting

### Urdu Font Not Loading
If Urdu text looks like standard Arabic or generic sans-serif:
- Ensure you have an active internet connection (fonts are loaded via Google Fonts).
- Check if your hosting has any CSP (Content Security Policy) blocking external fonts.

### "Module Not Found" Errors
If you see errors about missing modules during build:
- Ensure you ran `npm install` before `npm run build`.
- Check if your hosting's Node.js version is 18 or higher.
