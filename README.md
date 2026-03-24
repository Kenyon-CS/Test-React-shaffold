# Full-Stack Web App Scaffold

This scaffold includes:

- `client/` — React frontend built with Vite
- `server/` — Node.js + Express backend
- Sample API route: `GET /api/hello`

## Run locally

### 1. Install dependencies

In one terminal:

```bash
cd server
npm install
```

In a second terminal:

```bash
cd client
npm install
```

### 2. Start the backend

```bash
cd server
npm run dev
```

The backend runs on `http://localhost:5000`.

### 3. Start the frontend

```bash
cd client
npm run dev
```

The frontend runs on `http://localhost:5173`.

The Vite dev server proxies `/api` requests to the Express backend.

## Build the frontend

```bash
cd client
npm run build
```
