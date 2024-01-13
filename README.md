## Streamlining Role-Based Access Control in Next.js with Descope and Auth.js: A Step-by-Step Guide

This is a [Next.js](https://nextjs.org/) project to demonstrate [Descope](https://www.descope.com/)'s capabilities as an auth provider, on top of Auth.js (next-auth) infrastructure.

This demo app represents the idea of an e-commerce B2C app. For demonstrating RBAC, any user can "buy" products, but only admins can edit products.

The data is saved in a `MongoDB` cluster.

### Branches

Make sure you have 2 branches there:

`main` for the app without auth processes

`auth` with Descope & Auth.js as RBAC auth is demonstrated there.

### Environment Variables

These env vars should be configured before getting stated.

You can find this structure on `env.example` file:

```bash
DESCOPE_ACCESS_KEY="<descope_access_key>"
DESCOPE_PROJECT_ID="<descope_project_id>"

MONGODB_URI="<mongo_db_URI>"
NEXTAUTH_SECRET="a secret to hash the JWT"
NEXTAUTH_URL="<on DEV env: http://localhost:3000>"
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, Descope, next-auth, visit this [blogpost](https://talmosko.hashnode.dev/preview/656d6cbcbe1891a538ca5e18)
