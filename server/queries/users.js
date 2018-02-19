const db = require("../database/db_connection");

const getUser = email =>
  db
    .query(`SELECT * FROM users WHERE email = $1`, [email])
    .then(res => res[0])
    .catch(err => console.log("check user err: ", err));

const addUser = data =>
  db.query(
    `INSERT INTO users (first_name, last_name, email, password, picture_url, type, pw_reset) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
    [
      data.first_name,
      data.last_name,
      data.email,
      data.password,
      data.picture_url,
      data.type,
      false
    ]
  );

const deleteUser = email =>
  db.query(`DELETE FROM users WHERE email = $1`, [email]);

const allUsers = () =>
  db.query(`SELECT id,first_name, last_name, picture_url, type FROM users`);

const oneUser = id =>
  db
    .query(`SELECT * FROM users WHERE id = $1`, [id])
    .then(res => res[0])
    .catch(err => console.log("one user query err: ", err));

const updatePassword = (id, pw) =>
  db.query(`UPDATE users SET password=$1, pw_reset=$2 WHERE id=$3`, [
    pw,
    true,
    id
  ]);

const updateUser = data =>
  db
    .query(
      `UPDATE users SET first_name=$2, last_name=$3, email=$4, why_volunteer=$5, about_me = $6 WHERE id=$1 RETURNING *`,
      [
        data.id,
        data.first_name,
        data.last_name,
        data.email,
        data.why_volunteer,
        data.about_me
      ]
    )
    .then(res => res[0])
    .catch(err => console.log("update user err: ", err));

module.exports = {
  getUser,
  addUser,
  deleteUser,
  allUsers,
  oneUser,
  updateUser,
  updatePassword
};
