const db = require("../database/db_connection");

const getDiscoveries = () =>
  db.query(
    `SELECT discoveries.user_id, users.first_name, users.last_name, discoveries.datetime, discoveries.image_url, discoveries.title, discoveries.content FROM discoveries, users WHERE users.id = discoveries.user_id GROUP BY discoveries.id, users.first_name, users.last_name`
  );

module.exports = { getDiscoveries };
