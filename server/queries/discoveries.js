const db = require("../database/db_connection");

const getDiscoveries = (count, skip) =>
  db
    .query(
      `SELECT discoveries.id, discoveries.user_id, users.first_name, users.last_name, discoveries.datetime, discoveries.image_url, discoveries.content FROM discoveries, users WHERE users.id = discoveries.user_id`
    )
    .then(res => res.slice(skip, count + skip))
    .catch(err => console.log(err));

const addDiscovery = data =>
  db
    .query(
      `INSERT INTO discoveries (user_id, datetime, image_url, content) VALUES ($1, $2, $3, $4) RETURNING *`,
      [data.user_id, data.datetime, data.image_url, data.content]
    )
    .then(res => {
      res[0].first_name = data.first_name;
      res[0].last_name = data.last_name;
      return res[0];
    })
    .catch(error => console.log(error));

module.exports = { getDiscoveries, addDiscovery };
