const FoodRepository = require('../repositories/FoodRepository');
const FoodEntity = require('../entities/FoodEntity');

class FoodService {
  constructor() {
    this.repository = new FoodRepository();
  }

  async getFood(id) {
    return this.repository.getById(id);
  }

  async getAllFoods() {
    return this.repository.getAll();
  }

  async createFood(data) {
    return this.repository.create(new FoodEntity(data));
  }

  async updateFood(id, data) {
    return this.repository.update(id, new FoodEntity({ id, ...data }));
  }

  async deleteFood(id) {
    return this.repository.delete(id);
  }
}

module.exports = FoodService;
