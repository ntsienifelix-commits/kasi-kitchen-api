# Kasi Kitchen API

A REST API for 12 South African township dishes across 9 provinces. Built with Node.js + Express.

## Purpose of this API

This API was built to digitize and preserve South African township food culture (Kasi food).

**Why use it?**
1.  **Learning Resource:** For students learning to build REST APIs with real local data instead of generic todo apps.
2.  **Food App Prototype:** Developers can use it to build a real app - e.g., a menu app for a Kota shop, a delivery app, or a tourism app showing visitors what to eat in each province.
3.  **Culture Preservation:** It links dishes to their province of origin (e.g., Bunny Chow -> KZN, Gatsby -> Western Cape), so users understand the story behind the food.
4.  **Filtering & Discovery:** Users can filter by province, category (kota, braai, curry), spicy level, or search - making it easy to find what to eat based on taste or location.

**Example Use Case:** A tourist in Mbombela can call `GET /api/dishes/province/mpumalanga` to see local dishes, or `GET /api/dishes?spicy=false` for non-spicy options.

## Developers
- **Felix -** - Dishes API, Helpers, Server
    - Role: Backend Developer
    - GitHub: https://github.com/ntsienifelix-commits
    - Branch: `feature/dishes-api`
- **Botlhale** - Provinces API, Docs, Middleware, Config
    - Role: Backend Developer
    - GitHub: https://github.com/boitsheporamaswe-glitch
    - Branch: `feature/provinces-docs`

## Tech Stack
- Node.js, Express, dotenv, helmet, nodemon

## Setup
```bash
git clone <repo>
cd kasi-kitchen-api
npm install
echo "PORT=5000" > .env
npm run dev
# http://localhost:5000


🚀 *LIVE API:* https://kasi-kitchen-api.onrender.com/

## Endpoints to Test
- GET / - Home: https://kasi-kitchen-api.onrender.com/
- GET /api/dish - All dishes: https://kasi-kitchen-api.onrender.com/api/menu
- GET /api/menu/1 - Single item: https://kasi-kitchen-api.onrender.com/api/dish/1
- GET /api/provinces - Orders: https://kasi-kitchen-api.onrender.com/api/provinces
- GET /health - Health: https://kasi-kitchen-api.onrender.com/health

## GitHub Repo
https://github.com/ntsienifelix-commits/kasi-kitchen-api

## Tech Stack
- Node.js + Express
- Deployed on Render.com

## Developer
Felix Ntsieni
Student Project - Kasi Kitchen API

---
⚠️ Note: Free tier on Render sleeps after 15 mins. First request may take 30s to wake up. Please refresh.
