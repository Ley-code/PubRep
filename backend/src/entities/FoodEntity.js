class FoodEntity {
  constructor({ id, name, description, price, restaurant_id }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.restaurant_id = restaurant_id;
  }
}

module.exports = FoodEntity;
