const pool = require('../config/db');
const RestaurantEntity = require('../entities/RestaurantEntity');

class RestaurantRepository {
  async getById(id) {
    const { rows } = await pool.query('SELECT * FROM restaurants WHERE id = $1', [id]);
    return rows[0] ? new RestaurantEntity(rows[0]) : null;
  }

  async getAll() {
    const { rows } = await pool.query('SELECT * FROM restaurants');
    return rows.map(row => new RestaurantEntity(row));
  }

  async create(restaurant) {
    const { name, address } = restaurant;
    const { rows } = await pool.query(
      'INSERT INTO restaurants (name, address) VALUES ($1, $2) RETURNING *',
      [name, address]
    );
    return new RestaurantEntity(rows[0]);
  }

  async update(id, restaurant) {
    const { name, address } = restaurant;
    const { rows } = await pool.query(
      'UPDATE restaurants SET name = $1, address = $2 WHERE id = $3 RETURNING *',
      [name, address, id]
    );
    return rows[0] ? new RestaurantEntity(rows[0]) : null;
  }

  async delete(id) {
    const { rowCount } = await pool.query('DELETE FROM restaurants WHERE id = $1', [id]);
    return rowCount > 0;
  }
}

module.exports = RestaurantRepository;
