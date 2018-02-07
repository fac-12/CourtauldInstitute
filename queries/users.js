const db = require("../database/db_connection");

const checkUser = email =>
  db.query(
    `SELECT CASE WHEN EXISTS(SELECT email FROM users WHERE email = $1)
  THEN CAST (true AS BOOLEAN)
  ELSE CAST (false AS BOOLEAN) END`,
    [email]
  );

const addUser = data =>
  db.query(
    `INSERT INTO users (first_name, last_name, email, password, type) VALUES ($1, $2, $3, $4, $5) RETURNING id`,
    [data.first_name, data.last_name, data.email, data.password, data.typedata]
  );

const deleteUser = email =>
  db.query(`DELETE FROM users WHERE email = $1`, [email]);

const allUsers = () =>
  db.query(`SELECT id,first_name, last_name, picture_url FROM users`);

const oneUser = id => db.query(`SELECT * FROM users WHERE id = $1`, [id]);

const updateUser = data =>
  db.query(
    `UPDATE users SET first_name=$2, last_name=$3, email=$4, photo_url=$5, why_volunteer=$6, about_me = $7 WHERE id=$1 RETURNING *`,
    [
      data.id,
      data.first_name,
      data.last_name,
      data.email,
      data.photo_url,
      data.why_volunteer,
      data.about_me
    ]
  );
module.exports = {
  checkUser,
  addUser,
  deleteUser,
  allUsers,
  oneUser,
  updateUser
};
