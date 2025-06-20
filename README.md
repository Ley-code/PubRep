# Express.js Food & Restaurant API

This project implements a RESTful API for managing Food and Restaurant entities using Express.js and PostgreSQL. It follows clean architecture (entities, repositories, services, schemas, routes).

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Set your PostgreSQL connection string in `.env`:
   ```env
   DATABASE_URL=your_postgres_url
   PORT=3000
   ```
3. Ensure your database has `foods` and `restaurants` tables.

## Running the Server

```bash
npm run dev
```

## API Endpoints

- `POST /api/foods` — Create food
- `GET /api/foods` — List foods
- `PUT /api/foods/:id` — Update food
- `DELETE /api/foods/:id` — Delete food
- `POST /api/restaurants` — Create restaurant
- `GET /api/restaurants` — List restaurants
- `PUT /api/restaurants/:id` — Update restaurant
- `DELETE /api/restaurants/:id` — Delete restaurant

## Validation & Error Handling
- All input is validated with Joi.
- Errors return clear messages and appropriate HTTP status codes.
