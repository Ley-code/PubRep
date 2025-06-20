const Joi = require('joi');

const FoodInputSchema = Joi.object({
  name: Joi.string().min(1).max(100).required(),
  description: Joi.string().max(255).allow(null, ''),
  price: Joi.number().greater(0).required(),
  restaurant_id: Joi.number().integer().required(),
});

const RestaurantInputSchema = Joi.object({
  name: Joi.string().min(1).max(100).required(),
  address: Joi.string().max(255).allow(null, ''),
});

module.exports = { FoodInputSchema, RestaurantInputSchema };
