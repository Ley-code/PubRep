const RestaurantRepository = require('../repositories/RestaurantRepository');
const RestaurantEntity = require('../entities/RestaurantEntity');

class RestaurantService {
  constructor() {
    this.repository = new RestaurantRepository();
  }

  async getRestaurant(id) {
    return this.repository.getById(id);
  }

  async getAllRestaurants() {
    return this.repository.getAll();
  }

  async createRestaurant(data) {
    return this.repository.create(new RestaurantEntity(data));
  }

  async updateRestaurant(id, data) {
    return this.repository.update(id, new RestaurantEntity({ id, ...data }));
  }

  async deleteRestaurant(id) {
    return this.repository.delete(id);
  }
}

module.exports = RestaurantService;
