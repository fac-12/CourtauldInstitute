const db = require("../database/db_connection");

const getDiscoveries = () =>
  db.query(
    `SELECT discoveries.id, discoveries.user_id, users.first_name, users.last_name, discoveries.datetime, discoveries.image_url, discoveries.content FROM discoveries, users WHERE users.id = discoveries.user_id GROUP BY discoveries.id, users.first_name, users.last_name`
  );

const addDiscovery = data =>
  db.query(
    `INSERT INTO discoveries (user_id, datetime, image_url, content) VALUES (data.user_id, data.datetime, data.image_url, data.content)`
  );

module.exports = { getDiscoveries };
