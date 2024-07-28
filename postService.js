// postService.js
const pool = require('./db');

const addPost = async (userId, title, content) => {
  try {
    const res = await pool.query(
      'INSERT INTO posts (user_id, title, content) VALUES ($1, $2, $3) RETURNING *',
      [userId, title, content]
    );
    return res.rows[0];
  } catch (err) {
    console.error("Error adding post:", err);
    throw err;
  }
};

module.exports = { addPost };
