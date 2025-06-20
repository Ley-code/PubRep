const Joi = require('joi');

const FoodOutputSchema = Joi.object({
  id: Joi.number().integer().required(),
  name: Joi.string().required(),
  description: Joi.string().allow(null, ''),
  price: Joi.number().required(),
  restaurant_id: Joi.number().integer().required(),
});

const RestaurantOutputSchema = Joi.object({
  id: Joi.number().integer().required(),
  name: Joi.string().required(),
  address: Joi.string().allow(null, ''),
});

module.exports = { FoodOutputSchema, RestaurantOutputSchema };
