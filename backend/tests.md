# How to Test All Endpoints with cURL

This guide shows how to test every Food and Restaurant API endpoint using `curl` from your terminal.

---

## Restaurant Endpoints Test

```bash
curl -X POST http://localhost:3000/api/restaurants \
  -H "Content-Type: application/json" \
  -d '{"name":"Testaurant","address":"123 Main St"}'

curl http://localhost:3000/api/restaurants


curl -X PUT http://localhost:3000/api/restaurants/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated Name","address":"456 New Ave"}'


curl -X DELETE http://localhost:3000/api/restaurants/1

## Food Endpoints Test


curl -X POST http://localhost:3000/api/foods \
  -H "Content-Type: application/json" \
  -d '{"name":"Pizza","description":"Cheesy","price":12.5,"restaurant_id":1}'


curl http://localhost:3000/api/foods



curl -X PUT http://localhost:3000/api/foods/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Burger","description":"Juicy","price":10.0,"restaurant_id":1}'


curl -X DELETE http://localhost:3000/api/foods/1
```