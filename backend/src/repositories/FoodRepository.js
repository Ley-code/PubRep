const pool = require('../config/db');
const FoodEntity = require('../entities/FoodEntity');

class FoodRepository {
  async getById(id) {
    const { rows } = await pool.query('SELECT * FROM foods WHERE id = $1', [id]);
    return rows[0] ? new FoodEntity(rows[0]) : null;
  }

  async getAll() {
    const { rows } = await pool.query('SELECT * FROM foods');
    return rows.map(row => new FoodEntity(row));
  }

  async create(food) {
    const { name, description, price, restaurant_id } = food;
    const { rows } = await pool.query(
      'INSERT INTO foods (name, description, price, restaurant_id) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, description, price, restaurant_id]
    );
    return new FoodEntity(rows[0]);
  }

  async update(id, food) {
    const { name, description, price, restaurant_id } = food;
    const { rows } = await pool.query(
      'UPDATE foods SET name = $1, description = $2, price = $3, restaurant_id = $4 WHERE id = $5 RETURNING *',
      [name, description, price, restaurant_id, id]
    );
    return rows[0] ? new FoodEntity(rows[0]) : null;
  }

  async delete(id) {
    const { rowCount } = await pool.query('DELETE FROM foods WHERE id = $1', [id]);
    return rowCount > 0;
  }
}

module.exports = FoodRepository;
