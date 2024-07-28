// userService.js
const pool = require('./db');

const addUser = async (name, email, password) => {
  try {
    const res = await pool.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [name, email, password]
    );
    return res.rows[0];
  } catch (err) {
    console.error("Error adding user:", err);
    throw err;
  }
};

module.exports = { addUser };
