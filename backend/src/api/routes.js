const express = require('express');
const Joi = require('joi');
const FoodService = require('../services/FoodService');
const RestaurantService = require('../services/RestaurantService');
const { FoodInputSchema, RestaurantInputSchema } = require('../schemas/input');
const { log } = require('../config/db');

const router = express.Router();
const foodService = new FoodService();
const restaurantService = new RestaurantService();

// Food Endpoints
router.post('/foods', async (req, res) => {
  log(`POST /api/foods - body: ${JSON.stringify(req.body)}`);
  const { error } = FoodInputSchema.validate(req.body);
  if (error) {
    log(`400 Bad Request: ${error.details[0].message}`);
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
    const food = await foodService.createFood(req.body);
    log(`201 Created: ${JSON.stringify(food)}`);
    res.status(201).json(food);
  } catch (err) {
    log(`400 Error: ${err.message}`);
    res.status(400).json({ error: err.message });
  }
});

router.get('/foods', async (req, res) => {
  log('GET /api/foods');
  const foods = await foodService.getAllFoods();
  log(`200 OK: ${JSON.stringify(foods)}`);
  res.json(foods);
});

router.put('/foods/:id', async (req, res) => {
  log(`PUT /api/foods/${req.params.id} - body: ${JSON.stringify(req.body)}`);
  const { error } = FoodInputSchema.validate(req.body);
  if (error) {
    log(`400 Bad Request: ${error.details[0].message}`);
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
    const food = await foodService.updateFood(Number(req.params.id), req.body);
    if (!food) {
      log('404 Not Found');
      return res.status(404).json({ error: 'Food not found' });
    }
    log(`200 OK: ${JSON.stringify(food)}`);
    res.json(food);
  } catch (err) {
    log(`400 Error: ${err.message}`);
    res.status(400).json({ error: err.message });
  }
});

router.delete('/foods/:id', async (req, res) => {
  log(`DELETE /api/foods/${req.params.id}`);
  const deleted = await foodService.deleteFood(Number(req.params.id));
  if (!deleted) {
    log('404 Not Found');
    return res.status(404).json({ error: 'Food not found' });
  }
  log('204 No Content');
  res.status(204).send();
});

// Restaurant Endpoints
router.post('/restaurants', async (req, res) => {
  log(`POST /api/restaurants - body: ${JSON.stringify(req.body)}`);
  const { error } = RestaurantInputSchema.validate(req.body);
  if (error) {
    log(`400 Bad Request: ${error.details[0].message}`);
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
    const restaurant = await restaurantService.createRestaurant(req.body);
    log(`201 Created: ${JSON.stringify(restaurant)}`);
    res.status(201).json(restaurant);
  } catch (err) {
    log(`400 Error: ${err.message}`);
    res.status(400).json({ error: err.message });
  }
});

router.get('/restaurants', async (req, res) => {
  log('GET /api/restaurants');
  const restaurants = await restaurantService.getAllRestaurants();
  log(`200 OK: ${JSON.stringify(restaurants)}`);
  res.json(restaurants);
});

router.put('/restaurants/:id', async (req, res) => {
  log(`PUT /api/restaurants/${req.params.id} - body: ${JSON.stringify(req.body)}`);
  const { error } = RestaurantInputSchema.validate(req.body);
  if (error) {
    log(`400 Bad Request: ${error.details[0].message}`);
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
    const restaurant = await restaurantService.updateRestaurant(Number(req.params.id), req.body);
    if (!restaurant) {
      log('404 Not Found');
      return res.status(404).json({ error: 'Restaurant not found' });
    }
    log(`200 OK: ${JSON.stringify(restaurant)}`);
    res.json(restaurant);
  } catch (err) {
    log(`400 Error: ${err.message}`);
    res.status(400).json({ error: err.message });
  }
});

router.delete('/restaurants/:id', async (req, res) => {
  log(`DELETE /api/restaurants/${req.params.id}`);
  const deleted = await restaurantService.deleteRestaurant(Number(req.params.id));
  if (!deleted) {
    log('404 Not Found');
    return res.status(404).json({ error: 'Restaurant not found' });
  }
  log('204 No Content');
  res.status(204).send();
});

module.exports = router;
